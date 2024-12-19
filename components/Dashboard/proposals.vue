<template lang="pug">
    el-table(:data='proposals?.results' @current-change="handleCurrentChange" style='width: 100%;')
            
        el-table-column(type='selection' width='55')

        //- Freelancer
        el-table-column(label='Freelancer' width='250')
            template(#default='scope')
                .d-flex.gap-2
                    el-avatar(:size="43" style="background: #5F4175;" :src="scope?.row?.freelancer_details?.image ? scope?.row?.freelancer_details?.image : '' ") {{scope?.row?.freelancer_details?.image ? '' : scope?.row?.freelancer_details?.name[0] }}
                    .info.d-flex.flex-column
                        span {{scope?.row?.freelancer_details?.name}}
                        span(style="font-size: 12px;") # {{scope?.row?.freelancer_details?.id}}
        
        //- job title
        el-table-column(label='Job Title' width='240' show-overflow-tooltip='')
            template(#header)
                    div
                        el-dropdown(popper-class="py-2" trigger="click" v-if="true" )
                            ElButton(link) 
                                span Job Title
                                i(class="bi bi-arrow-down-short")
                            template(#dropdown)
                                .statusMenu                        
                                    el-dropdown-item.w-full(v-for="title in ['All', ...titles.job_titles]" class="font-medium  !text-[#1F1F21]"  @click="handleTitleChange(title)"  :key="title") {{title}} 
            template(#default='scope')
                p.py-1.px-2.my-auto.rounded-5(style="background-color: #D8F3F5; height: 100%; width: fit-content;") {{scope?.row?.job_details?.title}}

        //- status
        el-table-column(property='Status' label='Status')
            template(#default='scope')
                p.py-1.px-2.my-auto.rounded-5(style="background-color: #D8F3F5; height: 100%; width: fit-content;") {{scope?.row?.status}}
        
        //- price
        el-table-column(property='Price' label='Price')
            template(#default='scope') {{scope?.row?.price}}$

        //- created at
        el-table-column(property='Created at' label='Created at')
            template(#default='scope') {{formatDate(scope.row.createdAt)}}

        //- action
        el-table-column(property='Created at' label='Action')
            template(#default="scope")
                .d-flex.align-content-center.text-center.py-2(@click.stop)
                    el-dropdown(class="outline-outline-0" trigger="click" v-if="!scope?.row.isDeleted")
                        span(class="el-dropdown-link")
                            .toggle-icon.text-md
                                i(class="bi bi-three-dots-vertical")
                        template(#dropdown='')
                            el-dropdown-menu
                                el-dropdown-item(@click="navigateTo(`/workplace/${scope?.row?.id}`)" v-if="scope?.row?.status === 'accepted'")
                                    NuxtLink Preview
                                el-dropdown-item(@click="[acceptModel = true, currentSelectedApplicationId=scope?.row?.id, proposal=scope?.row]")
                                    NuxtLink Accept
                                el-dropdown-item(@click="[rejectModel = true, currentSelectedApplicationId=scope?.row?.id]")
                                    NuxtLink.text-danger.text-decoration-none Reject
    
    el-pagination.mt-2(layout="prev, pager, next" v-model:current-change="page" @current-change="handlePageChange" :page-size="7" :total="proposals?.count")
    
    ActionModel(v-if="acceptModel" @confirm="handleStatus(1)" v-model="acceptModel" title="Accept Offer" :description="`Are you sure you want to accept this offer ?`" confirmText="Accept Offer")
    ActionModel(v-if="rejectModel" @confirm="handleStatus(0)" v-model="rejectModel" title="Reject Offer" :description="`Are you sure you want to reject this offer ?`" confirmText="Reject Offer")
</template>

<script setup lang="ts">
import { userStore } from "@/store/auth";

const config = useRuntimeConfig();
const store = userStore();
const acceptModel = ref<boolean>(false);
const rejectModel = ref<boolean>(false);
const currentSelectedApplicationId = ref();
const page = ref<number>(1);
const role = ref<string>();
const proposal = ref();

console.log("current user -->", store.user);

const { data: titles } = useAsyncData("getJobsTitle", async () => {
  const res = await $fetch(`${config.public.API_BASE_URL}jobs/titles/`);
  return res;
});

const { data: proposals, error } = useAsyncData(
  "GetProposals",
  async () => {
    const res = await $fetch(
      `${config.public.API_BASE_URL}apply/1/?size=7&page=${page.value}&title=${
        role.value ? role.value : ""
      }`
    );

    return res;
  },
  { watch: [store, page, role] }
);

console.log("user proposals -->", proposals, error);

const handleStatus = async function (statusCode: number) {
  console.log(proposal)
  const { data, error } = await useAsyncData("changeOfferStatus", async () => {
    const res = await $fetch(
      `${config.public.API_BASE_URL}appllication/${currentSelectedApplicationId.value}/`,
      { method: "PUT", body: { pending: statusCode ? "accepted" : "rejected" } }
    );
    return res;
  });
};

const handlePageChange = function (newPage: number) {
  page.value = newPage;
};

const handleTitleChange = function (selectedRole: string) {
  console.log(selectedRole);
  if (selectedRole === "All") {
    role.value = "";
    return;
  }
  role.value = selectedRole;
};

const handleCurrentChange = function (details: any) {
  console.log(details);
  if (details.status === "accepted") {
    navigateTo(`/workplace/${details.id}`);
  }
};
</script>

<style scoped></style>

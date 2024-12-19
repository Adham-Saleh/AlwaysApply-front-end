<template lang="pug">
    .container.pt-5.pb-5
        .row
            h3 Your proposals
            p.text-muted Manage and handle proposals
            el-table.mt-3(:data='proposals?.results' @current-change="handleCurrentChange" style='width: 100%;')
                    
                    el-table-column(type='selection' width='55')
            
                    //- Freelancer
                    el-table-column(label='Freelancer' width='250')
                        template(#default='scope')
                            .d-flex.gap-2
                                el-avatar(:size="43" style="background: #5F4175;" :src="scope?.row?.company_details?.image ? scope?.row?.company_details?.image : '' ") {{scope?.row?.company_details?.image ? '' : scope?.row?.company_details?.name[0] }}
                                .info.d-flex.flex-column
                                    span {{scope?.row?.company_details?.name}}
                                    span(style="font-size: 12px;") # {{scope?.row?.company_details?.id}}
                    
                    //- job title
                    el-table-column(label='Job Title' width='240' show-overflow-tooltip='')
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

        el-pagination.mt-2(layout="prev, pager, next" v-model:current-change="page" @current-change="handlePageChange" :page-size="7" :total="proposals?.count")


</template>

<script setup lang="ts">
import { userStore } from "@/store/auth";

const route = useRoute();
const config = useRuntimeConfig();
const store = userStore();
const page = ref<number>(1);

const { data: proposals, error } = useAsyncData(
  "getFreelacnerProposals",
  async () => {
    const res = await $fetch(
      `${config.public.API_BASE_URL}apply/${store?.user?.id}/?size=7&page=${page.value}`
    );
    return res;
  },
  { watch: [store, page] }
);

const handlePageChange = function (newPage: number) {
  page.value = newPage;
};

const handleCurrentChange = function (details: any) {
  console.log(details);
  if (details.status === "accepted") {
    navigateTo(`/workplace/${details.id}`);
  }
};
</script>

<style scoped></style>

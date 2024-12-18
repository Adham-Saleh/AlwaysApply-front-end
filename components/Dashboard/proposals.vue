<template lang="pug">
    el-table(:data='proposals?.results' style='width: 100%;')
            
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
            template(#default='scope')
                p.py-1.px-2.my-auto.rounded-5(style="background-color: #D8F3F5; height: 100%; width: fit-content;") {{scope.row.jobTitle}}

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
                                el-dropdown-item(@click="[acceptModel = true]")
                                    NuxtLink Accept
                                el-dropdown-item(@click="[rejectModel = true]")
                                    NuxtLink.text-danger.text-decoration-none Reject

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

const { data: proposals, error } = useAsyncData(
  "GetProposals",
  async () => {
    const res = await $fetch(
      `${config.public.API_BASE_URL}apply/${store?.user?.id}/?size=7`
    );

    return res;
  },
  { watch: store }
);

console.log("user proposals -->", proposals, error);

const handleStatus = async function (statusCode: number) {
  const { data, error } = await useAsyncData("changeOfferStatus", async () => {
    const res = await $fetch(
      `${config.public.API_BASE_URL}application/${currentSelectedApplicationId}`,
      { method: "PUT", body: { pending: statusCode ? "accepted" : "rejected" } }
    );
    return res;
  });
};
</script>

<style scoped></style>

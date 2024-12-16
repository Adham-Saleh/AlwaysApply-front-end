<template lang="pug">
    //- pre {{tableData}}
    el-table(:data='jobs' style='width: 100%;')
                
        el-table-column(type='selection' width='55')

        //- Freelancer
        el-table-column(label='Freelancer' width='250')
            template(#default='scope')
                .d-flex.gap-2
                    //- el-avatar(:size="43")
                    .info.d-flex.flex-column
                        span 
                         | # {{scope.row.id}}
                        span(style="font-size: 12px;") {{scope.row.location}}
        
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
                                el-dropdown-item.w-full(v-for="role in ['front-end', 'back-end']" class="font-medium  !text-[#1F1F21]"  @click="console.log('role clicked')"  :key="role") {{role}}
            template(#default='scope')
                p.py-1.px-2.my-auto.rounded-5(style="background-color: #D8F3F5; height: 100%; width: fit-content;") {{scope.row.title}}

        //- status
        el-table-column(property='Status' label='Status')
            template(#header)
                div
                    el-dropdown(popper-class="py-2" trigger="click" v-if="true" )
                        ElButton(link) 
                            | Status
                            i(class="bi bi-arrow-down-short")
                        template(#dropdown)
                            .statusMenu                        
                                el-dropdown-item.w-full(v-for="status in ['Enabled', 'Disabled']" class="font-medium  !text-[#1F1F21]"  @click="console.log('role clicked')"  :key="status") {{status}}
            template(#default='scope')
                p.py-1.px-2.my-auto.rounded-5(style="background-color: #D8F3F5; height: 100%; width: fit-content;") {{scope.row.isActive ? 'Enabled': 'Disabled'}}
        
        //- price
        el-table-column(property='Price' label='Price')
            template(#default='scope') 200$

        //- created at
        el-table-column(property='Created at' label='Created at' :sortable="true" prop="CREATED")
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
                                el-dropdown-item
                                    NuxtLink Preview
                                el-dropdown-item
                                    NuxtLink Edit
                                el-dropdown-item
                                    NuxtLink Delete
                                el-dropdown-item
                                    NuxtLink disable
</template>

<script setup lang="ts">
import { userStore } from "@/store/auth";

const store = userStore();
const config = useRuntimeConfig();

const tableData = [
  {
    freelancer: "Adham saleh",
    jobTitle: "Front-end dev",
    location: "Damietta, Egypt",
  },
];

const { data: jobs, error } = await useAsyncData("getCompanyJobs", async () => {
  const res = await $fetch(
    `${config.public.API_BASE_URL}companies/${store?.user?.id}/jobs`
  );
  return res;
});

console.log(jobs, error);
</script>

<style scoped></style>

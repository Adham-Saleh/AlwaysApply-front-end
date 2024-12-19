<template lang="pug">
    el-table(:data='jobs?.results?.jobs' :loading="pending" @current-change="handleRowClick" style='width: 100%;')
                
        el-table-column(type='selection' width='55')

        //- Freelancer
        el-table-column(label='Job ID' width='250')
            template(#default='scope')
                .d-flex.gap-2
                    //- el-avatar(:size="43")
                    .info.d-flex.flex-column
                        span 
                         | # {{scope.row?.id}}
                        span(style="font-size: 12px;") {{scope.row?.location}}
        
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
                p.py-1.px-2.my-auto.rounded-5(style="background-color: #D8F3F5; height: 100%; width: fit-content;") {{scope.row?.title}}

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
            template(#default='scope') {{scope?.row?.price}}$

        //- created at
        el-table-column(property='Created at' label='Created at' :sortable="true" prop="CREATED")
            template(#default='scope') {{formatDate(scope.row?.createdAt)}}

        //- action
        el-table-column(property='Created at' label='Action')
            template(#default="scope")
                .d-flex.align-content-center.text-center.py-2(@click.stop)
                    el-dropdown(class="outline-outline-0" trigger="click")
                        span(class="el-dropdown-link")
                            .toggle-icon.text-md
                                i(class="bi bi-three-dots-vertical")
                        template(#dropdown='')
                            el-dropdown-menu
                                el-dropdown-item
                                    NuxtLink.text-decoration-none.text-muted(:to="`/dashboard/jobs/${scope?.row?.id}`") Preview
                                el-dropdown-item
                                    NuxtLink.text-decoration-none.text-muted(:to="`/dashboard/jobs/edit_${scope?.row?.id}`") Edit
                                el-dropdown-item(@click="[deleteJobModel=true, currentSelectedJob = scope?.row?.id]")
                                    NuxtLink Delete
                                el-dropdown-item(@click="[disableJobModel=true, currentSelectedJob = scope?.row?.id, isActive=scope?.row?.isActive]")
                                    NuxtLink {{scope?.row?.isActive ? 'Disable' : 'Enable'}}
    
    el-pagination.mt-2(layout="prev, pager, next" v-model:current-change="page" @current-change="handlePageChange" :page-size="7" :total="jobs?.count")
    
    ActionModel(v-if="deleteJobModel" @confirm="handleDelete" v-model="deleteJobModel" title="Delete Job" :description="`Are you sure you want to delete this job #${currentSelectedJob} ?`" confirmText="Delete Job")
    ActionModel(v-if="disableJobModel" @confirm="handleDisable" v-model="disableJobModel" title="Disable Job" :description="`Are you sure you want to disable this job #${currentSelectedJob} ?`" confirmText="Disable Job")
</template>

<script setup lang="ts">
import { userStore } from "@/store/auth";

const store = userStore();
const config = useRuntimeConfig();
const loading = ref<boolean>(false);
const deleteJobModel = ref<boolean>(false);
const disableJobModel = ref<boolean>(false);
const currentSelectedJob = ref<number>();
const isActive = ref<boolean>();
const page = ref<number>(1);
const role = ref<string>();

const {
  data: jobs,
  error,
  refresh,
} = useAsyncData(
  "getSingleCompanyJobs",
  async () => {
    const res = await $fetch(
      `${config.public.API_BASE_URL}companies/${
        store?.user?.id
      }/jobs/?size=7&page=${page.value}&title=${role.value ? role.value : ""}`
    );
    return res;
  },
  { watch: [store, page, role] }
);

const { data: titles } = useAsyncData("getJobsTitle", async () => {
  const res = await $fetch(`${config.public.API_BASE_URL}jobs/titles/`);
  return res;
});

const handleRowClick = function (job: any) {
  navigateTo(`/dashboard/jobs/${job.id}`);
};

const handleDelete = async function () {
  const { data } = await useAsyncData("deleteJob", async () => {
    const res = await $fetch(
      `${config.public.API_BASE_URL}jobs/${currentSelectedJob.value}/`,
      { method: "DELETE" }
    );
    return res;
  });
  await refresh();
  console.log("deleted data -->", data);
};

const handleDisable = async function () {
  const { data } = await useAsyncData("disableJob", async () => {
    const res = await $fetch(
      `${config.public.API_BASE_URL}jobs/${currentSelectedJob.value}/`,
      {
        method: "PUT",
        body: {
          isActive: !isActive.value,
        },
      }
    );
    return res;
  });
  await refresh();
  console.log("disabled data -->", data);
};

const handlePageChange = function (pageNumber: number) {
  page.value = pageNumber;
};

const handleTitleChange = function (selectedRole: string) {
  if (selectedRole === "All") {
    role.value = "";
    return;
  }
  role.value = selectedRole;
};
</script>

<style scoped></style>

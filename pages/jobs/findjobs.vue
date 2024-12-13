<template lang="pug">
    .container.pt-5.pb-5
        h3 Job  Search
        p.text-muted Search for your desired job matching your skills
        //- .row.bg-light.p-3.rounded
        //-     .col-lg-4
        //-         input.form-control.border-0.bg-light(placeholder="Search for jobs")
        //-     .col-lg-2
        //-         button.btn.btn-success Search
        .row.mt-5(v-if="true")
            .col-lg-3
                h4 Filter
                .row
                    span Salary
                    .col-lg-6
                        input.form-control(placeholder="Min")
                    .col-lg-6
                        input.mt-2.mt-md-0.form-control(placeholder="Max")
                el-divider
            .col-lg-9
                h4 All Jobs ({{jobs?.length}})
                .row.p-3
                    input.form-control.rounded-5(placeholder="Search for jobs")
                .row.mt-3.bg-light.p-3.rounded(style="cursor:pointer" v-for="job in jobs?.results" :key="job?.id")
                    NuxtLink.text-decoration-none.text-black(:to="`/jobs/${job?.id}`")
                        JobsCard(:data="job")
                .row.justify-content-center.mt-5
                    button.btn.btn-success.rounded-5.w-25 Load more
        .row.mt-5(v-else)
            h1.text-center No available jobs
</template>

<script lang="ts" setup>
const loading = ref<boolean>(false);

const { data: jobs, error } = useAsyncData("getJobs", async () => {
  const res = await $fetch("http://127.0.0.1:8000/jobs/");

  return res;
});
</script>

<style scoped>
.form-control {
  box-shadow: none;
}
</style>

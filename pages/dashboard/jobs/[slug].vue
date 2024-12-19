<template lang="pug">
    .container.d-flex.justify-content-center.pt-5.pb-5
        .row.border.rounded-5.p-3
            .col
                .action.d-flex.justify-content-end
                    NuxtLink.text-decoration-none.text-black(:to="`/dashboard/jobs/edit_${slug}`") 
                        i.cursor-pointer(class="bi bi-pen")
                .job-details
                    .job-title
                        p.m-0 Job Title
                        p.fw-bold {{job?.title}}
                    .job-description
                        p.m-0 Job Description
                        p.fw-bold {{job?.description.slice(0, 50)}}..
                    .job-created-at
                        p.m-0 Created At
                        p.fw-bold {{formatDate(job?.createdAt)}}
                    .job-more-info.d-flex.justify-content-between.w-50
                        .price
                            p.m-0 Price
                            p.fw-bold 20$
                        .level
                            p.m-0 Level
                            p.fw-bold {{job?.level}}





</template>

<script setup lang="ts">
const route = useRoute();
const config = useRuntimeConfig();
const slug = route.params.slug;

const { data: job, error } = useAsyncData("getSingleJob", async () => {
  const res = await $fetch(`${config.public.API_BASE_URL}jobs/${slug}`);
  return res;
});
</script>

<style scoped></style>

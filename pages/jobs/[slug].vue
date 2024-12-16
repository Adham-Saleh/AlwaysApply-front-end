<template lang="pug">
    .container.pt-5.pb-5
        .row
            .col-lg-9
                h3 {{job?.title}}
                .d-flex.gap-5.mt-4
                    span.text-muted {{job?.createdAt}} 
                    .location.algin-items-center.gap-3.text-muted
                        i(class="bi bi-geo-alt")
                        span {{job?.location}}
                span Make sure to read description and requirements carefully
                el-divider
                .requirements
                    h4 Description
                    p {{job?.description}}
                    h4 Requirements
                    ul
                        li Vue js
                        li Nuxt js
                        li networking basic knowlage
                el-divider
                .finance-and-level
                    .d-flex.justify-content-around
                        .price.d-block
                            span  {{job?.price || '0' }}$
                            br
                            span.text-muted(style="font-size: 12px") Fixed Price
                        .level
                            span {{job?.level?.at(0)?.toUpperCase() + job?.level?.slice(1, job?.level?.length)}} level
                            br
                            span.text-muted(style="font-size: 12px") I am looking for a freelancer with the lowest rate
                el-divider 
                .skills.d-none.d-md-block
                    .col.skills-list.d-flex.algin-items-center.gap-2
                        span.py-1.px-2.rounded-5.border.border-black(v-for="i in ['vue', 'nuxt', 'javascript', 'problem solving', 'Django']")  {{i}}
            .col-lg-3.mt-3.mt-lg-0
                .row
                    NuxtLink.btn.btn-success.rounded-4(:to="`/jobs/apply/${job?.id}`") Apply Now
                .row.mt-3
                    button.btn.btn-outline-success.rounded-4.algin-center
                        i.me-3(class="bi bi-heart")
                        span Save job
                .row.mt-3.d-flex
                    span About the client
                    span.text-muted {{job?.user_details?.location || 'Damietta, Egypt'}}
                    span.text-muted 2:15 PM
                    .companyProfile.d-flex.algin-items-center.mt-3
                        el-avatar.mt-1.me-2(:size="35" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png")
                        .d-block
                            span.fw-bold {{job?.user_details?.name}}
                            p.text-success(style="font-size: 12px;") {{job?.user_details?.rating || '+100 Positive'}}
</template>

<script setup lang="ts">
const route = useRoute();
const config = useRuntimeConfig();
const slug = route.params.slug;

const { data: job, error } = useAsyncData("getJobs", async () => {
  const res = await $fetch(`${config.public.API_BASE_URL}jobs/${slug}`);

  return res;
});
</script>

<style scoped></style>

<template lang="pug">
    .container.pt-5
        .row.custom-bg
            .col-lg-6.my-auto
                h1 Find a job that aligns with your interests and skills
                p.mb-5 Thousands of jobs in all the leading sector are waiting for you.
                .row.shadow.border.p-4.rounded-2.align-items-center.m-1.m-md-0
                    .col-lg-4.d-flex.align-items-center
                        i(class="bi bi-search")
                        input.border-0.form-control(placeholder="Search")
                    .col-lg-4.mt-2.mt-lg-0.d-flex.align-items-center
                        i(class="bi bi-geo-alt")
                        input.border-0.form-control(placeholder="Location")
                    .col-lg-4.text-end.mt-2.mt-lg-0
                        button.btn.btn-success.w-100.h-100.py-3 Find Job
                .row.mt-3
                    p.text-muted Suggetions: UI/UX designer, front-end engineer, Digital marketing, Vedio, Animation etc..
            .col-lg-6.text-center.d-none.d-md-block
                img.img-fluid(src="../assets/image.png" style="max-width: 500px")
        .row
            landingPageFeatureJobs




</template>

<script setup></script>

<style scoped>
.form-control {
  box-shadow: none;
}
</style>

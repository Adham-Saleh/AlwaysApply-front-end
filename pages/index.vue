<template lang="pug">
    NavBar
    .container.pt-5
        .row
            .col-lg-6.my-auto
                h1 Find a job that aligns with your interests and skills
                p.mb-5 Thousands of jobs in all the leading sector are waiting for you.
                .row.shadow.border.p-4.rounded-2.align-items-center.m-1.m-md-0
                    .col-lg-4.d-flex.align-items-center
                        i(class="bi bi-search")
                        input.border-0.form-control(placeholder="Search")
                    .col-lg-4.mt-2.mt-lg-0.d-flex.align-items-center
                        i(class="bi bi-geo-alt")
                        input.border-0.form-control(placeholder="Locaton")
                    .col-lg-4.text-end.mt-2.mt-lg-0
                        button.btn.btn-success.w-100.h-100 Find Job
                .row.mt-3
                    p.text-muted Suggetions: UI/UX designer, front-end engineer, Digital marketing, Vedio, Animation etc..
            .col-lg-6.text-center.d-none.d-md-block
                img.img-fluid(src="../assets/image.png" style="max-width: 500px")
        
    .container.pt-5.mt-5
        .row.text-center.align-items-center
            h2 Featured Jobs
            p.text-muted Choose jobs from the top employers and apply for the same.
        
        .row.justify-content-center.gap-3.mt-5
            .col-lg-3
                .container.rounded.p-3(style="background: #F8F2FC;")
                    .row
                        .fw-bold.d-flex.justify-content-between
                            span Technical Support Specialist
                            i(class="bi bi-bookmark")
                    .row
                        .text-bold.d-flex.align-items-center.gap-2
                            .bg-success.rounded.text-white
                                span(style="font-size: 12px; padding: 3px;") Part-time
                            //- span(style="font-size: 14px;") Salary: 20,000 INR - 25,000 INR
                    .row.mt-4
                        .logo-container.d-flex.gap-2.text-muted.align-items-center
                            .logo
                                img(src="../assets/google.png" style="max-width: 40px;")
                            .logo-content
                                span Google Inc.
                                .location.algin-items-center.gap-2
                                    i(class="bi bi-geo-alt")
                                    span New Delhi, India
        
                    .row.mt-3
                        .div.d-flex.align-content-center.gap-2
                            .div
                                el-avatar(src="" size="small")
                                el-avatar(src="" size="small" style="margin-left: -10px")
                                el-avatar(src="" size="small" style="margin-left: -10px")
                            span 10+ applicants
                    
                    .row.mt-3
                        .d-flex.gap-2
                            button.btn.btn-outline-success.w-100.w-md-auto View Details
                            button.btn.btn-success.w-100.w-md-auto Apply Now
            .col-lg-3
                .container.rounded.p-3(style="background: #F8F2FC;")
                    .row
                        .fw-bold.d-flex.justify-content-between
                            span Technical Support Specialist
                            i(class="bi bi-bookmark")
                    .row
                        .text-bold.d-flex.align-items-center.gap-2
                            .bg-success.rounded.text-white
                                span(style="font-size: 12px; padding: 3px;") Part-time
                            //- span(style="font-size: 14px;") Salary: 20,000 INR - 25,000 INR
                    .row.mt-4
                        .logo-container.d-flex.gap-2.text-muted.align-items-center
                            .logo
                                img(src="../assets/google.png" style="max-width: 40px;")
                            .logo-content
                                span Google Inc.
                                .location.algin-items-center.gap-2
                                    i(class="bi bi-geo-alt")
                                    span New Delhi, India
        
                    .row.mt-3
                        .div.d-flex.align-content-center.gap-2
                            .div
                                el-avatar(src="" size="small")
                                el-avatar(src="" size="small" style="margin-left: -10px")
                                el-avatar(src="" size="small" style="margin-left: -10px")
                            span 10+ applicants
                    
                    .row.mt-3
                        .d-flex.gap-2
                            button.btn.btn-outline-success.w-100.w-md-auto View Details
                            button.btn.btn-success.w-100.w-md-auto Apply Now
            .col-lg-3
                .container.rounded.p-3(style="background: #F8F2FC;")
                    .row
                        .fw-bold.d-flex.justify-content-between
                            span Technical Support Specialist
                            i(class="bi bi-bookmark")
                    .row
                        .text-bold.d-flex.align-items-center.gap-2
                            .bg-success.rounded.text-white
                                span(style="font-size: 12px; padding: 3px;") Part-time
                            //- span(style="font-size: 14px;") Salary: 20,000 INR - 25,000 INR
                    .row.mt-4
                        .logo-container.d-flex.gap-2.text-muted.align-items-center
                            .logo
                                img(src="../assets/google.png" style="max-width: 40px;")
                            .logo-content
                                span Google Inc.
                                .location.algin-items-center.gap-2
                                    i(class="bi bi-geo-alt")
                                    span New Delhi, India
        
                    .row.mt-3
                        .div.d-flex.align-content-center.gap-2
                            .div
                                el-avatar(src="" size="small")
                                el-avatar(src="" size="small" style="margin-left: -10px")
                                el-avatar(src="" size="small" style="margin-left: -10px")
                            span 10+ applicants
                    
                    .row.mt-3
                        .d-flex.gap-2
                            button.btn.btn-outline-success.w-100.w-md-auto View Details
                            button.btn.btn-success.w-100.w-md-auto Apply Now




</template>

<script setup></script>

<style scoped>
.form-control {
    box-shadow: none;
}
</style>

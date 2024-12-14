<template lang="pug">
    .container.pt-5.mt-5
        .row.text-center.align-items-center
            h2 Featured Jobs
            p.text-muted Choose jobs from the top employers and apply for the same.
        .row.mt-5
            .col-lg-4(v-for="card,idx in cards" :key="card.title")
                .container.rounded.p-3.border(style="background: #F8F2FC;")
                    .row
                        .fw-bold.d-flex.justify-content-between
                            span {{card.title}}
                            i(class="bi bi-bookmark")
                    .row.mt-1
                        .text-bold.d-flex.align-items-center.gap-2
                            span.py-1.px-2.my-auto.rounded-5(style="background-color: #D8F3F5; font-size: 12px; width: fit-content;") {{card.time}}
                            span.py-1.px-2.my-auto.rounded-5(style="background-color: #D8F3F5; font-size: 12px; width: fit-content;") Entry
                    .row.mt-4
                        .logo-container.d-flex.gap-2.text-muted.align-items-center
                            .logo
                                img(src=`../../assets/1.png` style="max-width: 40px;")
                            .logo-content
                                span {{card.company}}
                                .location.algin-items-center.gap-2
                                    i(class="bi bi-geo-alt")
                                    span {{card.location}}
                    .row.mt-3
                        .div.d-flex.align-content-center.gap-2
                            .div
                                el-avatar(src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" size="small")
                                el-avatar(src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" size="small" style="margin-left: -10px")
                                el-avatar(src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" size="small" style="margin-left: -10px")
                            span {{card.applicants}} applicants
                    .row.mt-3
                        .d-flex.gap-2
                            button.btn.btn-outline-success.w-100.w-md-auto View Details
                            button.btn.btn-success.w-100.w-md-auto Apply Now
        .row.mt-3
            NuxtLink.text-center.fw-bolder(to="/jobs/findjobs" class="font-size: 24px;") View All
        
        .row.mt-5
            el-divider(content-position='center') Top companies hiring now
        .row.mt-2
            .col.d-block.d-md-flex.justify-content-between.text-center.text-md-start.p-5.custom-style
                //- pre {{`../../public/hiringCompanies/${i}.png`}}
                //- img(src=`../../public/hiringCompanies/${i}.png`)
                img.img-fluid.me-3.me-md-0(src="../../assets/hiringCompanies/1.png" style="max-width: 80px; object: contain;")
                img.img-fluid.me-3.me-md-0(src="../../assets/hiringCompanies/2.png" style="max-width: 80px; object: contain;")
                //- img.img-fluid.me-3.me-md-0(src="../../assets/hiringCompanies/3.png" style="max-width: 80px; object: contain;")
                img.img-fluid.me-3.me-md-0(src="../../assets/hiringCompanies/4.png" style="max-width: 80px; object: contain;")
                img.img-fluid.me-3.me-md-0(src="../../assets/hiringCompanies/5.png" style="max-width: 80px; object: contain;")

</template>

<script setup lang="ts">
const cards = [
  {
    title: "Technical Support Specialist",
    time: "PART-TIME",
    company: "Google Inc.",
    location: "New Delhi, India",
    applicants: "10+",
  },
  {
    title: "Senior UI/UX Designer",
    time: "Full-time",
    company: "Apple.",
    location: "Boston, USA",
    applicants: "9+",
  },
  {
    title: "Marketing Officer",
    time: "PART-TIME",
    company: "Intel Corp.",
    location: "Bangalore, India",
    applicants: "30+",
  },
];
</script>

<style lang="scss" scoped>
// .custom-style {
//     img {
//         aspect-ratio: 2 / 1;
//     }
// }

</style>

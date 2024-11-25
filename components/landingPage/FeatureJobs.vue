<template lang="pug">
    .container.pt-5.mt-5
        .row.text-center.align-items-center
            h2 Featured Jobs
            p.text-muted Choose jobs from the top employers and apply for the same.
        .row.justify-content-center.gap-3.mt-5
            .col-lg-3(v-for="card,idx in cards" :key="card.title")
                .container.rounded.p-3.border(style="background: #F8F2FC;")
                    .row
                        .fw-bold.d-flex.justify-content-between
                            span {{card.title}}
                            i(class="bi bi-bookmark")
                    .row
                        .text-bold.d-flex.align-items-center.gap-2
                            .bg-success.rounded.text-white
                                span(style="font-size: 12px; padding: 3px;") {{card.time}}
                            //- span(style="font-size: 14px;") Salary: 20,000 INR - 25,000 INR
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
                                el-avatar(src="" size="small")
                                el-avatar(src="" size="small" style="margin-left: -10px")
                                el-avatar(src="" size="small" style="margin-left: -10px")
                            span {{card.applicants}} applicants
                    .row.mt-3
                        .d-flex.gap-2
                            button.btn.btn-outline-success.w-100.w-md-auto View Details
                            button.btn.btn-success.w-100.w-md-auto Apply Now
        .row.mt-3
            a.text-center.fw-bolder(href="" class="font-size: 24px;") View All
        
        .row.mt-5
            el-divider(content-position='center') Top companies hiring now
        .row.mt-2
            .col.d-block.d-md-flex.justify-content-between.text-center.text-md-start.p-5
                //- pre {{`../../public/hiringCompanies/${i}.png`}}
                //- img(src=`../../public/hiringCompanies/${i}.png`)
                img.img-fluid.me-3.me-md-0(src="../../assets/hiringCompanies/1.png" style="max-width: 80px; object: contain;")
                img.img-fluid.me-3.me-md-0(src="../../assets/hiringCompanies/2.png" style="max-width: 80px; object: contain;")
                img.img-fluid.me-3.me-md-0(src="../../assets/hiringCompanies/3.png" style="max-width: 80px; object: contain;")
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

<style scoped></style>

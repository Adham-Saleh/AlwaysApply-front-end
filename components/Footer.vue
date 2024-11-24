<template lang="pug">
    .container-fluid.pt-5.pb-5.bg-light
        .container
            .row
                .col-lg-3
                    h4.mb-3
                        NuxtLink.text-decoration-none.text-black(to="/")
                            i.me-2(class="bi bi-search-heart")
                            | AlwaysApply
                    div
                        p.m-0.p-0(class="font-size: 18px;") Call now: +201110089669
                    div
                        p(class="font-size: 14px;") 456 Chandni Chowk Street, Near Red Fort, Old Delhi, New Delhi, Delhi 110006, India
                .col-lg-3(v-for="footerList in footerLists" :key="footerList.title")
                    ul
                        li.list-unstyled.mb-2.fw-bolder {{footerList.title}}
                        li.list-unstyled(v-for="item in footerList.content") 
                            NuxtLink.text-decoration-none.text-muted(to="/") {{item}}
            .row
                <el-divider />
            .row
                .d-block.d-lg-flex.justify-content-between
                    div
                        span &copy 2022 AlwaysApply - Job Portal. All rights Reserved
                    h4.d-flex.gap-3.mt-3.mt-lg-0
                        i(class="bi bi-facebook")
                        i(class="bi bi-youtube")
                        i(class="bi bi-instagram")
                        i(class="bi bi-twitter")
</template>

<script setup>
const footerLists = [
  {
    title: "Quick Link",
    content: ["About", "Contact", "Admin"],
  },
  {
    title: "Candidate",
    content: [
      "Browse Jobs",
      "Browse Employers",
      "Candidate Dashboard",
      "Saved Jobs",
    ],
  },
  {
    title: "Employers",
    content: [
      "Post a Job",
      "Browse Candidates",
      "Employers Dashboard",
      "Applications",
    ],
  },
];
</script>

<style lang="scss" scoped></style>

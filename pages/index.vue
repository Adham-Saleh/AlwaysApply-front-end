<template lang="pug">
    .container.pt-5
        .row.custom-bg
            .col-lg-6.my-auto
                h1(v-motion :initial ="initial" :enter="enter" :duration="1100") Find a job that aligns with your interests and skills
                p.mb-5(v-motion :initial ="initial" :enter="enter" :duration="1100") Thousands of jobs in all the leading sector are waiting for you.
                .row.shadow.border.p-4.rounded-2.align-items-center.m-1.m-md-0.rounded-5(v-motion :initial ="initial" :enter="enter" :duration="1100")
                    .col-lg-4.d-flex.align-items-center(v-motion :initial ="initial" :enter="enter" :duration="1100" :delay="200")
                        i(class="bi bi-search")
                        input.border-0.form-control(placeholder="Search")
                    .col-lg-4.mt-2.mt-lg-0.d-flex.align-items-center(v-motion :initial ="initial" :enter="enter" :duration="1100" :delay="300")
                        i(class="bi bi-geo-alt")
                        input.border-0.form-control(placeholder="Location")
                    .col-lg-4.text-end.mt-2.mt-lg-0(v-motion :initial ="initial" :enter="enter" :duration="1100" :delay="400")
                        button.btn.btn-success.w-100.h-100.py-3.rounded-5 Find Job
                .row.mt-3(v-motion :initial ="initial" :enter="enter" :duration="1200")
                    p.text-muted Suggetions: UI/UX designer, front-end engineer, Digital marketing, Vedio, Animation etc..
            .col-lg-6.text-center.d-none.d-md-block(v-motion :initial ="initial" :enter="enter" :duration="1100")
                img.img-fluid(src="../assets/image.png" style="max-width: 500px")
        .row(v-motion :visible="enter"  :initial ="initial" :enter="enter" :duration="1100")
            landingPageFeatureJobs
        .row(v-motion :initial ="initial" :visible="enter" :enter="enter" :duration="1100")
            landingPageReviews
        //- .row
            babsa




</template>

<script setup>
const initial = ref({
  y: 100,
  opacity: 0,
});

const enter = ref({
  y: 0,
  opacity: 1,
});
</script>

<style scoped>
.form-control {
  box-shadow: none;
}
</style>

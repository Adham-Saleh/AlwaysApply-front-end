<template lang="pug">
    .container.pt-5.pb-5
        .row.justify-content-center
            .header.text-center.pt-5.pb-5
                h3 Top rated
                p.text-muted Browse top rated and trusted users by AlwaysApply
            .col-lg-3.mt-3(v-for="i in 7" v-motion :initial="initial" :enter="enter" :duration="1100" :delay="((i+1) * 200)")
                .reviews.rounded-5.p-4.d-flex.align-content-center.border(style="background: #F8F2FC;")
                    .review
                        .user-info.d-flex.gap-2.align-items-center
                            el-avatar(:size="50" src="")
                            .user-details.d-block
                                p.m-0 Adham Saleh
                                p.m-0 Company
                        .review-rating.mt-2
                            i(class="bi bi-star-fill" style="color: orange;" v-for="i in 3").me-1
                            i(class="bi bi-star" style="outline: orange;" v-for="i in 5-3").me-1
                        .review-details
                            p.m-0 Very Good!
</template>

<script setup lang="ts">
const initial = ref({
  y: 100,
  opacity: 0,
});

const enter = ref({
  y: 0,
  opacity: 1,
});
</script>

<style scoped></style>

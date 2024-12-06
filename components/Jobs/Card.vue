<template lang="pug">
    .time
        span.text-muted(style="font-size: 12px;") posted 2m ago
        .logo-container.d-flex.gap-2.text-muted.align-items-center
            .logo
                img(src=`../../assets/1.png` style="max-width: 40px;")
            .logo-content
                span Google
                .location.algin-items-center.gap-3
                    i(class="bi bi-geo-alt")
                    span Damietta, Egypt
        .text-bold.d-flex.align-items-center.gap-2.mt-2
            .bg-success.rounded.text-white
                span(style="font-size: 12px; padding: 3px;") Full time
            .bg-success.rounded.text-white
                span(style="font-size: 12px; padding: 3px;") Intermediate
        .fw-light.mt-4
            span.fw-bolder Front-end Engineer
            p front end eng needed for shit in a shit his job is to push shit in shit and shut the shi shit front end eng needed for shit in a shit his job is to push shit in shit and shut the shi shitfront end eng needed for shit in a shit his job is to push shit in shit and shut the shi shit load more...
        .requirements.d-none.d-md-block
                .col.requirements-list.d-flex.algin-items-center.gap-2
                    span.py-1.px-2.rounded-5.border.border-success(v-for="i in ['vue', 'nuxt', 'javascript', 'problem solving', 'Django']")  {{i}}
        NuxtLink.btn.btn-success.w-25.rounded-5.mt-3(to="/jobs/apply") Apply now
</template>

<script setup lang="ts"></script>

<style scoped></style>

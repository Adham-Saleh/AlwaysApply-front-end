<template lang="pug">
    //- pre {{slug}}
    .container.pt-5.pb-5
        .row
            .col-lg-8
                h3 Front-end Engineer
                .d-flex.gap-5.mt-4
                    span.text-muted Posted 2m ago 
                    .location.algin-items-center.gap-3.text-muted
                        i(class="bi bi-geo-alt")
                        span Damietta, Egypt
                span Make sure to read description and requirements carefully
                el-divider
                .requirements
                    h4 Description
                    p front end eng needed for shit in a shit his job is to push shit in shit and shut the shi shit front end eng needed for shit in a shit his job is to push shit in shit and shut the shi shit front end eng needed for shit in a shit his job is to push shit in shit and shut the shi shit front end eng needed for shit in a shit his job is to push shit in shit and shut the shi shit front end eng needed for shit in a shit his job is to push shit in shit and shut the shi shitfront end eng needed for shit in a shit his job is to push shit in shit and shut the shi shit 
                    h4 Requirements
                    ul
                        li Vue js
                        li Nuxt js
                        li networking basic knowlage
                el-divider
                .finance-and-level
                    .d-flex.justify-content-around
                        .price.d-block
                            span 20$
                            br
                            span.text-muted(style="font-size: 12px") Fixed Price
                        .level
                            span Entry level
                            br
                            span.text-muted(style="font-size: 12px") I am looking for a freelancer with the lowest rate
                el-divider 
                .skills.d-none.d-md-block
                    .col.skills-list.d-flex.algin-items-center.gap-2
                        span.py-1.px-2.rounded-5.border.border-black(v-for="i in ['vue', 'nuxt', 'javascript', 'problem solving', 'Django']")  {{i}}
            .col-lg-4
</template>

<script setup lang="ts">

const route = useRoute()
const slug = route.params.slug

// send get request to get the data of the single job by slug 

</script>

<style scoped>

</style>
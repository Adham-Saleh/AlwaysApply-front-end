<template lang="pug">
    .container.pt-5.pb-5
        h3 Job  Search
        p.text-muted Search for your desired job matching your skills
        //- .row.bg-light.p-3.rounded
        //-     .col-lg-4
        //-         input.form-control.border-0.bg-light(placeholder="Search for jobs")
        //-     .col-lg-2
        //-         button.btn.btn-success Search
        .row.mt-5
            .col-lg-3
                h4 Filter
                .row
                    span Salary
                    .col-lg-6
                        input.form-control(placeholder="Min")
                    .col-lg-6
                        input.mt-2.mt-md-0.form-control(placeholder="Max")
                el-divider
            .col-lg-9
                h4 All Jobs (220)
                .row.p-3
                    input.form-control.rounded-5(placeholder="Search for jobs")
                .row.mt-3.bg-light.p-3.rounded.p-2.p-md-0(style="cursor:pointer" v-for="i in 3" :key="i")
                    JobsCard
                .row.justify-content-center.mt-5
                    button.btn.btn-success.rounded-5.w-25 Load more
</template>

<script lang="ts"></script>

<style scoped>
.form-control {
  box-shadow: none;
}
</style>

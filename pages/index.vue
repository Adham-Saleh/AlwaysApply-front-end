<template lang="pug">
    NavBar
    .container.pt-5
        .row
            .col-lg-6.my-auto
                h1 Find a job that aligns with your interests and skills
                p Thousands of jobs in all the leading sector are waiting for you.
                .row.shadow.border.p-4.rounded-2.align-items-center
                    .col-lg-4
                        input.border-0.form-control(placeholder="ad")
                    .col-lg-4
                        input.border-0.form-control(placeholder="ad")
                    .col-lg-4
                        button.btn.btn-success submit
            .col-lg-6.text-center
                img.img-fluid(src="../assets/image.png" style="max-width: 500px")


</template>

<script setup></script>

<style lang="scss" scoped></style>

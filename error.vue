<template lang="pug">
    .container.d-flex.mt-5.pt-5.align-items-center.justify-content-center
        .row
            .col.text-center
                img.img-fluid(src="./assets/error.jpg" style="max-width: 250px")
                h1 Page not found
                el-button.rounded-5.d-flex.align-content-center.mx-auto.mt-2(@click="navigateTo('/')")
                    i.me-1(class="bi bi-arrow-left")
                    | Go to home page
</template>

<script setup lang="ts"></script>

<style scoped></style>

<template lang="pug">
    .container.pt-5.pb-5
        .row.align-items-center.bg-light.rounded.shadow.p-5.justify-content-center
            h3 Registration form
            p.text-muted Register to apply for jobs of your choice all over the world
            pre {{fullName}}
            .col
                form
                    InputText(type="text" placeholder="Full name" label="Full name*" v-model="fullName" name="fullName")
                    InputText.mt-3(type="text" placeholder="Email" label="Email*" name="email")
                    InputText.mt-3(type="password" placeholder="Password" label="Password*" name="password")
                    InputText.mt-3(type="text" placeholder="Mobile Number" label="Mobile Number*" name="phone")
                    el-button.mt-3.mb-3(native-type="submit" style=" height: 45px;" type="success") Register Now
</template>

<script setup lang="ts">
const fullName = ref<string>("");
</script>

<style lang="scss" scoped></style>

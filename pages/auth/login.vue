<template lang="pug">
    .container.pt-5.pb-5
        .row.align-items-center.bg-light.rounded.shadow.p-5.justify-content-center
            .col-lg-4
                h3 Login to your account
                p.text-muted Welcome! back select the bellow login method
                form
                    InputText(type="text" placeholder="Email" label="Email")
                    InputText.mt-3(type="password" placeholder="Password" label="Password")
                    .forget-password.d-flex.justify-content-between
                        el-checkbox(v-model="checked1" label="Remember me" size="small")
                        NuxtLink.my-auto(to="/" style="font-size: 12px;") Forget password?
                    el-button.w-100.mt-3.mb-3(native-type="submit" style=" height: 56px;" type="success") Login
                    el-divider(content-position='center') or login with
                    .social-login

            .col-lg-4.text-center.d-none.d-md-block
                img.img-fluid(src="../../assets/authImage.png" style="max-width: 380px")
</template>

<script setup></script>

<style lang="scss" scoped></style>

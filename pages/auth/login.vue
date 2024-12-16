<template lang="pug">
    .container.pt-5.pb-5
        pre {{userStore?.user}}
        .row.align-items-center.bg-light.rounded.shadow.py-5.px-2.px-lg-5.py-lg-5.justify-content-center
            .col-lg-4
                h3 Login to your account
                p.text-muted Welcome! back select the bellow login method
                Form(:validationSchema="loginValidationSchema" @submit="onSubmit")
                    InputText(type="text" placeholder="Email" label="Email" name="email" v-model="email")
                    InputText.mt-3(type="password" placeholder="Password" label="Password" name="password" v-model="password")
                    .forget-password.d-flex.justify-content-between
                        el-checkbox(v-model="checked1" label="Remember me" size="small")
                        NuxtLink.my-auto(to="/" style="font-size: 12px;") Forget password?
                    el-button.w-100.mt-3.mb-3(native-type="submit" :loading="loading" style=" height: 56px;" type="success") Login
                    //- el-divider(content-position='center'): span.bg-light or login with
                    //- .social-login
                      .row
                        .col-lg-4(v-for="i in 3" :key="i").d-flex.justify-content-center
                          .card.text-center.p-2.w-50.cursor-pointer.rounded-5(@click="console.log('social-login')")
                            img(src="../../assets/1.png")
                    .register.mt-3
                      .row.text-center
                        p Don't have an account ? #[NuxtLink(to="/auth/register") Register] 

            .col-lg-4.text-center.d-none.d-md-block
                img.img-fluid(src="../../assets/authImage.png" style="max-width: 380px")
</template>

<script setup lang="ts">
import { object, string, number } from "yup";
import { userStore } from "@/store/auth";

const currentUserStore = userStore();
const email = ref<string>("");
const password = ref<string>("");
const checked1 = ref<boolean>(false);
const loading = ref<boolean>(false);

const loginValidationSchema = object({
  email: string()
    .email("Email must be valid")
    .required("Field is required")
    .label("Email"),
  password: string().required("Field is required").label("password"),
});

const onSubmit = async function (values: any) {
  loading.value = true;
  const { success, message, user } = await currentUserStore.login(values);
  if (success) {
    ElMessage({
      type: "success",
      message: message,
    });
    currentUserStore.setData(user, user?.jwt);
    currentUserStore.logged();
    navigateTo("/jobs/findjobs");
  } else {
    ElMessage({
      type: "error",
      message: message,
    });
  }
  loading.value = false;
  console.log("current user -->", currentUserStore);
};
</script>

<style lang="scss" scoped>
.el-divider {
  > * {
    background-color: #f8f9fa !important;
  }
}
</style>

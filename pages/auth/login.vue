<template lang="pug">
    .container.pt-5.pb-5
        .row.align-items-center.bg-light.rounded.shadow.p-5.justify-content-center
            .col-lg-4
                h3 Login to your account
                p.text-muted Welcome! back select the bellow login method
                pre {{email}} {{password}}
                Form(:validationSchema="loginValidationSchema" @submit="obSubmit")
                    InputText(type="text" placeholder="Email" label="Email" name="email" v-model="email")
                    InputText.mt-3(type="password" placeholder="Password" label="Password" name="password" v-model="password")
                    .forget-password.d-flex.justify-content-between
                        el-checkbox(v-model="checked1" label="Remember me" size="small")
                        NuxtLink.my-auto(to="/" style="font-size: 12px;") Forget password?
                    el-button.w-100.mt-3.mb-3(native-type="submit" style=" height: 56px;" type="success") Login
                    el-divider(content-position='center') or login with
                    .social-login

            .col-lg-4.text-center.d-none.d-md-block
                img.img-fluid(src="../../assets/authImage.png" style="max-width: 380px")
</template>

<script setup lang="ts">
import { object, string, number } from "yup";

const email = ref<string>("");
const password = ref<string>("");
const checked1 = ref<boolean>(false);

const loginValidationSchema = object({
  email: string()
    .email("Email must be valid")
    .required("Field is required")
    .label("Email"),
  password: string().required("Field is required").label("password"),
});

const obSubmit = async function (values: any) {
  // post request in localhost:8000/signup
  console.log("values -->", values);
  try {
    const { data, error } = await useAsyncData("userLogin", async () => {
      const res = await $fetch("http://127.0.0.1:8000/api/login", {
        method: "POST",
        body: {
          email: values.email,
          password: values.password,
        },
      });

      console.log("ma resopnse -->", res);
      return res;
    });
    if (error.value) throw new Error("Wrong email or password");

    ElMessage({
      type: "success",
      message: "Logged in successfully",
    });
    navigateTo("/jobs/findjobs");
  } catch (err: any) {
    ElMessage({
      type: "error",
      message: err.message,
    });
  }
};
</script>

<style lang="scss" scoped></style>

<template lang="pug">
    .container.pt-5.pb-5
        .row.align-items-center.bg-light.rounded.shadow.p-5.justify-content-center
            h3 Registration form
            p.text-muted Register to apply for jobs of your choice all over the world
            pre {{fullName}}
            .col
                Form(:validationSchema="rgistrationSchema" @submit="onSubmit")
                    InputText(type="text" placeholder="Full name" label="Full name*" name="fullName")
                    InputText.mt-3(type="text" placeholder="Email" label="Email*" name="email")
                    InputText.mt-3(type="password" placeholder="Password" label="Password*" name="password")
                    //- InputText.mt-3(type="text" placeholder="ٌRole" label="Role*" name="role")
                    el-button.mt-3.mb-3(native-type="submit" style=" height: 45px;" type="success") Register Now
</template>

<script setup lang="ts">
import { object, string, number } from "yup";

const specialChar = /[!@#$%^&*(),.?":{}|<>]/;
const capitalLetter = /[A-Z]/;
const phoneNumber = /^(010|011|012|015)[0-9]{8}$/;

const rgistrationSchema = object({
  fullName: string().required("Field is required").label("Full name"),
  email: string()
    .email("Email must be valid")
    .required("Field is required")
    .label("Email"),
  password: string()
    .required("Field is required")
    .min(8, "Password must be at least 8 characters")
    .matches(specialChar, "Password must contains at least one character")
    .matches(
      capitalLetter,
      "Password must contains at least one capital letter"
    ),
  // phone: string()
  //   .required("Field is required")
  //   .matches(
  //     phoneNumber,
  //     "Please enter a valid Egyption mobile number hint: conatins 11 digits starting with 010, 011. 012 or 015 "
  //   )
  //   .label("Mobile Number"),
});

const onSubmit = async function (values: any) {
  // post request in localhost:8000/signup
  console.log("values -->", values);
  try {
    const { data, error } = await useAsyncData("userRegistration", async () => {
      const res = await $fetch("http://127.0.0.1:8000/api/register", {
        method: "POST",
        body: {
          name: values.fullName,
          email: values.email,
          password: values.password,
          role: "company",
        },
      });

      console.log("ma resopnse -->", res);
      return res;
    });

    if (error.value) throw new Error("Cannot Sign up");

    ElMessage({
      type: "success",
      message: "Account created successfully",
    });
    navigateTo("/auth/login");
  } catch (err: any) {
    ElMessage({
      type: "error",
      message: err.message,
    });
  }
};
</script>

<style lang="scss" scoped></style>

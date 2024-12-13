<template lang="pug">
    .container.pt-5.pb-5
        .row.align-items-center.bg-light.rounded.shadow.p-5.justify-content-center
            h3 Registration form
            p.text-muted Register to apply for jobs of your choice all over the world
            pre {{fullName}}
            .col
                Form(:validationSchema="rgistrationSchema" @submit="onSubmit")
                    InputUploadFile(:name="profileImg" :limit="1" :formats="['jpeg', 'png', 'jpg']" label="Profile picture" @uploadedImage="handleImageUpload")
                    InputText.mt-2(type="text" placeholder="Full name" label="Full name*" name="fullName")
                    InputText.mt-3(type="text" placeholder="Email" label="Email*" name="email")
                    InputText.mt-3.mb-3(type="password" placeholder="Password" label="Password*" name="password")
                    //- InputText.mt-3(type="text" placeholder="ٌRole" label="Role*" name="role")
                    InputSelect(label="Role*" name="role" placeholder="Choose role" :options="['Company', 'Freelancer']")
                    el-button.mt-3.mb-3(native-type="submit" :loading="loading" style=" height: 45px;" type="success") Register Now
</template>

<script setup lang="ts">
import { object, string, number } from "yup";
import { userStore } from "@/store/auth";

const currentUserStore = userStore();
console.log(currentUserStore);
const specialChar = /[!@#$%^&*(),.?":{}|<>]/;
const capitalLetter = /[A-Z]/;
const phoneNumber = /^(010|011|012|015)[0-9]{8}$/;
const profilePicture = ref();
const loading = ref<boolean>(false);

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
  role: string().required("Field is required").label("Role"),
});

const onSubmit = async function (values: any) {
  loading.value = true;
  const { user, message, success } = await currentUserStore.register(
    values,
    profilePicture
  );

  if (success) {
    ElMessage({
      type: "success",
      message: message,
    });
    navigateTo("/auth/login");
  } else {
    const errors = Object.values(message).map((singleError: any) =>
      singleError.pop()
    );
    errors.forEach((error) => {
      ElMessage({
        type: "error",
        message: error,
      });
    });
  }
  loading.value = false;
};

const handleImageUpload = function (file: any) {
  profilePicture.value = file;
};
</script>

<style lang="scss" scoped></style>

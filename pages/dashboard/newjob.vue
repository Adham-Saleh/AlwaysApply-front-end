<template lang="pug">
    .container.pt-5.pb-5
        Form(:validationSchema="formSchema" @submit="onSubmit")
            .row
                h3 Create new job
                p.text-muted start posted jobs and interact with the most popular marketplace
                .col-lg-12
                    InputText.mt-2(label="title" placeholder="title" name="title")
                .col-lg-12
                    InputSelect.mt-2(label="Level" :options="['Entry', 'Intermediate', 'Advanced']" placeholder="Level" name="level")
                .col-lg-12
                    InputSelect.mt-2(label="Working mode" :options="['Full time', 'Part time']" placeholder="Working mode" name="workingMode")
                .col-lg-6
                    InputText.mt-2(type="number" placeholder="Price" label="Price" name="price")
                .col-lg-6
                    InputText.mt-2(type="text" placeholder="Location" label="Location" name="location")
                .col-lg-12
                    InputText.mt-2(type="textarea" label="Job description" name="description" placeholder="Breifily descripe you job")
            .endBar
                .col.d-flex.justify-content-end
                    el-button.rounded-5.px-5.py-4(type="primary") Cancel
                    el-button.rounded-5.px-5.py-4(type="success" native-type="submit") Post job
</template>

<script setup lang="ts">
import { object, string, number } from "yup";
import { userStore } from "@/store/auth";
import { Roles, WorkingModes, Levels } from "@/types/types";

const config = useRuntimeConfig();
const store = userStore();
const formSchema = object({
  title: string()
    .min(2, "Title must be at least 2 characters")
    .max(25, "Title must not exceed 2 characters")
    .required("Field is required")
    .label("Title"),
  level: string().required("Field is required").label("Select"),
  workingMode: string().required("Field is required").label("Working Mode"),
  price: string().required("Field is required").label("Price"),
  location: string().required("Field is required").label("Location"),
  description: string()
    .required("Field is required")
    .label("Job description")
    .max(1000, "Description cannot exceed 1000 characters"),
});

const onSubmit = async function (values: any) {
  const { data, error } = await useAsyncData("addJob", async () => {
    const res = $fetch(`${config.public.API_BASE_URL}jobs/`, {
      method: "POST",
      body: {
        user: store.user?.id,
        title: values.title,
        description: values.description,
        location: values.location,
        isActive: true,
        price: values.price,
        workingMode:
          values.workingMode === "Full time"
            ? WorkingModes.FULLTIME
            : WorkingModes.PARTTIME,
        level:
          values.level === "Entry"
            ? Levels.ENTRY
            : values.level === "INTERMEDIATE"
            ? Levels.INTERMEDIATE
            : Levels.ADVANCED,
      },
    });
    return res;
  });
  console.log("data -->", data);
  console.log("error -->", error);
  if (!error.value) {
    ElMessage({
      type: "success",
      message: `Job "${data?.value?.id}" added successfully`,
    });
    navigateTo("/dashboard/jobs");
  } else {
    ElMessage({
      type: "error",
      message: "Could not add job!",
    });
  }
};
</script>

<style lang="scss" scoped>
.endBar {
  position: fixed;
  bottom: 0;
  background-color: white;
  width: 100vw;
  display: flex;
  right: 0;
  border-top: 1px solid rgb(222, 222, 222);
  z-index: 2;
  & > * {
    padding: 1rem 3rem;
  }
}
</style>

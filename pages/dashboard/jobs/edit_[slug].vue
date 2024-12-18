<template lang="pug">
    .container.d-flex.justify-content-center.pt-5.pb-5
        .row.border.rounded-5.p-3.w-50
            .col
                Form(:validationSchema="updateSchema" @submit="onSubmit")
                    .action.d-flex.justify-content-end
                        //- i.cursor-pointer(class="bi bi-pen")
                    .job-details
                        .job-title
                            InputText(type="text" label="Job Title" :value="jobData?.title" placeholder="Job Title" name="jobTitle")
                        .job-description
                            InputText.my-2(type="textarea" label="Job Description" :value="jobData?.description" placeholder="Job Description" name="description")
                        .job-more-info.d-flex.justify-content-between
                            .price.w-50.me-2
                                InputText(type="number" label="Job Price" :value="jobData?.price" placeholder="Job Price" name="price")
                            .level.w-50
                                InputSelect.mt-2(label="Level" :value="jobData?.level" :options="['Entry', 'Intermediate', 'Advanced']" placeholder="Level" name="level")
                        .action-btns.mt-5
                            .d-flex.justify-content-end
                                el-button.rounded-5.px-5.py-4(type="primary") Cancel
                                el-button.rounded-5.px-5.py-4(type="success" native-type="submit") Update
</template>

<script setup lang="ts">
import { Roles, WorkingModes, Levels } from "@/types/types";
import { object, string, number } from "yup";

const config = useRuntimeConfig();
const route = useRoute();
const slug = route.params.slug;

const updateSchema = object({
  jobTitle: string()
    .min(2, "Title must be at least 2 characters")
    .max(25, "Title must not exceed 2 characters")
    .required("Field is required")
    .label("Title"),
  level: string().required("Field is required").label("Select"),
  price: string().required("Field is required").label("Price"),
  description: string()
    .required("Field is required")
    .label("Job description")
    .max(1000, "Description cannot exceed 1000 characters"),
});

const { data: jobData, error } = useAsyncData(
  `getJobDetials-${slug}`,
  async () => {
    const res = await $fetch(`${config.public.API_BASE_URL}jobs/${slug}`);
    return res;
  }
);

const onSubmit = async function (values: any) {
  const { data, error } = await useAsyncData("updateJob", async () => {
    const res = $fetch(`${config.public.API_BASE_URL}jobs/${slug}/`, {
      method: "PUT",
      body: {
        title: values.jobTitle,
        level: values.level,
        price: values.price,
        description: values.description,
      },
    });
    return res;
  });
  if (error.value) return;
  ElMessage({
    type: "success",
    message: `Job "${slug}" updated successfully`,
  });
  navigateTo("/dashboard/jobs/");
  console.log("updated data -->", data);
};
</script>

<style lang="scss" scoped></style>

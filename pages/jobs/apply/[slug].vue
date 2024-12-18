<template lang="pug">
    .container.pt-5.pb-5
        pre {{userStore?.user}}
        .row.border.rounded-4.p-4
            .job.d-flex.justify-content-between.align-items-center
                .job-info
                    //- pre {{job}}
                    h3 You are applying to #[span.text-muted {{slug}} ]
                    span {{job?.title}} role at {{job?.user_details?.name}}
                .job-action
                    el-button.px-5.py-4.rounded-5.d-none.d-md-flex(@click="navigateTo(`/jobs/${job?.id}`)") Job details 

        .row.justify-content-center.rounded-4.p-4.border.mt-3
            Form(:validationSchema="applyForm" @submit="onSubmit") 
                .row
                    .col-lg-6
                        InputSelect(label="Duration" name="duration" placeholder="selectDuration" :options="['More than 6 months', '1 to 3 months', 'less than a month']")
                    .col-lg-3
                        InputText(label="Due to" name="dueTo" placeholder="Due to" type="date")
                    .col-lg-3
                        InputText(label="Amount" placeholder="Amount" name="amount" type="number")
                .row.mt-2
                    InputText(label="Proposal" name="proposal" type="textarea")
                .row.mt-5
                    .endBar.d-flex.justify-content-end
                        .actions
                            el-button.rounded-5.px-5.py-4(@click="navigateTo('/')") Cancel
                            el-button.rounded-5.px-5.py-4(native-type="submit" type="success") Apply


</template>

<script setup lang="ts">
import { object, string, number } from "yup";
import { userStore } from "@/store/auth";

const route = useRoute();
const store = userStore();
const config = useRuntimeConfig();
const slug = route.params.slug;
const loading = ref<boolean>(false);

const applyForm = object({
  duration: string().required("Field is required").label("Duration"),
  amount: string().required("Field is required").label("Amount"),
  proposal: string()
    .required("Fiend is required")
    .max(1000, "Proposal cannot exceed 1000 charachter")
    .label("Proposal"),
  dueTo: string().required("Field is required").label("Due to"),
});

const { data: job, error } = useAsyncData("getJobs", async () => {
  const res = await $fetch(`${config.public.API_BASE_URL}jobs/${slug}`);

  return res;
});

const onSubmit = async function (values: any) {
  loading.value = true;
  const { data, error } = await useAsyncData("apply", async () => {
    const res = await $fetch(`${config.public.API_BASE_URL}apply/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: {
        job: job.value?.id,
        freelancer: store?.user?.id,
        company: job.value?.user_details?.id,
        proposal: values.proposal,
        price: values.amount,
        duration: 3,
        status: "pending",
        due_to: values.dueTo,
      },
    });
  });
  console.log("application -->", error);
  loading.value = false;
  if (error.value)
    return ElMessage({ type: "error", message: "Error encountered" });
  ElMessage({
    type: "success",
    message: `Cogrates! You have applied to job "${data.value?.job}" successfully`,
  });
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

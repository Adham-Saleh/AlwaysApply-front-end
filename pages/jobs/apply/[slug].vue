<template lang="pug">
    .container.pt-5.pb-5
        .row.border.rounded-4.p-4
            .job.d-flex.justify-content-between.align-items-center
                .job-info
                    h3 You are applying to #[span.text-muted {{slug}} ]
                    span Front-end role at Google inc
                .job-action
                    el-button.px-5.py-4.rounded-5.d-none.d-md-flex Job details 

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
                            el-button.rounded-5.px-5.py-4(type="success") Apply


</template>

<script setup lang="ts">
import { object, string, number } from "yup";
import { userStore } from "@/store/auth";

const onSubmit = function () {};
const route = useRoute();
const slug = route.params.slug;

const applyForm = object({
  email: string()
    .email("Email must be valid")
    .required("Field is required")
    .label("Email"),
  password: string().required("Field is required").label("password"),
});
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

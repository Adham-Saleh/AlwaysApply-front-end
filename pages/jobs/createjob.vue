<template lang="pug">
     .container.pt-5.pb-5
        .row.align-items-center.bg-light.rounded.shadow.p-5.justify-content-center
            h3 Post a job
            p.text-muted Find the best talent for your company
            pre {{fullName}}
            .col
                Form(:validationSchema="rgistrationSchema" @submit="obSubmit")
                    InputText(type="text" placeholder="Job title" label="Job title*" name="jobTitle")
                    InputText.mt-3(type="text" placeholder="Tags" label="Tags*" name="tags")
                    InputText.mt-3(type="text" placeholder="Job Role" label="Job Role*" name="jobRole")
                    .row
                        .col-lg-6
                            InputText.mt-3(type="text" placeholder="Min Salary" label="Min Salary*" name="minSalary")
                        .col-lg-6
                            InputText.mt-3(type="text" placeholder="Max Salary" label="Min Salary*" name="maxSalary")
                    InputText.mt-3(type="text" placeholder="Job Level" label="Job Level*" name="jobLevel")
                    .row
                        span.my-2.fw-bold Location
                        .col-lg-6
                            InputText(type="text" placeholder="City" label="City*" name="city")
                        .col-lg-6
                            InputText(type="text" placeholder="Country" label="Country*" name="country")
                    textarea.form-control.mt-3(rows="20")
                    el-button.mt-3.mb-3(native-type="submit" style=" height: 45px;" type="success") Post job
</template>

<script setup lang="ts"></script>

<style scoped></style>

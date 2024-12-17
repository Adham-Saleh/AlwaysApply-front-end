<template lang="pug">
    .container.pt-5.pb-5
        h3 Job  Search
        p.text-muted Search for your desired job matching your skills
        .row.mt-5(v-if="true")
            .col-lg-3
                h4 Filter
                //- .row
                    .col-lg-12
                        InputSelect.custom-style(label="Working mode" name="workingMode" :options="['Full time', 'Part time']")
                    .col-lg-12.mt-2
                        InputSelect.custom-style(label="Level" name="level" :options="['Entry', 'Intermediate', 'Advanced']")
                el-divider
            .col-lg-9
                h4 All Jobs ({{jobs?.results?.length}})
                .row.p-3
                    input.form-control.rounded-5.p-3(placeholder="Search for jobs" v-model="search")
                .row.mt-3.bg-light.p-3.rounded(style="cursor:pointer" v-for="job in jobs?.results" :key="job?.id" v-motion :initial ="initial" :enter="enter" :leave="initial" :duration="1000")
                    NuxtLink.text-decoration-none.text-black(:to="`/jobs/${job?.id}`")
                        JobsCard(:data="job")
                .row.justify-content-center.mt-5
                    el-button.btn.btn-success.rounded-5.w-25.py-4.px-3(@click="handleLoadMore" v-if="jobs?.next") Load more
                    el-button.btn.btn-success.rounded-5.w-25.py-4.px-3(@click="handleShowLess" v-else) Show less
        .row.mt-5(v-else)
            h1.text-center No available jobs
</template>

<script lang="ts" setup>
const loading = ref<boolean>(false);
const config = useRuntimeConfig();
const limit = ref<number>(3);
const search = ref<string>();
const initial = ref({
  y: 100,
  opacity: 0,
});

const enter = ref({
  y: 0,
  opacity: 1,
});

const { data: jobs, error } = useAsyncData(
  "getJobs",
  async () => {
    const res = await $fetch(
      `${config.public.API_BASE_URL}jobs/?size=${limit.value}&title=${
        search.value ? search.value : ""
      }`
    );

    return res;
  },
  { watch: [limit, search] }
);

const handleLoadMore = function () {
  limit.value += 3;
};

const handleShowLess = function () {
  limit.value = 3;
};
</script>

<style lang="scss" scoped>
.form-control {
  box-shadow: none;
}

// .custom-style {
//   .el-select__wrapper {
//     border-radius: 50px !important;
//   }
// //   .el-select--large {
// //     .el-select__wrapper {
// //       border-radius: 50px !important;
// //     }
// //   }
// }
</style>

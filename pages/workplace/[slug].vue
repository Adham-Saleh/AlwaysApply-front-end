<template lang="pug">
    .container.pt-5.pb-5
        .row
            .col-lg-12
                .status.p-4.rounded-5.border.d-flex.justify-content-between.align-items-center
                    .track
                        h3 Trace status
                        p.text-muted Freelancer is currently working on the project
                        p.py-1.px-2.my-auto.rounded-5(style="background-color: #D8F3F5; width: fit-content;") {{application?.status === 'completed' ? application?.status : "In progress..."}}
                        //- el-timeline.mt-5(style="max-width: 600px")
                        //-     el-timeline-item(v-for="(activity, index) in activities" :key="index" :timestamp="activity.timestamp") {{activity.content}}
                    .actions
                        el-button.px-3.py-4.rounded-5(type="success" @click="handleCompleteStatus" :loading="loading" v-if="store?.user?.role === 'freelancer' && application?.status ==='accepted'") Finalize Project
                        el-button.px-3.py-4.rounded-5(@click="[reviewModel = true]" v-if="application?.status ==='completed'") {{store?.user?.role === 'company' ? `Review freelancer` : `Review Company`}}
            .col-lg-6.mt-3
                .freelancer-details.rounded-5.p-4.border
                    h3 Freelancer details
                    .name.mt-3
                        .details.d-flex.gap-1.align-content-center
                            el-avatar.me-2(:size="50") A
                            .info
                                p.fw-bold.m-0 {{application?.freelancer_details?.name}}
                                p.text-muted.fw-bold # {{application?.freelancer_details?.id}}
                    .rating.mt-2
                        p.m-0 Freelancer rating
                        i(class="bi bi-star-fill" style="color: orange;" v-if="application?.freelancer_details?.rating").me-1
                        i(class="bi bi-star" style="outline: orange;" v-if="!application?.freelancer_details?.rating").me-1
                        span.fw-bold {{application?.freelancer_details?.rating ? application?.freelancer_details?.rating : 'No ratings yet'}}
                    .email.mt-2
                        p.m-0 Freelancer email
                        span.fw-bold {{application?.freelancer_details?.email}}
            .col-lg-6.mt-3
                .freelancer-details.rounded-5.p-4.border
                    h3 Company details
                    .name.mt-3
                        .details.d-flex.gap-1.align-content-center
                            el-avatar.me-2(:size="50") A
                            .info
                                p.fw-bold.m-0 {{application?.company_details?.name}}
                                p.text-muted.fw-bold # {{application?.company_details?.id}} 
                    .rating.mt-2
                        p.m-0 Freelancer rating
                        i(class="bi bi-star-fill" style="color: orange;" v-if="application?.freelancer_details?.rating").me-1
                        i(class="bi bi-star" style="outline: orange;" v-if="!application?.freelancer_details?.rating").me-1
                        span.fw-bold {{application?.company_details?.rating ? application?.company_details?.rating : 'No ratings yet'}}
                    .email.mt-2
                        p.m-0 Freelancer email
                        span.fw-bold {{application?.company_details?.email}}
            .col-lg-6.mt-3
                .freelancer-details.rounded-5.p-4.border
                    h3 Proposal details
                    .rating.mt-2
                        p.m-0 Porposal description
                        span.fw-bold {{application?.proposal.slice(0, 100)}}
                    .email.mt-2
                        p.m-0 Price
                        span.fw-bold {{application?.price}}$
                    .email.mt-2.d-flex.justify-content-between
                        .duration
                            p.m-0 Duration
                            span.fw-bold {{application?.duration}} MONTHS
                        .dueTo.me-5
                            p.m-0 Due to
                            span.fw-bold {{application?.dueTo || "25/15/2025"}}
                    .createdAt.mt-2
                        p.m-0 Created at
                        span.fw-bold {{formatDate(application?.createdAt)}}
                    .price.mt-2
                        p.m-0
                        span {{application?.price}}$
            .col-lg-6.mt-3
                .freelancer-details.rounded-5.p-4.border
                    h3 Job details
                    .rating.mt-2
                        p.m-0 Job title
                        span.fw-bold {{application?.job_details?.title}}
                    .email.mt-2
                        p.m-0 Job Description
                        span.fw-bold {{application?.job_details?.description}}
                    .email.mt-2
                        p.m-0 Location
                        span.fw-bold {{application?.job_details?.location}}
                    .tags
                        p.m-0 Tags
                        .tags-details.d-flex.gap-2.mt-1
                            p.py-1.px-2.my-auto.rounded-5.fw-bold(style="background-color: #D8F3F5; width: fit-content;") {{application?.job_details?.level}}
                            p.py-1.px-2.my-auto.rounded-5.fw-bold(style="background-color: #D8F3F5; width: fit-content;") {{application?.job_details?.workingMode}}
                    .price.mt-2
                        p.m-0
                        span {{application?.job_details?.price}}$


        ActionModel(v-if="reviewModel" type="review" @confirm="handleReview" v-model="reviewModel" title="Add review" description="Reviews are very important and affects both of your and others reputation in the market, please be careful and fare" confirmText="Add review")
    
</template>

<script setup lang="ts">
import { userStore } from "@/store/auth";

const store = userStore();
const config = useRuntimeConfig();
const route = useRoute();
const slug = route.params.slug;
const loading = ref<boolean>(false);
const reviewModel = ref<boolean>(false);

const {
  data: application,
  error,
  refresh,
} = useAsyncData("getApplication", async () => {
  const res = await $fetch(`${config.public.API_BASE_URL}appllication/${slug}`);
  return res;
});

const handleCompleteStatus = async function () {
  loading.value = true;
  const { data, error } = await useAsyncData("changeOfferStatus", async () => {
    const res = await $fetch(
      `${config.public.API_BASE_URL}appllication/${slug}/`,
      {
        method: "PUT",
        body: {
          status: "completed",
        },
      }
    );
    await refresh();
    return res;
  });
  loading.value = false;
};

const handleReview = async function (review: string) {
  const { data: userdata } = await useAsyncData("review", async () => {
    const res = await $fetch(
      `${config.public.API_BASE_URL}api/userList/${
        store?.user?.role === "company"
          ? application?.value?.freelancer_details?.id
          : application?.value?.company_details?.id
      }/`
    );
    return res;
  });

  const { data, error } = await useAsyncData("review", async () => {
    const res = await $fetch(
      `${config.public.API_BASE_URL}api/userList/${
        store?.user?.role === "company"
          ? application?.value?.freelancer_details?.id
          : application?.value?.company_details?.id
      }/`,
      {
        method: "PUT",
        body: { reviews: [review, ...userdata?.value?.user?.reviews] },
      }
    );
    return res;
  });
};
</script>

<style scoped></style>

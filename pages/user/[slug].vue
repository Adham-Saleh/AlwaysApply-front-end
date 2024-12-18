<template lang="pug">
    .container.pt-5.pb-5
        .row.border.p-3.rounded-4.align-items-center
            .col-lg-6
                .user-details.d-flex.gap-4
                    el-avatar.custom-avatar(:size="80" style="font-size: 35px" :src="store?.user?.image ? store?.user?.image : ''") {{store?.user?.image ? '' : store?.user?.name[0]}}
                    .user-info.my-auto
                        p.m-0.fw-bold {{store?.user?.name}}
                        p.m-0.text-muted {{store?.user?.email}}
                        p.m-0.text-muted 
                            i(class="bi bi-star-fill" v-if="store?.user?.rating" style="color: orange;").me-2
                            i(class="bi bi-star" v-else).me-2
                            span {{store?.user?.rating ? store?.user?.rating : 'No ratings yet'}}
            .col-lg-6.d-flex.justify-content-end
                el-button.py-4.px-3.rounded-5() View proposals
        .row.border.p-3.rounded-4.mt-2
            p.m-0.fw-bold Recent Activity
            .activity.text-center
                p No recent activity
        .row.border.p-3.rounded-4.mt-2
            p.m-0.fw-bold Rates
            .activity.text-center
                p No rates yet
</template>
<script setup lang="ts">
import { userStore } from "@/store/auth";

const store = userStore();
const route = useRoute();
const slug = route.params.slug;
</script>

<style lang="scss" scoped>
.custom-avatar {
  .p {
    transform: scale(1.2);
  }
}
</style>

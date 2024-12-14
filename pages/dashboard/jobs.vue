<template lang="pug">
    .container-fluid.pt-5.pb-5
        .row
            .col-lg-2
                el-menu.el-menu-vertical-demo(default-active='2' :collapse='isCollapse' @open='handleOpen' @close='handleClose')
                    el-menu-item(index='1')
                        template(#title='')
                            i.me-2(class="bi bi-award-fill")
                            span Jobs
            .col-lg-10
                .header.d-flex.justify-content-between.align-content-center
                  .content
                    h3 Dashboard
                    p.text-muted Manage you business fastly and safely
                  el-button.me-5.d-flex.align-content-center
                    i.me-1(class="bi bi-plus-lg") 
                    span(@click="navigateTo('/dashboard/newjob')") Add job
                el-tabs.demo-tabs(v-model='activeName' @tab-click='handleClick')
                    el-tab-pane(label='Job offers' name='jobs'): dashboardJobs
                    el-tab-pane(label='Proposals' name='proposals'): dashboardProposals
</template>

<script setup lang="ts">
import type { TabsPaneContext } from "element-plus";
import { userStore } from "@/store/auth";

const activeName = ref("jobs");
const store = userStore();
const menuItems = [
  {
    title: "Jobs",
    icon: "",
    submenu: [],
  },
];

onMounted(() => {
  ElNotification({
    title: "Welcome!",
    message: `Welcome Mr ${store.user?.name}, here is your dashboard to manage you business`,
    position: "bottom-right",
  });
});

const handleClick = (tab: TabsPaneContext, event: Event) => {
  activeName.value = tab;
};
</script>

<style lang="scss" scoped>
.el-menu {
  border: none;
}

// .el-sub-menu {
//   background: linear-gradient(90deg, #dcb8f6 11%, #e2ccf2 100%);
//   border-radius: 10px !important;

//   > * {
//     height: 42px;
//   }
//   &:hover {
//     background: rgb(132, 132, 132);
//   }
// }

.el-menu {
  --el-menu-item-height: 45px !important;
  --el-menu-sub-item-height: 45px !important;
  .el-menu-item,
  .el-sub-menu__title {
    margin-bottom: 8px;
    border-radius: 10px;
    font-weight: 400;
    line-height: 140%;
  }
  .el-menu-item.is-active {
    background: linear-gradient(90deg, #dcb8f6 11%, #e2ccf2 100%);
    font-weight: 500;
    color: black;
  }
}

</style>

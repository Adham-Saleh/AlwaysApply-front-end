<template lang="pug">
    nav.navbar.navbar-expand-lg.bg-body-tertiary.header
        .container.p-2
            NuxtLink.navbar-brand(to="/")
                i.me-2(class="bi bi-search-heart")
                | AlwaysApply
            button.navbar-toggler(type='button' data-bs-toggle='collapse' data-bs-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation')
                span.navbar-toggler-icon
            #navbarSupportedContent.collapse.navbar-collapse
                ul.navbar-nav.me-auto.mb-2.mb-lg-0.ms-auto.gap-3(style="font-size: 14px")
                    li.nav-item
                        NuxtLink.nav-link(aria-current='page' to="/") Home
                    li.nav-item
                        NuxtLink.nav-link(to="/jobs/findjobs") Find jobs
                    li.nav-item(v-if="store.user?.role === 'company'")
                        NuxtLink.nav-link(to='/dashboard/jobs') Company
                    li.nav-item
                        NuxtLink.nav-link(to="/about") About us
                form.d-flex.gap-2(role='search')
                    NuxtLink.btn.btn-outline-success.py-2.px-4(to="/auth/register" v-if="!store?.isLoggedIn" type='submit') Sign up
                    NuxtLink.btn.btn-success.py-2.px-4(to="/auth/login" type='submit' v-if="!store?.isLoggedIn" ) Login

                    .user-avatar.d-flex.align-items-center(v-else)

                        el-dropdown
                            el-avatar.el-dropdown-link(:size="43" style="background: #5F4175;" :src="`${store.user?.image ? store.user.image : ''}`").me-2 {{store.user?.image ? '' : store?.user?.name[0]}}
                            template(#dropdown)
                                el-dropdown-menu
                                    el-dropdown-item(@click="handleUserLogout" :disabled="true")
                                            .d-flex.algin-content-center.justify-content-center.gap-1
                                                span {{store?.user.email}}
                                    el-dropdown-item(v-for="item in profileMenu")
                                        NuxtLink.text-decoration-none.text-black(:to="item.link")
                                            .d-flex.algin-content-center.justify-content-center.gap-1
                                                h5
                                                    i(:class="item.icon")
                                                span {{item.name}}
                                    el-divider.p-0.m-0
                                    el-dropdown-item(@click="handleUserLogout")
                                        .d-flex.algin-content-center.justify-content-center.gap-1.text-danger
                                            h5
                                                i(class="bi bi-box-arrow-left")
                                            span Logout
                        .d-flex.flex-column.justify-content-center
                            span.m-0(style="font-size: 14px") {{store.user?.name}}
                            span.m-0(style="font-size: 12px") {{store.user?.role}}
                    //- button.btn.d-block
                    //-     i(class="bi bi-globe me-2")
                    //-     span(class="font-size: 9px;") العربيه
</template>

<script setup>
import { userStore } from "@/store/auth";

const store = userStore();

const profileMenu = computed(() => [
  {
    name: "Profile",
    link: `/user/`,
    icon: "bi bi-person-circle",
    isVisable: true,
  },
  {
    name: "Proposals",
    link: `/user/proposals`,
    icon: "bi bi-receipt",
    isVisable: store?.user?.role === "freelancer",
  },
]);

const handleUserLogout = async function () {
  const { message, success } = await store.logout();
  if (success) await store.checkAuthority(600);
  navigateTo("/");
};
</script>

<style lang="scss" scoped>
.el-dropdown-menu__item {
  > * {
    justify-content: center;
  }
}

// .header {
//   position: fixed;
//   top: 0;
//   left: 0;
//   right: 0;
//   z-index: 1;
//   transition: 0.3s ease;
//   background: white;
// }
</style>

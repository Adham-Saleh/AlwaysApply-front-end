<template lang="pug">
    nav.navbar.navbar-expand-lg.bg-body-tertiary
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
                    li.nav-item
                        a.nav-link(href='#') Employers
                    li.nav-item
                        NuxtLink.nav-link(to="/about") About us
                form.d-flex.gap-2(role='search')
                    NuxtLink.btn.btn-outline-success.py-2.px-4(to="/auth/register" type='submit') Sign up
                    NuxtLink.btn.btn-success.py-2.px-4(to="/auth/login" type='submit') Login
                    button.btn.d-block
                        i(class="bi bi-globe me-2")
                        span(class="font-size: 9px;") العربيه
</template>

<script setup></script>

<style lang="scss" scoped></style>

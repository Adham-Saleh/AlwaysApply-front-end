<template lang="pug">
    el-table(:data='tableData' style='width: 100%;')
            
        el-table-column(type='selection' width='55')

        //- Freelancer
        el-table-column(label='Freelancer' width='250')
            template(#default='scope')
                .d-flex.gap-2
                    el-avatar(:size="43")
                    .info.d-flex.flex-column
                        span {{scope.row.freelancer}}
                        span(style="font-size: 12px;") {{scope.row.location}}
        
        //- job title
        el-table-column(label='Job Title' width='240' show-overflow-tooltip='')
            template(#default='scope')
                p.py-1.px-2.my-auto.rounded-5(style="background-color: #D8F3F5; height: 100%; width: fit-content;") {{scope.row.jobTitle}}

        //- status
        el-table-column(property='Status' label='Status')
            template(#default='scope')
                p.py-1.px-2.my-auto.rounded-5(style="background-color: #D8F3F5; height: 100%; width: fit-content;") Enabled
        
        //- price
        el-table-column(property='Price' label='Price')
            template(#default='scope') {{scope.row.jobTitle}}

        //- created at
        el-table-column(property='Created at' label='Created at')
            template(#default='scope') {{scope.row.jobTitle}}

        //- action
        el-table-column(property='Created at' label='Action')
            template(#default="scope")
                .d-flex.align-content-center.text-center.py-2(@click.stop)
                    el-dropdown(class="outline-outline-0" trigger="click" v-if="!scope?.row.isDeleted")
                        span(class="el-dropdown-link")
                            .toggle-icon.text-md
                                i(class="bi bi-three-dots-vertical")
                        template(#dropdown='')
                            el-dropdown-menu
                                el-dropdown-item
                                    NuxtLink Preview
                                el-dropdown-item
                                    NuxtLink Edit
                                el-dropdown-item
                                    NuxtLink Delete
                                el-dropdown-item
                                    NuxtLink disable
</template>

<script setup lang="ts"></script>

<style scoped></style>

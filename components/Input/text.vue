<template lang="pug">
    div
        label.form-label.d-block {{label}}
        el-input(v-model="input" style=" height: 56px;" :value="value" :type="type" :placeholder="placeholder" :show-password="type === 'password'")
        .error-label
            label.text-danger.d-flex.align-items-center.gap-1(style="font-size: 12px;" v-if="error") 
                i(class="bi bi-info-circle")
                span {{error}}
</template>

<script setup lang="ts">
const input = ref<string>("");

defineProps(["label", "value", "placeholder", "show-password", "type"]);

// defineProps({
//     label: {
//         type: 'string',
//         required: false,
//     },
//     value: {
//         type: 'string',
//         required: false,
//     },
//     placeholder: {
//         type: 'string',
//         required: false,
//     },
//     showPassword: {
//         type: 'boolean',
//         required: false,
//     }
// })
</script>

<style lang="scss" scoped></style>

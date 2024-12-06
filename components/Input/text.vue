<template lang="pug">
    div
        label.form-label.d-block {{label}}
        input.form-control( @input="$emit('update:modelValue', $event.target.value)" style=" height: 56px;" :value="value" :type="type" :placeholder="placeholder" :show-password="type === 'password'")
        .error-label
            label.text-danger.d-flex.align-items-center.gap-1(style="font-size: 12px;" v-if="error") 
                i(class="bi bi-info-circle")
                span {{error}}
</template>

<script setup lang="ts">
const inputValue = ref<string>("");

const props = defineProps([
  "label",
  "value",
  "placeholder",
  "show-password",
  "type",
  "name",
]);
</script>

<style lang="scss" scoped></style>

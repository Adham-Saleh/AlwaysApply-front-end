<template lang="pug">
    div
        label.form-label.d-block {{label}}
        input.form-control(@input="$emit('update:modelValue', $event.target.value)" :value="modelValue" style=" height: 56px;" :type="type" :name="name" :placeholder="placeholder")
        .error-label
            label.text-danger.d-flex.align-items-center.gap-1(style="font-size: 12px;" v-if="false") 
                i(class="bi bi-info-circle")
                span error
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
  "modelValue",
]);
</script>

<style lang="scss" scoped></style>

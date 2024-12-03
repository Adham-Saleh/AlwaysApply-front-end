<template lang="pug">
    div
        label.form-label.d-block {{label}}
        el-input( @input="$emit('update:modelValue', $event.target.value)" style=" height: 56px;" :value="value" :type="type" :placeholder="placeholder" :show-password="type === 'password'")
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
defineEmits(["update:modelValue"]);

// const {
//   value: inputValue,
//   errorMessage,
//   handleBlur,
//   handleChange,
//   meta,
// } = useField(props.name, undefined, {
//   initialValue: props.value,
// });

// watchEffect(() => {
//   if (props.value) {
//     inputValue.value = props.value; // set value from parent
//   }
// });

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

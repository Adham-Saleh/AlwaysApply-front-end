<template lang="pug">
    div
        label.form-label.d-block(:class="{'is-invalid': errorMessage}") {{label}}
        input.form-control(:value="inputValue" @input="handleChange" style="height: 56px;" :type="type" :name="name" :placeholder="placeholder" :class="{'is-invalid': errorMessage}")
        //- Icon.textInput-password( :style="'rtl' === 'rtl' ? 'left: .5em;': 'right: .5em;'" :name="showPassword ? 'ri:eye-line': 'ri:eye-off-line'"  v-if="type === 'password' " @click="showPassword = !showPassword")
        .error-label
            label.text-danger.d-flex.align-items-center.gap-1(style="font-size: 12px;" v-if="errorMessage") 
                i(class="bi bi-info-circle")
                span {{errorMessage}}
</template>

<script setup lang="ts">
import { useField } from "vee-validate";

// const inputValue = ref<string>("");
const showPassword = ref<boolean>(false);

const props = defineProps([
  "label",
  "value",
  "placeholder",
  "show-password",
  "type",
  "name",
  "modelValue",
]);

const name = toRef(props, "name");

const {
  value: inputValue,
  errorMessage,
  handleBlur,
  handleChange,
  meta,
} = useField(name, undefined, {
  initialValue: props.value,
});
</script>

<style scoped>
.is-invalid {
  color: red;
  outline: red;
}
</style>

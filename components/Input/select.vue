<template lang="pug">
    //- pre {{value}}
    label.form-label {{label}}
    el-select(v-model="inputValue" @input="emit('search', $event.target.value)" :placeholder="placeholder" size="large" :class="{'is-invalid': errorMessage}")
        el-option(v-for="option in options" :key="option" :label="option" :value="option")
    .error-label
        label.text-danger.d-flex.align-items-center.gap-1(style="font-size: 12px;" v-if="errorMessage") 
            i(class="bi bi-info-circle")
            span {{errorMessage}}
</template>

<script setup lang="ts">
// const value = ref("");
import { useField } from "vee-validate";

const props = defineProps({
  label: {
    type: String,
    required: true,
  },
  placeholder: {
    type: String,
    required: true,
  },
  options: {
    type: Array,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  value: {
    type: [String, Array],
    required: false,
  },
});

const {
  value: inputValue,
  errorMessage,
  handleBlur,
  handleChange,
  meta,
} = useField(props.name, undefined, {
  initialValue: props.value,
});

watchEffect(() => {
  if (props.value) {
    inputValue.value = props.value; // set value from parent
    console.log(inputValue.value);
  }
});
</script>

<style lang="scss" scoped>
.is-invalid {
  color: red;
  outline: red;
}

.el-select {
  > * {
    height: 56px !important;
  }
}
</style>

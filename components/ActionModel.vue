<template lang="pug">
    el-dialog.p-4.rounded-5(v-model='dialog' :title='title' width='500' align-center='')
        template(#header='')
          span.fw-bold {{title}}
        span {{description}}
        template(#footer='')
            .dialog-footer
                el-button.rounded-5(@click='[dialog = false]') {{cancelText}}
                el-button.rounded-5(type='primary' @click='[dialog = false, confirm()]')
                    | {{confirmText}}
</template>

<script setup lang="ts">
const dialog = defineModel();
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  confirmText: {
    type: String,
    required: false,
    default: "Confirm",
  },
  cancelText: {
    type: String,
    required: false,
    default: "Cancel",
  },
});

const emit = defineEmits(["confirm"]);
const confirm = function () {
  emit("confirm");
};
</script>

<style lang="scss" scoped>
/* .el-dialog {
  padding: 20px,
  brd
} */
.el-dialog__header {
  .el-dialog__headerbtn {
    padding: 20px;
  }
}
</style>

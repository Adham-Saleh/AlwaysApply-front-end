<template lang="pug">
    label.form-label {{label}}
    el-upload(action='#' list-type='picture-card' :limit="limit" :before-upload="beforeAvatarUpload" :on-change="handleImageChange" :auto-upload='false' :on-preview="handlePictureCardPreview" :on-remove="handleRemove")
        el-icon
            plus
        template(#tip='')
            .text-muted(style="font-size: 12px")
                i.me-1(class="bi bi-info-circle")
                span format must be jpg, png or jpeg
    el-dialog(v-model='dialogVisible' v-if="dialogVisible")
        img(class="w-100" :src='dialogImageUrl' alt='Preview Image')

</template>

<script setup lang="ts">
import { Delete, Download, Plus, ZoomIn } from "@element-plus/icons-vue";
import type { UploadFile, UploadProps } from "element-plus";
import { useField } from "vee-validate";

const dialogImageUrl = ref("");
const dialogVisible = ref(false);
const disabled = ref(false);

// const acceptedFormates = ["jpeg", "png", "jpg"];
const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: false,
  },
  formats: {
    type: Array,
    required: true,
  },
  limit: {
    type: Number,
    required: false,
  },
});
const emit = defineEmits(["uploadedImage"]);

const handleRemove: UploadProps["onRemove"] = (
  uploadFile: any,
  uploadFiles: any = null
) => {
  return;
  //   console.log(uploadFile, uploadFiles);
};

const handlePictureCardPreview: UploadProps["onPreview"] = (
  uploadFile: any
) => {
  dialogImageUrl.value = uploadFile.url!;
  dialogVisible.value = true;
};

const handleImageChange = function (file: any) {
  if (!props.formats.includes(file.raw.type.split("/").pop()))
    return ElMessage({ type: "error", message: "File format not accepted" });
  emit("uploadedImage", file);
  ElMessage({ type: "success", message: "Image uploaded successfully" });
};
</script>

<style scoped></style>

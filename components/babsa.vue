<template lang="pug">
    .container
        .row 
            .col-lg-3(v-for="i in 4")
                .cardMain.rounded-4.p-3.border
                    .image-container.rounded-4.text-center.p-5
                        img(src="../assets/1.png")
                    .main-content.mt-2
                        .company-name
                            | Google Inc
                        .company-location
                            | Damietta, Egypt
                        .details.mt-2
                            span.py-1.px-2.my-auto.rounded-5.me-1(style="background-color: #D8F3F5; font-size: 12px; width: fit-content;") Full Time
                            span.py-1.px-2.my-auto.rounded-5(style="background-color: #D8F3F5; font-size: 12px; width: fit-content;") Entry
                        .applicants.mt-2
                            .div.d-flex.align-content-center.gap-2
                                .div
                                    el-avatar(src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" size="small")
                                    el-avatar(src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" size="small" style="margin-left: -10px")
                                    el-avatar(src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" size="small" style="margin-left: -10px")
                                span 30+ applicants
                        .action.mt-2
                            el-button.rounded-4(type="primary") More info
                            el-button.rounded-4(type="success") Apply now


</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.cardMain {
  background: #f8f2fc;

  .image-container {
    background: #e8e8e8;
  }

  .image-container {
    img {
      transition: transform ease-in-out 0.2s;
    }
  }

  &:hover {
    .image-container {
      img {
        transform: scale(1.2);
        transition: transform ease-in-out 0.2s;
      }
    }
  }
}
</style>

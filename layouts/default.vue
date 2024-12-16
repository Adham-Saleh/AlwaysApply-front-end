<template lang="pug">
    div
        NavBar
        slot
        Footer

</template>

<script setup lang="ts">
import { userStore } from "@/store/auth";

const store = userStore();
console.log("store -->", store);

(async () => {
  const res = await store.checkAuthority(0);
})();
</script>

<style scoped></style>

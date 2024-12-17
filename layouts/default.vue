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
  store.setData(res?.value, res?.value?.token);
  store.logged();
  console.log("res -->", res);
})();
</script>

<style scoped></style>

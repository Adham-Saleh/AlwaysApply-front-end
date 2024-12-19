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

const checkUserAuthority = async function () {
  const res = await store.checkAuthority(0);
  console.log(res);
  console.log(res.value);
  console.log(res.value?.user);
  console.log(res.value?.token);
  console.log(res.value?.success);
  if (res.value?.success) {
    console.log("I am in client side");
    store.setData(res.value?.user, res.value?.token);
    store.logged();
  } else {
    console.log("I am setting data to null");
    store.setData(null, "");
  }
};
checkUserAuthority();
</script>

<style scoped></style>

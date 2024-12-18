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

const authToken = useCookie("token:auth").value;

const checkUserAuthority = async function () {
  const res = await store.checkAuthority(0);
  if (res.value?.success) {
    if (process.client) {
      console.log("I am in client side");
      store.setData(res.value?.user, authToken);
      store.logged();
    }
  } else {
    console.log("I am setting data to null");
    store.setData(null, "");
  }
};
checkUserAuthority();
</script>

<style scoped></style>

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
store.checkAuthority();
</script>

<style scoped></style>

<template>
  <Header />

  <router-view class="pt-12 bg-zinc-200 min-h-screen"></router-view>

  <Footer />

</template>

<script setup>
import { onMounted } from "vue";
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";
import { useUserStore } from "./store/user.js";

import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

const router = useRouter();
const userStore = useUserStore();
const { user } = storeToRefs(userStore);

onMounted(async () => {
  try {
    await userStore.fetchUser(); // here we call fetch user 
    if (!user.value) {
      // redirect them to logout if the user is not there
      router.push({ path: "/auth" });
    } else {
      // continue to dashboard
      router.push({ path: "/" });
    }
  } catch (e) {
    console.log(e);
  }
});


</script>

<style scoped>

</style> 

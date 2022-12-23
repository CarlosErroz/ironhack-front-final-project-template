<template>
    <header class="bg-sky-700 text-white h-[50px] px-5 flex justify-between items-center">
        <h2 class="italic font-black text-2xl">MyTasksApp</h2>
        <div class="font-semibold">
            <a href="#" class="px-5">Home</a>
            <a href="#" class="px-5">About Us</a>
            <button @click="checkOut" class="px-5">Sign Out</button>
        </div>
        

    </header>
</template>

<script setup>
import { useUserStore } from "../store/user";
import { useRouter } from "vue-router";

const user = useUserStore();
const router = useRouter();

// función signOut
async function checkOut() {
    try {
        await user.signOut();
        router.push({ path: "/auth" });
    } catch (e) {
        console.log(e);
    }   
}

</script>

<style scoped>

</style>
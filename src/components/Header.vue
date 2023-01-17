<template>
    <header class="bg-sky-700 text-white h-[50px] px-5 flex justify-between items-center fixed w-full">
        <h2 class="italic font-black text-2xl">MyTasksApp</h2>
        <div class="sm:hidden hover:cursor-pointer">
                <p class="w-5 h-0.5 bg-white mx-auto my-1"></p>
                <p class="w-5 h-0.5 bg-white mx-auto my-1"></p>
                <p class="w-5 h-0.5 bg-white mx-auto my-1"></p>
        </div>
        <div class="font-semibold hidden sm:block">
            <router-link to="/auth" v-if="!user" class="text-stone-800 font-bold px-5">Sign In</router-link>
            <router-link to="/task" v-if="user" class="text-stone-800 font-bold px-5">New task</router-link>
            <router-link to="/" class="px-5">Home</router-link>            
            <button v-if="user" @click="checkOut" class="px-5">Sign Out</button>            
            <router-link to="/about" class="px-5">About Us</router-link>
        </div>
        

    </header>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useUserStore } from "../store/user";
import { useRouter } from "vue-router";

const userStore = useUserStore();
const router = useRouter();

const { user } = storeToRefs(userStore);

// función signOut
async function checkOut() {
    try {
        await userStore.signOut();
        user.value=null;
        router.push({ path: "/auth" });
    } catch (e) {
        console.log(e);
    }   
}

</script>

<style scoped>

</style>
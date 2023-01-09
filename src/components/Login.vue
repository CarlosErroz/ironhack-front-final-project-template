<template>
    <form
        @submit.prevent="login"
        class="bg-sky-400 rounded-md p-5 m-5 shadow-xl flex flex-col">
        <h3 class="mb-5 font-black text-sky-900 text-xl">Login</h3>
        <div v-if="errorMsg">
            <p class="text-red-600 font-bold">{{ errorMsg }}</p>
        </div>
        <div>
            <label for="email">Email</label>
            <br/>
            <input
                type="email"
                name="email"
                v-model="email"
                required
                class="mb-2 rounded focus:outline-none"/>
        </div>

        <div>
            <label for="password">Password</label>
            <br/>
            <input
                type="password"
                name="password"
                v-model="password"
                required
                class="mb-5 rounded focus:outline-none"/>
        </div>

        <button
            type="submit"
            class="bg-sky-600 rounded hover:bg-slate-400 hover:text-white">
            Login</button>

    </form>
</template>

<script setup>
import {ref} from "vue";
import { useUserStore } from "../store/user";
import { useRouter } from "vue-router";

const user = useUserStore();
const router = useRouter();

const email = ref(null);
const password = ref(null);
const errorMsg = ref(null);

// hacer función login con email y password
async function login() {
    if (password.value.length<6) {
        errorMsg.value = "Error: password length should be 6 at least"
    } else {
        try {
            await user.signIn(email.value,password.value);
            errorMsg.value = null;
            router.push("/");
            return;
        } catch (e) {
            errorMsg.value = e.message;
        }
    }   
}
</script>

<style scoped>

</style>
<template>
    <form
        @submit.prevent="register"
        class="bg-sky-400 mx-auto rounded-md p-5 m-5 shadow-xl flex flex-col">
        <h3 class="mb-5 font-black text-sky-900 text-xl">Register</h3>
        <div v-if="errorMsg">
            <p class="text-red-600 font-bold">{{ errorMsg }}</p>
        </div>
        <div v-if="okMsg">
            <p class="text-green-700 font-bold">{{ okMsg }}</p>
        </div>
        <div>
            <label for="email">Email</label>
            <br/>
            <input
                type="email"
                name="email"
                v-model="email"
                required
                class="mb-2 rounded min-w-full focus:outline-none"/>
        </div>

        <div>
            <label for="password">Password</label>
            <br/>
            <input
                type="password"
                name="password"
                v-model="password"
                required
                class="mb-5 rounded min-w-full focus:outline-none"/>
        </div>

        <div>
            <label for="repeatPassword">Repeat password</label>
            <br/>
            <input
                type="password"
                name="repeatPassword"
                v-model="repeatPassword"
                required
                class="mb-5 rounded min-w-full focus:outline-none"/>
        </div>

        <button
            type="submit"
            class="bg-sky-600 rounded min-w-full hover:bg-slate-400 hover:text-white">
            Create user</button>

    </form>
</template>

<script setup>
import {ref} from "vue";
import { useUserStore } from "../store/user";
const user = useUserStore();

const email = ref(null);
const password = ref(null);
const repeatPassword = ref(null);
const errorMsg = ref(null);
const okMsg = ref(null);

// hacer función signup con email password
async function register() {
    if (password.value != repeatPassword.value) {
        errorMsg.value = "Error: passwords are not equal"
    } else if (password.value.length<6) {
        errorMsg.value = "Error: password length should be 6 at least"
    } else {
        errorMsg.value=null;
        try {
            await user.signUp(email.value,password.value);
            okMsg.value="Sent, please validate it in your mailbox";
        } catch (e) {
            console.log(e)
        }
    }   
}

</script>

<style scoped>

</style>
<template>
    <section class="flex flex-col items-center">
        <h2 class="text-center text-sky-900 text-2xl font-bold py-5">Welcome to <span class="italic text-3xl text-sky-600">MyTasksApp</span>!</h2>
        <div class="flex flex-row items center justifiy-around">
            <h3 class="text-center text-sky-900 text-xl font-semibold pr-5">Where an easier tracking of your tasks is possible</h3>
            <img src="../assets/PulgarIcon.png" alt ="OK icon" class="w-10 hidden sm:block"/>
        </div>
        

        <Login v-if="show" />

        <NewRegister v-else/>

        <button @click="changeRegister" class="bg-slate-700 text-white mx-auto rounded-md p-2 mb-10 shadow-xl">{{buttonText}}</button>
    </section>

</template>

<script setup>

import {ref} from "vue";
import Login from "../components/Login.vue";
import NewRegister from "../components/NewRegister.vue";

const show = ref(true);
const buttonText = ref("Register a new user");

function changeRegister() {
    if (buttonText.value === "Register a new user") {
        show.value=false;
        buttonText.value="Login existing user";
} else {
        show.value=true;
        buttonText.value="Register a new user";
}
}

</script>

<style scoped>

</style>
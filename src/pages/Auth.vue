<template>
    <section class="bg-slate-200 flex flex-col justify-around items-center">
        <h2 class="text-center text-sky-900 text-2xl font-bold pt-5 pb-2.5">Wellcome to <span class="italic text-3xl text-sky-600">MyTasksApp</span>!</h2>
        <h3 class="text-center text-sky-900 text-xl font-semibold">Where an easier tracking of your tasks is possible</h3>
        <img src="../assets/PulgarIcon.png" alt ="OK icon" class="w-10 mt-5"/>

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
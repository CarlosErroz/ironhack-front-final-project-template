<template>
    <Login v-if="show" />

    <NewRegister v-else/>

    <button @click="changeRegister">Change</button>

</template>

<script setup>
import {ref} from "vue";
import Login from "../components/Login.vue";
import NewRegister from "../components/NewRegister.vue";

const show = ref(true);

function changeRegister() {
    show.value=!show.value;
}

</script>

<style scoped>

</style>
<template>
    <p v-if="!user" class="p-5 text-red-600 font-bold">Please, first SIGN IN as an existing user or create a new one</p>
    <p v-else-if="!task" class="p-5 text-red-600 font-bold">Ups! no tasks created yet, let's try with your first one</p>
    <div v-else>
        
    </div>

</template>

<script setup>
import { storeToRefs } from "pinia";
import { useUserStore } from "../store/user";
import { useTaskStore } from "../store/task.js";

const userStore = useUserStore();
const { user } = storeToRefs(userStore);

const taskStore = useTaskStore();
const { task } = storeToRefs(taskStore);

</script>

<style scoped>

</style>
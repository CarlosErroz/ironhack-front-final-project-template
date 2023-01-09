<template>
    <p v-if="!user" class="p-5 text-red-600 font-bold">Please, first SIGN IN as an existing user or create a new one</p>
    <p v-else-if="!existanceTasks" class="p-5 text-red-600 font-bold">Ups! no tasks created yet, let's try with your first one</p>
    <div v-else>
        parece que sí hay alguna tarea
        
    </div>

</template>

<script setup>
import {ref} from "vue";
import { storeToRefs } from "pinia";
import { useUserStore } from "../store/user";
import { useTaskStore } from "../store/task.js";

const userStore = useUserStore();
const { user } = storeToRefs(userStore);

const taskStore = useTaskStore();
const { tasks } = storeToRefs(taskStore);
const existanceTasks = ref(false)

async function showTask() {
    try {
      await taskStore.fetchTasks();
      if (tasks.value.length>0) {
        existanceTasks.value=true;
      }
      console.log(existanceTasks.value)
      }
    catch (e) {
      console.log(e);
    }
  } 

showTask();


</script>

<style scoped>

</style>
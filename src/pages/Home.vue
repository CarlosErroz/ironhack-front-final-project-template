<template>
  <div class="m-0 p-0">
    <p v-if="!user"
      class="text-red-600 font-bold text-center pt-5">
      Please, first SIGN IN as an existing user or create a new one
    </p>
    <p v-else-if="!existanceTasks"
      class="text-red-600 font-bold text-center pt-5">
      Ups! no tasks created yet, let's try with your first one
    </p>
    <div v-else class="flex flex-col items-center">
      <h3
        class="font-bold text-sky-900 text-center py-5 text-xl sm:text-2xl">
        Your current list of tasks
      </h3>
      <div class="flex flex-row pb-2">
        <label class="mr-2">Filter by status: </label>
        <select v-model="status" class="mb-5 rounded focus:outline-none" @change="getTasksFilter" :status="status">
          <option>All</option>
          <option>Pending</option>
          <option>Finalized</option>
        </select>
      
      </div>

      <p v-if="!existanceTasksFilter"
      class="p-5 text-red-600 font-bold">
      Ups! no tasks of this status, try to select another one or create a task
      </p>

      <div
        class="grid grid-cols-1 gap-5
              sm:grid-cols-2
              lg:grid-cols-3">
        <Task v-for="task in tasks" :task="task" @emitStatus="changeStatus" @emitDeletion="setStatus">
        </Task>
      </div>
        
    </div>
  </div>

</template>

<script setup>
import {ref} from "vue";
import { storeToRefs } from "pinia";
import { useUserStore } from "../store/user";
import { useTaskStore } from "../store/task.js";
import Task from '../components/Task.vue';

const userStore = useUserStore();
const { user } = storeToRefs(userStore);

const taskStore = useTaskStore();
const { tasks } = storeToRefs(taskStore);
const existanceTasks = ref(false);
const existanceTasksFilter = ref(true);

const status = ref("All")

async function getTasks() {
    try {
      await taskStore.fetchTasks();
      existanceTasks.value=tasks.value.length>0;
      }
    catch (e) {
      console.log(e);
    }
  } 

getTasks();

//Función para filtrar status
async function getTasksFilter() {
    if (status.value === "All") {
      try {
      await taskStore.fetchTasks();
      existanceTasksFilter.value=tasks.value.length>0;
      }
      catch (e) {
      console.log(e);
      }
      return;
    } else if (status.value === "Pending") {
      try {
      await taskStore.fetchTasksFilter(false);
      existanceTasksFilter.value=tasks.value.length>0;
      }
      catch (e) {
      console.log(e);
      }
      return;
    } else {
      try {
      await taskStore.fetchTasksFilter(true);
      existanceTasksFilter.value=tasks.value.length>0;
      }
      catch (e) {
      console.log(e);
      }
      return;
    }
  }

function changeStatus () {
  status.value="All";
  existanceTasks.value=tasks.value.length>0;
}

function setStatus () {
  status.value="All";
  getTasksFilter();
  existanceTasks.value=tasks.value.length>0;
}

</script>

<style scoped>

</style>
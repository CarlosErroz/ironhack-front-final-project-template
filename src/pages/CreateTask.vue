<template>
    <div class="p-10 mx-auto">
        <form @submit.prevent="createTask"
            class="bg-zinc-400 rounded-md p-5 m-5 shadow-xl flex flex-col">
            <h3 class="mb-5 font-black text-sky-900 text-xl">Create a new task</h3>
            
            <div v-if="errorMsg">
                <p class="text-red-600 font-bold">{{ errorMsg }}</p>
            </div>
            <div v-if="sendingMsg">
                <p class="text-green-600 font-bold">{{ sendingMsg }}</p>
            </div>
            
            <label for="task-title">Title</label>
            <input
                type="text"
                id="task-title"
                name="task-title"
                placeholder="Enter task title"
                v-model="taskTitle"
                class="mb-5 rounded min-w-full focus:outline-none">

            <label for="task-description">Description</label>
            <textarea
                id="task-description"
                name="task-description"
                placeholder="Describe your task here..."
                v-model="taskDescription"
                rows="5"
                class="mb-5 rounded min-w-full focus:outline-none">
            </textarea>

            <button
                id="task-button"
                type="submit"
                class="bg-sky-600 rounded min-w-full hover:bg-slate-400 hover:text-white"
            >Create
            </button>
        </form>

    </div>
</template>

<script setup>
import {ref} from 'vue';
import { storeToRefs } from "pinia";
import { useTaskStore } from "../store/task";
import { useUserStore } from "../store/user";

const task = useTaskStore();
const userStore = useUserStore();
const { user } = storeToRefs(userStore);

const taskTitle = ref("");
const taskDescription = ref("");
const errorMsg = ref(null);
const sendingMsg = ref(null);

// función crear una tarea
async function createTask() {
    if (taskTitle.value.length<6 || taskTitle.value.length>25) {
        errorMsg.value = "Error: TITLE length should be between 6 and 25 characters"
    } else if (taskDescription.value.length<6 || taskDescription.value.length>150) {
        errorMsg.value = "Error: DESCRIPTION length should be between 6 and 150 characters"
    } else {
    errorMsg.value = null;
    try {
        await task.postTask(user.value.id,taskTitle.value,taskDescription.value);
        sendingMsg.value = "New task created correctly";
        taskTitle.value = null;
        taskDescription.value = null;
        return;
    } catch (e) {
        errorMsg.value = e.message;
    }
}
}

</script>

<style scoped>

</style>
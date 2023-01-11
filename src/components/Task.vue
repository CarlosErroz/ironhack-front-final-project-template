<template>
    <article class="bg-white p-4 my-4 flex flex-col items-start">
        <h3 class="my-4">Title: {{task.title}}</h3>
        <p class="my-4">Description: {{ task.description }}</p>
        <div class="min-w-full flex flex-row justify-between">
            <button
                class="bg-red-400 rounded min-w-fit px-2 hover:bg-slate-400 hover:text-white"
                @click="preDeletion()">
                Delete
            </button>
            <div v-if="showDelete" class="flex flex-row justify-evenly">
                <p>Are you sure?</p>
                <button
                class="bg-red-600 rounded min-w-fit px-1 mx-1 hover:bg-slate-400 hover:text-white"
                @click="deletion(task.id)">
                Yes
                </button>
                <button
                class="bg-slate-500 rounded min-w-fit px-1 mx-1 hover:bg-slate-400 hover:text-white"
                @click="cancelDeletion()">
                No
                </button>
                
            </div>
        </div>
        <br>
        <button
            class="bg-sky-600 rounded min-w-fit px-2 hover:bg-slate-400 hover:text-white"
            @click="">
            Edit to modify
        </button>
  </article>
</template>

<script setup>
import {ref} from "vue";
import { useTaskStore } from "../store/task";

const props = defineProps(["task"]);

const taskDifferent = useTaskStore();
const errorMsg = ref(null);
const showDelete =ref(false);

// funciones para borrar una tarea
function preDeletion() {
    showDelete.value =true;
}
async function deletion(value) {
   try {
        await taskDifferent.deleteTask(value);
        console.log("Borrado");
        location.reload();
        return;
    } catch (e) {
        errorMsg.value = e.message;
        console.log(errorMsg.value)
    }
}

function cancelDeletion() {
    showDelete.value =false;
}

</script>

<style scoped>

</style>
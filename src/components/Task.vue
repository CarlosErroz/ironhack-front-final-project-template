<template>
    <article class="bg-white p-4 my-4 flex flex-col items-start">
        <h3 class="my-4">Title: {{task.title}}</h3>
        <p class="my-4">Description: {{ task.description }}</p>
        <div class="min-w-full flex flex-row justify-evenly">
            <button
                class="bg-red-400 rounded min-w-fit px-2 hover:bg-slate-400 hover:text-white"
                @click="deletion(task.id)">
                Delete
            </button>
            <button
                class="bg-sky-600 rounded min-w-fit px-2 hover:bg-slate-400 hover:text-white"
                @click="">
                Edit to modify
            </button>
        </div>
  </article>
</template>

<script setup>
import {ref} from "vue";
import { useRouter } from "vue-router";
import { useTaskStore } from "../store/task";

const props = defineProps(["task"]);

const router = useRouter();
const taskDifferent = useTaskStore();
const errorMsg = ref(null);

// función para borrar una tarea
async function deletion(value) {
   try {
        await taskDifferent.deleteTask(value);
        console.log("Borrado")
        router.push({ path: "/" });
        return;
    } catch (e) {
        errorMsg.value = e.message;
        console.log(errorMsg.value)
    }
}

</script>

<style scoped>

</style>
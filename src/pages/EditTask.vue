<template>
    <div class="p-10 mx-auto flex flex-col">
        <form
            @submit.prevent="editTask(selectedTask.id,editedTitle,editedDescription)"
            class="bg-zinc-400 rounded-md p-5 m-5 shadow-xl flex flex-col">
            <h3 class="mb-5 font-bold text-sky-900 text-xl">Edition: write directly changes</h3>
            
            <div v-if="errorMsg">
                <p class="text-red-600 font-bold">{{ errorMsg }}</p>
            </div>
            <div v-if="sendingMsg">
                <p class="text-green-600 font-bold">{{ sendingMsg }}</p>
            </div>

            <label for="edited-title">Title:</label>
            <input
                type="text"
                id="edited-title"
                name="edited-title"
                placeholder="Write new title"
                v-model="editedTitle"
                class="mb-5 rounded min-w-full focus:outline-none">

            <label for="edited-description">Description:</label>
            <textarea
                id="edited-description"
                name="edited-description"
                v-model="editedDescription"
                placeholder="Write new description"
                rows="5"
                class="mb-5 rounded min-w-full focus:outline-none">
            </textarea>
            <button
                type="submit"
                class="bg-sky-600 rounded px-2 hover:bg-slate-400 hover:text-white"
                >Save changes
            </button>

        </form>
        <button
            @click="goBack"
            type="submit"
            class="bg-slate-600 rounded px-5 mx-5 hover:bg-slate-400 hover:text-white"
            >Go back
        </button>
    </div>
</template>

<script setup>
import {ref} from "vue";
import { storeToRefs } from "pinia";
import { useTaskStore } from "../store/task";
import { useRouter } from "vue-router";

const taskStore = useTaskStore();
const { tasks, editableTask } = storeToRefs(taskStore);

const selectedTask = tasks.value.find(task => task.id === editableTask.value);
const errorMsg = ref(null);
const sendingMsg = ref(null);
const editedTitle = selectedTask.title;
const editedDescription = selectedTask.description;
const router = useRouter();

// función para editar una tarea
async function editTask(idValue,title,description) {
    if (title.length<6 || title.length>25) {
        errorMsg.value = "Error: TITLE length should be between 6 and 25 characters"
        return
    } else if (description.length<6 || description.length>150) {
        errorMsg.value = "Error: DESCRIPTION length should be between 6 and 150 characters"
        return
    } else {    
    errorMsg.value = null;
    try {
        const res = await taskStore.updateTask(idValue,title,description);
        errorMsg.value = res;
        sendingMsg.value = "Task changed correctly";
        return;
    } catch (e) {
        errorMsg.value = e.message;
    }
    }

}


function goBack() {
    router.push({ path: "/" });
}
</script>

<style scoped>

</style>
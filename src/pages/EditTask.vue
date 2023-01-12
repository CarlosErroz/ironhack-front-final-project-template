<template>
    <div class="max-w-md my-10 mx-auto">
        <form class="bg-sky-400 rounded-md p-5 m-5 shadow-xl flex flex-col">
            <h3 class="mb-5 font-bold text-sky-900 text-xl">Edition: write directly changes</h3>
            
            <div v-if="errorMsg">
                <p class="text-red-600 font-bold">{{ errorMsg }}</p>
            </div>
            <div v-if="sendingMsg">
                <p class="text-green-600 font-bold">{{ sendingMsg }}</p>
            </div>

            <label for="edited-title">Title</label>
            <input
                type="text"
                id="edited-title"
                name="edited-title"
                placeholder="PONER EL CONTENIDO DEL TÍTULO"
                v-model="editedTitle"
                class="mb-5 rounded min-w-full focus:outline-none">

            <label for="edited-description">Description</label>
            <textarea
                id="edited-description"
                name="edited-description"
                placeholder="PONER EL CONTENIDO DEL DESCRITPTIVO"
                v-model="editedDescription"
                rows="5"
                class="mb-5 rounded min-w-full focus:outline-none">
            </textarea>

            <form @submit.prevent="editTask(idValue,editedTitle,editedDescription)" class="flex flex-row justify-between">
                <button
                    id="task-button"
                    class="bg-sky-600 rounded px-2 hover:bg-slate-400 hover:text-white"
                >Save changes
                </button>
                <button
                    id="task-button"
                    @click="goBack"
                    type="submit"
                    class="bg-slate-600 rounded px-2 hover:bg-slate-400 hover:text-white"
                >Go back
                </button>

            </form>

        </form>
    </div>
</template>

<script setup>
import {ref} from "vue";
import { storeToRefs } from "pinia";
import { useTaskStore } from "../store/task";
import { useRouter } from "vue-router";

const taskStore = useTaskStore();
const { tasks, editableTask } = storeToRefs(taskStore);
const errorMsg = ref(null);
const editedTitle = ref("");
const editedDescription = ref("");
const sendingMsg = ref(null);
const router = useRouter();

console.log(editableTask.value)
console.log(tasks.value);

const selectedTask = tasks.value.find(task => task.id === editableTask.value);
console.log(selectedTask);
const selectedDescription = null;

// función para editar una tarea
async function editTask(idValue,title,description) {
    if (editedTitle.value.length<6 || editedTitle.value.length>25) {
        errorMsg.value = "Error: TITLE length should be between 6 and 25 characters"
    } else if (editedDescription.value.length<6 || editedDescription.value.length>150) {
        errorMsg.value = "Error: DESCRIPTION length should be between 6 and 150 characters"
    } else {
    errorMsg.value = null;
    console.log(editedTitle.value);
    console.log(editedDescription.value);
    console.log(user.value.id);
    try {
        await taskStore.updateTask(idValue,title,description);
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
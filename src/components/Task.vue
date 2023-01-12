<template>
    <article class="bg-sky-400 rounded-md p-2 my-2 flex flex-col items-start shadow-xl justify-between">
        <h3 
            class="my-2 font-bold text-sky-900 text-xl">
            <span class="font-normal text-sky-700 text-lg">Title:</span>
            {{task.title}}
        </h3>
        <p
            class="my-2 font-bold text-sky-900 text-lg">
            <span class="text-sky-700 font-normal text-lg">Description:</span>
            {{ task.description }}
        </p>
        <div class="flex flex-row items-center justify-between">
            <p
                v-if="task.is_complete"
                class="my-2 font-bold text-green-600 text-lg">
                <span class="text-sky-700 font-normal text-lg">Status:</span>
                Finalized
            </p>
            <p
                v-else
                class="my-2 font-bold text-red-400 text-lg">
                <span class="text-sky-700 font-normal text-lg">Status:</span>
                 Pending
                </p>
            <button
                v-if="!task.is_complete"
                class="bg-slate-500 rounded min-w-max px-1 mx-1 text-sm hover:bg-slate-400 hover:text-white"
                @click="changeToFinalized(task.id,true)">
                Set to finalized
            </button>
            <button
                v-else
                class="bg-slate-500 rounded min-w-fit px-1 mx-1 text-sm hover:bg-slate-400 hover:text-white"
                @click="changeToPending(task.id,false)">
                Set to pending
            </button>
            
        </div>
        <button
            class="bg-sky-600 rounded min-w-fit px-1 my-2 hover:bg-slate-400 hover:text-white"
            @click="editTask(task.id)">
            Edit task
            </button>
        <div class="flex flex-row justify-between">
            <button
                class="bg-red-400 rounded min-w-fit px-2 hover:bg-slate-400 hover:text-white"
                @click="preDeletion">
                Delete
            </button>
            <div v-if="showDelete" class="flex flex-row justify-evenly">
                <p class="ml-2">Are you sure?</p>
                <button
                class="bg-red-600 rounded min-w-fit px-1 mx-1 hover:bg-slate-400 hover:text-white"
                @click="deletion(task.id)">
                Yes
                </button>
                <button
                class="bg-slate-500 rounded min-w-fit px-1 mx-1 hover:bg-slate-400 hover:text-white"
                @click="cancelDeletion">
                No
                </button>                
            </div>
        </div>        
        
  </article>
</template>

<script setup>
import {ref} from "vue";
import { storeToRefs } from "pinia";
import { useTaskStore } from "../store/task";
import { useRouter } from "vue-router";

const props = defineProps(["task"]);

const taskStore = useTaskStore();
const { editableTask } = storeToRefs(taskStore);
const errorMsg = ref(null);
const showDelete =ref(false);
const router = useRouter();

// funciones para borrar una tarea
function preDeletion() {
    showDelete.value =true;
}

async function deletion(value) {
   try {
        await taskStore.deleteTask(value);
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

// funciones para cambiar status de una tarea
async function changeToFinalized(idValue,value) {
    try {
        await taskStore.changeTaskStatus(idValue,value);
        console.log("Change to finalized");
        location.reload();
        return;
    } catch (e) {
        errorMsg.value = e.message;
        console.log(errorMsg.value)
    }
}

async function changeToPending(idValue,value) {
    try {
        await taskStore.changeTaskStatus(idValue,value);
        console.log("Change to finalized");
        location.reload();
        return;
    } catch (e) {
        errorMsg.value = e.message;
        console.log(errorMsg.value)
    }
}

// funciones para editar una tarea

function editTask(id) {
    editableTask.value=id;
    console.log(editableTask.value);
    router.push({ path: "/edit" });  
}

</script>

<style scoped>

</style>
<template>
    <footer class="bg-sky-700 text-white h-[50px] px-5 flex justify-between items-center">
        <div>Copyright &copy;{{ currentYear }}</div>
        <div>
            <a href="#" class="px-5">Privacy</a>
            <a href="#" class="px-5">Terms</a>
            <a href="#" class="px-5">Contact Us</a>
        </div>

    </footer>
        
</template>

<script setup>
import {ref} from "vue";
const currentYear = ref(new Date().getFullYear());

</script>

<style scoped></style>
<template>
    <footer
        class="bg-sky-700 text-white h-[50px] px-5 flex justify-between items-center w-full text-sm
                sm:text-lg">
        <div>Copyright &copy;{{ currentYear }}</div>
        <div>
            <router-link to="/privacy" class="px-2 sm:px-5">Privacy</router-link>
            <router-link to="/terms" class="px-2 sm:px-5">Terms</router-link>
            <router-link to="/contact" class="px-2 sm:px-5">Contact Us</router-link>
        </div>

    </footer>
        
</template>

<script setup>
import {ref} from "vue";
const currentYear = ref(new Date().getFullYear());

</script>

<style scoped></style>
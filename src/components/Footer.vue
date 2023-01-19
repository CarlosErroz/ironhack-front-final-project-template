<template>
    <footer
        class="bg-sky-700 text-white h-[50px] flex justify-between items-center text-sm
                sm:text-lg">
        <div>Copyright &copy;{{ currentYear }}</div>
        <div class="">
            <router-link to="/privacy" class="pr-5">Privacy</router-link>
            <router-link to="/terms" class="pr-5">Terms</router-link>
            <router-link to="/contact" class="">Contact Us</router-link>
        </div>

    </footer>
        
</template>

<script setup>
import {ref} from "vue";
const currentYear = ref(new Date().getFullYear());

</script>

<style scoped></style>
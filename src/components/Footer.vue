<template>
    <footer>
        <div>Copyright &copy;{{ currentYear }}</div>
        Esto es el FOOTER

    </footer>
        
</template>

<script setup>
import {ref} from "vue";
const currentYear = ref(new Date().getFullYear());

</script>

<style scoped></style>
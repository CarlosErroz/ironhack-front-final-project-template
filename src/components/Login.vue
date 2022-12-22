<template >
    <form @submit.prevent="" class="bg-sky-400 mx-auto rounded-md p-5 m-5 shadow-xl flex flex-col">
        <h3 class="mb-5 font-black text-sky-900 text-xl">Login</h3>
        <div>
            <label for="email">Email</label>
            <br/>
            <input type="email" name="email" v-model="email" required class="mb-2 rounded min-w-full focus:outline-none"/>
        </div>
        <div>
            <label for="password">Password</label>
            <br/>
            <input type="password" name="password" v-model="password" required class="mb-5 rounded min-w-full focus:outline-none"/>
        </div>
        <button type="submit" class="bg-sky-600 rounded min-w-full hover:bg-slate-400 hover:text-white">Send</button>

    </form>
</template>

<script setup>

</script>

<style scoped>

</style>
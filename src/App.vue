<script setup>
import { RouterLink, RouterView } from "vue-router"
import { useUserStore } from "./store/userStore"

const store = useUserStore()
</script>

<template>
    <header
        class="w-full h-[10vh] bg-slate-600 text-white flex flex-col justify-center items-center"
    >
        <h1 class="text-2xl">
            Super Highly Efficient and Excellent Task List App for
            {{ store.username }} to Learn Key Vue Concepts and Ace Job Interview
        </h1>
        <RouterLink to="/">Landing</RouterLink>
        <RouterLink to="/home">Home</RouterLink>
    </header>

    <main class="flex justify-evenly">
        <RouterView />
    </main>
</template>

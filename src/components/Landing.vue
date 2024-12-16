<script setup>
import { useUserStore } from "../store/userStore.js"
import { ref } from "vue"
import { v4 as uuid } from "uuid"
import { useRouter } from "vue-router"

const router = useRouter()

const username = ref("")

const store = useUserStore()

const loginUser = () => {
    store.setUserInfo(uuid(), username.value)
    router.push("/home")
}
</script>

<template>
    <form @submit="e => e.preventDefault()">
        <input placeholder="Enter a username" v-model="username" />
        <button @click="loginUser">Login</button>
    </form>
</template>

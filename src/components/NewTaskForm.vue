<script setup>
import { ref, watch, defineEmits } from "vue"
const emit = defineEmits(["addTask"])

const taskName = ref("")

const addTask = () => {
    emit("addTask", taskName.value)
    taskName.value = ""
}

// watch(taskName, newTaskName => {
//     console.log(newTaskName)
// })
</script>

<template>
    <form @submit="e => e.preventDefault()">
        <input class="border" v-model="taskName" />
        <button @click="addTask">Add Task</button>
    </form>
</template>

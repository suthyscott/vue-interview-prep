<script setup>
import TaskItem from "./components/TaskItem.vue"
import NewTaskForm from "./components/NewTaskForm.vue"
import { ref } from "vue"
import { RouterLink, RouterView } from "vue-router"

const tasks = ref([
    { taskName: "Learn Vue", done: false },
    { taskName: "Learn Pimia", done: false },
    { taskName: "Ace Interview", done: false }
])

const addTask = newTaskName => {
    console.log("addTask", newTaskName)
    const newTasks = [...tasks.value, { taskName: newTaskName }]
    tasks.value = newTasks
    // tasks.value.push({ taskName: newTaskName })
}

const removeTask = taskName => {
    console.log("removeTask", taskName)
    const index = tasks.value.findIndex(task => task.taskName === taskName)
    const newTasks = [...tasks.value]
    newTasks.splice(index, 1)
    tasks.value = newTasks
}

const toggleDone = taskName => {
    console.log("toggle done", taskName)
    const index = tasks.value.findIndex(task => task.taskName === taskName)
    const newTasks = [...tasks.value]
    newTasks[index].done = !newTasks[index].done
    tasks.value = newTasks
}
</script>

<template>
    <header
        class="w-full h-[10vh] bg-slate-600 text-white flex flex-col justify-center items-center"
    >
        <h1 class="text-2xl">
            Super Highly Efficient and Excellent Task List App for Learning of
            Key Vue Concepts and Acing Job Interview
        </h1>
        <RouterLink to="/">Landing</RouterLink>
        <RouterLink to="/home">Home</RouterLink>
    </header>

    <main class="flex justify-evenly">
        <RouterView />
    </main>
</template>

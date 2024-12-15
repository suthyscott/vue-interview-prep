<script setup>
import TaskItem from "./TaskItem.vue"
import NewTaskForm from "./NewTaskForm.vue"
import { ref } from "vue"

let taskId = 0

const tasks = ref([
    { taskName: "Learn Vue", done: false, id: taskId++ },
    { taskName: "Learn Pimia", done: false, id: taskId++ },
    { taskName: "Ace Interview", done: false, id: taskId++ }
])

const addTask = newTaskName => {
    console.log("addTask", newTaskName)
    const newTasks = [
        ...tasks.value,
        { taskName: newTaskName, done: false, id: taskId++ }
    ]
    tasks.value = newTasks
    // tasks.value.push({ taskName: newTaskName })
}

const removeTask = id => {
    console.log("removeTask", id)
    const index = tasks.value.findIndex(task => task.id === id)
    const newTasks = [...tasks.value]
    newTasks.splice(index, 1)
    tasks.value = newTasks
}

const toggleDone = id => {
    console.log("toggle done", id)
    const index = tasks.value.findIndex(task => task.id === id)
    const newTasks = [...tasks.value]
    newTasks[index].done = !newTasks[index].done
    tasks.value = newTasks
}
</script>

<template>
    <NewTaskForm @addTask="addTask" />
    <div>
        <TaskItem
            v-for="(task, index) in tasks"
            :task="task"
            :key="task.id"
            @removeTask="removeTask"
            @toggleDone="toggleDone"
        />
    </div>
</template>

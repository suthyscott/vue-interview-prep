<script setup>
import { defineEmits } from "vue"
const emit = defineEmits(["removeTask", "toggleDone"])
const { task } = defineProps({
    task: {
        taskName: String,
        done: Boolean,
        id: Number
    }
})

const removeTask = () => {
    emit("removeTask", task.id)
}
console.log("TaskItem", task)
</script>

<template>
    <div
        :class="`border flex w-60 justify-between m-4 ${
            task.done && 'line-through'
        }`"
    >
        <p class="hover:cursor-pointer" @click="$emit('toggleDone', task.id)">
            {{ task.taskName }}
        </p>
        <button @click="removeTask">X</button>
    </div>
</template>

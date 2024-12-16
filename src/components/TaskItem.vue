<script setup>
import { defineEmits } from "vue"
const emit = defineEmits(["removeTask", "toggleDone"])
const props = defineProps({
    task: {
        taskName: String,
        done: Boolean,
        id: Number
    }
})

const removeTask = () => {
    emit("removeTask", props.task.id)
}
console.log("TaskItem", props.task)
</script>

<template>
    <div
        :class="`border flex w-60 justify-between m-4 ${
            props.task.done && 'line-through'
        }`"
    >
        <p
            class="hover:cursor-pointer"
            @click="$emit('toggleDone', props.task.id)"
        >
            {{ props.task.taskName }}
        </p>
        <button @click="removeTask">X</button>
    </div>
</template>

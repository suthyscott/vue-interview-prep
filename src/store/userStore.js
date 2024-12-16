import { defineStore } from "pinia"

export const useUserStore = defineStore("user", {
    state: () => ({
        userId: null,
        username: null
    }),
    getters: {
        getUserInfo: state => ({
            userId: state.userId,
            username: state.username
        })
    },
    actions: {
        setUserInfo(newId, newUsername) {
            this.userId = newId
            this.username = newUsername
        },
        clearUserInfo() {
            this.userId = null
            this.username = null
        }
    }
})

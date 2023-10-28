export const state = () => ({
    counter: 0
})

export const mutations = {
    increment(state){
        state.counter++;
    },
}

export const actions = {
    tryLogin({ commit }){
        // this.$axios
    }
}

export const getters = {
    getCounter(state) {
        return state.counter
    }
}
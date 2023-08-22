import { createStore } from 'vuex'

const store = createStore({
    state () {
        return {
            locale: localStorage.hasOwnProperty('locale') ? localStorage.getItem('locale') : 'zh-CN',
            username: localStorage.hasOwnProperty('username') ? localStorage.getItem('username') : '',
            identity: localStorage.hasOwnProperty('identity') ? localStorage.getItem('identity') : 0,
        }
    },
    mutations: {
        changeLocale(state, locale) {
            state.locale = locale
            localStorage.setItem('locale', locale)
        },
        setUsername(state, username = '') {
            state.username = username
            localStorage.setItem('username', username)
        },
        setIdentity(state, identity = 0) {
            state.identity = identity
            localStorage.setItem('identity', identity)
        }
    }
})

export default store
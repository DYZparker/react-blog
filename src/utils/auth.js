const TOKEN_KEY = 'react-blog-token'
const USER_KEY = 'react-blog-user'

// 获取token
export function getToken() {
    return window.localStorage.getItem(TOKEN_KEY)
}

// 保存token
export function setToken(token) {
    return window.localStorage.setItem(TOKEN_KEY, token)
}

// 获取用户信息
export function getUser() {
    return JSON.parse(window.localStorage.getItem(USER_KEY) || '{}')
}

// 保存用户信息
export function setUser(user) {
    return window.localStorage.setItem(USER_KEY, JSON.stringify(user))
}

// 移除用户信息
export function removeUser() {
    window.localStorage.removeItem(TOKEN_KEY)
    window.localStorage.removeItem(USER_KEY)
}
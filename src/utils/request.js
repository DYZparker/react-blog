import axios from 'axios'

const request = axios.create({
  // beseURL: 'http://localhost:9000',
  timeout: 5000
})

//请求拦截器
// request.interceptors.request.use(request => {
//     //从localStorage获取token并添加到headers
//     const token = getToken()
//     if(token) {
//         request.headers.common['Authorization'] = 'Bearer ' + token
//     }
    
//     return request
// })

export default request


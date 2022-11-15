import Vue from 'vue'
import axios from 'axios'


//axios.defaults.baseURL = 'https://exercises-vue-default-rtdb.firebaseio.com/'
//axios.defaults.headers.common['Authorization'] = ''
//axios.defaults.headers.get['Accepts'] = 'applciation/json'

Vue.use({
  install(Vue) {
    //Vue.prototype.$http = axios

    Vue.prototype.$http = axios.create({
      baseURL: 'https://exercises-vue-default-rtdb.firebaseio.com/',
      // headers: {
      //   get: {
      //     "Authorization": "abc123"
      //   }
      // }
    })

    // Vue.prototype.$http.interceptors.response.use(res => {
    //   const arr = []
    //   for (let chave in res.data) {
    //     arr.push({ id: chave, ...res.data[chave] })
    //   }
    //   res.data = arr
    //   return res
    // }, error => Promise.reject(error))
  }
})



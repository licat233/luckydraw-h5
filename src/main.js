import { createApp } from 'vue'
import App from './App.vue'
import "./popup";
import "./assets/style.css"

// 完整加载
import VueLuckyCanvas from '@lucky-canvas/vue'

let hash = window.location.hash.replace("#", "")
if (hash) {
   localStorage.setItem("passport", hash)
   const indexUrl = location.protocol + "//" + location.host
   history.replaceState(null, null, indexUrl)
}

const app = createApp(App)
app.config.errorHandler = (err, instance, info) => {
   // 向追踪服务报告错误
   console.error(err, instance, info)
}
app.config.globalProperties.activityUuid = "1376ba46-c178-4baa-aab7-be6420b37bc1"
if (process.env.NODE_ENV === 'development') {
   app.config.globalProperties.baseUrl = "http://127.0.0.1:7878"
} else if (process.env.NODE_ENV === 'production') {
   app.config.globalProperties.baseUrl = "."
}
app.use(VueLuckyCanvas)
app.mount('#app')

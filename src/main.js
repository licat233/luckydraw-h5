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
app.config.globalProperties.campaignUuid = "f2b0f6ff-bcbc-4298-a15e-386e82e2d261"
if (process.env.NODE_ENV === 'development') {
   // app.config.globalProperties.baseUrl = "http://127.0.0.1:7878"
   app.config.globalProperties.baseUrl = "http://api.lzy.pub"
} else if (process.env.NODE_ENV === 'production') {
   app.config.globalProperties.baseUrl = "."
}
app.use(VueLuckyCanvas)
app.mount('#app')

import 'npm:normalize.css'
import 'npm:@fontsource/ubuntu'
import 'npm:bulma'
import './style.css'

import { createApp } from "vue"
import { createWebHashHistory, createRouter } from 'vue-router'

import Login from "./components/Login.vue"
import App from "./components/App.vue"
import Recuperar from "./components/Recuperar.vue"
import ErrorLogin from "./components/ErrorLogin.vue"
import CrearCuenta from "./components/CrearCuenta.vue"

const routes = [
  { path: '/', component: Login }, 
  { path: '/recuperar', component: Recuperar } ,
  { path: '/crear-cuenta' , component : CrearCuenta } 
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})


const app = createApp(App);
app.use(router)
app.mount("#app");





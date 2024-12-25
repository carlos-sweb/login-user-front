import 'npm:normalize.css'
import 'npm:@fontsource/ubuntu'
import 'npm:bulma'
import './style.css'


import { createApp } from "vue/dist/vue.esm-bundler"
import { createWebHashHistory, createRouter } from 'vue-router'
import { createPinia , defineStore } from 'pinia'
const pinia = createPinia()

import Login from "./pages/Login.vue"
import App from "./pages/App.vue"
import Recuperar from "./pages/Recuperar.vue"
import ErrorLogin from "./pages/ErrorLogin.vue"
import CrearCuenta from "./pages/CrearCuenta.vue"
import AccesoError from "./pages/AccesoError.vue"

// Singles components

import button from "./components/button.vue";
import inputEmail from "./components/inputEmail.vue";
import inputPassword from "./components/inputPassword.vue";
import linkghost from "./components/linkghost.vue"

const routes = [
  { path: '/', component: Login }, 
  { path: '/recuperar-cuenta', component: Recuperar } ,
  { path: '/crear-cuenta' , component : CrearCuenta },
  { path: '/acceso-error' , component : AccesoError }, 
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})
const app = createApp(App);
app.component("pp-button",button);
app.component("pp-email", inputEmail)
app.component("pp-password",inputPassword)
app.component("pp-link",linkghost)
app.use(router)
app.use(pinia)
app.mount("#app");
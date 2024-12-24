<template>
    <section class="section">
      <div class="container">
         <div class="columns is-centered">
           <div class="column is-4">
               <div class="box">
                 <h1 class="title tracking-wide text-blue-700">Acceso</h1>                 
                 <form  @submit.prevent="onSubmit" >      
                  <pp-email :sending="f.sending" label="Correo Electrónico" v-model="f.email" />
                  <pp-password :sending="f.sending" label="Contraseña" v-model="f.password" />                   
                   <pp-button :sending="f.sending" :valid="isValid().success" text="Enviar" />

                   <div class="field">
                     <div class="control has-text-centered">
                        <a @click="link" class="button is-ghost" href="/#/recuperar">¿ Olvide la contraseña ?</a>
                     </div>
                   </div>
                 </form>
               </div>               
               <div class="column has-text-centered">                  
                  <a @click="link" class="button is-ghost" href="/#/crear-cuenta" >Crear cuenta</a>
               </div>
           </div>
         </div>
      </div>      
    </section>
</template>

<script setup >
 import { z } from "zod" 
 import axios from "axios" 
 import { ref , reactive} from "vue"
 import { Mail , Asterisk } from 'lucide-vue-next';

 const link = (event)=>{ f.sending  &&  event.preventDefault() }

 const f = reactive({
  email:"",
  password:"",
  sending:false
 });

 var user = z.object({
    email:z.string().email().min(4).max(20),
    password:z.string().min(4).max(20)
 });

 const isValid = ()=> user.safeParse({ "email":f.email, "password":f.password })
 
 const onSubmit = ()=>{    
    f.sending = true;
    setTimeout(()=>{
      f.sending = false;
    },3000);      
    //axios({ "method":"post", "url":"https://csweb.sistematizate.cl/login" }).then(( response)=>{ console.log( response ); });
 }
</script>
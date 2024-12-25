<template>
	    <section class="section">
      <div class="container">
         <div class="columns is-centered">
           <div class="column is-4">
               <div class="box">
                 <h1 class="title tracking-wide text-blue-700">Recuperar</h1>                 
                 <form  @submit.prevent="onSubmit" >
                                   
                    <pp-email label="Correo Electrónico" v-model="f.email" />
                    <pp-button  :valid="isValid().success" text="Enviar" />
                    <pp-link @click="setEmail()" linkto="/#/"  text="Tengo cuenta" />
                 </form>
               </div>               
                <pp-link @click="setEmail()" linkto="/#/crear-cuenta"  text="Crear cuenta" />
           </div>           
         </div>
      </div>      
    </section>
</template>
<script setup >
 import { z } from "zod" 
 import axios from "axios" 
 import { ref , reactive , provide } from "vue"
 import { Mail } from 'lucide-vue-next';
 import { useStoreGeneral } from './../store/general.js'

  const  sending = ref(false);
  provide("sending",sending)

  const store = useStoreGeneral();

 const f = reactive({
  email: store.email   
 });

 var user = z.object({
    email:z.string().email().min(5).max(20)
 });

 const isValid = ()=> user.safeParse({ "email":f.email })
 
 const onSubmit = ()=>{    
    sending.value = true;
    setTimeout(()=>{
      sending.value = false;
    },3000);      
    //axios({ "method":"post", "url":"https://csweb.sistematizate.cl/login" }).then(( response)=>{ console.log( response ); });
 }
 
 const setEmail = ()=>{
    store.setEmail(email.value);
 }
</script>
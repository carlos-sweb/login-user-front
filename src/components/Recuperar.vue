<template>
	    <section class="section">
      <div class="container">
         <div class="columns is-centered">
           <div class="column is-4">
               <div class="box">
                 <h1 class="title tracking-wide text-blue-700">Recuperar</h1>                 
                 <form  @submit.prevent="onSubmit" >
                   <div class="field">
                     <label for="email" class="label tracking-wide">Correo Electronico</label>  
                     <div class="control has-icons-left">
                         <input :disabled="f.sending" id="email" name="email" class="input" type="text" autocomplete="off" autocapitalize="off" v-model="f.email" >
                        <span class="icon is-small is-left">
                          <Mail :size="20" />
                        </span>
                     </div>
                   </div>                   
                    
                    <pp-button :sending="f.sending" :valid="isValid().success" text="Enviar" />

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
 import { Mail } from 'lucide-vue-next';

 const link = (event)=>{ f.sending  &&  event.preventDefault() }

 const f = reactive({
  email:"admin@gmail.com",  
  sending:false
 });

 var user = z.object({
    email:z.string().email().min(5)    
 });

 const isValid = ()=> user.safeParse({ "email":f.email })
 

 const onSubmit = ()=>{    
    f.sending = true;
    setTimeout(()=>{
      f.sending = false;
    },3000);      
    //axios({ "method":"post", "url":"https://csweb.sistematizate.cl/login" }).then(( response)=>{ console.log( response ); });
 }
</script>
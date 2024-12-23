<template>      
    <section class="section">
      <div class="container">
         <div class="columns is-centered">
           <div class="column is-4">
               <div class="box">
                 <h1 class="title tracking-wide text-blue-700">Crear cuenta</h1>                 
                 <form  @submit.prevent="onSubmit" >
                   <div class="field">
                     <label for="email" class="label tracking-wide">Correo Electronico</label>  
                     <div class="control has-icons-left has-icons-right">
                        <input id="email" name="email" class="input" type="text" autocomplete="off" autocapitalize="off" v-model="f.email" >
                        <span class="icon is-small is-left">
                          <Mail :size="20" />
                        </span>
                        <span class="icon is-small is-right">
                          <Check :size="20" />
                          <!--<X :size="20" />-->
                        </span>
                     </div>
                     <p class="help is-danger">* Ingrese un correo valido</p>
                   </div>
                   <div class="field">                     
                     <div class="is-flex is-flex-column">
                      <label for="password" class="label tracking-wide is-flex-grow-1">Contraseña
                      </label>
                      <Eye v-if="showPass" @click="showPass=!showPass" :size="24"/>  
                      <EyeOff v-if="!showPass" @click="showPass=!showPass" :size="24"/>  
                     </div> 
                     
                     <div class="control has-icons-left">
                        <input id="password" name="password" class="input" :type="getTypePass()" autocomplete="off" autocapitalize="off" v-model="f.password" >
                        <span class="icon is-small is-left">
                          <Lock :size="20" />
                        </span>
                     </div>
                   </div>
                   <div class="field">
                     <label for="password-repeat" class="label tracking-wide">Repita la contraseña</label>  
                     <div class="control has-icons-left">
                        <input id="password-repeat" name="password" class="input" type="password" autocomplete="off" autocapitalize="off" v-model="f.passwordrepeat" >
                        <span class="icon is-small is-left">
                          <Lock :size="20" />
                        </span>                        
                     </div>
                     <p class="help is-danger">* La contraseña no coincide</p>
                   </div>
                   <div class="field">                     
                     <div class="control">
                         <button :disabled="!isValid().success || f.sending" type="submit" class="button is-primary is-fullwidth tracking-wide" >Crear</button>
                     </div>
                   </div>                   
                 </form>
               </div> 
              
               <div class="column has-text-centered">
                   <a @click="link" class="button is-ghost" href="/#/" >Tengo cuenta</a>
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
 import { Mail , Lock , Eye , Check , X , EyeOff } from 'lucide-vue-next';

 

 const f = reactive({
  email:"admin@gmail.com",
  password:"12345554",
  passwordrepeat:"elpdlepedlpeldplepl",
  sending:false
 });

 const showPass = ref(false);

 const getTypePass = function(){
   return showPass.value ? "text":"password";
 }

 const link = (event)=>{ f.sending  &&  event.preventDefault() }

 var user = z.object({
    email:z.string().email().min(5),
    password:z.string().min(4).max(10),
    passwordrepeat:z.string().min(4).max(10)
 });

 const isValid = ()=> user.safeParse({ "email":f.email, "password":f.password ,"passwordrepeat":f.passwordrepeat})
 

 const onSubmit = ()=>{    
    f.sending = true;
    setTimeout(()=>{
      f.sending = false;
    },3000);      
    //axios({ "method":"post", "url":"https://csweb.sistematizate.cl/login" }).then(( response)=>{ console.log( response ); });
 }
</script>
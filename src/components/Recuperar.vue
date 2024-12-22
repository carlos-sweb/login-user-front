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
                        <input id="email" name="email" class="input" type="text" autocomplete="off" autocapitalize="off" v-model="email" >
                        <span class="icon is-small is-left">
                          <Mail :size="20" />
                        </span>
                     </div>
                   </div>                   
                   <div class="field">                     
                     <div class="control">
                        <button type="submit" class="button is-primary is-fullwidth tracking-wide" >Enviar</button>
                     </div>
                   </div>                   
                 </form>
               </div>               
               <div class="column has-text-centered">
                	<a class="button is-ghost" href="/#/" >Tengo una cuenta</a>
               </div>
           </div>           
         </div>
      </div>      
    </section>
</template>
<script setup>
	 import { Mail } from 'lucide-vue-next';
   import { ref } from 'vue'
   const email = ref('');
</script>
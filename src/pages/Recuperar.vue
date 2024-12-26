<template>
	    <section class="section">
      <div class="container">
         <div class="columns is-centered">
           <div class="column is-4">
               <div class="box">
                 <h1 class="title tracking-wide text-blue-700">Recuperar</h1>                 
                 <form  @submit.prevent="onSubmit" >
                                   
                    <pp-email ref="input-email" label="Correo Electrónico" v-model="email" />
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
 import { ref , provide , watch , onMounted, useTemplateRef } from 'vue'
 import { Mail } from 'lucide-vue-next';
 import { useStoreGeneral } from './../store/general.js'
 import { email as v_email } from './../zod/validation.js'
 const inputEmail = useTemplateRef('input-email') 
 const  sending = ref(false),
 store = useStoreGeneral(),
 email = ref(store.email),
 isValid = ()=> v_email.safeParse(email.value)

 provide("sending",sending)

 const onSubmit = ()=>{    
    sending.value = true;
    setTimeout(()=>{
      sending.value = false;
    },3000);      
    //axios({ "method":"post", "url":"https://csweb.sistematizate.cl/login" }).then(( response)=>{ console.log( response ); });
 }

 const setEmail = ()=>store.setEmail(email.value)

 watch( email , ( newVl) => {        
    if( store.saveLocalStorage ){
        store.setEmail(email.value)
        store.saveEmail(email.value)
    }
})


 onMounted(()=>{    
    if( !v_email.safeParse(email.value).success ){                      
        setTimeout(()=>{
            inputEmail.value.$el.querySelector("input").focus()
            inputEmail.value.$el.querySelector("input").click()
        })
    }
})

</script>
<template>
    <section class="section">
      <div class="container">
         <div class="columns is-centered">
           <div class="column is-4">
               <div class="box">
                 <h1 class="title tracking-wide text-blue-700">Acceso</h1>                 
                 <form  @submit.prevent="onSubmit" >

                  <pp-email ref="input-email" :focus="false" label="Correo Electrónico" v-model="email" />

                  <pp-password ref="input-password" :focus="false" label="Contraseña" v-model="password" />                   
                <div class="field">
                    <div class="control">
                        <label class="checkbox" for="remember">
                            
                    <input v-model="remember" name="remember" id="remember" :disabled="sending" type="checkbox" />&nbsp;&nbsp;Recuerdame</label>
                    </div>
                   </div>



                   <pp-button :valid="isValid().success" text="Enviar" />
                   
                   
                   <pp-link @click="setEmail()" linkto="/#/recuperar-cuenta" :sending="sending" text="¿ Olvide la contraseña ?" />                   
                 </form>
               </div>               
                              
               <pp-link @click="setEmail()" linkto="/#/crear-cuenta" :sending="sending" text="Crear cuenta" />

           </div>
         </div>
      </div>      
    </section>
</template>
<script setup >
 import { 
    ref ,     
    watch ,     
    provide,
    useTemplateRef,
    onMounted
} from 'vue'    

 import { Mail , Asterisk } from 'lucide-vue-next';
 import { useStoreGeneral } from './../store/general.js'
 import { valid , email as v_email } from './../zod/validation.js'

 const inputEmail = useTemplateRef('input-email') 
 const inputPassword = useTemplateRef('input-password') 

 const store    = useStoreGeneral();
 const remember = ref( store.saveLocalStorage );
 const email    = ref(store.email);

 // Codigo duplicado
 if( remember.value ){
    store.setEmail(email.value)
    store.saveEmail(email.value)
 }

 const password = ref("");
 const  sending = ref(false); 
 provide("sending",sending)
 const isValid = ()=>valid( email.value , password.value );
 
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

watch( email , ( newVl) => {        
    if( remember.value ){
        store.setEmail(email.value)
        store.saveEmail(email.value)
    }
})

watch( remember ,( newVl )=>{    
    store.saveLocalStorage = newVl;
    if( newVl == true ){      
      store.saveEmail( email.value )
    }else{      
      store.removeEmail();  
    }
})


onMounted(()=>{    
    if( v_email.safeParse(email.value).success ){        
        setTimeout(()=>{            
            inputPassword.value.$el.querySelector("input").focus()
            inputPassword.value.$el.querySelector("input").click()
        })        
    }else{
        setTimeout(()=>{
            inputEmail.value.$el.querySelector("input").focus()
            inputEmail.value.$el.querySelector("input").click()
        })
    }
})



</script>
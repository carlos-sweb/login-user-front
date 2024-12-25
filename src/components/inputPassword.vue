<template>
    <div class="field">	

		<div class="is-flex is-flex-column">
		  <label for="password" class="label tracking-wide is-flex-grow-1" v-text="label"></label>  
		  <EyeOff v-if="showPass" @click="changeShowPass(sending)" :size="24"/>  
		  <Eye :class="{'text-gray-200':sending}"  v-else @click="changeShowPass(sending)"  :size="24"/>  
		</div> 
	
		<div class="control has-icons-left has-icons-right">
			<input :disabled="sending" @focus="focus=true;" @blur="dirty=true;runValid(password)" v-model="password" id="password" name="password" class="input duration-200 transition-all ease-in" :class="{'is-danger':noValid,'is-success':valid}" :type="showPass ? 'text' : 'password' " autocomplete="off" autocapitalize="off" minlength="4" maxlength="20"  >
            <span class="icon is-small is-left"><Asterisk :class="{'text-green-600':valid && !sending,'text-red-700':noValid}" :size="20" /></span>
            <span class="icon is-small is-right">
            	<Check v-if="valid" :class="{'text-green-600':!sending}" :size="20" />
            	<X v-else-if="noValid" class="text-red-700" :size="20" />
            </span>
		</div>
	</div>
</template>
<script setup>	
import { ref , watch } from "vue"	
import { z } from "zod" 
import { Asterisk , Check , X , EyeOff , Eye } from 'lucide-vue-next'

const password = defineModel()
const valid = ref(false)
const noValid = ref(false)
const dirty = ref(false)
const focus = ref(false)
const showPass = ref(false)
const passwordSchema = z.string().min(4).max(20)

const changeShowPass = (_s)=>{ 
	if( _s==false){ showPass.value=!showPass.value }	
}

const isValid = ( vl ) => {	
	let passwordValidation = passwordSchema.safeParse( vl ).success;
	if( passwordValidation && !dirty.value  ){ dirty.value = true; }
	/*
	console.log("----------------------------------------------------------");
	console.log("Focus is : " , focus.value);
	console.log("Dirty is : " , dirty.value);
	console.log("Email Schmea is : " ,passwordSchema.safeParse( vl ).success);
	console.log("----------------------------------------------------------");
	*/
	const result = ( focus.value &&  passwordValidation );
	// console.log( result );
	return result;
}


const props = defineProps({
	"value":{
		"type":String,
		"default":""
	},
	"label":{
		"type":String,
		"required":true
	},
	"sending":{
		"type":Boolean ,
		"required":true , 
		"default":false,
	}	
});



const runValid = ( newVl , oldVl )=>{	
	const validTemp = isValid( newVl );
	valid.value = validTemp;
	noValid.value = !validTemp && focus.value && dirty.value;	
}

watch( password , runValid );
watch( ()=> props.sending ,(newSend)=>{
	if( showPass.value == true && newSend == true ){
		showPass.value = false;
	}		
} )


if( password.value !== "" ){	
	focus.value= true;
	dirty.value = true;
	runValid( password.value )
}
</script>
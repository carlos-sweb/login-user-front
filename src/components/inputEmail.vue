<template>
    <div class="field">	
	<label for="email" class="label tracking-wide" v-text="label"></label>  
		<div class="control has-icons-left has-icons-right">
			<input :disabled="sending" @focus="focus=true;" @blur="dirty=true;runValid(email)" v-model="email" id="email" name="email" class="input" :class="{'is-danger':noValid,'is-success':valid}" type="text" autocomplete="off" autocapitalize="off"  >
            <span class="icon is-small is-left"><Mail :class="{'text-green-600':valid && !sending,'text-red-700':noValid}" :size="20" /></span>
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
import { Mail , Check , X } from 'lucide-vue-next'

const email = defineModel()
const valid = ref(false)
const noValid = ref(false);
const dirty = ref(false)
const focus = ref(false)
const emailSchema = z.string().email().min(5);
const isValid = ( vl )=>{	
	let emailValidation = emailSchema.safeParse( vl ).success;
	if( emailValidation && !dirty.value  ){ dirty.value = true; }
	/*
	console.log("----------------------------------------------------------");
	console.log("Focus is : " , focus.value);
	console.log("Dirty is : " , dirty.value);
	console.log("Email Schmea is : " ,emailSchema.safeParse( vl ).success);
	console.log("----------------------------------------------------------");
	*/
	const result = ( focus.value &&  emailValidation );
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
		"required":true
	}	
});

const runValid = ( newVl , oldVl )=>{	
	const validTemp = isValid( newVl );
	valid.value = validTemp;
	noValid.value = !validTemp && focus.value && dirty.value;	
}

watch( email , runValid );

if( email.value !== "" ){
	console.log("hola", email.value);
	focus.value= true;
	dirty.value = true;
	runValid( email.value )
}
</script>
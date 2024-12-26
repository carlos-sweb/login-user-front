<template>			
    <div class="field">	
	<label for="email" class="label tracking-wide" v-text="label"></label>  
		<div class="control has-icons-left has-icons-right">
			<input ref="input-email" :disabled="sending" @focus="focus=true;" @blur="dirty=true;runValid(email)" v-model="email" id="email" name="email" class="input duration-200 transition-all ease-in" :class="{'is-danger':noValid,'is-success':valid}" type="text" autocomplete="off" autocapitalize="off">
            <span class="icon is-small is-left"><Mail :class="{'text-green-600':valid && !sending,'text-red-700':noValid}" :size="20" /></span>
            <span class="icon is-small is-right">
            	<Check v-if="valid" :class="{'text-green-600':!sending}" :size="20" />
            	<!-- <X v-else-if="noValid" class="text-red-700" :size="20" />-->
            </span>
		</div>
	</div>
</template>

<script setup>	
import { ref , watch , inject } from 'vue'
import { email as v_email } from './../zod/validation.js'
import { Mail , Check , X } from 'lucide-vue-next'
import dataProps from './../props/inputEmail.js'

const sending = inject('sending');

const email = defineModel()
const valid = ref(false)
const noValid = ref(false);
const dirty = ref(false)
const focus = ref(false)

const isValid = ( vl )=>{	
	let emailValidation = v_email.safeParse( vl ).success;
	if(emailValidation && !dirty.value){dirty.value = true}
	return focus.value && emailValidation;	
}

const props = defineProps(dataProps);

const runValid=(newVl,oldVl)=>{		
	const validTemp = isValid(newVl);
	valid.value = validTemp;
	noValid.value = !validTemp && focus.value && dirty.value;	
}

watch(email,runValid);

if(email.value !== ''){
	focus.value= true;
	dirty.value = true;
	runValid(email.value)
}
</script>
<template>
	<div class="column has-text-centered">                  		
		<a :href="linkto">
			<button type="button" :disabled="sending" class="button is-ghost duration-200 transition-all ease-in" v-text="text" ></button>
		</a>		
	</div>
</template>
<script setup >
import { inject } from 'vue'	
import dataProps  from './../props/linkghost.js'	
const sending = inject("sending")
const props   = defineProps(dataProps)
</script>
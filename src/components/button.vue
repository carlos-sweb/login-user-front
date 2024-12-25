<template>	
	<div class="field" >
		<div class="control">
			<button type="submit" :disabled="sending || !valid " class="button is-primary is-fullwidth tracking-wide duration-300 transition-colors transition-opacity ease-in" >{{ sending ? textSending : text }}<Loader class="animate-spin" :size="24" v-show="sending" /></button>
		</div>	
	</div>	
</template>
<script setup >
	import { inject } from 'vue'		
	import { Loader } from 'lucide-vue-next';
	import dataProps  from './../props/button.js'	
	const sending = inject("sending");
	const props   = defineProps(dataProps)	
</script>
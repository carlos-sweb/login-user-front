<template>	
	<div class="field" >
		<div class="control">
			<button type="submit" :disabled="sending || !valid " class="button is-primary is-fullwidth tracking-wide" >{{ sending ? textSending : text }}<Loader class="animate-spin" :size="24" v-show="sending" /></button>
		</div>	
	</div>
	
</template>
<script setup >

	import { Loader } from 'lucide-vue-next';
	const props = defineProps({
		"text":{
			"type":String,
			"required":true			
		},
		"text-sending":{
			"type":String,
			"required":false,
			"default":""			
		},
		"sending":{
			"type":Boolean,
			"required":true			
		},
		"valid":{
			"type":Boolean,
			"required":true
		}
	})	
</script>
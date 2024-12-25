<template>
	<div class="column has-text-centered">                  		
		<a :href="props.linkto" >
			<button type="button" :disabled="props.sending" class="button is-ghost duration-300 transition-all ease-in" v-text="props.text" ></button>
		</a>		
	</div>
</template>
<script setup >
const props = defineProps({	
	"sending":{
		"type":Boolean ,
		"required":true
	},
	"text":{
		"type":String,
		"default":"Link to"
	},
	"linkto":{
		"type":String,
		"default":"/#/"
	}	
});
</script>
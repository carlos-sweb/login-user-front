import "npm:normalize.css";
import "npm:@fontsource/ubuntu";
import "npm:bulma"
import "./style.css";
import m from "mithril";
import stateLogin from "./model/stateLogin.js";
import { createIcons, icons } from 'lucide';
var root = document.getElementById("root");
const stateLogininit = new stateLogin();

function formInputView(attr,value,setValue){	
	return m("div",{class:"field"},[
		m("label.label",attr.label),
		m("div.control has-icons-left",[
			m("input.input",{
				"class":"is-success",
			    "type":attr.type,
			    "value":value,
			    oninput:(ev)=>{setValue(ev.target.value)}
			}),
			m("span",{class:"icon is-small is-left"},m("i",{"data-lucide":attr.icon,width:"20px"}))
		])
	])
}

var formButtonSubmit = (buttonText,state)=>{
	return m("div.field",
		m("div.control",
			m("button.button is-primary is-fullwidth",{
				disabled:!state.valid
	},"Enviar")))
}

var formView = function(state){	
	return m("form",{
		onsubmit:function(event){
			event.preventDefault();
		}
		},[
			formInputView({
				"label":"Correo Electrónico","type":"text","icon":"mail"
			},state.email,state.setEmail),			
			formInputView({
				"label":"Contraseña","type":"password","icon":"lock"
			},state.password,state.setPassword),
			formButtonSubmit("Enviar",state),
		])
};

var loginView = function(state){
	return m("section.section",
			m("div.container",
				m("div.columns is-centered",
					m("div.column is-4",
						m("div.box",[
							m("h1.title has-text-centered","Acceso"),
							formView(state)
						])
					)
				))
		   );
}


    
m.route(root,"/",{
	'/':{
		view:()=>{
			return loginView( stateLogininit )
		}
	},
	'/register':{
		view:()=>{
			return m("i",{"data-lucide":"badge-check"})
		}
	}
});

createIcons({ icons });

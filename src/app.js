import "npm:normalize.css";
import "npm:@fontsource/ubuntu";
import "npm:bulma"
import "./style.css";
import m from "mithril";
import { email , password } from "./model/loginInput.js";

import { createIcons, icons } from 'lucide';

var root = document.getElementById("root");

var count = 0 // added a variable
var disabled = true;

var isDisabled = ()=>{
	return  disabled ? {"disabled":true}:{};
}

// shadow shadow-slate-400

var loginView = function(formView){
	return m("section",{class:"section"},
			m("div",{class:"container"},
				m("div",{class:"columns is-centered"},
					m("div",{class:"column is-4"},
						m("div",{class:"box"},[
							m("h1",{class:"title has-text-centered"},"Acceso"),
							formView
						])
					)
				))
		   );
}

var formInputView = (labelText,inputType,inputIcon)=>{
	return m("div",{class:"field"},[
		m("label",{class:"label"},labelText),
		m("div",{class:"control has-icons-left"},[
			m("input",{
				class:"input",
			    type:inputType,			    
			    onkeyup:function(el){			    	
			    	console.log("cambiando....",el.target.value);
			    	disabled=false
			    }
			}),
			m("span",{class:"icon is-small is-left"},m("i",{"data-lucide":inputIcon,width:"20px"}))
		])
	])
}

var formButtonSubmit = (buttonText)=>{
	return m("div",{class:"field"},m("div",{class:"control"},m("button",{class:"button is-primary is-fullwidth",disabled:isDisabled()},buttonText)))
}

var formView = m("form",{},[
	formInputView("Correo Electronico","text","mail"),
	formInputView("Contraseña","password","lock"),
	formButtonSubmit("Enviar"),	
]);

var Hello = {
    view:()=>{
		return loginView( formView )
	}
}


m.route(root,"/",{
	"/":Hello,
	"/register":{
		view:()=>{
			return m("i",{"data-lucide":"badge-check"})
		}
	}
});


createIcons({ icons });

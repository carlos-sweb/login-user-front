function stateForm(){	
	if(!(this instanceof stateForm)){ return new stateForm }
	this.email="";	
	this.password="";
	this.valid = false;
	this.setPassword=(vl)=>{		
		this.password=vl
		this.checkValid();
	}
	this.setEmail=(vl)=>{		
		this.email=vl
		this.checkValid();
	}
	this.checkValid = function(){
		const valid = ( this.email != "" && this.password != "" );
		if( this.valid != valid ){ this.valid = valid }
	}
}

module.exports = stateForm
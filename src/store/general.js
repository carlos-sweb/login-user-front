import MobileDetect from 'mobile-detect';
const md = new MobileDetect(window.navigator.userAgent);
const isMobile = md.mobile()
import { defineStore } from 'pinia'
const get_userEmail = localStorage.getItem("user_email");
const saveLocalStorage = get_userEmail !== null && get_userEmail !== "" ;

export const useStoreGeneral = defineStore('email', {
  state: () => {
    return { 
      saveLocalStorage : saveLocalStorage , 
      email : saveLocalStorage ? get_userEmail : "" ,
      isMobile : isMobile
    }
  },  
  actions: {
    removeEmail(){
      localStorage.removeItem('user_email');
    },
    saveEmail( nEmail){
      if( nEmail !== "" ){
        localStorage.setItem( 'user_email' , nEmail );
      }
    },
    setEmail( nEmail ){
      this.email = nEmail; 
    },
    increment() {
      this.count++
    },
  },
})
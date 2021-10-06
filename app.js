//Vue læser ikke ; semikolon

const app = Vue.createApp({

    data(){
        return{
            name:''
        }
     
    }, 
    methods:{
     logName:function(){
        console.log("Du har skrevet dit navn")
     },
     handeleEventCrash(){
        
        var audio = new Audio (src='/trommesæt/sounds/crash.mp3')
        audio.play()
     },
     handeleEventTom4(){
        var audio = new Audio (src='/trommesæt/sounds/tom-4.mp3')
        audio.play()
     },
     handeleEventTom1(){
        var audio = new Audio (src='/trommesæt/sounds/tom-1.mp3')
        audio.play()
     },
     handeleEventKick(){
        var audio = new Audio (src='/trommesæt/sounds/kick-bass.mp3')
        audio.play()
     },
     handeleEventTom2(){
        var audio = new Audio (src='/trommesæt/sounds/tom-2.mp3')
        audio.play()
     },
     handeleEventTom3(){
        var audio = new Audio (src='/trommesæt/sounds/tom-3.mp3')
        audio.play()
     },
     handeleEventSnare(){
        var audio = new Audio (src='/trommesæt/sounds/snare.mp3')
        audio.play()
     }


    }

}
)


app.mount('#app')

const input = {
data(){
    return{
    navn: '',
    email: '',
    adgangskode:{
        adganskode: '',
        gentag: ''
    },
    telefonnummer: '',
    adresse: '',
    postnummer: ''

    }
},

methods:{
    submitForm(){
        console.log("der sker noet her")
        
    }
}
}
Vue.createApp(input).mount('#input')

    /* 

    Kan ikke få det her til at virke!
    validate(){
        if(navn==null || navn==""){
            alert("Du har ikke skrevet et navn")
        }
        else if(adgangskode>5){
            alert("Din adgangskode skal have mindst 5 tegn")
        }
        else if(adgangskode != gentag){
            alert("Det er ikke en korrekt gentagelse af din adgangskode")
        }
        else if(telefonnummer != 8){
            alert("Forkert indskrevet telefonnummer")
        }
        else if(postnummer != 4){
            alert("Forkert indskrevet postnummer")
        }
        else{
            alert("Tillykke du klarede det")
        }

    }

}  */


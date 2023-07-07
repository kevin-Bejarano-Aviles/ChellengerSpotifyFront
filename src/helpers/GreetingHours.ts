enum Greetings {
    Dias='Buenos Dias',
    Tardes= 'Buenas Tardes',
    Noches = 'Buenas Noches'

}

export const greetingHours = ()=>{
    const hours = new Date().getHours();
    console.log(hours);
    
    if( hours>=9 && hours<=12){
        return Greetings.Dias
    }
    if(hours>=12 && hours<20){
        return Greetings.Tardes
    }
    return Greetings.Noches
}
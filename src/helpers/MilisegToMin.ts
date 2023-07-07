import { Track } from "../interfaces/dataMusicsSpotify";

export const convertMiliSegToMinSeg = (milisegundos:number)=>{
    const segTotal = Math.floor(milisegundos/1000);
    const min = Math.floor(segTotal/60);
    const seg = segTotal % 60;

    return {
        min,seg
    }
}
export const sumDuration = (musics:Track[])=>{
    
    const result = musics.reduce((total,music)=> total + music.duration_ms,0);
    return result
}
export const convertirAHora = (miliseg:number)=>{
    const minutos = Math.floor(miliseg / 60000);
    const horas = Math.floor(minutos / 60);
    const minutosRestantes = minutos % 60;
    return {
        horas,minutosRestantes
    }
}
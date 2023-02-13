let horas = 0;
let minutos = 0;
let segundos = 0;

let cronometro;
let tempo = 1000; // Mil milisegundos

function Iniciar(){
  cronometro = setInterval(() => {
    Timer(); 
  }, tempo);

}
function Pausar(){
  clearInterval(cronometro);
}

function Parar(){
  clearInterval(cronometro);
  horas = 0;
  minutos = 0;
  segundos = 0;
  document.getElementById("contador").innerText = "00:00:00";
}

function Timer(){
  segundos++;

  if(segundos == 60){
    segundos = 0;

    minutos++;

    if(minutos == 60){
      minutos = 0;
      
      horas++;
    }
  }
  
  
  let formatData = (horas < 10 ? '0' + horas : horas) + ':' + (minutos < 10 ? '0' + minutos : minutos) + ':' + (segundos < 10 ? '0' + segundos : segundos);
  document.getElementById("contador").innerText = formatData;
}
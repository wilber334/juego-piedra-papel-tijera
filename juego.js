function manoPc() {
  aleatorio = Math.floor(Math.random() * 3 + 1);
  switch (aleatorio) {
    case 1:
        document.getElementById("manopc").innerText = "PIEDRA";
      break;
    case 2:
        document.getElementById("manopc").innerText = "PAPEL";
      break;
    default:
        document.getElementById("manopc").innerText = "TIJERA";
      break;
  }
  return aleatorio;
}
function ColoryHtml(textResultado, colores) {
  document.getElementById("resultado").innerText = textResultado;
  document.getElementById("resultado").style.color =colores;
}
// interaacion con el ususario
let contador=0;
function manoUser(eleccion) {
  manoPc();
  if (aleatorio == eleccion) {
    ColoryHtml("EMPATE", "violet");
  } else if (aleatorio == 1 && eleccion == 2) {
    ColoryHtml("GANASTE","blue");
    contador+=1;
  } else if (aleatorio == 3 && eleccion == 1) {
    ColoryHtml("GANASTE","blue");
    contador+=1;
  } else if (aleatorio == 2 && eleccion == 3) {
    ColoryHtml("GANASTE","blue");
    contador+=1;
  } else {
    ColoryHtml("PERDISTE", "red");
    contador=0;
    document.getElementById("victorias").style.color = "black";
  }
  document.getElementById("victorias").innerText = "Victorias seguidas: "+contador;
  premio();
}
// contador de victorias
function premio() {
  if (contador===3) {
    document.getElementById("victorias").innerText = "GANASTE";
    document.getElementById("victorias").style.color= "blue";
    document.getElementById("premio").innerHTML = '<a href="https://platzi.com/r/wilberd334/" target="_blank" rel="noopener noreferrer">Reclamar Premio</a>';
    document.getElementById("premio").style.color= "red";
    document.getElementById("regalo").style.display="block";
  }
}


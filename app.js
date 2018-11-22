irAPreguntas = () => {
  saludo.style.display = "none";
  categoria.style.display = "block";
  preguntasMundo.style.display = "none";
  preguntasMiscelaneas.style.display = "none";
  let name = document.getElementById("nombreIngresado").value;
  document.getElementById("nombre").innerHTML = "Hola " + name.toUpperCase();
}

questionMundo = () => {
  saludo.style.display = "none";
  categoria.style.display = "none";
  preguntasMundo.style.display = "block";
  preguntasMiscelaneas.style.display = "none";
}

questionMiscelaneas = () => {
  saludo.style.display = "none";
  categoria.style.display = "none";
  preguntasMundo.style.display = "none";
  preguntasMiscelaneas.style.display = "block";
}

finalizar1 = () => {
  let pregunta1 = document.trivia1.preguntaA1.value;
  let pregunta2 = document.trivia1.preguntaA2.value;
  let pregunta3 = document.trivia1.preguntaA3.value;
  let correctas = 0; 

  if (pregunta1 == "8") {
    correctas++;
  }

  if (pregunta2 == "El sol") {
    correctas++;
  }
  if (pregunta3 == "La vía láctea") {
    correctas++;
  }

  

}

/*
function questionmundo(){
  var puntos = 0;
  var respuesta1= prompt("¿Cuantos planetas tiene nuestro sistema solar?");
  
  if (respuesta1.toUpperCase()== "8".toUpperCase()){
    puntos=puntos + 1;
  }else {
     }
var respuesta2= prompt("¿Cuál es nuestra principal fuente de energia?");
  if (respuesta2=='El sol')
     {
       puntos=puntos + 1;
  }else {
    }
var respuesta3= prompt("¿Cuál es el nombre de nuestra galaxia?");
  if (respuesta3.toUpperCase()== "la vía láctea".toUpperCase()){
    
    puntos=puntos + 1;
  }else {
      }
  alert("tu puntaje final es " + puntos);
 }

function questionmiscelaneas(){
  var puntos= 0;
  var respuesta1= prompt("¿Quién descubrió America? ");
  if (respuesta1.toUpperCase()== "Cristobal Colón".toUpperCase()){
    
    puntos=puntos + 1;
  }else {
     }
var respuesta2= prompt("¿En qué continente se encuentra Chile?");
  if (respuesta2.toUpperCase()== "America del sur".toUpperCase())
     {
    
       puntos=puntos + 1;
  }else {
    }
var respuesta3= prompt("¿En qué año terminó la segunda guerra mundial?");
  if (respuesta3.toUpperCase()== "1945".toUpperCase()){
    
    puntos=puntos + 1;
  }else {
    }
  alert("tu puntaje final es " + puntos);
}
*/ 

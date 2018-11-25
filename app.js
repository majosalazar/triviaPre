irAPreguntas = () => {
  saludo.style.display = "none";
  categoria.style.display = "block";
  preguntasMundo.style.display = "none";
  preguntasMiscelaneas.style.display = "none";
  verResultados.style.display = "none";
  let name = document.getElementById("nombreIngresado").value;
  document.getElementById("nombre").innerHTML = "Hola " + name.toUpperCase();
}

questionMundo = () => {
  saludo.style.display = "none";
  categoria.style.display = "none";
  preguntasMundo.style.display = "block";
  preguntasMiscelaneas.style.display = "none";
  verResultados.style.display = "none";
}

questionMiscelaneas = () => {
  saludo.style.display = "none";
  categoria.style.display = "none";
  preguntasMundo.style.display = "none";
  preguntasMiscelaneas.style.display = "block";
  verResultados.style.display = "none"; 
}


resultado1 = () => {
  saludo.style.display = "none";
  categoria.style.display = "none";
  preguntasMundo.style.display = "none";
  preguntasMiscelaneas.style.display = "none";
  verResultados.style.display = "block"; 

  let pregunta1 = document.trivia1.preguntaA1.value;
  let pregunta2 = document.trivia1.preguntaA2.value;
  let pregunta3 = document.trivia1.preguntaA3.value;
  let correctas = 0; 
  let incorrectas = 0;

  console.log(pregunta1, pregunta2, pregunta3)
  
  if (pregunta1 == "8") {
    correctas++;
  } else {
    incorrectas++;
  }

  if (pregunta2 == "El sol") {
    correctas++;
  }else {
    incorrectas++;
  }

  if (pregunta3 == "La vía láctea") {
    correctas++;
  }else {
    incorrectas++;
  }

  document.getElementById("verResultados").innerHTML = correctas;
}

resultado2 = () => {
  saludo.style.display = "none";
  categoria.style.display = "none";
  preguntasMundo.style.display = "none";
  preguntasMiscelaneas.style.display = "none";
  verResultados.style.display = "block"; 

  let pregunta4 = document.trivia2.preguntaB1.value;
  let pregunta5 = document.trivia2.preguntaB2.value;
  let pregunta6 = document.trivia2.preguntaB3.value;
  let correctas = 0; 
  let incorrectas = 0;

  console.log(pregunta4, pregunta5, pregunta6)
  
  if (pregunta4 == "Cristobal Colón") {
    correctas++;
    console.log("casi")
  } else {
    incorrectas++;
  }

  if (pregunta5 == "América del sur") {
    correctas++;
  }else {
    incorrectas++;
  }

  if (pregunta6 == "1945") {
    correctas++;
  }else {
    incorrectas++;
  }

  document.getElementById("verResultados").innerHTML = correctas;
}

  
// arreglo  de las preguntas. Este sera el orden que se mostrarán
let preguntash = [
                  "¿Como se llamaban los gobernantes del antiguo egipto?",
                  "los samurais eran...",
                  "¿Cuál fue el primer metal que el hombre empleó?", 
                  "¿En qué lugar del mundo se dio el origen de la humanidad?", 
                  "¿Quién exploro el nuevo mundo?"
                  ];

let correctah = [0,0,2,1,2];      //arreglo que guardara la opcion correcta
let opcionesh = [];              //arreglo que guardara los respuestas de cada pregunta
let posActualh = 0;              //variable que guarda la posicion actual
let cantidadAcertadash = 0;      //variable que guarda la cantidad acertadas hasta el moemento

//cargo en el arreglo opciones las opciones a mostrar en cada nivel 
opcionesh.push(["FARAONES", "BASILEOS", "ALCALDES"]);
opcionesh.push(["GUERREROS JAPONESES", "ALIADOS DE ESPARTA", "GUERREROS PERSA"]);
opcionesh.push(["PLATA", "ORO", "BRONCE"]);
opcionesh.push(["EUROPA", "AFRICA", "AMERICA"]);
opcionesh.push(["SHAKESPEARE", "DA VINCI", "COLON"]);

function Historia(){//reseteamos las variables
                  posActualh = 0;
                  cantidadAcertadash = 0;
                  //activamos las pantallas necesarias
                  document.getElementById("pantalla-inicial").style.display = "none";
                  document.getElementById("pantalla-juego").style.display = "block";
                  cargarPreguntash();
                  BloqueoOpH ()
                  }

function cargarPreguntash(){//funcion que carga la siguiente pregunta y sus opciones        
                     if(preguntash.length <= posActualh){//controlo si se acaban las preguntas
                                  terminarJuegoh();
                    }else{//cargo las opciones
                          limpiarOpcionesh();//limpiamos las clases que se asignaron

                          document.getElementById("Textpreguntas").innerHTML =   preguntash[posActualh];//revisar//
                          document.getElementById("nH0").innerHTML = opcionesh[posActualh][0];
                          document.getElementById("nH1").innerHTML = opcionesh[posActualh][1];
                          document.getElementById("nH2").innerHTML = opcionesh[posActualh][2];
                          }
            }

function limpiarOpcionesh(){
            document.getElementById("nH0").className = "nombre";
            document.getElementById("nH1").className = "nombre";
            document.getElementById("nH2").className = "nombre";

            document.getElementById("lH0").className = "letra";
            document.getElementById("lH1").className = "letra";
            document.getElementById("lH2").className = "letra";
        }

function comprobarRespuestaH(opElegidah){
            if(opElegidah==correctah[posActualh]){ //acertó
                    //agregamos las clases para colocar el color verde a la opcion elegida
                    document.getElementById("nH" + opElegidah).className = "nombre nombreAcertada";
                    document.getElementById("lH" + opElegidah).className = "letra letraAcertada";
                    cantidadAcertadash++;
            }else{//no acerto
                    //agramos las clases para colocar en rojo la opcion elegida
                    document.getElementById("nH" + opElegidah).className = "nombre nombreNoAcertada";
                    document.getElementById("lH" + opElegidah).className = "letra letraNoAcertada";
                    //opcion que era correcta
                    document.getElementById("nH" + correctah[posActualh]).className = "nombre nombreAcertada";
                    document.getElementById("lH" + correctah[posActualh]).className = "letra letraAcertada";
                  }
          posActualh++;
          setTimeout(cargarPreguntash,1000);//Esperamos 1 segundo y pasamos mostrar la siguiente pregunta y sus opciones
       }

function BloqueoOpH (){

        document.getElementById("opcionesC").style.display = "none";
        document.getElementById("opcionesM").style.display = "none";
        document.getElementById("opcionesH").style.display = "block"
}
  
function terminarJuegoh(){
          //ocultamos las pantallas y mostramos la pantalla final
          document.getElementById("pantalla-juego").style.display = "none";
          document.getElementById("pantalla-final").style.display = "block";
          //agreamos los resultados
          document.getElementById("numCorrectas").innerHTML = cantidadAcertadash;
          document.getElementById("numIncorrectas").innerHTML = preguntash.length - cantidadAcertadash;
          if(cantidadAcertadash>=3){
                       document.getElementById("imgsalida").src = "https://cdn.glitch.global/7ebc5348-6a0e-4a58-ae73-61d6ac7c28bc/CHICOS%20(113).gif?v=1690321173996" ; 
                      
          }else{
                       document.getElementById("imgsalida").src = "https://cdn.glitch.global/7ebc5348-6a0e-4a58-ae73-61d6ac7c28bc/sad-lonely.gif?v=1690321970007";
                 }
    }

function volverAlInicioh(){//ocultamos las pantallas y activamos la inicial
          document.getElementById("pantalla-final").style.display = "none";
          document.getElementById("pantalla-inicial").style.display = "block";
          document.getElementById("pantalla-juego").style.display = "none";
          posActualh = 0;
          cantidadAcertadash = 0;
          limpiarOpcionesh();
  opcionesh = []; 
    }


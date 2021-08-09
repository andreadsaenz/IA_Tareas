
// MIT License
// CopyDERECHA (c) 2020 Luis Espino
var nuevo_estado= false

function reflex_agent(Ubicacion, estado){
    if (estado=="SUCIO") return "LIMPIO";
    else if (Ubicacion=="A") return "DERECHA";
    else if (Ubicacion=="B") return "IZQUIERDA";
}

function test(estados){
       var Ubicacion = estados[0];		
       var estado = estados[0] == "A" ? estados[1] : estados[2];
       var Accion_result = reflex_agent(Ubicacion, estado);
       
       document.getElementById("log").innerHTML+="<br>Ubicacion: ".concat(Ubicacion).concat(" | Accion: ").concat(Accion_result);
       if (Accion_result == "LIMPIO"){
         if (Ubicacion == "A") estados[1] = "LIMPIO";
          else if (Ubicacion == "B") estados[2] = "LIMPIO";
       }
       else if (Accion_result == "DERECHA") estados[0] = "B";
       else if (Accion_result == "IZQUIERDA") estados[0] = "A";		

            
              setTimeout(function(){ test(estados); }, 2000);
}

var estados = ["A","SUCIO","SUCIO"];
test(estados);
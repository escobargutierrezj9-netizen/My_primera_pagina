
/*Esto es para adivinar el número */
const entradaNumero = document.getElementById("numero");
const salidaNumero = document.getElementById("estado");

entradaNumero.addEventListener("input", function () {
    let numero = Number(entradaNumero.value);

    if (numero >= 26){
        salidaNumero.textContent = "Más abajo";
    }
    else if (numero === 25) {
        salidaNumero.textContent = "Felicidades, ese es mi número favorito!!!!!"; 
    }
    else{
        salidaNumero.textContent = "Más arriba, sigue intentando.";
    }
    
});

/*Esto es para el selector*/

const hobbie = document.getElementById("hobbie");
const imagen = document.getElementById("imagen");
const texto = document.getElementById("texto")

hobbie.addEventListener("change", function () {

    if (hobbie.value === "pelicula") {
        imagen.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtoqvwf1jbMH4bu8_oItfMU8gUpzLFrbWax2u51n7KTg&s=10";
        texto.textContent = "Mí película favorita es: La milla verde. ";
    
    }
    else if (hobbie.value === "musica") {
        imagen.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdGLDVoFz9-U0-so8xzJszMtWK7miRLFIcv6d3dvftow&s=10";
         texto.textContent = "Mí canción favorita es: Memorias de Rudy Marquez. ";
    }
    else if (hobbie.value === "vestir") {
        imagen.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvNPktLEN7PMr3jy1fdr4KnDcVuuyT8ijvoO35D9K3CFFHfyU9L0SkEuU&s=10";
         texto.textContent = "Mí vestir favorito es: Camisa tipo polo, jean y zapatos.";
    }
    else {
        imagen.src = "";
    }

});

const boton = document.getElementById("boton");

boton.addEventListener("click", function() {
    alert("Un muy buen profesor, dejeme decirle que, mera paciencia para aguantarse a tanto estudiante hipnotizado por la IA, siga así de buena genteee. Att: Linux. ");
});
for (let i = 0; i < 5; i++) {
    loadPokemon(i)
}

function loadPokemon(index) {
    // -------------- request 1 --------------

    
        let xhttp = new XMLHttpRequest();

        xhttp.onreadystatechange=function() {
            if (this.readyState == 4 && this.status == 200) {

                console.log("Juhu, die Antworst ist da!");
                // convert answer into object
                let pokemon = JSON.parse( this.responseText);
                
                
                document.getElementById('erg').innerHTML += '<div class="test"><h2>' + pokemon.name + '</h2>' +
                    '<p>' + pokemon.weight / 10 + " KG schwer" + '</p>' +
                    '<p>Typ: ' + pokemon.types[0].type.name + '</p>' + 
                    '<img src="' + pokemon.sprites.front_shiny + '" width="200"></div>'  
            }
        };


        xhttp.open('GET', "https://pokeapi.co/api/v2/pokemon/" + index, true);

        xhttp.send();
}


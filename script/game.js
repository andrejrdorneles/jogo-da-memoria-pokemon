const pokemons = shuffle([
    {
        "nome": "arbok",
        "imagem": "./images/arbok.jpg"
    },
    {
        "nome": "blastoise",
        "imagem": "./images/blastoise.jpg"
    },
    {
        "nome": "caterpie",
        "imagem": "./images/caterpie.jpg"
    },
    {
        "nome": "charizard",
        "imagem": "./images/charizard.jpg"
    },
    {
        "nome": "diglett",
        "imagem": "./images/diglett.jpg"
    },
    {
        "nome": "magikarp",
        "imagem": "./images/magikarp.jpg"
    },
    {
        "nome": "meowth",
        "imagem": "./images/meowth.jpg"
    },
    {
        "nome": "nidoking",
        "imagem": "./images/nidoking.jpg"
    },
    {
        "nome": "nidoqueen",
        "imagem": "./images/nidoqueen.jpg"
    },
    {
        "nome": "ninetales",
        "imagem": "./images/ninetales.jpg"
    },
    {
        "nome": "pidgeot",
        "imagem": "./images/pidgeot.jpg"
    },
    {
        "nome": "pikachu",
        "imagem": "./images/pikachu.jpg"
    },
    {
        "nome": "psyduck",
        "imagem": "./images/psyduck.jpg"
    },
    {
        "nome": "venusaur",
        "imagem": "./images/venusaur.jpg"
    },
    {
        "nome": "weedle",
        "imagem": "./images/weedle.jpg"
    },
    {
        "nome": "zubat",
        "imagem": "./images/zubat.jpg"
    },
    {
        "nome": "arbok",
        "imagem": "./images/arbok.jpg"
    },
    {
        "nome": "blastoise",
        "imagem": "./images/blastoise.jpg"
    },
    {
        "nome": "caterpie",
        "imagem": "./images/caterpie.jpg"
    },
    {
        "nome": "charizard",
        "imagem": "./images/charizard.jpg"
    },
    {
        "nome": "diglett",
        "imagem": "./images/diglett.jpg"
    },
    {
        "nome": "magikarp",
        "imagem": "./images/magikarp.jpg"
    },
    {
        "nome": "meowth",
        "imagem": "./images/meowth.jpg"
    },
    {
        "nome": "nidoking",
        "imagem": "./images/nidoking.jpg"
    },
    {
        "nome": "nidoqueen",
        "imagem": "./images/nidoqueen.jpg"
    },
    {
        "nome": "ninetales",
        "imagem": "./images/ninetales.jpg"
    },
    {
        "nome": "pidgeot",
        "imagem": "./images/pidgeot.jpg"
    },
    {
        "nome": "pikachu",
        "imagem": "./images/pikachu.jpg"
    },
    {
        "nome": "psyduck",
        "imagem": "./images/psyduck.jpg"
    },
    {
        "nome": "venusaur",
        "imagem": "./images/venusaur.jpg"
    },
    {
        "nome": "weedle",
        "imagem": "./images/weedle.jpg"
    },
    {
        "nome": "zubat",
        "imagem": "./images/zubat.jpg"
    }
])

let firstCard = undefined
let secondCard = undefined

function loadCards() {
    const container = $("#container")

    pokemons.forEach((pokemon, key) => {
        pokemon.id = key
        container.append(`<div id="${pokemon.id}" class="carta" data-nome="${pokemon.nome}" onClick="displayCard(event, ${key})"></div>`)
    })
}

function displayCard(event, key) {
    debugger
    const div = $(`#${event.target.id}`)
    const pokemon = pokemons.find(pokemon => {
        return pokemon.id === key
    })
    
    if(!firstCard) {
        firstCard = pokemon
        div.css("background-image", `url(${pokemon.imagem})`)
    } else if(!secondCard) {
        secondCard = pokemon
        div.css("background-image", `url(${pokemon.imagem})`)
        compareSelectedCards()
    } 
}

function compareSelectedCards() {
    if(firstCard.nome === secondCard.nome) {
        firstCard = undefined
        secondCard = undefined
    } else {
        const firstSelectedDiv = $(`#${firstCard.id}`)
        const secondSelectedDiv = $(`#${secondCard.id}`)

        setTimeout(() => {
            firstSelectedDiv.css("background-image", "url('./images/background.jpg')")
            secondSelectedDiv.css("background-image", "url('./images/background.jpg')")
            firstCard = undefined
            secondCard = undefined
        }, 1000)  
    }
}

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }
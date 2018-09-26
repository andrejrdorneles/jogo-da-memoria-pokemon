let pokemons = shuffle([
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
let matches = 0
const maxMatches = pokemons.length / 2

function loadCards() {
    const container = $("#container")

    pokemons.forEach((pokemon, key) => {
        pokemon.id = key
        pokemon.macth = false
        container.append(`<div id="${pokemon.id}" class="card" onClick="displayCard(event, ${key})"></div>`)
    })
}

function restartGame(){
    alert('O jogo está sendo reiniciado...')
    matches = 0
    $("#container").empty()
    pokemons = shuffle(pokemons)
    loadCards()
    setSelectedCardsToUndefined()
}

function setSelectedCardsToUndefined(){
    firstCard = undefined
    secondCard = undefined
}

function displayCard(event, key) {
    const div = $(`#${event.target.id}`)
    const pokemon = pokemons.find(pokemon => {
        return pokemon.id === key
    })
    
    if(pokemon.macth){
        return
    }    
    
    if(!firstCard) {
        firstCard = pokemon
        div.css("background-image", `url(${pokemon.imagem})`)
    } else if(!secondCard  && (firstCard.id !== pokemon.id)) {
        secondCard = pokemon
        div.css("background-image", `url(${pokemon.imagem})`)
        compareSelectedCards()
    } 
}

function compareSelectedCards() {
    const firstSelectedDiv = $(`#${firstCard.id}`)
    const secondSelectedDiv = $(`#${secondCard.id}`)
    if(firstCard.nome === secondCard.nome) {
        firstCard.macth = true
        secondCard.macth = true
        firstSelectedDiv.append('<img src="./images/gotcha.svg" alt="">')
        secondSelectedDiv.append('<img src="./images/gotcha.svg" alt="">')
        setSelectedCardsToUndefined()
        matches++
    } else {
        setTimeout(() => {
            firstSelectedDiv.css("background-image", "url('./images/background.jpg')")
            secondSelectedDiv.css("background-image", "url('./images/background.jpg')")
            setSelectedCardsToUndefined()
        }, 1000)
    }
    
    if(matches == maxMatches){
        setTimeout(() => {
            alert('Parabéns, você completou o jogo!!!')
            restartGame()
        }, 500)
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
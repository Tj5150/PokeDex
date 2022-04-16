let charmeleon = `{
  "abilities": [
    {
      "name": "blaze"
    },
    {
      "name": "solar-power"
    }
  ],
  "base_experience": 142,
  "height": 11,
  "id": 5,
  "is_default": true,
  "name": "charmeleon",
  "order": 6,
  "stats": [
    {
      "base_stat": 58,
      "effort": 0,
      "stat": {
        "name": "hp"
      }
    },
    {
      "base_stat": 64,
      "effort": 0,
      "stat": {
        "name": "attack"
      }
    },
    {
      "base_stat": 58,
      "effort": 0,
      "stat": {
        "name": "defense"
      }
    },
    {
      "base_stat": 80,
      "effort": 1,
      "stat": {
        "name": "special-attack"
      }
    },
    {
      "base_stat": 65,
      "effort": 0,
      "stat": {
        "name": "special-defense"
      }
    },
    {
      "base_stat": 80,
      "effort": 1,
      "stat": {
        "name": "speed"
      }
    }
  ],
  "types": [
    {
      "slot": 1,
      "type": {
        "name": "fire"
      }
    }
  ],
  "weight": 190
}`

let charmander = `{
  "abilities": [
    {
      "name": "blaze"
    },
    {
      "name": "solar-power"
    }
  ],
  "base_experience": 62,
  "height": 6,
  "id": 4,
  "is_default": true,
  "name": "charmander",
  "order": 5,
  "stats": [
    {
      "base_stat": 39,
      "effort": 0,
      "stat": {
        "name": "hp"
      }
    },
    {
      "base_stat": 52,
      "effort": 0,
      "stat": {
        "name": "attack"
      }
    },
    {
      "base_stat": 43,
      "effort": 0,
      "stat": {
        "name": "defense"
      }
    },
    {
      "base_stat": 60,
      "effort": 0,
      "stat": {
        "name": "special-attack"
      }
    },
    {
      "base_stat": 50,
      "effort": 0,
      "stat": {
        "name": "special-defense"
      }
    },
    {
      "base_stat": 65,
      "effort": 1,
      "stat": {
        "name": "speed"
      }
    }
  ],
  "types": [
    {
      "slot": 1,
      "type": {
        "name": "fire"
      }
    }
  ],
  "weight": 85
}`

let charizard = `{
  "abilities": [
    {
      "name": "blaze"
    },
    {
      "name": "solar-power"
    }
  ],
  "base_experience": 240,
  "height": 17,
  "id": 6,
  "is_default": true,
  "name": "charizard",
  "order": 7,
  "stats": [
    {
      "base_stat": 78,
      "effort": 0,
      "stat": {
        "name": "hp"
      }
    },
    {
      "base_stat": 84,
      "effort": 0,
      "stat": {
        "name": "attack"
      }
    },
    {
      "base_stat": 78,
      "effort": 0,
      "stat": {
        "name": "defense"
      }
    },
    {
      "base_stat": 109,
      "effort": 3,
      "stat": {
        "name": "special-attack"
      }
    },
    {
      "base_stat": 85,
      "effort": 0,
      "stat": {
        "name": "special-defense"
      }
    },
    {
      "base_stat": 100,
      "effort": 0,
      "stat": {
        "name": "speed"
      }
    }
  ],
  "types": [
    {
      "slot": 1,
      "type": {
        "name": "fire"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "flying"
      }
    }
  ],
  "weight": 905
}`
console.log(charmander)
// Charmander 
charmander = JSON.parse(charmander)
// // charmander name
let charmanderName = (charmander.name).toUpperCase()
document.getElementById("charmander").innerHTML = charmanderName
<<<<<<< HEAD
//charmander abilites
=======
// // charmander abilites
>>>>>>> acc0a5590d303f7b305b9c4bd5023f23a7fec077
console.log(charmander)
let charmanderAbility1 = charmander.abilities[0].name
document.getElementById('ability1').innerHTML =  'Ability' + charmanderAbility1
let charmanderAbility2 = charmander.abilities[1].name
document.getElementById('ability2').innerHTML = 'Ability' + charmanderAbility2
// Experience and height 
let charmanderHeight = charmander.height
document.getElementById('charmanderHeight').innerHTML = 'Height: ' + charmanderHeight
let charmanderWeight = charmander.weight 
document.getElementById('charmanderWeight').innerHTML = 'Weight: ' + charmanderWeight
console.log(charmanderHeight)

// console.log(charmanderName)

//


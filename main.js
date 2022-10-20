let backpack = []

backpack.push('pokeball')
backpack.push('potion');
backpack.push('pokedollars');

//remove pokeball
backpack.shift()

//add water stone to backpack
let foundItem = 'Water Stone'
backpack.push(foundItem)

//remove water stone
backpack.pop()

//counts items in backpack
let itemCount = backpack.length
console.log(itemCount)

backpack.push('great ball', 'antidote', 'revive')

 let satchel = backpack.splice(2)

// console.log(satchel)
// console.log(backpack)

// for(let i = 0; i < backpack.length; i++){
//     console.log(backpack[i])
// }

// for (let i = 0; i < 3; i++) {
//   console.log(backpack[i]);
// }

// if(backpack.length >= 3){
//     console.log('2 or more')
//     for (let i = 0; i < 3; i++) {
//    console.log(backpack[i]);
//  }
// }else{
//     for(let i = 0; i < backpack.length; i++){
//      console.log(backpack[i])
// }
//     console.log('2 or less')
// }
/* 
 * ServerEvents.recipes(callback) is a function that accepts another function,
 * called the "callback", as a parameter. The callback gets run when the 
 * server is working on recipes, and then we can make our own changes.
 * When the callback runs, it is also known as the event "firing". 
*/

// Listen for the "recipes" server event.
ServerEvents.recipes(event => {
  // You can replace `event` with any name you like, as
  // long as you change it inside the callback too!

  // This part, inside the curly braces, is the callback.
  // You can modify as many recipes as you like in here,
  // without needing to use ServerEvents.recipes() again.

  // Remove all recipes where output is meteorite comppass:
  event.remove({ output: 'ae2:meteorite_compass' })

  event.shaped(
  Item.of('alexscaves:cave_tablet', '{CaveBiome:"alexscaves:magnetic_caves"}'), // arg 1: output
  [
    'ABA',
    'BCB', // arg 2: the shape (array of strings)
    'ABA'
  ],
  {
    A: 'minecraft:iron_ingot',
    B: 'minecraft:stone',  //arg 3: the mapping object
    C: 'minecraft:paper'
  }
)

  event.shaped(
  Item.of('ae2:meteorite_compass'), // arg 1: output
  [
    '   ',
    'BAC', // arg 2: the shape (array of strings)
    '   '
  ],
  {
    A: 'minecraft:compass',
    B: 'alexscaves:scarlet_neodymium_ingot',  //arg 3: the mapping object
    C: 'alexscaves:azure_neodymium_ingot'
  }
)

  event.shaped(
  Item.of('cataclysm:storm_eye'), // arg 1: output
  [
    'BDB',
    'CAC', // arg 2: the shape (array of strings)
    'BDB'
  ],
  {
    A: 'alexscaves:tesla_bulb',
    B: 'ae2:charged_certus_quartz_crystal',  //arg 3: the mapping object
    C: 'botania:rune_water',
    D: 'botania:mana_diamond'
  }
)

  event.shaped(
  Item.of('irons_spellbooks:magic_cloth'), // arg 1: output
  [
    'AA ',
    'AA ', // arg 2: the shape (array of strings)
    '   '
  ],
  {
    A: 'botania:mana_string'
  }
)




  console.log('Hello! The recipe event has fired!')
})
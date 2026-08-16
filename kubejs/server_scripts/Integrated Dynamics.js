ServerEvents.recipes(event => {
  
event.custom({
  "type": "integrateddynamics:drying_basin",
  "input_item": "minecraft:sweet_berries",
  "fluid": {
    "id": "integrateddynamics:menril_resin",
    "amount": 250
  },
  "duration": 100,
  "output_item": {
    "id": "integrateddynamics:menril_berries",
  }
})

})
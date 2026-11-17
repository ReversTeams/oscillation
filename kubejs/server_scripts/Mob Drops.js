
// Adding loot table for mobs

LootJS.modifiers((event) => {
    event
        // Add drop to ferrous.
        .addEntityLootModifier("mowziesmobs:ferrous_wroughtnaut")
        // Drop is the ember bore.
        .addLoot("embers:mechanical_core");
});
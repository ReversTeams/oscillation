
// Adding loot table for mobs

LootJS.modifiers((event) => {
    event
        .addEntityLootModifier("mowziesmobs:ferrous_wroughtnaut")
        .addWeightedLoot(64, [
            Item.of("minecraft:iron_ingot").withChance(100),
        ]);
});
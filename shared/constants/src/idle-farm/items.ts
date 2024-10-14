export const IDLE_FARM_ITEMS_MATERIAL = {
  wood: 'wood',
  stick: 'stick',
  apple: 'apple',
  leaf: 'leaf',
  water: 'water',
  rock: 'rock',
  sand: 'sand',
  algae: 'algae',
  potato: 'potato',
  dirt: 'dirt',
  root: 'root',
  wheat: 'wheat',
  seed: 'seed',
  bug: 'bug',
  brokenBottle: 'broken bottle',
  goldNugget: 'gold nugget',
  cotton: 'cotton',
  coal: 'coal',
  ironOre: 'iron ore',
  copperOre: 'copper ore',
  dust: 'dust',
  aluminiumOre: 'aluminium ore',
  milk: 'milk',
  meat: 'meat',
  leather: 'leather',
  horn: 'horn',
  sawdust: 'sawdust',
  sugar: 'sugar',
  tomato: 'tomato',
  siliconOre: 'silicon ore',
  lithium: 'lithium',
  salt: 'salt',
  cocoa: 'cocoa',
  petroleum: 'petroleum',
  uranium: 'uranium'
} as const;

export const IDLE_FARM_ITEMS_REFINED = {
  plank: 'plank',
  thread: 'thread',
  ironIngot: 'iron ingot',
  copperIngot: 'copper ingot',
  aluminiumIngot: 'aluminium ingot',
  steelIngot: 'steel ingot',
  goldIngot: 'gold ingot',
  yoghurt: 'yoghurt',
  bacteria: 'bacteria',
  cheese: 'cheese',
  dustIngot: 'dust ingot',
  dirtIngot: 'dirt ingot',
  dusirtIngot: 'dusirt ingot',
  bread: 'bread',
  burntFood: 'burnt food',
  lava: 'lava',
  glass: 'glass',
  brokenGlass: 'broken glass',
  tomatoSauce: 'tomato sauce',
  siliconIngot: 'silicon ingot',
  pasta: 'pasta',
  particleboard: 'particleboard',
  dirtyWater: 'dirty water',
  oxygen: 'oxygen',
  bitterSpice: 'bitter spice',
  naturalFertilizer: 'natural fertilizer',
  saltySpice: 'salty spice',
  plastic: 'plastic'
} as const;

export const IDLE_FARM_ITEMS_PRODUCT = {
  fabric: 'fabric',
  chair: 'chair',
  wire: 'wire',
  rope: 'rope',
  gear: 'gear',
  pizza: 'pizza',
  lasagna: 'lasagna',
  bulb: 'bulb',
  dirustMix: 'dirust mix',
  cpu: 'cpu',
  battery: 'battery',
  biofuel: 'biofuel',
  idlisticFlavor: 'idlistic flavor',
  radiationEmitter: 'radiation remitter'
} as const;

export const IDLE_FARM_ITEMS_ASSEMBLY = {
  soda: 'soda',
  clock: 'clock',
  flashlight: 'flashlight',
  solarPanel: 'solar panel',
  dudirusirtEntity: 'dudirusirt entity',
  microwave: 'microwave'
} as const;

export const IDLE_FARM_ITEMS_PACKING_MATERIAL = {
  ...IDLE_FARM_ITEMS_MATERIAL,
  ...IDLE_FARM_ITEMS_REFINED,
  ...IDLE_FARM_ITEMS_PRODUCT,
  ...IDLE_FARM_ITEMS_ASSEMBLY
} as const;

export const IDLE_FARM_ITEMS_TOOLS = {
  uselessScythe: 'useless scythe',
  scythe: 'scythe',
  rareScythe: 'rare scythe',
  epicScythe: 'epic scythe',
  mythicScythe: 'mythic scythe'
} as const;

export const IDLE_FARM_ITEMS_CONSUMABLE = {
  energyGlass: 'energy glass',
  energyDrink: 'energy drink',
  energyGalloon: 'energy galloon',
  timeSpeeder: 'time speeder',
  timeCompressor: 'time compressor',
  timeDilator: 'time dilator',
  uselessDice: 'useless dice',
  commonDice: 'common dice',
  uncommonDice: 'uncommon dice',
  rareDice: 'rare dice',
  epicDice: 'epic dice',
  mythicDice: 'mythic dice',
  legendaryDice: 'legendary dice',
  uselessLootbox: 'useless lootbox',
  commonLootbox: 'common lootbox',
  rareLootbox: 'rare lootbox',
  epicLootbox: 'epic lootbox',
  mythicLootbox: 'mythic lootbox',
  legendaryLootbox: 'legendary lootbox',
  taxCollectorLootbox: 'tax collector lootbox',
  megaBoost: 'mega boost',
  taxCollectorBag: 'tax collector bag',

} as const;

export const IDLE_FARM_ITEMS_EVENT = {
  smallCandle: 'small candle',
  miniIdlons: 'mini idlons',
  wishingToken: 'wishing token',
  tradeTicket: 'trade ticket',
  candyApple:'candy apple',
  romanticChest:'romantic chest',
  anniversaryLootbox:'anniversary lootbox',
  candyDice:'candy dice',
  lovelyDice:'lovely dice',
  colorfulDice:'colorful dice',
  miniDice:'mini dice',
  valentineMuffin:'valentine muffin',
  chocolateCarrot:'chocolate carrot',
  workerPopsicle:'worker popsicle',
  lootboxCake:'lootbox cake',
  speedBoots:'speed boots',
  speedGloves:'speed gloves',
  christmasBell:'christmas bell',
  partyPopper:'party popper',
  easterLily:'easter lily',
  worger:'worger',
  energyTank:'energy tank',
  erngyClover:'erngy clover',
  spookyScythe:'spooky scythe',
  snowyScythe:'snowy scythe',
  romanticScythe:'romantic scythe',
  chocolateScythe:'chocolate scythe',
  miniScythe:'mini scythe'
} as const;

export const IDLE_FARM_ITEMS_BOX = {
  woodBox: 'wood box',
  stickBox: 'stick box',
  appleBox: 'apple box',
  leafBox: 'leaf box',
  waterBox: 'water box',
  rockBox: 'rock box',
  sandBox: 'sand box',
  algaeBox: 'algae box',
  potatoBox: 'potato box',
  dirtBox: 'dirt box',
  rootBox: 'root box',
  wheatBox: 'wheat box',
  seedBox: 'seed box',
  bugBox: 'bug box',
  brokenBottleBox: 'broken bottle box',
  goldNuggetBox: 'gold nugget box',
  cottonBox: 'cotton box',
  coalBox: 'coal box',
  ironOreBox: 'iron ore box',
  copperOreBox: 'copper ore box',
  dustBox: 'dust box',
  aluminiumOreBox: 'aluminium ore box',
  milkBox: 'milk box',
  meatBox: 'meat box',
  leatherBox: 'leather box',
  hornBox: 'horn box',
  sawdustBox: 'sawdust box',
  sugarBox: 'sugar box',
  tomatoBox: 'tomato box',
  siliconOreBox: 'silicon ore box',
  lithiumBox: 'lithium box',
  saltBox: 'salt box',
  cocoaBox: 'cocoa box',
  petroleumBox: 'petroleum box',
  uraniumBox: 'uranium box'
} as const;

export const IDLE_FARM_ITEMS_CONTAINER = {
  plankContainer: 'plank container',
  threadContainer: 'thread container',
  ironIngotContainer: 'iron ingot container',
  copperIngotContainer: 'copper ingot container',
  aluminiumIngotContainer: 'aluminium ingot container',
  steelIngotContainer: 'steel ingot container',
  goldIngotContainer: 'gold ingot container',
  yoghurtContainer: 'yoghurt container',
  bacteriaContainer: 'bacteria container',
  cheeseContainer: 'cheese container',
  dustIngotContainer: 'dust ingot container',
  dirtIngotContainer: 'dirt ingot container',
  dusirtIngotContainer: 'dusirt ingot container',
  breadContainer: 'bread container',
  burntFoodContainer: 'burnt food container',
  lavaContainer: 'lava container',
  glassContainer: 'glass container',
  brokenGlassContainer: 'broken glass container',
  tomatoSauceContainer: 'tomato sauce container',
  siliconIngotContainer: 'silicon ingot container',
  pastaContainer: 'pasta container',
  particleboardContainer: 'particleboard container',
  dirtyWaterContainer: 'dirty water container',
  oxygenContainer: 'oxygen container',
  bitterSpiceContainer: 'bitter spice container',
  naturalFertilizerContainer: 'natural fertilizer container',
  saltySpiceContainer: 'salty spice container',
  plasticContainer: 'plastic container'
} as const;

export const IDLE_FARM_ITEMS_SHIP = {
  fabricShip: 'fabric ship',
  chairShip: 'chair ship',
  wireShip: 'wire ship',
  ropeShip: 'rope ship',
  gearShip: 'gear ship',
  pizzaShip: 'pizza ship',
  lasagnaShip: 'lasagna ship',
  bulbShip: 'bulb ship',
  dirustMixShip: 'dirust mix ship',
  cpuShip: 'cpu ship',
  batteryShip: 'battery ship',
  biofuelShip: 'biofuel ship',
  idlisticFlavorShip: 'idlistic flavor ship',
  radiationEmitterShip: 'radiation emitter ship'
} as const;

export const IDLE_FARM_ITEMS_SPACESHIP = {
  sodaSpaceship: 'soda spaceship',
  clockSpaceship: 'clock spaceship',
  flashlightSpaceship: 'flashlight spaceship',
  solarPanelSpaceship: 'solar panel spaceship',
  dudirusirtEntitySpaceship: 'dudirusirt entity spaceship',
  microwaveSpaceship: 'microwave spaceship'
} as const;

export const IDLE_FARM_ITEMS_PACKING_ITEMS = {
  ...IDLE_FARM_ITEMS_BOX,
  ...IDLE_FARM_ITEMS_CONTAINER,
  ...IDLE_FARM_ITEMS_SHIP,
  ...IDLE_FARM_ITEMS_SPACESHIP
} as const;

export const IDLE_FARM_WORKER_TOKENS = {
  workerTokens: 'worker tokens',
  rareWorkerTokens: 'rare worker tokens',
  epicWorkerTokens: 'epic worker tokens',
  mythicWorkerTokens: 'mythic worker tokens'
} as const;

export const IDLE_FARM_ITEMS = {
  ...IDLE_FARM_WORKER_TOKENS,
  ...IDLE_FARM_ITEMS_MATERIAL,
  ...IDLE_FARM_ITEMS_REFINED,
  ...IDLE_FARM_ITEMS_PRODUCT,
  ...IDLE_FARM_ITEMS_ASSEMBLY,
  ...IDLE_FARM_ITEMS_TOOLS,
  ...IDLE_FARM_ITEMS_CONSUMABLE,
  ...IDLE_FARM_ITEMS_EVENT,
  ...IDLE_FARM_ITEMS_BOX,
  ...IDLE_FARM_ITEMS_CONTAINER,
  ...IDLE_FARM_ITEMS_SHIP,
  ...IDLE_FARM_ITEMS_SPACESHIP
} as const;

export const IDLE_FARM_ITEMS_BOX_TYPE = {
  wood: 'woodBox',
  stick: 'stickBox',
  apple: 'appleBox',
  leaf: 'leafBox',
  water: 'waterBox',
  rock: 'rockBox',
  sand: 'sandBox',
  algae: 'algaeBox',
  potato: 'potatoBox',
  dirt: 'dirtBox',
  root: 'rootBox',
  wheat: 'wheatBox',
  seed: 'seedBox',
  bug: 'bugBox',
  brokenBottle: 'brokenBottleBox',
  goldNugget: 'goldNuggetBox',
  cotton: 'cottonBox',
  coal: 'coalBox',
  ironOre: 'ironOreBox',
  copperOre: 'copperOreBox',
  dust: 'dustBox',
  aluminiumOre: 'aluminiumOreBox',
  milk: 'milkBox',
  meat: 'meatBox',
  leather: 'leatherBox',
  horn: 'hornBox',
  sawdust: 'sawdustBox',
  sugar: 'sugarBox',
  tomato: 'tomatoBox',
  siliconOre: 'siliconOreBox',
  lithium: 'lithiumBox',
  salt: 'saltBox',
  cocoa: 'cocoaBox',
  petroleum: 'petroleumBox',
  uranium: 'uraniumBox'
} as const;


export const IDLE_FARM_ITEMS_CONTAINER_TYPE = {
  plank: 'plankContainer',
  thread: 'threadContainer',
  ironIngot: 'ironIngotContainer',
  copperIngot: 'copperIngotContainer',
  aluminiumIngot: 'aluminiumIngotContainer',
  steelIngot: 'steelIngotContainer',
  goldIngot: 'goldIngotContainer',
  yoghurt: 'yoghurtContainer',
  bacteria: 'bacteriaContainer',
  cheese: 'cheeseContainer',
  dustIngot: 'dustIngotContainer',
  dirtIngot: 'dirtIngotContainer',
  dusirtIngot: 'dusirtIngotContainer',
  bread: 'breadContainer',
  burntFood: 'burntFoodContainer',
  lava: 'lavaContainer',
  glass: 'glassContainer',
  brokenGlass: 'brokenGlassContainer',
  tomatoSauce: 'tomatoSauceContainer',
  siliconIngot: 'siliconIngotContainer',
  pasta: 'pastaContainer',
  particleboard: 'particleboardContainer',
  dirtyWater: 'dirtyWaterContainer',
  oxygen: 'oxygenContainer',
  bitterSpice: 'bitterSpiceContainer',
  naturalFertilizer: 'naturalFertilizerContainer',
  saltySpice: 'saltySpiceContainer',
  plastic: 'plasticContainer'
} as const;

export const IDLE_FARM_ITEMS_SHIP_TYPE = {
  fabric: 'fabricShip',
  chair: 'chairShip',
  wire: 'wireShip',
  rope: 'ropeShip',
  gear: 'gearShip',
  pizza: 'pizzaShip',
  lasagna: 'lasagnaShip',
  bulb: 'bulbShip',
  dirustMix: 'dirustMixShip',
  cpu: 'cpuShip',
  battery: 'batteryShip',
  biofuel: 'biofuelShip',
  idlisticFlavor: 'idlisticFlavorShip',
  radiationEmitter: 'radiationEmitterShip'
} as const;

export const IDLE_FARM_ITEMS_SPACESHIP_TYPE = {
  soda: 'sodaSpaceship',
  clock: 'clockSpaceship',
  flashlight: 'flashlightSpaceship',
  solarPanel: 'solarPanelSpaceship',
  dudirusirtEntity: 'dudirusirtEntitySpaceship',
  microwave: 'microwaveSpaceship'
} as const;


export const IDLE_FARM_ITEMS_PACKING_PAIR = {
  ...IDLE_FARM_ITEMS_BOX_TYPE,
  ...IDLE_FARM_ITEMS_CONTAINER_TYPE,
  ...IDLE_FARM_ITEMS_SHIP_TYPE,
  ...IDLE_FARM_ITEMS_SPACESHIP_TYPE
} as const;

export const IDLE_FARM_ITEMS_CONSTANTS = {
  inventoryLimit: 200000000,
  toolLimit: 50000000
}
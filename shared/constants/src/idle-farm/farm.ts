import * as ms from 'ms';

export const IDLE_FARM_FARM_TYPE = {
  forest: 'forest',
  waterPond: 'water pond',
  potatoFarm: 'potato farm',
  wheatFarm: 'wheat farm',
  sugarCaneFarm: 'sugar cane farm',
  desert: 'desert',

  tomatoFarm: 'tomato farm',
  cottonFarm: 'cotton farm',
  coalCave: 'coal cave',
  ironCave: 'iron cave',
  copperCave: 'copper cave',
  aluminiumCave: 'aluminium cave',

  cowsRanch: 'cows ranch',
  cocoaFarm: 'cocoa farm',
  lithiumExtractor: 'lithium extractor',
  petroleumExtractor: 'petroleum extractor',
  uraniumCave:'uranium cave',
  sawMill: 'saw mill',

  textileMill: 'textile mill',
  bakery: 'bakery',
  seasoningGrinder: 'seasoning grinder',
  pastaBakery: 'pasta bakery',
  artificialVolcano: 'artificial volcano',
  ironSmelter: 'iron smelter',

  copperSmelter: 'copper smelter',
  aluminiumSmelter: 'aluminium smelter',
  siliconSmelter: 'silicon smelter',
  steelFoundry: 'steel foundry',
  goldSmelter: 'gold smelter',
  fertilizinator: 'fertilizinator',

  algaePlantarium: 'algae plantarium',
  scytheWorkshop: 'scythe workshop',
  yoghurtFactory: 'yoghurt factory',
  cheeseFactory: 'cheese factory',
  tomatoSaucinator: 'tomato saucinator',
  glassFactory: 'glass factory',

  glassRecycler: 'glass recycler',
  residueRecycler: 'residue recycler',
  sawdustRecycler: 'sawdust recycler',
  plasticFactory: 'plastic factory',
  fabricMill: 'fabric mill',
  ropeFactory: 'rope factory',

  chairFactory: 'chair factory',
  gearFactory: 'gear factory',
  wireFactory: 'wire factory',
  scytheFabric: 'scythe fabric',
  pizzeria: 'pizzeria',
  flavorVille: 'flavor ville',

  lasagnaKitchen: 'lasagna kitchen',
  bulbFactory: 'bulb factory',
  biofuelPlant: 'biofuel plant',
  dirustMixer: 'dirust mixer',
  cpuFactory: 'cpu factory',
  batteryFactory: 'battery factory',

  radiactory: 'radiactory',
  clockAssembly: 'clock assembly',
  flashlightAssembly: 'flashlight asselmbly',
  solarPanelAssembly:'solar panel assembly',
  sodaBusiness:'soda business ',
  scytheSpawner: 'scythe spawner',

  dudirusirtGigafactory: 'dudirusirt gigafactory',
  microwaveAssembly:'microwave assembly',

  lootboxFarm: 'lootbox farm',
  pumpkinFarm: 'pumpkin farm',
  pumpkinCarver: 'pumpkin carver',

  candyBakery: 'candy bakery',
  snowyFactory: 'snowy factory',
  eggGenerator: 'egg generator',
  eggExpander: 'egg expander',

  workerTokenFarm: 'worker token farm',
  timeFarm: 'time farm',
  energyFarm: 'energy farm'
} as const;

export const IDLE_FARM_TIME_BOOSTER_DURATION = {
  timeSpeeder: ms('2h'),
  timeCompressor: ms('4h'),
  timeDilator: ms('8h')
} as const;

export const IDLE_FARM_WORKER_TYPE = {
  useless: 'useless',
  deficient: 'deficient',
  common: 'common',
  talented: 'talented',
  wise: 'wise',
  expert: 'expert',
  masterful: 'masterful',
  guru: 'guru',
  lovely: 'lovely',
  spooky: 'spooky',
  snowy: 'snowy',
  jumpy: 'jumpy',
  festive: 'festive'
} as const;

export const IDLE_FARM_WORKER_LABEL = {
  [IDLE_FARM_WORKER_TYPE.useless]: 'useless',
  [IDLE_FARM_WORKER_TYPE.deficient]: 'deficient',
  [IDLE_FARM_WORKER_TYPE.common]: 'common',
  [IDLE_FARM_WORKER_TYPE.talented]: 'talented',
  [IDLE_FARM_WORKER_TYPE.wise]: 'wise',
  [IDLE_FARM_WORKER_TYPE.expert]: 'expert',
  [IDLE_FARM_WORKER_TYPE.masterful]: 'masterful',
  [IDLE_FARM_WORKER_TYPE.guru]: 'guru',
  [IDLE_FARM_WORKER_TYPE.lovely]: 'lovely',
  [IDLE_FARM_WORKER_TYPE.spooky]: 'spooky',
  [IDLE_FARM_WORKER_TYPE.snowy]: 'snowy',
  [IDLE_FARM_WORKER_TYPE.jumpy]: 'jumpy',
  [IDLE_FARM_WORKER_TYPE.festive]: 'festive'
};

export const IDLE_FARM_WORKER_ID = {
  [IDLE_FARM_WORKER_TYPE.useless]: 1,
  [IDLE_FARM_WORKER_TYPE.deficient]: 2,
  [IDLE_FARM_WORKER_TYPE.common]: 3,
  [IDLE_FARM_WORKER_TYPE.talented]: 4,
  [IDLE_FARM_WORKER_TYPE.wise]: 5,
  [IDLE_FARM_WORKER_TYPE.expert]: 6,
  [IDLE_FARM_WORKER_TYPE.masterful]: 7,
  [IDLE_FARM_WORKER_TYPE.guru]: 8,
  [IDLE_FARM_WORKER_TYPE.lovely]: 1,
  [IDLE_FARM_WORKER_TYPE.jumpy]: 5,
  [IDLE_FARM_WORKER_TYPE.festive]: 2,
  [IDLE_FARM_WORKER_TYPE.spooky]: 3,
  [IDLE_FARM_WORKER_TYPE.snowy]: 4
} as const;

export const IDLE_FARM_WORKER_STATS = {
  [IDLE_FARM_WORKER_TYPE.useless]: {
    speed: 1,
    strength: 1,
    intelligence: 1
  },
  [IDLE_FARM_WORKER_TYPE.deficient]: {
    speed: 1.5,
    strength: 1.5,
    intelligence: 1
  },
  [IDLE_FARM_WORKER_TYPE.common]: {
    speed: 1.5,
    strength: 2,
    intelligence: 1.5
  },
  [IDLE_FARM_WORKER_TYPE.talented]: {
    speed: 2,
    strength: 2,
    intelligence: 2
  },
  [IDLE_FARM_WORKER_TYPE.wise]: {
    speed: 2.5,
    strength: 2,
    intelligence: 2.5
  },
  [IDLE_FARM_WORKER_TYPE.expert]: {
    speed: 3,
    strength: 2.5,
    intelligence: 2.5
  },
  [IDLE_FARM_WORKER_TYPE.masterful]: {
    speed: 3,
    strength: 3,
    intelligence: 3
  },
  [IDLE_FARM_WORKER_TYPE.guru]: {
    speed: 3.5,
    strength: 3.5,
    intelligence: 3
  },
  [IDLE_FARM_WORKER_TYPE.lovely]: {
    speed: 5,
    strength: 6,
    intelligence: 4
  },
  [IDLE_FARM_WORKER_TYPE.spooky]: {
    speed: 5,
    strength: 6,
    intelligence: 5
  },
  [IDLE_FARM_WORKER_TYPE.snowy]: {
    speed: 5,
    strength: 5,
    intelligence: 6
  },
  [IDLE_FARM_WORKER_TYPE.jumpy]: {
    speed: 6,
    strength: 5,
    intelligence: 5
  },
  [IDLE_FARM_WORKER_TYPE.festive]: {
    speed: 5,
    strength: 5,
    intelligence: 5
  }
} as const;

export const IDLE_FARM_WORKERS_LEVEL_AMOUNT: Record<number, number> = {
  1: 1,
  2: 2,
  3: 4,
  4: 10,
  5: 20,
  6: 40,
  7: 60,
  8: 100,
  9: 150,
  10: 250,
  11: 350,
  12: 500,
  13: 750,
  14: 1000,
  15: 1400,
  16: 1800,
  17: 2500,
  18: 3500,
  19: 5000,
  20: 7000,
  21: 10000,
  22: 14000,
  23: 18000,
  24: 25000,
  25: 40000,
  26: 65000,
  27: 100000,
  28: 150000,
  29: 225000,
  30: 350000,
  31: 500000,
  32: 750000,
  33: 1000000,
  34: 1400000,
  35: 1800000,
  36: 9999900000,
  37: 9999900000,
  38: 9999900000,
  39: 9999900000,
  40: 9999900000,
  41: 9999900000,
  42: 9999900000,
  43: 9999900000,
  44: 9999900000,
  45: 9999900000
} as const;

export const IDLE_FARM_RANDOM_EVENTS = {
  packing: 'packing',
  worker: 'worker',
  energy: 'energy',
  lucky: 'lucky',
  taxcollector: 'taxcollector'
} as const;

export const IDLE_FARM_RANDOM_EVENTS_NAME: Record<
  keyof typeof IDLE_FARM_RANDOM_EVENTS,
  string
> = {
  worker: 'Worker',
  packing: 'Packing',
  energy: 'Energy',
  lucky: 'Lucky Reward',
  taxcollector: 'Tax Collector'
} as const;

export const IDLE_FARM_RANDOM_EVENTS_COMMAND: Record<
  keyof typeof IDLE_FARM_RANDOM_EVENTS,
  string
> = {
  worker: 'Hire',
  packing: 'Pack',
  energy: 'OHMMM',
  lucky: 'Join',
  taxcollector: 'Sue'
} as const;

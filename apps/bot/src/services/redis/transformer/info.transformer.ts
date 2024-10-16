import type {IInfo, IMarketItem, TMarketItems} from '@idle-helper/models/dist/info/info.type';
import {typedObjectEntries} from '@idle-helper/utils';
import {IDLE_FARM_WORKER_TYPE} from '@idle-helper/constants';

const transformWorkerPower = (workerPower?: Record<string, number>) => {
  if (workerPower === undefined) return {};
  const power: Record<string, number> = {};
  for (const [key, value] of Object.entries(workerPower)) {
    power[key] = Number(value);
  }
  return power;
};

const transformMarketItem = (marketItem?: any): IMarketItem => {
  return {
    price: marketItem.price === undefined ? 0 : Number(marketItem.price),
    isOverstocked:
      marketItem.isOverstocked === undefined
        ? false
        : Boolean(marketItem.isOverstocked),
    isOutOfStock:
      marketItem.isOutOfStock === undefined
        ? false
        : Boolean(marketItem.isOutOfStock),
    lastUpdatedAt:
      marketItem.lastUpdatedAt === undefined
        ? new Date()
        : new Date(marketItem.lastUpdatedAt),
    rate: marketItem.rate === undefined ? 0 : Number(marketItem.rate)
  };
};

const fromRedis = (value: string): IInfo => {
  const parsed = JSON.parse(value) as IInfo;
  return {
    workerPower: {
      [IDLE_FARM_WORKER_TYPE.useless]: transformWorkerPower(
        parsed?.workerPower?.useless
      ),
      [IDLE_FARM_WORKER_TYPE.deficient]: transformWorkerPower(
        parsed?.workerPower?.deficient
      ),
      [IDLE_FARM_WORKER_TYPE.common]: transformWorkerPower(
        parsed?.workerPower?.common
      ),
      [IDLE_FARM_WORKER_TYPE.talented]: transformWorkerPower(
        parsed?.workerPower?.talented
      ),
      [IDLE_FARM_WORKER_TYPE.wise]: transformWorkerPower(
        parsed?.workerPower?.wise
      ),
      [IDLE_FARM_WORKER_TYPE.expert]: transformWorkerPower(
        parsed?.workerPower?.expert
      ),
      [IDLE_FARM_WORKER_TYPE.masterful]: transformWorkerPower(
        parsed?.workerPower?.masterful
      ),
      [IDLE_FARM_WORKER_TYPE.guru]: transformWorkerPower(
        parsed?.workerPower?.guru
      ),
      [IDLE_FARM_WORKER_TYPE.spooky]: transformWorkerPower(
        parsed?.workerPower?.spooky
      ),
      [IDLE_FARM_WORKER_TYPE.snowy]: transformWorkerPower(
        parsed?.workerPower?.snowy
      ),
      [IDLE_FARM_WORKER_TYPE.jumpy]: transformWorkerPower(
        parsed?.workerPower?.jumpy
      ),
      [IDLE_FARM_WORKER_TYPE.lovely]: transformWorkerPower(
        parsed?.workerPower?.lovely
      ),
      [IDLE_FARM_WORKER_TYPE.festive]: transformWorkerPower(
        parsed?.workerPower?.festive
      )
    },
    market: typedObjectEntries(parsed?.market ?? {}).reduce(
      (acc, [key, value]) => {
        acc[key] = transformMarketItem(value);
        return acc;
      },
      {} as TMarketItems
    ),
    leaderboard: {
      [IDLE_FARM_WORKER_TYPE.useless]: parsed?.leaderboard?.useless ?? [],
      [IDLE_FARM_WORKER_TYPE.deficient]: parsed?.leaderboard?.deficient ?? [],
      [IDLE_FARM_WORKER_TYPE.common]: parsed?.leaderboard?.common ?? [],
      [IDLE_FARM_WORKER_TYPE.talented]: parsed?.leaderboard?.talented ?? [],
      [IDLE_FARM_WORKER_TYPE.wise]: parsed?.leaderboard?.wise ?? [],
      [IDLE_FARM_WORKER_TYPE.expert]: parsed?.leaderboard?.expert ?? [],
      [IDLE_FARM_WORKER_TYPE.masterful]: parsed?.leaderboard?.masterful ?? [],
      [IDLE_FARM_WORKER_TYPE.guru]: parsed?.leaderboard?.guru ?? [],
      [IDLE_FARM_WORKER_TYPE.spooky]: parsed?.leaderboard?.spooky ?? [],
      [IDLE_FARM_WORKER_TYPE.snowy]: parsed?.leaderboard?.snowy ?? [],
      [IDLE_FARM_WORKER_TYPE.jumpy]: parsed?.leaderboard?.jumpy ?? [],
      [IDLE_FARM_WORKER_TYPE.lovely]: parsed?.leaderboard?.lovely ?? [],
      [IDLE_FARM_WORKER_TYPE.festive]: parsed?.leaderboard?.festive ?? [],
    }
  };
};

const toRedis = (value: IInfo): string => {
  return JSON.stringify(value);
};

export const infoTransformer = {
  fromRedis,
  toRedis
};

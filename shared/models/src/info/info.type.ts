import type {ValuesOf} from '../type';
import type {IDLE_FARM_ITEMS, IDLE_FARM_WORKER_TYPE} from '@idle-helper/constants';

export interface IMarketItem {
  price: number;
  isOverstocked: boolean;
  isOutOfStock: boolean;
  lastUpdatedAt: Date;
  rate: number;
}

export type TMarketItems = Record<keyof typeof IDLE_FARM_ITEMS, IMarketItem>;

interface ILeaderboardItem {
  name: string;
  value: string;
}

export interface IInfo {
  workerPower: Record<
    ValuesOf<typeof IDLE_FARM_WORKER_TYPE>,
    Record<number, number>
  >;
  market: TMarketItems;
  leaderboard: {
    [IDLE_FARM_WORKER_TYPE.useless]: ILeaderboardItem[];
    [IDLE_FARM_WORKER_TYPE.deficient]: ILeaderboardItem[];
    [IDLE_FARM_WORKER_TYPE.common]: ILeaderboardItem[];
    [IDLE_FARM_WORKER_TYPE.talented]: ILeaderboardItem[];
    [IDLE_FARM_WORKER_TYPE.wise]: ILeaderboardItem[];
    [IDLE_FARM_WORKER_TYPE.expert]: ILeaderboardItem[];
    [IDLE_FARM_WORKER_TYPE.masterful]: ILeaderboardItem[];
    [IDLE_FARM_WORKER_TYPE.guru]: ILeaderboardItem[];
    [IDLE_FARM_WORKER_TYPE.lovely]: ILeaderboardItem[];
    [IDLE_FARM_WORKER_TYPE.spooky]: ILeaderboardItem[];
    [IDLE_FARM_WORKER_TYPE.snowy]: ILeaderboardItem[];
    [IDLE_FARM_WORKER_TYPE.jumpy]: ILeaderboardItem[];
    [IDLE_FARM_WORKER_TYPE.festive]: ILeaderboardItem[];
  };
}

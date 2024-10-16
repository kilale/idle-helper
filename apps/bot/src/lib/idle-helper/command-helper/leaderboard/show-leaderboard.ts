import {infoService} from '../../../../services/database/info.service';
import type {
  BaseInteraction} from 'discord.js';
import {
  ActionRowBuilder,
  EmbedBuilder,
  StringSelectMenuBuilder
} from 'discord.js';
import {
  BOT_COLOR,
  BOT_EMOJI,
  IDLE_FARM_WORKER_TYPE
} from '@idle-helper/constants';
import type {IInfo} from '@idle-helper/models/dist/info/info.type';
import {generateNavigationRow} from '../../../../utils/pagination-row';
import {typedObjectEntries} from '@idle-helper/utils';

export const _showLeaderboard = async () => {
  let leaderboard = (await infoService.getLeaderboard()) as
    | IInfo['leaderboard']
    | undefined;
  let selectedType: keyof typeof SELECTOR_LABEL = IDLE_FARM_WORKER_TYPE.useless;
  let page = 0;

  const render = () => {
    return {
      components: generateSelector({
        page,
        currentSelectItem: selectedType,
        total: leaderboard?.[selectedType]?.length ?? 0
      }),
      embeds: [
        generateEmbed({
          page,
          type: selectedType,
          leaderboard
        })
      ]
    };
  };

  const replyInteraction = (interaction: BaseInteraction) => {
    if (interaction.isStringSelectMenu()) {
      selectedType = interaction.values[0] as keyof typeof SELECTOR_LABEL;
      page = 0;
    }
    if (interaction.isButton()) {
      page = Number(interaction.customId);
    }
    return render();
  };

  const stop = () => {
    leaderboard = undefined;
  };

  return {
    render,
    replyInteraction,
    stop
  };
};

const SELECTOR_LABEL = {
  [IDLE_FARM_WORKER_TYPE.useless]: {
    emoji: BOT_EMOJI.animatedWorker.useless,
    label: 'Useless'
  },
  [IDLE_FARM_WORKER_TYPE.deficient]: {
    emoji: BOT_EMOJI.animatedWorker.deficient,
    label: 'Deficient'
  },
  [IDLE_FARM_WORKER_TYPE.common]: {
    emoji: BOT_EMOJI.animatedWorker.common,
    label: 'Common'
  },
  [IDLE_FARM_WORKER_TYPE.talented]: {
    emoji: BOT_EMOJI.animatedWorker.talented,
    label: 'Talented'
  },
  [IDLE_FARM_WORKER_TYPE.wise]: {
    emoji: BOT_EMOJI.animatedWorker.wise,
    label: 'Wise'
  },
  [IDLE_FARM_WORKER_TYPE.expert]: {
    emoji: BOT_EMOJI.animatedWorker.expert,
    label: 'Expert'
  },
  [IDLE_FARM_WORKER_TYPE.masterful]: {
    emoji: BOT_EMOJI.animatedWorker.masterful,
    label: 'Masterful'
  },
  [IDLE_FARM_WORKER_TYPE.guru]: {
    emoji: BOT_EMOJI.animatedWorker.guru,
    label: 'GURU'
  },
  [IDLE_FARM_WORKER_TYPE.spooky]: {
    emoji: BOT_EMOJI.animatedWorker.spooky,
    label: 'Spooky'
  },
  [IDLE_FARM_WORKER_TYPE.snowy]: {
    emoji: BOT_EMOJI.animatedWorker.snowy,
    label: 'Snowy'
  },
  [IDLE_FARM_WORKER_TYPE.lovely]: {
    emoji: BOT_EMOJI.animatedWorker.lovely,
    label: 'Lovely'
  },
  [IDLE_FARM_WORKER_TYPE.jumpy]: {
    emoji: BOT_EMOJI.animatedWorker.jumpy,
    label: 'Jumpy'
  },
  [IDLE_FARM_WORKER_TYPE.festive]: {
    emoji: BOT_EMOJI.animatedWorker.festive,
    label: 'Festive'
  }
};

const PAGES_TITLE = {
  [IDLE_FARM_WORKER_TYPE.useless]: `${BOT_EMOJI.animatedWorker.useless} ${BOT_EMOJI.workerText.useless1}${BOT_EMOJI.workerText.useless2}${BOT_EMOJI.workerText.useless3}${BOT_EMOJI.workerText.useless4}${BOT_EMOJI.workerText.useless5}${BOT_EMOJI.workerText.useless6}`,
  [IDLE_FARM_WORKER_TYPE.deficient]: `${BOT_EMOJI.animatedWorker.deficient} ${BOT_EMOJI.workerText.deficient1}${BOT_EMOJI.workerText.deficient2}${BOT_EMOJI.workerText.deficient3}${BOT_EMOJI.workerText.deficient4}${BOT_EMOJI.workerText.deficient5}${BOT_EMOJI.workerText.deficient6}${BOT_EMOJI.workerText.deficient7}`,
  [IDLE_FARM_WORKER_TYPE.common]: `${BOT_EMOJI.animatedWorker.common} ${BOT_EMOJI.workerText.common1}${BOT_EMOJI.workerText.common2}${BOT_EMOJI.workerText.common3}${BOT_EMOJI.workerText.common4}${BOT_EMOJI.workerText.common5}`,
  [IDLE_FARM_WORKER_TYPE.talented]: `${BOT_EMOJI.animatedWorker.talented} ${BOT_EMOJI.workerText.talented1}${BOT_EMOJI.workerText.talented2}${BOT_EMOJI.workerText.talented3}${BOT_EMOJI.workerText.talented4}${BOT_EMOJI.workerText.talented5}${BOT_EMOJI.workerText.talented6}${BOT_EMOJI.workerText.talented7}`,
  [IDLE_FARM_WORKER_TYPE.expert]: `${BOT_EMOJI.animatedWorker.expert} ${BOT_EMOJI.workerText.expert1}${BOT_EMOJI.workerText.expert2}${BOT_EMOJI.workerText.expert3}${BOT_EMOJI.workerText.expert4}${BOT_EMOJI.workerText.expert5}`,
  [IDLE_FARM_WORKER_TYPE.wise]: `${BOT_EMOJI.animatedWorker.wise} ${BOT_EMOJI.workerText.wise1}${BOT_EMOJI.workerText.wise2}${BOT_EMOJI.workerText.wise3}${BOT_EMOJI.workerText.wise4}`,
  [IDLE_FARM_WORKER_TYPE.masterful]: `${BOT_EMOJI.animatedWorker.masterful} ${BOT_EMOJI.workerText.masterful1}${BOT_EMOJI.workerText.masterful2}${BOT_EMOJI.workerText.masterful3}${BOT_EMOJI.workerText.masterful4}${BOT_EMOJI.workerText.masterful5}${BOT_EMOJI.workerText.masterful6}${BOT_EMOJI.workerText.masterful7}`,
  [IDLE_FARM_WORKER_TYPE.guru]: `${BOT_EMOJI.animatedWorker.guru} ${BOT_EMOJI.workerText.guru1}${BOT_EMOJI.workerText.guru2}${BOT_EMOJI.workerText.guru3}${BOT_EMOJI.workerText.guru4}`,
  [IDLE_FARM_WORKER_TYPE.spooky]: `${BOT_EMOJI.animatedWorker.spooky} ${BOT_EMOJI.workerText.spooky1}${BOT_EMOJI.workerText.spooky2}${BOT_EMOJI.workerText.spooky3}${BOT_EMOJI.workerText.spooky4}${BOT_EMOJI.workerText.spooky5}`,
  [IDLE_FARM_WORKER_TYPE.snowy]: `${BOT_EMOJI.animatedWorker.snowy} ${BOT_EMOJI.workerText.snowy1}${BOT_EMOJI.workerText.snowy2}${BOT_EMOJI.workerText.snowy3}${BOT_EMOJI.workerText.snowy4}`,
  [IDLE_FARM_WORKER_TYPE.lovely]: `${BOT_EMOJI.animatedWorker.lovely} ${BOT_EMOJI.workerText.lovely1}${BOT_EMOJI.workerText.lovely2}${BOT_EMOJI.workerText.lovely3}${BOT_EMOJI.workerText.lovely4}${BOT_EMOJI.workerText.lovely5}`,
  [IDLE_FARM_WORKER_TYPE.jumpy]: `${BOT_EMOJI.animatedWorker.jumpy} ${BOT_EMOJI.workerText.jumpy1}${BOT_EMOJI.workerText.jumpy2}${BOT_EMOJI.workerText.jumpy3}${BOT_EMOJI.workerText.jumpy4}`,
  [IDLE_FARM_WORKER_TYPE.festive]: `${BOT_EMOJI.animatedWorker.festive} ${BOT_EMOJI.workerText.festive1}${BOT_EMOJI.workerText.festive2}${BOT_EMOJI.workerText.festive3}${BOT_EMOJI.workerText.festive4}${BOT_EMOJI.workerText.festive5}${BOT_EMOJI.workerText.festive6}`
};

interface IGenerateEmbed {
  type: keyof typeof SELECTOR_LABEL;
  leaderboard?: IInfo['leaderboard'];
  page: number;
}

const ITEMS_PER_PAGE = 15;

const generateEmbed = ({type, leaderboard, page}: IGenerateEmbed) => {
  const embed = new EmbedBuilder()
    .setColor(BOT_COLOR.embed)
    .setTitle(':trophy: LEADERBOARD :trophy:')
    .setFooter({
      text: 'Leaderboard is updated every hour'
    });

  const leaderboardPage =
    leaderboard?.[type].slice(
      page * ITEMS_PER_PAGE,
      (page + 1) * ITEMS_PER_PAGE
    ) ?? [];

  const description = [PAGES_TITLE[type]];
  description.push(
    leaderboardPage.length
      ? leaderboardPage
        .map(
          (lb, index) =>
            `${page * ITEMS_PER_PAGE + index + 1}. **${lb.name}** ~-~ ${
              lb.value
            }`
        )
        .join('\n')
      : 'No data found'
  );
  embed.setDescription(description.join('\n'));

  return embed;
};

interface IGenerateSelector {
  page: number;
  total: number;
  currentSelectItem: keyof typeof SELECTOR_LABEL;
}

const generateSelector = ({
  page,
  total,
  currentSelectItem
}: IGenerateSelector) => {
  const rows = [];
  const paginateRow = generateNavigationRow({
    page,
    itemsPerPage: ITEMS_PER_PAGE,
    total
  });
  rows.push(paginateRow);

  const selectorRow =
    new ActionRowBuilder<StringSelectMenuBuilder>().addComponents(
      new StringSelectMenuBuilder()
        .setCustomId('leaderboard-selector')
        .setPlaceholder('Select a type')
        .addOptions(
          typedObjectEntries(SELECTOR_LABEL).map(([type, value]) => ({
            value: type,
            label: value.label,
            default: type === currentSelectItem,
            emoji: value.emoji
          }))
        )
    );
  rows.push(selectorRow);
  return rows;
};

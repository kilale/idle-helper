import {EmbedBuilder} from 'discord.js';
import {
  BOT_COLOR,
  BOT_INVITE_LINK,
  SUPPORT_SERVER_INVITE_LINK
} from '@idle-helper/constants';

export const _invite = async (): Promise<EmbedBuilder> => {
  const embed = new EmbedBuilder().setColor(BOT_COLOR.embed);

  embed.addFields(
    {
      name: 'Invite Cult Helper to your server',
      value: `__There is **no** invite link. Ask for access.__\n
      >>> Join the support server, contribute to the community and get your server whitelisted.`
    },
    {
      name: 'Join the Cult Helper support server',
      value: `**[Support Server](${SUPPORT_SERVER_INVITE_LINK})**`
    }
  );

  return embed;
};

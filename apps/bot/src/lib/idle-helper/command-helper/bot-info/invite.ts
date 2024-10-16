import {EmbedBuilder} from 'discord.js';
import {
  BOT_COLOR,
  BOT_INVITE_LINK,
  SUPPORT_SERVER_INVITE_LINK
} from '@idle-helper/constants';

export const _invite = async (): Promise<EmbedBuilder> => {
  const embed = new EmbedBuilder().setColor(BOT_COLOR.embed);
  embed.setTitle('Cult Helper Invite');
  embed.addFields(
    {
      name: ' ',
      value: 'Cult Helper is __invite only__ bot, if you want to get access:\n- join the support server\n- contribute to the project'
    },
    {
      name: 'Join the Cult Helper support server:',
      value: `**[Support Server](${SUPPORT_SERVER_INVITE_LINK})**`
    }
  ); 

  return embed;
};

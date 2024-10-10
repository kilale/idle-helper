import type {Client, Message, User} from 'discord.js';
import {createIdleFarmCommandListener} from '../../../utils/idle-farm-command-listener';
import {userService} from '../../../services/database/user.service';
import claimReminder from '../../idle-helper/reminder/claim-reminder';

interface IUseTimeDilator{
  client: Client;
  message: Message;
  author: User;
  isSlashCommand?: boolean;
}

export const idleUseTimeDilator = ({
  author,
  client,
  isSlashCommand,
  message
}: IUseTimeDilator) => {
  let event = createIdleFarmCommandListener({
    author,
    client,
    channelId: message.channel.id
  });
  if (!event) return;
  event.on('content', async (content, collected) => {
    if (isTimeDilatorUsed({author, message: collected})) {
      event?.stop();
      await idleUseTimeDilatorSuccess({author, message: collected});
    }
  });
  event.on('end', () => {
    event = undefined;
  });
  if (isSlashCommand) event.triggerCollect(message);
};

interface IIdleUseTimeDilatorSuccess {
  author: User;
  message: Message;
}

export const idleUseTimeDilatorSuccess = async ({
  author,
  message
}: IIdleUseTimeDilatorSuccess) => {
  const amount = message.content?.match(/clicks a button on the (\d+)/)?.[1];

  if (!amount) return;

  await userService.addTimeDilatorUsage({
    userId: author.id,
    amount: Number(amount)
  });

  await claimReminder.update({
    userId: author.id
  });
};

interface IChecker {
  author: User;
  message: Message;
}

export const isTimeDilatorUsed = ({author, message}: IChecker) =>
  [author.username, 'time dilator', 'were added to your farms!'].every(
    (text) => message.content.includes(text)
  );

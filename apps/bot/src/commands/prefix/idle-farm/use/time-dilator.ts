import {
  PREFIX_COMMAND_TYPE,
  USER_ACC_OFF_ACTIONS,
  USER_NOT_REGISTERED_ACTIONS
} from '@idle-helper/constants';
import {idleUseTimeDilator} from '../../../../lib/idle-farm/use/time-dilator';

export default <PrefixCommand>{
  name: 'idleTimeDilator',
  commands: ['use time dilator'],
  preCheck: {
    userAccOff: USER_ACC_OFF_ACTIONS.abort,
    userNotRegistered: USER_NOT_REGISTERED_ACTIONS.abort
  },
  type: PREFIX_COMMAND_TYPE.idleFarm,
  execute: (client, message) => {
    idleUseTimeDilator({
      author: message.author,
      client,
      isSlashCommand: false,
      message
    });
  }
};

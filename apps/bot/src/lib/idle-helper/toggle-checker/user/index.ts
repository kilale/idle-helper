import {userService} from '../../../../services/database/user.service';
import {_toggleClaimReminder, _toggleRaidHelper} from './toggle-user-checker-list';

interface IToggleUserChecker {
  userId: string;
}

export type IToggleUserCheckerReturnType = Awaited<ReturnType<typeof toggleUserChecker>>;

const toggleUserChecker = async ({userId}: IToggleUserChecker) => {
  const userToggle = await userService.getUserToggle({userId});
  if (!userToggle) return null;

  return {
    reminder: {
      claim: _toggleClaimReminder({toggle: userToggle}),
    },
    raidHelper: _toggleRaidHelper({toggle: userToggle}),
  };
};

export default toggleUserChecker;
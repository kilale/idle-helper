export const SLASH_COMMAND = {
  account: {
    name: 'account',
    description: 'Account related commands',
    delete: {
      name: 'delete',
      description: 'Delete your account',
    },
    off: {
      name: 'off',
      description: 'Turn off your account',
    },
    on: {
      name: 'on',
      description: 'Turn on your account',
    },
    register: {
      name: 'register',
      description: 'Register your account',
    },
    reminderChannel: {
      name: 'reminder-channel',
      description: 'Bind reminder channel to current channel',
    },
    settings: {
      name: 'settings',
      description: 'View your account settings',
    },
    claimReminder: {
      name: 'claim-reminder',
      description: 'Set reminder to claim your farm',
    },
  },
  toggle: {
    name: 'toggle',
    description: 'Toggle commands',
    set: {
      name: 'set',
      description: 'Update personal toggle settings',
    },
    show: {
      name: 'show',
      description: 'Show personal toggle settings',
    },
    reset: {
      name: 'reset',
      description: 'Reset personal toggle settings',
    },
  },
  server: {
    name: 'server',
    description: 'Server configuration',
    settings: {
      name: 'settings',
      description: 'View the server settings',
    },
    randomEvents: {
      name: 'random-events',
      description: 'set message to send when random events occur (type "clear" to remove)',
    },
  },
  invite: {
    name: 'invite',
    description: 'Invite EPIC Helper to another server or join the official server',
  },
  help: {
    name: 'help',
    description: 'Show all commands or information of EPIC Helper',
  },
} as const;

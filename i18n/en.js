import long from './en-long'

export default {

  ui: {

    tabs: {
      accounts: 'Accounts',
      send: 'Send',
      settings: 'Settings'
    },

    inputs: {
      stellar_address: {
        placeholder: 'Enter address'
      },
      account_picker: {
        placeholder: 'Select an account'
      },
      asset_amount: {
        placeholder: 'Enter amount (ie. 55)'
      },
      inflation_pools: {
        placeholder: 'Select a pool'
      }
    },

    common: {
      close: 'Close',
      status: 'Status',
      date: 'MMMM D, YYYY @ H:mm',
      inflation_address: 'Inflation pool address',
      federated_address: 'Federated address',
      account_address: 'Account address'
    }

  },

  onboarding: {
    header: 'Add Account',
    segment_existing_account: 'Import Existing',
    about_import: long.onboardingImport,
    add_btn: 'Import account',
    skip_btn: 'Skip this',
    federate_btn: 'Create federated address',
    set_inflation_btn: 'Set inflation pool',
    finalise_btn: 'Done',
    about_federation: long.onboardingFederation,
    about_inflation: long.onboardingInflation,
    finalise: 'Account import is done! Here are your details:'
  },

  accounts: {
    list_header: 'Accounts',
    view_header: 'Viewing',
    current_balance: 'Current balance:',
    total_balance: 'Total Balance:',
    no_accounts: 'You have absolutely no accounts',
    no_transactions: 'You have absolutely no transactions',
    balance: 'Balance',

    actions: {
      title: 'Account Actions',
      send: 'Send address to a friend',
      inflation: 'Set inflation',
      federate: 'Federate address',
      rename: 'Rename account',
      wut: 'What is this?'
    }
  },

  account_help: {
    header: 'Help',
    federation_header: 'Federated addresses',
    federation_explanation: long.accountHelpFederation,
    inflation_header: 'What is "inflation"?',
    inflation_explanation: long.accountHelpInflation,
    rename_header: 'Renaming your account',
    rename_explanation: long.accountHelpRename
  },

  send: {
    form_header: 'Send Funds',
    status_header: 'Tracker',
    send_btn: 'Send',
    new_send_btn: 'New Transaction',
    view_on_stellarchain: 'View on StellarChain',

    status: {
      processing: 'processing',
      completed: 'completed'
    }
  },

  settings: {
    header: 'Settings',

    actions: {
      purge: 'Clear all data'
    }
  },

  transaction: {
    header: 'Transaction',
    no_hash: 'Awaiting transaction ID',
    effects: {
      create_account: 'Account initialised',
      account_credited: 'Received {{amount}} {{assetAbbreviation}}',
      account_debited: 'Sent {{amount}} {{assetAbbreviation}}',
      set_options: 'Changed preferences'
    }
  },

  effects: {
    create_account: 'Account initialised',
    account_credited: 'Received {{amount}} {{assetAbbreviation}} from {{truncFrom}}',
    account_debited: 'Sent {{amount}} {{assetAbbreviation}} to {{truncTo}}'
  },

  errors: {
    NO_INTERNET: 'You are not connected to internet',
    REQUEST_FAILED: 'There was an error connecting to the network',

    fallback_message: 'An error has occurred'
  }

}

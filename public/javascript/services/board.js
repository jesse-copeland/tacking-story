angular.module('TackingStory')
.factory('BoardFactory', function BoardFactory () {
  return {
    all: function () {
      var boards = [
        {
          name: 'Not Started',
          stories: [   
            {
              type: 'user',
              title: '',
              role: 'Registered Online Banking Customer',
              action: 'view a list of all my accounts',
              benefit: 'I can quickly see my current balances',
              acceptance: 'I can view my accounts and quickly see my current balances'
            },
            {
              type: 'user',
              title: '',
              role: 'Personal Checking Account Holder',
              action: 'be notified of checking overdrafts when viewing account page',
              benefit: 'I can transfer monies to avoid further penelties',
              acceptance: ''
            },
            {
              type: 'user',
              title: '',
              role: 'Bank Member Service Rep',
              action: 'view a list of all accounts belonging to the member am servicing',
              benefit: 'view and edit account detail to resolve account issues',
              acceptance: ''
            },
            {
              type: 'non-user',
              title: '',
              role: 'Developer',
              action: 'configure our assigned development region',
              benefit: 'we can begin developing User Stories in our backlog',
              acceptance: ''
            },
            {
              type: 'non-user',
              title: '',
              role: 'Tester',
              action: 'prepare a test lab',
              benefit: 'we have representation of all device types and OSs we need to execute test on',
              acceptance: ''
            }
          ]
        },
        {
          name: 'In Progress',
          stories: [
            {
              type: 'non-user',
              title: '',
              role: 'Tester',
              action: 'identify testing frameworks to install and configure',
              benefit: 'we have the right tools available to find all possible bugs',
              acceptance: ''
            },
            {
              type: 'spike',
              title: '',
              role: 'Developer',
              action: 'research the latest security protocols',
              benefit: 'we feel confident we selected the best method for securing our customer\'s financial data',
              acceptance: ''
            },
            {
              type: 'spike',
              title: '',
              role: 'Business Analyst',
              action: 'research the state specific business rules for handleing white goods taxes',
              benefit: 'our customers are charged appropriately for the items they purchase',
              acceptance: ''
            },
            {
              type: 'spike',
              title: '',
              role: 'Server Engineer',
              action: 'provision and configure a medium sized server',
              benefit: 'the bank web dev team can test code changes',
              acceptance: ''
            }
          ]
        },
        {
          name: 'Completed',
          stories: [
            {
              type: 'user',
              title: '',
              role: 'Personal Checking Account Holder',
              action: 'register for an online banking account',
              benefit: 'I can access my account details online',
              acceptance: ''
            },
            {
              type: 'spike',
              title: '',
              role: 'Server Engineer',
              action: 'provision and configure a medium sized server',
              benefit: 'the bank web dev team can test code changes',
              acceptance: ''
            }
          ]
        },
      ];
      return boards;
    }
  };
});
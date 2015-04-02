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
              role: 'Registered Online Banking Customer',
              action: 'view a list of all my accounts',
              benefit: 'I can quickly see my current balances'
            },
            {
              type: 'user',
              role: 'Personal Checking Account Holder',
              action: 'be notified of checking overdrafts when viewing account page',
              benefit: 'I can transfer monies to avoid further penelties'
            },
            {
              type: 'user',
              role: 'Bank Member Service Rep',
              action: 'view a list of all accounts belonging to the member am servicing',
              benefit: 'view and edit account detail to resolve account issues'
            },
            {
              type: 'non-user',
              role: 'Developer',
              action: 'configure our assigned development region',
              benefit: 'we can begin developing User Stories in our backlog'
            },
            {
              type: 'non-user',
              role: 'Tester',
              action: 'prepare a test lab',
              benefit: 'we have representation of all device types and OSs we need to execute test on'
            }
          ]
        },
        {
          name: 'In Progress',
          stories: [
            {
              type: 'non-user',
              role: 'Tester',
              action: 'identify testing frameworks to install and configure',
              benefit: 'we have the right tools available to find all possible bugs'
            },
            {
              type: 'spike',
              role: 'Developer',
              action: 'research the latest security protocols',
              benefit: 'we feel confident we selected the best method for securing our customer\'s financial data'
            },
            {
              type: 'spike',
              role: 'Business Analyst',
              action: 'research the state specific business rules for handleing white goods taxes',
              benefit: 'our customers are charged appropriately for the items they purchase'
            },
            {
              type: 'spike',
              role: 'Server Engineer',
              action: 'provision and configure a medium sized server',
              benefit: 'the bank web dev team can test code changes'
            }
          ]
        },
        {
          name: 'Completed',
          stories: [
            {
              type: 'user',
              role: 'Personal Checking Account Holder',
              action: 'register for an online banking account',
              benefit: 'I can access my account details online'
            },
            {
              type: 'spike',
              role: 'Server Engineer',
              action: 'provision and configure a medium sized server',
              benefit: 'the bank web dev team can test code changes'
            }
          ]
        },
      ];
      return boards;
    }
  };
});
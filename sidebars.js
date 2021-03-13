module.exports = {
  someSidebar: {
    Overview: ['overview/introduction', 'overview/motivation'],
    DeveloperGuide: ['meteor-app/installation', 'slackbot/create-hacc-hui-slackbot', 'meteor-app/running-hacc-hui',
      'meteor-app/ide', 'meteor-app/source-code-organization', 'meteor-app/coding-standards',
      {
        type: 'category',
        label: 'Requirements',
        items: [
          {
            type: 'category',
            label: 'User Stories',
            items: ['requirements/installers', 'requirements/administrators', 'requirements/participants', 'requirements/future'],
          },
          {
            type: 'category',
            label: 'Milestones',
            items: ['requirements/milestone1', 'requirements/milestone2', 'requirements/milestone3', 'requirements/milestone4'],
          },
        ],
      },
      {
        type: 'category',
        label: 'Data Model',
        items: ['datamodel/class-hierarchy', 'datamodel/entity-relationship-model', 'datamodel/validated-methods', 'datamodel/jsdoc-api']
      },
      {
        type: 'category',
        label: 'Team Procedures',
        items: ['teams/creation', 'teams/milestone-procedures']
      },
      {
        type: 'category',
        label: 'Deployment',
        items: ['developers/deployment/overview',
          {
            type: 'category',
            label: 'Concepts',
            items: []
          },
          {
            type: 'category',
            label: 'How to...',
            items: [
              'developers/deployment/howto/build-a-release',
              'developers/deployment/howto/deploy-a-release',
              'developers/deployment/howto/reset-db',
              'developers/deployment/howto/docker-management',
              'developers/deployment/howto/setup-https',
            ]
          },
        ],
      },
    ],
  },
};

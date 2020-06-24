module.exports = {
  someSidebar: {
    Overview: ['overview/introduction', 'overview/motivation', 'overview/markdown-reference', 'overview/mdx'],
    Requirements: [
      {
        type: 'category',
        label: 'User Stories',
        items: ['requirements/installers','requirements/administrators', 'requirements/developers', 'requirements/future'],
      },
      {
        type: 'category',
        label: 'Milestones',
        items: ['requirements/milestone1', 'requirements/milestone2', 'requirements/milestone3', 'requirements/milestone4'],
      },
    ],
    DeveloperGuide: ['meteor-app/installation', 'slackbot/create-hacc-hui-slackbot', 'meteor-app/running-hacc-hui',
      {
        type: 'category',
        label: 'Data Model',
        items: ['datamodel/class-hierarchy', 'datamodel/entity-relationship-model']
      },
    ],
  },
};

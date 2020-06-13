module.exports = {
  someSidebar: {
    Overview: ['overview/introduction', 'overview/motivation', 'overview/markdown-reference', 'overview/mdx'],
    Requirements: [
      {
        type: 'category',
        label: 'User Stories',
        items: ['requirements/installers','requirements/administrators', 'requirements/developers', 'requirements/future'],
      },
    ],
    DeveloperGuide: ['meteor-app/installation'],
  },
};

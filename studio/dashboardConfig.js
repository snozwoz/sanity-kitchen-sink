export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f6e00dc4630d2cb1182cda3',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-x3qchhjc',
                  apiId: 'b3c33323-b2e0-48ee-bf70-367f36762169'
                },
                {
                  buildHookId: '5f6e00dcb5ce67f9bb5c5685',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-g21wort4',
                  apiId: '712bb442-a433-4e8b-8eb5-c44d56f0e5f9'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/snozwoz/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-g21wort4.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}

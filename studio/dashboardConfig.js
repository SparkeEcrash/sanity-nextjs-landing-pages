export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
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
                  buildHookId: '5f739952030d61008a55a39b',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-asmvrewa',
                  apiId: '14dd8053-4910-46b9-a6e8-cfdb38bc0371'
                },
                {
                  buildHookId: '5f7399525f950800ef0d6f7b',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-kxeyand9',
                  apiId: '174d6549-2e50-4d5a-8f94-fd0bb7bc7597'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/SparkeEcrash/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-kxeyand9.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}

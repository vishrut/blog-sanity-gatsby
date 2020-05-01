export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5eac6cd9cdb41b0464399bc5',
                  title: 'Sanity Studio',
                  name: 'blog-sanity-gatsby-studio',
                  apiId: '0fcf8a14-fbfa-4aac-bdb6-a03f7937e763'
                },
                {
                  buildHookId: '5eac6cd98ac1b005eb05434e',
                  title: 'Blog Website',
                  name: 'blog-sanity-gatsby-web',
                  apiId: '39eab321-32f2-49a6-a93d-991cbd9684a6'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/vishrut/blog-sanity-gatsby',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://blog-sanity-gatsby-web.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}

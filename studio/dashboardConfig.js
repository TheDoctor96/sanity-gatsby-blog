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
                  buildHookId: '5e2ef31db1f2ea1e0aaa4848',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-9fvxnsih',
                  apiId: 'e4b5f84e-91aa-403f-8c90-e5ef554ca7ba'
                },
                {
                  buildHookId: '5e2ef31dc666a279ad2f66e5',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-8kdpibwo',
                  apiId: '4d11c542-2fb9-4578-925f-e3baba423340'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/TheDoctor96/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-8kdpibwo.netlify.com', category: 'apps' }
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

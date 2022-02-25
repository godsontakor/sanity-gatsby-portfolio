export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '6218b5a7102a049b87debec6',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-shsdjgaw',
                  apiId: '8e3aaab1-995c-4d39-995b-4cf9e307b94e'
                },
                {
                  buildHookId: '6218b5a7aab5c9ab589a0a23',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-gpqfa343',
                  apiId: '07accbb1-3d91-4238-b529-f74395714e5d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/godsontakor/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-gpqfa343.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}

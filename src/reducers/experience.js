const experience = (state=[], action) => {
  return {
    title: 'Experience',
    items: [{
      id: 0,
      active: false,

      primark: {
        title: 'SMACC GmbH',
        link: 'https://www.smacc.io',
        target: '_blank',
      },

      meta: {
        location: 'Berlin'
      }

    }, {
      id: 1,

      active: false,

      primark: {
        title: 'Convo Inc',
        link: 'https://www.convo.com',
        target: '_blank',
      },

      meta: {
        startDate: 'Oct 2013',
        endDate: 'Nov 2016',
        location: 'Islamabad',
      },

      activities: [
        {
          title: 'Team Lead',
          epoch: '4m',
          work: [
            'Analyzed heap snapshots, timeline and audit reports, speed up loading, change detection, reflows, rendering, multilayer caches and moving forward, resulting to 3.5x improved snappiness.'
          ],
        },
        {
          title: 'Web Developer',
          epoch: '2y 10m',
          work: [
            'Developed Convo\'s redefined and reimagined web app from scratch. which ultimately drove the company’s biggest platform migration update from Adobe flex to Web.',
            'Implemented Two-Factor auth app, handled cross functional flux, resulting in 3rd party integrations and unified search algorithms.',
            'Implemented shared communication layer to expose native functions for web app loaded in native web view, yields native web app & menulet.',
          ],
        }
      ],

      links: [
        {
          title: '‘Mission critical’ teamwork tool Convo launches completely rebuilt Web and Mac apps',
          image: process.env.PUBLIC_URL + '/assets/tnw.png',
          meta: 'TNW — Jul 7, 2015',
          link: 'https://thenextweb.com/apps/2015/07/07/mission-critical-teamwork-tool-convo-launches-completely-rebuilt-web-and-mac-apps/'
        }, {
          title: 'Collaboration Service Convo Revamps Web Interface For More Speed, More ...',
          image: process.env.PUBLIC_URL + '/assets/techcrunch.png',
          meta: 'TECHCRUNCH - Jul 7, 2015',
          link: 'https://techcrunch.com/2015/07/07/convo-web-relaunch/'
        }, {
          title: 'All-new Convo for work conversations.',
          image: process.env.PUBLIC_URL + '/assets/convo.png',
          meta: 'CONVO - Jul 7, 2015',
          link: 'https://www.convo.com/blog/its-here-the-all-new-convo-tranforms-your-work-conversations/'
        }
      ]
    }]
  }
}

export default experience

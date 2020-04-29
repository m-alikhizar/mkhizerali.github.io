const projects = (state={}, action) => {
  return {
    title: 'Projects',
    items: [
      {
        id: 0,
        title: 'ZTAG',
        designation: 'Co-Founder | Head Client Engineering',
        technologies: ['HTML5', 'Canvas', 'SCSS', 'Chrome API', 'Page Scripts', 'Node', 'Amazon RDS', 'Mixpanel'],
        note: `Designed and Developed a Chrome extension which integrates with Facebook to allow contextual messaging on image content. It enables to collaborate on images using drawing/crop tools across all views. The recepient sees postest context as awesome drawing timelapse.`
      }, {
        id: 2,
        title: 'McFarlane Industries POS',
        designation: 'Freelancer',
        technologies: ['C#', 'iTextSharp', 'SQL 2008 R2', 'InstallShield'],
        note: 'Developed portable point-of-sale desktop application. It has client/admin modes, Accounts, Inventory, Dynamic reports, user friendly menu, money bank, Install setup and receipts.'
      }
    ]
  }
}

export default projects

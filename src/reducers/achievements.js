const achievements = (state={}, action) => {
  return {
    title: 'Achievements',
    items: [
      {
        title: 'Google Developer Group',
        location: 'Berlin',
        represented: 'Participant',
      }, {
        title: 'SOFTEC 2012 - Envision, Craft, Improvise',
        location: 'FAST Lahore',
        represented: 'Code Society',
      }, {
        title: 'IEEE',
        location: 'Islamabad',
        represented: 'Event organizer at FAST Programming Society 2011',
      },
    ]
  }
}

export default achievements

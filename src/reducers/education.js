const education = (state={}, action) => {
  return {
    title: 'Education',
    items: [
      {
        institution: 'National University of Computer and Emerging Sciences | FAST',
        location: 'Islamabad',
        epoch: '2009 - 2016',
        degree: 'Bachelor of Computer Science',
        projects: {
          items: [
            {
              title: 'Heterogeneous Hadoop Cluster',
              designation: 'Final Year Project',
              technologies: ['HDFS', 'Hadoop', 'Google Map Reduce', 'Cygwin', 'Java', 'Spring', 'Apache'],
              note: `Created a cluster of comodity machines networked in MapReduce architecture, Developed a java based client & server to execute data intensive programs on those clusters with realtime mappers management, monitoring and completion results onto reducers. Simulated a task to extract words from a 8GB text file in 1/8 time with 2 independant, 2 VMs stations network.`
            },
          ],
        }
      }, {
        institution: 'FC College (A Chartered University)',
        location: 'Lahore',
        epoch: '2006 - 2008',
        degree: 'Intermediate Computer Science'
      }
    ]
  }
}

export default education

const courseData = [
  {
    img: '/courses/c1.jpeg',
    title: 'Private Pilot Made Easy Online Ground School',
    price: '- $890',
    desc: 'Our online ground school will help you pass the FAA Private Pilot test with flying colors. Achieve your dreams of flying an airplane.',
    id: '639121637ca4efd619d0e85a',
    rows: 2,
    cols: 2,
    featured: true,
    modules: [
      {
        id: 'c1-001',
        name: 'Introduction',
        desc: 'Ultimate Guide to Becoming a Pilot',
        url: 'https://www.youtube.com/watch?v=Rfu045aoInU'
      },
      {
        id: 'c1-002',
        name: 'Types of Certificate',
        desc: 'This module explains the types of Pilot Certifcates and Aviation Medical Certificates in the Industry',
        url: 'https://www.youtube.com/watch?v=oyR_DPCMIoI'
      },
      {
        id: 'c1-003',
        name: 'Becoming a Private Pilot',
        desc: 'What does it take to become a Private Pilot? You will know right after this module',
        url: 'https://www.youtube.com/watch?v=WZOk2Y65_5w&t=3s'
      }
    ],
    assignments: [
      {
        id: 'a1',
        name: 'Assignment-1',
        desc: 'Explain Principles of Flight with examples',
        due: '23/12/2022',
        points: '15',
        submitted: false,
        subDate: 'NA',
        grade: 'NA'
      },
      {
        id: 'a2',
        name: 'Assignment-2',
        desc: 'Explain Aerodynamics of Flight with appropriate diagrams',
        due: '23/11/2022',
        points: '25',
        submitted: true,
        subDate: '20/11/2022',
        grade: '20'
      },
      {
        id: 'a3',
        name: 'Assignment-3',
        desc: 'List any 20 Integrated Flight Instruction (But it has to be in the right order)',
        due: '30/11/2022',
        points: '20',
        submitted: true,
        subDate: '29/11/2022',
        grade: 'PENDING'
      },
    ]
  },
  {
    img: '/courses/c2.jpeg',
    title: 'Instrument Rating Made Easy',
    price: '- $549',
    desc: 'Our online ground school will help you get your Instrument Rating so you can fly into rough conditions and gain additional privileges.',
    id: '639121637ca4efd619d0e85b',
    modules: [
      {
        id: 'c2-001',
        name: 'Flight Instruments',
        desc: 'This next lesson will focus on Flight Instruments.  Being that the powerplant is the heart and soul of an aircraft, the flight instruments are the eyes and ears. This section will go into great depth on how the pitot-static system operates, and which instruments are connected.  They are the altimeter, airspeed indicator, and vertical speed indicator. ',
        url: 'https://www.youtube.com/watch?v=sLkz8tRnLug&list=PL7WHlDlLp4LVwREvR6QoNWwWSb2CPedcZ&index=6'
      },
      {
        id: 'c2-002',
        name: 'Part 61 and Part 141',
        desc: 'This module shows you the difference between Part 61 and Part 141',
        url: 'https://www.youtube.com/watch?v=GxOCnqlwB7g&list=PLG_hxiQ49vKUzB7r0dPhcHNBkWSAbMdr-&index=6'
      },
      {
        id: 'c2-003',
        name: 'Preflight a Cessna 172',
        desc: 'This module gives you an understanding of how to Preflight a Cessna 172 - In Depth Tutorial - G1000',
        url: 'https://www.youtube.com/watch?v=4cwKZ0Q_Xug&list=PLG_hxiQ49vKUzB7r0dPhcHNBkWSAbMdr-&index=21'
      }
    ],
  assignments: [
    {
      id: 'b1',
      name: 'Assignment-1',
      desc: 'Draw the Aircraft Structure and briefly describe the parts',
      due: '02/10/2022',
      points: '30',
      submitted: true,
      subDate: '02/10/2022',
      grade: '28.5'
    },
    {
      id: 'b2',
      name: 'Assignment-2',
      desc: 'Write a Paragraph each on Stalls and Airspeed',
      due: '18/12/2022',
      points: '15',
      submitted: false,
      grade: 'NA'
    },
    {
      id: 'b3',
      name: 'Assignment-3',
      desc: 'Review emergency procedures and checklists and write a report on your understanding along with some of your own additions',
      due: '15/10/2022',
      points: '25',
      submitted: true,
      subDate: '10/110/2022',
      grade: '25'
    },
  ]
  },
  {
    img: '/courses/c3.jpeg',
    title: 'Commercial Pilot Made Easy',
    price: '- $890',
    desc: 'Our online ground school will help you pass the FAA Commercial Pilot exam with flying colors.',
    id: '63914991c50046f26c4a3b1c',
    modules: [
      {
        id: 'c3-001',
        name: 'Flight Instruments',
        desc: 'This next lesson will focus on Flight Instruments.  Being that the powerplant is the heart and soul of an aircraft, the flight instruments are the eyes and ears. This section will go into great depth on how the pitot-static system operates, and which instruments are connected.  They are the altimeter, airspeed indicator, and vertical speed indicator. ',
        url: 'https://www.youtube.com/watch?v=sLkz8tRnLug&list=PL7WHlDlLp4LVwREvR6QoNWwWSb2CPedcZ&index=6'
      },
      {
        id: 'c3-002',
        name: 'Part 61 and Part 141',
        desc: 'This module shows you the difference between Part 61 and Part 141',
        url: 'https://www.youtube.com/watch?v=GxOCnqlwB7g&list=PLG_hxiQ49vKUzB7r0dPhcHNBkWSAbMdr-&index=6'
      },
      {
        id: 'c3-003',
        name: 'Preflight a Cessna 172',
        desc: 'This module gives you an understanding of how to Preflight a Cessna 172 - In Depth Tutorial - G1000',
        url: 'https://www.youtube.com/watch?v=4cwKZ0Q_Xug&list=PLG_hxiQ49vKUzB7r0dPhcHNBkWSAbMdr-&index=21'
      }
    ],
  assignments: [
    {
      id: 'c1',
      name: 'Assignment-1',
      desc: 'Draw the Aircraft Structure and briefly describe the parts',
      due: '02/10/2022',
      points: '30',
      submitted: true,
      subDate: '02/10/2022',
      grade: '28.5'
    },
    {
      id: 'c2',
      name: 'Assignment-2',
      desc: 'Write a Paragraph each on Stalls and Airspeed',
      due: '18/12/2022',
      points: '15',
      submitted: false,
      grade: 'NA'
    },
    {
      id: 'c3',
      name: 'Assignment-3',
      desc: 'Review emergency procedures and checklists and write a report on your understanding along with some of your own additions',
      due: '15/10/2022',
      points: '25',
      submitted: true,
      subDate: '10/110/2022',
      grade: '25'
    },
  ]
  },
  {
    img: '/courses/c4.jpeg',
    title: 'Checkride Made Easy',
    price: '- $249',
    desc: 'Get advice directly from a Designated Pilot Examiner on what you need to know and demonstrate to pass your checkride.',
    id: '63914991c50046f26c4a3b1d',
    cols: 2,
    modules: [
      {
        id: 'c4-001',
        name: 'Flight Instruments',
        desc: 'This next lesson will focus on Flight Instruments.  Being that the powerplant is the heart and soul of an aircraft, the flight instruments are the eyes and ears. This section will go into great depth on how the pitot-static system operates, and which instruments are connected.  They are the altimeter, airspeed indicator, and vertical speed indicator. ',
        url: 'https://www.youtube.com/watch?v=sLkz8tRnLug&list=PL7WHlDlLp4LVwREvR6QoNWwWSb2CPedcZ&index=6'
      },
      {
        id: 'c4-002',
        name: 'Part 61 and Part 141',
        desc: 'This module shows you the difference between Part 61 and Part 141',
        url: 'https://www.youtube.com/watch?v=GxOCnqlwB7g&list=PLG_hxiQ49vKUzB7r0dPhcHNBkWSAbMdr-&index=6'
      },
      {
        id: 'c4-003',
        name: 'Preflight a Cessna 172',
        desc: 'This module gives you an understanding of how to Preflight a Cessna 172 - In Depth Tutorial - G1000',
        url: 'https://www.youtube.com/watch?v=4cwKZ0Q_Xug&list=PLG_hxiQ49vKUzB7r0dPhcHNBkWSAbMdr-&index=21'
      }
    ],
  assignments: [
    {
      id: 'd1',
      name: 'Assignment-1',
      desc: 'Draw the Aircraft Structure and briefly describe the parts',
      due: '02/10/2022',
      points: '30',
      submitted: true,
      subDate: '02/10/2022',
      grade: '28.5'
    },
    {
      id: 'd2',
      name: 'Assignment-2',
      desc: 'Write a Paragraph each on Stalls and Airspeed',
      due: '18/12/2022',
      points: '15',
      submitted: false,
      grade: 'NA'
    },
    {
      id: 'd3',
      name: 'Assignment-3',
      desc: 'Review emergency procedures and checklists and write a report on your understanding along with some of your own additions',
      due: '15/10/2022',
      points: '25',
      submitted: true,
      subDate: '10/110/2022',
      grade: '25'
    },
  ]
  },
  {
    img: '/courses/c5.jpeg',
    title: 'Private Pilot + Instrument Rating Ground School Bundle',
    price: '- $1559',
    desc: 'This bundle provides you with your ground school for a Private Pilot license and an Instrument Rating.',
    id: '63914991c50046f26c4a3b1e',
    cols: 2,
    modules: [
      {
        id: 'c5-001',
        name: 'Flight Instruments',
        desc: 'This next lesson will focus on Flight Instruments.  Being that the powerplant is the heart and soul of an aircraft, the flight instruments are the eyes and ears. This section will go into great depth on how the pitot-static system operates, and which instruments are connected.  They are the altimeter, airspeed indicator, and vertical speed indicator. ',
        url: 'https://www.youtube.com/watch?v=sLkz8tRnLug&list=PL7WHlDlLp4LVwREvR6QoNWwWSb2CPedcZ&index=6'
      },
      {
        id: 'c5-002',
        name: 'Part 61 and Part 141',
        desc: 'This module shows you the difference between Part 61 and Part 141',
        url: 'https://www.youtube.com/watch?v=GxOCnqlwB7g&list=PLG_hxiQ49vKUzB7r0dPhcHNBkWSAbMdr-&index=6'
      },
      {
        id: 'c5-003',
        name: 'Preflight a Cessna 172',
        desc: 'This module gives you an understanding of how to Preflight a Cessna 172 - In Depth Tutorial - G1000',
        url: 'https://www.youtube.com/watch?v=4cwKZ0Q_Xug&list=PLG_hxiQ49vKUzB7r0dPhcHNBkWSAbMdr-&index=21'
      }
    ],
  assignments: [
    {
      id: 'e1',
      name: 'Assignment-1',
      desc: 'Draw the Aircraft Structure and briefly describe the parts',
      due: '02/10/2022',
      points: '30',
      submitted: true,
      subDate: '02/10/2022',
      grade: '28.5'
    },
    {
      id: 'e2',
      name: 'Assignment-2',
      desc: 'Write a Paragraph each on Stalls and Airspeed',
      due: '18/12/2022',
      points: '15',
      submitted: false,
      grade: 'NA'
    },
    {
      id: 'e3',
      name: 'Assignment-3',
      desc: 'Review emergency procedures and checklists and write a report on your understanding along with some of your own additions',
      due: '15/10/2022',
      points: '25',
      submitted: true,
      subDate: '10/110/2022',
      grade: '25'
    },
  ]
  }
];

export default courseData;
function viewModel() {
    this.firstName = "Quark";
    this.lastName = "Wei";
    this.fullName = this.firstName + " " + this.lastName;

    this.phone = "";
    this.email = "quark.j.wei@gmail.com";
    this.github = "github.com/quarkw";
    this.website = "quarkw.github.io/resume"

    this.sections = [{
            header: ["Employment"],
            subsections: [
                {
                    header: [
                        "Seattle, WA",
                        "Amazon AWS EC2",
                        "Summer 2017"
                    ],
                    bullets: [
                        "Created a data-visualization dashboard to track capacity of servers in EC2, that processes hundreds of GB of new data per day", [
                            "Created a service to constantly process data dumps in S3 located across multiple AWS regions",
                            "Used by managers to gain useful business insights into EC2 status, which previously required digging through slow and scattered web pages"
                        ]
                    ]
                },
                {
                    header: [
                        "Richmond, VA",
                        "Capital One",
                        "Fall 2016 - Present"
                    ],
                    bullets: [
                        "Created a full-stack web application for managing authorization roles, utilizing Angular2, MongoDB, and Node", [
                            "~Worked on a dual-track agile team with two-week-long sprints",
                            "~Created Angular2 components for visualization of data",
                            "Designed MongoDB schema for the app and created a RESTful API to restrict access to the database"
                        ]
                    ]
                },
                {
                    header: [
                        "Richmond, VA",
                        "VCU Labs & Classrooms Computing ",
                        "Fall 2014 - Spring 2017"
                    ],
                    bullets: [
                        "Created Idle Actions chrome extension for computer lab security",
                        "Worked on an electron app, utilizing Knockout.js, to ease the naming and setup of new computer lab machines", [
                            "Uses active directory for authentication",
                            "Uses Chocolatey to install packages, tying in with the Proget API to pull a list of internally hosted applications"
                        ]
                    ]
                },
                // {
                //     header: [
                //         "Midlothian, VA",
                //         "PIE Tech",
                //         "Summer 2016"
                //     ],
                //     bullets: [
                //         "Created several single page web-apps using the Aurelia framework"
                //     ]
                // },
                {
                    header: [
                        "Richmond, VA",
                        "UPS Freight",
                        "Summer 2015"
                    ],
                    bullets: [
                        "Created an internal-use full stack web application with the Spring framework, Oracle SQL, Bootstrap, and jQuery to aid in data correction/security–currently used in production."
                    ]
                }
            ]
        },
        {
            header: ["Education"],
            subsections: [{
                    header: [
                        "Richmond, VA",
                        "Virginia Commonwealth University",
                        "Fall 2014 - May 2018"
                    ],
                    bullets: [
                        "Senior studying Computer Science with in-major GPA of 4.0",
                        "Vice President of Computer Science Student Advisory Board", [
                            "~Help the department choose new faculty members",
                            "~Help out with events, such as local hack day, for prospective and current computer science students"
                        ],
                        // "Favorite Courses Taken:"
                    ],
                    // list: ["Theory of Computation", "Operating Systems", "Interactive Virtual Worlds"],
                    // list: ["Differential Equations", "Multivariable Calculus", "Linear Algebra", "Theory of Computation", "Operating Systems", "Software Engineering", "Algorithms w/ Advanced Data Structures", "Interactive Virtual Worlds", "Databases", "Programming Languages"]
                },
                {
                    header: [
                        "Alexandria, VA",
                        "Thomas Jefferson HS for Science and Technology",
                        "2009 - 2013"
                    ],
                    bullets: [
                        "4.14 GPA",
                        "Ranked the best public high school in the nation by US news from 2007-2013"
                    ]
                }
            ]
        },
        // {
        //     header: ["Skills"],
        //     subsections: [{
        //         list: ["Java", "Javascript", "ES6", "Node.JS", "CSS", "HTML5", "MongoDB", "TypeScript", "Angular2", "Aurelia", "C#", "Knockout.JS", "JavaFX", "Spring",
        //             "Python", "Django", "Docker", "Unity", "Android", "Oracle SQL"
        //         ]
        //     }]
        // },
        {
            header: ["Prominent Projects"],
            subsections: [
                {
                    decorators: {
                        icon: "github",
                        url: "https://github.com/asakaplan/Bitcamp2017"
                    },
                    header: [
                        "FinProp",
                        "Spring 2017"
                    ],
                    bullets: [
                        "Won <a href='https://devpost.com/software/financial-ethics-propagator'>2nd place</a> for Finra challenge at Bitcamp 2017",
                        "Uses machine learning to discover circles of corruption among financial adviors based on publicly available data"
                    ]
                },
                // {
                //     decorators: {
                //         icon: "github",
                //         url: "https://github.com/quarkw/resume"
                //     },
                //     header: [
                //         "Resume",
                //         ""
                //     ],
                //     bullets: [
                //         "Built using Knockout.JS", [
                //             "~Printer friendly!",
                //             // "Fills in info from JSON",
                //             // "Github pages friendly (simple html/js/css)"
                //         ]
                //     ]
                // },
                {
                    header: ["Personal Life Hacks"],
                    bullets: [
                        "Created script to watch full-classes and auto-register when a space opens up",
                        "Created a browser extension to integrate ratemyprofessor into class scheduling system",
                            ["Ability to filter sections to only those taught by professors above a certain rating"],
                        "Create program for IoT device as a daily habit reminder",
                        "Created a Twilio app for my apartment callbox so I can access my apartment building if I don't have my key fob and phone"
                    ]
                },
                {
                    noPrint: true,
                    decorators: {
                        icon: "github",
                        url: "https://github.com/johnheng/Myo"
                    },
                    header: [
                        "Myo Theremin",
                        "September 2014"
                    ],
                    bullets: [
                        "MIDI synthesizer using the Myo motion control band", [
                            "Won 2nd place overall, and won award for most innovative project"
                        ]
                    ]
                },
                {
                    decorators: {
                        icon: "github",
                        url: "https://github.com/quarkw/operating-system-simulator"
                    },
                    header: [
                        "Operating System Simulator",
                        "Fall 2016"
                    ],
                    bullets: [
                        "Operating System Simulator built in Java", [
                            "Implements a multi-level priority queue",
                            "Simulates virtual memory/swapping",
                            "Implementation of 'cat' for JavaFX based CLI",
                            "Features adjustable simulation speed"
                        ],
                        "~Received a 105% in the class when the average and median were both less than 73%"
                    ]
                },
            ]
        },
        {
            noPrint: true,
            header: ["Leadership"],
            subsections: [{
                    header: [
                        "RamHacks Organizer",
                        "Spring 2016 - Present"
                    ],
                    bullets: [
                        "Contact sponsors, organize transportation, advertising, communication during the event, swag, and prizes",
                        "Went around during the event, helping out teams with technical issues"
                    ]
                },
                {
                    header: [
                        "Vice President of RamDev",
                        "Fall 2016 - Present"
                    ],
                    bullets: [
                        "Organize weekly tech-talks by companies and students, and hackthon trips",
                        "Have given several tech-talks to students on several subjects", [
                            "Intro to web development: HTML, CSS, Bootstrap, and Emmet",
                            "How to consume a RESTful API, (used the dark sky API for weather)"
                        ]
                    ]
                },
                {
                    header: [
                        "President of ACM Club",
                        "Summer 2015 - Present"
                    ],
                    bullets: [
                        "Organize weekly meetings to prepare for the ACM International Collegiate Programming Contest"
                    ]
                },
                // {
                //     header: [
                //         "President of Lion Dance Club",
                //         "Fall 2015 - Fall 2016"
                //     ],
                //     bullets: [
                //         "Organized the 2016 Inter-Collegiate Lion Dance competition, hosting over 40 lion dancers from Virginia to Massachusetts",
                //         "Organized bi-weekly practices, performances, and the annual vcu-hosted lion dance expo", [
                //             "Performed for companies such as Google, Capital One, and Suntrust",
                //             "Performed for the 2015 Richmond Heart Ball, which raised $1 million to help fund programs to prevent and research cardiovascular disease"
                //         ]
                //     ]
                // }
            ]
        }
    ]
};
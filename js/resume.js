function viewModel() {
    this.firstName = "John";
    this.lastName = "Naylor";
    this.fullName = this.firstName + " " + this.lastName;

    this.phone = "";
    this.email = "jonaylor89@gmail.com";
    this.github = "github.com/jonaylor89";
    this.website = "jonaylor89.github.io/resume"

    this.sections = [{
            header: ["Employment"],
            subsections: [
                {
                    header: [
                        "Richmond, VA",
                        "Research Assistant",
                        "Fall 2018"
                    ],
                    bullets: [
                        "", [
                            "",
                            ""
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
                        "", [
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
                        "",
                        "", [
                            "",
                            ""
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
                        "Winchester, VA",
                        "Hollister",
                        "Fall 2015 - Fall 2016"
                    ],
                    bullets: [
                        ""
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
                        "Fall 2017 - May 2020"
                    ],
                    bullets: [
                        "Senior studying Computer Science with in-major GPA of 3.76",
                        "Member of Computer Science Student Advisory Board", [
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
                        "Frederick County, VA",
                        "Mountain Vista Governor's School for Math, Science, and Technology",
                        "Fall 2013 - Spring 2017"
                    ],
                    bullets: [
                        "3.90 GPA",
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
                        "Hyperloop Software Lead",
                        "Fall 2017 - Fall 2018"
                    ],
                    bullets: [
                        "Design and implement software for the Hyperloop team at VCU competing in SpaceX's annual competition",
                        "Handpicked by SpaceX as one of the top 20 teams internationally"
                    ]
                },
                {
                    header: [
                        "President of RamDev",
                        "Summer 2018 - Present"
                    ],
                    bullets: [
                        "Organize weekly tech-talks by companies and students, and hackthon trips",
                        "Have given several tech-talks to students on several subjects", [
                            "Intro to Cython programming",
                            "System overview for Hyperloop at VCU"
                        ]
                    ]
                },
                {
                    header: [
                        "Vice President of ACM Club",
                        "Summer 2018 - Present"
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

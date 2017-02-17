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
                        "Amazon",
                        "Summer 2017"
                    ],
                    bullets: [
                        "Accepted into Amazon's 3-month Software Engineering program", [
                            "If offered to work full-time in Fall 2018, must accept by end of summer (2017)"
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
                        "Working with teams within Capital One to port an application from .NET to technologies such as Angular2, MongoDB, and Node", [
                            "Working in a dual-track agile team with two-week-long sprints",
                            "Created several RESTful API's using the restify framework",
                            "Created Angular2 components for visualization of data",
                            "Creatd MongoDB schema as a backing store for the app"
                        ]
                    ]
                },
                {
                    header: [
                        "Richmond, VA",
                        "Virginia Commonwealth University",
                        "Fall 2014 - Present"
                    ],
                    bullets: [
                        "Created Idle Actions chrome extension for computer lab security (available on github)",
                        "Working on an electron app, utilizing Knockout.js, to ease the naming and setup of new computer lab machines", [
                            "Uses active directory for authentication",
                            "uses Chocolatey to install packages, tying in with the proget API to pull a list of internally hosted applications"
                        ]
                    ]
                },
                {
                    header: [
                        "Midlothian, VA",
                        "PIE Tech",
                        "Summer 2016"
                    ],
                    bullets: [
                        "Created several single page web-apps using the Aurelia framework"
                    ]
                },
                {
                    header: [
                        "Richmond, VA",
                        "UPS Freight",
                        "Summer 2015"
                    ],
                    bullets: [
                        "Created a full-stack internal web application, using the Spring framework, Oracle SQL, Bootstrap, and jQuery to aid in data correction/security",
                        ["Currently used in production"]
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
                        "Junior studying Computer Science",
                        "In-major GPA of 4.0",
                        "Member of Computer Science Student Advisory Board", [
                            "Help the department choose new faculty members",
                            "Help out with events, such as local hack day, for prospective and current computer science students",
                            "Run department wide slack to provide announcements and hub for students to talk"
                        ],
                        "Upper Level Courses Taken:"
                    ],
                    list: ["Differential Equations", "Multivariable Calculus", "Linear Algebra", "Theory of Computation", "Operating Systems", "Software Engineering", "Algorithms w/ Advanced Data Structures", "Interactive Virtual Worlds", "Databases", "Programming Languages"]
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
        {
            header: ["Skills"],
            subsections: [{
                list: ["Java", "Javascript", "ES6", "Node.JS", "CSS", "HTML5", "MongoDB", "TypeScript", "Angular2", "Aurelia", "C#", "Knockout.JS", "JavaFX", "Spring",
                    "Python", "Django", "Docker", "Unity", "Android", "Oracle SQL"
                ]
            }]
        },
        {
            header: ["Personal Projects"],
            subsections: [{
                    github: "https://github.com/quarkw/resume",
                    header: [
                        "Resume",
                        ""
                    ],
                    bullets: [
                        "Built using Knockout.JS", ["Printer friendly!",
                            "Fills in info from JSON",
                            "Github pages friendly (simple html/js/css)"
                        ]
                    ]
                },
                {
                    github: "https://github.com/quarkw/operating-system-simulator",
                    header: [
                        "Operating System Simulator",
                        "Fall 2016"
                    ],
                    bullets: [
                        "Operating System Simulator built in Java", ["Implements a multi-level priority queue",
                            "Simulates virtual memory/swapping",
                            "Implementation of 'cat' for JavaFX based CLI",
                            "Features adjustable simulation speed"
                        ],
                        "Received a 105% in the class when the average and median were both less than 73%"
                    ]
                },
                {
                    github: "https://github.com/johnheng/Myo",
                    header: [
                        "Myo Theremin",
                        "September 2014"
                    ],
                    bullets: [
                        "MIDI synthesizer using the Myo motion control band (available on github)", [
                            "Won 2nd place overall, and won award for most innovative project"
                        ]
                    ]
                }
            ]
        },
        {
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
                {
                    header: [
                        "President of Lion Dance Club",
                        "Fall 2015 - Fall 2016"
                    ],
                    bullets: [
                        "Organized the 2016 Inter-Collegiate Lion Dance competition, hosting over 40 lion dancers from Virginia to Massachusetts",
                        "Organized bi-weekly practices, performances, and the annual vcu-hosted lion dance expo", [
                            "Performed for companies such as Google, Capital One, and Suntrust",
                            "Performed for the 2015 Richmond Heart Ball, which raised $1 Million to help fund programs to prevent and research cardiovascular disease"
                        ]
                    ]
                }
            ]
        }
    ]
};
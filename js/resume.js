function viewModel() {
    this.firstName = "John";
    this.lastName = "Naylor";
    this.fullName = this.firstName + " O. " + this.lastName;

    this.phone = "";
    this.email = "john@jonaylor.xyz";
    this.github = "github.com/jonaylor89";
    this.website = "jonaylor.xyz"

    this.sections = [{ header: ["Skills"],
            subsections: [{
                list: ["Java", "Javascript", "NodeJS", "CSS", "HTML5", "SQL", "Bash", ".NET",
                    "Python", "Go", "Docker", "Android", "C/C++", "Rust", "Embedded Systems"
                ]
            }]
        },
        {
            header: ["Prominent Projects"],
            subsections: [{
                    decorators: {
                        icon: "github",
                        url: "https://github.com/jonaylor89/ZeroPWNd"
                    },
                    header: [
                        "ZeroPWNd",
                        "Fall 2018"
                    ],
                    bullets: [
                        "Won <a href='https://devpost.com/software/zeropwnd'>1st place</a> for Willow Tree's challenge at RamHacks 2018",
                        "Uses open source API and public data to check if a URL is a phishing link"
                    ]
                },
                {
                    noPrint: false,
                    decorators: {
                        icon: "github",
                        url: "https://github.com/hudginspj/myo-mesh-tracking"
                    },
                    header: [
                        "Myo Secure Tracking",
                        "Spring 2018"
                    ],
                    bullets: [
                        "Won <a href='https://devpost.com/software/myo-secure-tracking'>best networking app</a> at HackVT 2018",
                        "Uses bluetooth communication and the Myo armband technology for securely monitoring visitors"
                    ]
                },
                {
                    decorators: {
                        icon: "github",
                        url: "https://github.com/jonaylor89/MonkeyInterpreter"
                    },
                    header: [
                        "MonkeyLang Interpreter",
                        "Winter 2017"
                    ],
                    bullets: [
                        "Programming Language Interpreter written in Golang", [
                            "Implements a bytecode compiler and virtual machine",
                            "Includes first class functions and clojures",
                            "Unit tests written using Golang's testing library",
                        ],
                    ]
                },
                {
                    decorators: {
                        icon: "github"
                    },
                    header: [
                        "Ditto",
                        "Spring 2019"
                    ],
                    bullets: [
                        "Submission to Moog's annual hackathon at Georgia Tech", [
                            "Latin American drum inspired instrument with the ability to record and playback drum beats",
                            "Used Arduino Mega and Moog Werkstatt to record, store, and playback sounds",
                        ]
                    ]
                },
                {
                    header: [
                        "Collegiate Cyber Defense Competition",
                        "Spring 2019"
                    ],
                    bullets: [
                        "Placed 2nd at the Mid-Atlantic's Collegiate Cyber Defense Competition", [
                            "Cyber defense competition used as a simulation for actual cyber defense in a business setting",
                            "Concentrated on the security of my team's linux machines"
                        ]
                    ]
                },
                {
                    header: ["Scripts"],
                    bullets: [
                        "Unix machine setup script to automate package download and dotfile configuration",
                        "Workflow application to monitor my workflow natively on my machine",
                        "Facial recognization system using OpenCV to workspace monitoring",
                        "FAQ scrapper that parses FAQ pages on websites and loads then into Amazon Alexa"
                    ]
                },
            ]
        },
        {
            noPrint: false,
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
                        "Organize weekly tech-talks by companies and students",
                        "Invite corporate developers to speak and bring internships for students",
                        "Organize Hackathon trips",
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
                {
                    header: [
                        "Vice President of Student Advisory Board",
                        "Fall 2018 - Present"
                    ],
                    bullets: [
                        "Bridge the gap between the students and the faculty in the CS department"
                    ]
                },
            ],
        },
        {
            header: ["Employment"],
          subsections: [{
                    "header": [
                      "Richmond, VA",
                      "Capital One",
                      "Summer 2019 - Present"
                    ],
                    "bullets": [
                      "Software Development Intern",
                      "Developed in an agile development team",
                      "Full stack development in angular, express, python flask, and java spring boot"
                    ],
            }, 
            {
                    header: [
                        "Richmond, VA",
                        "Afton Chemical",
                        "Winter 2018 - Summer 2019"
                    ],
                    bullets: [
                        "Software Development Intern",
                        "Worked on C# and Angular projects for data scientists and chemical engineers",
                    ],
                },
                {
                    header: [
                        "Richmond, VA",
                        "VCU Labs & Classrooms Computing",
                        "Summer 2018 - Present"
                    ],
                    bullets: [
                        "Technician for campus computers",
                        "Developed python projects and bash scripts for VCU's support technicians", [
                            "Embedded system and web server for the campus laptop kiosks",
                            "Desktop application to generate reports for classroom scheduling "
                        ]
                    ]
                },
                {
                    header: [
                        "Richmond, VA",
                        "Research Assistant",
                        "Fall 2018 - Spring 2019"
                    ],
                    bullets: [
                        "Maintain Intellij plugin StackInTheFlow", [
                            "Brings stack-overflow into the Intellij IDEA",
                            "Uses machine learning to assist in auto generating queries"
                        ],
                        "Mining Software Repository (MSR) Challenge", [
                            "~Discover trends in a dataset from stack-overflow",
                        ]
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
                    ],
                },
                {
                    header: [
                        "Middletown, VA",
                        "Mountain Vista Governor's School for Math, Science, and Technology",
                        "Fall 2013 - Spring 2017"
                    ],
                    bullets: [
                        "3.90 GPA",
                    ]
                }
            ]
        },
    ]
};

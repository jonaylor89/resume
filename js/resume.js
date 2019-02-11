function viewModel() {
    this.firstName = "John";
    this.lastName = "Naylor";
    this.fullName = this.firstName + " O. " + this.lastName;

    this.phone = "";
    this.email = "jonaylor89@gmail.com";
    this.github = "github.com/jonaylor89";
    this.website = "jonaylor89.github.io/resume"

    this.sections = [
		{
            header: ["Employment"],
            subsections: [
                {
					header:[
						"Richmond, VA",
						"Afton Chemical",
						"Winter 2018 - Present"
					],
					bullets: [
						"Software Development Intern",
						"",
					],
				},
                    header: [
                        "Richmond, VA",
                        "VCU Labs & Classrooms Computing",
                        "Summer 2018 - Present"
                    ],
                    bullets: [
                        "Technician for campus computers",
                        "Developed software for VCU's support technicians", [
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
                            "~Published a research paper as a result of the findings"
                        ]
                    ]
                },
            ]
        },
        {
            header: ["Education"],
            subsections: [
				{
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
        {
             header: ["Skills"],
             subsections: [{
                 list: ["Java", "Javascript", "NodeJS", "CSS", "HTML5", "MongoDB", "SQL", "ReactJS", ".NET",
                     "Python", "Django", "Docker", "Unity", "Android", "Standard SQL", "C/C++", "Rust", "Embedded Systems"
                 ]
             }]
        },
        {
            header: ["Prominent Projects"],
            subsections: [
                {
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
					deorators: {
						icon: "github"
					},
					header: [
						"\"Ditto\" playback Cajon",
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
                        "Organize Hackathon trips",
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
				{
					header: [
							"Student Advisory Board",
							"Fall 2018 - Present"
						],
					bullets: [
						"Bridge the gap between the students and the faculty in the CS department"
					]
				},
            ]
        }
    ]
};

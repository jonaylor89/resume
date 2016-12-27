function viewModel(){
    this.firstName = "Quark";
    this.lastName = "Wei";
    this.fullName = this.firstName + " " + this.lastName;

    this.phone = "***REMOVED***";
    this.email = "quark.j.wei@gmail.com";
    this.github = "github.com/quarkw";
    this.website = "bit.ly/q-resume"

    this.sections = [
        {
            header: ["Employment"],
            subsections: [
                {
                    header: [
                        "Richmond, VA",
                        "Capital One",
                        "Fall 2016 - Present"
                    ],
                    bullets: [
                        "Working with teams within Capital One to port an application from .NET to technologies such as Angular2, MongoDB, and Node"
                        , [
                            "Working in a dual-track agile team with two-week-long sprints",
                            "Created several RESTful API's using the restify framework",
                            "Created Angular2 components for visualization of data"
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
                        "Working on an electron app, with knockout.js, to ease the naming and setup of new computer lab machines"
                        ,[
                            "Uses active directory for authentication",
                            "uses Chocolatey to install packages, tying in with proget to pull a list of internal applications"
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
                        "Created a full-stack internal web application, using the spring framework, sql, bootstrap, and jquery to aid in data correction/security"
                        ,["Currently used in production"]
                    ]
                }
            ]
        },
        {
            header: ["Education"],
            subsections: [
                {
                    header: [
                        "Richmond, VA",
                        "Virginia Commonwealth University",
                        "Fall 2014 - May 2018"
                    ],
                    bullets: [
                        "Junior studying Computer Science",
                        "3.96 GPA",
                        ["In-major GPA of 4.0"],
                        "Member of Computer Science Student Advisory Board",
                        [
                            "Help the department choose new faculty members",
                            "Help out with events, such as local hack day, for prospective and current computer science students",
                            "Run department wide slack to provide announcements and hub for students to talk"
                        ],
                        "Upper Level Courses Taken:"
                    ],
                    list: ["Differential Equations", "Multivariable Calculus", "Linear Algebra", "Theory of Computation", "Operating Systems", "Software Engineering", "Algorithms w/ Advanced Data Structures", "Interactive Virtual Worlds"]
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
            subsections: [
                {
                    list: ["CSS","HTML5","Javascript","ES6","Angular","Aurelia","Java","Spring",
                    "Node.JS","Python","Django","Docker","C#","Unity","Android","Knockout.JS",
                    "Oracle SQL"]
                }
            ]
        },
        {
            header: ["Personal Projects"],
            subsections: [
                {
                    github: true,
                    header: [
                        "Ram Hacks",
                        "September 2014"
                    ],
                    bullets: [
                        "MIDI synthesizer using the Myo motion control band (available on github)",
                        [
                            "Won 2nd place overall, and won award for most innovative project"
                        ]
                    ]
                },
                {
                    github: true,
                    header: [
                        "Operating System Simulator",
                        "Fall 2016"
                    ],
                    bullets: [
                        "Operating System Simulator built in Java",
                        "Received a 105% in the class when the average and median were both less than 73%"
                    ]
                }
            ]
        },
        {
            header: ["Leadership"],
            subsections: [
                {
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
                        "Have given several tech-talks to students on several subjects",
                        [
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
                        "Organized bi-weekly practices, performances, and the annual vcu-hosted lion dance expo",
                        [
                            "Performed for companies such as Google, Capital One, and Suntrust",
                            "Performed for the 2015 Richmond Heart Ball, which raised $1 Million to help fund programs to prevent and research cardiovascular disease"
                        ]
                    ]
                }
            ]
        }

    ]
};

function classesFromArray(index, array, split, github){
    let length = array.length;
    let output = "";
    if(!split){
        output += "col-xs-";
        output += 12/length;
    }
    else{
        output += "col-xs-" + split[index];
    }

    if(length == 2){
        if(index==1){
            output += " text-xs-right";
        }
    }
    if(length == 3){
        switch(index){
            case 0:
                output += " header-aside";
                break;
            case 1:
                output += " wide-middle"
                output += " text-xs-center";
                break;
            case 2:
                output += " header-aside";
                output += " italic";
                output += " text-xs-right";
                break;
        }
    }
    if(github && index==0) output += " octocat-sm";
    return output;
}
function widthClassFromArray(array){
    let length = array.length;
    let output = "";
    output += "col-xs-";
    output += 12/length;
    console.log(12/length);
    return output;
}
function textAlignFromArray(index, array){
    let length = array.length;
    let output = "";
    if(length == 2){
        if(index==1){
            output += "text-xs-right";
        }
    }
    if(length == 3){
        if(index==1){
            output += "text-xs-center";
        }
        if(index==2){
            output += "text-xs-right";
        }
    }
    return output;
}
function createList(array, sort = false){
    array = array.filter((data)=>data!="")
    if(array.length==0)
        return;
    if(sort) array.sort();
    let delimiter = "&emsp;&diams;&emsp;";
    let output = array[0];
    for(let i = 1; i < array.length; i++)
        output += delimiter + array[i];
    return output;
}
function getIcon(icon = "", size = ""){
        if(icon){
            if(size != ""){
                return '<i class="fa fa-' + icon + '" aria-hidden="true" style="font-size:' + size + '"></i>';
            }
            return '<i class="fa fa-' + icon + '" aria-hidden="true"></i>';
            }
        return "";
}

ko.applyBindings(new viewModel());
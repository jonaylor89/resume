function viewModel(){
    this.firstName = "Quark";
    this.lastName = "Wei";
    this.fullName = this.firstName + " " + this.lastName;

    this.phone = "***REMOVED***";
    this.email = "quark.j.wei@gmail.com";
    this.github = "github.com/quarkw";

    this.sections = [
        {
            header: ["Employment","Two"],
            subsections: [
                {
                    header: [
                        "Richmond, VA",
                        "Capital One",
                        "Fall 2016 - Present"
                    ],
                    bullets: [
                        "This is the first bullet"
                    ]
                },
                {
                    header: [
                        "Richmond, VA",
                        "Virginia Commonwealth University",
                        "Fall 2014 - Present"
                    ],
                    bullets: [
                        ""
                    ]
                },
                {
                    header: [
                        "Midlothian, VA",
                        "PIE Tech",
                        "Summer 2016"
                    ],
                    bullets: [
                        ""
                    ]
                },
                {
                    header: [
                        "Richmond, VA",
                        "UPS Freight",
                        "Summer 2015"
                    ],
                    bullets: [
                        ""
                    ]
                }
            ]
        },
        {
            header: [""],
            subsections: [
                {
                    header: [
                        "",
                        "",
                        ""
                    ],
                    bullets: [
                        ""
                    ]
                }
            ]
        },

    ]
};

function classesFromArray(index, array){
    let length = array.length;
    let output = "";
    output += "col-xs-";
    output += 12/length;
    console.log(12/length);
    if(length == 2){
        if(index==1){
            output += " text-md-right";
        }
    }
    if(length == 3){
        if(index==1){
            output += " text-md-center";
        }
        if(index==2){
            output += " text-md-right";
        }
    }
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
            output += "text-md-right";
        }
    }
    if(length == 3){
        if(index==1){
            output += "text-md-center";
        }
        if(index==2){
            output += "text-md-right";
        }
    }
    return output;
}

ko.applyBindings(new viewModel());
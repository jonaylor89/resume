# Resume
I got sick of fixing the formatting on my resume every time I needed to edit a section.

You can see the result [here](http://quarkw.github.io/resume/).

This resume is based on this [wonderful advice from LifeClever](http://www.lifeclever.com/give-your-resume-a-face-lift/).

# Usage
* Fork/clone this, and replace the info in resume.js with your own!

##Header info
The first few lines of the view model is self-explanatory. I don't recommend putting your phone number in there, if you'll be putting this online.

##Sections
The sections property requires a little more explanation

The sections is an object with a `header` property, and an array of subsections:
```js
{
  header: ["Employment"],
  subsections: []
}
```
##Subsections
Subsections are objects with a `header` property, and any combination of the following properties:
* bullets
* list
* github

Some notes:
* A subsection header takes an array of length 1-3.
* Bullets is an array of strings, with the option of having sub-bullets, but these only go one level deep
* List takes an array of strings. My js magic should format it so there are no delimiters at the end or beginning of a line
* If you want a github icon, as well as have the header link to your github repo, add the url to the github property
```js
{
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
}
```


# Features
* Works with github pages
* Print support (paged media support in modern web browsers doesn't seem to be modern enough)
  * The experimental (disabled by default) PDFreactor support works, but the free personal licensed version puts a watermark on the topright of every page, and I don't feel like shelling out $2950

# Todo
* Separate info into separate .js file.
* Refactor x10

# Contributing

* Feel free to submit any pull requests for features, but there is no guarantee I will merge them (this is *my* resume after all)
* Pull requests for bug fixes are more likely to be merged

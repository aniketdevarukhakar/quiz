const quiz = [
    {
        "subject": "HTML",
        "subjectIcon": "fa-solid fa-code",
        "questions": [
            {
                "question": "What does HTML stand for?",
                "options": ["Hyper Text Markup Language", "Home Tool Markup Language", "Hyperlinks Text Mark Language", "Hyper Text Markdown Language"],
                "answer": "Hyper Text Markup Language"
            },
            {
                "question": "Which tag is used to create a hyperlink in HTML?",
                "options": ["<link>", "<a>", "<href>", "<url>"],
                "answer": "<a>"
            },
            {
                "question": "Which attribute specifies an alternate text for an image?",
                "options": ["alt", "title", "src", "href"],
                "answer": "alt"
            },
            {
                "question": "What is the correct HTML tag for inserting a line break?",
                "options": ["<break>", "<lb>", "<br>", "<line>"],
                "answer": "<br>"
            },
            {
                "question": "Which element is used for the largest heading in HTML?",
                "options": ["<h6>", "<h1>", "<header>", "<head>"],
                "answer": "<h1>"
            }
        ]
    },
    {
        "subject": "CSS",
        "subjectIcon": "fa-solid fa-brush",
        "questions": [
            {
                "question": "What does CSS stand for?",
                "options": ["Cascading Style Sheets", "Creative Style System", "Colorful Style Sheets", "Computer Style Sheets"],
                "answer": "Cascading Style Sheets"
            },
            {
                "question": "Which property is used to change the text color of an element?",
                "options": ["font-color", "text-color", "color", "text-style"],
                "answer": "color"
            },
            {
                "question": "Which CSS property controls the spacing between lines of text?",
                "options": ["line-height", "spacing", "text-spacing", "line-width"],
                "answer": "line-height"
            },
            {
                "question": "How do you apply a background color in CSS?",
                "options": ["color: red;", "background: red;", "background-color: red;", "bg-color: red;"],
                "answer": "background-color: red;"
            },
            {
                "question": "Which is the correct syntax for referring to an ID in CSS?",
                "options": ["#id", ".id", "id:", "@id"],
                "answer": "#id"
            }
        ]
    },
    {
        "subject": "JavaScript",
        "subjectIcon": "fa-brands fa-square-js",
        "questions": [
            {
                "question": "What is the correct syntax to output 'Hello World' in JavaScript?",
                "options": ["echo 'Hello World';", "console.log('Hello World');", "print('Hello World');", "alertBox('Hello World');"],
                "answer": "console.log('Hello World');"
            },
            {
                "question": "Which keyword is used to declare a variable in JavaScript?",
                "options": ["var", "let", "const", "All of the above"],
                "answer": "All of the above"
            },
            {
                "question": "What is the correct way to create a function in JavaScript?",
                "options": ["function = myFunction()", "function myFunction()", "function:myFunction()", "create.myFunction()"],
                "answer": "function myFunction()"
            },
            {
                "question": "Which operator is used to assign a value to a variable?",
                "options": ["=", "==", "===", "!="],
                "answer": "="
            },
            {
                "question": "How can you add a comment in JavaScript?",
                "options": ["<!-- This is a comment -->", "// This is a comment", "/* This is a comment */", "Both // and /* */"],
                "answer": "Both // and /* */"
            }
        ]
    },
    {
        "subject": "Accessibility",
        "subjectIcon": "fa-solid fa-universal-access",
        "questions": [
            {
                "question": "What does WCAG stand for?",
                "options": ["Web Content Accessibility Guidelines", "Web Creative Accessibility Guidelines", "Wide Content Accessibility Goals", "World Content Accessibility Guide"],
                "answer": "Web Content Accessibility Guidelines"
            },
            {
                "question": "What is the minimum contrast ratio for normal text under WCAG AA?",
                "options": ["4.5:1", "3:1", "2.5:1", "5:1"],
                "answer": "4.5:1"
            },
            {
                "question": "Which ARIA attribute is used to define a role for an element?",
                "options": ["aria-role", "role", "aria-label", "aria-describedby"],
                "answer": "role"
            },
            {
                "question": "What does the alt attribute do?",
                "options": ["Defines alternate text for an image", "Defines a tooltip for an element", "Defines accessibility roles", "Defines a description for a link"],
                "answer": "Defines alternate text for an image"
            },
            {
                "question": "Which HTML element is best for screen readers to navigate a page?",
                "options": ["<div>", "<span>", "<section>", "<header>"],
                "answer": "<header>"
            }
        ]
    }
]

let subjectDiv = document.getElementById("subject");
let homeScreen = document.querySelectorAll(".front-screen");
let questionScreen = document.querySelectorAll(".question-screen");
let optionsDiv = document.querySelector(".answer .question-screen1");
let questionDiv = document.querySelector(".question");

let topBar = document.querySelector(".top-bar .que-sub");

let subjectList = '';
quiz.forEach((data, idx) => {

    subjectList += `<button class="que-sub animateRight" data-index="${idx}" >
                            <div class="lang-logo"><i class="${data.subjectIcon}"></i></div>
${data.subject}</button>`;
});
subjectDiv.innerHTML = subjectList;

// Add event listener for get each questions
const subjectBtn = document.querySelectorAll(".que-sub");

subjectBtn.forEach((button) => {
    button.addEventListener("click", (e) => {

        topBar.style.opacity = "1";
        topBar.style.visibility = "visible";

        homeScreen.forEach((screen) => {
            screen.style.display = "none";
        })

        questionScreen.forEach((questions, idx) => {
            // console.log(questions);
            questions.style.display = "flex";
        })
        // homeScreen.style.display = "none";F
        // console.log(e.target);
        const subjectIdx = e.target.closest('button').getAttribute("data-index");

        quizList = quiz[subjectIdx].questions;

        let questionList = "";

        quizList.forEach((question) => {
            // console.log(i++)
            questionList = question.options;
            questionDiv.innerText = question.question;
        })

        // console.log(questionList);

        let sortedOptions = "";
        questionList.forEach((option, optionIdx) => {
            // console.log(option)


            const escapedOption = option.replace(/</g, "&lt;").replace(/>/g, "&gt;");

            sortedOptions += `<div class="ans-option animateRight">
                                <input type="radio" id="ans-${optionIdx}" class="radioBtn" name="answer">
                                <label for="ans-${optionIdx}">
                                    <div class="option">${String.fromCharCode(65 + optionIdx)}</div>
                                    <p>"${escapedOption}"</p>
                                </label>
                            </div>`;
        });

        optionsDiv.innerHTML = sortedOptions;
        // console.log(questionList);

    })
})
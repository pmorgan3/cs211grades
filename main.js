var countReview = 0;
var reviewArray = [];
var countLabs = 0;
var labArray = [];
var countProjects = 0;
var projectArray = [];
var exam1Count = 0;

function addCodeReview() {
    var addReview = document.createElement("INPUT");
    addReview.classList.add("ReviewInputs");
    addReview.setAttribute("type", "number");
    addReview.setAttribute("value", "grade");
    document.getElementById("codeReview").appendChild(addReview);
    countReview++;
}

function addLabs() {
    var addLab = document.createElement("INPUT");
    addLab.classList.add("LabInputs");
    addLab.setAttribute("type", "number");
    addLab.setAttribute("value", "grade");
    document.getElementById("lab").appendChild(addLab);
    countLabs++;
}

function addProjects() {
    var addProject = document.createElement("INPUT");
    addProject.classList.add("ProjectInputs");
    addProject.setAttribute("type", "number");
    addProject.setAttribute("value", "grade");
    document.getElementById("Projects").appendChild(addProject);
    countProjects++;
}

function addExamScore() {
    exam1Count++;
    if(exam1Count > 1) {
        alert("Lol you only have one exam score buddy");
    } else {
        var addExam = document.createElement("INPUT");
        addExam.classList.add("ExamInputs");
        addExam.setAttribute("type", "number");
        addExam.setAttribute("value", "grade");
        document.getElementById("exam1").appendChild(addExam);
    }
}

function calcRawScore(labs) {
    let sum = 0;
    for(let i = 0, len = labs.length; i < len; i++) {
        sum += labs[i];
    }
    return sum;
}


function calculateAll() {
    var labElem = document.getElementsByClassName("LabInputs");
    for(var i = 0; i < labElem.length; i++){
        if(typeof labElem[i].value !== "undefined") {
            labArray.push(labElem[i].valueAsNumber);
        }
    }
    var projectElem = document.getElementsByClassName("ProjectInputs");
    for(var i = 0; i < projectElem.length; i++){
        if(typeof projectElem[i].value !== "undefined"
         /* && typeof projectElem[i].value === "number" */) {
            projectArray.push(projectElem[i].valueAsNumber);
        }
    }
    var examElem = document.getElementsByClassName("ExamInputs");
    
    var reviewElem = document.getElementsByClassName("ReviewInputs");
    for(var i = 0; i < reviewElem.length; i++){
        if(typeof reviewElem[i].value !== "undefined"
        /*  && typeof reviewElem[i].value === "number" */) {
            reviewArray.push(reviewElem[i].valueAsNumber);
        }
    }
    var rawSumLabs = calcRawScore(labArray);
    var rawSumReviews = calcRawScore(reviewArray);
    var rawSumProjects = calcRawScore(projectArray);
    var rawSumExam = examElem[0].valueAsNumber;

    calcFinalGrade(rawSumLabs, rawSumReviews, rawSumProjects, rawSumExam);

}

function calcFinalGrade(labs, reviews, projects, exam) {
    var grade = 100 - (((.075 * (reviews / (countReview * 40) * 100)
    + .375 * (labs / (countLabs * 100) * 100)
    + .35 * (projects / (countProjects * 100) * 100)
    + .08 * ((exam/100)*100))) /
     (countLabs * 100 + countProjects * 100 
        + countReview * 40 + 100)) * 100;
    var gradeText = document.createElement("h3");
    var t = document.createTextNode(`${grade.toFixed(2)}`);
    gradeText.appendChild(t);
    document.getElementById("Grade").appendChild(gradeText);
    
}
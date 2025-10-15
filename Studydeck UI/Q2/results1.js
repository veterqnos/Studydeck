const qt = document.getElementById("qt"); //qt = question true

const resultsPar = document.getElementById("resultsPar");
const resultsLabel = document.getElementById("resultsLabel");
let points = localStorage.getItem('points');
if(points == null)
{
    localStorage.setItem('points',0);
}


console.log(points);


if(document.URL.includes("Q2/results1.html") || document.URL.includes("flashycard.html"))
{
    resultsLabel.textContent = points;
    localStorage.setItem('points',0);
}
else
{
    qt.onclick = function()
    {
        points = localStorage.getItem('points');
        points = Number.points;
        points++;
        localStorage.setItem('points',points);
    }
}


//DEVELOPER'S NOTE:
//All of these html files are used to store indiviually every single question and answer of the quiz 
//There is almost definitely a better way to organize all this mess, but I did what I could with my extremely short web development experience.

//Anyways, the way the question files work is that between the four questions, there is one (the correct answer) which has a specific id that
//gets recognized by the javascript code, which I'll show in a moment, in order to track the correct answers of the user.

//And this is the html file that handles the results of the quiz, .

//This is the javascript code, it is used to store the total points gained by the user.
//It initially had a lot of... questionable optimization practices, to say the least. But I think it's a bit better now.





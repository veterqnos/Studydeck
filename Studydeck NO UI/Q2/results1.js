const qt = document.getElementById("qt"); //qt = question true

const resultsPar = document.getElementById("resultsPar");
const resultsLabel = document.getElementById("resultsLabel");
let points = localStorage.getItem('points');
if(points == null)
{
    points = 0;
}



if(document.URL.includes("Q2/results1.html"))
{
    resultsLabel.textContent = points;
    points = localStorage.getItem('points');
    points = 0;
    points = localStorage.setItem('points',points);
}
else
{
    qt.onclick = function()
    {
        points = localStorage.getItem('points');
        points++;
        points = localStorage.setItem('points',points);
    }
}
if(document.URL.includes("flashycard.html"))
{
    points = localStorage.getItem('points');
    points = 0;
    points = localStorage.setItem('points',points);
}





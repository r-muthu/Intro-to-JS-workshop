const colourList = ["red", "orange", "yellow", "green", "blue", "indigo", "violet", "magenta"]


function randomColour(colourList){
    let randomIndex = Math.floor((Math.random())*(colourList.length));
    let chosen_colour = colourList[randomIndex];
    return chosen_colour;
}
function changeColour(){
    let newColour = randomColour(colourList);
    document.getElementById("body").style.backgroundColor = newColour;
}

document.getElementById("count").innerHTML = 0
function colourCheck(){
    let colour_to_be_checked = document.getElementById("colourCheck").value;
    let colour_of_page = document.getElementById("body").style.backgroundColor;
    let counter = document.getElementById("count").innerHTML
    if (colour_to_be_checked == colour_of_page){
        counter = Number(counter) + 1; // 1 more colour guessed correctly, change colour of page
        changeColour();
        document.getElementById("count").innerHTML = counter;
    }
}
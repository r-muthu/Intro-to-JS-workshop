document.getElementById("counter").innerHTML = 0; //initialise

//if counter changes, this is executed to see if the colour should change
function colourOfNumber(){
    let counter = Number(document.getElementById("counter").innerHTML);
    if (counter == 0){
        document.getElementById("counter").style.color = "black"
    } else if (counter < 0){
        document.getElementById("counter").style.color = "red"
    } else {
        document.getElementById("counter").style.color = "green"
    }
}

//When button 1 --the add count button-- is clicked, function 'add_count' is executed
function add_count(){
    let number = Number(document.getElementById("counter").innerHTML);
    number = number + 1
    document.getElementById("counter").innerHTML = number
    colourOfNumber()
}

//When button 2 --the remove count button-- is clicked, function 'remove_count()' is executed
function remove_count(){
    let number = Number(document.getElementById("counter").innerHTML);
    number = number - 1
    document.getElementById("counter").innerHTML = number
    colourOfNumber()
}
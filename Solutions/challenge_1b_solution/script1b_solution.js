function calculate_interest(){
    let principal_amt = document.getElementById("principal").value;
    
    let rate = document.getElementById("rate").value;

    let n = document.getElementById("time").value;

    /*In case t is not an integer, we find its remainder using the mod operator and minus 
    it off the floating point number -- months must be rounded down to nearest integer*/

    function round_down(number, dp){    //a function to round down a given number to 'dp' decimal places.
        let remainder = number % (10**(dp*-1))
        number -= remainder
        return number
    }

    n = round_down(n, 0)

    let amount = principal_amt*(1 + rate*0.01)**n;
    amount = round_down(amount, 2)
    document.getElementById("amount").innerHTML = "The total value of savings after the interest is compounded is $" + amount
}

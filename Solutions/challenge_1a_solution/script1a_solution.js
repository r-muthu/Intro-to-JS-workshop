let principal_amt = 1000;

let rate = 7;

let n = 5; //number of years (interest is calculated in terms of years)

/*In case t is not an integer, we find its remainder using the mod operator and minus 
it off the floating point number -- months must be rounded down to nearest integer*/

let n_dec_rem = n % 1;
n -= n_dec_rem;

let amount = null;
amount = principal_amt*(1 + rate*0.01*n);

document.getElementById("amount").innerHTML = "The total amount after " + num_of_years + " years is $" + amount + " when the interest is at " + rate + " %."
//return it to html webpage
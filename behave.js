function dis(val)
{
document.getElementById("edu").innerHTML+=val;
}
//function for evaluation
function solve()
{
let x = document.getElementById("edu").innerHTML;
let y = eval(x);
document.getElementById("edu").innerHTML = y;
}
//function for clearing the display
function clr()
{
document.getElementById("edu").innerHTML = "";
}
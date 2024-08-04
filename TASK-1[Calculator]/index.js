let equation=""
document.getElementById("0").addEventListener("click",()=>{
    equation+='0';
})
document.getElementById("1").addEventListener("click",()=>{
    equation+='1';
});
document.getElementById("2").addEventListener("click",()=>{
    equation+='2';
});
document.getElementById("3").addEventListener("click",()=>{
    equation+='3';
});
document.getElementById("4").addEventListener("click",()=>{
    equation+='4';
});
document.getElementById("5").addEventListener("click",()=>{
    equation+='5';
});
document.getElementById("6").addEventListener("click",()=>{
    equation+='6';
});
document.getElementById("7").addEventListener("click",()=>{
    equation+='7';
});
document.getElementById("8").addEventListener("click",()=>{
    equation+='8';
});
document.getElementById("9").addEventListener("click",()=>{
    equation+='9';
});
document.getElementById("add").addEventListener("click",()=>{
    equation+='+';
});
document.getElementById("sub").addEventListener("click",()=>{
    equation+='-';
});
document.getElementById("multiply").addEventListener("click",()=>{
    equation+='*';
});
document.getElementById("divide").addEventListener("click",()=>{
    equation+='/';
});
document.getElementById("point").addEventListener("click",()=>{
    equation+='.';
});
document.getElementById("equal_to").addEventListener("click",()=>{
    let result=eval(equation);
    if (typeof result === 'number' && !Number.isInteger(result)) {
        result = result.toFixed(4); // Format to four decimal places if it's a float
    }
    equation=(result).toString();

});
document.getElementById("clear_button").addEventListener("click",()=>{
    equation='';
    display_changer(equation);
})
document.querySelector(".buttons_container").addEventListener("click",()=>{
    display_changer(equation);
})
function display_changer( equation){
    document.getElementById("screen").innerHTML=equation;
}
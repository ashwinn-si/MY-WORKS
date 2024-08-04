let key=0;
let your_currency='USD';
let exchange_currency='IND';
let curr_value="";
document.getElementById("your_currency").addEventListener('click', () => {
    document.querySelector(".exchange_container").classList.toggle("show");
    key=1;
});

document.getElementById("exchange_currency").addEventListener('click',()=>{
    document.querySelector(".exchange_container").classList.toggle("show");
    key=2;
})

function display_changer(currency_name,key){
    if(key==1){
        document.getElementById("your_currency").innerHTML=currency_name;
        your_currency=currency_name;
        converter(your_currency,exchange_currency);
    }else{
        document.getElementById("exchange_currency").innerHTML=currency_name;
        exchange_currency=currency_name;
        converter(your_currency,exchange_currency);
    }
    
}
document.getElementById("ind").addEventListener('click',()=>{
    display_changer("IND",key);
    document.querySelector(".exchange_container").classList.toggle("show");
});
document.getElementById("usd").addEventListener('click',()=>{
    display_changer("USD",key);
    document.querySelector(".exchange_container").classList.toggle("show");
});
document.getElementById("euro").addEventListener('click',()=>{
    display_changer("EURO",key);
    document.querySelector(".exchange_container").classList.toggle("show");
});
document.getElementById("pound").addEventListener('click',()=>{
    display_changer("POUND",key);
    document.querySelector(".exchange_container").classList.toggle("show");
});
document.getElementById("riyal").addEventListener('click',()=>{
    display_changer("RIYAL",key);
    document.querySelector(".exchange_container").classList.toggle("show");
});

function converter(your_currency,exchange_currency){
    let value=parseFloat(document.getElementById("your_currency_value").innerText);
    let res=0.0;
    if(your_currency=='IND'){
        if(exchange_currency=='USD'){
            res=value*0.012;
        }else if(exchange_currency=='EURO'){
            res=value*0.011;
        }else if(exchange_currency=='POUND'){
            res=value*0.0093;
        }else if(exchange_currency=='RIYAL'){
            res=value*0.045;
        }else{
            res=value;
        }
    }else if(your_currency=='USD'){
        if(exchange_currency=='IND'){
            res=value*83.78;
        }else if(exchange_currency=='EURO'){
            res=value*0.92;
        }else if(exchange_currency=='POUND'){
            res=value*0.78;
        }else if(exchange_currency=='RIYAL'){
            res=value*3.75;
        }else{
            res=value;
        }
    }else if(your_currency=='EURO'){
        if(exchange_currency=='USD'){
            res=value*1.09;
        }else if(exchange_currency=='IND'){
            res=value*91.49;
        }else if(exchange_currency=='POUND'){
            res=value*0.85;
        }else if(exchange_currency=='RIYAL'){
            res=value*4.10;
        }else{
            res=value;
        }
    }else if(your_currency=='POUND'){
        if(exchange_currency=='USD'){
            res=value*1.28;
        }else if(exchange_currency=='IND'){
            res=value*107.32;
        }else if(exchange_currency=='EURO'){
            res=value*1.17;
        }else if(exchange_currency=='RIYAL'){
            res=value*4.81;
        }else{
            res=value;
        }
    }else if(your_currency=='RIYAL'){
        if(exchange_currency=='USD'){
            res=value*0.27;
        }else if(exchange_currency=='EURO'){
            res=value*0.24;
        }else if(exchange_currency=='POUND'){
            res=value*0.21;
        }else if(exchange_currency=='IND'){
            res=value*22.32;
        }else{
            res=value;
        }
    }
    if (typeof res=== 'number' && !Number.isInteger(res)) {
        res= res.toFixed(4); // Format to four decimal places if it's a float
    }
    document.getElementById("exchange_currency_value").innerHTML=res;
}

//event listener

document.getElementById("0").addEventListener("click",()=>{
    curr_value+='0';
})
document.getElementById("1").addEventListener("click",()=>{
    curr_value+='1';
});
document.getElementById("2").addEventListener("click",()=>{
    curr_value+='2';
});
document.getElementById("3").addEventListener("click",()=>{
    curr_value+='3';
});
document.getElementById("4").addEventListener("click",()=>{
    curr_value+='4';
});
document.getElementById("5").addEventListener("click",()=>{
    curr_value+='5';
});
document.getElementById("6").addEventListener("click",()=>{
    curr_value+='6';
});
document.getElementById("7").addEventListener("click",()=>{
    curr_value+='7';
});
document.getElementById("8").addEventListener("click",()=>{
    curr_value+='8';
});
document.getElementById("9").addEventListener("click",()=>{
    curr_value+='9';
});
document.getElementById("point").addEventListener("click",()=>{
    curr_value+='.';
});
document.getElementById("equal_to").addEventListener("click",()=>{
    converter(your_currency,exchange_currency);
});

function display_changer_displayer( equation){
    document.getElementById("your_currency_value").innerHTML=curr_value;
}
document.querySelector(".numbers_container").addEventListener('click',()=>{
    display_changer_displayer(curr_value);
});

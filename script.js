if(window.innerWidth<768){
    document.querySelector(".alert_message").style.display="block";
    document.querySelector(".sub_container").style.display="none";
}

document.getElementById("T1").addEventListener("click",()=>{
    window.location.href="TASK-1[Calculator]/index.html";
})
document.getElementById("T2").addEventListener("click",()=>{
    window.location.href="TASK-2[Currency-Converter]/index.html";
})
document.getElementById("T3").addEventListener("click",()=>{
    window.location.href="TASK-3[Login-Page]/index.html";
})
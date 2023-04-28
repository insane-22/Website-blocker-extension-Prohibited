document.addEventListener("DOMContentLoaded", () =>{
    const swi = document.getElementsByClassName("switch");
    const btn = document.getElementById("btn");


    btn.addEventListener("click", () =>{
        chrome.storage.local.set({isOnboardingDone : true}, ()=>{
            window.close();
        })
    })
})
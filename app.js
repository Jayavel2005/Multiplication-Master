const startBtn = document.querySelector('.js-start-button')
startBtn.addEventListener("click",()=>{
    document.querySelector(".js-start-screen").classList.add("hidden");
    document.querySelector(".js-game-screen").classList.remove("hidden");
    document.querySelector(".js-game-screen").classList.remove("hidden");
})
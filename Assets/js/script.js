let BurgerJs = document.querySelector("#BurgerJs"),
sidebarJs = document.querySelector("#sidebarJs");


    BurgerJs.addEventListener("click", ()=>{
        BurgerJs.classList.toggle("burger_active");
        sidebarJs.classList.toggle("sidebar--hidden");
    });

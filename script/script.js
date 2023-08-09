let menu = document.getElementById("menu_nave");

let img = document.getElementById("img")
let btn = document.getElementById("btn").addEventListener("click", () => {

    if(menu.classList.contains("hidden")){
        menu.classList.remove("hidden")
        menu.classList.add("on")

        img.setAttribute("src", "icon-close.svg")

        img.classList.add("efeito")
        setTimeout(() => {
            img.classList.remove("efeito")
        }, 300);

    }else{
        menu.classList.add("hidden")
        menu.classList.remove("on")
        img.setAttribute("src", "icon-hamburger.svg")

        img.classList.add("efeito")
        setTimeout(() => {
            img.classList.remove("efeito")
        }, 300);
    }
})

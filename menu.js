document.querySelector(".menu").addEventListener("click", menu)
menu = document.querySelector(".menu-lateral")

function menu() {
    if (menu.style.display == "none") {
        menu.style.display = "block"
        
    } else {
        menu.style.display = "none"
    }
    
}


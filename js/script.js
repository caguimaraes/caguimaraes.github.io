function openMenu() {
    let menu = document.getElementById("topNav");
    if (menu.className === "myNav") {
        menu.className += "responsive";
    } else {
        menu.className = "myNav";
    }
}
document.getElementById("dropDownBtn").addEventListener("click", () => {
    let menu = document.getElementById("dropDownMenu");

    console.log(menu.style.display)

    if (menu.style.display === "none") {
        menu.style.display = "block";
    }
    else if (menu.style.display === "block") {
        menu.style.display = "none";
    }
})


let darkmode_background_black = document.querySelectorAll(".darkmode-background-black");
let darkmode_background_181C1F = document.getElementsByClassName("darkmode-background-181C1F");
let darkmode_svg_img_text = document.querySelectorAll(".darkmode-svg-img-text");
let darkmode_logo_reddit = document.querySelector(".span-logo-text");
let darkmode_search_background_333D42 = document.getElementById("darkmode-background-#333D42");
let darkmode_search_text = document.getElementById("darkmode_search_text");
let darkmode_hr = document.getElementsByTagName("hr");
let darkmode_bottom_nav = document.getElementsByTagName("nav")[0];
let darkmode_hover_color = document.getElementsByClassName("darkmode-hover-color");
let darkmode_hover_insert = document.getElementsByClassName("darkmode-hover-insert");

let checkbox = document.querySelector("#check");
let checkboxReal = JSON.parse(localStorage.getItem("checkboxReal"));

checkbox.checked = checkboxReal;

switchMode(checkbox.checked);

checkbox.addEventListener("click", () => {
    switchMode(checkbox.checked);
    localStorage.setItem("checkboxReal", JSON.stringify(checkbox.checked))
})

function switchMode(tf) {
    if (tf) {
        document.querySelector("body").style.backgroundColor = "#0F1A1C";
        darkmode_logo_reddit.style.color = "white";
        darkmode_search_background_333D42.style.backgroundColor = "#333D42";
        darkmode_search_text.style.backgroundColor = "#333D42";
        darkmode_search_text.style.color = "white";
        darkmode_bottom_nav.style.borderBottomColor = "#333D42";

        for (i = 0; i < darkmode_background_black.length; i++) {
            darkmode_background_black[i].style.backgroundColor = "black";
        }

        for (i = 0; i < darkmode_background_181C1F.length; i++) {
            darkmode_background_181C1F[i].style.backgroundColor = "#181C1F";
        }

        for (i = 0; i < darkmode_svg_img_text.length; i++) {
            darkmode_svg_img_text[i].style.color = "white";
        }

        for (i = 0; i < darkmode_hr.length; i++) {
            darkmode_hr[i].style.backgroundColor = "rgba(255, 255, 255, 0.1)";
        }

        for (i = 0; i < darkmode_hover_color.length; i++) {
            darkmode_hover_color[i].style.backgroundColor = "black";
        }
        
        for (i = 0; i < darkmode_hover_insert.length; i++) {
            darkmode_hover_insert[i].classList = "darkmode-hover"
        }

    } else {
        document.querySelector("body").style.backgroundColor = "white";
        darkmode_logo_reddit.style.color = "#FF4500";
        darkmode_search_background_333D42.style.backgroundColor = "#DBE4E9";
        darkmode_search_text.style.backgroundColor = "#DBE4E9";
        darkmode_search_text.style.color = "black";
        darkmode_bottom_nav.style.borderBottomColor = "#DBE4E9";

        for (i = 0; i < darkmode_background_black.length; i++) {
            darkmode_background_black[i].style.backgroundColor = "white";
        }

        for (i = 0; i < darkmode_background_181C1F.length; i++) {
            darkmode_background_181C1F[i].style.backgroundColor = "white";
        }

        for (i = 0; i < darkmode_svg_img_text.length; i++) {
            darkmode_svg_img_text[i].style.color = "black";
        }

        for (i = 0; i < darkmode_hr.length; i++) {
            darkmode_hr[i].style.backgroundColor = "";
        }

        for (i = 0; i < darkmode_hover_color.length; i++) {
            darkmode_hover_color[i].style.backgroundColor = "black";
        }

        for (i = 0; i < darkmode_hover_insert.length; i++) {
            darkmode_hover_insert[i].classList = "darkmode-hover";
        }
    }
}
let inputEl = document.getElementById("add_comment");
let btnEl = document.getElementsByClassName("btn");
let ulEl = document.getElementById("listItem")

let items = []

function render() {
    const items = JSON.parse(localStorage.getItem("Items")) || [];
    if(items.length > 0){
    for(let i = 0; i < items.length; i++){
        const text = items[i];
        let li = document.createElement("li");
        li.textContent = text;
        ulEl.appendChild(li);
    }
}
}

function onClick() {
    const text = inputEl.value;
    let li = document.createElement("li");
    li.textContent = text;
    items.push(text);
    localStorage.setItem("Items", JSON.stringify(items));
    inputEl.value = "";
    render()
}

render()

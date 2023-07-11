import data from "./data.js";
const mobileVersion = document.querySelector(".img-div-mobile");
const desktopVersion = document.querySelector(".img-div-desktop");


//GENERATE MOBILE IMAGES
mobileVersion.innerHTML = data.map(function (items) {
    return `
    <fieldset>
        <img src = ${items.mobile_img} class="img reveal_img"/>
        <legend class="legend reveal">${items.legend}</legend>
    </fieldset>`
}).join("")

//ADD CUSTOM CLASSES
const gridLegend = document.querySelectorAll(".legend")[3];
gridLegend.classList.add("grid-legend")

//GENERATE DESKTOP IMAGES
desktopVersion.innerHTML = data.map((desktop_items) => {
    return `
    <fieldset>
        <img src = ${desktop_items.desktop_img} class="img"/>
        <legend class="legend">${desktop_items.legend}</legend>
    </fieldset>`
}).join(" ")

//ADD CUSTOM CLASSES
const gridLegendDesktop = document.querySelectorAll(".legend")[11];
gridLegendDesktop.classList.add("grid-legend-desktop");



export * from "./create.js"
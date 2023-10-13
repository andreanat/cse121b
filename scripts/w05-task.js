/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.getElementById("templesElement");
const templeList = [];

/* async displayTemples Function */
const displayTemples = (temples) => {
    reset();
    temples.forEach((temple) => {
        let articleElement = document.createElement("article");

        let h3Element = document.createElement("h3");
        h3Element.textContent = temple.templeName;

        let imgElement = document.createElement("img");
        imgElement.src = temple.imageUrl;
        imgElement.alt = temple.location;

        articleElement.appendChild(h3Element);
        articleElement.appendChild(imgElement);
        templesElement.appendChild(articleElement);
    });
};

/* async getTemples Function using fetch()*/
const getTemples = async () => {
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
    const data = await response.json();
    data.forEach((temple) => {
        templeList.push(temple);
    });
    displayTemples(templeList);
    console.log(templeList);
};

/* reset Function */
const reset = () => {
    while (templesElement.firstChild) {
        templesElement.removeChild(templesElement.firstChild);
    }
};

/* Event Listener */
document.querySelector("#sortBy").addEventListener("change", () => {
    const filter = document.getElementById("sortBy").value;

    switch (filter) {
        case "utah":
            const utahTemples = templeList.filter((temp) => temp.location.includes("Utah"));
            displayTemples(utahTemples);
            break;

        case "nonutah":
            const nonUtahTemples = templeList.filter((temp) => !temp.location.includes("Utah"));
            displayTemples(nonUtahTemples);
            break;

        case "older":
            const olderTemples = templeList.filter((temp) => new Date(temp.dedicated) < new Date(1950, 0, 1));
            displayTemples(olderTemples);
            break;

        case "all":
        default:
            displayTemples(templeList);
            break;
    }
});

getTemples();

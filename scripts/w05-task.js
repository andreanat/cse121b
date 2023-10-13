/* Declare and initialize global variables */
const templesElement = document.getElementById("templesElement");
const templeList = [];

/* Async displayTemples Function */
// This function is typically used to create and display temple elements.
// You should call it later after fetching temple data and defining your HTML structure.

/* Async getTemples Function using fetch() */
const getTemples = async () => {
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
    const data = await response.json();
    templeList.push(...data); // Use spread operator to add the elements from 'data' to 'templeList'
    // You may want to call displayTemples here if that's your intention.
    console.log(templeList);
}

/* reset Function */
let reset = function () {
    // Your reset logic here to clear the output
};

/* sortBy Function */
const sortBy = function (temples) {
    // Sorting or filtering logic for 'temples' can be added here
};

// Call the reset function initially to clear the output
reset();

// Add an event listener to handle changes in the "sortBy" element
document.querySelector("#sortBy").addEventListener("change", () => {
    const filter = document.getElementById("sortBy").value;
    // You should handle sorting/filtering based on the selected filter here
    // and call displayTemples or update the UI accordingly.
});

// You can call the getTemples function to fetch data and populate the templeList.
getTemples();

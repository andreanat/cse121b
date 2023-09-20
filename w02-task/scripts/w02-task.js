/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullname = 'Andrea Munoz';
const currentDate = new Date();
const currentYear = currentDate.getFullYear();
const profilePicture = 'images/andrea-headshot.jpg';

/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');
const yearElement = document.querySelector('#year');
const imageElement = document.getElementById('profileImage');
const foodElement = document.getElementById('food');

/* Step 4 - Adding Content */
nameElement.innerHTML = '<strong>${fullname}</strong>';
yearElement.textContent = currentYear;
imageElement.setAttribute = ('src', profilePicture);
imageElement.setAttribute('alt', `Profile image of ${fullname}`);

/* Step 5 - Array */
const favoriteFoods = ["Pizza", "Pasta", "Tacos", "Ice Cream"];
const foodElement = document.getElementById('food');
foodElement.textContent = favoriteFoods.join(', ');

const newFavoriteFood = "Tacos";
favoriteFoods.push(newFavoriteFood);
foodElement.innerHTML += '<br>' + newFavoriteFood;
favoriteFoods.shift();
foodElement.innerHTML += '<br>' + favoriteFoods.join('<br>');
favoriteFoods.pop();
foodElement.innerHTML += '<br>' + favoriteFoods.join('<br>');







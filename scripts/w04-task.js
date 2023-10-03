/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name : "Andrea Munoz",
    photo : "images/andrea-headshot.jpg" ,
    favoriteFoods : ['Pizza',
                     'Pasta',
                     'Tacos',
                     'Ice Cream'] ,
    hobbies : ['Taking runs',
               'Draw',
               'Write',
               'Read'] ,
    placesLived : []
};
/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push({
        place:'Albuquerque, NM' ,
        length: '3 years'
    });
myProfile.placesLived.push({
        place:'Washington, DC' ,
        length: '1 year'
    });
myProfile.placesLived.push({
        place:'Nuevo Casas Grandes, Chih., Mx' ,
        length: '17 years'
    });
/* DOM Manipulation - Output */
/* Name */
document.querySelector('#name').textContent = myProfile.name
/* Photo with attributes */
document.querySelector('#photo').src = myProfile.photo;
document.querySelector('#photo').alt = myProfile.name;
/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food =>{
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);
});
/* Hobbies List */
myProfile.hobbies.forEach(hobby =>{
    let li = document.createElement('li');
    li.textContent = hobby;
    document.querySelector('#hobbies').appendChild(li);
});
/* Places Lived DataList */
myProfile.placesLived.forEach(placeLived =>{
    let dl = document.createElement('dl');
    let dt = document.createElement('dt');
    dt.textContent = placeLived.place;
    let dd = document.createElement('dd');
    dd.textContent = placeLived.length;
    dl.appendChild(dt);
    dl.appendChild(dd);
    document.querySelector('#places-lived').appendChild(dl);
});
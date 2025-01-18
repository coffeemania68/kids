// localStorage.js
export function saveGameProgress(playerCount){
 localStorage.setItem('playerCount', JSON.stringify(playerCount));
}
export function loadGameProgress(){
 return JSON.parse(localStorage.getItem('playerCount')) || 0;
}

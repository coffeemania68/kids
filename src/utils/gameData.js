// gameData.js

import gameData from '../../public/data.js';

export function initGame() {
    if(!localStorage.getItem('playerCount')){
       savePlayerCount(20144)
    }
    console.log("load Data", gameData);
    // 초기 데이터 로드 로직 (선택 사항)
}

function savePlayerCount(count){
   localStorage.setItem('playerCount', JSON.stringify(count))
}


export function getGameData(){
 return gameData;
}

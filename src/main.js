import './components/Button.js'
import './components/Card.js'
import { initGame, getGameData } from './utils/gameData.js'
import { loadGameProgress, saveGameProgress } from './utils/localStorage.js';

// 💡 임시로 카카오 관련 코드 주석처리
// const kakaoApiKey = '110d468a677132abc8ddfe71b00c3939';

//  init Game Data
initGame();
const gameData = getGameData();
const root = document.getElementById('root');
const emojis = ['🦊','🍦','🌷','🌟','🐶', '🌈', '🍉', '🍄', '🚀', '🎈'];

function isMobile() {
    return window.innerWidth <= 768;
}

function renderMainScreen() {
    // 💡 카카오 초기화 코드 임시 주석처리
    // if (window.Kakao) {
    //     Kakao.init(kakaoApiKey);
    // }

    const mainScreenHTML = `
        <div class="max-w-4xl mx-auto relative">
            <h1 class="text-3xl font-bold mb-6 text-center">12종 게임 시리즈</h1>
            <div class="relative">
                <div class="absolute w-full h-full pointer-events-none">
                    ${emojis.map((emoji,i) => `
                        <span style="animation-delay: ${Math.random()}s; top: ${Math.random() * 100}%; left: ${Math.random() * 100}%; font-size: ${isMobile() ? (Math.random() * 1.2 + 0.8) + 'rem' : (Math.random() * 2 + 3) + 'rem'};" class="absolute animate-floatEmoji">${emoji}</span>
                    `).join("")}
                </div>
                <div class="grid grid-cols-3 gap-4 mb-8">
                    ${gameData.games.map(game => `
                        <div class="p-4 flex justify-center items-center">
                            <button data-gameid="${game.id}" class="w-24 h-24 md:w-32 md:h-32 bg-cover bg-center rounded-full shadow-md hover:shadow-lg transform hover:scale-105 transition-transform duration-300" style="background-image: url('${game.thumbnail}');">
                            </button>
                        </div>
                    `).join('')}
                </div>
            </div>
            <footer class="text-center mt-6 text-gray-500 text-sm">
                <p>지금까지 <span id="playerCount">0</span>명이 참여했어요!</p>
                <p class="mb-2">주의사항: 저장된 데이터는 브라우저를 닫거나 삭제하면 초기화됩니다.</p>
                <p>제작/광고문의: <a href="mailto:petsmoa2000@gmail.com">petsmoa2000@gmail.com</a></p>
                <p class="mt-1">© Test Lab. All Rights Reserved.</p>
            </footer>
        </div>
    `;
    root.innerHTML = mainScreenHTML;

    const gameButtons = document.querySelectorAll('[data-gameid]');
    gameButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const gameId = e.currentTarget.dataset.gameid;
            loadGameScreen(gameId);
        })
    })

    const playerCountElement = document.getElementById('playerCount');
    let playerCount = loadGameProgress();
    playerCount = Number(playerCount)
    playerCountElement.textContent = playerCount || 0;
}

function loadGameScreen(gameId) {
    console.log(gameId);
    const selectedGame = gameData.games.find(game => game.id === gameId);
    const gameScreenHTML = `
        <div class="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-pink-100">
            <div class="bg-white p-8 rounded-lg shadow-xl max-w-md mx-auto relative">
                <!-- 💡 변경: 모바일/PC 이모지 크기 분기 -->
                <div class="absolute w-full h-full pointer-events-none">
                    ${emojis.map((emoji,i) => `
                        <span style="animation-delay: ${Math.random()}s; top: ${Math.random() * 100}%; left: ${Math.random() * 100}%; font-size: ${isMobile() ? (Math.random() * 1.2 + 0.8) + 'rem' : (Math.random() * 2 + 3) + 'rem'};" class="absolute animate-floatEmoji">${emoji}</span>
                    `).join("")}
                </div>
                <h2 class="text-2xl font-bold mb-4">${selectedGame.title}</h2>
                <p class="mb-4">${selectedGame.description || '게임 설명이 없습니다.'}</p>
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" data-sceneid="${selectedGame.scenes[0].id}">게임 시작</button>
            </div>
        </div>
    `;
    root.innerHTML = gameScreenHTML;

    const gameStartButton = document.querySelector('[data-sceneid]');
    gameStartButton.addEventListener('click', (e) => {
        loadScene(e.currentTarget, gameId);
    });
}

function loadScene(el, gameId) {
    const sceneId = el.dataset.sceneid;
    const selectedGame = gameData.games.find(game => game.id === gameId);
    const selectedScene = selectedGame.scenes.find(scene => scene.id === sceneId);

    const sceneHTML = `
        <div class="min-h-screen bg-gradient-to-br from-blue-100 to-pink-100 p-6 flex items-center justify-center">
            <div class="max-w-2xl mx-auto bg-white/80 backdrop-blur p-6 rounded-lg relative">
                <!-- 💡 변경: 모바일/PC 이모지 크기 분기 -->
                <div class="absolute w-full h-full pointer-events-none">
                    ${emojis.map((emoji,i) => `
                        <span style="animation-delay: ${Math.random()}s; top: ${Math.random() * 100}%; left: ${Math.random() * 100}%; font-size: ${isMobile() ? (Math.random() * 1.2 + 0.8) + 'rem' : (Math.random() * 2 + 3) + 'rem'};" class="absolute animate-floatEmoji">${emoji}</span>
                    `).join("")}
                </div>
                <h2 class="text-2xl font-bold text-center mb-6">${selectedGame.title}</h2>
                <p class="text-lg mb-6">${selectedScene.text}</p>
                <div class="space-y-4">
                    ${selectedScene.options.map(option => `
                        <button
                            onClick="loadScene(this,'${gameId}')"
                            data-sceneid="${option.nextSceneId}"
                            class="w-full py-4 text-lg bg-gradient-to-r from-green-500 to-yellow-500 hover:from-green-600 hover:to-yellow-600 group"
                        >
                            <span class="group-hover:scale-110 transition-transform inline-block">
                                ${option.text}
                            </span>
                        </button>
                    `).join('')}
                </div>
            </div>
        </div>
    `;
    root.innerHTML = sceneHTML;
}

// 💡 변경: 창 크기 변경 시 이모지 재렌더링
window.addEventListener('resize', () => {
    const rootContent = root.innerHTML;
    root.innerHTML = rootContent;
});

function loadGameProgress() {
    return localStorage.getItem('playerCount') || 0;
}

function saveGameProgress(count) {
    localStorage.setItem('playerCount', count);
}

// 초기 화면 렌더링
renderMainScreen();

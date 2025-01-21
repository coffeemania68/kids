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
 <div class="max-w-6xl mx-auto relative px-4">
            <h1 class="text-2xl font-bold mb-6 text-center">어린이 게임 시리즈</h1>
            <p class="text-lg text-center mb-8">재미있는 게임으로 배워보아요! ✨</p>
            
            <div class="fixed inset-x-0 top-0 h-32 pointer-events-none overflow-hidden">
                ${emojis.slice(0, 5).map((emoji,i) => `
                    <span style="animation-delay: ${i * 0.5}s;" class="absolute animate-floatTop">${emoji}</span>
                `).join("")}
            </div>
            
            <div class="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 mb-12">
                ${gameData.games.map(game => `
                    <div class="flex flex-col items-center">
                        <div class="relative w-full aspect-square">
                            <button data-gameid="${game.id}" 
                                class="w-full h-full rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                                style="background-image: url('${game.thumbnail}'); background-size: cover; background-position: center;">
                            </button>
                            <div class="absolute bottom-0 left-0 right-0 bg-white/80 backdrop-blur-sm p-2 rounded-b-2xl">
                                <p class="text-sm md:text-base font-medium text-center truncate">${game.title}</p>
                            </div>
                        </div>
                    </div>
                `).join('')}
            </div>

            <div class="fixed inset-x-0 bottom-0 h-32 pointer-events-none overflow-hidden">
                ${emojis.slice(5).map((emoji,i) => `
                    <span style="animation-delay: ${i * 0.5}s;" class="absolute animate-floatBottom">${emoji}</span>
                `).join("")}
            </div>

            <footer class="text-center mt-6 pb-8 text-gray-500 text-sm">
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
    const selectedGame = gameData.games.find(game => game.id === gameId);
    const gameScreenHTML = `
        <div class="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-pink-100">
            <div class="fixed inset-x-0 top-0 h-32 pointer-events-none overflow-hidden">
                ${emojis.slice(0, 4).map((emoji,i) => `
                    <span style="animation-delay: ${i * 0.5}s;" class="absolute animate-floatTop">${emoji}</span>
                `).join("")}
            </div>

            <div class="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-xl max-w-md mx-auto relative">
                <h2 class="text-2xl font-bold mb-4 text-center">${selectedGame.title}</h2>
                <p class="mb-8 text-lg text-center">${selectedGame.description || '게임 설명이 없습니다.'}</p>
                <button data-sceneid="${selectedGame.scenes[0].id}" 
                    class="w-full py-4 px-8 bg-gradient-to-r from-pink-400 to-purple-400 hover:from-pink-500 hover:to-purple-500 text-white text-xl font-bold rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 animate-bounce">
                    게임 시작하기 🎮
                </button>
            </div>

            <div class="fixed inset-x-0 bottom-0 h-32 pointer-events-none overflow-hidden">
                ${emojis.slice(4).map((emoji,i) => `
                    <span style="animation-delay: ${i * 0.5}s;" class="absolute animate-floatBottom">${emoji}</span>
                `).join("")}
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

document.addEventListener('DOMContentLoaded', () => {
    renderMainScreen();
});

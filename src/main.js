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
        <div class="container mx-auto px-4 py-8">
            <header class="main-header text-center mb-12">
                <h1 class="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-royal-gold to-soft-gold bg-clip-text text-transparent">
                    미니 미님 동화 게임
                </h1>
                <p class="text-lg md:text-xl text-soft-navy opacity-90">재미있는 게임으로 배워보아요! ✨</p>
            </header>

            <div class="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 mb-12">
                ${gameData.games.map(game => `
                    <div class="game-card transform transition-all duration-300 hover:scale-105">
                        <button data-gameid="${game.id}" class="w-full relative">
                            <div class="aspect-square rounded-2xl overflow-hidden">
                                <img src="${game.thumbnail}" 
                                     alt="${game.title}" 
                                     class="w-full h-full object-cover"
                                />
                            </div>
                            <div class="absolute bottom-0 left-0 right-0 bg-white/90 backdrop-blur-sm p-3 rounded-b-2xl">
                                <p class="text-center text-soft-navy font-medium truncate">
                                    ${game.title}
                                </p>
                            </div>
                        </button>
                    </div>
                `).join('')}
            </div>

            <footer class="text-center text-soft-navy/70 text-sm space-y-2">
                <p>지금까지 <span id="playerCount" class="font-medium">0</span>명이 참여했어요!</p>
                <p>주의사항: 저장된 데이터는 브라우저를 닫거나 삭제하면 초기화됩니다.</p>
                <p>제작/광고문의: <a href="mailto:petsmoa2000@gmail.com" class="hover:text-soft-navy">petsmoa2000@gmail.com</a></p>
                <p>© Test Lab. All Rights Reserved.</p>
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

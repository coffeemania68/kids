import './components/Button.js'
import './components/Card.js'
import { initGame } from './utils/gameData.js'
import { loadGameProgress } from './utils/localStorage.js';

// 카카오 SDK 초기화
const kakaoApiKey = '110d468a677132abc8ddfe71b00c3939';
Kakao.init(kakaoApiKey);

//  init Game Data
  initGame();


const root = document.getElementById('root');

function renderMainScreen() {
    const mainScreenHTML = `
    <div class="max-w-4xl mx-auto">
      <h1 class="text-3xl font-bold mb-6 text-center">12종 게임 시리즈</h1>
    
         <div class="grid grid-cols-3 gap-4 mb-8">
             <div class="p-4">
                  <button data-gameid="gumiho-school">
                     <img src="/public/images/thumbnails/gumiho-school_thumbnail.png" alt="구미호 학교에 간 날 썸네일" class="rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-transform duration-300">
                 </button>
            </div>
              <div class="p-4">
                  <button  data-gameid="dokkebi-delivery">
                     <img src="/public/images/thumbnails/dokkebi-delivery_thumbnail.png" alt="도깨비와 배달 아르바이트 썸네일"  class="rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-transform duration-300">
                 </button>
            </div>
           <div class="p-4">
                  <button data-gameid="dragon-brother">
                     <img src="/public/images/thumbnails/dragon-brother_thumbnail.png" alt="용으로 변신한 우리 오빠 썸네일" class="rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-transform duration-300">
                  </button>
            </div>
            <div class="p-4">
                   <button  data-gameid="ai-cinderella">
                      <img src="/public/images/thumbnails/ai-cinderella_thumbnail.png" alt="AI 로봇과 신데렐라 썸네일"  class="rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-transform duration-300">
                   </button>
            </div>
             <div class="p-4">
                  <button data-gameid="metaverse-snowwhite">
                       <img src="/public/images/thumbnails/metaverse-snowwhite_thumbnail.png" alt="메타버스 속 백설공주 썸네일"  class="rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-transform duration-300">
                  </button>
            </div>
             <div class="p-4">
                  <button  data-gameid="youtuber-mermaid">
                     <img src="/public/images/thumbnails/youtuber-mermaid_thumbnail.png" alt="유튜버가 된 인어공주 썸네일" class="rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-transform duration-300">
                  </button>
            </div>
             <div class="p-4">
                 <button data-gameid="plastic-witch">
                       <img src="/public/images/thumbnails/plastic-witch_thumbnail.png" alt="플라스틱 섬의 마녀 썸네일" class="rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-transform duration-300">
                    </button>
            </div>
            <div class="p-4">
                   <button data-gameid="dust-alice">
                       <img src="/public/images/thumbnails/dust-alice_thumbnail.png" alt="미세먼지 나라의 앨리스 썸네일"  class="rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-transform duration-300">
                   </button>
             </div>
             <div class="p-4">
                  <button data-gameid="global-warming-red">
                       <img src="/public/images/thumbnails/global-warming-red_thumbnail.png" alt="지구온난화와 빨간모자 썸네일" class="rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-transform duration-300">
                  </button>
            </div>
              <div class="p-4">
                  <button data-gameid="moonlight-hanbok">
                      <img src="/public/images/thumbnails/moonlight-hanbok_thumbnail.png" alt="달빛 한복과 금도끼 썸네일" class="rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-transform duration-300">
                   </button>
              </div>
           <div class="p-4">
                 <button data-gameid="sunmoon-game">
                    <img src="/public/images/thumbnails/sunmoon-game_thumbnail.png" alt="해님달님 게임대회 썸네일" class="rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-transform duration-300">
                 </button>
             </div>
               <div class="p-4">
                   <button data-gameid="vr-simcheong">
                      <img src="/public/images/thumbnails/vr-simcheong_thumbnail.png" alt="심청이의 VR 여행 썸네일" class="rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-transform duration-300">
                   </button>
              </div>
        </div>
        <footer class="text-center mt-6 text-gray-500 text-sm">
          <p>지금까지 <span id="playerCount">0</span>명이 참여했어요!</p>
            <p class="mb-2">주의사항: 저장된 데이터는 브라우저를 닫거나 삭제하면 초기화됩니다.</p>
         <p> 제작/광고문의: <a href="mailto:petsmoa2000@gmail.com">petsmoa2000@gmail.com</a></p>
             <p class="mt-1"> © Test Lab. All Rights Reserved.</p>
        </footer>
    </div>
    `;
     root.innerHTML = mainScreenHTML;

     // Game Select Event
    const gameButtons = document.querySelectorAll('[data-gameid]');

    gameButtons.forEach(button => {
    button.addEventListener('click', (e) => {
         const gameId = e.currentTarget.dataset.gameid;
          loadGameScreen(gameId);
       })
   })
  
  // 로컬 스토리지에서 참여자 수 불러와서 업데이트
      const playerCountElement = document.getElementById('playerCount');
     const playerCount = loadGameProgress();
       playerCountElement.textContent = playerCount;
}

// 게임 페이지 로드 함수
function loadGameScreen(gameId){
 console.log(gameId);

    const gameScreenHTML = `
        <div class="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-pink-100">
         <div class="bg-white p-8 rounded-lg shadow-xl max-w-md mx-auto">
             <h2 class="text-2xl font-bold mb-4">${gameId}</h2>
             <p class="mb-4">게임 설명 들어가는 곳</p>
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">게임 시작</button>
          </div>
        </div>
    `;

     root.innerHTML = gameScreenHTML;
}
renderMainScreen();

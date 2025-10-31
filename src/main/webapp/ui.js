/**
   <script>
 function openPage(page){ location.href = page; }

 function injectChrome(pageTitle){
   if(document.readyState === 'loading'){
     document.addEventListener('DOMContentLoaded',()=>buildChrome(pageTitle));
   } else buildChrome(pageTitle);
 }

 function buildChrome(pageTitle){
   // 앱 래퍼 생성
   if(!document.querySelector('.app')){
     const app = document.createElement('div');
     app.className='app';
     const header=document.createElement('header');
     header.innerHTML=`
       <div class="logo">🔥 R!DE OUT${pageTitle?` · ${pageTitle}`:''}</div>
       <div id="userInfo" class="user-info" style="display:none;">
         <img id="userImg" src=""><span id="userName"></span>
       </div>
       <div id="logoutPopup" class="logout-popup">
         <button id="logoutBtn">🚪 로그아웃</button>
       </div>`;
     const main=document.querySelector('main#content')||document.createElement('main');
     main.id='content';
     const footer=document.createElement('footer');
     footer.innerHTML=`<div class="tab-btn" id="homeBtn" title="Home"></div>`;
     app.appendChild(header);
     app.appendChild(main);
     app.appendChild(footer);
     document.body.innerHTML='';
     document.body.appendChild(app);
   }

   // 사용자 정보 불러오기
   const user = JSON.parse(localStorage.getItem('rideout_user')||'{}');
   if(user.name){
     document.getElementById('userImg').src = user.picture || '';
     document.getElementById('userName').textContent = user.name;
     document.getElementById('userInfo').style.display='flex';
   } else {
     location.href='login.html'; return;
   }

   // 이벤트
   const info=document.getElementById('userInfo');
   const pop=document.getElementById('logoutPopup');
   info.onclick=()=>{pop.style.display=(pop.style.display==='flex'?'none':'flex');};
   document.getElementById('logoutBtn').onclick=()=>{
     localStorage.removeItem('rideout_user');
     location.href='login.html';
   };
   document.getElementById('homeBtn').onclick=()=>location.href='home.html';
 }
 // ✅ 프로필 클릭 → 메뉴 토글
 document.getElementById("userInfo").addEventListener("click", () => {
   const menu = document.getElementById("userMenu");
   // show 클래스 토글 (애니메이션 효과용)
   if (menu.classList.contains("show")) {
     menu.classList.remove("show");
     setTimeout(() => (menu.style.display = "none"), 200);
   } else {
     menu.style.display = "flex";
     setTimeout(() => menu.classList.add("show"), 10);
   }
 });

 // ✅ 메뉴 외부 클릭 시 닫기
 window.addEventListener("click", (e) => {
   const menu = document.getElementById("userMenu");
   const userInfo = document.getElementById("userInfo");
   if (!menu.contains(e.target) && !userInfo.contains(e.target)) {
     menu.classList.remove("show");
     setTimeout(() => (menu.style.display = "none"), 200);
   }
 });

 // ✅ 개별 버튼 동작
 document.getElementById("profileBtn").addEventListener("click", () => {
   alert("프로필 화면으로 이동합니다.");
 });
 document.getElementById("settingsBtn").addEventListener("click", () => {
   alert("설정 페이지로 이동합니다.");
 });
 document.getElementById("logoutBtn").addEventListener("click", () => {
   localStorage.removeItem("rideout_user");
   document.getElementById("userMenu").classList.remove("show");
   setTimeout(() => (document.getElementById("userMenu").style.display = "none"), 200);
   alert("로그아웃 되었습니다.");
 });

 </script>
 *
 */
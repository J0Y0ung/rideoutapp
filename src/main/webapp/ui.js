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
 </script>
 *
 */
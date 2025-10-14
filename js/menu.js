const menuIcon = document.getElementById('menuIcon');
const navMenu = document.getElementById('navMenu');

menuIcon.addEventListener('click', () => {
  navMenu.classList.toggle('active');        // メニュー表示/非表示
  menuIcon.classList.toggle('open');         // バッテンアニメーション
  document.body.classList.toggle('menu-open'); // 背景ぼかし
});

function scrollFunction() {
  var scrollPosition = window.pageYOffset;
  var logoText = document.querySelector('.logo-text');
  
  // 스크롤을 내린 경우
  if (scrollPosition > 1) {
    // 3초 동안 투명도를 0으로 바꿉니다.
    logoText.style.transition = 'opacity 3s';
    logoText.style.opacity = '0';
  } 
  // 스크롤을 올린 경우
  else {
    // 3초 동안 투명도를 1로 바꿉니다.
    logoText.style.transition = 'opacity 3s';
    logoText.style.opacity = '1';
  }
}
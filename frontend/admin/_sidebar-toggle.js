// 프로젝트 서브메뉴 토글 기능
function initializeSidebarToggle(isProjectPage) {
  var projectSubmenu = document.getElementById('project-submenu');
  var projectToggle = document.getElementById('project-toggle');
  var navItems = document.querySelectorAll('#sidebar .nav-item');

  if (projectToggle && projectSubmenu) {
    projectToggle.addEventListener('click', function(e) {
      e.stopPropagation();
      e.preventDefault();
      projectSubmenu.classList.toggle('open');
      // 프로젝트 페이지가 아니면 네비게이션
      if (!isProjectPage) {
        location.href = '../project/list.html';
      }
    });

    // 다른 nav-item 클릭 시 서브메뉴 닫기
    navItems.forEach(function(item) {
      if (item !== projectToggle) {
        item.addEventListener('click', function() {
          projectSubmenu.classList.remove('open');
        });
      }
    });
  }
}

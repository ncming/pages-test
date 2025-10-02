
document.addEventListener('DOMContentLoaded', function() {
  console.log("Website LuxuryCar đã tải hoàn tất!");
  const header = document.querySelector('.main-header');
  if (header) {
    window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
        header.style.backgroundColor = 'rgba(0, 0, 0, 0.95)';
      } else {
        header.style.backgroundColor = '#0d0d0d';
      }
    });
  }
  /* login page */
  const loginForm = document.getElementById('loginForm');
  if (loginForm) {
    loginForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const username = document.getElementById('username').value.trim();
      const password = document.getElementById('password').value.trim();

      if (username === "admin" && password === "123") {
        alert("Đăng nhập thành công! Chào mừng " + username);
        window.location.href = "index.html";
      } else {
        alert("Sai tài khoản hoặc mật khẩu!");
      }
    });
  }

});

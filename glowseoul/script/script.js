console.log("Hello");

document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const mobileNav = document.querySelector(".mobile-nav");

  if (hamburger && mobileNav) {
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active");
      mobileNav.classList.toggle("open");
    });
  }

  // 🔵 fade-up 애니메이션 (section-1, section-2 전부)
  const fadeElements = document.querySelectorAll(".fade-up, .fade-up-btn");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    },
    {
      threshold: 0.15, // 보이는 정도
    }
  );

  fadeElements.forEach((el, index) => {
    el.style.transitionDelay = `${index * 0.15}s`; // 순차 애니메이션
    observer.observe(el);
  });
});

// ★ 현재 URL과 메뉴 링크 href 비교 → active 자동 적용
document.addEventListener("DOMContentLoaded", () => {
  const currentPage = location.pathname.split("/").pop(); // ex) "price.html"
  const menuLinks = document.querySelectorAll(".menu-item-text a");

  menuLinks.forEach((link) => {
    const linkPage = link.getAttribute("href");

    if (linkPage === currentPage) {
      link.classList.add("active");
    }
  });
});

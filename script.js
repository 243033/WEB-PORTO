(function () {
  // Tahun otomatis di footer
  var year = document.getElementById("year");
  if (year) {
    year.textContent = new Date().getFullYear();
  }

  // Tandai menu navigasi sesuai bagian yang sedang dilihat
  var links = document.querySelectorAll('nav a[href^="#"]');
  if (!links.length || !("IntersectionObserver" in window)) {
    return;
  }

  var map = {};
  links.forEach(function (link) {
    map[link.getAttribute("href").slice(1)] = link;
  });

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          links.forEach(function (l) { l.classList.remove("active"); });
          map[entry.target.id].classList.add("active");
        }
      });
    },
    { rootMargin: "-30% 0px -60% 0px" }
  );

  Object.keys(map).forEach(function (id) {
    var section = document.getElementById(id);
    if (section) { observer.observe(section); }
  });
})();

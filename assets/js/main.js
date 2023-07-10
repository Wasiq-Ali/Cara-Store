let navbar = document.getElementById("navbar");
let sidebar = document.getElementById("side-bar");
let sidebarclose = document.getElementById("side-bar-close");
let overlay = document.getElementById("overlay");

sidebar.addEventListener("click", function () {
  navbar.classList.add("active-side-bar");
  overlay.style = "display:block";
});

sidebarclose.addEventListener("click", function () {
  navbar.classList.remove("active-side-bar");
  overlay.style = "display:none";
});

window.addEventListener("scroll", function () {
  if (window.scrollY > 0) {
    navbar.classList.remove("active-side-bar");
    overlay.style = "display:none";
  }
});

// Change Product Image:
let Mainimg = document.getElementById("product-img");
let subImg = document.querySelectorAll(".small-img");
for (let x of subImg) {
  x.addEventListener("click", function () {
    Mainimg.src = x.src;
  });
}

// Redirect Product to Product Detail Page:
let getProductBox = document.getElementsByClassName("product-box");

for (var v of getProductBox) {
  v.addEventListener("click", function () {
    window.location.href = "product-detail.html";
    v.src;
    console.log(v);
  });
}

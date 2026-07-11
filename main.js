//change navbar//

window.addEventListener('scroll', () => {
   document.querySelector('nav').classList.toggle
      ('window-scroll', window.scrollY > 100)
})

//show/hide faq

let faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
   faq.addEventListener('click', () => {
      faq.classList.toggle('open');


      let icon = faq.querySelector('.faq__icon i');
      if (icon.className === 'fa-solid fa-plus') {
         icon.className = "fa-solid fa-minus"
      } else {
         icon.className = "fa-solid fa-plus";
      }
   })
})


const menu = document.querySelector(".nav__menu");
const openBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");

openBtn.addEventListener("click", () => {
   menu.style.display = "flex";
   openBtn.style.display = "none";
   closeBtn.style.display = "inline-block";
});

closeBtn.addEventListener("click", () => {
   menu.style.display = "none";
   openBtn.style.display = "inline-block";
   closeBtn.style.display = "none";
});



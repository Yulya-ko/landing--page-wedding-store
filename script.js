// === Текстові поля ===
const textInputs = document.querySelectorAll(".signup__input-text");

// === Блоки дата/часу ===
const dateBlocks = document.querySelectorAll(".signup__form-date");

// === Форма та кнопка ===
const form = document.querySelector(".signup__form");
const submitBtn = document.querySelector(".signup__btn");

// ---- Анімації активних полів ----
textInputs.forEach(input => {
  input.addEventListener("focus", () => input.classList.add("active"));
  input.addEventListener("blur", () => {
    if (input.value.trim() === "") input.classList.remove("active");
  });
});

dateBlocks.forEach(block => {
  const input = block.querySelector("input");

  input.addEventListener("focus", () => block.classList.add("active"));
  input.addEventListener("blur", () => {
    if (input.value.trim() === "") block.classList.remove("active");
  });
});

// ---- Валідація при натисканні кнопки ----
form.addEventListener("submit", (e) => {
  e.preventDefault(); // блокуємо реальне відправлення

  let isValid = true;

  // Перевірка текстових inputs
  textInputs.forEach(input => {
    if (input.value.trim() === "") {
      input.classList.add("error");
      isValid = false;
    } else {
      input.classList.remove("error");
    }
  });

  // Перевірка дати/часу
  dateBlocks.forEach(block => {
    const input = block.querySelector("input");
    if (input.value.trim() === "") {
      block.classList.add("error");
      isValid = false;
    } else {
      block.classList.remove("error");
    }
  });

  if (!isValid) return;

  // Якщо все ок — показуємо успішне повідомлення
  alert("Form successfully submitted!");

  // Очищаємо форму
  form.reset();

  // Забираємо активні класи
  textInputs.forEach(input => input.classList.remove("active"));
  dateBlocks.forEach(block => block.classList.remove("active"));
});


gsap.registerPlugin(ScrollTrigger);

const heroTimeline = gsap.timeline();
heroTimeline
  .to(".hero__title", {opacity: 1, y: -20, duration: 1})
  .to(".hero__text", {opacity: 1, y: -20, duration: 1}, "-=0.5")
  .to(".hero__btn", {opacity: 1, y: -20, duration: 1}, "-=0.5");

function animateOnScroll(selector, fromVars, toVars, delay = 0) {
  gsap.utils.toArray(selector).forEach(el => {
    gsap.fromTo(el, 
      fromVars, 
      {...toVars, delay, scrollTrigger: {
        trigger: el,
        start: "top 80%",
        toggleActions: "play none none reverse"
      }}
    );
  });
}

animateOnScroll('.box', {opacity:0, y:50}, {opacity:1, y:0, duration:1});
animateOnScroll('.block-one', {opacity:0, x:-50}, {opacity:1, x:0, duration:1});
animateOnScroll('.block-two', {opacity:0, x:50}, {opacity:1, x:0, duration:1, delay:1});
animateOnScroll('.block-three', {opacity:0, y:50}, {opacity:1, y:0, duration:1, delay:0.8});
animateOnScroll('.section-one', {opacity:0, x:-50}, {opacity:1, x:0, duration:1.5, delay:0.5});
animateOnScroll('.section-two', {opacity:0, y:50}, {opacity:1, y:0, duration:1, delay:0.5});
animateOnScroll('.section-three', {opacity:0, x:50}, {opacity:1, x:0, duration:1.5, delay:0.5});

const accessoriesTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: ".collections__accessories",
    start: "top 80%",
    toggleActions: "play none none reverse"
  }
});

accessoriesTimeline.from(".collections__accessories-info", {opacity:0, y:-50, duration:1});

gsap.utils.toArray(".collections__accessories-image").forEach((img, i) => {
  accessoriesTimeline.from(img, {opacity:0, y:50, duration:1, delay: i*0.2}, "-=0.8");
});

document.querySelectorAll(".collections__accessories-image").forEach(img => {
  img.addEventListener("mouseenter", () => gsap.to(img, {scale:1.05, duration:0.3}));
  img.addEventListener("mouseleave", () => gsap.to(img, {scale:1, duration:0.3}));
});

const followUsTimeline = gsap.timeline({
  scrollTrigger: { 
    trigger: ".page__followus-images", 
    start: "top 80%", 
    end: "bottom 20%", 
    scrub: true 
    }
});

followUsTimeline
  .to(".img-one", {y:0, opacity:1, duration:1})
  .to(".img-two", {y:0, opacity:1, duration:1.2}, "-=0.8")
  .to(".img-three", {y:0, opacity:1, duration:1.4}, "-=1")
  .to(".img-four", {y:0, opacity:1, duration:1.6}, "-=1.2")
  .to(".img-five", {y:0, opacity:1, duration:1.8}, "-=1.4");

const footerTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: ".footer",
    start: "top 90%",
    toggleActions: "play none none reverse"
  }
});

footerTimeline.from(".footer__content-info > *", {
  y: 20,
  opacity: 0,
  duration: 0.8,
  stagger: 0.2
});

footerTimeline.from(".socialmedia__img-icon", {
  y: 20,
  opacity: 0,
  duration: 0.8,
  stagger: 0.2
}, "-=0.5"); 

footerTimeline.from(".footer__input", {
  y: 20,
  opacity: 0,
  duration: 0.8
}, "-=0.5");

const scrollBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 500) {
    scrollBtn.classList.add("show");
  } else {
    scrollBtn.classList.remove("show");
  }
});

scrollBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

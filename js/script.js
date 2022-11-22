// const burger = document.querySelector('#burger');
// const popup = document.querySelector('#popup');
// const popupSlide = document.querySelector('#popupSlide');
// const sliderItem = document.querySelectorAll('.our_requirements_content_item');
// const sliderPhoto = document.querySelector('.our_requirements_img');
// const body = document.body;

// burger.addEventListener('click', burgerHandler);
// popup.addEventListener('click', (e) => {
//   burgerHandler(e);
// });

// sliderItem.forEach((e) => {
//   e.addEventListener('click', () => {
//     setImage(e, sliderItem);
//   });
// });

// function burgerHandler(e) {
//   if (popup.classList.contains('open')) {
//     popup.classList.add('close');
//     body.classList.remove('noscroll');
//     popupSlide.classList.add('slideout');

//     setTimeout(() => {
//       popup.classList.remove('close');
//       popup.classList.remove('open');
//       popupSlide.classList.remove('slideout');
//       popupSlide.classList.remove('slidein');
//     }, 300);
//   } else {
//     body.classList.add('noscroll');
//     popup.classList.add('open');
//     popupSlide.classList.add('slidein');
//   }
//   burger.classList.toggle('active');
// }
// function myFunction() {
//   setTimeout(() => {
//     window.location.href = 'thankyou.html';
//   }, 2000);
// }

// const faders = document.querySelectorAll('.fade-in');
// const sliders = document.querySelectorAll('.slide-in');
// const appearOptions = { threshold: 0, rootMargin: '0px 0px -150px 0px' };

// const appearOnScroll = new IntersectionObserver(function (entries, appearOnScroll) {
//   entries.forEach((entry) => {
//     if (!entry.isIntersecting) {
//       return;
//     } else {
//       entry.target.classList.add('appear');
//       appearOnScroll.unobserve(entry.target);
//     }
//   });
// }, appearOptions);

// faders.forEach((fader) => {
//   appearOnScroll.observe(fader);
// });

// sliders.forEach((slider) => {
//   appearOnScroll.observe(slider);
// });

//burger toggle
const burger = document.querySelector('.burger_button');
const menu = document.querySelector('.menu_content_wrapper');
console.log(burger, menu);

burger.addEventListener('click', changeMenu);
function changeMenu() {
  menu.classList.toggle('show');
  menu.classList.toggle('move');
  burger.classList.toggle('active');
}
// const el = document.querySelector('.menu_content_wrapper');

// el.addEventListener('mousemove', (e) => {
//   el.style.setProperty('--x', -e.offsetX + 'px');
//   el.style.setProperty('--y', -e.offsetY + 'px');
// });
// const bg = document.querySelector('.menu_content_wrapper');
// const walk = 40;

// const move = (e) => {
//   let mouseX = -Math.round((e.clientX / window.innerWidth) * walk - walk / 2);
//   let mouseY = -Math.round((e.clientY / window.innerHeight) * walk - walk / 2);
//   bg.style.transform = `scale(1.1) translate(${mouseX}px, ${mouseY}px)`;
// };
// window.addEventListener('mousemove', move);

// //LIST animation
// var tl = new TimelineLite();
// tl.staggerFrom(
//   'li',
//   2,
//   {
//     delay: 0.1,
//     y: 10,
//     opacity: 0,
//     ease: Back.easeOut,
//   },
//   0.2,
// );
// function move(e) {
//   var image = document.getElementById('image'),
//     w = window.innerWidth,
//     h = window.innerHeight,
//     mouseX = e.clientX,
//     mouseY = e.clientY,
//     imageX = (mouseX / w) * 100,
//     imageY = (mouseY / h) * 100;
//   console.log(mouseX, mouseY);

//   image.style['background-position'] = imageX + '% ' + imageY + '%';
// }

// window.addEventListener('resize', move);
// window.addEventListener('mousemove', move);

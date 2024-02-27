// CREATNG A PORTFOLIO TABBED COMPONENT

const p_btns = document.querySelector(".p-btns");
const p_btn = document.querySelectorAll(".p-btn");
const p_img_elem = document.querySelectorAll(".image-overlay");

p_btns.addEventListener("click", (e) => {
  const p_btn_clicked = e.target;
  console.log("p_btn_clicked")
if(!p_btn_clicked.classList.contains("p-btn")) return;
  p_btn.forEach((curElem) => curElem.classList.remove("p-btn-active"));
  p_btn_clicked.classList.add("p-btn-active")

  // to find number in data attribute

  const btn_num = p_btn_clicked.dataset.btnNum;
  console.log(btn_num);

  const image_active = document.querySelectorAll(`.p-btn--${btn_num}`);
  p_img_elem.forEach((curElem) => curElem.classList.add("p-image-not-active"));

  image_active.forEach((curElem) => curElem.classList.remove("p-image-not-active"));

});

// COUNTER NUMBER
 
const counterNum = document.querySelectorAll(".counter-numbers");

const speed = 25;
counterNum.forEach((curElem) => {
const updateNumber = () =>{
  const targetNumber = parseInt(curElem.dataset.number);
// console.log(targetNumber);
  const initialNum = parseInt(curElem.innerText);
  const incrementNumber = Math.trunc(targetNumber/speed)

  if (initialNum < targetNumber) {
    curElem.innerText =  `${initialNum + incrementNumber}%`;

    setTimeout(updateNumber , 25);
  }
};
updateNumber();
})

// CREATING A RESPONSIVE WEBSITE CODE

const mobile_nav = document.querySelector(".mobile-navbar-btn");
const headerElem = document.querySelector(".header");

mobile_nav.addEventListener("click", () => {
  headerElem.classList.toggle("active");
});
// FOOTER
const heroSection = document.querySelector(".section-hero");
const footerElem = document.querySelector(".section-footer");
const scrollElement = document.createElement("div");
scrollElement.classList.add("scrollTop-style");

scrollElement.innerHTML = `<ion-icon name="arrow-up-outline" class="scroll-top"></ion-icon>`;
footerElem.after(scrollElement);

const scrollTop = () => {
  heroSection.scrollIntoView({ behavior: "smooth" });
};
scrollElement.addEventListener("click", scrollTop);



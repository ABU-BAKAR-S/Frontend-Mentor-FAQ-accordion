let faqHead = document.querySelectorAll(".faq_head");
let faqBody = document.querySelectorAll(".faq_body p");
let img = document.querySelectorAll(".faq_head img");


for (let i = 0; i < faqBody.length; i++) {


    faqHead[i].addEventListener("click", () => {

        faqBody[i].classList.toggle("activeP");

        img[i].classList.toggle("imgs")

    })
}


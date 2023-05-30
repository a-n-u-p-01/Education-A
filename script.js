//change navbar styles on scroll

window.addEventListener('scroll', ()=> {
    document.querySelector('nav').classList.toggle
    ('window-scroll',window.scrollY > 0)
})


// ---------FAQ--------

const faqs =  document.querySelectorAll('.faq');

faqs.forEach(faq => {
    faq.addEventListener('click', () =>{
        faq.classList.toggle('open');
        //change icon
        const icon = faq.querySelector('.faq_icon i');
        if(icon.className == 'uil uil-plus'){
            icon.className="uil uil-minus"
        }
    else if(icon.className == 'uil uil-minus'){
        icon.className="uil uil-plus"
    }

    })
    
});

// ---------swiper js----------


var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    freeMode: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    
    breakpoints: {
        600: {
            slidesPerView: 2,
        }
    }

  });
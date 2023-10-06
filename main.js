let search = document.querySelector('.search');
let icon_search = document.querySelector('#search');
let icon_remove = document.querySelector('#remove');
let sing_in = document.querySelector('.log_in');
let user = document.querySelector('#user');
let controll = document.querySelectorAll('.control span');
let image = document.querySelector('#img_cover')
// search
icon_search.addEventListener("click",()=>{
    if(icon_search.classList=='fa-solid fa-magnifying-glass' ){
        search.style.display='flex'
        icon_search.classList='fa-solid fa-x'
    }else{
        search.style.display='none'
        icon_search.classList='fa-solid fa-magnifying-glass'
    }
});
// SINGIN
user.addEventListener('click',()=>{
    sing_in.style.display='block'
});
icon_remove.addEventListener('click',()=>{
    sing_in.style.display='none'
});
// section controll
controll.forEach(e=>{
    e.addEventListener('click',()=>{
        controll.forEach((s)=>{
           s.classList.remove('active')
        })
        e.classList.add('active')
        image.src=e.getAttribute('data-src')
    })
})
// controll.forEach((e)=>{
//     e.addEventListener("click",()=>{
//         document.querySelector('.control .active').classList.remove('active')
//         e.classList.add('active')
//         image.src=e.getAttribute('data-src')
//     })
//     })

var swiper = new Swiper(".mySwiper", {
    spaceBetween:20,
    loop:true,
    autoplay:{
        delay:2500,
        isableOnInteraction:false,
    },
    breakpoints:{
        640:{
            slidesPerView:1,
        },
        768:{
            slidesPerView:2,
        },
        1024:{
            slidesPerView:3,
        },
    }
});


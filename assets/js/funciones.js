//* Autor: Esteban Vera
// Twitter: @kiokotzu
// Email:esteban.vg@outlook.com, esteban.vera@imagina.co */

$(function(){
	$('.owl-carousel').owlCarousel({
    loop:true,
    margin:2,
    nav:true,
    animateOut: 'fadeOutDown',
    animateIn: 'fadeIn',
    autoplay: 3000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})
})

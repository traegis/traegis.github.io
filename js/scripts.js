/*!
* Start Bootstrap - Freelancer v7.0.2 (https://startbootstrap.com/theme/freelancer)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-freelancer/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 72,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    /*document.getElementById("closeButton").addEventListener("click", stopVideo);*/
    /*document.getElementsByClassName("circles").addEventListener("click", stopVideo);*/
    /*document.getElementsByClassName("circles").addEventListener("click", stopVideo);*/
    /*document.getElementsByClassName("close-button1").addEventListener("click", stopVideo1);*/
    /*document.querySelector('#closeButton1').addEventListener("click", stopVideo1);*/
    /*document.getElementById("closeButton1.1").addEventListener("click", stopVideo1);*/
    /*document.querySelectorAll("#closeButton1.1, #closeButton1.2").addEventListener("click", stopVideo1);*/
    document.getElementById("closeButton1.1").addEventListener("click", stopVideo1);
    document.getElementById("closeButton1.2").addEventListener("click", stopVideo1);
    var video1 = document.getElementById("myVideoPlayer1");
     function stopVideo1() {
          video1.pause();
          video1.currentTime = 0;
     };

    document.getElementById("closeButton2.1").addEventListener("click", stopVideo2);
    document.getElementById("closeButton2.2").addEventListener("click", stopVideo2);
    var video2 = document.getElementById("myVideoPlayer2");
     function stopVideo2() {
          video2.pause();
          video2.currentTime = 0;
     };

    document.getElementById("closeButton3.1").addEventListener("click", stopVideo3);
    document.getElementById("closeButton3.2").addEventListener("click", stopVideo3);
    var video3 = document.getElementById("myVideoPlayer3");
     function stopVideo3() {
          video3.pause();
          video3.currentTime = 0;
     };

    document.getElementById("closeButton4.1").addEventListener("click", stopVideo4);
    document.getElementById("closeButton4.2").addEventListener("click", stopVideo4);
    var video4 = document.getElementById("myVideoPlayer4");
     function stopVideo4() {
          video4.pause();
          video4.currentTime = 0;
     };

});



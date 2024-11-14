$(window).on("scroll",function(){var scrollTop=$(window).scrollTop(),scrollThreshold=$(window).width()<=768?0:469;scrollTop>=scrollThreshold?$(".product-sticky-bar.opacitychange").css("display","block"):$(".product-sticky-bar.opacitychange").css("display","none")}),$(document).ready(function(){$(".slider").slick({dots:!1,infinite:!0,slidesToShow:1,slidesToScroll:1,autoplay:!0,autoplaySpeed:3e3,arrows:!1})}),$(document).ready(function(){$(".four-card-slider .slider").slick({dots:!1,infinite:!0,slidesToShow:4,slidesToScroll:1,responsive:[{breakpoint:1024,settings:{slidesToShow:3,slidesToScroll:1}},{breakpoint:768,settings:{slidesToShow:2,slidesToScroll:1}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1}}]})}),document.addEventListener("DOMContentLoaded",function(){var toggleLink=document.querySelector(".toggle-content"),contentFull=document.querySelector(".content-full"),contentPreview=document.querySelector(".content-preview");toggleLink.addEventListener("click",function(){contentFull.style.display==="none"?(contentPreview.style.display="none",contentFull.style.display="block",toggleLink.textContent="Show Less"):(contentPreview.style.display="block",contentFull.style.display="none",toggleLink.textContent="Read More")})});
//# sourceMappingURL=/s/files/1/0233/6459/9885/t/80/assets/custom.js.map?v=1725969850

// for hide header and footer on landingpage

document.addEventListener("DOMContentLoaded", function() {
    // Get the current page URL
    const currentPageUrl = window.location.href;

    // URL of the page where you want to hide the header and footer
    const landingPageUrl = "https://wellversed.in/pages/landingpage";

    // Check if the current page is the landing page
    if (currentPageUrl === landingPageUrl) {
        // Hide the header
        const header = document.querySelector('header'); // Adjust the selector as needed
        if (header) {
            header.style.display = 'none';
        }

        // Hide the footer
        const footer = document.querySelector('footer'); // Adjust the selector as needed
        if (footer) {
            footer.style.display = 'none';
        }
    }
});


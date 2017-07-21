(function($) {
    "use strict"; // Start of use strict

    // Smooth scrolling using jQuery easing
    $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: (target.offset().top - 54)
                }, 1000, "easeInOutExpo");
                return false;
            }
        }
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
        target: '#mainNav',
        offset: 54
    });

    // Closes responsive menu when a link is clicked
    $('.navbar-collapse>ul>li>a').click(function() {
        $('.navbar-collapse').collapse('hide');
    });

    // Collapse the navbar when page is scrolled
    $(window).scroll(function() {
        if ($("#mainNav").offset().top > 100) {
            $("#mainNav").addClass("navbar-shrink");
        } else if (window.innerWidth > 1000 && document.title != "FAQ") {
            $("#mainNav").removeClass("navbar-shrink");
        }
    });

})(jQuery); // End of use strict

window.onload = function(){
  if(window.innerWidth < 1000 || document.title == "FAQ" || document.title == "Details"){
    document.getElementById('mainNav').classList.add('navbar-shrink');
    if(document.title == "FAQ"){
      document.getElementById('photoCover').style.marginTop = "50px";
    }
    console.log("test if");
  }
  console.log("TESTETEST");
  console.log(window.innerWidth);
  console.log(document.title);

  if(document.title == "Details"){
    displayProductPics();
  }

}

function displayProductPics(){
    pictureArray = ["bakeSheet.jpg", "bowl.jpg", "canopener.jpg", "collander.jpg", "cup.jpg", "fork.jpg",
                    "frypan.jpg", "knife.jpg", "mCupLarge.jpg", "mCupSmall.jpg", "mitts.jpg", "mixBowlLarge.jpg",
                  "mixBowlSmall.jpg", "plate.jpg", "saucepan.jpg", "spatula.jpg", "spoon.jpg", "tong.jpg", "tuner.jpg"];
    for(var j=0; j<pictureArray.size; j++){
      var photoDiv = document.createElement("div");
      photoDiv.classList.add('col-md-4 col-sm-6 portfolio-item');

      var productImage = document.createElement("IMG");
      productImage.setAttribute("src", "img/productPics/"+pictureArray[j]);
      productImage.classList.add('img-fluid');

      photoDiv.appendChild(productImage);

      document.getElementById("productBody").appendChild(photoDiv); 
    }
    console.log("Product Test");
}

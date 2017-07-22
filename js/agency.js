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
    var myData = JSON.parse(vutensilsProductData);
    for(var j=0; j<pictureArray.size; j++){
      var photoDiv = document.createElement("div");
      photoDiv.classList.add('col-md-4');
      photoDiv.classList.add('col-xs-6');
      photoDiv.classList.add('portfolio-item');

      var productImage = document.createElement("IMG");
      productImage.setAttribute("src", "img/productPics/"+ myData.myProducts[j].picture);
      productImage.classList.add('img-fluid');

      photoDiv.appendChild(productImage);

      document.getElementById("productBody").appendChild(photoDiv);
    }
    console.log("Product Test");
}

var vutensilsProductData = '{"myProducts": [' +
'{"picture": "bakeSheet.jpg", "material": "aluminum", "dimensions": "dim here", "color": "metallic", "additional info": "dimshwasher safe" },' +
'{"picture": "bowl.jpg", "material": "melamine", "dimensions": "dim here", "color": "white", "additional info": "dimshwasher safe" },' +
'{"picture": "canopener.jpg", "material": "aluminum + plastic", "dimensions": "dim here", "color": "metallic + black", "additional info": "dimshwasher safe" },' +
'{"picture": "collander.jpg", "material": "aluminum", "dimensions": "dim here", "color": "metallic", "additional info": "dimshwasher safe" },' +
'{"picture": "cup.jpg", "material": "plastic", "dimensions": "dim here", "color": "clear", "additional info": "dimshwasher safe" },' +
'{"picture": "fork.jpg", "material": "aluminum", "dimensions": "dim here", "color": "metallic", "additional info": "dimshwasher safe" },' +
'{"picture": "frypan.jpg", "material": "aluminum", "dimensions": "dim here", "color": "metallic", "additional info": "dimshwasher safe" },' +
'{"picture": "knife.jpg", "material": "aluminum", "dimensions": "dim here", "color": "metallic", "additional info": "dimshwasher safe" },' +
'{"picture": "mCupLarge.jpg", "material": "aluminum", "dimensions": "dim here", "color": "metallic", "additional info": "dimshwasher safe" },' +
'{"picture": "mCupSmall.jpg", "material": "aluminum", "dimensions": "dim here", "color": "metallic", "additional info": "dimshwasher safe" },' +
'{"picture": "mitts.jpg", "material": "cloth", "dimensions": "dim here", "color": "grey", "additional info": "washer and dryer safe" },' +
'{"picture": "mixBowlLarge.jpg", "material": "aluminum", "dimensions": "dim here", "color": "metallic", "additional info": "dimshwasher safe" },' +
'{"picture": "mixBowlSmall.jpg", "material": "aluminum", "dimensions": "dim here", "color": "metallic", "additional info": "dimshwasher safe" },' +
'{"picture": "plate.jpg", "material": "aluminum", "dimensions": "dim here", "color": "metallic", "additional info": "dimshwasher safe" },' +
'{"picture": "saucepan.jpg", "material": "aluminum", "dimensions": "dim here", "color": "metallic", "additional info": "dimshwasher safe" },' +
'{"picture": "spatula.jpg", "material": "aluminum", "dimensions": "dim here", "color": "metallic", "additional info": "dimshwasher safe" },' +
'{"picture": "spoon.jpg", "material": "aluminum", "dimensions": "dim here", "color": "metallic", "additional info": "dimshwasher safe" },' +
'{"picture": "tong.jpg", "material": "aluminum", "dimensions": "dim here", "color": "metallic", "additional info": "dimshwasher safe" },' +
'{"picture": "tuner.jpg", "material": "aluminum", "dimensions": "dim here", "color": "metallic", "additional info": "dimshwasher safe" }']}'

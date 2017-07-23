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
    for(var j=0; j<myData.myProducts.length; j++){
      var photoDiv = document.createElement("div");
      photoDiv.classList.add('col-md-4');
      photoDiv.classList.add('col-xs-4');
      //photoDiv.classList.add('col-lg-offset-2');
      photoDiv.classList.add('portfolio-item');
      var productImage = document.createElement("IMG");
      productImage.setAttribute("src", "img/productPics/"+ myData.myProducts[j].picture);
      productImage.classList.add('img-fluid');
      photoDiv.appendChild(productImage);
      document.getElementById("productBody").appendChild(photoDiv);


      var descriptionDiv = document.createElement("div");
      descriptionDiv.classList.add('col-md-6');
      descriptionDiv.classList.add('col-xs-6');
      descriptionDiv.classList.add('portfolio-item');

      var productTitle = document.createElement("h5")
      var pText = document.createTextNode(myData.myProducts[j].productName);
      productTitle.appendChild(pText);

      var productDescription1 = document.createElement("P");
      var pText = document.createTextNode(myData.myProducts[j].material);
      productDescription1.appendChild(pText);
      var productDescription2 = document.createElement("P");
      var pText = document.createTextNode(myData.myProducts[j].dimensions);
      productDescription2.appendChild(pText);
      var productDescription3 = document.createElement("P");
      var pText = document.createTextNode(myData.myProducts[j].color);
      productDescription3.appendChild(pText);
      var productDescription4 = document.createElement("P");
      var pText = document.createTextNode(myData.myProducts[j].additionalInfo);
      productDescription4.appendChild(pText);
      productDescription1.classList.add('img-fluid');
      productDescription2.classList.add('img-fluid');
      productDescription3.classList.add('img-fluid');
      productDescription4.classList.add('img-fluid');
      descriptionDiv.appendChild(productTitle);
      descriptionDiv.appendChild(productDescription1);
      descriptionDiv.appendChild(productDescription2);
      descriptionDiv.appendChild(productDescription3);
      descriptionDiv.appendChild(productDescription4);
      document.getElementById("productBody").appendChild(descriptionDiv);
    }
    console.log("Product Test");
}

var vutensilsProductData = '{"myProducts": [' +
'{"productName": "Baking Sheet", "picture": "bakeSheet.jpg", "material": "aluminum", "dimensions": "dim here", "color": "metallic", "additionalInfo": "dimshwasher safe" },' +
'{"productName": "Bowl", "picture": "bowl.jpg", "material": "melamine", "dimensions": "dim here", "color": "white", "additionalInfo": "dimshwasher safe" },' +
'{"productName": "Can Opener", "picture": "canopener.jpg", "material": "aluminum + plastic", "dimensions": "dim here", "color": "metallic + black", "additionalInfo": "dimshwasher safe" },' +
'{"productName": "Collander", "picture": "collander.jpg", "material": "aluminum", "dimensions": "dim here", "color": "metallic", "additionalInfo": "dimshwasher safe" },' +
'{"productName": "Glass", "picture": "cup.jpg", "material": "plastic", "dimensions": "dim here", "color": "clear", "additionalInfo": "dimshwasher safe" },' +
'{"productName": "Fork", "picture": "fork.jpg", "material": "aluminum", "dimensions": "dim here", "color": "metallic", "additionalInfo": "dimshwasher safe" },' +
'{"productName": "Frying Pan", "picture": "frypan.jpg", "material": "aluminum", "dimensions": "dim here", "color": "metallic", "additionalInfo": "dimshwasher safe" },' +
'{"productName": "Knife", "picture": "knife.jpg", "material": "aluminum", "dimensions": "dim here", "color": "metallic", "additionalInfo": "dimshwasher safe" },' +
'{"productName": "Measuring Cups", "picture": "mCupLarge.jpg", "material": "aluminum", "dimensions": "dim here", "color": "metallic", "additionalInfo": "dimshwasher safe" },' +
'{"productName": "Measuring Spoons", "picture": "mCupSmall.jpg", "material": "aluminum", "dimensions": "dim here", "color": "metallic", "additionalInfo": "dimshwasher safe" },' +
'{"productName": "Oven Mitts", "picture": "mitts.jpg", "material": "cloth", "dimensions": "dim here", "color": "grey", "additionalInfo": "washer and dryer safe" },' +
'{"productName": "Large Mixing Bowl", "picture": "mixBowlLarge.jpg", "material": "aluminum", "dimensions": "dim here", "color": "metallic", "additionalInfo": "dimshwasher safe" },' +
'{"productName": "Small Mixing Bowl", "picture": "mixBowlSmall.jpg", "material": "aluminum", "dimensions": "dim here", "color": "metallic", "additionalInfo": "dimshwasher safe" },' +
'{"productName": "Plate", "picture": "plate.jpg", "material": "aluminum", "dimensions": "dim here", "color": "metallic", "additionalInfo": "dimshwasher safe" },' +
'{"productName": "Sauce Pan", "picture": "saucepan.jpg", "material": "aluminum", "dimensions": "dim here", "color": "metallic", "additionalInfo": "dimshwasher safe" },' +
'{"productName": "Spatula", "picture": "spatula.jpg", "material": "aluminum", "dimensions": "dim here", "color": "metallic", "additionalInfo": "dimshwasher safe" },' +
'{"productName": "Spoon", "picture": "spoon.jpg", "material": "aluminum", "dimensions": "dim here", "color": "metallic", "additionalInfo": "dimshwasher safe" },' +
'{"productName": "Tongs", "picture": "tong.jpg", "material": "aluminum", "dimensions": "dim here", "color": "metallic", "additionalInfo": "dimshwasher safe" },' +
'{"productName": "Cutting Sheet", "picture": "cuttingBoard.jpg", "material": "Plastic", "dimensions": "Length: 18 in., Width: 24 in., Height: 1/8 in.", "color": "white", "additionalInfo": "dishwasher safe" },' +
'{"productName": "Turner", "picture": "tuner.jpg", "material": "aluminum", "dimensions": "dim here", "color": "metallic", "additionalInfo": "dimshwasher safe" }]}'

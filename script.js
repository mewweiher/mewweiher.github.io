function openPage(evt, pageName) {
  var i, x, tablinks;
  x = document.getElementsByClassName("navTab");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < x.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", ""); 
  }
  document.getElementById(pageName).style.display = "block";
  /*evt.currentTarget.className += " active"; this just returned a bunch of actives on CV tab but that may not be bad??*/
  evt.currentTarget.classList.toggle("active");
}

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}


var slideIndex=1;

class ImageGallery{
  constructor(id){
    this.container = document.getElementById(id);
    this.prevButton = this.container.querySelector(".prev");
    this.nextButton = this.container.querySelector(".next");
    this.slideIndex = 1;
    var that = this;

    this.showSlide(this.slideIndex);

    this.prevButton.addEventListener("click", function () {
      that.plusSlides(-1);
    });
    this.nextButton.addEventListener("click", function () {
      that.plusSlides(1);
    });
  }



  plusSlides = function (n) {
    this.showSlide((this.slideIndex += n));
  };
  selectSlide = function(n){
    this.showSlide((this.slideIndex = n));
    }

  showSlide = function (n) {
    var slide = this.container.getElementsByClassName("imageSlide");
    
    if (n > slide.length) {
      this.slideIndex = 1;
    }
    if (n < 1) {
      this.slideIndex = slide.length;
    }
    for (var i = 0; i < slide.length; i++) {
      slide[i].style.display = "none";
    }
    slide[this.slideIndex - 1].style.display = "block";
    console.log(this.slideIndex);
  };


}

let academy = new ImageGallery("acad");
let diane = new ImageGallery("diane");
let milk = new ImageGallery("milk");
let lostDogs = new ImageGallery("lostdogs");



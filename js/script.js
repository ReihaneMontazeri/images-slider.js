let pics = ['image/1.jpg','image/2.png','image/3.jpg']
let imgSlider = document.querySelector('.img-slider')
let prev = document.querySelector('.prev')
let next = document.querySelector('.next')
let index = 0

function prevPic(){
  index = index - 1

  if(index < 0){
    index = pics.length-1
  }
  imgSlider.setAttribute('src', pics[index])
  console.log(imgSlider.getAttribute('src'))
}

function  nextPic(){
  index = index + 1

  if(index === pics.length){
    index = 0
  }
  imgSlider.setAttribute('src', pics[index])
  console.log(imgSlider.getAttribute('src'))
}

next.addEventListener('click',nextPic) 
prev.addEventListener('click',prevPic)
setInterval(nextPic, 3000);





















// const $ = document;
// const prev = $.querySelector(".prev");
// const next = $.querySelector(".next");
// let sliderItem = $.querySelectorAll(".slider-item");
// let index = 0;
// // console.log(sliderItem);

// function prevItem() {
//     index--
//     sliderItem[index + 1].classList.remove('active')
//     if (index < 0) {
//         index = sliderItem.length - 1
//     }
//     sliderItem[index].classList.add('active')
//     console.log(index);
// }
// function nextItem() {
//   index++;
//   sliderItem[index - 1].classList.remove('active')
//   if (index > sliderItem.length - 1) {
//     index = 0;
//   }
//   sliderItem[index].classList.add("active");
// }

// setInterval(nextItem , 4000)
// prev.addEventListener("click", prevItem);
// next.addEventListener("click", nextItem);

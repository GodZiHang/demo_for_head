// document.getElementById('swiper-button-left').addEventListener("click", ChangeImg2Left)
// document.getElementById('swiper-button-right').addEventListener("click", ChangeImg2Right)
//
// var index = 0;
// //改变图片
// function ChangeImg() {
//     index++;
//     let a = document.getElementsByClassName("img-slide");
//     if(index>=a.length) index=0;
//     for(let i=0; i<a.length; i++){
//         a[i].style.display='none';
//     }
//     a[index].style.display='block';
//     console.log(index)
// }
//
// setInterval(ChangeImg,2000);
//
// function ChangeImg2Right(){
//     console.log('ChangeImg')
// }
//
// function ChangeImg2Left() {
//     console.log('ChangeImg')
// }

goal = document.getElementsByName("swiper-bind")
console.log(goal.length)
function ChangeImgTo(goal) {
    console.log('Change to image' + goal)
}
let counter = 0;
let catName1 = "Sleepy";
let catName2 = "Sunny";
// let likedCount = document.getElementById('likedCount');
const catPic = document.getElementById('catPic');
document.getElementById('catName1').textContent = catName1 ;
catPic.addEventListener('click', function(){
   counter++;
   document.getElementById('likedCount').textContent = counter;
}, false);

let counter2 = 0;
// let likedCount = document.getElementById('likedCount');
const catPic2 = document.getElementById('catPic2');
document.getElementById('catName2').textContent = catName2 ;
catPic2.addEventListener('click', function(){
   counter2++;
   document.getElementById('likedCount2').textContent = counter2;
}, false);

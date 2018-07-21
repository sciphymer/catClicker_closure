
let catList = ["Sleepy","Sunny","Cutey","Licky","Lazy"];
const menu = document.getElementById('catlistmenu');
const catName = document.getElementById('catName');
const catPic = document.getElementById('catPic');
const likedCount = document.getElementById('likedCount');
const imgPath = "img/";
let allCats=[];

function Cat(name) {
	this.name = name;
	this.counter = 0;
	this.img = imgPath + name.toLowerCase() + ".jpg";
}

var menulist = document.createElement('ul');

catList.forEach(function(cat,index){
	allCats.push(new Cat(cat));
	var item = document.createElement('li');
	item.textContent = allCats[index].name;
	menulist.appendChild(item);
	menu.appendChild(menulist);
	item.addEventListener('click', function(){
		catName.textContent = allCats[index].name;
		catPic.setAttribute("src",allCats[index].img);
		likedCount.textContent = allCats[index].counter;

// 		catPic.addEventListener('click', function(){
// 				likedCount.textContent = allCats[index].counter++;
// 		});
		catPic.addEventListener('click', (function(i_cat){
			return function(){
				likedCount.textContent = i_cat[index].counter++;
			};
		})(allCats));
	});
});

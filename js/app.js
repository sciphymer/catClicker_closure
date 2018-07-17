
let catList = ["Sleepy","Sunny","Cutey","Licky","Lazy"];
let imgPath = "img/";
let allCats=[];

function Cat(name) {
	this.name = name;
	this.counter = 0;
	this.img = imgPath + name.toLowerCase() + ".jpg";
}

var menulist = document.createElement('ul');

catList.forEach(function(cat,index){

	let menu = document.getElementById('catlistmenu');
	let item = document.createElement('li');

	allCats.push(new Cat(cat));
	item.textContent = allCats[index].name;
	menulist.appendChild(item);
	menu.appendChild(menulist);

	item.addEventListener('click', (function(i_cat){
		let catPic = document.getElementById('catPic');
		let catName = document.getElementById('catName');

		catName.textContent = i_cat.name;
		catPic.setAttribute("src",i_cat.img);
		// likedCount.textContent = i_cat.counter;
		catPic.addEventListener('click', (function(i_i_cat){

				let likedCount = document.getElementById('likedCount');
				// alert(i_cat);
				likedCount.textContent = i_i_cat.counter++;
				// console.log(counter);
		})(i_cat));
	})(allCats[index]));
});

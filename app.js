'use strict'

var recipe = document.getElementsByClassName('recipe')[0];

var recipe_li_arr = recipe.getElementsByTagName('li');
for (var li = 0; li < recipe_li_arr.length; li++){
  console.log('recipe', recipe_li_arr[li]);
  recipe_li_arr[li].addEventListener('click', checkList);
};

function checkList(e) {
  console.log('click', e.target);
  e.preventDefault();
  e.target.classList.toggle('strike');
  var check = e.target.getElementsByClassName('check');
  check[0].classList.toggle('show_check');
}

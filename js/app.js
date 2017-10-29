'use strict'

var recipe = document.getElementsByClassName('recipe')[0];

//add event listener to each li in the recipe list
var recipe_li_arr = recipe.getElementsByTagName('li');
for (var li = 0; li < recipe_li_arr.length; li++){
  console.log('recipe', recipe_li_arr[li]);
  recipe_li_arr[li].addEventListener('click', checkList);
};

function checkList(e) {
  console.log('click', e.target);
  e.preventDefault();
  var el_target = e.target;
  var el_tag = e.target.tagName;
  console.log('el_tag: ', el_tag);
  //if the item clicked was the span in the li
  //redirect the target tot eh li
  if (el_tag === 'SPAN'){
    el_target = el_target.closest('li');
  }
  console.log('el_target: ', el_target);
  var check = el_target.getElementsByClassName('check');
  check[0].classList.toggle('show_check');
  el_target.classList.toggle('strike');

}

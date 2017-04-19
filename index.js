let mouseClick = document.querySelector("body");
mouseClick.addEventListener("click", logEvent);

function logEvent() {
  console.log('event'); //event was in parenthasis without signle quotes
}

let totalPrice = 0;

//Adding tshirts and price to shopping cart
$('.shopCart').on('click', addToCart);

function addToCart() {
  console.log($(this).attr("id"));//This is showing the id of each shirt

  $.get(`http://localhost:3000/shirt/${$(this).attr("id")}`, function( data ) {
  let $ul = $('ul');
  let $li = $(`<li>${data.name} ${data.price}</li>`);
  $ul.append($li);
  let $shirtPrices = $('#totalPrice');
  let $pickles = data.price;
  totalPrice = totalPrice + parseInt($pickles);
  $shirtPrices.text(totalPrice);

    console.log(data.price);
  });
};

//$.get(`http://localhost:3000/shirt/${$(this).attr("id")}`, function( data ) 
//${data.name} ${data.price} replaced



//tshirt size changes in box
$('.submenuSize').on('click', changeSize);
function changeSize() {
  let $div = $('div');
  console.log($(this).text());
}

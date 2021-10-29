//Initial Ratting
const rattings = {
  sony:4.7,
  samsung:3.4,
  panasonic:3.9,
  phillips:2.4,
  lg:4.2
}

const startsTotal = 5;

//Run getRattings when DOM loads
document.addEventListener('DOMContentLoaded', getRattings);

//Form elements
const productSelect = document.getElementById('product-select');
const rattingControl = document.getElementById('ratting-control');

//Init product
let product;

//Product Select change
productSelect.addEventListener('change',(e) => {
  product = e.target.value;
  //Enable rattings
  rattingControl.disabled = false;
  rattingControl.value = rattings[product];
});

//Ratting control change
rattingControl.addEventListener('blur', (e) => {
  const ratting = e.target.value;

  //Check if under 5
  if (ratting>5 || ratting<1) {
    alert('Please rate 1-5');
    return;
  }

  //Check rattings
  rattings[product]  = ratting;

  getRattings();
});
//Get rattings
function getRattings() {
  for (let ratting in rattings) {
    //Get percetange
    const starPercentage = (rattings[ratting] / startsTotal) *100;

    //Round to nearest
    const starPercentageRounded = `${Math.round(starPercentage / 10) * 10}%`;

    //Set width of stars inner to percetange
    document.querySelector(`.${ratting} .stars-inner`).style.width = starPercentageRounded;

    //Add number rattings
    document.querySelector(`.${ratting} .number-rating`).innerHTML = rattings[ratting];
  }
}

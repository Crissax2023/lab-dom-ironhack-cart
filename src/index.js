// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span')
  const quantity = product.querySelector('.quantity input')
  //... your code goes here
  
  const producto = price.innerHTML * quantity.value
  const subtotal = product.querySelector('.subtotal span')

  subtotal.innerHTML = producto  

  return producto
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
  let productos = document.querySelectorAll('.product')
  let totval = 0

  for(let i = 0; i < productos.length; i++)
  {
    totval += updateSubtotal(productos[i])
  }
  // ITERATION 3
  //... your code goes here
  
  let total = document.querySelector("#total-value span");
  total.innerHTML = totval;
  
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  const tab = target.parentNode.parentNode
  tab.parentNode.removeChild(tab)
  
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);


    const remov = document.querySelector('btn-remove');
    for(let i = 0; i < remov.length; i++) {
      remov[i].addEventListener('click',function(e){
        removeProduct(e)
      })
    }
  //... your code goes here
});

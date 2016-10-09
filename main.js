// function forEach(array, callback){
//   for(var i=0; i<array.length; i++){
//     callback(array[i], i);     // console.log(array[i]);
//   }
// }
// var furniture = ['chair', 'desk', 'lamp']
//
// forEach(furniture, function (item, index){
//   console.log('Pick up from the store: ', index, item);
// });

// Question 1
//
items.forEach(function(item, index){

});

var itemss = items.reduce(function(par1,product){
  return par1 + product.price;
}, 0);

var answerOne = (itemss/items.length).toFixed(2)
console.log(answerOne);
//
// // Question 2
//
var titlesArray = items.filter(function(product) {
  return product.price >= 14 && product.price <= 18;
});

titlesArray.forEach(function(product) {
  console.log(product.title);
});

// // // Question 3
// //
var gbpLabel = items.filter(function(product) {
  return product.currency_code == 'GBP'
});

gbpLabel.forEach(function(product) {
  console.log(product.title);
  console.log(product.price);
});

// Question 4

var mWood = items.filter(function(product) {
  // if (product.materials.indexOf('wood') != -1) {
    // num.materials.indexOf('wood')
  //   return num.title
  // // }
  if(product.materials.indexOf('wood') != -1){
    return true;
  }else{
    return false;
  }
});

console.log(mWood);

mWood.forEach(function(product) {
  console.log('wood stuff',product.title);
})

// Question 5

var materialsEight = items.filter(function(product) {
  return product.materials.length >= 8;
});

materialsEight.forEach(function(product) {
  console.log(product.title);
  console.log(product.materials);
})

// Question 6

var seller = items.filter(function(product) {
  return product.who_made == 'i_did'
});

seller.forEach(function(product) {
  console.log(seller.length, " were made by their sellers");
});

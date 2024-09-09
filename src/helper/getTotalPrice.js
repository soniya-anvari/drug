function getTotalPrice(products) {
  return products.reduce((total, product) => {
    console.log("p", typeof product.count);
    return total + product.cartQuantity * product.price;
  }, 0);
}

export default getTotalPrice;

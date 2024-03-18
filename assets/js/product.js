function createProduct(idProduct, imgProduct, nameProduct, oldPrice, currentPrice, brand, origin) {
    var product = new Object();

    product.idProduct=idProduct;
    product.imgProduct=imgProduct;
    product.nameProduct=nameProduct;
    product.oldPrice=oldPrice;
    product.currentPrice=currentPrice;
    product.brand=brand;
    product.origin=origin;

    return product;
}

function addItemToCart(idProduct){
   var listProduct=localStorage.getItem("listProduct");
   var data=JSON.parse(listProduct);
   
   for(var i=1; i<=data.length;i++){
        if(data[i-1].idProduct==idProduct){
            var currentProduct=data[i-1];
            var json=JSON.stringify(currentProduct);

            localStorage.setItem("currentProduct",json);
        }
    }
}



















      function priceCalculator(btnId, productQuantityId, productPrice, productRate) {

            const button = document.getElementById(btnId);
   
            button.addEventListener('click', function () {
   
               let productQuantity = document.getElementById(productQuantityId);
               let quantity = parseInt(productQuantity.value);
               if (btnId == 'plus-btn-1' || btnId == 'plus-btn-2') {
                  quantity++;
               } else if (btnId == 'minus-btn-1' || btnId == 'minus-btn-2') {
                  if (quantity > 0) { // to avoid negative quantity
                     quantity--;
                  }
               }
               document.getElementById(productQuantityId).value = quantity;
               document.getElementById(productPrice).innerText = productRate * quantity; //click area end
               
               // Final calculation area start
               let totalMobilePrice = parseFloat(document.getElementById("mobile-phone-price").innerText);
               let totalCoverPrice = parseFloat(document.getElementById("cover-price").innerText);
               let totalPrice = totalMobilePrice + totalCoverPrice;
               document.getElementById("total-price").innerText = totalPrice;
               let taxRate = 5; // If tax rate = 5% (can vary)
               document.getElementById("tax").innerText = Math.round(totalPrice * taxRate / 100);
               document.getElementById("grand-total").innerText = totalPrice + Math.round(totalPrice * taxRate /
                  100);
            });
         }
         priceCalculator('plus-btn-1', 'phone-quantity', "mobile-phone-price", 1219);
         priceCalculator('minus-btn-1', 'phone-quantity', "mobile-phone-price", 1219);
         priceCalculator('plus-btn-2', 'cover-quantity', "cover-price", 59);
         priceCalculator('minus-btn-2', 'cover-quantity', "cover-price", 59)
   



























      function priceCalculator(btnId, productQuantityId, productPrice, productRate) {
         const button = document.getElementById(btnId);
         button.addEventListener('click', function () {
            const quantity = parseFloat(document.getElementById(productQuantityId).value);
            let finalQuantity;
            if (btnId == 'plus-btn-1' || btnId == 'plus-btn-2') {
               finalQuantity = document.getElementById(productQuantityId).value = quantity + 1;
            } else if (btnId == 'minus-btn-1' || btnId == 'minus-btn-2') {
               if (quantity > 0) { // to avoid negative quantity
                  document.getElementById(productQuantityId).value = quantity - 1;
               }
               finalQuantity = document.getElementById(productQuantityId).value;
            } 
            document.getElementById(productPrice).innerText = productRate * finalQuantity; //click area end

            // Final calculation area start
            let totalMobilePrice = parseFloat(document.getElementById("mobile-phone-price").innerText);
            let totalCoverPrice = parseFloat(document.getElementById("cover-price").innerText);
            let totalPrice = totalMobilePrice + totalCoverPrice;
            document.getElementById("total-price").innerText = totalPrice;
            let taxRate = 5; // If tax rate = 5% (can vary)
            document.getElementById("tax").innerText = Math.round(totalPrice * taxRate / 100);
            document.getElementById("grand-total").innerText = totalPrice + Math.round(totalPrice * taxRate /
            100);
         });
      }
      priceCalculator('plus-btn-1', 'phone-quantity', "mobile-phone-price", 1219);
      priceCalculator('minus-btn-1', 'phone-quantity', "mobile-phone-price", 1219);
      priceCalculator('plus-btn-2', 'cover-quantity', "cover-price", 59);
      priceCalculator('minus-btn-2', 'cover-quantity', "cover-price", 59)



























      // function incrementValue(btnId, productQuantityId, productPrice, productRate) {
      //    const plusBtn = document.getElementById(btnId);
      //    plusBtn.addEventListener('click', function () {
      //       const quantity = parseFloat(document.getElementById(productQuantityId).value);


      //       const finalQuantity = document.getElementById(productQuantityId).value = quantity + 1;
      //       document.getElementById(productPrice).innerText = productRate * finalQuantity;
      //    });
      // }
      // incrementValue('plus-btn', 'product-quantity', "mobile-phone-price", 1219)


      // function decrementValue(btnId, productQuantityId, productPrice, productRate) {
      //    const plusBtn = document.getElementById(btnId);
      //    plusBtn.addEventListener('click', function () {
      //       const quantity = parseFloat(document.getElementById(productQuantityId).value);

      //       if (quantity > 0) {
      //          document.getElementById(productQuantityId).value = quantity - 1;
      //       }
      //       const finalQuantity = document.getElementById(productQuantityId).value;
      //       document.getElementById(productPrice).innerText = productRate * finalQuantity;
      //    });
      // }
      // decrementValue('minus-btn', 'product-quantity', "mobile-phone-price", 1219)





      // const plusBtn = document.getElementById('plus-btn');
      // plusBtn.addEventListener('click', function () {
      //    const quantity = parseFloat(document.getElementById('product-quantity').value);
      //    const finalQuantity = document.getElementById('product-quantity').value = quantity + 1; 
      //    document.getElementById('sell-price').innerText = 1219 * finalQuantity;
      // });

      // const minusBtn = document.getElementById('minus-btn');
      // minusBtn.addEventListener('click', function () {
      //    const quantity = parseFloat(document.getElementById('product-quantity').value);
      //    if(quantity>0) {
      //    document.getElementById('product-quantity').value = quantity - 1;}
      //    const finalQuantity =  document.getElementById('product-quantity').value;
      //    document.getElementById('mobile-phone-price').innerText = 1219 * finalQuantity;

      // });
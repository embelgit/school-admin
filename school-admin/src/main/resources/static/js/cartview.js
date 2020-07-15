//this function load the product stored in cookie and show in cart.html
$(function() {
	
				var  cartSubTotal =0;
				var cartobj =  JSON.parse($.cookie("product-cookie"));
				
				//show cart product count
				var element = $('<span>'+cartobj.length+'</span>');
				$("#showCartItemCount").append(element);
				
				var element1 = $('<span>'+cartobj.length+'</span>');
				$("#showCartItemCount2").append(element1);
				
				
				$.each(cartobj,function(index, value) {
				
				//calculate total subtotal in cart 
				var totalprice=value.price * value.quantity;
				cartSubTotal=Number(cartSubTotal)+ Number(totalprice);

				var element = $('<tr>'
						+ '<td class="product-col"><img src="'+value.imagePath+'" alt="">'
						+ '<div class="p-title">'
						+ '<h5>'
						+ value.productname
						+ '</h5>'
						+ '<h6>'
						+ value.category
						+ '</h6>'
						+ '</div>'
						+ '</td>'
						+ '<td class="price-col"><i class="fas fa-rupee-sign"></i> '
						+ value.price
						+ '</td>'
						+ '<td class="quantity-col">'
						+ '<div class="pro-qty">'
						+ '<span class="dec catqtybtn btn-cart-update-qty-sub" id="sub " data-price="' + value.price + '" data-productid="' + value.productid + '"'
						+ value.id
						+ '">-</span>'
						+ '<input type="text" id="quantity'+value.productid+'" value="'+value.quantity+'" readonly>'
						+ '<span class="inc catqtybtn btn-cart-update-qty-add" id="add "  data-price="' + value.price + '"  data-productid="' + value.productid +'"' 
						+ value.id
						+ '">+</span>'
						+ '</div>'
						+ '</td>'
						+ '<td class="total"><i class="fas fa-rupee-sign"></i> <span class="total-proce"  id="totalak'+value.productid+'">'+value.total+'</span></td>'
						+ '<td class="product-close btn-cart-close text-center" data-productid='+ value.productid+'>x</td>'
						+ '</tr>');

	

				$("#showCartProduct").append(
						element);
				
				
			});
				
				
				//SHOW CART SUB-TOTAL
				var elementCartSubTotal = $('<span>'+Number(cartSubTotal)+'</span>');
				$("#showCartSubTotal").append(
						elementCartSubTotal);	
				//SHOW CART TOTAL
				var elementCartTotal = $('<span>'+Number(cartSubTotal)+'</span>');
				$("#showCartTotal").append(
						elementCartTotal);
				
				

			//------------------------------------------------------------------------------------------------------	
				
				// This function increment quantity and update quantity in cart (cookie)
				$('#showCartProduct').on('click', '.btn-cart-update-qty-add', function(e){

					var productid = $(this).data("productid");
					var price = $(this).data("price");
					var quantity=$('#quantity'+productid).val();

					if(quantity<10)
					{
						quantity++
						
						$('#quantity'+productid).val(function() {
								
						        return quantity;
						    });
						

						var tot=quantity*price;
						$('#totalak'+productid).text(tot);

						var jsonObj = JSON.parse($.cookie("product-cookie"));
						
						for (var i = 0; i < jsonObj.length; i++)
						{
							  if (jsonObj[i].productid == productid) {  //product id to change quantity
							    jsonObj[i].quantity = quantity;			// change quantity
							    var tot=quantity*price
							    jsonObj[i].total = tot;	
							    $.removeCookie('product-cookie');

							    var cdata=[]
							    $.each(jsonObj,function(key, value) {
									
										cdata.push(value)
									
								});
								var date = new Date();
								date.setTime(date.getTime() + (24 * 60 * 60 * 1000));

								$.cookie("product-cookie",JSON.stringify(cdata), {
									expires : date
								});
								
							    break;
							  }
							}
						
					}	
					else
						{
							alert("You can buy Max 10 Qty");
						}
					
						//CALCULATE TOTAL AND SUB TOTAL AFTER INCREMENT QUANTITY
						var incCartSubTotal=0;
						var cartobj = JSON.parse($.cookie("product-cookie"));
						$.each(cartobj,function(index, value) {
							
							//calculate total subtotal in cart 
							var totalprice=value.price * value.quantity;
							incCartSubTotal=Number(incCartSubTotal)+ Number(totalprice);
						});
						
						//SHOW CART SUB-TOTAL
						$("#showCartSubTotal").empty();
						var elementCartSubTotal = $('<span>'+Number(incCartSubTotal)+'</span>');
						$("#showCartSubTotal").append(
								elementCartSubTotal);	
						//SHOW CART TOTAL
						$("#showCartTotal").empty();
						var elementCartTotal = $('<span>'+Number(incCartSubTotal)+'</span>');
						$("#showCartTotal").append(
								elementCartTotal);
						


				});
				
				
				
				// This function decrement quantity and update quantity in cart (cookie)
				$('#showCartProduct').on('click', '.btn-cart-update-qty-sub', function(e){
				//$(".btn-cart-update-qty-sub").click(function() {

					var productid = $(this).data("productid");
					var price = $(this).data("price");
					var quantity=$('#quantity'+productid).val();
					quantity--
					if(Number(quantity)<=0)
					{
						quantity=1
					}
					$('#quantity'+productid).val(function() {
					        return quantity;
					    });
					
					var tot=quantity*price;
					$('#totalak'+productid).text(tot);
					
					var jsonObj = JSON.parse($.cookie("product-cookie"));
					
					for (var i = 0; i < jsonObj.length; i++) {
						
						  if (jsonObj[i].productid == productid) {  //product id to change quantity
						    jsonObj[i].quantity = quantity;			// change quantity
						    var tot=quantity*price
						    jsonObj[i].total = tot;	
						    
						    $.removeCookie('product-cookie');

						    var cdata=[]
						    $.each(jsonObj,function(key, value) {
								
									cdata.push(value)
								
							});
							var date = new Date();
							date.setTime(date.getTime() + (24 * 60 * 60 * 1000));

							$.cookie("product-cookie",JSON.stringify(cdata), {
								expires : date
							});
							
						    
						    
						    break;
						  }
						}
					
					
						//CALCULATE TOTAL AND SUB TOTAL AFTER DECREMENT QUANTITY
						var decCartSubTotal=0;
						var cartobj = JSON.parse($.cookie("product-cookie"));
						$.each(cartobj,function(index, value) {
							
							//calculate total subtotal in cart 
							var totalprice=value.price * value.quantity;
							decCartSubTotal=Number(decCartSubTotal)+ Number(totalprice);
						});
						
						//SHOW CART SUB-TOTAL
						$("#showCartSubTotal").empty();
						var elementCartSubTotal = $('<span>'+Number(decCartSubTotal)+'</span>');
						$("#showCartSubTotal").append(
								elementCartSubTotal);	
						//SHOW CART TOTAL
						$("#showCartTotal").empty();
						var elementCartTotal = $('<span>'+Number(decCartSubTotal)+'</span>');
						$("#showCartTotal").append(
								elementCartTotal);


				});
				
				
				
			//-------------------------------------------------------------------------------------------------------	
			// delete json element or product from cart
			$('#showCartProduct').on('click', '.btn-cart-close', function(e){

						//alert("close");
						var productid = $(this).data("productid");
						var jsonObj = JSON.parse($.cookie("product-cookie"));
				    
					    $.removeCookie('product-cookie');

					    var cdata=[]
					    $.each(jsonObj,function(key, value) {
							
					    	if(value.productid !=productid)
					    	{
					    		cdata.push(value)
					    	}
					    
					    	
						});
						var date = new Date();
						date.setTime(date.getTime() + (24 * 60 * 60 * 1000));

						$.cookie("product-cookie",JSON.stringify(cdata), {
							expires : date
						});
						    
						
						//----------------------------------------
						
						$("#showCartProduct").empty();
						var cartobj =  JSON.parse($.cookie("product-cookie"));
						
						$.each(cartobj,function(index, value) {
											
						var element = $('<tr>'
								+ '<td class="product-col"><img src="'+value.imagePath+'" alt="">'
								+ '<div class="p-title">'
								+ '<h5>'
								+ value.productname
								+ '</h5>'
								+ '<h6>'
								+ value.category
								+ '</h6>'
								+ '</div>'
								+ '</td>'
								+ '<td class="price-col"><i class="fas fa-rupee-sign"></i> '
								+ value.price
								+ '</td>'
								+ '<td class="quantity-col">'
								+ '<div class="pro-qty">'
								+ '<span class="dec catqtybtn btn-cart-update-qty-sub" id="sub " data-price="' + value.price + '" data-productid="' + value.productid + '"'
								+ value.id
								+ '">-</span>'
								+ '<input type="text" id="quantity'+value.productid+'" value="'+value.quantity+'">'
								+ '<span class="inc catqtybtn btn-cart-update-qty-add" id="add "  data-price="' + value.price + '"  data-productid="' + value.productid +'"' 
								+ value.id
								+ '">+</span>'
								+ '</div>'
								+ '</td>'
								+ '<td class="total"><i class="fas fa-rupee-sign"></i> <span class="total-proce"  id="totalak'+value.productid+'">'+value.total+'</span></td>'
								+ '<td class="product-close btn-cart-close text-center" data-productid='+ value.productid+'>x</td>'
								+ '</tr>');

			

						$("#showCartProduct").append(
								element);
					});
						
						//show cart bag 1	
						var cartobj =  JSON.parse($.cookie("product-cookie"));
						var element = $('<span>'+cartobj.length+'</span>');
						$("#showCartItemCount").append(element);
						
						//show cart bag 2
						var element1 = $('<span>'+cartobj.length+'</span>');
						$("#showCartItemCount2").append(element1);

						//CALCULATE TOTAL AND SUB TOTAL AFTER DELETE QUANTITY
						var delCartSubTotal=0;
						var cartobj = JSON.parse($.cookie("product-cookie"));
						$.each(cartobj,function(index, value) {
							
							//calculate total subtotal in cart 
							var totalprice=value.price * value.quantity;
							delCartSubTotal=Number(delCartSubTotal)+ Number(totalprice);
						});
						
						//SHOW CART SUB-TOTAL
						$("#showCartSubTotal").empty();
						var elementCartSubTotal = $('<span>'+Number(delCartSubTotal)+'</span>');
						$("#showCartSubTotal").append(
								elementCartSubTotal);	
						//SHOW CART TOTAL
						$("#showCartTotal").empty();
						var elementCartTotal = $('<span>'+Number(delCartSubTotal)+'</span>');
						$("#showCartTotal").append(
								elementCartTotal);
						//------------------------------------------
			});

});


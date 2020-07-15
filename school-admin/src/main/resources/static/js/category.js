//Ajax call to get product by category
$(function() {

	if (typeof $.cookie('product-cookie') !== 'undefined'){
	var cartobj =  JSON.parse($.cookie("product-cookie"));
	var element = $('<span>'+cartobj.length+'</span>');
	}
			
	$("#showCartItemCount").append(element);
	
	$("#select-product")
			.on(
					'click',
					'.my-selector',
					function() {
						var target = event.target;
						var catId = target.id;
						console.log(target.id);
						$
								.ajax({
									url : catId,
									contentType : "application/json",
									dataType : 'json',
									success : function(result) {
										// data=result;

										console.log(result);

										var el = $('#show');

										// empty this element first
										el.empty();

										// you can use jquery each to append all
										// new product
										$.each(result,function(index, value) {
															// if (value.type ==
															// 'normal') {
															console.log(value.text);

															// append every node
															// instead of
															// replacing it with
															// your markup
															$("#show").append(
																			'<div class="col-lg-3 col-sm-6 mix all">'
																					+ '<div class="single-product-item">'
																					+ '<figure>'
																					+ '<a href=/product/'
																					+ value.id
																					+ '><img title="Click Me" src='
																					+ value.imagePath
																					+ '></img></a>'
																					+ '<div class="product-text">'
																					+ '<span class="format text alignRight"></span>'
																					+ '<a href=/product/'
																					+ value.id
																					+ '> <h4 class="producth2" title="Click Me">'
																					+ value.productName
																					+ '</h4></a>'
																					+ '<h6 class="cat" title="Click Me">'
																					+ value.category
																					+ '</h6>'
																					+ '<h6 class="cat" hidden>'
																					+ value.fkCatId
																					+ '</h6>'
																					+ '<b class="packing pr-2">'
																					+ value.packing
																					+ '</b>'
																					+ '<b class="packing">'
																					+ value.unit
																					+ '</b>'
																					+ '<h6 class="manufacturer">'
																					+ value.manufacturer
																					+ '</h6>'																				
																					+ '<p title="Click Me">'
																					+ value.price
																					+ '</p>'
																					+ '</div>'
																					+ '<div class="product-content" align="center">'
																					+ '<div class="product-quantity">'
																					+ '<div class="pro-qty abc" id="qty'
																					+ value.id
																					+ '">'
																					+ '<span class="dec catqtybtn " id="sub " data-productid="' + value.id + '"'
																					+ value.id
																					+ '">-</span>' 
																					+ '<input type="text" id="quantityak'
																					+ value.id
																					+ '" value="1" readonly>'
																					+ '<span class="inc catqtybtn" id="add " data-productid="' + value.id +'"'
																					+ value.id
																					+ '">+</span>'
																					+ '</div>'
																					+ '</div>'
																					+ '<button type="button" class="primary-btn pc-btn btn-add-cart" id="addbtn'+ value.id + '" data-productid="' + value.id + '" data-productname="' + value.productName + '" data-cat="' + value.category + '"  data-price="' + value.price + '" data-imagepath="' + value.imagePath + '"  data-fkcategoryid="' + value.fkCatId + '" data-packing="' + value.packing + '" data-unit="' + value.unit + '" data-manufacturer="' + value.manufacturer + '" >Add to cart</button>' +
																					'</div>'
																					+ '</figure>'
																					+ '</div>'
																					+ '</div>');

															$(".abc").addClass("pro-qty");
															// }
														});
									}
								})
					});
});

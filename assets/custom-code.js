function extractNumbersFromString(str){const regex=/(\d+(\.\d+)?)/g;return(str.match(regex)||[]).join("")}setTimeout(()=>{offers_js()},1500);function offers_js(){$(".price.productitem__price").each(function(){var price=$(this).children(".price__current--min").attr("findreal_price"),compare=$(this).children(".price__current--max").attr("findcompare_price"),comp=parseFloat(extractNumbersFromString(compare)),pric=parseFloat(extractNumbersFromString(price)),save=Math.round((comp-pric)/comp*100);console.log(price,compare),$(this).children(".savemoney").text(save+"% off")}),document.querySelector(".site-header-cart-icon.site-header-cart-icon--svg").addEventListener("mouseenter",async function(){await cart_up_date(),document.querySelector(".cookie-overlay").style.display="block"}),document.querySelector(".site-header-cart-icon").addEventListener("mouseleave",function(){document.querySelector(".cookie-overlay").style.display="none"}),$("[data-variant-id]").on("click",function(event){event.preventDefault();var element=$(this),data_id=parseInt(element.attr("data-variant-id")),data={quantity:1,id:data_id};$.ajax({type:"POST",url:"/cart/add.js",data:JSON.stringify(data),contentType:"application/json",dataType:"json",success:function(response){console.log("Product added to cart:",response);var newHtml=`
      <button class="go-to-cart-class data-variant-id">
       <a href="/cart" class="cart_success" id="cart">Go to cart
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
            <g id="Complete">
              <g id="arrow-right">
                <g>
                  <polyline data-name="Right" fill="none" id="Right-2" points="16.4 7 21.5 12 16.4 17" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"></polyline>
                  <line fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" x1="2.5" x2="19.2" y1="12" y2="12"></line>
                </g>
              </g>
            </g>
          </svg>
        </a>
</button>`;element.replaceWith(newHtml),fetch("/cart.js").then(response2=>response2.json()).then(cartData=>{var totalcount=cartData.item_count;$(".site-header-cart--count").attr("data-header-cart-count",totalcount)}),$(".site-header-cart--count").addClass("visible");const cartElement=$(".cart_success");cartElement.on("click",function(event2){event2.preventDefault(),window.location.href="/cart"}),cartElement.addClass("go-to-cart-class data-variant-id"),setTimeout(()=>{cart_up_date()},1e3)},error:function(error){console.error("Error adding product to cart:",error)}})})}function cart_up_date(){var datacar="";$.getJSON("/cart.js",function(item){$(".bdySctn .body .msg").html(""),item.items.forEach(data=>{$(".bdySctn .body .msg").append(`
          <div class="cart-item-list">
            <div class="left-section">
              <img src="${data.image}" alt="${data.product_title}">
            </div>
            <div class="right-section">
            <h2>${data.product_title}</h2>
            <div class="right-bottom-section">
              <div class="item-desc">
                Qty:  ${data.quantity}
              </div>
              <div class="item-desc" product-get="${data.id}">
               \u20B9 ${data.price/100}.00
              </div>
            </div>
            </div>
      </div>`)})})}var ac=!1,stop_int=setInterval(()=>{$.getJSON("/cart.js",function(item){item.items.forEach(data=>{$("[data-variant-id]").each(function(){$(this).attr("href","/cart");var id=$(this).attr("data-variant-id");data.id==parseInt(id)&&($(`[data-variant-id="${data.id}"]`).html(`<a href="/cart" class="cart_success" >  Go to cart 
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
          <g id="Complete">
          <g id="arrow-right">
          <g>
          <polyline data-name="Right" fill="none" id="Right-2" points="16.4 7 21.5 12 16.4 17" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"></polyline>
          <line fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" x1="2.5" x2="19.2" y1="12" y2="12"></line>
          </g>
          </g>
          </g>
        </svg> </a>`),$(`[data-variant-id="${data.id}"]`).addClass("go-to-cart-class data-variant-id"))})})}),$(".cart-item-list").length==0?$(".bdySctn .msg").html('<div class="preloader"><div class="spinner"></div></div>'):ac=!0,$(".cart-item-list").length>0?$(".bdySctn .msg .empty-cart").remove():ac=!0},100);document.addEventListener("DOMContentLoaded",event=>{$(".cart-item-list").length==0?$(".bdySctn .msg").html('<p class="empty-cart">Your Cart is Empty!</p>'):cart_up_date()}),setTimeout(()=>{clearInterval(stop_int)},1e3);const successCallback=position=>{console.log(position)},errorCallback=error=>{console.log(error)};navigator.geolocation.getCurrentPosition(successCallback,errorCallback),$(".options-selection__option-values").on("change",function(){var selVariant=$(this).attr("data-variant-option-chosen-value"),$variantSelector=$("#variant-selector"),selectElement=$("#variant-selector"),selectedOption=$("#selectedOption"),priceElement=$(".price");selectElement.find("option").each(function(){if($(this).text()===selVariant){$(this).prop("selected",!0);const selectedOptionElement=selectElement.find("option:selected");var comparePrice=selectedOptionElement.attr("data-compare-price"),dataSalePrice=selectedOptionElement.attr("data-sale-price"),discountPercentag=(comparePrice-dataSalePrice)/comparePrice;const selectedValue=selectElement.val();selectedOption.text(`Selected Option: ${selectedValue}`),selectedOption.attr("var-img",selectedOptionElement.attr("variant-img")),selectedOption.attr("data-comp-price",selectedOptionElement.attr("data-compare-price")),selectedOption.attr("sale-price",selectedOptionElement.attr("data-sale-price"));var salePrice=$("#selectedOption").attr("sale-price"),imgSrc=$("#selectedOption").attr("var-img");$(".product-sticky-image img").attr("src",imgSrc);var PrevBeforePricing=$(".product-pricing"),productPricingModal=`<div class="product-pricing" aria-live="polite" data-product-pricing="" style="visibility: visible;">
  <div class="price product__price ">

    MRP:
    <div class="price__compare-at visible" data-price-compare-container="">
      <span class="visually-hidden">Original price</span>
      <span class="money price__compare-at--single" data-price-compare="" data=""> ${comparePrice}</span>
    </div>
    <div class="price__compare-at--hidden" data-compare-price-range-hidden="">

      <span class="visually-hidden">Original price</span>
      <span class="money price__compare-at--min" data-price-compare-min="">

      </span>
      -
      <span class="visually-hidden">Original price</span>
      <span class="money price__compare-at--max" data-price-compare-max="">

      </span>

    </div>
    <div class="price__compare-at--hidden" data-compare-price-hidden="">
      <span class="visually-hidden">Original price</span>
      <span class="money price__compare-at--single" data-price-compare="" data="">

      </span>
    </div>
    <div class="price__current   price__current--on-sale" data-price-container="" findcompare_price="174900"
      findcompare_at="200000">
      <span class="visually-hidden">Current price</span>
      <span class="money" data-price="">Price: ${dataSalePrice}<span id="DiscountPercentage">12% off</span></span>
      <span class="savemoney">

      </span>
    </div>

    <div class="price__current--hidden" data-current-price-range-hidden="">

      <span 2="" class="money price__current--min" data-price-min=""> </span>
      <span class="money price__current--max" data-price-max=""> </span>

    </div>
    <div class="price__current--hidden" data-current-price-hidden="">
      <span class="visually-hidden">Current price</span>
      <span class="money" data-price="">

      </span>
      <span class="savemoney">

      </span>
    </div>

    <div class="product__unit-price hidden" data-unit-price="">
      <span class="product__total-quantity" data-total-quantity=""></span> | <span
        class="product__unit-price--amount money" data-unit-price-amount=""></span> / <span
        class="product__unit-price--measure" data-unit-price-measure=""></span>
    </div>
  </div>

  <span class="prod-txt">Inclusive of all taxes</span>
  <form data-payment-terms-target="" style="display: none;"></form>

</div>`;PrevBeforePricing.replaceWith(productPricingModal),PrevBeforePricing.remove(),salePrice!==void 0&&priceElement.html(salePrice)}else $(this).prop("selected",!1)})}),$(document).ready(function(){const weightSelection=$("#variant-selector"),radioButtons=$(".options-selection__option-value-input");weightSelection.on("change",function(){var selectedValue=weightSelection.find("option:selected").text();radioButtons.each(function(){if($(this).val()==selectedValue){$(this).prop("checked",!0);var This_val=$(this).val();console.log("this value is ",This_val),console.log("Selected Value is ",selectedValue);var selectedOption=$("#selectedOption");const selectedOptionElement=$("#variant-selector").find("option:selected");var image_url=selectedOptionElement.attr("variant-img"),sale_price=selectedOptionElement.attr("data-sale-price"),comparePrice=selectedOptionElement.attr("data-compare-price"),selectedVariant=selectedOptionElement.attr("value");console.log("Selected Variant is you f*k is ",selectedVariant);const priceElement=$(".price");$(".product-sticky-image img").attr("src",image_url),$("#AddToCart_secondary").attr("vari-id",selectedVariant),$("#AddToCart_secondary").attr("type","button"),sale_price!==void 0&&priceElement.html(sale_price);var PrevBeforePricing=$(".product-pricing"),productPricingModal=`<div class="product-pricing" aria-live="polite" data-product-pricing="" style="visibility: visible;">
  <div class="price product__price ">

    MRP:
    <div class="price__compare-at visible" data-price-compare-container="">
      <span class="visually-hidden">Original price</span>
      <span class="money price__compare-at--single" data-price-compare="" data=""> ${comparePrice}</span>
    </div>
    <div class="price__compare-at--hidden" data-compare-price-range-hidden="">

      <span class="visually-hidden">Original price</span>
      <span class="money price__compare-at--min" data-price-compare-min="">

      </span>
      -
      <span class="visually-hidden">Original price</span>
      <span class="money price__compare-at--max" data-price-compare-max="">

      </span>

    </div>
    <div class="price__compare-at--hidden" data-compare-price-hidden="">
      <span class="visually-hidden">Original price</span>
      <span class="money price__compare-at--single" data-price-compare="" data="">

      </span>
    </div>
    <div class="price__current   price__current--on-sale" data-price-container="" findcompare_price="174900"
      findcompare_at="200000">
      <span class="visually-hidden">Current price</span>
      <span class="money" data-price="">Price: ${sale_price}<span id="DiscountPercentage">12% off</span></span>
      <span class="savemoney">

      </span>
    </div>

    <div class="price__current--hidden" data-current-price-range-hidden="">

      <span 2="" class="money price__current--min" data-price-min=""> </span>
      <span class="money price__current--max" data-price-max=""> </span>

    </div>
    <div class="price__current--hidden" data-current-price-hidden="">
      <span class="visually-hidden">Current price</span>
      <span class="money" data-price="">

      </span>
      <span class="savemoney">

      </span>
    </div>

    <div class="product__unit-price hidden" data-unit-price="">
      <span class="product__total-quantity" data-total-quantity=""></span> | <span
        class="product__unit-price--amount money" data-unit-price-amount=""></span> / <span
        class="product__unit-price--measure" data-unit-price-measure=""></span>
    </div>
  </div>

  <span class="prod-txt">Inclusive of all taxes</span>
  <form data-payment-terms-target="" style="display: none;"></form>

</div>`;PrevBeforePricing.replaceWith(productPricingModal),PrevBeforePricing.remove()}})})}),$(document).ready(function(){setTimeout(function(){console.log("yeh nhi aai !"),$(".cbb-frequently-bought-container").show()},3e3)});function QuickBuyBtnDesk(e){var productQuantity=parseInt($(".quantity-selector__input").val()),productVariantId=$(e).attr("prdvarid"),cartData={id:productVariantId,quantity:productQuantity};$.ajax({type:"POST",url:"/cart/add.js",data:cartData,dataType:"json",success:function(response){console.log("Item added to cart:",response),window.location.href="/checkout"},error:function(xhr,status,error){console.error("Error adding item to cart:",error)}})}$(document).ready(function(){$("#AddToCart").find("span.atc-button--text").text().trim()==="Sold out"&&$("#productPageQuickView").attr("disabled",!0).css({opacity:.5})}),$(document).ready(function(){$("#questionpopup").hide()}),$(document).ready(function(){$("#zip").on("input",function(){var zipCode=$(this).val().trim();/^[a-zA-Z0-9]{0,10}$/.test(zipCode)?console.log("Valid zip code"):($("#validation-point").css("display","block"),setTimeout(function(){$("#validation-point").css("display","none")},5e3),console.log("Invalid zip code"),$(this).val(zipCode.substring(0,10)))})}),setTimeout(function(){$("#product-validator").css("display","block")},1e3),window.location.href.includes("cart")&&$(document).on("click",".quantity-selector__button--plus",function(e){var plus_element=$(this),minus_element=plus_element.parents(".quantity-selector__wrapper").find(".quantity-selector__button--minus");disableButtons(),e.preventDefault();var inputField=plus_element.parents(".quantity-selector__wrapper").find(".quantity-selector__input"),variantId2=plus_element.attr("var-id"),avlQuantity=parseInt(inputField.val()),fixed_qty=10;avlQuantity>=10?(inputField.val(fixed_qty),plus_element.attr("disabled",!0),$("#simpl_buynow-button").attr("disabled","disabled"),setTimeout(function(){$("#simpl_buynow-button").removeAttr("disabled")},3e3),console.log("avl qty is",fixed_qty)):($("#simpl_buynow-button").attr("disabled","disabled"),setTimeout(function(){fetch("/cart.js").then(response=>response.json()).then(cartData=>{var matchingItem=cartData.items.find(item=>item.variant_id==variantId2);console.log("plus wala update !",matchingItem.quantity),setTimeout(()=>{plus_element.parents(".quantity-selector__wrapper").css({opacity:1,cursor:"pointer"}),minus_element.removeAttr("disabled"),plus_element.removeAttr("disabled")},3e3),$("#simpl_buynow-button").removeAttr("disabled")}).catch(error=>console.error("Error fetching cart data:",error))},2e3));var inputElement=plus_element.parents(".quantity-selector__wrapper").find(".quantity-selector__input");console.log("variant id is",variantId2,"input element is ",inputElement);function disableButtons(){minus_element.attr("disabled","disabled"),plus_element.attr("disabled","disabled"),plus_element.parents(".quantity-selector__wrapper").css({opacity:.5,cursor:"not-allowed"})}}),window.location.href.includes("cart")&&$(document).on("click",".quantity-selector__button--minus",function(e){var minus_element=$(this),plus_element=minus_element.parents(".quantity-selector__wrapper").find(".quantity-selector__button--plus");console.log("Minus element is ",minus_element,"plus element is ",plus_element),disabledButtons(),e.preventDefault();var inputField=minus_element.parents(".quantity-selector__wrapper").find(".quantity-selector__input"),variantId2=plus_element.attr("var-id");console.log("on minus element variant id is ",variantId2);var avlQuantity=parseInt(inputField.val()),fixed_qty=10;avlQuantity>=10?(inputField.val(fixed_qty),$("#simpl_buynow-button").attr("disabled","disabled"),console.log("avl qty is",fixed_qty)):($("#simpl_buynow-button").attr("disabled","disabled"),setTimeout(function(){fetch("/cart.js").then(response=>response.json()).then(cartData=>{var matchingItem=cartData.items.find(item=>item.variant_id==variantId2);console.log("idk!",matchingItem.quantity),setTimeout(()=>{plus_element.parents(".quantity-selector__wrapper").css({opacity:1,cursor:"pointer"}),minus_element.removeAttr("disabled"),plus_element.removeAttr("disabled")},3e3),$("#simpl_buynow-button").removeAttr("disabled")}).catch(error=>console.error("Error fetching cart data:",error))},2e3));var inputElement=plus_element.parents(".quantity-selector__wrapper").find(".quantity-selector__input");console.log("variant id is",variantId2,"input element is ",inputElement);function disabledButtons(){minus_element.attr("disabled","disabled"),plus_element.attr("disabled","disabled"),plus_element.parents(".quantity-selector__wrapper").css({opacity:.5,cursor:"not-allowed"})}}),window.location.href.includes("products")&&($(document).on("click",".quantity-selector__button--plus",function(e){e.preventDefault();var inputField=$(this).parents(".quantity-selector__wrapper").find(".quantity-selector__input"),variantId2=$(this).attr("var-id"),avlQuantity=parseInt(inputField.val()),below_qty=$(".quantity-input");console.log("below qty value is ",below_qty);var fixedQty=10;avlQuantity>=fixedQty?(inputField.val(fixedQty),below_qty.val(fixedQty),$(this).attr("disabled",!0),$("#simpl_buynow-button").prop("disabled",!0),$(".quantity-plus").prop("disabled",!0),console.log("Available quantity is",fixedQty),setTimeout(function(){$("#simpl_buynow-button").prop("disabled",!1)},3e3)):setTimeout(function(){fetch("/cart.js").then(response=>response.json()).then(cartData=>{var matchingItem=cartData.items.find(item=>item.variant_id==variantId2);console.log(matchingItem?matchingItem.quantity:"Item not found"),matchingItem&&(inputField.val(matchingItem.quantity),$("#simpl_buynow-button").prop("disabled",!1))}).catch(error=>console.error("Error fetching cart data:",error))},5e3)}),$(".quantity-selector__button--minus, .quantity-minus").click(function(e){$("#PlusButton").removeAttr("disabled"),$(".quantity-plus").prop("disabled",!1)}));var variantId,quantity;function get_var_qty(button){variantId=button.getAttribute("data-variant-id");var quantityInput=$(".quantity-selector__input"),quantity2=parseInt(quantityInput.val())||1;console.log("variantId is",variantId),console.log("Quantity is",quantity2),TriplePixel()}TriplePixel("AddToCart",{item:variantId,q:quantity});
//# sourceMappingURL=/s/files/1/0233/6459/9885/t/72/assets/custom-code.js.map?v=1706767378

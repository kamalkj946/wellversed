function getAttr(element,attribure){return element.getAttribute(attribure)}function wishlist_nodify(element){const item_id=getAttr(element,"item_id");let eventbtn=document.querySelectorAll(`[item_id="${item_id}"]`),svg=document.querySelectorAll(`[svgid="${item_id}"]`),labelid=document.querySelectorAll(`[labelid="${item_id}"]`);for(var i=0;i<svg.length;i++)svg[i].style.fill="pink",eventbtn[i].setAttribute("onclick","wislist_nodify_R(this)"),eventbtn[i].setAttribute("id","Added_to_wishlist"),labelid[i].setAttribute("for","Added_to_wishlist"),labelid[i].classList.add("Added_to_wishlist"),labelid[i].innerHTML="<img src='https://static1.hkrtcdn.com/hknext/static/media/common/variant/wishlist/ok.svg'><span>Added to wishlist <a href='https://wellversed.in/pages/wishlist'>View All</a></span>";const customer_id=getAttr(element,"customer_id"),customer_email=getAttr(element,"customer_email"),handel_item=getAttr(element,"handel_item");var productList=[],wishlist_items={customer_id,customer_email,handel_item,item_id};if(console.log("wishlist item id is"+wishlist_items.item_id),customer_id==""){let jsonResp,jsonRespArr,jsonRespArrStr;productList.push(wishlist_items);const currProductid=wishlist_items.item_id,productDataString=JSON.stringify(productList),localData=localStorage.getItem("wishlist_nodify");if(localData===null)localStorage.setItem("wishlist_nodify",productDataString);else if(localData){const oldProductData=localStorage.getItem("wishlist_nodify"),countProductData=(oldProductData.match(/item_id/g)||[]).length;oldProductData.includes(currProductid)==!1?(jsonResp=JSON.parse(oldProductData),jsonRespArr=jsonResp.concat(productList),jsonRespArrStr=JSON.stringify(jsonRespArr),localStorage.setItem("wishlist_nodify",jsonRespArrStr)):console.log("flase")}}else{post_API(customer_id,handel_item,customer_email,item_id);var retrieved_wish_count=$("#wishlist_counter").text();retrieved_wish_count==""&&(retrieved_wish_count="0");var wish_count=parseInt(retrieved_wish_count);wish_count++,$("#wishlist_counter").text(wish_count)}}function getAPI(customer_id,shop_url){var myHeaders=new Headers;myHeaders.append("Content-Type","application/json");var raw=JSON.stringify({customer_id}),requestOptions={method:"POST",headers:myHeaders,body:raw,redirect:"follow"},document_upload=[];fetch("https://makkpressapps.com/do_not_delete/fwdwishlist/get.php",requestOptions).then(response=>response.json()).then(result=>{result.forEach(div=>{fetch(shop_url+"/products/"+div.handle+".js").then(data=>data.json()).then(Get_product=>{console.log(Get_product);function currency(simbol){return new Intl.NumberFormat("en-US",{style:"currency",currency:"INR"}).format(simbol)}var str=currency(Get_product.price),sale_price=str.replace("\u20B9","");sale_price=parseFloat(sale_price.replace(",",""));var adjusted_sale_price=sale_price/100,formatted_sale_price=adjusted_sale_price.toLocaleString("en-IN",{style:"currency",currency:"INR"}),oge_str=currency(Get_product.compare_at_price),oge_price=oge_str.replace("\u20B9","");oge_price=parseFloat(oge_price.replace(",",""));var adjusted_oge_price=oge_price/100,formatted_oge_price=adjusted_oge_price.toLocaleString("en-IN",{style:"currency",currency:"INR"}),discountPercentage=Math.round((adjusted_oge_price-adjusted_sale_price)/adjusted_oge_price*100);console.log("Formatted Comp. Price : "+formatted_oge_price),console.log("Formatted Sale. Price: "+formatted_sale_price),console.log("discount percentage is "+discountPercentage);var variants=Get_product.variants,variantId;variants.length>0?(variantId=variants[0].id,console.log("First Variant ID:",variantId)):console.log("No variants found."),document_upload.unshift(`
<li id="" class="item grid__item" list="${Get_product.id}">
<div class="close-list-n" onclick="wishlist_nodicy_close(this)" item_id="${Get_product.id}" >X</div>
  <div class="card-wrapper product-card-wrapper underline-links-hover">
    <div class=" card card--standard card--media" <div class="card__inner color-background-2 gradient ratio">
      <div class="card__media">
         <div></div>
        <div class="media--hover-effect">
          <img src="${Get_product.featured_image}" alt="" class="motion-reduce" loading="lazy" width="800"
            height="1200">
        </div>
      </div>
    </div>
    
    <div class="card__content">
      <div class="card__information">
        <h3 class="card__heading h5">
          <a href="${Get_product.id}" id="" class="full-unstyled-link">
            ${Get_product.title}
          </a>
        </h3>
            <div class="price__sale">
            <div class="sale-price-design">
             <span class="visually-hidden visually-hidden--inline">Sale price</span>
            <span class="price-item price-item--sale price-item--last">
              <span price-main>${formatted_sale_price}</span>
            </span>
            </div>
            <div class="regular-price-design">
             <span class="visually-hidden visually-hidden--inline">Regular price</span>
            <span>
              <s class="price-item price-item--regular">
                <span compare_at_price-main>${formatted_oge_price}</span>
              </s>
            </span>
            </div>
            <div class="discount-design">
           <span id="discount">${discountPercentage}%</span>
           </div>
          </div>
          
            <!-- <small class="unit-price caption hidden">
              <span class="visually-hidden">Unit price</span>
              <span class="price-item price-item--last">
                <span></span>
                <span aria-hidden="true"></span>
                <span class="visually-hidden">&nbsp;per&nbsp;</span>
                <span>
                </span>
              </span>
            </small> -->
            
          </div>
        </div>

      </div>
    </div>
    <div class="card__badge bottom left"><span id="Badge-template--18689940652307__featured_collection-8249586942227"
        class="badge badge--bottom-left color-accent-2">Sale</span></div>
  </div>
<div class="AddToCartWishlist productitem--action atc--button" var-id="${variantId}"><button id="AddToWishlistBtn" class="go-to-cart-class data-variant-id"  var-id="${variantId}" onclick="AddToCartWishlist(this);">Add to Cart</button></div>
  </div>
  </div>
    
</li>
`);const newProductData=`${document_upload.join("")}`;document.querySelector("#wishlist_nodify_fifty_eight").innerHTML=newProductData})})}).catch(error=>console.log("error",error))}function post_API(customer_id,handel_item,customer_email,item_id){var myHeaders=new Headers;myHeaders.append("Content-Type","application/json");var raw=JSON.stringify({customer_id,product_handel:handel_item,email_id:customer_email,item_id}),requestOptions={method:"POST",headers:myHeaders,body:raw,redirect:"follow"};fetch("https://makkpressapps.com/do_not_delete/fwdwishlist/post.php",requestOptions).then(response=>response.text()).then(result=>console.log(result)).catch(error=>console.log("error",error))}function wislist_nodify_R(element){const item_id=getAttr(element,"item_id");let eventbtn=document.querySelectorAll(`[item_id="${item_id}"]`),svg=document.querySelectorAll(`[svgid="${item_id}"]`),labelid=document.querySelectorAll(`[labelid="${item_id}"]`);for(var i=0;i<svg.length;i++)svg[i].style.fill="#fff",eventbtn[i].setAttribute("onclick","wishlist_nodify(this)"),eventbtn[i].setAttribute("id","Add_to_wishlist"),labelid[i].setAttribute("for","Add_to_wishlist"),labelid[i].classList.add("Add_to_wishlist"),labelid[i].innerText="Add to wishlist";const customer_id=getAttr(element,"customer_id"),customer_email=getAttr(element,"customer_email"),handel_item=getAttr(element,"handel_item");if(customer_id==""){const greetings=JSON.parse(localStorage.getItem("wishlist_nodify"));for(var i=0;i<greetings.length;i++)document.querySelector(`[item_id="${greetings[i].item_id}"]`).style.background="pink",greetings[i].item_id==item_id&&(greetings.splice(i,1),localStorage.wishlist_nodify=JSON.stringify(greetings));document.querySelector(`[item_id="${item_id}"]`).removeAttribute("style")}else delete_API(customer_id,item_id),document.querySelector(`[item_id="${item_id}"]`).removeAttribute("style");var wish_count=parseInt($("#wishlist_counter").text());wish_count--,wish_count!=0?$("#wishlist_counter").text(wish_count):$("#wishlist_counter").text("")}function wishlist_nodicy_close(id){var customer_id=document.querySelector("shop[customer_id]").getAttribute("customer_id");let item_id=getAttr(id,"item_id");if(customer_id==""){const greetings=JSON.parse(localStorage.getItem("wishlist_nodify"));for(var i=0;i<greetings.length;i++)greetings[i].item_id==item_id&&(greetings.splice(i,1),localStorage.wishlist_nodify=JSON.stringify(greetings));document.querySelector(`[list="${item_id}"]`).remove()}else delete_API(customer_id,item_id),document.querySelector(`[list="${item_id}"]`).remove();var wish_count=parseInt($("#wishlist_counter").text());wish_count--,wish_count!=0?$("#wishlist_counter").text(wish_count):$("#wishlist_counter").text("")}function delete_API(customer_id,item_id){var myHeaders=new Headers;myHeaders.append("Content-Type","application/json");var raw=JSON.stringify({customer_id,item_id}),requestOptions={method:"DELETE",headers:myHeaders,body:raw,redirect:"follow"};fetch("https://makkpressapps.com/do_not_delete/fwdwishlist/delete.php",requestOptions).then(response=>response.text()).then(result=>console.log(result)).catch(error=>console.log("error",error))}function loadproduct(){let page=location.pathname;const productData=JSON.parse(localStorage.getItem("wishlist_nodify"));var document_upload=[];if(page=="/pages/wishlist"){var shop_url=document.querySelector("shop[url]").getAttribute("url"),customer_id=document.querySelector("shop[customer_id]").getAttribute("customer_id");customer_id==""||customer_id==null?JSON.parse(localStorage.getItem("wishlist_nodify"))?.map(items=>{fetch(shop_url+"/products/"+items.handel_item+".js").then(data=>data.json()).then(Get_product=>{var sale_price=Get_product.price,org_price=Get_product.compare_at_price;document_upload.unshift(`
<li id="" class="item grid__item" list="${Get_product.id}">
<div class="close-list-n" onclick="wishlist_nodicy_close(this)" item_id="${Get_product.id}" >close</div>
  <div class="card-wrapper product-card-wrapper underline-links-hover">
    <div class=" card card--standard card--media" <div class="card__inner color-background-2 gradient ratio">
      <div class="card__media">
        <div class="media--hover-effect">
          <img src="${Get_product.featured_image}" alt="" class="motion-reduce" loading="lazy" width="800"
            height="1200">
        </div>
      </div>
    </div>
    <div class="card__content">
      <div class="card__information">
        <h3 class="card__heading h5">
          <a href="${Get_product.id}" id="" class="full-unstyled-link">
            ${Get_product.title}
          </a>
        </h3>
        <div class="price  price--on-sale ">
          <div class="price__container">
            <div class="price__regular">
              <span class="visually-hidden visually-hidden--inline">Regular price</span>
              <span class="price-item price-item--regular" style="display:none;">
                \u20B9. ${Get_product.price}
              </span>
            </div>
            <div class="price__sale">
              <span class="visually-hidden visually-hidden--inline">Regular price</span>
              <span>
                <s class="price-item price-item--regular">\u20B9. ${Get_product.compare_at_price}</s>
              </span><span class="visually-hidden visually-hidden--inline">Sale price</span>
              <span class="price-item price-item--sale price-item--last">
                \u20B9. ${Get_product.price}
              </span>
            </div>
            <small class="unit-price caption hidden">
              <span class="visually-hidden">Unit price</span>
              <span class="price-item price-item--last">
                <span></span>
                <span aria-hidden="true">/</span>
                <span class="visually-hidden">&nbsp;per&nbsp;</span>
                <span>
                </span>
              </span>
            </small>
          </div>
        </div>

      </div>
    </div>
    <div class="card__badge bottom left"><span id="Badge-template--18689940652307__featured_collection-8249586942227"
        class="badge badge--bottom-left color-accent-2">Sale</span></div>
  </div>
  </div>
  </div>
</li>
`);const newProductData=`${document_upload.join("")}`;document.querySelector("#wishlist_nodify_fifty_eight").innerHTML=newProductData})}):getAPI(customer_id,shop_url),getAPI(customer_id,shop_url)}}document.addEventListener("DOMContentLoaded",function(event){loadproduct(),$(".site-header_account-link-text").eq(0).text()=="Profile"?JSON.parse(localStorage.getItem("wishlist_nodify")).map(items=>{let eventbtn=document.querySelectorAll(`[item_id="${items.item_id}"]`),labelid=document.querySelectorAll(`[labelid="${items.item_id}"]`),svg=document.querySelectorAll(`[svgid="${items.item_id}"]`);for(var i=0;i<svg.length;i++)svg[i].style.fill="pink",eventbtn[i].setAttribute("onclick","wislist_nodify_R(this)"),eventbtn[i].setAttribute("id","Added_to_wishlist"),labelid[i].setAttribute("for","Added_to_wishlist"),labelid[i].classList.add("Added_to_wishlist"),labelid[i].innerText="Added to wishlist"}):$.ajax({type:"POST",url:"https://makkpressapps.com/do_not_delete/fwdwishlist/get.php",data:{customer_id:$("figer").eq(0).attr("customer_id")},success:function(response){response.map(items=>{let eventbtn=document.querySelectorAll(`[item_id="${items.item_id}"]`),labelid=document.querySelectorAll(`[labelid="${items.item_id}"]`),svg=document.querySelectorAll(`[svgid="${items.item_id}"]`);for(var i=0;i<svg.length;i++)svg[i].style.fill="pink",eventbtn[i].setAttribute("onclick","wislist_nodify_R(this)"),eventbtn[i].setAttribute("id","Added_to_wishlist"),labelid[i].setAttribute("for","Added_to_wishlist"),labelid[i].classList.add("Added_to_wishlist"),labelid[i].innerHTML="<img src='https://static1.hkrtcdn.com/hknext/static/media/common/variant/wishlist/ok.svg'><span>Added to wishlist <a href='https://shop-wellversed.myshopify.com/pages/wishlist'>View All</a></span>"})}})});function updateButtonsBasedOnCart(cartData){var DataItems=cartData.items;$(".go-to-cart-class").each(function(){for(var productVariantId=$(this).attr("var-id"),i=0;i<DataItems.length;i++)if(DataItems[i].variant_id==productVariantId){var newContent=`<button class="go-to-cart-class data-variant-id color-hai" style="background: #2eb4ac;">
                <a href="/cart" class="cart_success" id="cart" style="color: #fff; text-decoration: none;">Go to cart
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
                </button>`;$(this).replaceWith(newContent)}})}function fetchCartDataAndUpdateButtons(){fetch("/cart.js").then(response=>response.json()).then(cartData=>{updateButtonsBasedOnCart(cartData)})}setTimeout(function(){fetchCartDataAndUpdateButtons()},2e3);
//# sourceMappingURL=/s/files/1/0233/6459/9885/t/80/assets/wishlist_nodeify.js.map?v=1725945734

// const taxRate = 0.18;
// const shippingPrice = 15;
// const shippingFreePrice = 300;

window.addEventListener("load", ()=>{
    // localStorage.setItem("taxRate", taxRate);
    // localStorage.setItem("shippingPrice", shippingPrice);
    // localStorage.setItem("shippingFreePrice", shippingFreePrice);
    calculateCartPrice();

});

const productsDiv = document.querySelector(".products");
//Capturing ==> Static Parent ------> Children
productsDiv.addEventListener("click", (e)=>{
    //e.target vs. e.currentTarget
    // alert(e.target.tagName);
    // alert(e.currentTarget.className);
    if(e.target.className === "fa-solid fa-minus"){
        // alert("minus btn clicked");
        if(e.target.nextElementSibling.innerText > 1){
            e.target.nextElementSibling.innerText--;
            calculateProductPrice(e.target);
        }
        else{
            //innerText vs. textContent(whitespaces)
            if(confirm(`${e.target.closest(".product-info").querySelector("h2").innerText} will be removed!`)){
                e.target.closest(".product").remove();
            }
        }
        calculateCartPrice();
    }
    else if(e.target.classList.contains("fa-plus")){
        // alert("plus btn clicked");
        e.target.parentElement.querySelector(".quantity").innerText++;
        calculateProductPrice(e.target);
        calculateCartPrice();
    }
    else if(e.target.getAttribute("class") == "remove-product"){
        // alert("remove btn clicked");
        if(confirm(`${e.target.closest(".product-info").querySelector("h2").innerText} will be removed!`)){
            e.target.closest(".product").remove();
        }
        calculateCartPrice();
    }
    else{
        alert("other element clicked");
    }

});

const calculateProductPrice = (target) =>{
    //each product total calculation
    //productTotalPrice => quantity * price
    const productInfoDiv = target.closest(".product-info");
    console.log(productInfoDiv);
    //unit price
    //div.class vs. .class as performance
    const price = productInfoDiv.querySelector("div.product-price strong").innerText;
    //quantity
    const quantity = productInfoDiv.querySelector("p.quantity").innerText;
    productInfoDiv.querySelector("div.product-line-price").innerText = (price * quantity).toFixed(2);
}

const calculateCartPrice = () =>{
    //cart total calculation from all products
    
}





fetch('db.json')
    .then(function (response) {
      return response.json();
    })
    .then(function (productsData) {
      const productList = document.querySelector(".productsitem");
      const categoryLinks = document.querySelectorAll(".productsmenu ul li a");

      function updateProductList(category) {
        productList.innerHTML = ''; 

        productsData.products.forEach(function (product) {
          if (category === "ALL" || product.category.includes(category)) {
            var col = document.createElement("div");
            col.className = "prd";
            col.innerHTML = `
            <a href="prd.html?id=${product.id}">
              <img src="src/image/${product.primary_photo}" alt="Photo" style="max-width:100%;">
              <div class="prinfo">
                  <h2 class="prtitle">${product.name}</h2>
                  <p class="price">$${product.price}</p>
                  <a class="quick">QUICK LOOK  <i class="fa-solid fa-heart"></i></a>
                  <a href="#" class="addtocart" data-id="${product.id}">ADD TO CART</a>
              </div>
            </a>
          `;
            productList.appendChild(col);

            col.addEventListener("mouseenter", function () {
              var priceElement = col.querySelector(".price");
              var addToCartElement = col.querySelector(".addtocart");

              priceElement.style.transform = "translateX(50px)";
              priceElement.style.opacity = 0;

              addToCartElement.style.transform = "translateX(0px)";
              addToCartElement.style.opacity = 1;
            });

            col.addEventListener("mouseleave", function () {
              var priceElement = col.querySelector(".price");
              var addToCartElement = col.querySelector(".addtocart");

              priceElement.style.transform = "translateX(0px)";
              priceElement.style.opacity = 1;

              addToCartElement.style.transform = "translateX(-50px)";
              addToCartElement.style.opacity = 0;
            });
          }
        });
      }



      categoryLinks.forEach(function (link) {
        link.addEventListener("click", function (event) {
          event.preventDefault();

        
          categoryLinks.forEach(function (l) {
            l.classList.remove("activelink");
          });

        
          link.classList.add("activelink");

          
          const category = link.textContent;
          updateProductList(category);
        });
      });

  
      updateProductList("ALL");
    })
    .catch(function (error) {
      console.error("Error in data:", error);
    });

    




    


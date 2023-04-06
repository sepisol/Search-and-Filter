
//http://localhost:3000/items
const searchInput = document.querySelector("#search");
const productsDOM = document.querySelector(".products-center");
const btns = document.querySelectorAll ('.btn')
let allproductsdata=[];
const filters ={
    serachItems:"",
};
document.addEventListener("DOMContentLoaded",() => {
   axios
   .get("http://localhost:3000/items")
   .then((res)=>{
    allproductsdata = res.data;
    renderProducts(res.data,filters);
   })
   .catch((err) => console.log (err));
});
function renderProducts(_products, _filters) {
    const filteredProducts = _products.filter((p) => {
        return p.title.toLowerCase().includes(_filters.serachItems.toLowerCase());
        });
        productsDOM.innerHTML = "";
        console.log(
            
        );
        filteredProducts.forEach((item,index)=> {
            const productsDiv = document.createElement("div");
            productsDiv.classList.add("product");
            productsDiv.innerHTML=`
            <div class="img-container">
                    <img src=${item.image} alt="p-${index}"/>
                </div>
                <div class="product-desc">
                    <p class="product-price">${item.price} $</p>
                    <p class="product-title">${item.title}</p>`;
                    productsDOM.appendChild(productsDiv);
            

        });
}
searchInput.addEventListener("input" , (e) => {
    filters.serachItems = e.target.value;
    renderProducts(allproductsdata,filters);
});
btns.forEach((btn)=>{
    btn.addEventListener("click",(e) =>{
        const filter = e.target.dataset.filter;
        console.log(filter);
        filters.serachItems = filter;
        renderProducts(allproductsdata,filters);
    });
});
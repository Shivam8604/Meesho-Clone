const men = [
    {
        heading : "Top Wear ",
        data : ["All Top Wear","Tshirts","Shirts"]
    },
    {
        heading : "Bottom Wear",
        data : ["Track Pants","Jeans","Trousers"]
    },
    {
        heading : "Men Accessories",
        data : ["All Men Accessories","Watches","Belts","Wallets","Jewellery","Sunglasses","Bags"]
    },
    {
        heading : "Men Footewear ",
        data : ["Casual shoes","Sport Shoes","Sandals","Formal Shoes"]
    },
    {
        heading : "Ethnic Wear",
        data : ["Men Kurtas","Ethnic jackets"]
    },
    {
        heading : "Inner and Sleep Wear ",
        data : ["All inner and sleep wear","Vests"]
    },
];

let Men = document.getElementById("men");

function menFunc(){
    return men.map((el) => {
        let list = " ";
        list  = el.data.map((element) => `<p>${element}</p>`).join("");
        return `
        <div class="column">
            <h4>${el.heading}</h4>
            ${list}
            </div>
        `;
    }).join(" ")
}

Men.innerHTML = menFunc();
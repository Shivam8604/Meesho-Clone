const JewellaryAndAccessories = [
    {
        heading : "Jewellery",
        data : ["Jewellery Sets","Earrings","Mangalsutras","Studs","Bangles","Necklaces","Rings","Anklets"]
    },
    {
        heading : "Women Accessories",
        data : ["Bags","Watches","Hair Accessories","Sunglasses","Socks"]
    },
    
];

let Jewellary = document.getElementById("jewellery");
function JewellaryFunc(){
    return JewellaryAndAccessories.map((el) =>{
        let list = "";
        list = el.data.map((element) => `<p>${element}<p>`).join(" ");
        return `
        <div class="column">
           <h4>${el.heading}</h4>
           ${list}
           </div>
        `;
    }).join(" ")
}

Jewellary.innerHTML = JewellaryFunc();
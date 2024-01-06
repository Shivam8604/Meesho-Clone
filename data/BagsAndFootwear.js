const BagsAndFootwear = [
    {
        heading : "Womwen Bags",
        data : ["All Women Bags","Handbags","Clutches","Slingbags"]
    },
    {
        heading : "Men Bags",
        data : ["All Men Bags","Men Wallets"]
    },
    {
        heading : "Men Footwear",
        data : ["Sports Shoes","Casual Shoes","Formal Shoes","Sandals"]
    },
    {
        heading : "Women Footwear",
        data : ["Flats","Bellies","Juttis"]
    },
];

let bagsAndFootwear = document.getElementById("bags");
function bagsAndFootwearFunc() {
  return BagsAndFootwear.map((el) => {
    let list = "";
    list = el.data.map((element) => `<p>${element}<p>`).join(" ");
    return `
    <div class="column">
      <h4>${el.heading}</h4>
      ${list}
      </div>
    `;
  }).join("");
}
bagsAndFootwear.innerHTML = bagsAndFootwearFunc();
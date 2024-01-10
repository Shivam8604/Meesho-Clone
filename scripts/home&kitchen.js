const HomeAndKitchen = [
    {
        heading : "Home Furnishing",
        data : ["BedSheets","DoorMats","Curtains & Sheers","Cushion & Cushion Covers","Mattress Protector"]
    },
    {
        heading : "Home Decor",
        data : ["All Home Decor","Stickers","Clocks","Showpeices"]
    },
    {
        heading : "Kitchen & Dining",
        data : ["KItchen Storage","Cookwear & Bakewear"]
    },
];

let homeAndKitchen = document.getElementById("home");
function homeAndKitchenFunc() {
  return HomeAndKitchen.map((el) => {
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
homeAndKitchen.innerHTML = homeAndKitchenFunc();
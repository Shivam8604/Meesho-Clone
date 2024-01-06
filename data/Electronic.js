const Electronic = [
    {
        heading : "Mobiles & Accessories",
        data : ["All Mobiles & Accessories","Smartwatches","Mobiles & HOlders","Mobiles cases and covers"]
    },
    {
        heading : " Appliances",
        data : ["All Appliances","Grooming","Home Appliances"]
    }
];

let electronicType = document.getElementById("electronic");
function electronicFunc() {
  return Electronic.map((el) => {
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
electronicType.innerHTML = electronicFunc();
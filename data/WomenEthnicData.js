const WomenEthnic = [
  {
    heading: "All Women Ethnic",
    data: ["View All"],
  },
  {
    heading: "Sarees",
    data: [
      "All Sarees",
      "Silk Sarees",
      "Cotton Silk Sarees",
      "Cotton Sarees",
      "Georgette Sarees",
      "Chiffon Sarees",
      "Satin Sarees",
      "Embroidered Sarees",
    ],
  },
  {
    heading: "Kurtis",
    data: [
      "All Kurtis",
      "Anarkali Kurtis",
      "Rayon Kurtis",
      "Cotton Kurtis",
      "Embroidered Kurtis",
    ],
  },
  {
    heading: "Kurta Sets",
    data: ["All Kurta Sets"],
  },
  {
    heading: "Suits & Dress Material",
    data: [
      "All Suits & Dress Material",
      "Cotton Suits",
      "Embroidered Suits",
      "Chanderi Suits",
    ],
  },
  {
    heading: "Other Ethnic",
    data: ["Blouses", "Dupattas", "Lehanga", "Gown", "Ethnic Bottomwear"],
  },
];

let womenEthnic = document.getElementById("womenEthnic");
function womenEthnicFunc() {
  return WomenEthnic.map((el) => {
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
womenEthnic.innerHTML = womenEthnicFunc();

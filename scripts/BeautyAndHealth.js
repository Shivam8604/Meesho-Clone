const BeautyAndHealth = [
    {
        heading : "Make up",
        data : ["Face","Eye","Lips","Nails"]
    },
    {
        heading : "Wellness",
        data : ["Sanitizer","Oral Cara","Feminine Hygiene"]
    },
    {
        heading : "Skincare",
        data : ["Deodorants"]
    },
];

let beautyAndHealth = document.getElementById("beauty");
function beautyAndHealthFunc() {
  return BeautyAndHealth.map((el) => {
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
beautyAndHealth.innerHTML = beautyAndHealthFunc();
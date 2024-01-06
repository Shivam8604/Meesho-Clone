const WomenWestern = [
    {
        heading : "Topwear",
        data : ["Tops","Dresses","Sweaters","Jumpsuits"]
    },
    {
        heading : "Bottomwear",
        data : ["Jeans","Jeggings","Palazzos","Shorts","Skirts"]
    },
    {
        heading : "Innerwear",
        data : ["Bra","Briefs"]
    },
    {
        heading : "Sleepwear",
        data : ["Nightsuits","Babydolls"]
    },
];

let Womenwestern = document.getElementById("womenWestern");

function womenWesternFunc(){
    return WomenWestern.map((el) =>{
        let list = " ";
        list = el.data.map((element) => `<p>${element}</p>`).join("");
        return `
        <div class="column">
            <h4>${el.heading}</h4>
            ${list}
            </div>
        `;
    }).join()
}

Womenwestern.innerHTML = womenWesternFunc();
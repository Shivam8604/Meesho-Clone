const Kids = [
    {
        heading : " Boys & Girls 2+ year",
        data : ["Dresses"]
    },
    {
        heading : "Infants 0-2 Years",
        data : ["Rompers"]
    },
    {
        heading : "Toy & Accessories",
        data : ["Soft Toys","Footwear","Stationary","Watches","Bags & Backpacks"]
    },
    {
        heading : "Baby Care",
        data : ["All Baby Care"]
    },
];

let Kid = document.getElementById("kid");

function kidsFunc(){
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

Kid.innerHTML = kidsFunc();

function close() {
  let input = document.querySelector(".search");
  input.addEventListener("keydown", () => {
    if (input.value) {
      document.getElementById("close").style.display = "block";
    } else {
      document.getElementById("close").style.display = "none";
    }
  });
};
close();


//  user profile
function openLoginPage(){
  let userAccount = document.querySelector(".profileIcon");

userAccount.addEventListener('click',()=>{
    document.querySelector('#user').classList.toggle("open")
});
}
openLoginPage();

function cleanInput(){
  let closeBtn = document.getElementById("close");
  closeBtn.addEventListener("click", () =>{
    let input = document.getElementById("SearchInput");
    input.value = " ";
  })
};
cleanInput();

// create download source UI 

function downloadSource(){
  let source = document.querySelector("#downloadWay");
  let heading = document.createElement("h3").innerText = "Download From";
  let source1 = document.createElement("img");
  source1.src = "https://images.meesho.com/images/pow/playstore-icon-big.png";
  let source2 = document.createElement("img");
  source2.src = "https://images.meesho.com/images/pow/appstore-icon-big.png";
  console.log(source.append(heading , source1, source2));

};
downloadSource();
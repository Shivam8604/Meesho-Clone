
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


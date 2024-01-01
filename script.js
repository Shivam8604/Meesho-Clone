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

let userAccount = document.querySelector(".profileIcon");

userAccount.addEventListener('mouseenter',()=>{
    document.querySelector('#user').style.display = "block";
})

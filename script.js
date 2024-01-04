import BagsAndFootwear from './data/BagsAndFootwear';
import BeautyAndHealth from './data/BeautyAndHealth';
import electronic from './data/Electronic';
import HomeAndKitchen from './data/home&kitchen';
import JewellaryAndAccessories from './data/JewellaryAndAccessories';
import kids from './data/Kids';
import men from './data/Men';
import WomenWestern from './data/WomenWestern';
import WomenEthnic from './data/womenEthinc';



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

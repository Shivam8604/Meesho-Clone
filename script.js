let input = document.querySelector(".search");
console.log(input)

input.addEventListener('keydown', () =>{
    if(input.value){
        document.getElementById("close").style.display = "block";
    }else{
        document.getElementById("close").style.display = "none"
    }
});

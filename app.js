let add = document.getElementById("addition");
let reset = document.getElementById("reset");
let substraction = document.getElementById("substract");

//selected add sub with their id

//function will execute when clicked on addition button
add.addEventListener("click", function () {
  //every time add button is pressed this line will execute
  let output = document.getElementById("clicks");
  // in OP varaible selected span html element with their id  <span>0</span>
//   let result = output.innerText + 1;
  //this line is giving string and adding 1 every time clicked
  //but we wanr only number different every time.
  //so changed string to Number method to
  let result = Number(output.innerHTML)+1;
  output.innerHTML = result;
  //here value inside result var will be displayed using innerhtml method on webpage
});

reset.addEventListener("click",function(){
    let output = document.getElementById("clicks");
    let result = Number(output.innerHTML)-1;
    output.innerHTML=result;  
})

substraction.addEventListener("click",function(){
    let output = document.getElementById("clicks");
    let result = Number(output.innerHTML)-1;
    output.innerHTML=result;
});
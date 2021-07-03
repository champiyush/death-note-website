let count=0;
let count1=0;
let countEl=document.getElementById("count");
function increment(){
          count++;
          countEl.innerText=count;
}
function reset(){
          count=0
          countEl.innerText=count;
}
function leave(){
          count--;
          countEl.innerText=count;
}
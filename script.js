const input=document.getElementById("input-box");
const list = document.getElementById("list-container")
function Add(){
  if(input.value==''){
    alert("You must write something!")
  }
  else{
    let li=document.createElement("li");
    li.innerHTML=input.value;
    list.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML="\u00d7";
    li.appendChild(span);
  }
  input.value='';
  saveData();
}
list.addEventListener("click", function(event) {
  if (event.target.tagName === "LI") {
    event.target.classList.toggle("checked");
    saveData();
  } else if (event.target.tagName === "SPAN") {
    event.target.parentElement.remove();
    saveData();
  }
}, false);

function saveData() {
  localStorage.setItem("data",list.innerHTML);
}
function showList() {
  list.innerHTML=localStorage.getItem("data");
}
showList();
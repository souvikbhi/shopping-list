var input = document.querySelector("#input");
var button = document.querySelector("#enter");
var ul = document.querySelector("ul")

button.addEventListener("click", function(){
  if(input.value.length>0){
  liAdd();
  }

})

input.addEventListener("keypress", function(event){
  if(input.value.length>0 && event.which===13){
    liAdd();
  }
})


function liAdd(){
  var li = document.createElement("li")
  li.appendChild(document.createTextNode(input.value))
  ul.appendChild(li)
  input.value = "";
}

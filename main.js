const btn = document.getElementById("btn");

btn.addEventListener("click", function () {
  var name = document.getElementById("myName").value;
  alert("Name: " + name);
});
if ('seviceworker' in navigator) {
  window.addEventlistener('load', function){
    navigator.seviceworker.register('sw.js');
  }
}

function dokuz() {
  let text = "9";
  document.getElementById("input").innerText += text;
  console.log(text);
}
function sekiz() {
  let text = "8";
  if(document.getElementById("input").value == "0"){
     document.getElementById("input").innerText = text;
    } else{
        
        document.getElementById("input").innerText += text;
  }
 
  console.log(text);
}

//your JS code here. If required.
let btn=document.querySelector("input[type='button']")
let select=document.getElementById("colorSelect")
btn.addEventListener("click", function(){
	select.remove(select.selectedIndex)
});

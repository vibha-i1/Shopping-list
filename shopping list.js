
// For adding new itens to the list
var textarea= document.getElementById("userinput");
console.log(textarea);
var enterbutton= document.getElementById("enter");
console.log(enterbutton);
var oglist= document.querySelector("ul");
console.log(oglist);

function addanddelete() {
console.log(textarea.value);
	var li=document.createElement("li");
li.appendChild(document.createTextNode(textarea.value));
var deleteb= document.createElement("button");
deleteb.setAttribute("class", "deletebutton");
var text= "Delete";
deleteb.appendChild(document.createTextNode(text));
li.appendChild(deleteb)

oglist.appendChild(li);
		textarea.value="";
	
}
function addlistafterclick(){
	if(textarea.value.length>0); 
	{
		addanddelete()
	}
}
enterbutton.addEventListener("click", addlistafterclick, false);

function addlistafterkeypress() {

if (textarea.value.length>0 && event.which==13)
{
		addanddelete()
}

}
textarea.addEventListener("keypress", addlistafterkeypress , false);

	 // Striking out items from the list
var list= document.querySelectorAll("li");
console.log(list)

function strikeitem(e) {
	if(e.target.classList !="deletebutton")
	{console.log("it's working");
		e.target.classList.toggle("done");
	
}}
oglist.addEventListener("click", strikeitem, false);

// // Deleting items from the list
var list=document.querySelectorAll("li");



oglist.addEventListener("click", function(e) {
	if(e.target.classList=="deletebutton")
	{console.log("delete");
e.target.parentNode.remove();
}});
	

// Create new list// Delete all items

var newlistb= document.querySelector(".newlist");
console.log(newlistb);

function deleteallitems () {
	console.log("Delete all");
oglist.innerHTML="";
	
	
}






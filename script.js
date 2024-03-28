//your JS code here. If required.
const counterparagraph=document.getElementById('counter');
const incrementBtn=documnet.getElementById('Increment Button');
incrementBtn.addEventListner('click',function() {
	let currvalue=parseInt(counterparagraph.textContent);
	alert('un-incremented'+currvalue);
	currvalue++;
	counterparagraph.textContent=currvalue;
});
//Try Catch
function getData (){
    console.log("Downloading....");

    setTimeout(function(){
        console.log("Complete...");
    },3000)
}

getData();

try {
    returdata();
}
catch(error){
    console.log(`Function returndata() is not avilable`);
} finally {
    console.log("But downloading is in process");
}



///confirm
/*if(confirm("Are you sure")){
    console.log("Deleted");
}else{
    console.log("Nothing happens");
}
*/
let height, width;
height = window.outerHeight;
width = window.outerWidth;


//ccs 
/*
if(width > 1000){
    document.body.style.backgroundColor = 'red';
}else if(width>500){
    document.body.style.backgroundColor = 'blue';
}else{
    document.body.style.backgroundColor = 'green';
}
*/
//height = window.innerHeight;
//width = window.innerWidth;

console.log(height);
console.log(width);


//Location
let urlLocation = window.location;

console.log(urlLocation.hostname);
console.log(urlLocation.port);
console.log(urlLocation.protocol);
console.log(urlLocation.search);
//redirect via js
//window.location.href = 'http:/google.com';


console.log(urlLocation);
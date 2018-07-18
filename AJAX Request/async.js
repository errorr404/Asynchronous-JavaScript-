// when window load then it will fire the function
window.onload = function() {
// Method 1 :- Vanila Javascript
var http = new XMLHttpRequest(); // make a new XMLHttpRequest


// here we check the status and ready state of the data
// it will fire the function when ready state changed
http.onreadystatechange = function(){
  //console.log(http);
  if(http.readyState==4 && http.status==200)
  {
    // here JSON.parse change the response into object form

    //console.log(JSON.parse(http.response));
  }
};
http.open("GET","data/tweets.json",true);
/*
here in open we need three things
first:- Method ---- GET,POST..
second:- URL -- here we provide the data location
third:- synchronous or asynchronous -- true for async and false for sync
*/

http.send(); // now it will send the data
//console.log(http);

// Method 2 :- jquery
// .get method only needs the data location or URL and a callback function here data is passed to
// the get method and after that when data is returned it will passed to the call back function and
// then data is displayed to the callback function.. and it is async type
$.get("data/tweets.json", function(data){
  console.log(data);
});
};

window.onload = function(){
/*
  // var fruits = ["banana","mango","grapes"];
  // fruits.forEach(function(val){
  //   // here under the forEach method the function is called callback function
  //   console.log(val);
  // });

// // another method for declearing a callback function
//   function callback(val){
//     console.log(val);
//   }
//   fruits.forEach(callback);
*/
/*
// json callback function
function cb(data){
  console.log(data);
}
$.get("data/tweets.json",cb);
*/
/*
// make a ajax request in which first show the data of tweets and then freinds and then after vides file
$.ajax({
  type: "GET",
  url: "data/tweets.json",
  success: function(data){
    // on success it will fire this function
    console.log(data);

    $.ajax({
      type: "GET",
      url: "data/friends.json",
      success: function(data){
        console.log(data);

        $.ajax({
          type: "GET",
          url: "data/videos.json",
          success: function(data){
            console.log(data);
          },
          errorr: function(jqXHR,textStatus,error) {
            console.log(error);
          }
        });
      },
      errorr: function(jqXHR,textStatus,error) {
        console.log(error);
      }
    });

  },
  errorr: function(jqXHR,textStatus,error) {
    console.log(error);
  }
});
// it looks so tidy we have to simplify it..
*/

// another way to write above code...

function errorHandler(jqXHR,textStatus,error){
  console.log(error);
}
$.ajax({
  type: "GET",
  url: "data/tweets.json",
  success: cbtweet, // on success it will fire this function
  errorr:errorHandler
});
function cbtweet(data){

  console.log(data);

  $.ajax({
    type: "GET",
    url: "data/friends.json",
    success:cbfriends,
    errorr: errorHandler
  });
  function cbfriends(data){
    console.log(data);

    $.ajax({
      type: "GET",
      url: "data/videos.json",
      success:cbvideos,
      errorr: errorHandler
    });
    function cbvideos(data){
      console.log(data);
    }
  }

}
};

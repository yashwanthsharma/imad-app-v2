var button = document.getElementById('counter');
var counter = 0;
button.onclick = function(){
    // Create a request object
    //var request = new XMLHttpRequest();
    //Capture the response and store it in a variable
    //request.onreadyStatechange = function(){
        //if(request.readyState === XMLHttpRequest.DONE){
        // take some action
        //if(request.status === 200){
        //var counter = request.responseText
        counter = counter + 1;
        var span = document.getElementById('count');
        span.innerHTML = counter.toString();
      //  }
    // }
    };
    
    //request.open('GET','http://yashwanthsharma.imad.hasura-app.io/counter',true);
   // request.send(null);
//};

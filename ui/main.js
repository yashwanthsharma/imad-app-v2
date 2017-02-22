var button = document.getElementById('counter');

button.onclick = function(){
    // Create a request object
    var request = new XMLHttpRequest();
    //Capture the response and store it in a variable
    request.onreadystatechange = function(){
        if(request.readyState === XMLHttpRequest.DONE){
        // take some action
        if(request.status === 200){
        var counter = request.respondText;
        var span = document.getElementById('count');
        span.innerHTML = counter.toString();
        }
     }
    };
    
    request.open('GET','http://yashwanthsharma.imad.hasura-app.io/counter',true);
    request.send(null);
};

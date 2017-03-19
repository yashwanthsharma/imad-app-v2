//Submit name username/password to login

var submit = document.getElementById('submit_btn');
submit.onclick = function() {
     // Create a request object
    
     var request = new XMLHttpRequest();
    
    //Capture the response and store it in a variable
    request.onreadystatechange = function() {
        if(request.readyState === XMLHttpRequest.DONE){
        // take some action
          if(request.status === 200){
               //Capture a list of names and render it as a list
            console.log('user logged in');
            alert('logged in successfully');
          }
            else if(request.status === 403){
                    alert('usename/password is invalid');
                }
                else if(request.status === 500){
                        alert('something went wrong');
                
          }
       }
       // not yet done
    };
    // make a request
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    console.log(username);
    console.log(password);
    request.open('POST','http://yashwanthsharma.imad.hasura-app.io/login',true);
    request.setRequestHeader('Content-Type','application/json');
     request.send(JSON.stringify({username:username,password:password}));
    //make a request to the server and send the name
    
   
};



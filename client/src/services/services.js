export function login(email, password, callback) {
    fetch('http://localhost:5000/api/users/login',{
        method:"POST",
        body:JSON.stringify({
            "email":email,
            "password":password
        }), headers: {
            'content-type': 'application/json' //always include this incase of post req to backend to avoid empty req body
        }
    }).then((response)=>{
        if(response.status=='200'){
            response.json().then(
                (data)=> {
                    localStorage.setItem('jwtToken',data.token);
                    callback();
                }
            )
        }
    })
}

export function register(name, email, password, callback){
    fetch('http://localhost:5000/api/users/register',{
        method:"POST",
        body: JSON.stringify({
            "name":name,
            "email":email,
            "password":password
        }), headers: {
            'content-type': 'application/json' //always include this incase of post req to backend to avoid empty req body
        }
    }).then((response)=>{
        if(response.status == '200'){
            callback();
        }
    })
    .catch((error)=>{
        console.log(error);
    })
}
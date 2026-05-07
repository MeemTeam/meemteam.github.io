function loginuser(event){
    event.preventDefault();
    const form = event.target;
    let email=form.email.value;
    let password=form.password.value; 
    if(email===""||password===""){
        alert("Please Fill In All Fields!");
        return false;
    }
    if(!email.includes("@")){
        alert("Invalid Email");
        return false;
    }
    let users=JSON.parse(localStorage.getItem("users"))||[];
    let user=users.find(u=>u.email===email && u.password===password);
    if(user){
        alert("login Successful! Welcome" + user.name);
        window.location.href="index.html";
    }
    else{ 
        alert("Invalid Email Or Password");
        return false;
    }
        return false;
}
function signup(form){
    let name=form.name.value;
    let email=form.email.value;
    let passward=form.passward.value; 
     if(name===""||email===""||passward===""){
         alert("Please Fill In All Fields!");
         return false;}
         if(name.length<3){
            alert("Name Too Short");
            return false;}
            if(!email.includes("@")){
                alert("Invalid Email");
                return false;}
                if(password.length<6){
                    alert("Password must be at least 6 characters!");
                    return false;} 
                    let users=JSON.parse(localStorage.getItem("users"))||[];
                users.push({name,email,password});
            localStorage.setItem("users",JSON.stringify(users));
        alert("Account Created Successfully");
    window.location.href="login.html";
   return false; }

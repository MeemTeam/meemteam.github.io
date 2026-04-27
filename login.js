function loginuser(form){
 let email=form.email.value;
 let passward=form.passward.value; 
  if(email===""||passward===""){
      alert("Please Fill In All Fields!");
      return false;}
  if(!email.includes("@")){
        alert("Invalid Email");
        return false;}
      let users=JSON.parse(localStorage.getItem("users"))||[];
      let user=users.find(u=>u.email===email && u.passward===passward);
    if(user){
        alert("login Successful! Welcome"+user.name);
        window.location.href="booking.html";}
    else{ 
        alert("Invalid Email Or Passward");
        return false;}
        return false;
}
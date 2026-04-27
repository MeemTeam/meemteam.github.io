function booktrip(form){
   let name =form.name.value;
   let email =form.email.value;
   let destination =form.destination.value;
   let phone =form.phone.value;
   let date =form.date.value;
   let people =form.people.value;
  
   if(name===""||email===""||destination===""||phone===""||date===""||people===""){
    alert("Please Fill In All Fields");
    return false;
  }
  if(name.length<3){
  alert("Name Too Short");
  return false;}

  let phonepattern=/^01[0-9]{9}$/;
  if(!phonepattern.test(phone)){
      alert("Invalid Phone Number");
      return false;
  }
  if(!email.includes("@")){
    alert("Invalid Email");
    return false;}
  if(date===""){
     alert("Select Date");  
       return false;}
  if(people<=0){
      alert("Invalid Number Of people");
       return false;
  }
  let booking={name,phone,email,destination,date,people};
  let bookings =JSON.parse(localStorage.getItem("bookings"))||[];
  bookings.push(booking);

  localStorage.setItem("bookings",JSON.stringify(bookings));

  alert("Booking Saved");

  return false;
                      }

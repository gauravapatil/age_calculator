let dob=document.getElementById("birthday");
let ans=document.getElementById("ans");
let btn=document.getElementById("btn");

function your_age(){
    let age=dob.value;
    if(age==="") alert("Please enter some date");
    else {
        const age1 = getAge(age);
        ans.innerText = `Your age is ${age1} ${age1 > 1 ? "years" : "year"} old`;
      }
    
}
function getAge(age) {
    const currentDate = new Date();
    const birthdayDate = new Date(age);
    let age2 = currentDate.getFullYear() - birthdayDate.getFullYear();
    const month = currentDate.getMonth() - birthdayDate.getMonth();
  
    if (
      month < 0 ||
      (month === 0 && currentDate.getDate() < birthdayDate.getDate())
    ) {
      age2--;
    }
    if(age2<0) alert("Please enter Valid date.(Date less than today's)")
  
    return age2;
  }
  btn.addEventListener("click",your_age);
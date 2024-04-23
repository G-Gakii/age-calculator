const birthday = document.getElementById("birthday");
const button = document.getElementById("button");
const result = document.getElementById("result");




function calculateYears(){
    const today = new Date();
    let birthdayValue = birthday.value;
     

    if (birthdayValue ===""){
        alert("please enter birthdate")
    }
    else{
        birthdayValue = new Date(birthdayValue)
        let years =today.getFullYear() - birthdayValue.getFullYear();
        let months = today.getMonth() - birthdayValue.getMonth();
        if (months < 0 || (months === 0 && today.getDate() < birth.getDate())) {
            years--;
        
            
        }
        return years
    }
}
function yourAge(years){
      const age = calculateYears(years);
      result.innerText = `you are ${age} years`
}

button.addEventListener("click",yourAge)
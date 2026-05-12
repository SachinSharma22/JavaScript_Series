
// First input box for principle amount
const principal_Amount = document.createElement('input')
principal_Amount.placeholder = "Enter Principle amount";
principal_Amount.id = 'pa'
principal_Amount.type = "number";
document.body.appendChild(principal_Amount);
document.body.appendChild(document.createElement("br")); 


// Second input box for Interest
const interest_Amount = document.createElement('input');
interest_Amount.type = "number"
interest_Amount.id = "ia"
interest_Amount.placeholder = "Rate of interest"
document.body.appendChild(interest_Amount);
document.body.appendChild(document.createElement("br")); 

// Third input box for time , time we can took in year
const time_In_Year = document.createElement('input');
time_In_Year.placeholder = "for how much time"
time_In_Year.id = 'tiy'
time_In_Year.type = "number"
document.body.appendChild(time_In_Year)
document.body.appendChild(document.createElement("br")); 

const calculate_Btn = document.createElement('button');
calculate_Btn.innerText = "calculate";
document.body.appendChild(calculate_Btn);

calculate_Btn.addEventListener('click', () => {
     // ✅ get values when button is clicked
    const pAmount = Number(document.getElementById('pa').value);
    const iAmount = Number(document.getElementById('ia').value);
    const time = Number(document.getElementById('tiy').value);

    console.log("Principal:", pAmount);
    console.log("Rate:", iAmount);
    console.log("Time:", time);

    // formula
    const amount_Pay = (pAmount * iAmount * time) / 100;
    console.log("Simple Interest:", amount_Pay);
    setTimeout(() => {
        alert(`You have to pay ${amount_Pay} /month`);
    },1500)
})
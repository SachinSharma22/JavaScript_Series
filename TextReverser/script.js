// Input for taking text
const input_Value = document.createElement("input");
input_Value.type = "text";
input_Value.placeholder = "Enter your text";
input_Value.id = "txt";
document.body.appendChild(input_Value);
document.body.appendChild(document.createElement("br"));

// Button to perform the operation

const reverse_Btn = document.createElement("button");
reverse_Btn.innerText = "Reverse";
document.body.appendChild(reverse_Btn);
const reverseText = () => {
  const input_Data = document.getElementById("txt").value;
  if (input_Data.length === "") {
    alert("Write something");
    return;
  }
  console.log(input_Data);
  const reversed_Data = input_Data.split("").reverse().join("");
  console.log(reversed_Data);
  input_Value.value = reversed_Data;
};

reverse_Btn.addEventListener("click", reverseText);

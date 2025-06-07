const getFirstInput = document.getElementById("number1");
const getSecondInput = document.getElementById("number2");
const getSpanResultId = document.getElementById("result");

function sum() {
  let valueOfFirstInput = getFirstInput.value;
  let valueOfSecondInput = getSecondInput.value;

  const result = 1 * valueOfFirstInput + 1 * valueOfSecondInput;
  getSpanResultId.innerHTML = result;
  console.log(result);
}

function reset() {
  let valueOfFirstInput = getFirstInput.value;
  valueOfFirstInput = "";
  let valueOfSecondInput = getSecondInput.value;
  valueOfSecondInput = "";
  const result = document.getElementById("result");
  result.textContent = "";
  console.log(result);
  console.log("Vous avez cliquer");
}

const getFirstNumberInput = document.getElementById("firstnumber");
const getSecondNumberInput = document.getElementById("secondnumber");
const getOperations = document.getElementById("operations");
const getResultSpan = document.getElementById("result");

function calculer(event) {
  event.preventDefault();
  let getValueOfFirstNumberInput = getFirstNumberInput.value;
  let getValueOfSecondNumberInput = getSecondNumberInput.value;
  let operations = getOperations.value;

  let result = 0;

  switch (operations) {
    case "1":
      result =
        Number(getValueOfFirstNumberInput) +
        Number(getValueOfSecondNumberInput);
      getResultSpan.innerHTML = result;
      break;
    case "2":
      result =
        Number(getValueOfFirstNumberInput) *
        Number(getValueOfSecondNumberInput);
      getResultSpan.innerHTML = result;
      break;
    case "3":
      result =
        Number(getValueOfFirstNumberInput) -
        Number(getValueOfSecondNumberInput);
      getResultSpan.innerHTML = result;
      break;

    case "4":
      result =
        Number(getValueOfFirstNumberInput) /
        Number(getValueOfSecondNumberInput);
      getResultSpan.innerHTML = result;
      break;
    case "5":
      result =
        Number(getValueOfFirstNumberInput) %
        Number(getValueOfSecondNumberInput);
      getResultSpan.innerHTML = result;
      break;
    default:
      alert("Aucune opération sélectionnée");
      break;
  }

  // if (operations == 1) {
  //   result =
  //     Number(getValueOfFirstNumberInput) + Number(getValueOfSecondNumberInput);
  //   getResultSpan.innerHTML = result;
  // }
  // if (operations == 2) {
  //   result =
  //     Number(getValueOfFirstNumberInput) * Number(getValueOfSecondNumberInput);
  //   getResultSpan.innerHTML = result;
  // }
  // if (operations == 3) {
  //   result =
  //     Number(getValueOfFirstNumberInput) / Number(getValueOfSecondNumberInput);
  //   getResultSpan.innerHTML = result;
  // }
  // if (operations == 4) {
  //   result =
  //     Number(getValueOfFirstNumberInput) - Number(getValueOfSecondNumberInput);
  //   getResultSpan.innerHTML = result;
  // }
  // if (operations == 5) {
  //   result =
  //     Number(getValueOfFirstNumberInput) % Number(getValueOfSecondNumberInput);
  //   getResultSpan.innerHTML = result;
  // }
}

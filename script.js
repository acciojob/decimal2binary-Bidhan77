function decimalToBinary(decimal) {
  //Write you code here
	let binary = "";

  while (decimal > 0) {
    binary = (decimal % 2) + binary;
    decimal = Math.floor(decimal / 2);
  }

  return binary;
  
}

window.decimalToBinary = decimalToBinary;

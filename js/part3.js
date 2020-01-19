
function ConversionPart3() {
  var floatToConvert = parseFloat(document.getElementById("3_Float").value);

  var n = (floatToConvert + "").split(".");
  console.log(n);

  integer = n[0];

    temp = integer;
    var value = [];
    i = 0;
    while (temp != 0)
    {
      value[i] = parseInt(temp) % parseInt(2);
      //console.log (value);
      temp = parseInt(temp)/parseInt(2);
      i++;
    }
    //console.log (value);
    var final = "";
    for (i = value.length-2; i >= 0; i--)
    {
      //console.log(final);
      var v = value[i].toString();
      //console.log(v);
      final += v;
      //console.log (final);
    }
    fInt = final;
    console.log (fInt);
    console.log (fInt.toString().length);
    dec = "";
    var dec = n[1].toString();
    console.log(dec);
    i = 0;
    /**
    while (dec != 0 || fInt.toString().length + i <= 23)
    {
      dec = dec * 2;

    }
    */
  var output32BitScientificNotation = "10100011001100001000010100101010";
/*
  Value := fraction to be converted;
REPEAT
	Value := Value * N;
	Next digit of result := integer part of Value;
	Value := fractional part of Value;
UNTIL (Value = 0) or (the desired number of digits are produced);
*/

  // Show the output on the screen
  FormatAndShowOutput([floatToConvert, output32BitScientificNotation], 3);
}


// If you dare read a comment before starting to program..
// 3434000.5 has a binary representation of
//  1101000110011000010000.1
// In NORMALIZED scientific notation (i.e. scientific notation for Base 2)
// 1.1010001100110000100001 * 2^21
// ... so mantissa is 11010001100110000100001

// For the final 32 bits.. we have
// ... so 1010001100110000100001 for mantissa (because of explicit leading 1)
// ... so for bits (0-22) 10100011001100001000010
// ... so exponent representation in +128 format is 21+128 = 149 = (bits 23-30) 10010101
// ... so final sign bit = (bit 31) 0

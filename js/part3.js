
function ConversionPart3() {
  var floatToConvert = parseFloat(document.getElementById("3_Float").value);

  var n = (floatToConvert + "").split(".");

  integer = n[0];

  var sign = "";
  //console.log (n[0].toString().charAt(0))
  if (n[0].toString().charAt(0) == '-')
  {
    sign += 1;
    integer = Math.abs(integer);
  }
  else{
    sign += 0;
  }
  //console.log(n);



    temp = integer;
    var value = [];
    i = 0;
    while (temp != 0)
    {
      value[i] = parseInt(temp) % parseInt(2);
      ////console.log (value);
      temp = parseInt(temp)/parseInt(2);
      i++;
    }
    ////console.log (value);
    var final = "";
    for (i = value.length-2; i >= 0; i--)
    {
      ////console.log(final);
      var v = value[i].toString();
      ////console.log(v);
      final += v;
      ////console.log (final);
    }
    fInt = final;
    //console.log (fInt);
    //console.log (fInt.toString().length);
    dec = "";
    bDec = "";
    if (n[1] == null)
    {
      bDec = "";
    }
    else {
      var dec = n[1].toString();
      dec = "." + dec;
      parseFloat(dec);
      //console.log(dec);
      i = 0;

      while (dec != 0 || fInt.toString().length + i <= 23)
      {
        dec = dec * 2;
        if(dec >= 1)
        {
          bDec += '1';
        }
        else {
          bDec += '0';
        }
        var d = (dec + "").split(".");
        if (d[1] == null)
        {
          break;
        }
        //console.log(d);
        dec = "";
        dec = d[1].toString();
        dec = "." + dec;
        parseFloat(dec);
        i++;
        //console.log(i);
        //console.log(fInt.toString().length + i)
        if (fInt.toString().length + i >= 23)
        {
          break;
        }
      }
      //console.log(bDec);
    }
  var mantissa = fInt.toString() + bDec;
  console.log (mantissa);


  //console.log (mantissa.length);
  //console.log ("test");
  //console.log (mantissa.length-1);
  expNum = mantissa.length - 1 + 128;

  mantissa = mantissa.replace(1, '');
  //console.log(expNum);


  temp = expNum;
  var value = [];
  i = 0;
  while (temp != 0)
  {
    value[i] = parseInt(temp) % parseInt(2);
    ////console.log (value);
    temp = parseInt(temp)/parseInt(2);
    i++;
  }
  ////console.log (value);
  var final = "";
  for (i = value.length-2; i >= 0; i--)
  {
    ////console.log(final);
    var v = value[i].toString();
    ////console.log(v);
    final += v;
    ////console.log (final);
    expNum = final;
  }
  //console.log (expNum);



  //console.log(sign);
  //console.log(mantissa.length);
  if (mantissa.length < 23)
  {
    while (mantissa.length < 23)
    {
      mantissa += "0";
    }
  }
  //console.log(mantissa.length);
  var final = "";
  //console.log (expNum.length);
  final = mantissa + expNum + sign;
  var output32BitScientificNotation = final;
  //console.log(final.length);
  //var output32BitScientificNotation = "10100011001100001000010100101010";
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

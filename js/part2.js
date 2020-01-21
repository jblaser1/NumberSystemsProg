function ConversionPart2() {
    //
    var SignedDecimalInt = document.getElementById("2_SignedInt").value;


    var num = SignedDecimalInt.split('');

    if (num[0] == "-")
    {
      var negative = true;
    }
    else {
      negative = false;
      console.log(false);
    }

    //SignedDecimalInt = Math.abs(SignedDecimalInt)





      temp = SignedDecimalInt;
      var value = [];
      i = 0;



      console.log(temp);
      temp = Math.abs(temp);
      console.log(temp);



      /*
      if (num[0] == "-")
      {
        console.log(true);
        temp = temp.replace(/-/g,'');
        console.log(temp);
        while (temp != 0)
        {
          value[i] = parseInt(temp) % parseInt(2);

          temp = parseInt(temp)/parseInt(2);
          i++;
        }

        console.log (value);
        value.pop();
        console.log (value);
        //value.push("1");
        console.log(value);
        var final = "";
        for (i = value.length-1; i >= 0; i--)
        {
          //console.log(final);
          var v = value[i].toString();
          //console.log(v);
          final += v;
          //console.log (final);
        }

        value = final;
        console.log(value);
      }
      */

        console.log(true);
        //temp = SignedDecimalInt;
        //var value = [];
        //i = 0;
        while (temp != 0)
        {
          value[i] = parseInt(temp) % parseInt(2);
          console.log (value);
          temp = parseInt(temp)/parseInt(2);
          i++;
        }
        value.pop();
        console.log (value);
        value.push("0");
        //console.log (value);
        var final = "";
        for (i = value.length-1; i >= 0; i--)
        {
          console.log(final);
          var v = value[i].toString();
          console.log(v);
          final += v;
          console.log (final);
        }
        if (final.length < 8)
        {
          while (final.length < 8)
          {
            final = "0" + final;
          }
        }
        value = final;
        console.log(value);



      var outputValue = value;

      compliment = "";
      for (i = 0; i <= value.length-1; i++)
      {
        if (value[i] == '0')
        {
        var c = 1;

        }
        else
        {
          var c = 0;

        }
        compliment += c;
      }

      var addC = compliment.split('');
      console.log(addC);
      console.log(addC.length-1);
      for (i = addC.length-1; i>= 0; i--)
      {
        console.log(addC[i])
        console.log(i);
        if (addC[i] == '0')
        {
          console.log(true);
          addC [i] = "1";
          if (i+1 == addC.length)
          {
            break;
          }
          addC [i+1] = "0";
          console.log(addC[i]);
          console.log(addC[i-1]);
          break;
        }
        else{
          console.log(false);
        }
      }

      compliment = addC.join('');
      console.log(compliment);

      var outputValueTwosComplement = compliment;
    //var outputValue = "010110101000110110011101";

    //var outputValueTwosComplement = "101001010111001001100011";

    // Show the output on the screen
    if (negative == false){
    FormatAndShowOutput([outputValue, outputValueTwosComplement, SignedDecimalInt], 2);
    console.log("positive");

    }
    if (negative == true){
      FormatAndShowOutput([outputValueTwosComplement, outputValue, SignedDecimalInt], 2);
      console.log("negative");
    }
}

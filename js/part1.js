function ConversionPart1() {
    var UnsignedInt = document.getElementById("1_UnsignedInt").value;
    var UnsignedIntBaseFrom = document.getElementById("1_UnsignedIntBaseToConvertFrom").value;
    var UnsignedIntBaseTo = document.getElementById("1_UnsignedIntBaseToConvertTo").value;

    var digits = 0;
    //var show = ""
    var x = UnsignedInt;
    for (var i = 0; i < x.length; i++) {
    digits = digits +1;
    //show += num[i]);
    }

    var num = UnsignedInt.split('');
    console.log(num);
    console.log(num[1]);

    //console.log(s.charAt());

    if (UnsignedIntBaseFrom != 10)
    {

      var value = 0;
      i=0;
      while (digits != 0)
      {
        if (num[i] != 'A' && num[i] != 'B' && num[i] != 'C' && num[i] != 'D' && num[i] != 'E' && num[i] != 'F')
        {
        value = parseInt((value * UnsignedIntBaseFrom)) + parseInt(num[i]);
        }

        if (num[i] == 'A')
        {
          num[i] = 10;

          //num = num.substring(0, i) + '10' + num.substring(i + 1);
          value = parseInt((value * UnsignedIntBaseFrom)) + parseInt(num[i]);
          //i++;

        }
        if (num[i] == 'B')
        {
          num[i] = 11;
          //num = num.substring(0, i) + '11' + num.substring(i + 1);
          value = parseInt((value * UnsignedIntBaseFrom)) + parseInt(num[i]);
          //i++;
        }
        if (num[i] == 'C')
        {
          num[i] = 12;
          //num = num.substring(0, i) + '12' + num.substring(i + 1);
          value = parseInt((value * UnsignedIntBaseFrom)) + parseInt(num[i]);
          //i++;

        }
        if (num[i] == 'D')
        {
          num[i] = 13;
        //  num = num.substring(0, i) + '13' + num.substring(i + 1);
          value = parseInt((value * UnsignedIntBaseFrom)) + parseInt(num[i]);
          //i++;
        }
        if (num[i] == 'E')
        {
          num[i] = 14;
          //num = num.substring(0, i) + '14' + num.substring(i + 1);
          value = parseInt((value * UnsignedIntBaseFrom)) + parseInt(num[i]);
          //i++;
        }
        if (num[i] == 'F')
        {
          num[i] = 15;
          //num = num.substring(0, i) + '15' + num.substring(i + 1);
          value = parseInt((value * UnsignedIntBaseFrom)) + parseInt(num[i]);
          //i++;
        }
        //console.log(num);
        console.log(value);
        i++;
        digits = digits - 1;
      }
      if (UnsignedIntBaseTo != 10)
      {
        console.log(true);
        temp = value;
        var fValue = [];
        i = 0;
        while (temp != 0)
        {
          console.log("test");
          fValue[i] = parseInt(temp) % parseInt(UnsignedIntBaseTo);
          if (fValue[i] == 10)
          {
            fValue[i] = 'A';
          }
          if (fValue[i] == 11)
          {
            fValue[i] = 'B';
          }
          if (fValue[i] == 12)
          {
            fValue[i] = 'C';
          }
          if (fValue[i] == 13)
          {
            fValue[i] = 'D';
          }
          if (fValue[i] == 14)
          {
            fValue[i] = 'E';
          }
          if (fValue[i] == 15)
          {
            fValue[i] = 'F';
          }
          //console.log (fValue);
          temp = parseInt(temp)/parseInt(UnsignedIntBaseTo);
          i++;
        }
        //console.log (fValue);
        var final = "";
        for (i = fValue.length-2; i >= 0; i--)
        {
          console.log(final);
          var v = fValue[i].toString();
          console.log(v);
          final += v;
          //console.log (final);
        }
        value = final;
      }

    }

    //console.log(UnsignedInt);

    if (UnsignedIntBaseFrom == 10)
    {
      temp = UnsignedInt;
      var value = [];
      i = 0;
      while (temp != 0)
      {
        value[i] = parseInt(temp) % parseInt(UnsignedIntBaseTo);
        if (value[i] == 10)
        {
          value[i] = 'A';
        }
        if (value[i] == 11)
        {
          value[i] = 'B';
        }
        if (value[i] == 12)
        {
          value[i] = 'C';
        }
        if (value[i] == 13)
        {
          value[i] = 'D';
        }
        if (value[i] == 14)
        {
          value[i] = 'E';
        }
        if (value[i] == 15)
        {
          value[i] = 'F';
        }
        //console.log (value);
        temp = parseInt(temp)/parseInt(UnsignedIntBaseTo);
        i++;
      }
      //console.log (value);
      var final = "";
      for (i = value.length-2; i >= 0; i--)
      {
        console.log(final);
        var v = value[i].toString();
        console.log(v);
        final += v;
        //console.log (final);
      }
      value = final;
    }



    var outputValue = value;
  //  console.log (String(outputValue));


  // Show the output on the screen
  FormatAndShowOutput([String(UnsignedInt), UnsignedIntBaseFrom, UnsignedIntBaseTo, String(outputValue)], 1);

}

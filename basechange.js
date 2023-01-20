function revealBase() {
  // The two base choices or octal and binary, please write the code below this line
    // NOTE: to do integer division in JS, use quotient = Math.floor(x/y)
    let c = parseInt(document.getElementById("num").value);
    let v = document.getElementById("bases").value;
    var r = [];
    let result = 0;
    let count = 0;
    var binary = [];
    var oct = [];
    if(v=='binary')
    {
            while(c!=0)
            {
                binary[count] = c%2;
                c = Math.floor(c/2);
                count++;
                r = binary;
            }
    }
    else if(v=='octal')
    {
      
            while(c!=0)
            {
                oct[count] = c%8;
                c = Math.floor(c/8);
                count++;
                r = oct;
            }
    }
    else 
    {
        result = (-1);
    }
    let l = r.length;
    for (let i = 0;i<l;i++)
    {
        result+=r[i]*Math.pow(10,i);
    }
    
    //console.log(result);
    console.log(document.getElementById("result").innerHTML); 

    document.getElementById("result").innerHTML = result;
}
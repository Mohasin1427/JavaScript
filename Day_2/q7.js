
    let arr=[65,86,90,7,41,36,85,42,12,20];
    document.getElementById('array').innerHTML=arr;

    function ascending()
           {
               arr.sort(function(a,b)
               {
                   return a-b
                }
                );
               document.getElementById("array").innerHTML=arr;
           }

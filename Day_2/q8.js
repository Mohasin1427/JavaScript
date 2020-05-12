
    var str=["Mohasin","Suraj","Abhi","Vaibhav","Sourabh"];
    document.getElementById('names').innerHTML=str;

    function descending()
           {
               str.sort();
               str.reverse();
               document.getElementById("names").innerHTML=str;
           }

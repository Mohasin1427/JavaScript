function randomNum()
            {
                let num=Math.floor((Math.random()*100)+1);
                console.log(num);
                alert(num);
                document.getElementById("random").innerHTML=num;
            }
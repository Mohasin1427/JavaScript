let numbers=[45,65,9,84,1,24,12,75,36,98];

numbers.sort(function(a,b)
{
    return b-a
}
);
document.getElementById('max').innerHTML="max number is "+numbers[0]; 


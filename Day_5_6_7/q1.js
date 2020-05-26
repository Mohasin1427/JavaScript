var isid=false;
var ispwd=false;
var ismobile=false;
var isaddress=false;
var isage=false;

function idVal()
{
    let userid=document.getElementById('userid').value;
    if(userid.length>3 && userid.length<=15)
    {
        document.getElementById('isid').style.display='none';
        isid=true;
    }
    else
    {
        document.getElementById('isid').style.display='block';
        document.getElementById('userid').focus();
        isid=false;
    }
}

function passVal()
{
    let pass=document.getElementById('pass').value;
    if(pass.length >= 8)
    {
        document.getElementById('ispwd').style.display='none';
        ispwd=true;
        
    }
    else{
        document.getElementById('ispwd').style.display='block';
        ispwd=false;
        document.getElementById('pass').focus();
    }
}

function mobileVal()
{
    let mobile=document.getElementById('mobile').value;

    if(mobile.length == 10 )
    {
        document.getElementById('ismobile').style.display='none';
        ismobile=true;
        
    }
    else
    {
        document.getElementById('ismobile').style.display='block';
        ismobile=false;
        document.getElementById('mobile').focus();
    }
}

function ageVal()
{
    let age=document.getElementById('age').value;
    if( age>=18 && age<=100)
    {
        document.getElementById('isage').style.display='none';
        isage=true;
    }
    else
    {
        document.getElementById('isage').style.display='block';
        isage=false;
        document.getElementById('age').focus();
    }
}

function validate()
{
if( isid == true && ispwd == true &&
 ismobile == true && isage == true )
{ 
    window.alert("Form Submitted Successfully");
    return true;
}
else
{

    window.alert("Please fill all details");
    return false;
}
}
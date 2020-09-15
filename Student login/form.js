function userfirst () {
    var fName = document.getElementById("fullname").value;
    var re1 = /^[a-zA-Z\s\'\-]{3,15}$/;
    if (re1.test(fName)){
        document.getElementById("fullnamePrompt").style.color="green";
        document.getElementById("fullnamePrompt").innerHTML="<strong>valid</strong>";
        return true;
    }
    else{
        document.getElementById("fullnamePrompt").style.color="red";
        document.getElementById("fullnamePrompt").innerHTML="<strong>enter 3 to 15 characters</strong>";
        return false;
    }
}
function gurdian () {
    var gurdianname = document.getElementById("gname").value;
    var re1 = /^[a-zA-Z\s\'\-]{3,15}$/;
    if (re1.test(gurdianname)){
        document.getElementById("gurdianPrompt").style.color="green";
        document.getElementById("gurdianPrompt").innerHTML="<strong>valid</strong>";
        return true;
    }
    else{
        document.getElementById("gurdianPrompt").style.color="red";
        document.getElementById("gurdianPrompt").innerHTML="<strong>enter 3 to 15 characters</strong>";
        return false;
    }
}

function mobileno(){
    var mob= document.getElementById("phone").value
    re2 = /^\d{10}$/;
    if (re2.test(mob))
    {
        document.getElementById("phonePrompt").style.color= "green";
        document.getElementById("phonePrompt").innerHTML="<strong>valid</strong>"
        return true;
    }
    else{
        document.getElementById("phonePrompt").style.color= "red";
        document.getElementById("phonePrompt").innerHTML="<strong>enter 10 digits phone number</storage>"
        return false;
    }
}

function message(){
    alert("Your Login Details Are Now Safe With Us")
}
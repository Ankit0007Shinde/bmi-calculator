function hello(){
    var a = document.getElementById("text1").value;
    var b = document.getElementById("text2").value;

    var c = b/(a/100*a/100);
document.getElementById("text3").innerHTML=c;
}


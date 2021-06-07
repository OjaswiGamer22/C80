var guestarray=[];
function give(){
    var guest=document.getElementById("guest_1").value;
    guestarray.push(guest);
    var length_array=guestarray.length;
document.getElementById("display_name").innerHTML=guestarray.toString();


}
function sorting(){
    guestarray.sort();
    var i=guestarray.join("<br>");
    document.getElementById("sorted").innerHTML=i.toString();
}
function show(){
    var i=guestarray.join("<br>");
    document.getElementById("p_1").innerHTML=i.toString();
    document.getElementById("sor").style.display="block";
}
   function searching(){
      var s=document.getElementById("i_1").value;
      var found=0;
      for(var j=0; j<guestarray.length; j++){
          if(s==guestarray[j]){
              found=found+1;
          }
      }
      document.getElementById("p_2").innerHTML="namefound"+found+"times";

   }
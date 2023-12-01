function encrypt() {
    var pText = document.getElementById("lmao").value;
    var shiftGet = document.getElementById("dog").value;
  
    var shift = parseInt(shiftGet);
    var alpha = "abcdefghijklmnopqrstuvwxyz";
    
    let alphaShifted = alpha.slice(shift, 25)+alpha.slice(0,shift);
  
    let out = "";
    let len = pText.length;
      
    for(i=0; i<len; i+=1){
      let ch = pText.charAt(i);
  
      if(ch==" "){
        out += " "
      } else {let chIndex = alpha.indexOf(ch);
      out += alphaShifted.charAt(chIndex);}
     
      document.getElementById("output").innerHTML=out;
    }
    
}
  
function decrypt() {
    var pText = document.getElementById("lmao").value;
    var shiftGet = document.getElementById("dog").value;
  
    var shift1 = parseInt(shiftGet);
    var shift = 25 - shift1;
    var alpha = "abcdefghijklmnopqrstuvwxyz";
    
    let alphaShifted = alpha.slice(shift, 25)+alpha.slice(0,shift);
  
    let out = "";
    let len = pText.length;
      
    for(i=0; i<len; i+=1){
      let ch = pText.charAt(i);
  
      if(ch==" "){
        out += " "
      } else {let chIndex = alpha.indexOf(ch);
      out += alphaShifted.charAt(chIndex);}
     
      document.getElementById("output").innerHTML=out;
    }
}

function encrypt2(){
    var pText = document.getElementById("lmao2").value.toLowerCase();

    var shiftGet = document.getElementById("dog2").value;
    
    var alpha = "abcdefghijklmnopqrstuvwxyz";
  
    const shiftList = [];
      
    for(i=0; i<shiftGet.length; i+=1){
      let ch = shiftGet.charAt(i);
  
      let shiftIn = alpha.indexOf(ch);
      shiftList[i] = shiftIn+1;
    }
  
    
    p=0;
    out = "";
    for(m=0; m<pText.length; m+=1){
      let shint = shiftList[p];
  
      let ch = pText.charAt(m);
      let chIndex = alpha.indexOf(ch);
      let chI2 = chIndex+shint;
      
      if(ch==" "){
        out += " ";
      } else {
        if (chI2>=26){
          out+=alpha.charAt(chI2-26);
        } else{
          out += alpha.charAt(chI2);
        }
        
      
        if (p == shiftList.length - 1){
          p = 0;
        }  else {
          p+=1;
        }
      }
  
    }
  
    
    document.getElementById("output2").innerHTML=out;
    
  }
  
  function decrypt2(){
    var pText = document.getElementById("lmao2").value;
    var shiftGet = document.getElementById("dog2").value;
    
    var alpha = "abcdefghijklmnopqrstuvwxyz";
  
    const shiftList = [];
      
    for(i=0; i<shiftGet.length; i+=1){
      let ch = shiftGet.charAt(i);
  
      let shiftIn = alpha.indexOf(ch);
      shiftList[i] = shiftIn+1;
    }
  
    
    p=0;
    out = "";
    for(m=0; m<pText.length; m+=1){
      let shint = shiftList[p];
  
      let ch = pText.charAt(m);
      let chIndex = alpha.indexOf(ch);
      let chI2 = chIndex-shint;
  
      let difference = Math.abs(chI2)
      
      if(ch==" "){
        out += " ";
      } else {
        if (chI2<0){
          out+=alpha.charAt(chI2+26);
        } else{
          out += alpha.charAt(chI2);
        }
        
      
        if (p == shiftList.length - 1){
          p = 0;
        }  else {
          p+=1;
        }
      }
  
    }
  
    
    document.getElementById("output2").innerHTML=out;
    
  }
  
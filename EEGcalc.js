//NasInVar - nasion to inion distance, based on input "NasInDist" value
//EarEarVar - Ear to ear distance, based on input "EarEarDist" value

//Calculate Distances
function calculateDistances() {
  var NasInVar = document.getElementById("NasInDist").value;

	

  //Calculate distances
  var FzpVar = (NasInVar * 0.9);
  
  var FzVar = (NasInVar * 0.7);
  

  var CzVar = (NasInVar * 0.5);

 
  var PzVar = (NasInVar * 0.3);
  
  var OzVar = (NasInVar * 0.1);

  
  //round to two decimal places, prevents excessively long calculator outputs
  FzpVar = Math.round(FzpVar * 100) / 100;
  FzVar = Math.round(FzVar * 100) / 100;
  CzVar = Math.round(CzVar * 100) / 100;
  PzVar = Math.round(PzVar * 100) / 100;
  OzVar = Math.round(OzVar * 100) / 100;

  
  
  //next line allows us to always have two digits after decimal point
  FzpVar = FzpVar.toFixed(2);
  FzVar = FzVar.toFixed(2);
  CzVar = CzVar.toFixed(2);
  PzVar = PzVar.toFixed(2);
  OzVar = OzVar.toFixed(2);

  
  //Display the calculated distances


  document.getElementById("FzpElement").innerHTML = FzpVar;
  
  document.getElementById("FzElement").innerHTML = FzVar;
  
   document.getElementById("CzElement").innerHTML = CzVar;

  
  document.getElementById("PzElement").innerHTML = PzVar;
  
  document.getElementById("OzElement").innerHTML = OzVar;

  


}



//TO DO - Hide Distances before calculation.




//click to call function
document.getElementById("MedialButton").onclick = function() {
  calculateDistances();

};


//--------------------------------------------------------------


//Next, we calculate the rest of the points
function CalculateFromTpointsF7F8() {
	var FpzOzCircVar = document.getElementById("FpzOzCirc").value;

	
	  //Calculate distances
  var O1distvar = (FpzOzCircVar * 0.05);
  var T5distvar = (FpzOzCircVar * 0.15);
  var T3distvar = (FpzOzCircVar * 0.25);
  var F7distvar = (FpzOzCircVar * 0.35);
  var F8distvar = (FpzOzCircVar * 0.65);
  var T4distvar = (FpzOzCircVar * 0.75);
  var T6distvar = (FpzOzCircVar * 0.85);
  var O2distvar = (FpzOzCircVar * 0.95);

  
  //Display Distances
  document.getElementById("O1Element").innerHTML = O1distvar;
  document.getElementById("T5Element").innerHTML = T5distvar;
  document.getElementById("T3Element").innerHTML = T3distvar;
  document.getElementById("F7Element").innerHTML = F7distvar;
  document.getElementById("F8Element").innerHTML = F8distvar;
  document.getElementById("T4Element").innerHTML = T4distvar;
  document.getElementById("T6Element").innerHTML = T6distvar;
  document.getElementById("O2Element").innerHTML = O2distvar;
  
  
  // End of Function
}

//click to call Circumference Function
document.getElementById("CircumferenceButton").onclick = function() {
  CalculateFromTpointsF7F8();

};
//NasInVar - nasion to inion distance, based on input "NasInDist" value
//EarEarVar - Ear to ear distance, based on input "EarEarDist" value

//Calculate Distances
function calculateDistances() {
  var NasInVar = document.getElementById("NasInDist").value;
  var EarEarVar = document.getElementById("EarEarDist").value;
  var HeadCircVar = document.getElementById("HeadCirc").value;

	

  //Calculate distances
  var FzpVar = (NasInVar * 0.1);
  
  var FzVar = (NasInVar * 0.3);
  
	//Though C4Var is calculated, it remains unused as it is equivalent to C3Var, and we can output one distance which covers both C3&C4 placement.
  var CzVar = (NasInVar * 0.5);
  var C3Var = (EarEarVar * 0.2);
  var C4Var = (EarEarVar * 0.2);
 
  var PzVar = (NasInVar * 0.3);
  
	//Though both O1 and O2 distances calculated, only O1 distance used as they are symmetrical around Oz.
  var OzVar = (NasInVar * 0.1);
  var O1Var = (HeadCircVar * 0.05);
  var O2Var = (HeadCircVar * 0.05);
  
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
  
  //Use only C3Var to output both C3 and C4 values because they are symmetric around Cz
  document.getElementById("CzElement").innerHTML = CzVar;
  document.getElementById("C3Element").innerHTML = C3Var;
  
  document.getElementById("PzElement").innerHTML = PzVar;
  
  document.getElementById("OzElement").innerHTML = OzVar;
  document.getElementById("O1Element").innerHTML = O1Var;
  


}

//TO DO - Hide Distances before calculation.




//click to call function
document.getElementById("calculate").onclick = function() {
  calculateDistances();

};
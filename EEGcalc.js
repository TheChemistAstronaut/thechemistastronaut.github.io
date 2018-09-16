//Calculate Distances
function calculateDistances() {
  var NasInVar = document.getElementById("NasInDist").value;


  //Calculate distances
  var FzpVar = (NasInVar * 0.1);
  var FzVar = (NasInVar * 0.3);
  var CzVar = (NasInVar * 0.5);
  var PzVar = (NasInVar * 0.3);
  var OzVar = (NasInVar * 0.1);
  //round to two decimal places
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
  //Display the tip
  document.getElementById("Distances").style.display = "block";
  document.getElementById("FzpElement").innerHTML = FzpVar;
  document.getElementById("FzElement").innerHTML = FzVar;
  document.getElementById("CzElement").innerHTML = CzVar;
  document.getElementById("PzElement").innerHTML = PzVar;
  document.getElementById("OzElement").innerHTML = OzVar;
  


}




//click to call function
document.getElementById("calculate").onclick = function() {
  calculateDistances();

};
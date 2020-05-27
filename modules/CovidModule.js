//Type your code here
function initCovid(){
  getDataCovid(callbackCovid);
}

function getDataCovid(callbackCovid){
  kony.print("====>>>> call getDataCovid <<<<=====");
  try{
    let req = new kony.net.HttpRequest();
    let method = constants.HTTP_METHOD_GET;
    let url = "https://covid19.mathdro.id/api/countries/indonesia";
    req.open(method, url);
    req.onReadyStateChange = callbackCovid;
    req.send();
  } catch(err) {
    kony.print("Error calling covid API" + err);
  }
}

function callbackCovid(response) {
  try {
    let res = response.response;
    kony.print(res);
    console.log(res);
    frmCovid.lblConfirmedValue.text = res.confirmed.value; 
    frmCovid.lblRecoveredValue.text = res.recovered.value;
    frmCovid.lblDeathValue.text = res.deaths.value;
  } catch (err) {
    kony.print(err);
  }
}
//Type your code here
function initHome(){ 
  let nowDate = new Date();
  frmHome.lblUser.text = credentials.userName;
  frmHome.lblDate.text = nowDate;
  //getDataTodos(callback);
  // HTTP Request using open method
  frmHome.Button0h18d954dc9a446.onClick = getDataTodos(callback);
}

function getDataTodos(callback){
  kony.print("====>>>> call getDataTodos");
  kony.application.showLoadingScreen("BusyIndicator","Loading data...",constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true,true,null);
  try{
    let req = new kony.net.HttpRequest();
    let reqMethod = constants.HTTP_METHOD_GET;
    //let url = "https://jsonplaceholder.typicode.com/todos/";
    let url = "https://covid19.mathdro.id/api/";
    req.open(reqMethod, url);
    req.onReadyStateChange = callback;
    req.send();  
    kony.print("====>>>> sending...");
  } catch(err) {
    kony.print("Error on calling API");
  }
}

function callback(response) {
    try {
        kony.print(response);
        console.log(response.response);
        let res = response.response;
        console.log("Length of res: " + res.length);
        let dataObj = {};
        let data = res.map(val => {
            let dataObj = val.title;
            return dataObj;
        });
        for (let i = 0; i < res.length; i++) {
            //Create label 
            let lblBasic = {
                id: i,
                skin: "labelSkin",
                text: data[i],
                isVisible: true,
                top: i * 5 + "%",
                wrapping: constants.WIDGET_TEXT_WORD_WRAP,
                zindex: 1
            };
            let lblLayout = {
                containerWeight: 100,
                padding: [5, 5, 5, 5],
                margin: [5, 5, 5, 5],
                hExpand: true,
                vExpand: true
            };
            let lblPSP = {};
            let label = new kony.ui.Label(lblBasic, lblLayout, lblPSP);
            frmHome.flexScroll.add(label);
        }
    } catch (err) {
        kony.print(err);
        console.log(err);
    }
}
/**
 * Quantum Fabric is auto initialized, only if the Quantum Fabric app is linked in the Quantum Visualizer.
 * In all other cases the Quantum Fabric initialization code should be written by User if not done
 * already, for below sample to work.
 */
/*

//Tryin to invoke fuckin' fabric console service

//"KNYMobileFabric" is the current instance of the Quantum Fabric initialized by user
let serviceName = "TodoApp";
let client = kony.sdk.getCurrentInstance();
let integrationObj = client.getIntegrationService(serviceName);

let operationName =  "getTodos";
let data= {};
let headers= {};
integrationObj.invokeOperation(operationName, headers, data, operationSuccess, operationFailure);
function operationSuccess(res){
	//code for success call back
  kony.print("Integration Service Response is: " + JSON.stringify(res));
  frmHome.lblMappedData.text = JSON.stringify(res);
}
function operationFailure(error){
	//code for failure call back
  kony.print("Integration Service Failure:" + JSON.stringify(error));
}
*/
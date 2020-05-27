function initLogin(){
}

function validateLogin(){
  username = frmLogin.tbxuserid.text;
  password = frmLogin.tbxpassword.text;
  if(username == credentials.userId && password == credentials.password){
    frmHome.show();
  } else {
  	var errProp = {
      alertTitle: "Info Success",
      message: "Error wrong username & password",
      alertType: constants.ALERT_TYPE_INFO
    };
    var errConfig = { "contentAlignment": constants.ALERT_ICON_POSITION_LEFT };
    kony.ui.Alert(errProp, errConfig);  
  }
}
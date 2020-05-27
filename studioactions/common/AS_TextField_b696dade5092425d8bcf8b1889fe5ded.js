function AS_TextField_b696dade5092425d8bcf8b1889fe5ded(eventobject, changedtext) {
    if (kony.theme.getCurrentTheme() != "default") {
        kony.theme.setCurrentTheme("default", function() {
            self.view.FlxContainerLine.skin = "CopyslNormal084f714f4330f44";
        }, null);
    } else {
        (function() {
            self.view.FlxContainerLine.skin = "CopyslNormal084f714f4330f44";
        })();
    }
    //Password validation Logic
    //Length as 6 to 16
    //Password has one Alpha, one Numeric and one Special Character
    //Special Characters include !@#$%^&*_
    var regularExpression = /^(?=.*[0-9])(?=.*[!@#$%^&*_])[a-zA-Z0-9!@#$%^&*_]{6,16}$/;
    //Check if the field is empty then set the text to Normal else check for Validation
    if (/^\s*$/.test(this.view.txtPasswordSLI.text)) {
        self.view.txtPasswordSLI["skin"] = "txtboxPwdSLine"
        self.view.FlxContainerLine["skin"] = "slNormal"
    } else {
        //Check if Password has all the required validations and set skin to Normal
        if (regularExpression.test(this.view.txtPasswordSLI.text)) {
            self.view.txtPasswordSLI["skin"] = "txtboxPwdSLine"
            self.view.FlxContainerLine["skin"] = "slNormal"
        } else
        //Check if Password is failing any required validations and set skin to Red  
        {
            self.view.txtPasswordSLI["skin"] = "txtboxPwdSLineRed"
            self.view.FlxContainerLine["skin"] = "slRed"
        }
    }
}
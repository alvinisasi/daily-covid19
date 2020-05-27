define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onBeginEditing defined for txtPasswordSLI **/
    AS_TextField_i0ea94d79c574b65844bff72980b9bc1: function AS_TextField_i0ea94d79c574b65844bff72980b9bc1(eventobject, changedtext) {
        var self = this;
        if (kony.theme.getCurrentTheme() != "default") {
            kony.theme.setCurrentTheme("default", function() {
                self.view.FlxContainerLine.skin = "CopyslBlueColor072a8fe7472a54a";
            }, null);
        } else {
            (function() {
                self.view.FlxContainerLine.skin = "CopyslBlueColor072a8fe7472a54a";
            })();
        }
    },
    /** onEndEditing defined for txtPasswordSLI **/
    AS_TextField_b696dade5092425d8bcf8b1889fe5ded: function AS_TextField_b696dade5092425d8bcf8b1889fe5ded(eventobject, changedtext) {
        var self = this;
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
    },
    /** onBeginEditing defined for txtPasswordSLI **/
    AS_TextField_g3c08a3330d54269a75503d0d5941f2d: function AS_TextField_g3c08a3330d54269a75503d0d5941f2d(eventobject, changedtext) {
        var self = this;
        if (kony.theme.getCurrentTheme() != "default") {
            kony.theme.setCurrentTheme("default", function() {
                self.view.FlxContainerLine.skin = "CopyslBlueColor072a8fe7472a54a";
            }, null);
        } else {
            (function() {
                self.view.FlxContainerLine.skin = "CopyslBlueColor072a8fe7472a54a";
            })();
        }
    },
    /** onEndEditing defined for txtPasswordSLI **/
    AS_TextField_g43936d4c9e5493abc51126795352270: function AS_TextField_g43936d4c9e5493abc51126795352270(eventobject, changedtext) {
        var self = this;
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
        //Password has one alpha, one Numeric and one Special Character
        //Special Charactrs include !@#$%^&*_
        var regularExpression = /^(?=.*[0-9])(?=.*[!@#$%^&*_])[a-zA-Z0-9!@#$%^&*_]{6,16}$/;
        //Check if the field is empty then set the text to Normal else check for Validation
        if (/^\s*$/.test(this.view.txtPasswordSLI.text)) {
            self.view.txtPasswordSLI["skin"] = "txtboxPwdSLine"
            self.view.FlxContainerLine["skin"] = "slNormal"
        } else {
            //Check if Password has all the required validations and set skin to Normal
            if (regularExpression.test(this.view.txtPasswordSLI.text)) {
                self.view.this.view.txtPasswordSLI["skin"] = "txtboxPwdSLine"
                self.view.FlxContainerLine["skin"] = "slNormal"
            } else
            //Check if Password is failing any required validations and set skin to Red  
            {
                self.view.this.view.txtPasswordSLI["skin"] = "txtboxPwdSLineRed"
                self.view.FlxContainerLine["skin"] = "slRed"
            }
        }
    }
});
function AS_TextField_2084725d0ae64cc191de30d3d4a0ec43(eventobject, changedtext) {
    if (kony.theme.getCurrentTheme() != "default") {
        kony.theme.setCurrentTheme("default", function() {
            self.view.FlxContainerLine.skin = "CopyslBlueColor009c75526a93744";
        }, null);
    } else {
        (function() {
            self.view.FlxContainerLine.skin = "CopyslBlueColor009c75526a93744";
        })();
    }
}
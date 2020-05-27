function AS_TextField_620affda9cd24f7a998e4dc2b7518b6a(eventobject, changedtext) {
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
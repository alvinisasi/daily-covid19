function AS_TextField_g3c08a3330d54269a75503d0d5941f2d(eventobject, changedtext) {
    if (kony.theme.getCurrentTheme() != "default") {
        kony.theme.setCurrentTheme("default", function() {
            self.view.FlxContainerLine.skin = "CopyslBlueColor072a8fe7472a54a";
        }, null);
    } else {
        (function() {
            self.view.FlxContainerLine.skin = "CopyslBlueColor072a8fe7472a54a";
        })();
    }
}
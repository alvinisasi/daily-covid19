function AS_TextField_i0ea94d79c574b65844bff72980b9bc1(eventobject, changedtext) {
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
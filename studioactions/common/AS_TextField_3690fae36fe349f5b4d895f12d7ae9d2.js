function AS_TextField_3690fae36fe349f5b4d895f12d7ae9d2(eventobject, changedtext) {
    if (kony.theme.getCurrentTheme() != "default") {
        kony.theme.setCurrentTheme("default", function() {
            self.view.FlxContainerLine.skin = "CopyslNormal0787612b0dd1741";
        }, null);
    } else {
        (function() {
            self.view.FlxContainerLine.skin = "CopyslNormal0787612b0dd1741";
        })();
    }
}
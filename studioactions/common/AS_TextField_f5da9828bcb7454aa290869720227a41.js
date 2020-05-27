function AS_TextField_f5da9828bcb7454aa290869720227a41(eventobject, changedtext) {
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
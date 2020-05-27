function AS_Form_fd708f74a5bb4927afbbf976cc2b9c33(eventobject) {
    function SHOW_ALERT__a766cc4aeec748b9ad355521d8aca0b7_True() {}

    function INVOKE_ASYNC_SERVICE__f5e38a7f0fb6487d90438267b06d8b45_Callback(status, getContacts) {
        kony.application.dismissLoadingScreen();
        if (getContacts.opstatus == 0) {} else {
            function SHOW_ALERT__a766cc4aeec748b9ad355521d8aca0b7_Callback() {
                SHOW_ALERT__a766cc4aeec748b9ad355521d8aca0b7_True();
            }
            kony.ui.Alert({
                "alertType": constants.ALERT_TYPE_INFO,
                "alertTitle": null,
                "yesLabel": null,
                "noLabel": null,
                "alertIcon": null,
                "message": "Data fetch failed! Please try again later.",
                "alertHandler": SHOW_ALERT__a766cc4aeec748b9ad355521d8aca0b7_Callback
            }, {
                "iconPosition": constants.ALERT_ICON_POSITION_LEFT
            });
        }
    }
    kony.application.showLoadingScreen(null, null, constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true, true, {});
    if (getContacts_inputparam == undefined) {
        var getContacts_inputparam = {};
    }
    getContacts_inputparam["serviceID"] = "Contacts$getContacts";
    var getContacts_httpheaders = {};
    getContacts_inputparam["httpheaders"] = getContacts_httpheaders;
    var getContacts_httpconfigs = {};
    getContacts_inputparam["httpconfig"] = getContacts_httpconfigs;
    Contacts$getContacts = mfintegrationsecureinvokerasync(getContacts_inputparam, "Contacts", "getContacts", INVOKE_ASYNC_SERVICE__f5e38a7f0fb6487d90438267b06d8b45_Callback);
}
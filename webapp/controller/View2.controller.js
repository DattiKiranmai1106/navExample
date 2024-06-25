sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("com.sap.kt.nave.navexample.controller.View2", {
            onInit: function () {

            },
            onNavButton:function(){
                var  oRouter=this.getOwnerComponent().getRouter();
                oRouter.navTo("RouteView1");
            }
        });
    });
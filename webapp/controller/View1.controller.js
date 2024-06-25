sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("com.sap.kt.nave.navexample.controller.View1", {
            onInit: function () {

            },
            onPressview1:function(){
                var s=this.getView().byId("inputId").getValue();
                s=s.toLowerCase();
                var oRouter=this.getOwnerComponent().getRouter();
                if(s=="hello" || s=="thankyou"){
                oRouter.navTo("RouteView2");
                }else{
                    oRouter.navTo("RouteViewData");
                }
            }
            
        });
    });

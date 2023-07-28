sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    'sap/m/library',
    "sap/ui/core/Fragment",
    "../model/formatter",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
    "sap/ui/model/FilterType",
    "sap/base/Log",
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel",
    "sap/m/MessageToast",
    'sap/m/MessageBox',
  ],
  function (BaseController, library, Fragment, formatter, Filter, FilterOperator, FilterType, Log, UIComponent, JSONModel, MessageToast, MessageBox) {
    "use strict";

    return BaseController.extend("myportfolio.portfolio.controller.Welcome", {
      formatter: formatter,

      onInit() {

      },

      getRouter: function () {
        return UIComponent.getRouterFor(this);
      },



      onWelcomePress: function (oEvent) {
        var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
        oRouter.navTo("Main");

        this.getOwnerComponent().getModel("globalModel").setProperty("/selectedKey", "portfolio");
      }



    });
  }
);




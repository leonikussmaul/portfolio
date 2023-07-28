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
  
      return BaseController.extend("myportfolio.portfolio.controller.App", {
        formatter: formatter,
  
        onInit() {
  
          var oLocalModel = new JSONModel({});
          this.getView().setModel(oLocalModel, "localModel");
  
        },
  
        getRouter: function () {
          return UIComponent.getRouterFor(this);
        },
  
        onHomeIconPressed: function () {
          var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
          oRouter.navTo("Main");
        },
  
        onOpenLinkedin: function () {
          var sUrl = 'https://www.linkedin.com/in/leoni-anica-kussmaul';
          library.URLHelper.redirect(sUrl, true);
        },
  
        onOpenGitHub: function () {
          var sUrl = 'https://github.com/leonikussmaul';
          library.URLHelper.redirect(sUrl, true);
        },

        onPersonalGithub: function () {
            var sUrl = 'https://github.com/leonikussmaul';
            library.URLHelper.redirect(sUrl, true);
          },
        
          onProfessionalGithub: function () {
            var sUrl = 'https://github.tools.sap/I544243';
            library.URLHelper.redirect(sUrl, true);
          },

          onOpenResume: function(){
            var sUrl = 'https://leoni-kussmaul-resume.tiiny.site';
            library.URLHelper.redirect(sUrl, true);
          },
  
  
          onNavToPortfolio: function (oEvent) {
          var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
          oRouter.navTo("Main");
        },
  
        onToggleSideMenu: function (oEvent) {
  
          var oToolPage = this.byId("toolPage");
          var bSideExpanded = oToolPage.getSideExpanded();
          oToolPage.setSideExpanded(!bSideExpanded);
        },
  
        onNavToSkills: function (oEvent) {
          var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
          oRouter.navTo("Skills");
        },
  
        onOpenResources: function (oEvent) {
          this.onOpenPopover(oEvent, "opportunity.opportunity.view.fragments.TeamSelection");
        },

        onOpenEmail: function (oEvent) {
			library.URLHelper.triggerEmail("leoni.kussmaul@sap.com", "New Request", false, false, false, true);
		},
  
  
  
      
  
      });
    }
  );
  
  
sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    'sap/m/library',
    "sap/ui/core/Fragment",
    "../model/formatter",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
    "sap/ui/model/FilterType",
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel",
    "sap/m/MessageToast",
    'sap/m/MessageBox',
  ],
  function (BaseController, library, Fragment, formatter, Filter, FilterOperator, FilterType, UIComponent, JSONModel, MessageToast, MessageBox) {
    "use strict";

    return BaseController.extend("myportfolio.portfolio.controller.App", {
      formatter: formatter,

      onInit() {

        const oData = {
          "aboutMe": "<u>Hey! Thanks for checking out my app.</u><br> It serves as a testament to my passion for <strong>UX design </strong> and <strong>UI development</strong>.<br><br>My journey into the tech world started in San Francisco, where I was captivated by its boundless opportunities. Through a couple of enriching internships, I delved deeper into this exciting field, eventually leading me to pursue a <strong>degree in Marketing & Design</strong> in the vibrant city of London.<br><br>Fast forward a few years, and I now find myself <strong>at SAP</strong>, specializing in App Development with our <strong>Cloud Platform, BTP </strong> (which, by the way, this app was built on as well!).<br><br>What especially drives me is my enthusiasm for <strong>Human Computer Interaction</strong>, User-Centered Design, and Cognitive Psychology. With an <strong>international education</strong> and a multicultural background, I'm eager to infuse my projects with a fresh and <strong>innovative perspective</strong> the best I can.<br><br>I believe in creating, inspiring, and collaborating, so please don't hesitate to <strong>reach out if you have any cool ideas or feedback!</strong> 😄🚀"

        };

        const oModel = new JSONModel(oData);
        this.getView().setModel(oModel, "portfolioModel");

      },

      getRouter: function () {
        return UIComponent.getRouterFor(this);
      },

      onHomeIconPressed: function () {
        var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
        oRouter.navTo("Welcome");
        this.getOwnerComponent().getModel("globalModel").setProperty("/selectedKey", "");
      },

      onOpenCommunity: function () {
        var sUrl = 'https://community.sap.com/t5/user/viewprofilepage/user-id/126740';
        library.URLHelper.redirect(sUrl, true);
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

      onNavToVideos: function (oEvent) {
        var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
        oRouter.navTo("Videos");
      },


      onOpenResources: function (oEvent) {
        this.onOpenPopover(oEvent, "opportunity.opportunity.view.fragments.TeamSelection");
      },

      onOpenEmail: function (oEvent) {
        library.URLHelper.triggerEmail("leoni.kussmaul@sap.com", "Hello", false, false, false, true);
      },

      onOpenPopover: function (oEvent, sFragment) {
        var oButton = oEvent.getSource(),
          oView = this.getView();

        // create popover
        if (!this._pPopover) {
          this._pPopover = Fragment.load({
            id: oView.getId(),
            name: sFragment,
            controller: this
          }).then(function (oPopover) {
            oView.addDependent(oPopover);
            return oPopover;
          });
        }

        this._pPopover.then(function (oPopover) {
          oPopover.openBy(oButton);
        });

      },

      onCancelDialogPress: function (oEvent) {

        this.editDialog = false;
        this._pDialog.then(function (_pDialog) {
          _pDialog.close();
          _pDialog.destroy();
        });
        this._pDialog = null;
      },


      onDialogOpen: function (fragmentName) {

        var that = this;
        if (!this._pDialog) {
          this._pDialog = Fragment.load({
            name: fragmentName,
            controller: this
          }).then(function (_pDialog) {
            that.getView().addDependent(_pDialog);
            _pDialog.setEscapeHandler(function () {
              that.onCloseDialog();
            });
            return _pDialog;
          });
        }
        this._pDialog.then(function (_pDialog) {
          _pDialog.open();


        })
      },

      onOpenAbout: function (oEvent) {
        this.onDialogOpen("myportfolio.portfolio.view.fragments.AboutMePopup");

      },

      onOpenResume: function () {
        this.onDialogOpen("myportfolio.portfolio.view.fragments.Resume");
        // var sUrl = 'https://leoni-kussmaul-resume.tiiny.site';
        // library.URLHelper.redirect(sUrl, true);
      },

      onThemePicker: function(oEvent){
        var sTheme = oEvent.getParameters().item.getKey(); 
        if(sTheme === "MorningHorizon"){
          sap.ui.getCore().applyTheme("sap_horizon"); 

        } else if(sTheme === "EveningHorizon"){
          sap.ui.getCore().applyTheme("sap_horizon_dark"); 

        }

      },



    });
  }
);


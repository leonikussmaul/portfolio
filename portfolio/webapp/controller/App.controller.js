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
          "aboutMe": "<u>Hello there, it's a pleasure to meet you!</u><br> I'm Leoni, and I'm thrilled to showcase <strong>my passion for UX and UI</strong> development through this app.<br><br>My journey into the tech world started in San Francisco, where I was captivated by its boundless opportunities. Through a couple of enriching internships, I delved deeper into this exciting field, eventually leading me to pursue a <strong>degree in Marketing & Design</strong> in the vibrant city of London.<br><br>Fast forward a few years, and I now find myself <strong>at SAP</strong>, the renowned ERP tech giant, specializing in App Development with our <strong>Cloud Platform (BTP)</strong>.<br><br>What truly drives me now is my unwavering enthusiasm for <strong>Human Computer Interaction, User-Centered Design, and Cognitive Psychology</strong>. With an <strong>international education</strong> and a multicultural background originating from Germany and Croatia, I'm eager to infuse my projects with a fresh and <strong>innovative perspective</strong>.<br><br>Always eager to create, inspire, & collaborate - so please reach out to me if you have any ideas or feedback :)"

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
        var sUrl = 'https://people.sap.com/leonikussmaul';
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

      onOpenResume: function () {
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

      onNavToVideos: function (oEvent) {
        var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
        oRouter.navTo("Videos");
      },


      onOpenResources: function (oEvent) {
        this.onOpenPopover(oEvent, "opportunity.opportunity.view.fragments.TeamSelection");
      },

      onOpenEmail: function (oEvent) {
        library.URLHelper.triggerEmail("leoni.kussmaul@sap.com", "New Request", false, false, false, true);
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


    });
  }
);


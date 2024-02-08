// import Controller from "sap/ui/core/mvc/Controller";

// /**
//  * @namespace myportfolio.portfolio.controller
//  */
// export default class Main extends Controller {

//     /*eslint-disable @typescript-eslint/no-empty-function*/
//     public onInit(): void {

//     }
// }



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

    return BaseController.extend("myportfolio.portfolio.controller.Main", {
      formatter: formatter,

      onInit() {


        const oData = {
          items: [
            {
              "name": "Demand Genius",
              "subTitle": "Team-based Web Application",
              "icon": "sap-icon://Netweaver-business-client",
              "description": "Need-Based Application that leverages a <strong>user-friendly</strong> and <strong>intuitive UX/UI</strong> while putting business <strong>efficiency</strong> and <strong>productivity</strong> first.",
              "details": "End-to-end design & development ownership using various tools & technologies, such as:</li> <ul><li>SAP BTP (Cloud Platform)</li><li>SAPUI5 JavaScript Front-End Framework</li><li>SAP Business Application Studio IDE</li></ul>",
              "linkText": "Click Here for a Video Demo",
              "Width": "50",
              "Height": "30",
              "image": "./images/demandGenius/overview.jpeg",
              "type": "UI"
            },
            {
              "name": "CGM",
              "subTitle": "Internal Tool for CSP's",
              "icon": "sap-icon://heatmap-chart",
              "description": "Customer Goal Management (CGM) is an application that offers a <strong>harmonized</strong> and <strong>consolidated goal and KPI capturing</strong> process across SAP Cloud Success Services (CSS).",
              "details": "<ul><li>CGM enables SAP and the customer to have a common understanding of what success means.</li><li>Drives strategic account value & proactive management.</li><li>Creates the “golden thread” from sales to implementation to ongoing account management through the Customer Value Journey model.</li></ul>",
              "linkText": "Click Here for a Video Demo",
              "Width": "50",
              "Height": "30",
              "image": "./images/cgm/CGM.jpeg",
              "type": "UI"
            },
            {
              "name": "Configurable Experience Acceess Point",
              "subTitle": "Single source of truth",
              "icon": "sap-icon://customize",
              "description": "<strong>Role-based</strong> dashboard that brings together various applications from the SAP ecosystem and functions as a <strong>single source of truth</strong>.",
              "details": "<ul><li>Drive and manage Engagement Plans for Customer Success.</li><li>Full-Stack development and end-to-end integration of various productive applications and web components.</li><li>Single Point of Contact for UX and Design Decisions.</li></ul>",
              "Width": "50",
              "Height": "30",
              "image": "./images/ngsp/cardConfig.png",
              "type": "UI"
            },
            {
              "name": "Intercompany Invoice Processing",
              "subTitle": "Invoice Posting to S/4HANA Cloud",
              "icon": "sap-icon://collections-insight",
              "description": "SAPUI5 Customer Extension: One Application each for the Customer and the Supplier side to cover the complete business process.",
              "details": "<ul><li>Mapping Tables for Tax Conversion using Custom Business Objects.</li><li>UUID Generation from Government Authorities.</li><li>SOAP UI and API Management.</li></ul>",
              "linkText": "Click Here for a Video Demo",
              "Width": "50",
              "Height": "30",
              "image": "./images/intercompany/intercompany.jpeg",
              "type": "UI"
            },
            {
              "name": "Mockup for the Largest European Public Sector Organization",
              "subTitle": "30+ High-Fid Screens",
              "icon": "sap-icon://official-service",
              "description": "<strong>'Blueprint':</strong> UX Mockup, Prototype, and Validation.",
              "details": "<ul><li>Laying the foundation for the app to-be-built by <strong>empathizing with user groups</strong>, defining key needs, and mapping out corresponding features.</li><li>Fully clickable and functionable Figma Prototype with <strong>+30 end-to-end</strong> screens.</li></ul>",
              "linkText": "Click Here for a Video Demo",
              "Width": "50",
              "Height": "30",
              "image": "./images/EC/european.jpeg",
              "type": "UX"
            },
            {
              "name": "UserFirst Mockup",
              "subTitle": "Streamline the User-Centricity Process",
              "icon": "sap-icon://customer",
              "description": "Facilitates the <strong>adoption of user-centricity methodology</strong> and allows project teams to create products & services that <strong>meet the needs</strong> of the end-user.",
              "details": "<ul><li>Enable cross-functional teams to work together more effectively</li><li>Create products that meet & exceed user expectations</li><li>Drive customer satisfaction, loyalty, and business success.</li></ul>",
              "linkText": "Click Here for a Video Demo",
              "Width": "50",
              "Height": "30",
              "image": "./images/userFirst/userFirst.jpeg",
              "type": "UX"
            },
          ]
        };

        const oModel = new JSONModel(oData);
        this.getView().setModel(oModel, "portfolioModel");

      },

      getRouter: function () {
        return UIComponent.getRouterFor(this);
      },

      onOpenDemo: function (oEvent) {
        var sName = oEvent.getSource().getBindingContext("portfolioModel").getObject().name;
        var sUrl;
        if (sName === "Demand Genius") {
          var sUrl = 'https://video.sap.com/media/t/1_7vjzk1ja';
          library.URLHelper.redirect(sUrl, true);
        } else if (sName === "CGM") {
          var sUrl = 'https://sap.sharepoint.com/sites/200686/SitePages/Customer-Goal-Management.aspx';
          library.URLHelper.redirect(sUrl, true);
        }


      },

      onSelectType: function (oEvent) {
        var sKey = oEvent.getSource().getSelectedKey();
        var oModel = this.getView().getModel("portfolioModel");
        var aFilters = [];

        if (sKey !== "Both") {
          var aFilters = [
            new Filter({
              filters: [
                new Filter({ path: "type", operator: FilterOperator.Contains, value1: sKey, caseSensitive: false }),
              ],
              and: false
            })
          ];
          MessageToast.show("Only '" + sKey + "' results are shown!")
        } else MessageToast.show("All results are shown!");

        var oList = this.byId("portfolioList");
        var oBinding = oList.getBinding("pages")
        oBinding.filter(aFilters, FilterType.Application);

      },


    });
  }
);




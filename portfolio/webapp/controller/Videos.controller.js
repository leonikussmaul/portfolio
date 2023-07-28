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

        return BaseController.extend("myportfolio.portfolio.controller.Videos", {
            formatter: formatter,

            onInit() {


                const oData = {
                    videos: [

                        {
                            "name": "Demand Genius",
                            "subTitle": "Team-based Web Application",
                            "icon": "sap-icon://Netweaver-business-client",
                            "description": "Need-Based Application that leverages a <strong>user-friendly</strong> and <strong>intuitive UX/UI</strong> while putting business <strong>efficiency</strong> and <strong>productivity</strong> first.",
                            "image": "./images/demandGenius/overview.jpeg",
                            "details": "End-to-end design & development ownership using various tools & technologies, such as:</li> <ul><li>SAP BTP (Cloud Platform)</li><li>SAPUI5 JavaScript Front-End Framework</li><li>SAP Business Application Studio IDE</li></ul>",
                        },
                        {
                            "name": "BTP Video Series",
                            "subTitle": "Explaining the 4 Pillar's of our Cloud Platform for the SAP.com Landing Page",
                            "icon": "sap-icon://cloud",
                            "image": "./images/btpVideos.jpeg"
                        },
                        {
                            "name": "Integration [SAP Internal Only]",
                            "subTitle": "What, Why, How?",
                            "icon": "sap-icon://puzzle",
                            "image": "./images/integration.jpeg",
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
                } else if (sName === "BTP Video Series") {
                    var sUrl = 'https://www.sap.com/cmp/oth/business-technology-platform-video-series/index.html';
                    library.URLHelper.redirect(sUrl, true);
                } else if (sName === "Integration [SAP Internal Only]") {
                    var sUrl = ' https://video.sap.com/media/t/1_u2xw75j2';
                    library.URLHelper.redirect(sUrl, true);
                }

            },



        });
    }
);




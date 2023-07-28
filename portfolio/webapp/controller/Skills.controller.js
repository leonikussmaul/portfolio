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

        return BaseController.extend("myportfolio.portfolio.controller.Skills", {
            formatter: formatter,

            onInit() {




                var oLayout1 = this.getView().byId("saptools");
                var oTemplate1 = oLayout1.getBindingInfo("content").template;
                oLayout1.bindAggregation("content", {
                    path: 'portfolioModel>/saptools',
                    template: oTemplate1,
                    sorter: new sap.ui.model.Sorter('tool', false)
                });

                var oLayout1 = this.getView().byId("skills");
                var oTemplate1 = oLayout1.getBindingInfo("content").template;
                oLayout1.bindAggregation("content", {
                    path: 'portfolioModel>/skills',
                    template: oTemplate1,
                    sorter: new sap.ui.model.Sorter('skill', false)
                });

                var oLayout1 = this.getView().byId("tools");
                var oTemplate1 = oLayout1.getBindingInfo("content").template;
                oLayout1.bindAggregation("content", {
                    path: 'portfolioModel>/tools',
                    template: oTemplate1,
                    sorter: new sap.ui.model.Sorter('tool', false)
                });

                var oLayout1 = this.getView().byId("qualifications");
                var oTemplate1 = oLayout1.getBindingInfo("content").template;
                oLayout1.bindAggregation("content", {
                    path: 'portfolioModel>/qualifications',
                    template: oTemplate1,
                    sorter: new sap.ui.model.Sorter('qualification', false)
                });



                const oData = {
                    skills: [

                        {
                            "skill": "JavaScript",
                            "pressed": "true"
                        },
                        {
                            "skill": "HTML5",
                            "pressed": "true"
                        },
                        {
                            "skill": "CSS3",
                            "pressed": "true"
                        },
                        {
                            "skill": "C"
                        },
                        {
                            "skill": "Design Thinking",
                            "pressed": "true"
                        },
                        {
                            "skill": "OData APIs"
                        },
                        {
                            "skill": "REST APIs"
                        },
                        {
                            "skill": "Wireframing"
                        },
                        {
                            "skill": "Prototyping"
                        },
                        {
                            "skill": "German [native]",
                            "pressed": "true"
                        },
                        {
                            "skill": "English [native]",
                            "pressed": "true"
                        },
                        {
                            "skill": "Croatian [native]"
                        },
                        {
                            "skill": "French [beginner]"
                        },
                        {
                            "skill": "Spanish [beginner]"
                        },
                    ],
                    tools: [

                        {
                            "tool": "Figma",
                            "pressed": "true"
                        },
                        {
                            "tool": "GIT"
                        },
                        {
                            "tool": "Postman"
                        },
                        {
                            "tool": "Visual Studio Code",
                            "pressed": "true"
                        },
                        {
                            "tool": "Jira"
                        },
                        {
                            "tool": "MURAL"
                        },
                    ],
                    saptools: [
                        {
                            "tool": "SAPUI5 JavaScript Front-End Framework",
                            "pressed": "true"
                        },
                        {
                            "tool": "Business Application Studio IDE"
                        },
                        {
                            "tool": "Business Technology Platform (BTP)",
                            "pressed": "true"
                        },
                        {
                            "tool": "Fiori",
                            "pressed": "true"
                        },
                        {
                            "tool": "Fiori Elements"
                        },
                        {
                            "tool": "SAP Build Low-Code/No-Code"
                        },
                        {
                            "tool": "Cloud Application Programming Model (CAP)",
                            "pressed": "true"
                        },
                        {
                            "tool": "SolMan"
                        }
                    ],
                    qualifications: [
                        {
                            "qualification": "Harvard CS50: Intro to Computer Science",
                            "pressed": "true"
                        },
                        {
                            "qualification": "SAP Services Hero Award 2021"
                        },
                        {
                            "qualification": "SAPX01 – SAP User Experience Fundamentals and Best Practices"
                        },
                        {
                            "qualification": "SAPUX402 – Advanced SAPUI5 Development",
                            "pressed": "true"
                        },
                        {
                            "qualification": "BBA in Marketing & Design [4.00 GPA]",
                            "pressed": "true"
                        },
                        {
                            "qualification": "Google: The Fundamentals of Digital Marketing"
                        },
                        {
                            "qualification": "Google Analytics for Beginners"
                        },
                        {
                            "qualification": "IELTS English: 8.0"
                        },


                    ],
                };

                const oModel = new JSONModel(oData);
                this.getView().setModel(oModel, "portfolioModel");

            },

            getRouter: function () {
                return UIComponent.getRouterFor(this);
            },

            onOpenDemo: function (oEvent) {
                var sUrl = 'https://video.sap.com/media/t/1_7vjzk1ja';
                library.URLHelper.redirect(sUrl, true);

            },



        });
    }
);




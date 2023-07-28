
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
                            "pressed": "true",
                            "type": "UI"
                        },
                        {
                            "skill": "HTML5",
                            "pressed": "true",
                            "type": "UI"
                        },
                        {
                            "skill": "CSS3",
                            "pressed": "true",
                            "type": "UI"
                        },
                        {
                            "skill": "C",
                            "type": "UI"
                        },
                        {
                            "skill": "Design Thinking",
                            "pressed": "true",
                            "type": "UX"
                        },
                        {
                            "skill": "OData APIs",
                            "type": "UI"
                        },
                        {
                            "skill": "REST APIs",
                            "type": "UI"
                        },
                        {
                            "skill": "Wireframing",
                            "type": "UX"
                        },
                        {
                            "skill": "Prototyping",
                            "type": "UX"
                        },
                        {
                            "skill": "German [native]",
                            "pressed": "true",
                            "type": "Both"
                        },
                        {
                            "skill": "English [native]",
                            "pressed": "true",
                            "type": "Both"
                        },
                        {
                            "skill": "Croatian [native]",
                            "type": "Both"
                        },
                        {
                            "skill": "French [beginner]",
                            "type": "Both"
                        },
                        {
                            "skill": "Spanish [beginner]",
                            "type": "Both"
                        },
                        {
                            "skill": "SCRUM",
                            "type": "Both"
                        }
                    ],
                    tools: [

                        {
                            "tool": "Figma",
                            "pressed": "true",
                            "type": "UX"
                        },
                        {
                            "tool": "GIT",
                            "type": "UI"
                        },
                        {
                            "tool": "Postman",
                            "type": "UI"
                        },
                        {
                            "tool": "Visual Studio Code",
                            "pressed": "true",
                            "type": "UI"
                        },
                        {
                            "tool": "Jira",
                            "type": "UI"
                        },
                        {
                            "tool": "MURAL",
                            "type": "UX"
                        },
                    ],
                    saptools: [
                        {
                            "tool": "SAPUI5 JavaScript Front-End Framework",
                            "pressed": "true",
                            "type": "UI"
                        },
                        {
                            "tool": "Business Application Studio IDE",
                            "type": "UI"
                        },
                        {
                            "tool": "Business Technology Platform (BTP)",
                            "pressed": "true",
                            "type": "UI"
                        },
                        {
                            "tool": "Fiori",
                            "pressed": "true",
                            "type": "UX"
                        },
                        {
                            "tool": "Fiori Elements",
                            "type": "UI"
                        },
                        {
                            "tool": "SAP Build Low-Code/No-Code",
                            "type": "UI"
                        },
                        {
                            "tool": "Cloud Application Programming Model (CAP)",
                            "pressed": "true",
                            "type": "UI"
                        },
                        {
                            "tool": "SolMan",
                            "type": "UI"
                        }
                    ],
                    qualifications: [
                        {
                            "qualification": "Harvard CS50: Intro to Computer Science",
                            "pressed": "true",
                            "type": "UI"
                        },
                        {
                            "qualification": "SAP Services Hero Award 2021",
                            "type": "Both"
                        },
                        {
                            "qualification": "SAPX01 – SAP User Experience Fundamentals and Best Practices",
                            "type": "UX"
                        },
                        {
                            "qualification": "SAPUX402 – Advanced SAPUI5 Development",
                            "pressed": "true",
                            "type": "UI"
                        },
                        {
                            "qualification": "BBA in Marketing & Design [4.00 GPA]",
                            "pressed": "true",
                            "type": "UX"
                        },
                        {
                            "qualification": "Google: The Fundamentals of Digital Marketing",
                            "type": "Both"
                        },
                        {
                            "qualification": "Google Analytics for Beginners",
                            "type": "Both"
                        },
                        {
                            "qualification": "IELTS English: 8.0",
                            "type": "Both"
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


            onSelectType: function (oEvent) {
                var sKey = oEvent.getSource().getSelectedKey();
                var oModel = this.getView().getModel("portfolioModel");
                var aFilters = [];

                if (sKey !== "Both") {
                    var aFilters = [
                        new Filter({
                            filters: [
                                new Filter({ path: "type", operator: FilterOperator.EQ, value1: sKey, caseSensitive: false }),
                            ],
                            and: false
                        })
                    ];
                    MessageToast.show("Only '" + sKey + "' results are shown!")
                } else MessageToast.show("All results are shown!");

                var oList = this.byId("saptools");
                var oBinding = oList.getBinding("content")
                oBinding.filter(aFilters, FilterType.Application);

                var oList = this.byId("skills");
                var oBinding = oList.getBinding("content")
                oBinding.filter(aFilters, FilterType.Application);

                var oList = this.byId("tools");
                var oBinding = oList.getBinding("content")
                oBinding.filter(aFilters, FilterType.Application);

                var oList = this.byId("qualifications");
                var oBinding = oList.getBinding("content")
                oBinding.filter(aFilters, FilterType.Application);



            }


        });
    }
);




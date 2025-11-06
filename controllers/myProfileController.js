(function (ng, app) {
    console.log("controller");
    appMyProfile.controller("myProfileController", ['$scope', function ($scope) {

        //$scope.days = function (date) {
        //    var today = new Date();
        //    var dd = today.getDate();
        //    var mm = today.getMonth() + 1; //January is 0!
        //    var yyyy = today.getFullYear();
        //    if (dd < 10) {
        //        dd = '0' + dd
        //    }
        //    if (mm < 10) {
        //        mm = '0' + mm
        //    }
        //    today = yyyy + '/' + mm + '/' + dd;
        //    $scope.today = today;
        //    var date2 = new Date(today);
        //    var date1 = new Date(date);
        //    var timeDiff = Math.abs(date2.getTime() - date1.getTime());
        //    $scope.dayDifference = Math.ceil((timeDiff / (1000 * 3600 * 24)) / 365);
        //    return $scope.dayDifference;
        //    console.log = dayDifference;
        //}
        

        console.log("controllerLoaded");

        $('.carousel').carousel({
            interval: false
        });
        
        $scope.selected = { value: 0 };

        $scope.projects = [
            { projectName: 'Bank of the West' },
            { projectName: 'Telstra' },
            { projectName: 'Rogers' },
            { projectName: 'RBC Wealth Front office automation' },
            { projectName: 'RBC Toolbar' }            
        ];

        $scope.project2s = [
            { projectName: 'GSK - Healthcare' },
            { projectName: 'Mortagage Solutions - Banking' },
            { projectName: 'Nestle' },
            { projectName: 'Morgan Stanley' },
            { projectName: 'WebAPI - Banking' },
            { projectName: 'SIA Menu Creations' },
            { projectName: 'Purchase Order - Custom Application' }
        ];

        $scope.project3s = [
            { projectName: 'Fisher' },
            { projectName: 'ASAP' }
        ];

        $scope.project4s = [
            { projectName: 'Dr Car' },
            { projectName: 'Firehost' },
            { projectName: 'My Life Book' },
            { projectName: 'iOMS/HRMS/KensiumHR' },
            { projectName: 'Precious Moments' },
            { projectName: 'Traveltex' },
            { projectName: 'Dr Cherie' },
            { projectName: 'Chicago Luxury Beds' },
            { projectName: 'Capsgold' },
            { projectName: 'Krohnandmoss' },
            { projectName: 'Springhill Nursery' },
            { projectName: 'Diamondenvy' },
            { projectName: 'iOMS/HRMS/KensiumHR' }
        ];

        $scope.project6s = [
            { projectName: 'Payroll-Softwares' },
            { projectName: 'SA100' },
            { projectName: 'SA800' },
            { projectName: 'SA900' },
            { projectName: 'CT600' }
        ];

        // TechM - P1 - Bank of the West

        $scope.myObj = {
            "Project Name": "Contact Center Consolidated GUI (CCCGUI)",
            "Client": "Bank of the West",
            "Role": "UI Developer",
            "Organization": "Tech Mahindra, India"
        }

        $scope.p1 = {
            pName: "Bank of the West",
            projTitle: "Project Description",
            projDescription: "UNO Consolidated GUI project for Bank Of The West was aimed at implementing a consolidated GUI for Desktop automation for contact center agents in order to improve the day to day operation efficiencies. There were 12 Use Cases that were implemented which were identified as candidates based on the Analysis done basis the calls received by the Contact Centre to perform activities related to Accounts and Card maintenance",
            projTitleTwo: "Contribution",
            projTitleThree: "Environment",
            envDetails: "UNO RPA, Angular JS, Bootstrap, MVC Framework, .NET, WCF"
        };

        $scope.contributionsTm = [
            { "ContributionDesc": "Designing the Wireframes and Mocukups" },
            { "ContributionDesc": "Converting the Mock-ups into dynamic HTMLs" },
            { "ContributionDesc": "Discussion with developers about CSS Browser compatibility issues." },
            {"ContributionDesc" : "Developing the project SmartGUI as per the technical design document (TDD) to meet the defined requirements."},
            { "ContributionDesc": "Troubleshoot the issues when converting the Mocukups in to Dynamic Htmls using jQuery/Angularjs Frameworks" },
            { "ContributionDesc": "Coding using HTML pages and using frameworks like bootstrap and AngularJs" }
        ];

        $scope.contributionsTmPoc1 = [
            { "ContributionDesc": "Collect the user details from the body of the mail." },
            { "ContributionDesc": "Check the format of MUD ID, Group name and User name." },
            { "ContributionDesc": "Login in to GSK Statistica application" },
            { "ContributionDesc": "Navigate to the user details page and filled up the all details." }
        ];
        $scope.contributionsTmPoc2 = [
            { "ContributionDesc": "Developed the front end sample bank application." },
            { "ContributionDesc": "Download the invoices from outlook based on particular subject line and group name" },
            { "ContributionDesc": "Create the folder with current date and time and put all invoices." },
            { "ContributionDesc": "Extract the details and keen the same into application" }
        ];
        $scope.contributionsTmPoc3 = [
            { "ContributionDesc": "Designing the Wireframes and converting the same into HTMLs" },
            { "ContributionDesc": "Download the patient case details forms (pdf/word) from outlook based on the few keywords which includes in subject line.." },
            { "ContributionDesc": "Extract the patient case details.." },
            { "ContributionDesc": "Login into Argus application." },
            { "ContributionDesc": "Create the case id by posting few mandatory fields." },
            { "ContributionDesc": "Open the created case and Keen the all necessary fields in Argus." }
        ];
        $scope.contributionsOlive = [
            { "ContributionDesc": "Coding using HTML pages and using frameworks like bootstrap" },
            { "ContributionDesc": "Converting the Mock-ups into HTMLs" },
            { "ContributionDesc": "Discussion with developers about CSS Browser compatibility issues." },
            { "ContributionDesc": "Bug Fixing in the design as well in desktop and Tablet" },
            { "ContributionDesc": "Working with developer for support to integrate html Mock-ups in to .Dotnet MVC." },
            { "ContributionDesc": "Discussion with developers about CSS Browser compatibility issues." },
            { "ContributionDesc": "Working with developer for support to integrate the code in ASP. Net MVC." }
        ];


        // TechM - P2 - Telstra

        $scope.myObjP2 = {
            "Project Name": "Telstra - Telecommunications company",
            "Client": "Telstra",
            "Role": "UI Developer",
            "Organization": "Tech Mahindra, India"
        }

        $scope.p2 = {
            pName: "Telstra",
            projTitle: "Project Description",
            projDescription: "Telstra Corporation Limited is Australia's largest telecommunications and media company which builds and operates telecommunications networks and markets voice, mobile, internet access, pay television and other entertainment products and services",
            projTitleTwo: "Contribution",
            projTitleThree: "Environment",
            envDetails: "UNO RPA, Angular JS, Bootstrap, MVC Framework, .NET, WCF"
        };


        // TechM - P3 - Rogers

        $scope.myObjP3 = {
            "Project Name": "Rogers",
            "Client": "Rogers",
            "Role": "UI Developer",
            "Organization": "Tech Mahindra, India"
        }

        $scope.p3 = {
            pName: "Rogers",
            projTitle: "Project Description",
            projDescription: "Rogers Communications Inc. is a Canadian communications and media company. It operates particularly in the field of wireless communications, cable television, telephone, and Internet connectivity with significant additional telecommunications and mass media assets.",
            projTitleTwo: "Contribution",
            projTitleThree: "Environment",
            envDetails: "UNO RPA, Angular JS, Bootstrap, MVC Framework, .NET, WCF"
        };

        // TechM - P4 - RBC Wealth Front office automation

        $scope.myObjP4 = {
            "Project Name": "Real-time Investment and Trade Advisory - RITA",
            "Client": "RBC Wealth Front office automation",
            "Role": "UI Developer",
            "Organization": "Tech Mahindra, India"
        }

        $scope.p4 = {
            pName: "Real-time Investment and Trade Advisory - RITA",
            projTitle: "Project Description",
            projDescription: "Financial Advisory services are looking at engaging their clients more effectively through informed interactions, providing contextual goal based investment advisory thereby increasing the trust of the clients and by enhancing the wallet share.",
            projTitleTwo: "Contribution",
            projTitleThree: "Environment",
            envDetails: "UNO RPA, Angular JS, Bootstrap, MVC Framework, .NET, WCF"
        };

        // TechM - P5

        $scope.myObjP5 = {
            "Project Name": "RBC SmartUI",
            "Client": "RBC",
            "Role": "UI Developer",
            "Organization": "Tech Mahindra, India"
        }

        $scope.p5 = {
            pName: "RBC SmartUI",
            projTitle: "Project Description",
            projDescription: "RBC Toolbar Navigation control the ",
            projTitleTwo: "Contribution",
            projTitleThree: "Environment",
            envDetails: "UNO RPA, Angular JS, Bootstrap, MVC Framework, .NET, WCF"
        };       


        $scope.hader = 'Put here your header';
        $scope.body = 'Put here your body';
        $scope.footer = 'Put here your footer';

        //$scope.myRightButton = function (bool) {
        //    alert('!!! first function call!');
        //};


        // TechM - P5 - Fisher

        $scope.myObjP10 = {
            "Project Name": "FISHER",
            "Client": "FISHER - Community Bible Study",
            "Role": "UI Developer",
            "Organization": "Olive Technology Pvt Ltd"
        }

        $scope.p10 = {
            pName: "FISHER - Community Bible Study",
            projTitle: "Project Description",
            projDescription: "The FISHER system will replace the current Membership System with a scalable and flexible platform that embraces the best of current technologies for interfaces, databases, hosting, development and integration to provide a state-of-the-art system for CBS class leaders and members. It will be touch-friendly, allowing class members and leaders to access the system from their tablet devices. Integration of usability features, such as 'drag and drop' for assigning class members to core groups, will make the system more intuitive to use, reducing frustration and lowering training costs.",
            projTitleTwo: "Contribution",
            projTitleThree: "Environment",
            envDetails: "Bootstrap, MVC Framework, .NET, jQuery, Javascript"
        };

        // TechM - P6 - ASAP

        $scope.myObjp6 = {
            "Project Name": "FISHER",
            "Client": "FISHER - Community Bible Study",
            "Role": "UI Developer",
            "Organization": "Olive Technology Pvt Ltd"
        }

        $scope.p6 = {
            pName: "FISHER - Community Bible Study",
            projTitle: "Project Description",
            projDescription: "",
            projTitleTwo: "Contribution",
            projTitleThree: "Environment",
            envDetails: "Bootstrap, MVC Framework, .NET, jQuery, Javascript"
        };

        // Olive - P11 - ASAP

        $scope.myObjp11 = {
            "Project Name": "ASAP",
            "Client": "ASAP Audits & Inspections",
            "Role": "UI Developer",
            "Organization": "Olive Technology Pvt Ltd"
        }

        $scope.p11 = {
            pName: "ASAP Audits & Inspections",
            projTitle: "Project Description",
            projDescription: "ASAP Audits & Inspections, is a software application which has multiple facets. Primary purpose is to collect data using tablet with an Android operating system with an integrated bar-codes scanner. Secondary, sending collected and saved data to desktop using web services. Modules in the application are divided on role based .Typically there are three roles in the application namely; Global Admin, Who has access to all the modules in the application. Second, we have Client Admin, who holds features like checking the inspections, assigning corrective actions for Auditors and so on. Third Auditor only conducts the Audit / Inspection using Tablet by collecting data and saves the data.",
            projTitleTwo: "Contribution",
            projTitleThree: "Environment",
            envDetails: "Bootstrap, MVC Framework, .NET, jQuery, Javascript"
        };


        $scope.myObjPoc01 = {
            "Project Name": "GSK Statistica",
            "Client": "GSK",
            "Role": "RPA Developer",
            "Organization": "Tech Mahindra"
        }

        $scope.Poc01 = {
            pName: "GSK Statistica",
            projTitle: "Project Description",
            projDescription: "The process of Statistica involves citrix, web and excel applications. It will add the user details into system based on MUD ID, Group Name and user name. Once the user details have been added into system the system will check the details whether the user is already existed or not. If the user does not existed in system, BOT will go to excel and update the user details and reply to the user with confirmation.",
            projTitleTwo: "Contribution",
            projTitleThree: "Environment",
            envDetails: "Automation Anywhere"
        };


        $scope.myObjPoc02 = {
            "Project Name": "Mortgage Solutions",
            "Client": "BFS",
            "Role": "RPA Developer",
            "Organization": "Tech Mahindra"
        }

        $scope.Poc02 = {
            pName: "BFS",
            projTitle: "Project Description",
            projDescription: "The process of Mortgage solution involves web application, pdf and outlook. Here when the user wants to know the information about the particular loans, the BOT will give the details of the loan.",
            projTitleTwo: "Contribution",
            projTitleThree: "Environment",
            envDetails: "Automation Anywhere"
        };

        $scope.myObjPoc03 = {
            "Project Name": "GALDERMA ",
            "Client": "GALDERMA ",
            "Role": "RPA Developer",
            "Organization": "Tech Mahindra"
        }

        $scope.Poc03 = {
            pName: "Nestle - Healthcare",
            projTitle: "Project Description",
            projDescription: "The process of nestle involves Argus application, pdfs, outlook. Here when the request comes with patient case details, BOT will capture those details from pdf and post the same in Argus application which is a web application and create the case details for each individual patient.",
            projTitleTwo: "Contribution",
            projTitleThree: "Environment",
            envDetails: "Automation Anywhere"
        };

        // TechM - Acuity

        $scope.myObjprjAcuityOne = {
            "Project Name": "Andica Payroll Software",
            "Client": "Andica",
            "Role": "Web Designer",
            "Organization": "Acuity Software Technologies (Pvt) Limited."
        }

        $scope.prjAcuityOne = {
            pName: "Andica Payroll Software",
            projTitle: "Project Description",
            projDescription: "Andica Payroll Software is an easy to use yet comprehensive payroll solution to calculate Employees and Directors payroll and submission of Real Time Information RTI to HMRC. Software includes calculations for PAYE, National Insurance Contributions, Statutory Payments, Pension contributions, Attachment of Earnings Order, Student Loan, etc and performs a range of other payroll functions.",
            projTitleTwo: "Contribution",
            projTitleThree: "Environment",
            envDetails: "UX Screens, HTML, CSS"
        };


        $scope.myObjprjAcuityTwo = {
            "Project Name": "SA100",
            "Client": "Andica",
            "Role": "Web Designer",
            "Organization": "Acuity Software Technologies (Pvt) Limited."
        }

        $scope.prjAcuityTwo = {
            pName: "SA100 Self Assessment Software",
            projTitle: "Project Description",
            projDescription: "Andica Self Assessment tax software for Personal tax returns can be used by Individual tax payers or Professionals. The software is supplied in two editions: Andica Self Assessment Personal edition that provides HMRC (Inland Revenue) self assessment tax return solution suitable for use by individual taxpayers. This edition is available in two options, 1 tax payer edition to prepare tax returns for 1 taxpayer or a 5 tax-payers edition suitable for up to 5 tax returns prepared from a single installation. Andica Self Assessment Software Professional edition is suitable for accountants, tax consultants or other professionals preparing self assessment tax returns for their clients. The software is available in bands of tax payers to suit the size of your client base.",
            projTitleTwo: "Contribution",
            projTitleThree: "Environment",
            envDetails: "UX Screens, HTML, CSS"
        };

        $scope.myObjprjAcuityThree = {
            "Project Name": "SA800",
            "Client": "Andica",
            "Role": "Web Designer",
            "Organization": "Acuity Software Technologies (Pvt) Limited."
        }

        $scope.prjAcuityThree = {
            pName: "SA800 Self Assessment Software",
            projTitle: "Project Description",
            projDescription: "Andica Payroll Software is an easy to use yet comprehensive payroll solution to calculate Employees and Directors payroll and submission of Real Time Information RTI to HMRC. Software includes calculations for PAYE, National Insurance Contributions, Statutory Payments, Pension contributions, Attachment of Earnings Order, Student Loan, etc and performs a range of other payroll functions.",
            projTitleTwo: "Contribution",
            projTitleThree: "Environment",
            envDetails: "UX Screens, HTML, CSS"
        };

        $scope.myObjprjAcuityFour = {
            "Project Name": "SA900",
            "Client": "Andica",
            "Role": "Web Designer",
            "Organization": "Acuity Software Technologies (Pvt) Limited."
        }

        $scope.prjAcuityFour = {
            pName: "SA900 Self Assessment Software",
            projTitle: "Project Description",
            projDescription: "Andica SA900 Trust and Estate tax returns software assists you with completion, calculation of trust and estate tax liabilities and online submission of the returns. Software can be used by personal representatives of a deceased person and their estate, trustees of a trust or tax advisors. A Trustee of a Trust or a Personal Representative of a deceased person needs to complete an SA900 Trust and Estate Tax return and submit it to the HMRC. Andica SA900 Trust & Estate software assists you with preparation of a tax return, calculation of trust and estate tax liabilities and secure online submission of the returns.",
            projTitleTwo: "Contribution",
            projTitleThree: "Environment",
            envDetails: "UX Screens, HTML, CSS"
        };


        $scope.myObjprjAcuityFive = {
            "Project Name": "CT100",
            "Client": "Andica",
            "Role": "Web Designer",
            "Organization": "Acuity Software Technologies (Pvt) Limited."
        }

        $scope.prjAcuityFive = {
            pName: "CT600 Corporation Tax Software",
            projTitle: "Project Description",
            projDescription: "Andica Corporation Tax Returns software helps to complete CT600 Company tax return form and submit it online to the HMRC. Limited companies and other organisations that are liable and are within the charge to Corporation Tax must file their CT returns each year and pay any tax that may be due. Software is aimed at Companies, Accountants and Tax Advisors. The software is available in multiple Company bands (of 1, 5, 25, 100 and Unlimited Companies) and for larger practices requiring multiple users to access and share the data on the network, multi-user licenses are available.",
            projTitleTwo: "Contribution",
            projTitleThree: "Environment",
            envDetails: "UX Screens, HTML, CSS"
        };
                
        // Timeline //

        $scope.portfolios =
            [{
                ngClassDev: "backend",
                profilePic: "projects/kensium/1Login.jpg",
                prTitle: "RBC",
                prMeta: "UX Design Tools",
                urlLink: "",
                urlPass: "#"
            },
            {
                ngClassDev: "backend",
                profilePic: "projects/tm/BPM-Pega/01. Dashboard-inFlightProcess.jpg",
                prTitle: "BPM-Pega",
                prMeta: "UX Design Tools",
                urlLink: "",
                urlPass: "#"
            },
            {
                ngClassDev: "backend",
                profilePic: "projects/tm/telstra/Telstra003.jpg",
                prTitle: "Telecom ",
                prMeta: "UX Design Tools",
                urlLink: "",
                urlPass: "#"
            },
            {
                ngClassDev: "backend",
                profilePic: "projects/tm/rbc-wh/RITA-dataScreen-2.jpg",
                prTitle: "RITA Healthcare ",
                prMeta: "UX Design Tools",
                urlLink: "",
                urlPass: "#"
            },

                {
                ngClassDev: "frontend",
                profilePic: "img/drcar.co.in.png",
                prTitle: "Dr Car",
                prMeta: "HTML, CSS, jQuery",
                urlLink: "drcar.co.in",
                urlPass: "http://drcar.co.in"

            },
            {
                ngClassDev: "frontend",
                profilePic: "/projects/kensium/Firehost/firehost.jpg",
                prTitle: "Firehost",
                prMeta: "HTML, CSS, jQuery",
                urlLink: "View on HTML",
                urlPass: "http://firehost.com"
            },
            {
                ngClassDev: "frontend",
                profilePic: "projects/kensium/mylifebook.jpg",
                prTitle: "My Life Book",
                prMeta: "HTML, CSS, jQuery",
                urlLink: "View on HTML",
                urlPass: "#"
            },
            {
                ngClassDev: "backend",
                profilePic: "img/thumb_image_not_available.png",
                prTitle: "iOMS/HRMS/KensiumHR",
                prMeta: "HTML, CSS, jQuery",
                urlLink: "View on HTML",
                urlPass: "#"
            },
            {
                ngClassDev: "frontend",
                profilePic: "projects/kensium/preciousmoments.jpg",
                prTitle: "Precious Moments",
                prMeta: "HTML, CSS, jQuery",
                urlLink: "View on HTML",
                urlPass: "#"
            },
            {
                ngClassDev: "frontend",
                profilePic: "projects/kensium/traveltexas.jpg",
                prTitle: "Traveltex",
                prMeta: "HTML, CSS, jQuery",
                urlLink: "View on HTML",
                urlPass: "#"
            },
            {
                ngClassDev: "frontend",
                profilePic: "img/thumb_image_not_available.png",
                prTitle: "Dr Cherie",
                prMeta: "HTML, CSS, jQuery",
                urlLink: "View on HTML",
                urlPass: "#"
            },
            {
                ngClassDev: "frontend",
                profilePic: "img/thumb_image_not_available.png",
                prTitle: " Chicago Luxury Beds ",
                prMeta: "HTML, CSS, jQuery",
                urlLink: "View on HTML",
                urlPass: "#"
            },
            {
                ngClassDev: "frontend",
                profilePic: "projects/kensium/capsgold.jpg",
                prTitle: "Capsgold",
                prMeta: "HTML, CSS, jQuery",
                urlLink: "View on HTML",
                urlPass: "#"
            },
            {
                ngClassDev: "frontend",
                profilePic: "projects/kensium/krohnandmoss.jpg",
                prTitle: "  Krohnandmoss",
                prMeta: "HTML, CSS, jQuery",
                urlLink: "View on HTML",
                urlPass: "#"
            },
            
            {
                ngClassDev: "frontend",
                profilePic: "projects/kensium/springhillnursery.jpg",
                prTitle: " Springhill Nursery",
                prMeta: "HTML, CSS, jQuery",
                urlLink: "View on HTML",
                urlPass: "#"
            },
            {
                ngClassDev: "frontend",
                profilePic: "projects/kensium/diamondenvy.jpg",
                prTitle: "Diamondenvy",
                prMeta: "HTML, CSS, jQuery",
                urlLink: "View on HTML",
                urlPass: "#"
            }
            ];

	}]);
})(angular, appMyProfile);
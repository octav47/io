webpackJsonp([42],{756:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=n(0),r=n.n(s),l=n(527),c=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),m=n(917),d=function(e){function t(){return a(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,e),c(t,[{key:"render",value:function(){return r.a.createElement("div",{id:"extr-page"},r.a.createElement("header",{id:"header",className:"animated fadeInDown"},r.a.createElement("div",{id:"logo-group"},r.a.createElement("span",{id:"logo"}," ",r.a.createElement("img",{src:"assets/img/logo.png",alt:"SmartAdmin"})," ")),r.a.createElement("span",{id:"extr-page-header-space"},r.a.createElement("span",{className:"hidden-mobile hiddex-xs"},"Already registered?")," ",r.a.createElement("a",{href:"#login",className:"btn btn-danger"},"Sign In")," ")),r.a.createElement("div",{id:"main",role:"main",className:"animated fadeInDown"},r.a.createElement("div",{id:"content",className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-xs-12 col-sm-12 col-md-7 col-lg-7 hidden-xs hidden-sm"},r.a.createElement("h1",{className:"txt-color-red login-header-big"},"SmartAdmin"),r.a.createElement("div",{className:"hero"},r.a.createElement("div",{className:"pull-left login-desc-box-l"},r.a.createElement("h4",{className:"paragraph-header"},"It's Okay to be Smart. Experience the simplicity of SmartAdmin, everywhere you go!"),r.a.createElement("div",{className:"login-app-icons"},r.a.createElement("a",{href:"#/dashboard",className:"btn btn-danger btn-sm"},"Frontend Template"),r.a.createElement("span",null," "),r.a.createElement("a",{href:"#/smartadmin/different-versions.html",className:"btn btn-danger btn-sm"},"Find out more"))),r.a.createElement("img",{src:"assets/img/demo/iphoneview.png",alt:"",className:"pull-right display-image",style:{width:"210px"}})),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-xs-12 col-sm-12 col-md-6 col-lg-6"},r.a.createElement("h5",{className:"about-heading"},"About SmartAdmin - Are you up to date?"),r.a.createElement("p",null,"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa.")),r.a.createElement("div",{className:"col-xs-12 col-sm-12 col-md-6 col-lg-6"},r.a.createElement("h5",{className:"about-heading"},"Not just your average template!"),r.a.createElement("p",null,"Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi voluptatem accusantium!")))),r.a.createElement("div",{className:"col-xs-12 col-sm-12 col-md-5 col-lg-5"},r.a.createElement("div",{className:"well no-padding"},r.a.createElement("form",{action:"#/dashboard",id:"smart-form-register",className:"smart-form client-form"},r.a.createElement("header",null,"Registration is FREE*"),r.a.createElement("fieldset",null,r.a.createElement("section",null,r.a.createElement("label",{className:"input"}," ",r.a.createElement("i",{className:"icon-append fa fa-user"}),r.a.createElement("input",{type:"text",name:"username",placeholder:"Username"}),r.a.createElement("b",{className:"tooltip tooltip-bottom-right"},"Needed to enter the website")," ")),r.a.createElement("section",null,r.a.createElement("label",{className:"input"}," ",r.a.createElement("i",{className:"icon-append fa fa-envelope"}),r.a.createElement("input",{type:"email",name:"email",placeholder:"Email address"}),r.a.createElement("b",{className:"tooltip tooltip-bottom-right"},"Needed to verify your account")," ")),r.a.createElement("section",null,r.a.createElement("label",{className:"input"}," ",r.a.createElement("i",{className:"icon-append fa fa-lock"}),r.a.createElement("input",{type:"password",name:"password",placeholder:"Password",id:"password"}),r.a.createElement("b",{className:"tooltip tooltip-bottom-right"},"Don't forget your password")," ")),r.a.createElement("section",null,r.a.createElement("label",{className:"input"}," ",r.a.createElement("i",{className:"icon-append fa fa-lock"}),r.a.createElement("input",{type:"password",name:"passwordConfirm",placeholder:"Confirm password"}),r.a.createElement("b",{className:"tooltip tooltip-bottom-right"},"Don't forget your password")," "))),r.a.createElement("fieldset",null,r.a.createElement("div",{className:"row"},r.a.createElement("section",{className:"col col-6"},r.a.createElement("label",{className:"input"},r.a.createElement("input",{type:"text",name:"firstname",placeholder:"First name"}))),r.a.createElement("section",{className:"col col-6"},r.a.createElement("label",{className:"input"},r.a.createElement("input",{type:"text",name:"lastname",placeholder:"Last name"})))),r.a.createElement("div",{className:"row"},r.a.createElement("section",{className:"col col-6"},r.a.createElement("label",{className:"select"},r.a.createElement("select",{name:"gender",defaultValue:"0"},r.a.createElement("option",{value:"0",disabled:!0},"Gender"),r.a.createElement("option",{value:"1"},"Male"),r.a.createElement("option",{value:"2"},"Female"),r.a.createElement("option",{value:"3"},"Prefer not to answer"))," ",r.a.createElement("i",null)," ")),r.a.createElement("section",{className:"col col-6"},r.a.createElement("label",{className:"input"}," ",r.a.createElement("i",{className:"icon-append fa fa-calendar"}),r.a.createElement("input",{type:"text",name:"request",placeholder:"Request activation on",className:"datepicker","data-dateformat":"dd/mm/yy"})))),r.a.createElement("section",null,r.a.createElement("label",{className:"checkbox"},r.a.createElement("input",{type:"checkbox",name:"subscription",id:"subscription"}),r.a.createElement("i",null),"I want to receive news and special offers"),r.a.createElement("label",{className:"checkbox"},r.a.createElement("input",{type:"checkbox",name:"terms",id:"terms"}),r.a.createElement("i",null),"I agree with the ",r.a.createElement("a",{href:"#","data-toggle":"modal","data-target":"#myModal"}," Terms and Conditions ")))),r.a.createElement("footer",null,r.a.createElement("a",{href:"#/dashboard",className:"btn btn-primary"},"Register")),r.a.createElement("div",{className:"message"},r.a.createElement("i",{className:"fa fa-check"}),r.a.createElement("p",null,"Thank you for your registration!")))),r.a.createElement("p",{className:"note text-center"},"*FREE Registration ends on October 2015."),r.a.createElement("h5",{className:"text-center"},"- Or sign in using -"),r.a.createElement("ul",{className:"list-inline text-center"},r.a.createElement("li",null,r.a.createElement("a",{href:"#",className:"btn btn-primary btn-circle"},r.a.createElement("i",{className:"fa fa-facebook"}))),r.a.createElement("li",null,r.a.createElement("a",{href:"#",className:"btn btn-info btn-circle"},r.a.createElement("i",{className:"fa fa-twitter"}))),r.a.createElement("li",null,r.a.createElement("a",{href:"#",className:"btn btn-warning btn-circle"},r.a.createElement("i",{className:"fa fa-linkedin"})))))))),r.a.createElement("div",{className:"modal fade",id:"myModal",tabIndex:"-1",role:"dialog","aria-labelledby":"myModalLabel","aria-hidden":"true"},r.a.createElement("div",{className:"modal-dialog"},r.a.createElement("div",{className:"modal-content"},r.a.createElement("div",{className:"modal-header"},r.a.createElement("button",{type:"button",className:"close","data-dismiss":"modal","aria-hidden":"true"},"×"),r.a.createElement("h4",{className:"modal-title",id:"myModalLabel"},"Terms & Conditions")),r.a.createElement("div",{className:"modal-body custom-scroll terms-body"},r.a.createElement(l.a,{html:m})),r.a.createElement("div",{className:"modal-footer"},r.a.createElement("button",{type:"button",className:"btn btn-default","data-dismiss":"modal"},"Cancel"),r.a.createElement("button",{type:"button",className:"btn btn-primary",id:"i-agree"},r.a.createElement("i",{className:"fa fa-check"})," I Agree"),r.a.createElement("button",{type:"button",className:"btn btn-danger pull-left",id:"print"},r.a.createElement("i",{className:"fa fa-print"})," Print"))))))}}]),t}(r.a.Component),u=d;t.default=u;!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(d,"Register","/home/this/WebstormProjects/trading-charts-demo/src/app/routes/auth/containers/Register.js"),__REACT_HOT_LOADER__.register(u,"default","/home/this/WebstormProjects/trading-charts-demo/src/app/routes/auth/containers/Register.js"))}()},917:function(e,t){e.exports="<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <title>Title</title>\n</head>\n<body>\n\n<div>\n    <div id=\"left\">\n\n\n        <h1>SMARTADMIN TERMS & CONDITIONS TEMPLATE</h1>\n\n\n        <h2>Introduction</h2>\n\n        <p>These terms and conditions govern your use of this website; by using this website, you accept these terms and\n            conditions in full. If you disagree with these terms and conditions or any part of these terms and\n            conditions, you must not use this website.</p>\n\n        <p>[You must be at least [18] years of age to use this website. By using this website [and by agreeing to these\n            terms and conditions] you warrant and represent that you are at least [18] years of age.]</p>\n\n\n        <h2>License to use website</h2>\n        <p>Unless otherwise stated, [NAME] and/or its licensors own the intellectual property rights in the website and\n            material on the website. Subject to the license below, all these intellectual property rights are\n            reserved.</p>\n\n        <p>You may view, download for caching purposes only, and print pages [or [OTHER CONTENT]] from the website for\n            your own personal use, subject to the restrictions set out below and elsewhere in these terms and\n            conditions.</p>\n\n        <p>You must not:</p>\n        <ul>\n            <li>republish material from this website (including republication on another website);</li>\n            <li>sell, rent or sub-license material from the website;</li>\n            <li>show any material from the website in public;</li>\n            <li>reproduce, duplicate, copy or otherwise exploit material on this website for a commercial purpose;]</li>\n            <li>[edit or otherwise modify any material on the website; or]</li>\n            <li>[redistribute material from this website [except for content specifically and expressly made available\n                for redistribution].]\n            </li>\n        </ul>\n        <p>[Where content is specifically made available for redistribution, it may only be redistributed [within your\n            organisation].]</p>\n\n        <h2>Acceptable use</h2>\n\n        <p>You must not use this website in any way that causes, or may cause, damage to the website or impairment of\n            the availability or accessibility of the website; or in any way which is unlawful, illegal, fraudulent or\n            harmful, or in connection with any unlawful, illegal, fraudulent or harmful purpose or activity.</p>\n\n        <p>You must not use this website to copy, store, host, transmit, send, use, publish or distribute any material\n            which consists of (or is linked to) any spyware, computer virus, Trojan horse, worm, keystroke logger,\n            rootkit or other malicious computer software.</p>\n\n        <p>You must not conduct any systematic or automated data collection activities (including without limitation\n            scraping, data mining, data extraction and data harvesting) on or in relation to this website without\n            [NAME'S] express written consent.</p>\n\n        <p>[You must not use this website to transmit or send unsolicited commercial communications.]</p>\n\n        <p>[You must not use this website for any purposes related to marketing without [NAME'S] express written\n            consent.]</p>\n\n        <h2>[Restricted access</h2>\n\n        <p>[Access to certain areas of this website is restricted.] [NAME] reserves the right to restrict access to\n            [other] areas of this website, or indeed this entire website, at [NAME'S] discretion.</p>\n\n        <p>If [NAME] provides you with a user ID and password to enable you to access restricted areas of this website\n            or other content or services, you must ensure that the user ID and password are kept confidential.</p>\n\n        <p>[[NAME] may disable your user ID and password in [NAME'S] sole discretion without notice or explanation.]</p>\n\n        <h2>[User content</h2>\n\n        <p>In these terms and conditions, “your user content” means material (including without limitation text, images,\n            audio material, video material and audio-visual material) that you submit to this website, for whatever\n            purpose.</p>\n\n        <p>You grant to [NAME] a worldwide, irrevocable, non-exclusive, royalty-free license to use, reproduce, adapt,\n            publish, translate and distribute your user content in any existing or future media. You also grant to\n            [NAME] the right to sub-license these rights, and the right to bring an action for infringement of these\n            rights.</p>\n\n        <p>Your user content must not be illegal or unlawful, must not infringe any third party's legal rights, and must\n            not be capable of giving rise to legal action whether against you or [NAME] or a third party (in each case\n            under any applicable law).</p>\n\n        <p>You must not submit any user content to the website that is or has ever been the subject of any threatened or\n            actual legal proceedings or other similar complaint.</p>\n\n        <p>[NAME] reserves the right to edit or remove any material submitted to this website, or stored on [NAME'S]\n            servers, or hosted or published upon this website.</p>\n\n        <p>[Notwithstanding [NAME'S] rights under these terms and conditions in relation to user content, [NAME] does\n            not undertake to monitor the submission of such content to, or the publication of such content on, this\n            website.]</p>\n\n        <h2>No warranties</h2>\n\n        <p>This website is provided “as is” without any representations or warranties, express or implied. [NAME] makes\n            no representations or warranties in relation to this website or the information and materials provided on\n            this website.</p>\n\n        <p>Without prejudice to the generality of the foregoing paragraph, [NAME] does not warrant that:</p>\n        <ul>\n            <li>this website will be constantly available, or available at all; or</li>\n            <li>the information on this website is complete, true, accurate or non-misleading.</li>\n        </ul>\n        <p>Nothing on this website constitutes, or is meant to constitute, advice of any kind. [If you require advice in\n            relation to any [legal, financial or medical] matter you should consult an appropriate professional.]</p>\n\n        <h2>Limitations of liability</h2>\n\n        <p>[NAME] will not be liable to you (whether under the law of contact, the law of torts or otherwise) in\n            relation to the contents of, or use of, or otherwise in connection with, this website:</p>\n        <ul>\n            <li>[to the extent that the website is provided free-of-charge, for any direct loss;]</li>\n            <li>for any indirect, special or consequential loss; or</li>\n            <li>for any business losses, loss of revenue, income, profits or anticipated savings, loss of contracts or\n                business relationships, loss of reputation or goodwill, or loss or corruption of information or data.\n            </li>\n        </ul>\n        <p>These limitations of liability apply even if [NAME] has been expressly advised of the potential loss.</p>\n\n        <h2>Exceptions</h2>\n\n        <p>Nothing in this website disclaimer will exclude or limit any warranty implied by law that it would be\n            unlawful to exclude or limit; and nothing in this website disclaimer will exclude or limit [NAME'S]\n            liability in respect of any:</p>\n        <ul>\n            <li>death or personal injury caused by [NAME'S] negligence;</li>\n            <li>fraud or fraudulent misrepresentation on the part of [NAME]; or</li>\n            <li>matter which it would be illegal or unlawful for [NAME] to exclude or limit, or to attempt or purport to\n                exclude or limit, its liability.\n            </li>\n        </ul>\n        <h2>Reasonableness</h2>\n\n        <p>By using this website, you agree that the exclusions and limitations of liability set out in this website\n            disclaimer are reasonable.</p>\n\n        <p>If you do not think they are reasonable, you must not use this website.</p>\n\n        <h2>Other parties</h2>\n\n        <p>[You accept that, as a limited liability entity, [NAME] has an interest in limiting the personal liability of\n            its officers and employees. You agree that you will not bring any claim personally against [NAME'S] officers\n            or employees in respect of any losses you suffer in connection with the website.]</p>\n\n        <p>[Without prejudice to the foregoing paragraph,] you agree that the limitations of warranties and liability\n            set out in this website disclaimer will protect [NAME'S] officers, employees, agents, subsidiaries,\n            successors, assigns and sub-contractors as well as [NAME].</p>\n\n        <h2>Unenforceable provisions</h2>\n\n        <p>If any provision of this website disclaimer is, or is found to be, unenforceable under applicable law, that\n            will not affect the enforceability of the other provisions of this website disclaimer.</p>\n\n        <h2>Indemnity</h2>\n\n        <p>You hereby indemnify [NAME] and undertake to keep [NAME] indemnified against any losses, damages, costs,\n            liabilities and expenses (including without limitation legal expenses and any amounts paid by [NAME] to a\n            third party in settlement of a claim or dispute on the advice of [NAME'S] legal advisers) incurred or\n            suffered by [NAME] arising out of any breach by you of any provision of these terms and conditions[, or\n            arising out of any claim that you have breached any provision of these terms and conditions].</p>\n\n        <h2>Breaches of these terms and conditions</h2>\n\n        <p>Without prejudice to [NAME'S] other rights under these terms and conditions, if you breach these terms and\n            conditions in any way, [NAME] may take such action as [NAME] deems appropriate to deal with the breach,\n            including suspending your access to the website, prohibiting you from accessing the website, blocking\n            computers using your IP address from accessing the website, contacting your internet service provider to\n            request that they block your access to the website and/or bringing court proceedings against you.</p>\n\n        <h2>Variation</h2>\n\n        <p>[NAME] may revise these terms and conditions from time-to-time. Revised terms and conditions will apply to\n            the use of this website from the date of the publication of the revised terms and conditions on this\n            website. Please check this page regularly to ensure you are familiar with the current version.</p>\n\n        <h2>Assignment</h2>\n\n        <p>[NAME] may transfer, sub-contract or otherwise deal with [NAME'S] rights and/or obligations under these terms\n            and conditions without notifying you or obtaining your consent.</p>\n\n        <p>You may not transfer, sub-contract or otherwise deal with your rights and/or obligations under these terms\n            and conditions.</p>\n\n        <h2>Severability</h2>\n\n        <p>If a provision of these terms and conditions is determined by any court or other competent authority to be\n            unlawful and/or unenforceable, the other provisions will continue in effect. If any unlawful and/or\n            unenforceable provision would be lawful or enforceable if part of it were deleted, that part will be deemed\n            to be deleted, and the rest of the provision will continue in effect.</p>\n\n        <h2>Entire agreement</h2>\n\n        <p>These terms and conditions [, together with [DOCUMENTS],] constitute the entire agreement between you and\n            [NAME] in relation to your use of this website, and supersede all previous agreements in respect of your use\n            of this website.</p>\n\n        <h2>Law and jurisdiction</h2>\n\n        <p>These terms and conditions will be governed by and construed in accordance with [GOVERNING LAW], and any\n            disputes relating to these terms and conditions will be subject to the [non-]exclusive jurisdiction of the\n            courts of [JURISDICTION].</p>\n\n        <h2>About these website terms and conditions</h2>\n        <p>We created these website terms and conditions with the help of a free website terms and conditions form\n            developed by Contractology and available at <a href=\"http://www.SmartAdmin.com\">www.SmartAdmin.com</a>.\n            Contractology supply a wide variety of commercial legal documents, such as <a href=\"#\">template data\n                protection statements</a>.\n        </p>\n        <h2>[Registrations and authorisations</h2>\n\n        <p>[[NAME] is registered with [TRADE REGISTER]. You can find the online version of the register at [URL].\n            [NAME'S] registration number is [NUMBER].]</p>\n\n        <p>[[NAME] is subject to [AUTHORISATION SCHEME], which is supervised by [SUPERVISORY AUTHORITY].]</p>\n\n        <p>[[NAME] is registered with [PROFESSIONAL BODY]. [NAME'S] professional title is [TITLE] and it has been\n            granted in [JURISDICTION]. [NAME] is subject to the [RULES] which can be found at [URL].]</p>\n\n        <p>[[NAME] subscribes to the following code[s] of conduct: [CODE(S) OF CONDUCT]. [These codes/this code] can be\n            consulted electronically at [URL(S)].</p>\n\n        <p>[[NAME'S] [TAX] number is [NUMBER].]]</p>\n\n        <h2>[NAME'S] details</h2>\n\n        <p>The full name of [NAME] is [FULL NAME].</p>\n\n        <p>[[NAME] is registered in [JURISDICTION] under registration number [NUMBER].]</p>\n\n        <p>[NAME'S] [registered] address is [ADDRESS].</p>\n\n        <p>You can contact [NAME] by email to [EMAIL].</p>\n\n\n    </div>\n\n    <br/><br/>\n\n    <p><strong>By using this WEBSITE TERMS AND CONDITIONS template document, you agree to the\n        <a href=\"#\">terms and conditions</a> set out on\n        <a href=\"#\">SmartAdmin.com</a>. You must retain the credit\n        set out in the section headed \"ABOUT THESE WEBSITE TERMS AND CONDITIONS\". Subject to the licensing restrictions,\n        you should\n        edit the document, adapting it to the requirements of your jurisdiction, your business and your\n        website. If you are not a lawyer, we recommend that you take professional legal advice in relation to the\n        editing and\n        use of the template.</strong></p>\n</div>\n\n</body>\n</html>"}});
(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{6:function(e,t,n){e.exports=n(7)},7:function(e,t,n){"use strict";n.r(t);var a=n(5),o=n(0),l=n.n(o),r=n(4),u=n.n(r),c=n(1),i=n.n(c),s=n(2),m=n.n(s);u.a.render(l.a.createElement(function(){var e,t,n=m.a.get("fullstory-org-id"),r=Object(o.useState)(n),u=Object(a.a)(r,2),s=u[0],d=u[1],y="user_".concat((e=1,t=1e5,Math.floor(Math.random()*(t-e+1)+e)));return l.a.createElement("div",null,!n&&l.a.createElement(l.a.Fragment,null,l.a.createElement("p",null,'Start by entering your FullStory organization ID and hitting "Save".'),l.a.createElement("form",{onSubmit:function(e){e.preventDefault(),m.a.set("fullstory-org-id",s),window.location.reload()}},l.a.createElement("input",{placeholder:"Organization ID",type:"text",name:"orgId",value:s,onChange:function(e){return d(e.target.value)}}),l.a.createElement("input",{type:"submit",value:"Save"}))),n&&l.a.createElement(l.a.Fragment,null,l.a.createElement("p",null,"Awesome! FullStory is now tracking... you should open your console now."),l.a.createElement(i.a,{org:n,debug:!0}),l.a.createElement("p",null,"If you want to identify yourself as a randomly generated user, do so below:"),l.a.createElement("button",{onClick:function(){return function(e,t){Object(c.FullStoryAPI)("identify",e,t)}(y,{displayName:"Test user ".concat(y),email:"test_".concat(y,"@example.com"),havingFun:!0})}},"Identify ",y),l.a.createElement("p",null,"You can clear your cookies and begin this whole process again as you like.")))},null),document.getElementById("root"))}},[[6,1,2]]]);
//# sourceMappingURL=main.5b811c73.chunk.js.map
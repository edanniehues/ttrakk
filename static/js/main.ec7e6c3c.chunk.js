(this.webpackJsonpttrakk=this.webpackJsonpttrakk||[]).push([[0],{14:function(e,t,n){e.exports=n(23)},20:function(e,t,n){},21:function(e,t,n){},22:function(e,t,n){},23:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(11),c=n.n(o),l=(n(19),n(3)),i=n(4),u=n(6),s=n(5),p=n(7),d=(n(20),n(9)),m=function(e,t){return"hours.".concat(e,".").concat(t)};n(21);function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var h,g={getStoredState:function(e){return function(t,n){var r=localStorage.getItem(m(e,t));return r?JSON.parse(r):n}}(h="Forms"),storeState:function(e){return function(t,n){return localStorage.setItem(m(e,t),JSON.stringify(n)),n}}(h)},y=g.getStoredState,v=g.storeState,b=["token","workspaceId","projectId","hours"],O=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(u.a)(this,Object(s.a)(t).call(this,e))).state={token:y("token",""),workspaceId:y("workspaceId",""),projectId:y("projectId",""),hours:y("hours",34),period:"0",settingsOpen:!1},n}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.emitOnUpdate(this.state)}},{key:"setFormState",value:function(e){var t=this;this.setState((function(n){return Object.keys(e).filter((function(e){return b.includes(e)})).forEach((function(t){return v(t,e[t])})),t.emitOnUpdate(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(n,!0).forEach((function(t){Object(d.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},n,{},e)),e}))}},{key:"emitOnUpdate",value:function(e){var t=e.token,n=e.workspaceId,r=e.projectId,a=e.hours,o=e.period;this.props.onUpdate({token:t,workspaceId:n,projectId:r,hours:a,period:o})}},{key:"render",value:function(){var e=this,t=Array.from({length:13},(function(e,t){return(12-t).toString()})),n=this.state,r=n.token,o=n.workspaceId,c=n.projectId,l=n.hours,i=n.period,u=n.settingsOpen;return a.a.createElement("div",{className:"Forms m-3"},a.a.createElement("div",{className:"form-group"},a.a.createElement("label",{htmlFor:"form_period"},"Per\xedodo"),a.a.createElement("select",{className:"custom-select",value:i,onChange:function(t){return e.setFormState({period:t.target.value})}},t.map((function(e){return a.a.createElement("option",{value:e,key:e},e)})))),a.a.createElement("div",{className:"card"},a.a.createElement("div",{className:"card-header"},a.a.createElement("h2",{className:"mb-0"},a.a.createElement("button",{className:"btn btn-link",type:"button",onClick:function(){return e.setState({settingsOpen:!u})}},"Op\xe7\xf5es"))),a.a.createElement("div",{className:"collapse ".concat(u?"show":"")},a.a.createElement("div",{className:"card-body"},a.a.createElement("div",{className:"form-group"},a.a.createElement("label",{htmlFor:"form_hours"},"Horas"),a.a.createElement("input",{className:"form-control",id:"form_hours",type:"number",min:1,value:l,onChange:function(t){return e.setFormState({hours:t.target.value})}})),a.a.createElement("div",{className:"form-group"},a.a.createElement("label",{htmlFor:"form_token"},"Token"),a.a.createElement("input",{className:"form-control",id:"form_token",type:"text",value:r,onChange:function(t){return e.setFormState({token:t.target.value})}})),a.a.createElement("div",{className:"form-group"},a.a.createElement("label",{htmlFor:"form_workspace"},"Workspace ID"),a.a.createElement("input",{className:"form-control",id:"form_workspace",type:"text",value:o,onChange:function(t){return e.setFormState({workspaceId:t.target.value})}})),a.a.createElement("div",{className:"form-group"},a.a.createElement("label",{htmlFor:"form_project"},"Project ID"),a.a.createElement("input",{className:"form-control",id:"form_project",type:"text",value:c,onChange:function(t){return e.setFormState({projectId:t.target.value})}}))))))}}]),t}(a.a.Component),E=n(12),j=n(24),k=n(28),S=n(29),w=n(30),x=n(25),I=n(26);function D(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function N(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?D(n,!0).forEach((function(t){Object(d.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):D(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function M(e){var t=e.token,n=e.workspaceId,r=e.projectId,a=e.hours,o=e.period;return function e(t,n,r){var a=new URLSearchParams(N({},r,{page:t})).toString();return window.fetch("https://toggl.com/reports/api/v2/details?".concat(a),{method:"GET",headers:P(n)}).then((function(e){return e.json()})).then((function(a){return(t-1)*a.per_page+a.data.length<a.total_count?e(t+1,n,r).then((function(e){return a.data.concat(e)})):a.data}))}(1,t,function(e){var t=e.workspaceId,n=e.projectId,r=function(e){var t=F(e);return{since:Object(k.a)(Object(x.a)(t),"yyyy-MM-dd"),until:Object(k.a)(Object(I.a)(t),"yyyy-MM-dd")}}(e.period),a=r.since,o=r.until;return{since:a,until:o,workspace_id:t,project_ids:n,user_agent:"kkd-hrs"}}({workspaceId:n,projectId:r,period:o})).then((function(e){var t=60*a*60,n=e.map((function(e){return e.dur/1e3})).reduce((function(e,t){return e+t})),r=F(o),c=Math.round(t/function(e){return Array.from({length:Object(E.a)(e)},(function(e,t){return t+1})).filter((function(t){return!Object(j.a)(new Date(e.getFullYear(),e.getMonth(),t))})).length}(r)),l=function(e){return Array.from({length:Object(E.a)(e)},(function(t,n){return new Date(e.getFullYear(),e.getMonth(),n+1)}))}(r).map((function(t){return{date:Object(k.a)(t,"yyyy-MM-dd"),goal:Object(j.a)(t)?0:c,executed:e.filter((function(e){return Object(S.a)(t,new Date(e.start))})).map((function(e){return e.dur/1e3})).reduce((function(e,t){return e+t}),0)}})),i=l.map((function(e,n){return N({},e,{idealSlope:l.slice(0,n+1).map((function(e){return e.goal})).reduce((function(e,t){return e-t}),t),executedSlope:l.slice(0,n+1).map((function(e){return e.executed})).reduce((function(e,t){return e-t}),t)})}));return{goalInSeconds:t,totalExecutedSeconds:n,dateInMonth:r,dailyGoalSeconds:c,dailyData:l,graphData:i}}))}var P=function(e){return{Authorization:"Basic ".concat(btoa("".concat(e,":api_token")))}};function F(e){return Object(w.a)(new Date,parseInt(e,10))}var _=n(27),C=(n(22),function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(u.a)(this,Object(s.a)(t).call(this,e))).state={tooltipOpen:!1,tooltipX:0,tooltipY:0,tooltipExecuted:"",tooltipSubtotal:"",tooltipIdeal:""},n}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.props.graphData,n=t.goalInSeconds,r=t.totalExecutedSeconds,o=(t.dateInMonth,t.dailyGoalSeconds),c=(t.dailyData,t.graphData),l=n/3600,i=c.findIndex((function(e){return Object(S.a)(new Date,Object(_.a)(e.date))})),u=60/c.length,s=-1===i?c.length:i+1;return a.a.createElement("div",{style:{flex:"1",display:"flex",flexDirection:"column"}},a.a.createElement("div",null,a.a.createElement("strong",null,"Goal: ")," ",A(n),a.a.createElement("br",null),a.a.createElement("strong",null,"Executed: ")," ",A(r),a.a.createElement("br",null),a.a.createElement("strong",null,"Daily goal: ")," ",A(o),a.a.createElement("br",null),-1!==i&&a.a.createElement("span",null,a.a.createElement("strong",null,"Distance from daily goal: ")," ",A(c[i].executedSlope-c[i].idealSlope))),a.a.createElement("div",{style:{flex:"1",display:"none"}},c.map((function(e,t){e.date,e.goal,e.executed;var r=e.idealSlope,o=e.executedSlope,c=r/n,l=o/n;return a.a.createElement("div",{key:t,style:{padding:"3px",height:"100%",display:"flex",flex:"1",flexDirection:"column"}},a.a.createElement("div",{style:{flex:"1",display:"flex",alignItems:"flex-end"}},a.a.createElement("div",{style:{background:"#f00",flex:"1",height:"".concat(100*c,"%")},title:"Ideal: ".concat(A(r)," remaining")}),a.a.createElement("div",{style:{background:"#0f0",flex:"1",height:"".concat(100*l,"%")},title:"Executed: ".concat(A(o)," remaining")})),a.a.createElement("div",{style:{height:"30px",fontWeight:t===i?"bold":"normal"}},t+1,"."))}))),a.a.createElement("div",{style:{flex:"1"}},a.a.createElement("svg",{style:{height:"100%",width:"100%"},version:"1",viewBox:"0 0 60 30",id:"graph"},Array.from({length:l+1},(function(e,t){return t})).map((function(e){return a.a.createElement("path",{strokeWidth:.1,fill:"none",stroke:"#cccccc",d:"M 0 ".concat(29-e/l*28," H 60"),key:e})})),Array.from({length:l+1},(function(e,t){return t})).map((function(e){return a.a.createElement("text",{color:"#cccccc",x:0,y:29.6-e/l*28,key:e,fontSize:.5},e)})),a.a.createElement("path",{className:"ideal",d:c.map((function(e,t){var r=e.idealSlope;return"".concat(0===t?"M":"L"," ").concat(u*t+u/2," ").concat(29-r/n*28)})).join(" ")}),c.map((function(t,r){var o=t.idealSlope;return a.a.createElement("circle",{onMouseOver:function(t){return e.showTooltip(t,r)},onMouseLeave:function(){return e.hideTooltip()},cx:u*r+u/2,cy:29-o/n*28,r:.2,className:"ideal",key:r})})),a.a.createElement("path",{className:"executed",d:c.slice(0,s).map((function(e,t){var r=e.executedSlope;return"".concat(0===t?"M":"L"," ").concat(u*t+u/2," ").concat(29-r/n*28)})).join(" ")}),c.slice(0,s).map((function(t,r){var o=t.executedSlope;return a.a.createElement("circle",{onMouseOver:function(t){return e.showTooltip(t,r)},onMouseLeave:function(){return e.hideTooltip()},cx:u*r+u/2,cy:29-o/n*28,r:.2,className:"executed",key:r})})),Array.from({length:c.length},(function(e,t){return t})).map((function(e){return a.a.createElement("text",{textAnchor:"end",x:u*e+u/2,y:30,key:e,fontSize:.8},e+1,".")}))),a.a.createElement("div",{id:"tooltip",style:{visibility:this.state.tooltipOpen?"visible":"hidden",left:this.state.tooltipX,top:this.state.tooltipY}},a.a.createElement("p",null,"Executed: ",this.state.tooltipExecuted),a.a.createElement("p",null,"Subtotal: ",this.state.tooltipSubtotal),a.a.createElement("p",null,"Ideal: ",this.state.tooltipIdeal))))}},{key:"showTooltip",value:function(e,t){var n=document.querySelector("#tooltip").getBoundingClientRect(),r=document.body.getBoundingClientRect(),a=e.currentTarget.getBoundingClientRect(),o=a.left,c=a.height,l=a.right,i=a.top,u=l+20;u+n.width>r.right&&(u=o-20-n.width);var s=i+c/2-n.height/2;s+n.height>r.bottom&&(s=r.bottom-n.height-5);var p=this.props.graphData.graphData[t],d=this.props.graphData.goalInSeconds;this.setState({tooltipX:u,tooltipY:s,tooltipOpen:!0,tooltipExecuted:A(p.executed),tooltipSubtotal:A(d-p.executedSlope),tooltipIdeal:A(d-p.idealSlope)})}},{key:"hideTooltip",value:function(){this.setState({tooltipOpen:!1})}}]),t}(r.Component));function A(e){return e=Math.floor(e),[Math.floor(e/3600),Math.floor(e/60)%60,e%60].map((function(e){return t="".concat(e),n=2,r=(r=(r="0")||" ").substr(0,1),t.length<n?r.repeat(n-t.length)+t:t;var t,n,r})).join(":")}var L=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(u.a)(this,Object(s.a)(t).call(this,e))).state={graphLoading:!1,graphData:null},n}return Object(p.a)(t,e),Object(i.a)(t,[{key:"loadGraph",value:function(e){var t=this;this.setState({graphLoading:!0}),M(e).then((function(e){console.log(e),t.setState({graphLoading:!1,graphData:e})}))}},{key:"render",value:function(){var e=this,t=this.state,n=t.graphLoading,r=t.graphData;return a.a.createElement("div",{className:"App"},a.a.createElement(O,{onUpdate:function(t){return e.loadGraph(t)}}),!n&&r&&a.a.createElement(C,{graphData:r}))}}]),t}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(L,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[14,1,2]]]);
//# sourceMappingURL=main.ec7e6c3c.chunk.js.map
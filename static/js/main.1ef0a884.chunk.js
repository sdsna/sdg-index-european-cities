(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{186:function(n,e,t){n.exports=t(227)},191:function(n,e,t){},192:function(n,e,t){n.exports=t.p+"static/media/logo.5d5d9eef.svg"},193:function(n,e,t){},227:function(n,e,t){"use strict";t.r(e);var o=t(0),a=t.n(o),r=t(11),i=t.n(r),c=(t(191),t(41)),l=t(42),u=t(47),s=t(43),d=t(48),b=(t(192),t(193),t(115)),p=t(63),m=t(167),f=t(56),h=t(155),g=t(111),v=t(173),S=t.n(v),k=t(57),w=t(180),y=t.n(w),D=t(181),E=t.n(D),j=t(109);function G(){var n=Object(f.a)(["\n  display: inline-block;\n  background: black;\n  border-right: 1px solid #fff;\n  min-height: 24px;\n  vertical-align: bottom;\n\n  &.SDG1 {\n    background: rgb(204,44,67);\n  }\n  &.SDG2 {\n    background: rgb(211, 162 ,70 );\n  }\n  &.SDG3 {\n    background: rgb(81, 148 ,71 );\n  }\n  &.SDG4 {\n    background: rgb(175, 39, 56 );\n  }\n  &.SDG5 {\n    background: rgb(211 ,69 ,58 );\n  }\n  &.SDG6 {\n    background: rgb(73, 181 ,203 ) ;\n  }\n  &.SDG7 {\n    background: rgb(238, 189, 64 ) ;\n  }\n  &.SDG8 {\n    background: rgb(141, 36, 65 );\n  }\n  &.SDG9 {\n    background: rgb(219, 104, 62 ) ;\n  }\n  &.SDG10 {\n    background: rgb(197 ,36 ,96 );\n  }\n  &.SDG11 {\n    background: rgb(232, 151, 68 ) ;\n  }\n  &.SDG12 {\n    background: rgb(177 ,134, 58 ) ;\n  }\n  &.SDG13 {\n    background: rgb(65, 119 ,68 );\n  }\n  &.SDG15 {\n    background: rgb(100 ,167, 74 ) ;\n  }\n  &.SDG16 {\n    background: rgb(31, 101 ,137 ) ;\n  }\n"]);return G=function(){return n},n}function O(){var n=Object(f.a)(["\n  width: 400px;\n  background: #eee;\n"]);return O=function(){return n},n}var x=k.a.div(O()),T=k.a.div(G()),C=function(n){function e(){return Object(c.a)(this,e),Object(u.a)(this,Object(s.a)(e).apply(this,arguments))}return Object(d.a)(e,n),Object(l.a)(e,[{key:"render",value:function(){var n=this.props,e=n.scores,t=n.showTooltip,o=n.hideTooltip,r=Object.keys(e).map(function(n){var r=100/15*(Number(e[n])/100);return a.a.createElement(T,{key:n,className:"sdg ".concat(n),"data-sdg":n,"data-score":"".concat(e[n],"%"),style:{width:"calc(".concat(r,"% - 1px")},onMouseOver:t,onMouseOut:o})});return a.a.createElement(x,null,r)}}]),e}(o.PureComponent);function R(){var n=Object(f.a)(["\n  && {\n    border-top: 1px solid rgba(0,0,0,0.12);\n    top: 0px;\n    left: 0px;\n    z-index: 100;\n    position: sticky;\n    background-color: #fff;\n    padding: 0;\n\n    &:after{\n      content:'';\n      position:absolute;\n      left: 0;\n      bottom: 0;\n      width:100%;\n      border-bottom: 2px solid rgba(0,0,0,0.12);\n    }\n  }\n\n  button {\n    width: 100%;\n    padding: 20px 16px 20px 16px;\n    justify-content: left;\n    font-weight: bold;\n    line-height: 24px;\n\n    &:hover {\n      background: #eee;\n    }\n  }\n"]);return R=function(){return n},n}function B(){var n=Object(f.a)(["\n  .MuiTableCell-head {\n    color: black;\n    font-size: 1rem;\n    border-top: 1px solid rgba(0,0,0,0.12);\n\n    &:after{\n      content:'';\n      position:absolute;\n      left: 0;\n      bottom: 0;\n      width:100%;\n      border-bottom: 2px solid rgba(0,0,0,0.12);\n    }\n  }\n\n  .MuiTableCell-body {\n    color: #6c757d;\n    font-size: 1rem;\n  }\n"]);return B=function(){return n},n}var z=Object(k.a)(S.a)(B()),A=k.a.th(R()),L=function(n,e){var t=n.index,o=n.sort,r=n.sortDirection,i=n.label,c=function(){switch(r){case"asc":return a.a.createElement(y.a,null);case"desc":return a.a.createElement(E.a,null);default:return a.a.createElement(j.a,null)}}();return a.a.createElement(A,{key:t},a.a.createElement(g.a,{disabled:!o,onClick:function(){return e(t)}},a.a.createElement(h.a,{variant:"body1",style:{fontWeight:500}},i),c))},N={download:!1,viewColumns:!1,print:!1,filter:!1,responsive:"none",selectableRows:"none",elevation:0,rowsPerPage:500,search:!1,sort:!0,customFooter:function(n,e,t,o,r){return a.a.createElement("tbody",null)}},P=function(n){function e(n){var t;return Object(c.a)(this,e),(t=Object(u.a)(this,Object(s.a)(e).call(this,n))).cityDataLoaded=function(n){var e=n.map(function(n){return[n.city,n.region,t.pluckFromJson(n,["SDG1","SDG2","SDG3","SDG4","SDG5","SDG6","SDG7","SDG8","SDG9","SDG10","SDG11","SDG12","SDG13","SDG15","SDG16"]),Number(n.rank),Number(n.score)]});t.setState({data:e})},t.state={data:[]},t}return Object(d.a)(e,n),Object(l.a)(e,[{key:"componentDidMount",value:function(){var n=this;fetch("/data/cities.json").then(function(n){if(n.status>=400)throw new Error("Bad response from server");return n.json()}).then(function(e){return n.cityDataLoaded(e)})}},{key:"pluckFromJson",value:function(n,e){var t={};return e.forEach(function(e){t[e]=n[e]}),t}},{key:"render",value:function(){var n=this.state.data,e=this.props,t=e.showTooltip,o=e.hideTooltip,r=[{name:"City",options:{sort:!0,sortDirection:null,customHeadRender:L,customBodyRender:function(n,e,t){return a.a.createElement("span",{style:{fontWeight:"500",color:"black"}},n)}}},{name:"Region",options:{sort:!0,sortDirection:null,customHeadRender:L}},{name:"SDGs",options:{sort:!1,customBodyRender:function(n,e,r){return a.a.createElement(C,{scores:n,showTooltip:t,hideTooltip:o})},customHeadRender:L}},{name:"Rank",options:{sort:!0,sortDirection:"asc",customHeadRender:L}},{name:"Score",options:{sort:!1,customHeadRender:L}}];return a.a.createElement("div",null,a.a.createElement(h.a,{variant:"h4",gutterBottom:!0},"The European Cities SDG Index"),a.a.createElement(h.a,{variant:"body1"},"Select a city to see its full profile."),a.a.createElement(z,{data:n,columns:r,options:N}))}}]),e}(o.PureComponent),H=t(159),M=["No poverty","Zero hunger","Good health and well-being","Quality education","Gender equality","Clean water and sanitation","Affordable and clean energy","Decent work and economic growth","Industry, innovation and infrastructure","Reduced inequalities","Sustainable cities and communities","Responsible consumption and production","Climate action","Life below water","Life on land","Peace, justice and strong institutions","Partnerships for the goals"],J=function(n){var e=Number(n.substring(3));return M[e]};function W(){var n=Object(f.a)(['\n  font-size: .8rem;\n  padding: 12px;\n  background: rgba(0, 0, 0, 0.8);\n  color: #fff;\n  border-radius: 2px;\n  position: absolute;\n  pointer-events: none;\n  z-index: 1000;\n  transition: all .2s;\n\n  &:after {\n    box-sizing: border-box;\n    display: inline;\n    font-size: 10px;\n    width: 100%;\n    line-height: 1;\n    content: "\u25bc";\n    color: rgba(0, 0, 0, 0.8);\n    position: absolute;\n    text-align: center;\n    left: 0;\n    bottom: -7px;\n  }\n\n  &.hidden {\n    visibility: hidden;\n  }\n']);return W=function(){return n},n}var F=Object(k.a)(H.a)(W()),I=function(n){function e(n){var t;return Object(c.a)(this,e),(t=Object(u.a)(this,Object(s.a)(e).call(this,n))).showTooltip=function(n){var e=n.currentTarget;t.setState(function(n){return{tooltipShow:!0,tooltipAnchor:e,tooltipScore:e.getAttribute("data-score"),tooltipLabel:J(e.getAttribute("data-sdg"))}})},t.hideTooltip=function(n){t.setState(function(n){return{tooltipShow:!1}})},t.state={tooltipShow:!1,tooltipAnchor:null,tooltipScore:null,tooltipLabel:null},t}return Object(d.a)(e,n),Object(l.a)(e,[{key:"render",value:function(){var n=this.state,e=n.tooltipShow,t=n.tooltipAnchor,o=n.tooltipLabel,r=n.tooltipScore;return a.a.createElement("div",null,a.a.createElement(h.a,{variant:"h4",gutterBottom:!0},"Sustainable Development Goals"),a.a.createElement("hr",null),a.a.createElement(h.a,{variant:"body1"},"Select one of the 15 SDGs to see it on the map."),a.a.createElement(P,{showTooltip:this.showTooltip,hideTooltip:this.hideTooltip}),a.a.createElement(F,{className:e?"show":"hidden",open:Boolean(t),keepMounted:!0,anchorEl:t,placement:"top",modifiers:{offset:{enabled:!0,offset:"0, 7px"}}},a.a.createElement("div",null,a.a.createElement("strong",null,o),": ",r)))}}]),e}(o.PureComponent),q=function(n){function e(){return Object(c.a)(this,e),Object(u.a)(this,Object(s.a)(e).apply(this,arguments))}return Object(d.a)(e,n),Object(l.a)(e,[{key:"render",value:function(){return a.a.createElement("div",null,a.a.createElement(h.a,{variant:"h2",gutterBottom:!0},"Country"))}}]),e}(o.Component),Q=function(n){function e(){return Object(c.a)(this,e),Object(u.a)(this,Object(s.a)(e).apply(this,arguments))}return Object(d.a)(e,n),Object(l.a)(e,[{key:"render",value:function(){return a.a.createElement(b.a,{basename:"/"},a.a.createElement(m.a,null,a.a.createElement("div",null,a.a.createElement("ul",null,a.a.createElement("li",null,a.a.createElement(b.b,{to:"/"},"Home")),a.a.createElement("li",null,a.a.createElement(b.b,{to:"/about"},"About"))),a.a.createElement("hr",null),a.a.createElement(p.a,{exact:!0,path:"/",component:I}),a.a.createElement(p.a,{path:"/:country",component:q}))))}}]),e}(o.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(Q,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(n){n.unregister()})}},[[186,1,2]]]);
//# sourceMappingURL=main.1ef0a884.chunk.js.map
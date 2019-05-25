(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{197:function(t,n,e){t.exports=e(236)},236:function(t,n,e){"use strict";e.r(n);var o=e(0),a=e.n(o),r=e(11),i=e.n(r),c=e(28),l=e(29),s=e(32),u=e(30),d=e(33),b=e(21),p=e(157),f=e(63),h=e(174),g=e(113),m=e(175),v=e(163),y=e(162),O=e(23),j=e(159),E=e(102),k=e(166),w=e(178),x=e(130),S=e(183),D=e.n(S),C=e(190),T=e.n(C),G=e(191),A=e.n(G),B=e(111);function L(){var t=Object(b.a)(["\n  display: inline-block;\n  background: black;\n  border-right: 1px solid #fff;\n  min-height: 24px;\n  vertical-align: bottom;\n"]);return L=function(){return t},t}function P(){var t=Object(b.a)(["\n  width: 400px;\n  background: #eee;\n"]);return P=function(){return t},t}var R=O.b.div(P()),z=O.b.div(L()),N=function(t){function n(){return Object(c.a)(this,n),Object(s.a)(this,Object(u.a)(n).apply(this,arguments))}return Object(d.a)(n,t),Object(l.a)(n,[{key:"render",value:function(){var t=this.props,n=t.scores,e=t.showTooltip,o=t.hideTooltip,r=Object.keys(n).map(function(t){var r=100/15*(Number(n[t])/100);return a.a.createElement(z,{key:t,className:"sdg bg ".concat(t.toLowerCase()),"data-sdg":t,"data-score":"".concat(n[t],"%"),style:{width:"calc(".concat(r,"% - 1px")},onMouseOver:e,onMouseOut:o})});return a.a.createElement(R,null,r)}}]),n}(o.PureComponent);function M(){var t=Object(b.a)(["\n  && {\n    border-top: 1px solid rgba(0,0,0,0.12);\n    top: 0px;\n    left: 0px;\n    z-index: 100;\n    position: sticky;\n    background-color: #fff;\n    padding: 0;\n\n    &:after{\n      content:'';\n      position:absolute;\n      left: 0;\n      bottom: 0;\n      width:100%;\n      border-bottom: 2px solid rgba(0,0,0,0.12);\n    }\n  }\n\n  button {\n    width: 100%;\n    padding: 20px 16px 20px 16px;\n    justify-content: left;\n    font-weight: bold;\n    line-height: 24px;\n\n    &:hover {\n      background: #eee;\n    }\n  }\n"]);return M=function(){return t},t}function H(){var t=Object(b.a)(["\n  && {\n    overflow-x: auto;\n  }\n\n  .MuiTableCell-head {\n    color: black;\n    font-size: 1rem;\n    border-top: 1px solid rgba(0,0,0,0.12);\n\n    &:after{\n      content:'';\n      position:absolute;\n      left: 0;\n      bottom: 0;\n      width:100%;\n      border-bottom: 2px solid rgba(0,0,0,0.12);\n    }\n  }\n\n  .MuiTableCell-body {\n    color: #6c757d;\n    font-size: 1rem;\n  }\n"]);return H=function(){return t},t}var W=Object(O.b)(D.a)(H()),I=O.b.th(M()),J=function(t,n){var e=t.index,o=t.sort,r=t.sortDirection,i=t.label,c=function(){switch(r){case"asc":return a.a.createElement(T.a,null);case"desc":return a.a.createElement(A.a,null);default:return a.a.createElement(B.a,null)}}();return a.a.createElement(I,{key:e},a.a.createElement(g.a,{disabled:!o,onClick:function(){return n(e)}},a.a.createElement(y.a,{variant:"body1",style:{fontWeight:500}},i),c))},F={download:!1,viewColumns:!1,print:!1,filter:!1,responsive:"none",selectableRows:"none",elevation:0,rowsPerPage:500,search:!1,sort:!0,customFooter:function(t,n,e,o,r){return a.a.createElement("tbody",null)}},q=function(t){function n(t){var e;return Object(c.a)(this,n),(e=Object(s.a)(this,Object(u.a)(n).call(this,t))).cityDataLoaded=function(t){var n=t.map(function(t){return[t.city,t.region,e.pluckFromJson(t,["SDG1","SDG2","SDG3","SDG4","SDG5","SDG6","SDG7","SDG8","SDG9","SDG10","SDG11","SDG12","SDG13","SDG15","SDG16"]),Number(t.rank),Number(t.score)]});e.setState({data:n})},e.state={data:[]},e}return Object(d.a)(n,t),Object(l.a)(n,[{key:"componentDidMount",value:function(){var t=this;fetch("/data/cities.json").then(function(t){if(t.status>=400)throw new Error("Bad response from server");return t.json()}).then(function(n){return t.cityDataLoaded(n)})}},{key:"pluckFromJson",value:function(t,n){var e={};return n.forEach(function(n){e[n]=t[n]}),e}},{key:"render",value:function(){var t=this.state.data,n=this.props,e=n.showTooltip,o=n.hideTooltip,r=[{name:"City",options:{sort:!0,sortDirection:null,customHeadRender:J,customBodyRender:function(t,n,e){return a.a.createElement("span",{style:{fontWeight:"500",color:"black"}},t)}}},{name:"Region",options:{sort:!0,sortDirection:null,customHeadRender:J}},{name:"SDGs",options:{sort:!1,customBodyRender:function(t,n,r){return a.a.createElement(N,{scores:t,showTooltip:e,hideTooltip:o})},customHeadRender:J}},{name:"Rank",options:{sort:!0,sortDirection:"asc",customHeadRender:J}},{name:"Score",options:{sort:!1,customHeadRender:J}}];return a.a.createElement("div",null,a.a.createElement(y.a,{variant:"h5",gutterBottom:!0},"The European Cities SDG Index"),a.a.createElement(y.a,{variant:"body1",style:{color:"#6c757d"},gutterBottom:!0},"Select a city to see its full profile."),a.a.createElement(W,{data:t,columns:r,options:F}))}}]),n}(o.PureComponent),Q=e(194),V=e(179);function Z(){var t=Object(b.a)(["\n  && {\n    left: 0;\n    position: default;\n    transform: none;\n    width: 100%;\n  }\n"]);return Z=function(){return t},t}var $=O.b.img(Z()),_=function(t){function n(){return Object(c.a)(this,n),Object(s.a)(this,Object(u.a)(n).apply(this,arguments))}return Object(d.a)(n,t),Object(l.a)(n,[{key:"render",value:function(){var t=this.props,n=t.sdg,e=Object(Q.a)(t,["sdg"]);return a.a.createElement(V.a,Object.assign({cols:1},e),a.a.createElement($,{src:"/images/sdg".concat(n,".png"),alt:"SDG ".concat(n," icon"),className:"bg sdg".concat(n)}))}}]),n}(o.PureComponent),K=["No poverty","Zero hunger","Good health and well-being","Quality education","Gender equality","Clean water and sanitation","Affordable and clean energy","Decent work and economic growth","Industry, innovation and infrastructure","Reduced inequalities","Sustainable cities and communities","Responsible consumption and production","Climate action","Life below water","Life on land","Peace, justice and strong institutions","Partnerships for the goals"],U=function(t){var n=Number(t.substring(3));return K[n]};function X(){var t=Object(b.a)(['\n  font-size: .8rem;\n  padding: 12px;\n  background: rgba(0, 0, 0, 0.8);\n  color: #fff;\n  border-radius: 2px;\n  position: absolute;\n  pointer-events: none;\n  z-index: 1000;\n  transition: all .2s;\n\n  &:after {\n    box-sizing: border-box;\n    display: inline;\n    font-size: 10px;\n    width: 100%;\n    line-height: 1;\n    content: "\u25bc";\n    color: rgba(0, 0, 0, 0.8);\n    position: absolute;\n    text-align: center;\n    left: 0;\n    bottom: -7px;\n  }\n\n  &.hidden {\n    visibility: hidden;\n  }\n']);return X=function(){return t},t}var Y=Object(O.b)(k.a)(X()),tt=function(t){function n(t){var e;return Object(c.a)(this,n),(e=Object(s.a)(this,Object(u.a)(n).call(this,t))).showTooltip=function(t){var n=t.currentTarget;e.setState(function(t){return{tooltipShow:!0,tooltipAnchor:n,tooltipScore:n.getAttribute("data-score"),tooltipLabel:U(n.getAttribute("data-sdg"))}})},e.hideTooltip=function(t){e.setState(function(t){return{tooltipShow:!1}})},e.state={tooltipShow:!1,tooltipAnchor:null,tooltipScore:null,tooltipLabel:null},e}return Object(d.a)(n,t),Object(l.a)(n,[{key:"render",value:function(){var t=this.state,n=t.tooltipShow,e=t.tooltipAnchor,o=t.tooltipLabel,r=t.tooltipScore,i=Object(j.a)(Array(13).keys()).map(function(t){return a.a.createElement(_,{key:t+1,sdg:t+1})}),c=Object(j.a)(Array(2).keys()).map(function(t){return a.a.createElement(_,{key:t+15,sdg:t+15})}),l=a.a.createElement(_,{key:18,sdg:"18"}),s=i.concat(c,l);return a.a.createElement(E.a,{style:{padding:24}},a.a.createElement(x.a,{marginBottom:5},a.a.createElement(y.a,{variant:"h5",gutterBottom:!0},"Sustainable Development Goals"),a.a.createElement(y.a,{variant:"body1",style:{color:"#6c757d"},gutterBottom:!0},"Select one of the 15 SDGs to see it on the map."),a.a.createElement(w.a,{cols:8,spacing:8,cellHeight:"auto"},s)),a.a.createElement(q,{showTooltip:this.showTooltip,hideTooltip:this.hideTooltip}),a.a.createElement(Y,{className:n?"show":"hidden",open:Boolean(e),keepMounted:!0,anchorEl:e,placement:"top",modifiers:{offset:{enabled:!0,offset:"0, 7px"}}},a.a.createElement(y.a,{variant:"body2",paragraph:!1},a.a.createElement("span",{style:{fontWeight:500}},o),": ",r)))}}]),n}(o.PureComponent),nt=function(t){function n(){return Object(c.a)(this,n),Object(s.a)(this,Object(u.a)(n).apply(this,arguments))}return Object(d.a)(n,t),Object(l.a)(n,[{key:"render",value:function(){return a.a.createElement("div",null,a.a.createElement(y.a,{variant:"h2",gutterBottom:!0},"Country"))}}]),n}(o.Component),et=e(156);function ot(){var t=Object(b.a)(["\n  #cities circle {\n    transition: all .3s;\n    stroke-width: 0;\n\n    &:hover {\n      stroke-width: 8;\n    }\n  }\n"]);return ot=function(){return t},t}var at=Object(O.b)(et.SvgLoader)(ot()),rt=function(t){function n(){return Object(c.a)(this,n),Object(s.a)(this,Object(u.a)(n).apply(this,arguments))}return Object(d.a)(n,t),Object(l.a)(n,[{key:"setCityColor",value:function(t){var n={london:"green"};t.forEach(function(t){t.setAttribute("fill",n[t.id]||"black"),t.setAttribute("stroke",n[t.id]||"black")})}},{key:"render",value:function(){var t=this.props,n=t.showTooltip,e=t.hideTooltip;return a.a.createElement(at,{path:"/images/europe.svg",style:{width:"100%",height:"auto"}},a.a.createElement(et.SvgProxy,{selector:"#cities circle",onElementSelected:this.setCityColor,onMouseOver:n,onMouseOut:e}))}}]),n}(o.PureComponent);function it(){var t=Object(b.a)(['\n  font-size: .8rem;\n  border-radius: 5px;\n  padding: 12px;\n  background: rgba(0, 0, 0, 0.8);\n  color: #fff;\n  position: absolute;\n  pointer-events: none;\n  z-index: 1000;\n\n  &:after {\n    box-sizing: border-box;\n    display: inline;\n    font-size: 10px;\n    width: 100%;\n    line-height: 1;\n    content: "\u25bc";\n    color: rgba(0, 0, 0, 0.8);\n    position: absolute;\n    text-align: center;\n    left: 0;\n    bottom: -7px;\n  }\n']);return it=function(){return t},t}var ct=Object(O.b)(k.a)(it()),lt=function(t){function n(t){var e;return Object(c.a)(this,n),(e=Object(s.a)(this,Object(u.a)(n).call(this,t))).showTooltip=function(t){var n=t.currentTarget;e.setState(function(t){return{tooltipShow:!0,tooltipAnchor:n,tooltipScore:"55.4",tooltipCity:"London",tooltipLabel:"Overall Score"}})},e.hideTooltip=function(t){e.setState(function(t){return{tooltipShow:!1}})},e.state={tooltipShow:!1,tooltipAnchor:null,tooltipScore:null,tooltipLabel:null},e}return Object(d.a)(n,t),Object(l.a)(n,[{key:"render",value:function(){var t=this.state,n=t.tooltipShow,e=t.tooltipAnchor,o=t.tooltipCity,r=t.tooltipLabel,i=t.tooltipScore;return a.a.createElement(m.a,null,a.a.createElement(rt,{showTooltip:this.showTooltip,hideTooltip:this.hideTooltip}),a.a.createElement(ct,{open:n,anchorEl:e,placement:"top",transition:!0,modifiers:{offset:{enabled:!0,offset:"0, 10px"}}},a.a.createElement(y.a,{variant:"body2",paragraph:!1},a.a.createElement("div",{style:{fontWeight:500}},o),a.a.createElement("span",null,r,":\xa0"),a.a.createElement("span",{style:{fontWeight:500}},i))))}}]),n}(o.PureComponent);function st(){var t=Object(b.a)(["\n  && {\n    text-align: left;\n    padding: 16px;\n    display: flex;\n    align-self: stretch;\n    flex-direction: column;\n    align-items: start;\n  }\n"]);return st=function(){return t},t}function ut(){var t=Object(b.a)(["\n  body {\n    background: #f8f9fa;\n    margin: 0;\n    padding: 0;\n  }\n\n  .bg {\n    &.sdg1 {\n      background: rgb(204,44,67);\n    }\n    &.sdg2 {\n      background: rgb(211, 162 ,70 );\n    }\n    &.sdg3 {\n      background: rgb(81, 148 ,71 );\n    }\n    &.sdg4 {\n      background: rgb(175, 39, 56 );\n    }\n    &.sdg5 {\n      background: rgb(211 ,69 ,58 );\n    }\n    &.sdg6 {\n      background: rgb(73, 181 ,203 ) ;\n    }\n    &.sdg7 {\n      background: rgb(238, 189, 64 ) ;\n    }\n    &.sdg8 {\n      background: rgb(141, 36, 65 );\n    }\n    &.sdg9 {\n      background: rgb(219, 104, 62 ) ;\n    }\n    &.sdg10 {\n      background: rgb(197 ,36 ,96 );\n    }\n    &.sdg11 {\n      background: rgb(232, 151, 68 ) ;\n    }\n    &.sdg12 {\n      background: rgb(177 ,134, 58 ) ;\n    }\n    &.sdg13 {\n      background: rgb(65, 119 ,68 );\n    }\n    &.sdg15 {\n      background: rgb(100 ,167, 74 ) ;\n    }\n    &.sdg16 {\n      background: rgb(31, 101 ,137 ) ;\n    }\n  }\n"]);return ut=function(){return t},t}function dt(){var t=Object(b.a)(["\n  && {\n    box-shadow: 0 1px 12px -3px rgba(0,0,0,.1);\n    background: white;\n  }\n\n  h6 {\n    font-weight: 400;\n  }\n\n  a {\n    text-decoration: none;\n    color: inherit;\n  }\n"]);return dt=function(){return t},t}var bt=Object(O.b)(h.a)(dt()),pt=Object(O.a)(ut()),ft=Object(O.b)(g.a)(st()),ht=function(t){function n(){return Object(c.a)(this,n),Object(s.a)(this,Object(u.a)(n).apply(this,arguments))}return Object(d.a)(n,t),Object(l.a)(n,[{key:"render",value:function(){return a.a.createElement(p.a,{basename:"/"},a.a.createElement(bt,{position:"static",color:"default"},a.a.createElement(m.a,{style:{padding:0}},a.a.createElement(v.a,null,a.a.createElement(ft,{component:p.b,to:"/"},a.a.createElement(y.a,{variant:"h6",color:"inherit"},"European Cities SDG Index 2019"),a.a.createElement(y.a,{variant:"body1",style:{color:"#6c757d"},gutterBottom:!0},"Prototype Version")),a.a.createElement(ft,{style:{flexGrow:1},disabled:!0}),a.a.createElement(ft,{component:"a",href:"http://unsdsn.org/",target:"_blank",rel:"noopener noreferrer"},a.a.createElement("img",{src:"/images/SDSN-logo.png",alt:"SDSN logo",style:{maxHeight:60}}))))),a.a.createElement(lt,null),a.a.createElement(m.a,null,a.a.createElement(f.a,{exact:!0,path:"/",component:tt}),a.a.createElement(f.a,{path:"/:country",component:nt})),a.a.createElement(pt,null))}}]),n}(o.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(ht,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}},[[197,1,2]]]);
//# sourceMappingURL=main.b2b7b34b.chunk.js.map
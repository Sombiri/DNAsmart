(this["webpackJsonpdna-storage-multi-attribute-ranking-tool"]=this["webpackJsonpdna-storage-multi-attribute-ranking-tool"]||[]).push([[0],{140:function(e,t,n){var a=new function(){this.line_break="\n",this.ParseFasta=function(e){for(var t=[],n=e.split(">"),a=1;a<n.length;a++){n[a]=n[a].replace(/\r/g,"");var r={},c=n[a].split(this.line_break);r.label=c[0],r.value="";for(var i=1;i<c.length;i++)r.value=r.value+c[i];t.push(r)}return t}};e.exports&&(e.exports=a)},141:function(e,t,n){},142:function(e,t,n){"use strict";n.r(t);var a=n(5),r=n(0),c=n.n(r),i=n(42),o=n.n(i),l=n(38),s=n(43),u=n(65),h=n(82),d=n.n(h),b=n(99),f=n(36),m=n(177),j=n(218),p=n(207),g=n(214),O=n(143),x=n(179),v=n(181),y=n(211),k=Object(m.a)((function(e){return{root:{flexGrow:1},paper:{position:"absolute",border:"2px solid #000",boxShadow:e.shadows[5],padding:e.spacing(2,4,3),height:400,width:400,backgroundColor:"lightgrey"},paper2:{paddingLeft:"30%",paddingRight:"30%",paddingBottom:"5%",paddingTop:"5%"},uploadButton:{display:"none"}}}));function D(e){var t=e.handleOpen,n=e.handleNext,r=e.handleChange,c=e.selectedFileName,i=e.handleClose,o=(e.selectedFile,e.open),l=k(),s=l.paper2,u=l.paper,h=l.uploadButton,d=Object(a.jsxs)("form",{className:u,onSubmit:n,children:[Object(a.jsx)("h2",{id:"simple-modal-title",children:"Encoded and Decoded sequence"}),Object(a.jsx)("p",{id:"simple-modal-description",children:"Please upload your encoded and decoded sequence"}),Object(a.jsx)("input",{accept:".fasta",className:h,id:"contained-button-file",multiple:!0,type:"file",required:!0,onChange:r}),Object(a.jsx)("label",{htmlFor:"contained-button-file",children:Object(a.jsx)(x.a,{variant:"contained",color:"primary",component:"span",children:"Upload"})}),Object(a.jsx)(O.a,{children:c}),c.endsWith(".fasta")?Object(a.jsx)(v.a,{container:!0,justify:"center",children:Object(a.jsx)(x.a,{variant:"contained",color:"primary",type:"submit",children:"Next"})}):null]});return Object(a.jsxs)("div",{className:s,children:[Object(a.jsxs)("p",{children:[Object(a.jsx)("h2",{children:"Welcome to DNAsmart: DNA Storage Multi-Attribute Ranking Tool"}),"The aim of this tool is to visually represent the effect of attribute weights on the ranking of decoded sequences. To support the ranking of these decoded sequences, from a DNA storage system or experiment, the introduction of weights on certain attributes leads to a specific ranking (favoring specific sequences). By relying on sorting and grouping of such attributes, we obtain an interactive change in the ranking of the best sequences. The rationale is to be able to provide insight into the attribute space by using different attribute combinations. For example, which attribute combination leads to the optimal sequence or top 3 sequences to compare encoding experiments.",Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),"The evaluation Implementation with sample datatset can be found ",Object(a.jsx)("a",{href:"https://dnasmart.mathematik.uni-marburg.de/evaluation",children:"here."}),Object(a.jsx)("br",{})]}),Object(a.jsx)(x.a,{variant:"contained",color:"primary",onClick:t,children:"Start"}),Object(a.jsx)(y.a,{open:o,onClose:i,"aria-labelledby":"simple-modal-title","aria-describedby":"simple-modal-description",className:s,children:d})]})}var w=n(215),E=n(217),A=n(182),C=n(183),N=n(212),S=n(213),L=Object(m.a)((function(e){return{root:{flexGrow:1},paper:{padding:e.spacing(4),textAlign:"left",color:e.palette.text.secondary,height:600,width:1e3,backgroundColor:"lightgrey"},formLabel:{marginBottom:e.spacing(2),fontWeight:700,color:"black",fontSize:30},formGroup:{color:"black"}}}));function I(e){var t=e.handleNext,n=e.handleBack,r=e.handleUnselectAll,c=e.handleSelectAll,i=e.handleIsChecked,o=e.isChecked,l=e.metricsSelectError,s=e.hammingDistanceError,u=L(),h=u.root,d=u.formLabel,b=u.formGroup,f=o.hammingDistance,m=o.levenshteinDistance,j=o.damerauLevenshteinDistance,p=o.conditionalEntropy,g=o.mutualInformation,y=o.numberOfErrors;return Object(a.jsxs)(v.a,{container:!0,className:h,spacing:4,children:[Object(a.jsxs)(v.a,{item:!0,xs:!0,children:[Object(a.jsx)(v.a,{container:!0,justify:"center",spacing:4,children:Object(a.jsx)(v.a,{item:!0,children:Object(a.jsxs)(w.a,{component:"fieldset",children:[Object(a.jsx)(E.a,{className:d,component:"legend",children:"Select an attribute for evaluation"}),Object(a.jsxs)(A.a,{className:b,children:[Object(a.jsx)(C.a,{control:Object(a.jsx)(N.a,{checked:f,onChange:i,name:"hammingDistance",color:"primary",disabled:s,disableRipple:!0}),label:"Hamming Distance"}),s?Object(a.jsx)(O.a,{color:"secondary",variant:"caption",children:"Hamming distance error: Input sequences must be of equal length"}):null,Object(a.jsx)(C.a,{control:Object(a.jsx)(N.a,{checked:m,onChange:i,name:"levenshteinDistance",color:"primary",disableRipple:!0}),label:"Levenshtein Distance"}),Object(a.jsx)(C.a,{control:Object(a.jsx)(N.a,{checked:j,onChange:i,name:"damerauLevenshteinDistance",color:"primary",disableRipple:!0}),label:"Damerau-Levenshtein Distance"}),Object(a.jsx)(C.a,{control:Object(a.jsx)(N.a,{checked:p,onChange:i,name:"conditionalEntropy",color:"primary",disableRipple:!0}),label:"Conditional Entropy"}),Object(a.jsx)(C.a,{control:Object(a.jsx)(N.a,{checked:g,onChange:i,name:"mutualInformation",color:"primary",disableRipple:!0}),label:"Mutual Information"}),Object(a.jsx)(C.a,{control:Object(a.jsx)(N.a,{checked:y,onChange:i,name:"numberOfErrors",color:"primary",disableRipple:!0}),label:"Number of Errors"})]})]})})}),Object(a.jsx)(v.a,{item:!0,spacing:4,children:Object(a.jsxs)(v.a,{container:!0,spacing:4,justify:"space-evenly",children:[Object(a.jsx)(v.a,{item:!0,children:Object(a.jsx)(x.a,{color:"primary",onClick:c,children:"Select All"})}),Object(a.jsx)(v.a,{item:!0,children:Object(a.jsx)(x.a,{color:"primary",onClick:r,children:"Unselect All"})})]})}),Object(a.jsx)(v.a,{spacing:6,children:l?Object(a.jsx)(v.a,{item:!0,children:Object(a.jsx)(S.a,{severity:"error",children:"Please select all attributes"})}):null})]}),Object(a.jsxs)(v.a,{container:!0,justify:"center",children:[Object(a.jsx)(x.a,{onClick:n,children:"Back"}),Object(a.jsx)(x.a,{disabled:l,variant:"contained",color:"primary",onClick:t,children:"Next"})]})]})}var M=n(116),R=n(216),B=Object(m.a)((function(e){return{root:{flexGrow:1},lineUp:{maxHeight:"80vh"},paper:{padding:e.spacing(1),textAlign:"left",color:e.palette.text.secondary,height:"auto",width:"auto",backgroundColor:"lightgrey"}}}));function q(e){var t=e.handleBack,n=e.handleReset,c=e.dataToVisualize,i=B(),o=i.lineUp,s=i.root,u=Object(r.useState)([Object(a.jsx)(M.c,{column:"label",label:"Label",width:150},"label")]),h=Object(f.a)(u,2),d=h[0],b=h[1],m=function(e){return Math.max.apply(Math,c.map((function(t){return t[e]})))};return Object(r.useEffect)((function(){!function(){var e=c[0],t=Object(l.a)(d);e.hasOwnProperty("Hamming Distance")&&t.push(Object(a.jsx)(M.b,{column:"Hamming Distance",label:"Hamming Distance",color:"#1170aa",domain:[0,m("Hamming Distance")],width:200},"hamming")),e.hasOwnProperty("Levenshtein Distance")&&t.push(Object(a.jsx)(M.b,{column:"Levenshtein Distance",label:"Levenshtein Distance",color:"#a3cce9",domain:[0,m("Levenshtein Distance")],width:200},"levenshtein")),e.hasOwnProperty("Conditional Entropy")&&t.push(Object(a.jsx)(M.b,{column:"Conditional Entropy",label:"Conditional Entropy",color:"#c85200",domain:[0,m("Conditional Entropy")],width:200},"conditionalEntropy")),e.hasOwnProperty("Damerau-Levenshtein Distance")&&t.push(Object(a.jsx)(M.b,{column:"Damerau-Levenshtein Distance",label:"Damerau-Levenshtein Distance",color:"#ffbc79",domain:[0,m("Damerau-Levenshtein Distance")],width:200},"damerauLevenshtein")),e.hasOwnProperty("Mutual Information")&&t.push(Object(a.jsx)(M.b,{column:"Mutual Information",label:"Mutual Information",color:"#5fa2ce",domain:[0,m("Mutual Information")],width:200},"mutualInformation")),e.hasOwnProperty("Number of Errors")&&t.push(Object(a.jsx)(M.b,{column:"Number of Errors",label:"Number of Errors",color:"#fc7d0b",domain:[0,m("Number of Errors")],width:200},"numberOfErrors")),b(t)}()}),[]),Object(a.jsxs)("div",{className:s,children:[Object(a.jsx)(R.a,{className:o,data:c,children:d}),Object(a.jsxs)(v.a,{container:!0,justify:"center",children:[Object(a.jsx)(x.a,{onClick:t,children:"Back"}),Object(a.jsx)(x.a,{variant:"contained",color:"primary",onClick:n,children:"Start Over"})]})]})}var F=n(14);function P(e,t){return function(){var e=t.length,n=Array.from(t).reduce((function(e,t){return(e[t]=(e[t]||0)+1)&&e}),{});return Object.values(n).reduce((function(t,n){return t-n/e*Math.log2(n/e)}),0)}()-(function(){var n=t.length*e.length,a=[];Array.from(t).map((function(t){return Array.from(e).map((function(e){return t+e}))})).forEach((function(e){return e.forEach((function(e){return a.push(e)}))}));var r=a.reduce((function(e,t){return(e[t]=(e[t]||0)+1)&&e}),{});return Object.values(r).reduce((function(e,t){return e-t/n*Math.log2(t/n)}),0)}()-function(){var t=e.length,n=Array.from(e).reduce((function(e,t){return(e[t]=(e[t]||0)+1)&&e}),{});return Object.values(n).reduce((function(e,n){return e-n/t*Math.log2(n/t)}),0)}())}var T=Object(m.a)({root:{backgroundColor:"#ccc",zIndex:1,color:"#fff",width:50,height:50,display:"flex",borderRadius:"50%",justifyContent:"center",alignItems:"center"},active:{backgroundImage:"linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)",boxShadow:"0 4px 10px 0 rgba(0,0,0,.25)"},completed:{backgroundImage:"linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)"}});function H(){var e,t=Object(r.useState)(0),c=Object(f.a)(t,2),i=c[0],o=c[1],h=Object(r.useState)(""),m=Object(f.a)(h,2),x=m[0],v=m[1],y=Object(r.useState)(""),k=Object(f.a)(y,2),w=k[0],E=k[1],A=Object(r.useState)([{label:"",value:""},{label:"",value:""}]),C=Object(f.a)(A,2),N=C[0],S=C[1],L=Object(r.useState)(!1),M=Object(f.a)(L,2),R=M[0],B=M[1],H=Object(r.useState)(!1),U=Object(f.a)(H,2),W=U[0],G=U[1],z=Object(r.useState)([]),_=Object(f.a)(z,2),J=_[0],V=_[1],Y=Object(r.useState)({hammingDistance:!1,levenshteinDistance:!1,damerauLevenshteinDistance:!1,conditionalEntropy:!1,mutualInformation:!1,numberOfErrors:!1}),K=Object(f.a)(Y,2),Q=K[0],X=K[1],Z=Object(r.useState)(!1),$=Object(f.a)(Z,2),ee=$[0],te=$[1],ne=function(){var t=Object(b.a)(d.a.mark((function t(a){var r,c,i,o,l,s,u,h;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(l=function(){return(l=Object(b.a)(d.a.mark((function t(){var n;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,new Promise((function(t){(e=new FileReader).onloadend=function(n){return t(e.result)},e.readAsText(i)}));case 2:return n=t.sent,t.abrupt("return",n);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)},o=function(){return l.apply(this,arguments)},r=a.target.files[0].name,c=w,(c=r).endsWith(".fasta")){t.next=10;break}return alert("Invalid file extension. Upload a fasta file"),t.abrupt("return",!1);case 10:E(c);case 11:return i=a.target.files[0],t.next=14,o();case 14:s=t.sent,u=n(140),h=u.ParseFasta(s),N,S(h),v(s);case 22:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),ae=function(e){X(Object(u.a)(Object(u.a)({},Q),{},Object(s.a)({},e.target.name,e.target.checked)))},re=function(){var e=Object(u.a)({},Q);Object.keys(e).forEach((function(t){return e[t]=!0})),W&&(e.hammingDistance=!1),X(e)},ce=function(){var e=Object(u.a)({},Q);Object.keys(e).forEach((function(t){return e[t]=!1})),X(e)},ie=function(){var e=[],t=Object(l.a)(N).filter((function(e){return"Reference"===e.label})).reduce((function(e,t){return t.value}),""),n=Object(l.a)(N).filter((function(e){return"Reference"!==e.label})),a=Q.hammingDistance,r=Q.levenshteinDistance,c=Q.damerauLevenshteinDistance,i=Q.conditionalEntropy,o=Q.mutualInformation,s=Q.numberOfErrors;n.forEach((function(n){var l,u,h=n.label,d=n.value,b={label:h};a&&(b["Hamming Distance"]=function(e,t){for(var n=0,a=0;a<e.length;a+=1)e[a]!==t[a]&&(n+=1);return n}(t,d)),r&&(b["Levenshtein Distance"]=function(e,t){if(0===e.length)return t.length;if(0===t.length)return e.length;var n,a,r=[];for(n=0;n<=t.length;n++)r[n]=[n];for(a=0;a<=e.length;a++)r[0][a]=a;for(n=1;n<=t.length;n++)for(a=1;a<=e.length;a++)t.charAt(n-1)===e.charAt(a-1)?r[n][a]=r[n-1][a-1]:r[n][a]=Math.min(r[n-1][a-1]+1,Math.min(r[n][a-1]+1,r[n-1][a]+1));return r[t.length][e.length]}(t,d)),i&&(b["Conditional Entropy"]=(l=t,u=d,function(){var e=u.length*l.length,t=[];Array.from(u).map((function(e){return Array.from(l).map((function(t){return e+t}))})).forEach((function(e){return e.forEach((function(e){return t.push(e)}))}));var n=t.reduce((function(e,t){return(e[t]=(e[t]||0)+1)&&e}),{});return Object.values(n).reduce((function(t,n){return t-n/e*Math.log2(n/e)}),0)}()-function(){var e=l.length,t=Array.from(l).reduce((function(e,t){return(e[t]=(e[t]||0)+1)&&e}),{});return Object.values(t).reduce((function(t,n){return t-n/e*Math.log2(n/e)}),0)}())),c&&(b["Damerau-Levenshtein Distance"]=function(e,t){if(0===e.length)return t.length;if(0===t.length)return e.length;var n,a,r,c=[];for(a=0;a<=t.length;a++)c[a]=[],c[a][0]=a;for(r=0;r<=e.length;r++)c[0][r]=r;for(a=1;a<=t.length;a++)for(r=1;r<=e.length;r++)n=t.charAt(a-1)===e.charAt(r-1)?0:1,c[a][r]=Math.min(c[a-1][r]+1,c[a][r-1]+1,c[a-1][r-1]+n),a>1&&r>1&&t.charAt(a-1)===e.charAt(r-2)&&t.charAt(a-2)===e.charAt(r-1)&&(c[a][r]=Math.min(c[a][r],c[a-2][r-2]+n));return c[t.length][e.length]}(t,d)),o&&(b["Mutual Information"]=P(t,d)),s&&(b["Number of Errors"]=function(e,t){for(var n={},a={},r=0;r<e.length+1;r++){n[r]={0:0},a[r]={0:[]};for(var c=1;c<t.length+1;c++)n[r][c]=0===r||e.charAt(r-1)===t.charAt(c-1)?0:-1,a[r][c]=[]}for(var i=0;i<e.length+1;i++)for(var o=0;o<t.length+1;o++){var l=0===i||0===o?-5*(i+o):Math.max(n[i-1][o]+-5,n[i-1][o-1]+n[i][o],n[i][o-1]+-5);i>0&&o>0?(l===n[i-1][o]+-5&&a[i][o].push(0),l===n[i][o-1]+-5&&a[i][o].push(1),l===n[i-1][o-1]+n[i][o]&&a[i][o].push(2)):a[i][o].push(0===o?0:1),n[i][o]=l}for(var s=[[],[]],u=e.length,h=t.length;u>0||h>0;)switch(a[u][h][0]){case 0:u--,s[0].push(e.charAt(u)),s[1].push("-");break;case 1:h--,s[0].push("-"),s[1].push(t.charAt(h));break;case 2:u--,h--,s[0].push(e.charAt(u)),s[1].push(t.charAt(h))}for(var d=s.map((function(e){return e.reverse().join("")})),b=Object(f.a)(d,2),m=b[0],j=b[1],p=0,g=Array.from(m),O=Array.from(j),x=0;x<g.length;x++)g[x]!==O[x]?p+=1:p+=0;return p}(t,d)),e.push(b)})),V(e)};Object(r.useEffect)((function(){var e=Object.values(Q).some((function(e){return e}));B(!e)}),[Q]),Object(r.useEffect)((function(){!function(){var e=Object(l.a)(N).filter((function(e){return"Reference"!==e.label})).map((function(e){return e.value})),t=Object(l.a)(N).filter((function(e){return"Reference"===e.label})).reduce((function(e,t){return t.value}),""),n=e.some((function(e){return e.length!==t.length}));X(Object(u.a)(Object(u.a)({},Q),{},{hammingDistance:!1})),G(n)}()}),[N]);var oe=["Reference and Input Sequence","Metrics","Results"];function le(e){var t,n=T(),r=e.active,c=e.completed;return Object(a.jsx)("div",{className:Object(F.a)(n.root,(t={},Object(s.a)(t,n.active,r),Object(s.a)(t,n.completed,c),t)),children:{1:1,2:2,3:3}[String(e.icon)]})}var se=function(e){e.preventDefault();var t=i;1===t&&ie(),o(t+1),te(!1)},ue=function(){o((function(e){return e-1})),te(!0),E("")},he=function(e){e.preventDefault(),o(0),v(""),E(""),S([{label:"",value:""},{label:"",value:""}]),X({hammingDistance:!1,levenshteinDistance:!1,damerauLevenshteinDistance:!1,conditionalEntropy:!1,mutualInformation:!1,numberOfErrors:!1}),te(!1)},de=function(){te(!0)},be=function(){te(!1)},fe=function(){o(0),v(""),E(""),S([{label:"",value:""},{label:"",value:""}]),X({hammingDistance:!1,levenshteinDistance:!1,damerauLevenshteinDistance:!1,conditionalEntropy:!1,mutualInformation:!1,numberOfErrors:!1}),te(!0)};return Object(a.jsxs)("div",{children:[Object(a.jsx)(j.a,{activeStep:i,steps:oe,children:oe.map((function(e){return Object(a.jsx)(p.a,{children:Object(a.jsx)(g.a,{StepIconComponent:le,children:e})},e)}))}),Object(a.jsx)("div",{children:Object(a.jsx)(O.a,{children:function(e){switch(e){case 0:return Object(a.jsx)(D,{handleNext:se,handleChange:ne,handleOpen:de,handleClose:be,selectedFileName:w,selectedFile:x,open:ee});case 1:return Object(a.jsx)(I,{isChecked:Q,handleBack:ue,handleNext:se,handleIsChecked:ae,handleSelectAll:re,handleUnselectAll:ce,metricsSelectError:R,hammingDistanceError:W});case 2:return Object(a.jsx)(q,{handleNext:se,handleBack:ue,dataToVisualize:J,handleStartTest:fe,handleReset:he});default:return"Unknown step"}}(i)})})]})}var U=n(208),W=n(209),G=n.p+"static/media/logo_ok.855b89cc.png",z=Object(m.a)((function(){return{root:{flexGrow:1},header:{backgroundColor:"lightgrey",height:200,position:"relative"},title:{fontWeight:"300",color:"black",fontFamily:"Work Sans, sans-serif",textAlign:"center"},menuButton:{fontFamily:"Open Sans, sans-serif",fontWeight:"700",size:"18px",marginLeft:"38px"},toolbar:{display:"flex",justifyContent:"space-between"},logostyle:{maxWidth:1e3,marginRight:"10px"}}}));function _(){var e=z(),t=e.root,n=e.header,r=e.logostyle,c=e.menuButton,i=e.toolbar;return Object(a.jsx)("div",{children:Object(a.jsx)("header",{className:t,children:Object(a.jsx)(U.a,{className:n,children:Object(a.jsxs)(W.a,{className:i,children:[Object(a.jsx)("img",{src:G,alt:"Code LineUp",className:r}),Object(a.jsxs)("div",{children:[Object(a.jsx)(x.a,{color:"inherit",className:c,children:"Home"}),Object(a.jsx)(x.a,{color:"inherit",href:"https://mosla.mathematik.uni-marburg.de/",className:c,children:"About"}),Object(a.jsx)(x.a,{color:"inherit",className:c,children:"Login"})]})]})})})})}function J(){return Object(a.jsx)("footer",{className:"footer",children:Object(a.jsxs)("p",{children:["Copyright | \xa9 ",(new Date).getFullYear()," DNAsmart"]})})}var V=function(){return Object(a.jsxs)("div",{children:[Object(a.jsx)(_,{}),Object(a.jsx)(H,{}),Object(a.jsx)(J,{})]})};n(141);o.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(V,{})}),document.getElementById("root"))}},[[142,1,2]]]);
//# sourceMappingURL=main.4c7aa658.chunk.js.map
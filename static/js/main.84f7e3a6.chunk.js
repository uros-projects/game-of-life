(this["webpackJsonpgame-of-life"]=this["webpackJsonpgame-of-life"]||[]).push([[0],{11:function(e,t,n){"use strict";n.r(t);var r=n(0),i=n(1),c=n(5),o=n.n(c),a=n(2),u=n(4),s=[[-1,-1],[-1,0],[-1,1],[0,-1],[0,1],[1,-1],[1,0],[1,1]],l=function(){var e=Object(i.useState)((function(){for(var e=[],t=0;t<30;t++)e.push(Array.from(Array(30),(function(){return 0})));return e})),t=Object(a.a)(e,2),n=t[0],c=t[1],o=Object(i.useState)(!1),l=Object(a.a)(o,2),d=l[0],b=l[1],f=Object(i.useRef)(d);f.current=d;var h=Object(i.useCallback)((function(){f.current&&(c((function(e){return Object(u.a)(e,(function(t){for(var n=function(n){for(var r=function(r){var i=0;s.forEach((function(t){var c=Object(a.a)(t,2),o=c[0],u=c[1],s=n+o,l=r+u;s>=0&&s<30&&l>=0&&l<30&&(i+=e[s][l])})),i<2||i>3?t[n][r]=0:0===e[n][r]&&3===i&&(t[n][r]=1)},i=0;i<30;i++)r(i)},r=0;r<30;r++)n(r)}))})),setTimeout(h,150))}),[]);return Object(r.jsxs)("div",{style:{height:"100vh",width:"100vw",background:"#eeeeee",margin:"0 auto",paddingTop:"1rem",textAlign:"center"},children:[Object(r.jsx)("h3",{children:"Game Of Life"}),Object(r.jsx)("p",{children:"Set the fields you want to make 'alive', and click start. You can also change field status by clicking during the simulation."}),Object(r.jsx)("button",{onClick:function(){b(!d),d||(f.current=!0,h())},style:{display:"block",margin:"2rem auto",padding:"1rem",width:"16rem",background:"#f15025",color:"white",fontSize:"1.2rem",fontWeight:"bold",borderRadius:"0.9rem",cursor:"pointer",border:"2px solid black",outline:"none"},children:d?"S T O P":"S T A R T"}),Object(r.jsx)("div",{style:{display:"block",position:"relative",width:"40rem",margin:"2rem auto"},children:Object(r.jsx)("div",{style:{display:"grid",gridTemplateColumns:"repeat(".concat(30,", 20px)"),margin:"0 1.6rem"},children:n.map((function(e,t){return e.map((function(e,i){return Object(r.jsx)("div",{onClick:function(){var e=Object(u.a)(n,(function(e){e[t][i]=n[t][i]?0:1}));c(e)},style:{widths:20,height:20,backgroundColor:n[t][i]?"#f15025":void 0,border:"solid 1px black"}},"".concat(t,"-").concat(i))}))}))})})]})};o.a.render(Object(r.jsx)(l,{}),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.84f7e3a6.chunk.js.map
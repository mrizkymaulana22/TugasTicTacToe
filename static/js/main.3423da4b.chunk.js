(this.webpackJsonpreact_tic_tac_toe=this.webpackJsonpreact_tic_tac_toe||[]).push([[0],{28:function(n,t,e){},43:function(n,t,e){"use strict";e.r(t);var r=e(1),i=e(0),c=e(9),a=e.n(c),o=(e(28),e(2)),u=e(3),s=e(4),l={1:1,0:0,2:-1},f="not_started",d="in_progress",p="over",b={mudah:"MUDAH",sedang:"SEDANG",sulit:"SULIT"},h=e(17),j=function n(t){var e=this;Object(h.a)(this,n),this.makeMove=function(n,t){null===e.grid[n]&&(e.grid[n]=t)},this.getEmptySquares=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e.grid,t=[];return n.forEach((function(n,e){null===n&&t.push(e)})),t},this.isEmpty=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e.grid;return e.getEmptySquares(n).length===Math.pow(3,2)},this.getWinner=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e.grid,t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],r=null;return t.forEach((function(t,i){null!==n[t[0]]&&n[t[0]]===n[t[1]]&&n[t[0]]===n[t[2]]?(r=n[t[0]],e.winningIndex=i):null===r&&0===e.getEmptySquares(n).length&&(r=0,e.winningIndex=null)})),r},this.getStrikethroughStyles=function(){var n=285;switch(e.winningIndex){case 0:return"\n          transform: none;\n          top: 41px;\n          left: 15px;\n          width: ".concat(n,"px;\n        ");case 1:return"\n          transform: none;\n          top: 140px;\n          left: 15px;\n          width: ".concat(n,"px;\n        ");case 2:return"\n          transform: none;\n          top: 242px;\n          left: 15px;\n          width: ".concat(n,"px;\n        ");case 3:return"\n          transform: rotate(90deg);\n          top: 145px;\n          left: -86px;\n          width: ".concat(n,"px;\n        ");case 4:return"\n          transform: rotate(90deg);\n          top: 145px;\n          left: 15px;\n          width: ".concat(n,"px;\n        ");case 5:return"\n          transform: rotate(90deg);\n          top: 145px;\n          left: 115px;\n          width: ".concat(n,"px;\n        ");case 6:return"\n          transform: rotate(45deg);\n          top: 145px;\n          left: -44px;\n          width: ".concat(400,"px;\n        ");case 7:return"\n          transform: rotate(-45deg);\n          top: 145px;\n          left: -46px;\n          width: ".concat(400,"px;\n        ");default:return null}},this.clone=function(){return new n(e.grid.concat())},this.grid=t||new Array(Math.pow(3,2)).fill(null),this.winningIndex=null},x=function(n){return 1===n?2:1},m=function(n,t){return n=Math.ceil(n),t=Math.floor(t),Math.floor(Math.random()*(t-n+1))+n},O=e(18),v=function n(t,e){var r,i=l[String(e)],c=-1,a=null;if(null!==t.getWinner())return[l[t.getWinner()],0];var o,u=Object(O.a)(t.getEmptySquares());try{for(u.s();!(o=u.n()).done;){var s=o.value,f=t.clone();f.makeMove(s,e),(r=i*n(f,x(e))[0])>=c&&(c=r,a=s)}}catch(d){u.e(d)}finally{u.f()}return[i*c,a]},g=e(5),w=e.n(g);function y(){var n=Object(o.a)(["\n  border-bottom-left-radius: 15px 255px;\n  border-bottom-right-radius: 225px 15px;\n  border-top-left-radius: 255px 15px;\n  border-top-right-radius: 15px 225px;\n  border: 2px solid #41403e;\n"]);return y=function(){return n},n}var k=Object(u.a)(y());function S(){var n=Object(o.a)(["\n  font-size: 16px;\n"]);return S=function(){return n},n}function E(){var n=Object(o.a)(["\n  display: flex;\n  justify-content: space-between;\n  flex: 0 0 auto;\n  width: 100%;\n"]);return E=function(){return n},n}function M(){var n=Object(o.a)(["\n  flex: 1 1 auto;\n  text-align: center;\n"]);return M=function(){return n},n}function A(){var n=Object(o.a)(["\n  display: flex;\n  align-items: center;\n  margin-bottom: 20px;\n  font-size: 24px;\n  font-weight: bold;\n  text-transform: uppercase;\n"]);return A=function(){return n},n}function I(){var n=Object(o.a)(["\n  display: flex;\n  flex-direction: column;\n  padding: 24px;\n  background-color: #fff;\n  max-height: 100%;\n  height: 100%;\n  align-items: center;\n  backface-visibility: hidden;\n  padding: 1.25rem;\n  ",";\n"]);return I=function(){return n},n}function N(){var n=Object(o.a)(["\n  height: 300px;\n  position: relative;\n  margin: 0 auto;\n  top: 10%;\n  right: auto;\n  bottom: auto;\n  width: 320px;\n  outline: none;\n  display: flex;\n  flex-direction: column;\n"]);return N=function(){return n},n}var C={overlay:{backgroundColor:"rgba(0,0,0, 0.6)"}},P=function(n){var t=n.isOpen,e=n.close,i=n.startNewGame,c=n.winner;return Object(r.jsx)(q,{isOpen:t,onRequestClose:e,style:C,ariaHideApp:!1,children:Object(r.jsxs)(_,{children:[Object(r.jsx)(T,{children:"PERMAINAN SELESAI"}),Object(r.jsx)(W,{children:c}),Object(r.jsxs)(L,{children:[Object(r.jsx)(U,{onClick:e,children:"TUTUP"}),Object(r.jsx)(U,{onClick:i,children:"MAIN LAGI"})]})]})})},q=Object(u.b)(w.a)(N()),_=u.b.div(I(),k),T=u.b.p(A()),W=u.b.p(M());W.displayName="ModalContent";var L=u.b.div(E()),U=u.b.button(S());function G(){var n=Object(o.a)(["\n  position: absolute;\n  ","\n  background-color: indianred;\n  height: 5px;\n  width: ",";\n"]);return G=function(){return n},n}function H(){var n=Object(o.a)([""]);return H=function(){return n},n}function R(){var n=Object(o.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-bottom: 30px;\n"]);return R=function(){return n},n}function z(){var n=Object(o.a)([""]);return z=function(){return n},n}function D(){var n=Object(o.a)(["\n  display: flex;\n  width: 150px;\n  justify-content: space-between;\n"]);return D=function(){return n},n}function X(){var n=Object(o.a)(["\n  font-size: 68px;\n"]);return X=function(){return n},n}function B(){var n=Object(o.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: ","px;\n  height: ","px;\n  ",";\n\n  &:hover {\n    cursor: pointer;\n  }\n"]);return B=function(){return n},n}function J(){var n=Object(o.a)(["\n  display: flex;\n  justify-content: center;\n  width: ",";\n  flex-flow: wrap;\n  position: relative;\n"]);return J=function(){return n},n}var F=new Array(Math.pow(3,2)).fill(null),K=new j,Y=u.b.div(J(),(function(n){var t=n.dims;return"".concat(105*t,"px")})),Z=u.b.div(B(),100,100,k);Z.displayName="Square";var $=u.b.p(X()),Q=u.b.div(D()),V=u.b.div(z()),nn=u.b.div(R()),tn=u.b.p(H()),en=u.b.div(G(),(function(n){return n.styles}),(function(n){return!n.styles&&"0px"})),rn=function(n){var t=n.squares,e=void 0===t?F:t,c=Object(i.useState)({human:null,computer:null}),a=Object(s.a)(c,2),o=a[0],u=a[1],l=Object(i.useState)(f),h=Object(s.a)(l,2),O=h[0],g=h[1],w=Object(i.useState)(e),y=Object(s.a)(w,2),k=y[0],S=y[1],E=Object(i.useState)(null),M=Object(s.a)(E,2),A=M[0],I=M[1],N=Object(i.useState)(null),C=Object(s.a)(N,2),q=C[0],_=C[1],T=Object(i.useState)(!1),W=Object(s.a)(T,2),L=W[0],U=W[1],G=Object(i.useState)(b.sedang),H=Object(s.a)(G,2),R=H[0],z=H[1];Object(i.useEffect)((function(){var n=K.getWinner(k);null!==n&&O!==p&&function(n){var t;switch(n){case 1:t="Pemain X telah memenangkan Permainan!";break;case 2:t="Pemain O telah memenangkan Permainan!";break;case 0:default:t="Hasil Seri!"}g(p),I(t),setTimeout((function(){return U(!0)}),300)}(n)}),[O,k,q]);var D=Object(i.useCallback)((function(n,t){t&&O===d&&S((function(e){var r=e.concat();return r[n]=t,r}))}),[O]),X=Object(i.useCallback)((function(){var n,t=new j(k.concat()),e=t.getEmptySquares(k);switch(R){case b.mudah:do{n=m(0,8)}while(!e.includes(n));break;case b.sedang:if(!t.isEmpty(k)&&Math.random()<.5)n=v(t,o.computer)[1];else do{n=m(0,8)}while(!e.includes(n));break;case b.sulit:default:n=t.isEmpty(k)?m(0,8):v(t,o.computer)[1]}k[n]||(D(n,o.computer),_(o.human))}),[D,k,o,R]);Object(i.useEffect)((function(){var n;return null!==q&&q===o.computer&&O!==p&&(n=setTimeout((function(){X()}),500)),function(){return n&&clearTimeout(n)}}),[q,X,o.computer,O]);var B=function(n){u({human:n,computer:x(n)}),g(d),_(1)};return O===f?Object(r.jsxs)(V,{children:[Object(r.jsxs)(nn,{children:[Object(r.jsx)(tn,{children:"PILIH MODE PERMAINAN"}),Object(r.jsx)("select",{onChange:function(n){z(n.target.value)},value:R,children:Object.keys(b).map((function(n){var t=b[n];return Object(r.jsx)("option",{value:t,children:n},t)}))})]}),Object(r.jsxs)(nn,{children:[Object(r.jsx)(tn,{children:"Pilih Pemain"}),Object(r.jsxs)(Q,{children:[Object(r.jsx)("button",{onClick:function(){return B(1)},children:"X"}),Object(r.jsx)("p",{children:"atau"}),Object(r.jsx)("button",{onClick:function(){return B(2)},children:"O"})]})]})]}):Object(r.jsxs)(Y,{dims:3,children:[k.map((function(n,t){var e=null!==n;return Object(r.jsx)(Z,{"data-testid":"square_".concat(t),onClick:function(){return function(n){k[n]||q!==o.human||(D(n,o.human),_(o.computer))}(t)},children:e&&Object(r.jsx)($,{children:1===n?"X":"O"})},t)})),Object(r.jsx)(en,{styles:O===p&&K.getStrikethroughStyles()}),Object(r.jsx)(P,{isOpen:L,winner:A,close:function(){return U(!1)},startNewGame:function(){g(f),S(F),U(!1)}})]})};e(42);function cn(){var n=Object(o.a)(["\n  padding: 16px 0;\n"]);return cn=function(){return n},n}function an(){var n=Object(o.a)(["\n  display: flex;\n  justify-content: center;\n  width: 100%;\n  flex: 0 0 auto;\n"]);return an=function(){return n},n}function on(){var n=Object(o.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  flex: 1 0 auto;\n"]);return on=function(){return n},n}var un=u.b.main(on()),sn=u.b.footer(an()),ln=u.b.div(cn()),fn=function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)(un,{children:["Nama : M. RIZKY MAULANA",Object(r.jsx)("b",{}),"NIM : 1119101746",Object(r.jsx)(rn,{})]}),Object(r.jsx)(sn,{children:Object(r.jsx)(ln,{})})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));w.a.setAppElement("#root"),a.a.render(Object(r.jsx)(fn,{}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()}))}},[[43,1,2]]]);
//# sourceMappingURL=main.3423da4b.chunk.js.map
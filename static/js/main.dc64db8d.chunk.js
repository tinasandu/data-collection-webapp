(this["webpackJsonpdata-col-test"]=this["webpackJsonpdata-col-test"]||[]).push([[0],{141:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(30),o=a.n(r),s=(a(96),a(10)),c=(a(97),a(176)),i=a(36),u=a(11),m=function(e){var t=e.children,a=e.to;return e.condition&&a?l.a.createElement(i.b,{to:a},t):l.a.createElement(l.a.Fragment,null,t)};var h=function(){var e=Object(n.useState)(""),t=Object(s.a)(e,2),a=t[0],r=t[1];return l.a.createElement("div",{className:"App"},l.a.createElement("header",{className:"App-header"},l.a.createElement("p",null,"Hi! Thanks for taking the time! Please add your name and the password :)"),l.a.createElement(c.a,{name:"password",color:"warning",id:"outlined-basic",padding:"5px",label:"Please add the password",variant:"outlined",value:a,onChange:function(e){r(e.target.value),console.log(a)}}),l.a.createElement("nav",null,l.a.createElement(m,{to:"/example",condition:"hello"===a},"Let's Go!"))))},p=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,180)).then((function(t){var a=t.getCLS,n=t.getFID,l=t.getFCP,r=t.getLCP,o=t.getTTFB;a(e),n(e),l(e),r(e),o(e)}))},d=a(43),g=a(44),v=a(79),E=a(78),b=a(75),f=a.n(b),y=a(179),C=a(177),x=a(76),w=a.n(x),S=function(e){Object(v.a)(a,e);var t=Object(E.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).handleTextChange=function(e){n.setState({observerName:e.target.value})},n.handleSubmit=function(e){e.preventDefault();var t={user:n.state.observerName,snaps:n.snapshots};console.log(t),w.a.post("https://ayj8v6xmp0.execute-api.us-east-1.amazonaws.com/prod/form",{user_snapshots:t},{headers:{"content-type":"application/json"}}).then((function(e){console.log(e),console.log(e.data)}))},n.ref=function(e){n.player=e},n.state={observerName:"test_integration",inputValue:50,time:0},n.snapshots=[],n}return Object(g.a)(a,[{key:"handleSliderChange",value:function(e){this.setState({inputValue:e,time:this.player.getCurrentTime()}),console.log("changed to "+this.state.inputValue);var t=this.player.getCurrentTime();console.log("played "+t),console.log(this.state.observerName);var a=this.state;this.snapshots.push(a),console.log("Snapshot "+this.snapshots)}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"ExamplePage"},l.a.createElement("header",{className:"ExamplePage-header"},l.a.createElement("p",null,"Example Page"),l.a.createElement(c.a,{color:"primary",id:"outlined-basic",padding:"5px",label:"Please add your name",variant:"outlined",onChange:this.handleTextChange}),l.a.createElement("div",null,l.a.createElement(f.a,{ref:this.ref,className:"react-player",url:"https://www.youtube.com/watch?v=LNHBMFCzznE"}),l.a.createElement(y.a,{sx:{width:300}},l.a.createElement(C.a,{defaultValue:50,"aria-label":"Default",valueLabelDisplay:"on",onChange:function(t){return e.handleSliderChange(t.target.value)},step:10,marks:!0,min:10,max:100})),l.a.createElement("button",{type:"submit",onClick:this.handleSubmit},"Submit"))))}}]),a}(l.a.Component);o.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(i.a,{basename:"/data-col-test"},l.a.createElement(u.c,null,l.a.createElement(u.a,{path:"/",element:l.a.createElement(h,null)}),l.a.createElement(u.a,{path:"example",element:l.a.createElement(S,null)})))),document.getElementById("root")),p()},91:function(e,t,a){e.exports=a(141)},96:function(e,t,a){},97:function(e,t,a){}},[[91,1,2]]]);
//# sourceMappingURL=main.dc64db8d.chunk.js.map
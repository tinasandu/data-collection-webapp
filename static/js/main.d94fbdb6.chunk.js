(this["webpackJsonpdata-collection-webapp"]=this["webpackJsonpdata-collection-webapp"]||[]).push([[0],{103:function(e,t,a){},104:function(e,t,a){},123:function(e,t,a){},128:function(e,t,a){},150:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),i=a(33),o=a.n(i),r=(a(103),a(5)),c=a(35),l=a(36),d=a(48),h=a(54),j=(a(104),a(195)),b=a(190),u=a(10),p=a(21),v=a(51),O=a.n(v),m=(a(123),a(180)),g=a(194),x=a(191),f=a(2);var y=function(e){var t=e.children,a=e.to,s=e.passState,i=Object(n.useState)(0),o=Object(u.a)(i,2),r=o[0],c=o[1],l=Object(n.useState)(!0),d=Object(u.a)(l,2),h=d[0],j=d[1];if(a){if(void 0===r||0===r){var b=s.password;console.log(h),O.a.get("https://ayj8v6xmp0.execute-api.us-east-1.amazonaws.com/prod/form",{headers:{"content-type":"application/json",pass:b}}).then((function(e){c(e.data.links),200===e.data.statusCode&&j(!1)}))}return h?Object(f.jsx)("div",{className:"style",children:Object(f.jsxs)(m.a,{spacing:2,direction:"row",alignContent:"center",children:[Object(f.jsx)(g.a,{}),Object(f.jsx)(x.a,{label:"Retrieving the videos",variant:"text",children:"Retrieving Videos"})]})}):Object(f.jsx)("div",{className:"style",children:Object(f.jsx)(p.b,{to:a,style:{"font-size":25},state:{observerName:s.observerName,information:s.information,links:r},children:t})})}},w=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).handleNameChange=function(e){n.setState({observerName:e.target.value})},n.handlePasswordChange=function(e){n.setState({password:e.target.value})},n.handleDegreeChange=function(e){n.setState({information:e.target.value})},n.state={observerName:"",password:"",information:"",links:{}},n}return Object(l.a)(a,[{key:"render",value:function(){return document.title="Teaching Videos",Object(f.jsxs)("div",{className:"App-header",children:[Object(f.jsxs)("p",{className:"App-instructions",children:["Hi! Thanks for taking the time!",Object(f.jsx)("br",{}),"Please add your name, background and the passcode. This information will not be stored, but will be used in creating a weighted average of the scores. (For example, the computing lecture snippet, participants with a computing background will have a higher weight.)",Object(f.jsx)("br",{}),"We are trying to understand the perception on the para-verbal communication, rather than content delivered, and this will ensure the impact of background difference is minimised. For best results, please continue on a desktop, not a phone."]}),Object(f.jsxs)(j.a,{sx:{"& .MuiTextField-root":{m:1,width:"20ch"}},children:[Object(f.jsx)(b.a,{color:"primary",id:"name",padding:"5px",label:"Please add your name",variant:"outlined",onChange:this.handleNameChange}),Object(f.jsx)("div",{children:Object(f.jsx)(b.a,{name:"degree",id:"degree",label:"Please add your degree or background",variant:"outlined",onChange:this.handleDegreeChange})}),Object(f.jsx)(b.a,{name:"password",id:"password",label:"Please add the password",variant:"outlined",type:"password",onChange:this.handlePasswordChange})]}),Object(f.jsx)("br",{}),Object(f.jsx)("nav",{children:Object(f.jsx)(y,Object(r.a)({to:"/tutorial",passState:this.state,links:this.state.links,children:"Let's Go!"},"children","Let's Go!"))}),Object(f.jsx)("p",{style:{fontSize:20},children:"Please allow a second after you put the passcode for the links to load."})]})}}]),a}(s.a.Component),k=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,197)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,i=t.getLCP,o=t.getTTFB;a(e),n(e),s(e),i(e),o(e)}))},S=a(14),C=(a(128),a(89)),N=a.n(C),P=a(192),T=a(45),F=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).handleSubmit=function(e){e.preventDefault();var t={user:n.observerName,information:n.information,video:n.state.video,feature:n.feature,finalScore:n.state.finalScore,snaps:n.snapshots};console.log(t),O.a.post("https://ayj8v6xmp0.execute-api.us-east-1.amazonaws.com/prod/form",{user_snapshots:t},{headers:{"content-type":"application/json"}}).then((function(e){200===e.data.statusCode&&(alert("Success! Thank you! Collected your scores. Please navigate to the next video, by clicking on the next video down the page"),n.snapshots=[])}))},n.ref=function(e){n.player=e},n.observerName=e.observerName,n.information=e.information,n.links=e.links,n.state={video:e.video,finalScore:5,inputValue:50,time:0},n.displayLink=n.links[Object(T.format)("video{0}",n.state.video)],n.feature=n.links[Object(T.format)("feature{0}",n.state.video)],n.endTime=n.links[Object(T.format)("endTime{0}",n.state.video)],n.startTime=n.links[Object(T.format)("startTime{0}",n.state.video)],n.snapshots=[],n}return Object(l.a)(a,[{key:"handlePrepSeq",value:function(e){e.seekTo(this.startTime,"seconds"),this.player.getInternalPlayer().playVideo()}},{key:"handleSliderChange",value:function(e){if(0!==this.player.getCurrentTime()){this.setState({inputValue:e,time:this.player.getCurrentTime().toFixed(2)}),this.player.getCurrentTime()>this.endTime&&this.player.getInternalPlayer().pauseVideo();var t=this.state;this.snapshots.push(t),console.log("Snapshot "+this.snapshots)}else console.log("not playing")}},{key:"changePage",value:function(e){this.setState({video:e}),console.log("changed"+this.state.video)}},{key:"changeFinalScore",value:function(e){this.setState({finalScore:e}),console.log("final Score: ",this.state.finalScore)}},{key:"displayFinalScore",value:function(){return this.player?(console.log(this.player.getCurrentTime()),this.player.getCurrentTime()>2?"required":"disabled"):"disabled"}},{key:"render",value:function(){var e=this;return Object(f.jsxs)("div",{className:"ExamplePage-body",children:[Object(f.jsxs)("p",{className:"ExamplePage-instructions",children:["I would like you to assess continously, and to move the slider as the video plays. You can use the keyboard to move the slider when you click on it once.",Object(f.jsx)("br",{}),"You will be asked to rate one feature or the overall performance. If you are asked to rate a feature, I mean the following:",Object(f.jsx)("br",{}),Object(f.jsx)("br",{}),Object(f.jsx)("b",{children:"POSE"})," - you can assess the body posture, use of gestures and/or movements around the room: how engaging is it to you?",Object(f.jsx)("br",{}),Object(f.jsx)("b",{children:"FACIAL EXPRESSION "}),"-  you can assess the facial expressivity  (do they smile, are they animated?): how engaging is it to you?",Object(f.jsx)("br",{}),Object(f.jsx)("b",{children:"VOICE"})," - you can assess the rhythm, vocal tone (happy, enthusiastic or bored), and/or how animated the voice is, but not the content: how engaging is it to you?"]}),"Please rate CONTINUOUSLY, using the slider, how engaging you find the video, looking at the:",Object(f.jsx)("p",{className:"Feature",children:this.feature.toUpperCase()}),Object(f.jsxs)("div",{className:"contents",children:[Object(f.jsx)("div",{className:"player-wrapper",children:Object(f.jsx)(N.a,{width:"100%",height:"100%",ref:this.ref,className:"react-player",url:this.displayLink,onStart:function(t){return e.handlePrepSeq(e.player)}})}),Object(f.jsx)("br",{}),Object(f.jsx)("br",{}),Object(f.jsx)(P.a,{defaultValue:0,"aria-label":"Default",valueLabelDisplay:"on",onChange:function(t){return e.handleSliderChange(t.target.value)},step:1,marks:[{value:-5,label:"-5, not engaging at all"},{value:5,label:"5, very engaging"}],min:-5,max:5}),Object(f.jsxs)("p",{style:{fontSize:18},children:["Please add a score between -5 and 5, for how engaging the overall video was.",Object(f.jsx)("br",{}),"Only one score is necessary, AFTER watching the video."]}),Object(f.jsx)(b.a,{type:"number",id:"score",label:"Please add overall score",variant:"outlined",onChange:function(t){return e.changeFinalScore(t.target.value)}}),Object(f.jsx)("br",{}),Object(f.jsx)("br",{}),Object(f.jsx)("p",{style:{fontSize:18},children:"Please submit when you finish rating each video."}),Object(f.jsx)(x.a,{color:"success",type:"submit",variant:"contained",onClick:this.handleSubmit,children:"Submit"})]})]})}}]),a}(s.a.Component),I=(a(82),a(196));var V=function(e){var t=e.video,a=e.state,n=function(e){return t===e?"outlined":"text"};return Object(f.jsx)("div",{children:Object(f.jsxs)(I.a,{row:!0,children:[Object(f.jsx)(x.a,{variant:n(0),children:Object(f.jsx)(p.b,{to:"/tutorial",state:a,children:"Tutorial"})}),Object(f.jsx)(x.a,{variant:n(1),children:Object(f.jsx)(p.b,{to:"/video1",state:a,children:"Video 1"})}),Object(f.jsx)(x.a,{variant:n(2),children:Object(f.jsx)(p.b,{to:"/video2",state:a,children:"Video 2"})}),Object(f.jsx)(x.a,{variant:n(3),children:Object(f.jsx)(p.b,{to:"/video3",state:a,children:"Video 3"})}),Object(f.jsx)(x.a,{variant:n(4),children:Object(f.jsx)(p.b,{to:"/video4",state:a,children:"Video 4"})}),Object(f.jsx)(x.a,{variant:n(5),children:Object(f.jsx)(p.b,{to:"/video5",state:a,children:"Video 5"})}),Object(f.jsx)(x.a,{variant:n(6),children:Object(f.jsx)(p.b,{to:"/video6",state:a,children:"Video 6"})})]})})};var E=function(){var e=Object(S.e)(),t=e.state,a=t.observerName,n=t.links,s=t.information;return console.log("page: 0"),console.log(e.state),Object(f.jsxs)("div",{className:"SendPage-body",children:[Object(f.jsxs)("p",{className:"SendPage-instructions",children:["This is the tutorial page, for you to test the interface. There are 6 videos I would like you to watch. Each video plays for around 5 minutes, so in total this survey should take 25-30 minutes. When you start the video, it will jump to the important section, that I would like you to rate.",Object(f.jsx)("br",{}),"It will pause at the end of the selected sequence. Please watch and assess until it automatically stops.",Object(f.jsx)("br",{}),Object(f.jsx)("br",{}),"Please provide a ",Object(f.jsx)("b",{children:"continuous asssement"})," WHILST watching the video using the slider and add a ",Object(f.jsx)("b",{children:"final, overall score"})," AFTER you finished watching the sequence.",Object(f.jsx)("br",{}),Object(f.jsx)("br",{}),"Please click submit, at the bottom of the page, after you finish watching EACH video."]}),Object(f.jsx)(F,{observerName:a,information:s,links:n,video:0}),Object(f.jsx)("br",{}),Object(f.jsx)(V,{state:e.state,video:0})]})};var L=function(e){var t=e.page,a=Object(S.e)(),n=a.state,s=n.observerName,i=n.links,o=n.information,r=t;return console.log("page: "+r),Object(f.jsxs)("div",{className:"SendPage-body",children:[Object(f.jsx)(F,{observerName:s,information:o,links:i,video:r}),Object(f.jsx)("div",{}),Object(f.jsx)(V,{state:a.state,video:r})]})};var A=function(){return Object(f.jsx)(L,{page:1})};var z=function(){return Object(f.jsx)(L,{page:2})};var D=function(){return Object(f.jsx)(L,{page:3})};var q=function(){return Object(f.jsx)(L,{page:4})};var R=function(){return Object(f.jsx)(L,{page:5})};var H=function(){return Object(f.jsx)(L,{page:6})};o.a.render(Object(f.jsx)(s.a.StrictMode,{children:Object(f.jsx)(p.a,{basename:"/data-collection-webapp",children:Object(f.jsxs)(S.c,{children:[Object(f.jsx)(S.a,{path:"/",element:Object(f.jsx)(w,{})}),Object(f.jsx)(S.a,{path:"example",element:Object(f.jsx)(F,{})}),Object(f.jsx)(S.a,{path:"tutorial",element:Object(f.jsx)(E,{})}),Object(f.jsx)(S.a,{path:"video1",element:Object(f.jsx)(A,{})}),Object(f.jsx)(S.a,{path:"video2",element:Object(f.jsx)(z,{})}),Object(f.jsx)(S.a,{path:"video3",element:Object(f.jsx)(D,{})}),Object(f.jsx)(S.a,{path:"video4",element:Object(f.jsx)(q,{})}),Object(f.jsx)(S.a,{path:"video5",element:Object(f.jsx)(R,{})}),Object(f.jsx)(S.a,{path:"video6",element:Object(f.jsx)(H,{})})]})})}),document.getElementById("root")),k()},82:function(e,t,a){}},[[150,1,2]]]);
//# sourceMappingURL=main.d94fbdb6.chunk.js.map
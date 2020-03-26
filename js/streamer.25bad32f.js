(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["streamer"],{"0d1b":function(t,e,n){},1759:function(t,e,n){},2532:function(t,e,n){"use strict";var i=n("23e7"),o=n("5a34"),s=n("1d80"),a=n("ab13");i({target:"String",proto:!0,forced:!a("includes")},{includes:function(t){return!!~String(s(this)).indexOf(o(t),arguments.length>1?arguments[1]:void 0)}})},"3a3e":function(t,e,n){"use strict";var i=n("1759"),o=n.n(i);o.a},"5a34":function(t,e,n){var i=n("44e7");t.exports=function(t){if(i(t))throw TypeError("The method doesn't accept regular expressions");return t}},"6a01":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"frow centered"},[n("DesktopCapturer",{ref:"capturer",attrs:{enableVideo:t.isVideo,enableMic:t.enableMic},on:{isSharing:t.onIsSharing,gotStream:t.onGotStream,setDefaults:t.onSetDefaults}}),n("StreamerConnection",{ref:"connection",attrs:{bandwidth:t.bandwidth,codecs:t.codecs,roomId:t.room_id,roomPassword:t.room_password,privacy:t.privacy,isVideo:t.isVideo},on:{sessionId:t.onSessionId,viewerCount:t.onViewerCount,idTaken:t.onIdTaken}}),n("div",{staticClass:"col-md-1-2"},[n("router-link",{attrs:{to:"/"}},[n("LogoSvg",{attrs:{id:"logo"}})],1),n("div",{class:{live:t.isSharingOn&&t.sessionId},attrs:{id:"live-indicator"}},[t._v("LIVE")])],1),n("div",{staticClass:"col-md-1-2"},[t.useridAlreadyTaken?n("div",{attrs:{id:"id-taken"}},[t._v("⚠️ Whoops,"),n("b",[t._v(" "+t._s(t.useridAlreadyTaken)+" ")]),t._v("already taken! Please choose another room name.")]):t._e(),t.isSharingOn&&t.sessionId?t._e():n("section",{attrs:{id:"setup-section"}},[n("label",{staticClass:"row-start",attrs:{id:"room-id-label"}},[n("span",{staticClass:"shrink-0"},[t._v("2n.fm/")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.room_id,expression:"room_id"}],attrs:{id:"room-id",type:"text",placeholder:"Random"},domProps:{value:t.room_id},on:{change:t.setRoomName,blur:t.setRoomName,input:function(e){e.target.composing||(t.room_id=e.target.value)}}})]),n("section",{attrs:{id:"options"}},[n("div",{staticClass:"label"},[t._v("Options")]),n("div",{staticClass:"frow gutters"},[n("div",{staticClass:"col-xs-1-2"},[n("label",{staticClass:"row-start"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.privacy,expression:"privacy"}],attrs:{type:"radio",value:"private"},domProps:{checked:t._q(t.privacy,"private")},on:{change:function(e){t.privacy="private"}}}),t._v("Private Room")]),n("label",{staticClass:"row-start mb-0"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.privacy,expression:"privacy"}],attrs:{type:"radio",value:"public"},domProps:{checked:t._q(t.privacy,"public")},on:{change:function(e){t.privacy="public"}}}),t._v("Public Room")])]),n("div",{staticClass:"col-xs-1-2"},[n("label",{staticClass:"row-start"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.enableMic,expression:"enableMic"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.enableMic)?t._i(t.enableMic,null)>-1:t.enableMic},on:{change:function(e){var n=t.enableMic,i=e.target,o=!!i.checked;if(Array.isArray(n)){var s=null,a=t._i(n,s);i.checked?a<0&&(t.enableMic=n.concat([s])):a>-1&&(t.enableMic=n.slice(0,a).concat(n.slice(a+1)))}else t.enableMic=o}}}),t._v("Enable Microphone (Beta)")]),n("label",{staticClass:"row-start"},[t._v("Codec"),n("select",{directives:[{name:"model",rawName:"v-model",value:t.codecs,expression:"codecs"}],staticClass:"ml-5",on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.codecs=e.target.multiple?n:n[0]}}},[n("option",{attrs:{value:"vp9"}},[t._v("VP9 (Screensharing)")]),n("option",{attrs:{value:"vp8"}},[t._v("VP8 (Gaming)")])])])])])]),n("section",{attrs:{id:"stream-section"}},[n("div",{attrs:{id:"start"}},[n("div",{staticClass:"label"},[t._v("Start")]),n("div",{staticClass:"frow gutters"},[n("div",{staticClass:"col-xs-1-2"},[n("div",{staticClass:"stream-button",attrs:{id:"video-button"},on:{click:function(e){return t.startStream(!0)}}},[n("div",{staticClass:"frow column-center"},[n("VideoSvg"),t._v("Video")],1)])]),n("div",{staticClass:"col-xs-1-2"},[n("div",{staticClass:"stream-button",attrs:{id:"audio-button"},on:{click:function(e){return t.startStream()}}},[n("div",{staticClass:"frow column-center"},[n("AudioSvg"),t._v("Audio Only")],1)])])])])])]),t.isSharingOn&&t.sessionId?n("StopSection",{attrs:{sessionId:t.sessionId,viewerCount:t.viewerCount,stream:t.stream},on:{stopStream:t.stopStream}}):t._e()],1)],1)},o=[],s=(n("caad"),n("ac1f"),n("5319"),n("498a"),n("8923")),a={functional:!0,render(t,e){const{_c:n,_v:i,data:o,children:s=[]}=e,{class:a,staticClass:r,style:c,staticStyle:d,attrs:l={},...u}=o;return n("svg",{class:[a,r],style:[c,d],attrs:Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},l),...u},s.concat([n("g",{attrs:{fill:"none","fill-rule":"evenodd"}},[n("path",{attrs:{d:"M1 18v3h3c0-1.7-1.3-3-3-3zm0-4v2c2.8 0 5 2.2 5 5h2c0-3.9-3.1-7-7-7zm0-4v2c5 0 9 4 9 9h2c0-6.1-4.9-11-11-11zm20-7H3c-1.1 0-2 .9-2 2v3h2V5h18v14h-7v2h7c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}})])]))}},r={functional:!0,render(t,e){const{_c:n,_v:i,data:o,children:s=[]}=e,{class:a,staticClass:r,style:c,staticStyle:d,attrs:l={},...u}=o;return n("svg",{class:[a,r],style:[c,d],attrs:Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},l),...u},s.concat([n("path",{attrs:{d:"M2 6h3.828c-1.335 2.905-1.335 9.096 0 12H2c-1.311-1.108-2-3.551-2-5.995C0 9.555.692 7.105 2 6zm22 6.005c.005 8.031-3.145 12.864-6.121 11.864-.774-.26-9.567-5.579-9.567-5.579-1.993-2.22-1.993-10.288 0-12.508 0 0 9.161-5.476 9.548-5.633 2.691-1.086 6.136 3.82 6.14 11.856zm-3.383-7.693c-1.053-2.264-3.002-2.226-4.034.002-.588 1.271-.993 3.165-1.21 4.797h.527c1.587 0 2.873 1.287 2.873 2.875s-1.286 2.875-2.873 2.875h-.515c.217 1.603.616 3.538 1.206 4.89.988 2.271 3.062 2.232 4.033-.002 1.946-4.477 1.772-11.609-.007-15.437z"}})]))}},c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{attrs:{id:"stop-section"}},[n("router-link",{attrs:{id:"public-link",to:t.sessionId,target:"_blank"}},[t._v(t._s("2n.fm/"+t.sessionId))]),n("div",{attrs:{id:"copy-button"},on:{click:function(e){return t.copyUrl()}}},[n("CopySvg")],1),t.copyNotification?n("div",{staticClass:"animate-fade-in",attrs:{id:"copy-notification"}},[t._v("Copied")]):t._e(),n("div",{staticClass:"viewer-count"},[n("span",{attrs:{id:"viewer-count-number"}}),t._v(t._s(t.viewerCount)+" "+t._s(1===t.viewerCount?"Viewer":"Viewers"))]),t.showPreview?n("Player",{staticClass:"mb-20",attrs:{stream:t.stream,receiverViewerCount:t.viewerCount,disableAutoplay:!0}}):t._e(),n("div",{staticClass:"frow row-between"},[n("button",{staticClass:"streamer-control-buttons",attrs:{type:"button"},on:{click:t.stopStream}},[t._v("End Sharing")]),n("button",{staticClass:"streamer-control-buttons",attrs:{type:"button"},on:{click:function(e){t.showPreview=!t.showPreview}}},[t._v(t._s(t.showPreview?"Hide Preview":"Show Preview"))])]),t._m(0)],1)},d=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"frow width-100 mt-20"},[n("a",{staticClass:"text-underline",attrs:{href:"https://caniuse.com/#search=getDisplayMedia",rel:"noreferrer",target:"_blank"}},[t._v("OS and Browser Limitations")])])}],l=(n("a9e3"),{functional:!0,render(t,e){const{_c:n,_v:i,data:o,children:s=[]}=e,{class:a,staticClass:r,style:c,staticStyle:d,attrs:l={},...u}=o;return n("svg",{class:[a,r],style:[c,d],attrs:Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},l),...u},s.concat([n("path",{attrs:{d:"M18 6V0H0v18h6v6h18V6h-6zM6 16H2V2h14v4H6v10zm16 6H8V8h14v14z"}})]))}}),u=n("8137"),h={name:"StopSection",components:{CopySvg:l,Player:u["a"]},props:{stream:{type:MediaStream,default:null},sessionId:{type:String,default:null},viewerCount:{type:Number,default:0}},data:function(){return{copyNotification:!1,showPreview:!1}},watch:{},methods:{copyUrl:function(){var t=this,e=document.getElementById("public-link"),n=document.createElement("input");n.setAttribute("value","https://".concat(e.innerText)),document.body.appendChild(n),n.select();var i=document.execCommand("copy"),o=document.getElementById("copy-notification");i?(document.body.removeChild(n),this.copyNotification=!0,setTimeout((function(){t.copyNotification=!1}),5e3)):o.innerText="Copy failed"},stopStream:function(){this.$emit("stopStream")}}},m=h,v=(n("c8be"),n("2877")),p=Object(v["a"])(m,c,d,!1,null,"474b491c",null),f=p.exports,g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div")},w=[],b=(n("4160"),n("159b"),n("96cf"),n("1da1")),S={name:"DesktopCapturer",props:{enableVideo:Boolean,enableMic:Boolean},data:function(){return{isSharing:!1,enableAudio:!1}},watch:{isSharing:function(t){this.$emit("isSharing",t)}},methods:{setDefaults:function(){this.$emit("setDefaults"),this.isSharing=!1},startStream:function(){this.setDefaults(),this.isSharing=!0,this.enableAudio=!0,this.captureDesktop()},stopStream:function(){this.isSharing=!1,this.setDefaults()},captureDesktop:function(){this.onAccessApproved()},onAccessApproved:function(){var t=this,e={video:{},audio:{autoGainControl:!1,echoCancellation:!1,noiseSuppression:!1,googDisableLocalEcho:!1}},n=function(){var t=Object(b["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,navigator.mediaDevices.getUserMedia({audio:!0,video:!1});case 3:e=t.sent,t.next=10;break;case 6:t.prev=6,t.t0=t["catch"](0),console.error("Error getting microphone",t.t0),alert("Your browser denied microphone access");case 10:return t.abrupt("return",e);case 11:case"end":return t.stop()}}),t,null,[[0,6]])})));return function(){return t.apply(this,arguments)}}(),i=function(){var n=Object(b["a"])(regeneratorRuntime.mark((function n(){var i;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,navigator.mediaDevices.getDisplayMedia(e);case 3:i=n.sent,n.next=9;break;case 6:n.prev=6,n.t0=n["catch"](0),t.setDefaults();case 9:return n.abrupt("return",i);case 10:case"end":return n.stop()}}),n,null,[[0,6]])})));return function(){return n.apply(this,arguments)}}(),o=function(){var e=Object(b["a"])(regeneratorRuntime.mark((function e(){var o,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(o=null,!0!==t.enableMic){e.next=5;break}return e.next=4,n();case 4:o=e.sent;case 5:return e.next=7,i();case 7:s=e.sent,t.enableVideo||0!==s.getAudioTracks().length||alert('Make sure to check the "Share audio" box in Google Chrome'),s.getAudioTracks().length>0&&(s.systemAudioId=s.getAudioTracks()[0].id),o&&(s.addTrack(o.getAudioTracks()[0]),s.micId=o.getAudioTracks()[0].id),t.gotStream(s);case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();o()},gotStream:function(t){var e=this;t?(t.addEventListener("inactive",(function(){e.setDefaults()})),this.addStreamStopListener(t,(function(){e.setDefaults()})),this.$emit("gotStream",t)):this.setDefaults()},addStreamStopListener:function(t,e){var n="ended";"oninactive"in t&&(n="inactive"),t.addEventListener(n,(function(){e(),e=function(){}}),!1),t.getAudioTracks().forEach((function(t){t.addEventListener(n,(function(){e(),e=function(){}}),!1)})),t.getVideoTracks().forEach((function(t){t.addEventListener(n,(function(){e(),e=function(){}}),!1)}))}}},y=S,C=Object(v["a"])(y,g,w,!1,null,null,null),_=C.exports,k=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div")},I=[],x=(n("2532"),n("3da5")),V=n("e854"),A={name:"StreamerConnection",props:{bandwidth:{type:Number,default:8192},codecs:{type:String,default:"default"},roomPassword:{type:String,default:""},roomId:{type:String,default:""},privacy:{type:String,default:"private"},isVideo:{type:Boolean,default:!1}},data:function(){return{connection:null}},mounted:function(){window.addEventListener("offline",this.setOffline,!1),window.addEventListener("online",this.setOnline,!1)},beforeDestroy:function(){window.removeEventListener("offline",this.setOffline,!1),window.removeEventListener("online",this.setOnline,!1),this.connection=null,delete this.connection},methods:{shareStreamUsingRTCMultiConnection:function(t){var e=this;this.connection=new RTCMultiConnection,this.connection.socketURL="https://api.2n.fm:9001/",this.connection.autoCloseEntireSession=!0,"public"===this.privacy&&(this.connection.publicRoomIdentifier="desktopCapture"),this.connection.socketMessageEvent="desktopCapture",this.connection.password=null,this.roomPassword&&this.roomPassword.length&&(this.connection.password=this.roomPassword),this.connection.enableLogs=!1,this.connection.session={audio:!0,video:!0,data:!0,oneway:!0},this.connection.candidates={stun:!0,turn:!0},this.connection.iceTransportPolicy="relay",this.connection.iceProtocols={tcp:!0,udp:!0},this.connection.optionalArgument={optional:[],mandatory:{}},this.connection.channel=this.connection.sessionid=this.connection.userid,this.roomId&&this.roomId.length&&(this.connection.channel=this.connection.sessionid=this.connection.userid=this.roomId),this.connection.autoReDialOnFailure=!0,this.connection.getExternalIceServers=!1,this.connection.iceServers=V["a"].getIceServers(),this.connection.processSdp=function(t){return e.bandwidth&&e.bandwidth&&!isNaN(e.bandwidth)&&"NaN"!=e.bandwidth&&"number"==typeof e.bandwidth&&(t=E(t,e.bandwidth),t=x["a"].setVideoBitrates(t,{min:e.bandwidth,max:e.bandwidth})),e.codecs&&"default"!==e.codecs&&(t=e.isVideo?x["a"].preferCodec(t,e.codecs):x["a"].preferCodec(t,"vp8")),t},this.connection.sdpConstraints.mandatory={OfferToReceiveAudio:!1,OfferToReceiveVideo:!1},this.connection.onstream=this.connection.onstreamended=function(t){try{t.mediaElement.pause(),delete t.mediaElement}catch(e){console.error(e)}},this.connection.onUserIdAlreadyTaken=function(t){e.$emit("idTaken",t)},this.connection.dontCaptureUserMedia=!0,this.connection.attachStreams.push(t),!this.isVideo&&this.connection.attachStreams[0].getVideoTracks().length>0&&this.connection.attachStreams[0].removeTrack(this.connection.attachStreams[0].getVideoTracks()[0]),t.systemAudioId&&(this.connection.extra.systemAudioId=t.systemAudioId),t.micId&&(this.connection.extra.micId=t.micId);var n="-",i=setInterval((function(){return e.connection?e.connection.isInitiator?(e.setViewerCount(0),void clearInterval(i)):(n+=" -",n.length>6&&(n="-"),void e.setViewerCount(n)):(e.setViewerCount(0),void clearInterval(i))}),500);this.connection.socketCustomEvent=this.connection.sessionid;var o=function(t,n,i){i&&alert(i),e.$emit("sessionId",e.connection.sessionid),e.setViewerCount(0),e.connection.socket.on(e.connection.socketCustomEvent,(function(t){t.receivedYourScreen&&e.setViewerCount(e.connection.isInitiator?e.connection.getAllParticipants().length:0)}))};this.connection.onSocketDisconnect=function(){e.connection.getAllParticipants().length>0||e.setDefaults()},this.connection.onSocketError=function(){alert("Unable to connect to the server. Please try again."),setTimeout((function(){e.setDefaults()}),1e3)},this.connection.onmessage=function(t){t.data.newChatMessage&&e.connection.send({receivedChatMessage:!0,checkmark_id:t.data.checkmark_id})},this.connection.open(this.connection.sessionid,o);this.connection.onleave=function(t){var n=e.connection.getAllParticipants(),i=n.length;n.includes(t.userid)&&i--,e.setViewerCount(i)},this.connection.onPeerStateChanged=function(){var t=e.connection.getAllParticipants().length;e.setViewerCount(e.connection.isInitiator?t:0)}},setViewerCount:function(t){this.$emit("viewerCount",t),this.connection&&(this.connection.extra.receiverViewerCount=t,this.connection.updateExtraData())},setOffline:function(){this.connection&&this.connection.attachStreams.length&&this.setDefaults()},setOnline:function(){this.connection&&this.setDefaults()},setDefaults:function(){if(this.connection){this.connection.attachStreams.forEach((function(t){try{t.getTracks().forEach((function(t){try{t.stop()}catch(e){console.error(e)}}))}catch(e){console.error(e)}}));try{this.connection.closeSocket()}catch(t){console.error(t)}this.connection=null}this.setViewerCount(0)}}};function E(t,e){return t=t.replace(/b=AS([^\r\n]+\r\n)/g,""),t=t.replace(/a=mid:video\r\n/g,"a=mid:video\r\nb=AS:"+e+"\r\n"),t}var T=A,D=Object(v["a"])(T,k,I,!1,null,null,null),M=D.exports,O={name:"Streamer",components:{LogoSvg:s["a"],VideoSvg:a,AudioSvg:r,StopSection:f,DesktopCapturer:_,StreamerConnection:M},data:function(){return{isSharingOn:!1,sessionId:null,stream:null,desktop_id:null,constraints:null,room_password:"",room_id:window.localStorage.getItem("room_id")||"",codecs:"vp8",bandwidth:null,isVideo:!1,streaming_method:"RTCMultiConnection",viewerCount:0,privacy:"private",useridAlreadyTaken:"",enableMic:!1}},mounted:function(){},methods:{startStream:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(this.isVideo=t,this.$refs.connection.connection&&this.$refs.connection.connection.attachStreams[0])this.onSetDefaults();else{this.room_id="",window.localStorage.getItem("room_id")&&(this.room_id=window.localStorage.getItem("room_id"));var e=["streamer"];e.includes(this.room_id)?this.useridAlreadyTaken="streamer":this.$refs.capturer.startStream()}},stopStream:function(){this.$refs.capturer.stopStream(),this.stream=null},setRoomName:function(){this.room_id=this.room_id.trim().replace(/\s+/g,"-").replace(/[^a-zA-Z0-9-_]/g,"").toLowerCase(),window.localStorage.setItem("room_id",this.room_id)},setBandwidth:function(t){try{this.bandwidth=parseInt(t)}catch(e){this.bandwidth=null}},onGotStream:function(t){this.stream=t,this.stream.isVideo=this.isVideo,this.stream.isAudio=!this.isVideo,this.$refs.connection.shareStreamUsingRTCMultiConnection(t,this.isVideo)},onSessionId:function(t){this.useridAlreadyTaken="",this.sessionId=t},onSetDefaults:function(){this.$refs.connection.setDefaults()},onIdTaken:function(t){this.useridAlreadyTaken=t,this.room_id=""},onIsSharing:function(t){this.isSharingOn=t,this.isSharingOn||(this.sessionId=null)},onViewerCount:function(t){this.viewerCount=t}}},P=O,R=(n("3a3e"),Object(v["a"])(P,i,o,!1,null,"6d4473de",null));e["default"]=R.exports},ab13:function(t,e,n){var i=n("b622"),o=i("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(n){try{return e[o]=!1,"/./"[t](e)}catch(i){}}return!1}},c8be:function(t,e,n){"use strict";var i=n("0d1b"),o=n.n(i);o.a},caad:function(t,e,n){"use strict";var i=n("23e7"),o=n("4d64").includes,s=n("44d2"),a=n("ae40"),r=a("indexOf",{ACCESSORS:!0,1:0});i({target:"Array",proto:!0,forced:!r},{includes:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),s("includes")}}]);
//# sourceMappingURL=streamer.25bad32f.js.map
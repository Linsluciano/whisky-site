(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[26255],{787410:(e,i,t)=>{t.d(i,{Z:()=>u});var o=t(667294),n=t(973935),s=t(785893);function l(e,i,t){return i in e?Object.defineProperty(e,i,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[i]=t,e}const r=new Map;let a=null;const d=e=>{e.forEach((e=>{const i=r.get(e.target);i&&i(e)}))},u=e=>{class i extends o.Component{constructor(...e){super(...e),l(this,"seen",!1),l(this,"enter",(e=>{const i=e.intersectionRatio>0||e.isIntersecting;this.seen=i,this.seen&&this.props.onVisibilityChanged(!0)})),l(this,"leave",(()=>{const e=this._node;e&&(e=>r.has(e))(e)&&this.seen&&(this.props.onVisibilityChanged(!1),this.seen=!1)})),l(this,"observe",(e=>{try{this._node=n.findDOMNode(this)}catch(o){return}if(!this._node)return;const{inAdsDesktopVideoExperiment:i}=this.props,t=this._node;((e,i="-64px 0px 0px 0px",t)=>{const o={root:"undefined"==typeof document?null:document.querySelector("#mainContainer"),rootMargin:i,threshold:[0,.5,1]};a=a||new window.IntersectionObserver(d,o),r.set(e,t),a.observe(e)})(t,e,(e=>{if(!r.has(t))return;const o=i?e.intersectionRatio>=.5:e.intersectionRatio>0||e.isIntersecting,n=this.props.trackFullVisible?e.intersectionRatio>=1:o,s=this.props.trackFullVisible?0===e.intersectionRatio:!n;!this.seen&&n?this.enter(e):this.seen&&s&&this.leave()}))}))}componentDidMount(){const{rootMargin:e}=this.props;this.observe(e)}componentWillUnmount(){const e=this._node;e&&(this.leave(),(e=>{a.unobserve(e),r.delete(e)})(e))}render(){return(0,s.jsx)(e,{...this.props})}}return l(i,"displayName",`DeprecatedWithVisibilityChanged(${e.displayName||e.name})`),i}},991773:(e,i,t)=>{t.d(i,{Z:()=>r});var o=t(667294);const n=new Map;let s=null;const l=e=>{e.forEach((e=>{const i=n.get(e.target);i&&i(e)}))};function r({onVisibilityChanged:e,inAdsDesktopVideoExperiment:i,trackFullVisible:t,rootMargin:r}){const a=(0,o.useRef)(null);let d=!1;const u=()=>{var i;a.current instanceof HTMLElement&&(i=a.current,n.has(i))&&(d&&(e(!1),d=!1))},c=(0,o.useCallback)((o=>{a.current instanceof HTMLElement&&((e,i="-64px 0px 0px 0px",t)=>{const o={root:"undefined"==typeof document?null:document.querySelector("#mainContainer"),rootMargin:i,threshold:[0,.5,1]};s=s||new window.IntersectionObserver(l,o),n.set(e,t),s.observe(e)})(a.current,o,(o=>{if(!n.has(a.current))return;const s=i?o.intersectionRatio>=.5:o.intersectionRatio>0||o.isIntersecting,l=t?o.intersectionRatio>=1:s,r=t?0===o.intersectionRatio:!l;!d&&l?(i=>{const t=i.intersectionRatio>0||i.isIntersecting;d=t,d&&e(!0)})(o):d&&r&&u()}))}),[a.current]);return(0,o.useEffect)((()=>(c(r),()=>{var e;a.current instanceof HTMLElement&&(u(),e=a.current,s.unobserve(e),n.delete(e))})),[c]),a}},335106:(e,i,t)=>{t.d(i,{DP:()=>n,X9:()=>s,i8:()=>o});const o=(e,i)=>{const{organicVideosAutoplaying:t,promotedVideosAutoplaying:o}=i,n={...t,...o};return!!n[e]&&!n[e].paused},n=(e,i)=>{const{organicVideosAutoplaying:t,promotedVideosAutoplaying:o}=i,n={...t,...o};for(const s in n){const{paused:i}=n[s];if(s!==e&&!i)return!1}return!0},s=(e,i)=>{const{organicVideosAutoplaying:t,promotedVideosAutoplaying:o}=i,n={...t,...o};return n[e]&&n[e].currentTime}},832654:(e,i,t)=>{t.d(i,{Z:()=>n});var o=t(349700);function n(e,i){const{alt_text:t,auto_alt_text:n}=e;return t?(0,o.nk)(i._('This contains: {{ altText }}', 'web.altText', 'Alt text input by a human'),{altText:t}).join(""):n?(0,o.nk)(i._('This may contain: {{ autoAltText }}', 'web.altText', 'Alt text generated by a computer'),{autoAltText:n}).join(""):null}},891273:(e,i,t)=>{t.d(i,{M:()=>p,Z:()=>g});var o=t(294184),n=t.n(o),s=t(822119),l=t(832654);const r={debugPinImpressions:999,max:9999,pinActionWrapper:101,saved:102,storyPinImage:-1};var a=t(883119),d=t(785893);function u({onError:e,onLoad:i,pin:t}){var o,n,s,l;const{title:u="",dominant_color:c,images:h={}}=t,p="number"==typeof(null===(o=h["474x"])||void 0===o?void 0:o.width)&&"number"==typeof h["474x"].height&&h["474x"].width>h["474x"].height?h["736x"]:h["474x"];return(0,d.jsx)(a.xu,{position:"relative",dangerouslySetInlineStyle:{__style:{paddingTop:"177.77777777777777%"}},children:(0,d.jsx)(a.xu,{position:"absolute",top:!0,left:!0,width:"100%",height:"100%",dangerouslySetInlineStyle:{__style:{zIndex:r.storyPinImage}},children:(0,d.jsx)(a.Ee,{alt:u,color:c,naturalHeight:null!==(n=null==p?void 0:p.height)&&void 0!==n?n:1,naturalWidth:null!==(s=null==p?void 0:p.width)&&void 0!==s?s:1,onError:e,onLoad:i,src:null!==(l=null==p?void 0:p.url)&&void 0!==l?l:"",fit:"cover"})})})}var c=t(898781),h=t(349700);const p=120,g=({cropHeight:e,cropWidth:i,fallbackColor:t,highResOnly:o,imageFit:r,lowResOnly:g,mediumResOnly:x,onError:m,onLoad:_,pin:v,saved:y=!1,animateGif:b})=>{var f,w,P;const A=(0,c.ZP)(),{carousel_data:T,description:C="",dominant_color:j,grid_title:V,id:E,images:W,title:z}=v,I=(0,h.nk)(A._('This contains an image of: {{ pinTitle }}', 'web.altText', 'Alt text input for PinImage by a human'),{pinTitle:z||V}).join(""),M=(0,l.Z)(v,A)||C.trim().length>0&&C||I;if(T)return(0,d.jsx)(s.Z,{onError:m,onLoad:_,highResOnly:o,lowResOnly:g,pinId:E});let L,O="",R=0,S=0;if(W){var B,H,D;let e=W["236x"];var k,$,F,Z,U;if(o?e=W["736x"]||W.orig||W["474x"]||W["236x"]:x&&(e=W["474x"]||W.orig||W["236x"]),R=null===(B=e)||void 0===B?void 0:B.height,S=null===(H=e)||void 0===H?void 0:H.width,O=null===(D=e)||void 0===D?void 0:D.url,g||x||o)L=null!==(k=e)&&void 0!==k&&k.url?`${e.url} 1x`:"";else L=[(null===($=W["236x"])||void 0===$?void 0:$.url)&&`${W["236x"].url} 1x`,(null===(F=W["474x"])||void 0===F?void 0:F.url)&&`${W["474x"].url} 2x`,(null===(Z=W["736x"])||void 0===Z?void 0:Z.url)&&`${W["736x"].url} 3x`,(null===(U=W.orig)||void 0===U?void 0:U.url)&&`${W.orig.url} 4x`].filter(Boolean).join(", ")}if(b){const e=Math.max(v.embed&&v.embed.width||0,236),i=Math.max(v.embed&&v.embed.height||0,236),t=v.embed?v.embed.src:"";t&&(R=i,S=e,O=t,L="")}return(0,d.jsx)(a.kC,{alignItems:"center",justifyContent:"start",minHeight:p,children:(0,d.jsx)(a.xu,{flex:"grow",children:(0,d.jsx)("div",{className:n()({savedGradient:y}),children:v.story_pin_data_id?(0,d.jsx)(u,{pin:v,onError:m,onLoad:_}):(0,d.jsx)(a.xu,{height:i?e:void 0,width:i||void 0,"data-test-id":"non-story-pin-image",children:(0,d.jsx)(a.Ee,{alt:M,color:"dominant"===t?j:t,fit:r,naturalHeight:null!==(f=R)&&void 0!==f?f:1,naturalWidth:null!==(w=S)&&void 0!==w?w:1,onError:m,onLoad:_,src:null!==(P=O)&&void 0!==P?P:"",srcSet:L})})})})})}},326255:(e,i,t)=>{t.d(i,{Z:()=>A});var o=t(667294),n=t(787410),s=t(582998),l=t(494349),r=t(891273),a=t(898781),d=t(883119),u=t(785893);const c={__path:"M12 18.5A6.508 6.508 0 0 1 5.5 12c0-1.706.689-3.307 1.835-4.5H6.5a1 1 0 1 1 0-2h4.185v4.474a1 1 0 0 1-2 0V8.972A4.505 4.505 0 0 0 7.5 12c0 2.481 2.019 4.5 4.5 4.5s4.5-2.019 4.5-4.5a4.49 4.49 0 0 0-3.112-4.283 1 1 0 1 1 .615-1.902A6.482 6.482 0 0 1 18.5 12c0 3.584-2.916 6.5-6.5 6.5M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0"},h={__path:"M17.496 14.572a1 1 0 0 1-1 1h-.001a1.001 1.001 0 0 1-.999-1.001l.002-4.652-7.29 7.288a.995.995 0 0 1-.707.293.999.999 0 0 1-.707-1.707l7.293-7.29L9.428 8.5a1 1 0 0 1 .001-2h.001l8.071.005-.005 8.067zM12 0C5.373 0 0 5.373 0 12c0 6.628 5.373 12 12 12 6.628 0 12-5.372 12-12 0-6.627-5.372-12-12-12z"},p={overlay:{__style:{backgroundColor:"#000"}}};function g({backgroundImage:e,naturalHeight:i,naturalWidth:t,onRestartVideo:o,pinTitle:n,pin:s}){const l=(0,a.ZP)(),{id:r}=s;return(0,u.jsxs)(d.Ee,{alt:n||l._('pin image', 'image of a pin', 'image of a pin'),naturalHeight:i,naturalWidth:t,src:e,children:[(0,u.jsx)(d.xu,{position:"absolute",top:!0,bottom:!0,left:!0,right:!0,opacity:.8,dangerouslySetInlineStyle:p.overlay}),(0,u.jsxs)(d.xu,{justifyContent:"center",direction:"column",display:"flex",position:"absolute",height:"100%",width:"100%","data-test-id":`video-end-card-${r}`,children:[(0,u.jsx)(d.iP,{rounding:2,children:(0,u.jsxs)(d.xu,{display:"flex",justifyContent:"center",padding:2,children:[(0,u.jsx)(d.JO,{accessibilityLabel:l._('Visit site', 'Button when pressed goes to pin\'s website', 'Button when pressed goes to pin\'s website'),color:"white",dangerouslySetSvgPath:h,size:25}),(0,u.jsx)(d.xu,{margin:1}),(0,u.jsx)(d.xv,{color:"inverse",lineClamp:1,weight:"bold",children:l._('Visit site', 'Button when pressed goes to pin\'s website', 'Button when pressed goes to pin\'s website')})]})}),(0,u.jsx)(d.xu,{margin:3}),(0,u.jsx)(d.iP,{onTap:o,rounding:2,children:(0,u.jsxs)(d.xu,{display:"flex",justifyContent:"center",padding:2,children:[(0,u.jsx)(d.JO,{accessibilityLabel:l._('Watch again', 'Button when pressed restarts the video', 'Button when pressed restarts the video'),color:"white",dangerouslySetSvgPath:c,size:25}),(0,u.jsx)(d.xu,{margin:1}),(0,u.jsx)(d.xv,{color:"inverse",lineClamp:1,weight:"bold",children:l._('Watch again', 'Button when pressed restarts the video', 'Button when pressed restarts the video')})]})})]})]})}var x=t(991773),m=t(700622),_=t(623568);const v=new Set(["ConversationView","TodayTabFeed"]);function y({inAdsDesktopVideoExperiment:e,isAutoplay:i,cropHeight:t,currentTime:n,lowResOnly:s,highResOnly:c,onLoad:h,onError:p,saved:y,onTimeChange:b,isExperimentalPinRep:f,pin:w,surface:P,playing:A,rootMargin:T,viewType:C,viewParameter:j,onVisibilityChanged:V,trackFullVisible:E,inVisibilityChangedHookExperiment:W}){var z,I;const M=(0,a.ZP)(),[L,O]=(0,o.useState)(!1),[R,S]=(0,o.useState)(!0),B=(0,_.jL)(w),H=B&&!w.is_eligible_for_web_closeup,D=f&&B&&w.is_eligible_for_web_closeup&&!v.has(P),{setCurrentVideo:k}=(0,l.I)(),$=H||!f||!B,F=(0,x.Z)({onVisibilityChanged:V,inAdsDesktopVideoExperiment:e,trackFullVisible:E,rootMargin:T});let Z=!A;e&&(Z=R,i&&A&&R&&S(!1));const{url:U}=(null===(z=w.images)||void 0===z?void 0:z["236x"])||{},{id:G,is_promoted:N}=w,X=(0,o.useCallback)((({event:e})=>{e.preventDefault(),e.stopPropagation(),k({pinId:G,isPromoted:Boolean(N),currentTime:0}),O(!1)}),[N,G,k]),q=(0,o.useCallback)((()=>{N&&O(D)}),[D,N]);if(!w.videos||null===(I=w.videos.video_list)||void 0===I||!I.V_HLSV4)return null;const{height:K,thumbnail:J,width:Q,url:Y}=w.videos.video_list.V_HLSV4||{},ee=w.videos.id,ie=[{type:"video/m3u8",src:Y}];return L&&B?(0,u.jsx)(d.xu,{ref:W?F:null,children:(0,u.jsx)(g,{backgroundImage:null!=U?U:"",naturalHeight:null!=K?K:1,naturalWidth:null!=Q?Q:1,pin:w,onRestartVideo:X})}):Z?(0,u.jsx)(d.xu,{ref:W?F:null,children:(0,u.jsx)(r.Z,{lowResOnly:s,highResOnly:c,onLoad:h,onError:p,pin:w,saved:y})}):(0,u.jsx)(d.xu,{ref:W?F:null,children:(0,u.jsx)(m.ZP,{isAutoPlay:!!i,cropHeight:t,rootMargin:T,surface:P,inAdsDesktopVideoExperiment:e,contextLogData:{viewParameter:j,component:0,objectId:w.id,video_id:ee,view:C},accessibilityMaximizeLabel:M._('Maximize', 'Maximize button on video', 'Maximize button on video'),accessibilityMinimizeLabel:M._('Minimize', 'Minimize button on video', 'Minimize button on video'),accessibilityMuteLabel:M._('Mute', 'Mute button on video', 'Mute button on video'),accessibilityPauseLabel:M._('Pause', 'Pause button on video', 'Pause button on video'),accessibilityPlayLabel:M._('Play', 'Play button on video', 'Play button on video'),accessibilityProgressBarLabel:M._('Progress bar', 'PinVideo.accessibilityProgressBarLabel', 'Video progress bar accessibility label'),accessibilityUnmuteLabel:M._('Unmute', 'Unmute button on video', 'Unmute button on video'),aspectRatio:(null!=Q?Q:1)/(null!=K?K:1),captions:"",hlsConfig:{capLevelToPlayerSize:!0,startPosition:n||-1},loop:$,onTimeChange:b,playing:A,onPlay:()=>{},onPlayError:()=>{},poster:U||J,src:null!=ie?ie:[],videoStartTime:n,volume:0,onEnded:q})})}var b=t(335106);function f(e,i,t){return i in e?Object.defineProperty(e,i,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[i]=t,e}const w=(0,n.Z)(y);class P extends o.Component{constructor(...e){super(...e),f(this,"calculateCurrentVideoTime",(()=>{const{currentTimeFromPinRep:e,pin:i,videosAutoplaying:t}=this.props,{id:o}=i,n=(0,b.X9)(o,t);return this.currentVideoCurrentTime||n||e})),f(this,"handleVisibilityChanged",(e=>{const{currentTimeFromPinRep:i,pin:t,setCurrentVideo:o,pauseAutoplay:n,videosAutoplaying:s}=this.props,{id:l,is_promoted:r}=t,a=(0,b.i8)(l,s),d=(0,b.DP)(l,s);e?r?o({pinId:l,isPromoted:r,currentTime:this.calculateCurrentVideoTime()}):d&&o({pinId:l,isPromoted:Boolean(r),currentTime:this.calculateCurrentVideoTime()}):!e&&a&&n({pinId:l,isPromoted:Boolean(r),currentTime:i||this.currentVideoCurrentTime})})),f(this,"handleVideoTimeChange",(e=>{const{pin:i,onTimeChange:t,videosAutoplaying:o}=this.props,{id:n}=i;(0,b.i8)(n,o)&&(this.currentVideoCurrentTime=e.time),t&&t(e)}))}componentDidMount(){this.props.onLoad&&this.props.onLoad()}componentDidUpdate(e){const{appInFocus:i}=e,{appInFocus:t,currentTimeFromPinRep:o,pauseAutoplay:n,pin:s,setCurrentVideo:l,videosAutoplaying:r}=this.props,{id:a,is_promoted:d}=s,u=(0,b.i8)(a,r);t!==i&&!t&&u?(this.pausedDueToBrowserOutOfFocus=!0,n({pinId:a,isPromoted:Boolean(d),currentTime:o||this.currentVideoCurrentTime})):this.pausedDueToBrowserOutOfFocus&&t&&(this.pausedDueToBrowserOutOfFocus=!1,l({pinId:a,isPromoted:Boolean(d),currentTime:this.calculateCurrentVideoTime()}))}componentWillUnmount(){const{currentTimeFromPinRep:e,pauseAutoplay:i,pin:t,videosAutoplaying:o}=this.props,{id:n,is_promoted:s}=t;(0,b.i8)(n,o)&&i({pinId:n,isPromoted:Boolean(s),currentTime:e||this.currentVideoCurrentTime})}render(){const{cropHeight:e,isAutoplay:i,pin:t,surface:o,videosAutoplaying:n,viewParameter:l,viewType:r,highResOnly:a,lowResOnly:d,onError:c,onLoad:h,saved:p,inAdsDesktopVideoExperiment:g,isExperimentalPinRep:x,rootMargin:m}=this.props,{id:_}=t,v=(0,b.X9)(_,n),f=(0,b.i8)(_,n)&&i,P=s.K.fromGlobalContext(),{anyEnabled:A}=P.experiments.getWithActivation("web_mqtt_finddomnode_deprecation");return A?(0,u.jsx)(y,{cropHeight:e,rootMargin:m,currentTime:v,inAdsDesktopVideoExperiment:g,isAutoplay:i,viewParameter:l,viewType:r,onTimeChange:this.handleVideoTimeChange,onVisibilityChanged:this.handleVisibilityChanged,pin:t,surface:o,playing:f,trackFullVisible:!1,highResOnly:a,lowResOnly:d,onError:c,onLoad:h,saved:p,isExperimentalPinRep:x,inVisibilityChangedHookExperiment:A}):(0,u.jsx)(w,{cropHeight:e,rootMargin:m,currentTime:v,inAdsDesktopVideoExperiment:g,isAutoplay:i,viewParameter:l,viewType:r,onTimeChange:this.handleVideoTimeChange,onVisibilityChanged:this.handleVisibilityChanged,pin:t,surface:o,playing:f,trackFullVisible:!1,highResOnly:a,lowResOnly:d,onError:c,onLoad:h,saved:p,isExperimentalPinRep:x})}}function A(e){const{appUI:{appInFocus:i,isAutoplay:t,videosAutoplaying:o},pauseAutoplay:n,setCurrentVideo:s}=(0,l.I)();return(0,u.jsx)(P,{...e,appInFocus:i,isAutoplay:t,pauseAutoplay:n,setCurrentVideo:s,videosAutoplaying:o})}},822119:(e,i,t)=>{t.d(i,{Z:()=>m});var o=t(667294),n=t(966338),s=t(564194),l=t(834911),r=t(737022),a=t(891273),d=t(898781),u=t(347785),c=t(883119),h=t(444445),p=t(785893);function g(e,i,t){return i in e?Object.defineProperty(e,i,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[i]=t,e}class x extends o.Component{constructor(...e){super(...e),g(this,"state",{showBadge:!0}),g(this,"renderBadge",(()=>{const{carouselData:e,isCloseup:i,showCarouselBadge:t}=this.props;if(!e)return null;const{showBadge:o}=this.state,{carousel_slots:n,index:s}=e,l=o?.8:0;return!i&&t?(0,p.jsx)(c.xu,{alignItems:"center",color:"darkGray",display:"flex",height:35,justifyContent:"center",marginEnd:5,marginTop:5,position:"absolute",right:!0,rounding:2,width:35,zIndex:new c.Ry(1),dangerouslySetInlineStyle:{__style:{opacity:l,transition:"opacity .3s"}},children:(0,p.jsx)(c.xv,{color:"inverse",children:`${(null!=s?s:0)+1}/${(null!=n?n:[]).length}`})}):null}))}componentDidMount(){this.hideBadgeTimeout=setTimeout((()=>this.setState({showBadge:!1})),3e3)}componentDidUpdate(e){const{showBadge:i}=this.state,{carouselData:t}=e,{carouselData:o}=this.props;if(!t||!o)return;const{index:n}=t,{index:s}=o;i&&(this.hideBadgeTimeout&&clearTimeout(this.hideBadgeTimeout),this.hideBadgeTimeout=setTimeout((()=>this.setState({showBadge:!1})),3e3)),n!==s&&(this.hideBadgeTimeout&&clearTimeout(this.hideBadgeTimeout),this.setState({showBadge:!0}))}componentWillUnmount(){this.hideBadgeTimeout&&clearTimeout(this.hideBadgeTimeout)}render(){const{isCloseup:e,carouselIndex:i,closeupHeight:t,closeupWidth:o=0,widthRatio:n=1,cropHeight:l,cropWidth:d,carouselData:g,disableTransition:x,highResOnly:m,lowResOnly:_,onError:v,onLoad:y,pinId:b,isEditMode:f,isDenseView:w,pin:P}=this.props;if(!g)return null;if(n>1||n<0)throw new Error("widthRatio should be between 0 and 1 inclusive");const{carousel_slots:A=[],index:T=0}=g,C=void 0!==i?i:T,j=!e&&d,{images:V}=A[C];let E;E=e?o:j||(m?474:w?h.Lo:h.xf);const W=Math.floor(E*n),z=(null==V?void 0:V["236x"])||{},I=l||z.height||0,M=d||z.width||236,L=t||I/M*W,O=(e=>{const i=e.reduce(((e,i)=>{var t;const{images:o}=i,{height:n=1,width:s=1}=(null==o?void 0:o["736x"])||(null==o?void 0:o["236x"])||{},l=`${s}x${n}`,r=(null===(t=e[l])||void 0===t?void 0:t.times)||0;return{...e,[l]:{imageHeight:n,imageWidth:s,times:r+1}}}),{}),t=Object.keys(i).reduce(((e,t)=>i[t].times>e.times?i[t]:e),{times:-1,imageHeight:-1,imageWidth:-1});return Object.keys(i).length>1?{imageHeight:t.imageHeight,imageWidth:t.imageWidth}:null})(A);return(0,p.jsxs)(c.xu,{height:L,display:"flex",alignItems:"center",overflow:"hidden","data-test-id":"carousel-pin",minHeight:a.M,"data-test-image-signature":null==P?void 0:P.image_signature,children:[!f&&this.renderBadge(),(0,p.jsx)(s.Z,{trackCarousel:!0,impressionType:"Pin",loggingId:b,slotIndex:T,viewParameter:72,viewType:1,children:(0,p.jsx)(c.xu,{position:"absolute",height:L,width:W,overflow:"hidden"})},`carousel-impression-key-${C}`),(0,p.jsx)(c.xu,{width:W*A.length,dangerouslySetInlineStyle:{__style:{transition:x?"":"left .3s",left:(0,u.vF)(A.length,W,E,C)}},left:!0,height:"100%",display:"flex",direction:"row",position:"relative",children:A.map(((i,t)=>{if(e){const e=t===A.length-1;return(({pinId:e,slot:i,slotIndex:t,onError:o,onLoad:n,widthToUse:s,gap:l},a)=>{const{url:d,width:h,height:g}=(0,r.Z)(i)||{},{details:x=""}=i,m=(0,u.GH)(x,a,t);return(0,p.jsx)(c.xu,{"data-test-id":"carousel-slot-container",width:s,height:"100%",marginEnd:l,children:(0,p.jsx)(c.zd,{height:"100%",wash:!0,children:(0,p.jsx)(c.Ee,{alt:m,fit:"contain",naturalHeight:null!=g?g:1,naturalWidth:null!=h?h:1,onError:o,onLoad:n,src:null!=d?d:""})})},`carousel-slot-${e}-${t}`)})({pinId:b,slot:i,slotIndex:t,onError:v,onLoad:y,widthToUse:W,gap:W<E&&!e?1:0},this.props.i18n)}return((e,i,t,o,n,s,l,r,a,d,h,g,x,m,_)=>{var v,y,b;const{images:f,details:w=""}=i;let P,A=236,T=236,C="";var j,V,E,W,z,I,M,L;if(n?(A=474,T=f&&Math.min(A/.8,A/((null!==(j=null===(V=f["564x"])||void 0===V?void 0:V.width)&&void 0!==j?j:1)/(null!==(E=null===(W=f["564x"])||void 0===W?void 0:W.height)&&void 0!==E?E:1))),C=f&&(null===(z=f["564x"])||void 0===z?void 0:z.url)):f&&f["736x"]?(T=f&&f["736x"]&&f["736x"].height,A=f&&f["736x"]&&f["736x"].width,C=f&&f["736x"]&&f["736x"].url):f&&f["236x"]&&(T=f&&f["236x"]&&f["236x"].height,A=f&&f["236x"]&&f["236x"].width,C=f&&f["236x"]&&f["236x"].url),x&&m&&(T=Math.min(x*m,null!==(I=T)&&void 0!==I?I:1)),s)P=`${null!==(M=null==f||null===(L=f["236x"])||void 0===L?void 0:L.url)&&void 0!==M?M:""} 1x`;else if(n){var O,R;P=`${null!==(O=null==f||null===(R=f["564x"])||void 0===R?void 0:R.url)&&void 0!==O?O:""} 1x`}else{var S,B,H;P=[(null==f?void 0:f["474x"])&&`${null!==(S=f["474x"].url)&&void 0!==S?S:""} 2x`,(null==f?void 0:f["736x"])&&`${null!==(B=f["736x"].url)&&void 0!==B?B:""} 3x`,(null==f?void 0:f.orig)&&`${null!==(H=f.orig.url)&&void 0!==H?H:""} 4x`].filter(Boolean).join(", ")}const D=(0,u.GH)(w,e,o),k=g?void 0:T,$=g?void 0:A,F=!!_,{boxHeight:Z,boxWidth:U}=F?{boxHeight:null==_?void 0:_.imageHeight,boxWidth:null==_?void 0:_.imageWidth}:{boxHeight:k,boxWidth:$};return(0,p.jsx)(c.xu,{"data-test-id":"carousel-slot-container",height:Z,width:U,children:(0,p.jsx)(c.xu,{height:g?h:void 0,width:g||void 0,"data-test-id":`carousel-img-${o}`,children:(0,p.jsx)(c.Ee,{alt:D,fit:g?"cover":"none",naturalHeight:null!==(v=T)&&void 0!==v?v:1,naturalWidth:null!==(y=A)&&void 0!==y?y:1,onError:l,onLoad:r,src:null!==(b=C)&&void 0!==b?b:"",srcSet:P})})},`carousel-slot-${t}-${o}`)})(this.props.i18n,i,b,t,m,_,v,y,0,0,l,d,L,W,O)}))})]})}}g(x,"defaultProps",{showCarouselBadge:!0});const m=(0,n.connect)((({pins:e},{pinId:i,pin:t})=>{const o=e[i]||t;return{carouselData:(0,l.Z)({pin:o,shouldUnifyImageSizes:!0})}}),(()=>({})))((function(e){const i=(0,d.ZP)();return(0,p.jsx)(x,{...e,i18n:i})}))},347785:(e,i,t)=>{t.d(i,{CU:()=>s,GH:()=>r,gA:()=>a,tD:()=>l,vF:()=>d});const o=({containerWidth:e,contentWidth:i,index:t,slotAndGapWidth:n})=>{const s=t-1,l=s*n;return i-l>=e?l:o({index:s,slotAndGapWidth:n,containerWidth:e,contentWidth:i})},n=({containerWidth:e,contentWidth:i,gap:t,index:n,slidesShownPerPosition:s,slotAndGapWidth:l})=>o({containerWidth:e,contentWidth:i,index:n,slotAndGapWidth:l})+(({slidesShownPerPosition:e,slotAndGapWidth:i})=>i-(e-parseInt(e,10))*i)({slidesShownPerPosition:s,slotAndGapWidth:l})-t,s=({containerWidth:e,gap:i,index:t,numberOfSlides:o,slotWidth:s})=>{const l=s+i,r=l*o;if(r<=e)return 0;const a=e/l,d=(({index:e,numberOfSlides:i,slidesShownPerPosition:t})=>i-e-Math.floor(t)<1)({index:t,numberOfSlides:o,slidesShownPerPosition:a})?n({containerWidth:e,contentWidth:r,gap:i,index:t,slidesShownPerPosition:a,slotAndGapWidth:l}):t*l;return d?Math.round(-d):0},l=({containerWidth:e,gap:i,index:t,numberOfSlides:o,slotWidth:n})=>{const l=(n+i)*o;if(l<=e||0===e)return!0;const r=s({containerWidth:e,gap:i,index:t,numberOfSlides:o,slotWidth:n}),a=l-e;return Math.abs(r)+i>=a},r=(e,i,t)=>e||`${i._('carousel image', 'Alternate text for a carousel image that indicates it is a carousel pin, with carousel index followed', 'Alternate text for a carousel image that indicates it is a carousel pin, with carousel index followed')} ${t}`,a=({highResOnly:e,lowResOnly:i,slot:t})=>{var o,n,s;const{images:l}=t;var r,a,d,u;return i?`${null!==(r=null==l||null===(a=l["236x"])||void 0===a?void 0:a.url)&&void 0!==r?r:""} 1x`:e?`${null!==(d=null==l||null===(u=l["564x"])||void 0===u?void 0:u.url)&&void 0!==d?d:""} 1x`:[(null==l?void 0:l["474x"])&&`${null!==(o=l["474x"].url)&&void 0!==o?o:""} 2x`,(null==l?void 0:l["736x"])&&`${null!==(n=l["736x"].url)&&void 0!==n?n:""} 3x`,(null==l?void 0:l.orig)&&`${null!==(s=l.orig.url)&&void 0!==s?s:""} 4x`].filter(Boolean).join(", ")},d=(e,i,t,o,n=0)=>{if(t===i)return o*i*-1;const s=Math.floor(t-i),l=i+n;return o===e-1?-1*o*l+s:-1*o*l}},737022:(e,i,t)=>{function o(e){const{images:i={}}=e;return i["564x"]&&i["564x"].url?i["564x"]:i["736x"]&&i["736x"].url?i["736x"]:i["474x"]&&i["474x"].url?i["474x"]:i["236x"]&&i["236x"].url?i["236x"]:null}t.d(i,{Z:()=>o})},444445:(e,i,t)=>{t.d(i,{$q:()=>g,KN:()=>x,Lo:()=>n,P2:()=>h,Us:()=>s,V8:()=>d,ZZ:()=>r,g5:()=>a,lX:()=>c,nW:()=>u,oX:()=>p,xf:()=>o,yc:()=>l});const o=236,n=2*o/3,s=24,l=2,r=14,a=16,d=e=>e||a,u=12,c=16,h=24,p=16,g=(e=!1,i=!1)=>e?i?c:u:h,x=(e,i,t,o,n=r)=>{const s=e+n;return`\n@media (min-width: ${i*s}px) and (max-width: ${(t+1)*s-1}px) {\n  ${o}\n}\n`}}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/26255-2ed5d1504e334bd6.mjs.map
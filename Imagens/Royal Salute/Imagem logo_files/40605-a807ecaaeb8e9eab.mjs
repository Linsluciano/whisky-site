(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[40605],{343375:(e,t,n)=>{n.d(t,{Z:()=>l});var i=n(667294),o=(n(957191),n(764990)),r=n(123159);n(332611);function l(e){const{mountedPlacements:t,completeExperience:n,dismissExperience:l,experiences:s,fetchAllExperiences:a,fetchAllExperiencesMulti:c,fetchExperienceForPlacements:d,triggerExperimentsForPlacement:u,viewExperience:h}=(0,r.M)(),p=e?(0,o.MQ)(s,t,e):null;return(0,i.useMemo)((()=>({completeExperience:n,dismissExperience:l,experienceForPlacement:p,fetchAllExperiences:a,fetchAllExperiencesMulti:c,fetchExperienceForPlacements:d,triggerExperimentsForPlacement:u,viewExperience:h})),[n,l,p,a,c,d,u,h])}},490061:(e,t,n)=>{n.d(t,{Z:()=>s,l:()=>a});var i=n(966338);const o=[1000069,1000075],r={};function l(e){return o.forEach((t=>{!e[t]||void 0!==r[t]&&r[t].id===e[t].id||(r[t]=e[t])})),r}function s(e){return(0,i.connect)((e=>({lfvExperiences:l(e.experiences)})))(e)}function a(){return l((0,i.useSelector)((({experiences:e})=>e)))}},164066:(e,t,n)=>{n.r(t),n.d(t,{default:()=>y});var i=n(667294),o=n(319915),r=n(883119);const l={};function s(e){if(null!=e)return l[e]&&l[e].screenWidth===window.innerWidth||(l[e]={screenWidth:window.innerWidth,cache:r.Rk.createMeasurementStore()}),l[e].cache}var a=n(317254),c=n(49181),d=n(958111),u=n(391254),h=n(444445),p=n(785893);function m(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}class x extends i.Component{constructor(...e){super(...e),m(this,"masonryRef",(0,i.createRef)()),m(this,"renderItem",(e=>{const{comp:t}=this.props,{gutterWidth:n,paddingBottom:i}=this.getGutters();return(0,p.jsx)("div",{style:{paddingBottom:i,paddingLeft:n/2,paddingRight:n/2},children:(0,p.jsx)(t,{...e})})}))}componentDidUpdate(e){const{widthOffset:t}=this.props;t!==e.widthOffset&&this.masonryRef.current&&this.masonryRef.current.handleResize()}getGutters(){const{gutterWidth:e,paddingStyle:t}=this.props,n="simplified"===t;return{gutterWidth:n?h.oX:e,paddingBottom:n?16:6}}render(){const{columnWidth:e,flexible:t,items:n,layout:i,loadItems:o,masonryRef:l,measurementStore:s,scrollContainer:a,serverRender:m,virtualize:x,isGridCentered:g,minCols:f}=this.props,{gutterWidth:_}=this.getGutters(),y=m?"serverRenderedFlexible":"flexible",b=(0,p.jsx)(r.Rk,{columnWidth:e+_,gutterWidth:0,comp:this.renderItem,minCols:f,ref:e=>{this.masonryRef.current=e,l&&(l.current=e)},items:n,layout:t?y:null!=i?i:"basic",loadItems:o,measurementStore:s,scrollContainer:a,virtualize:x});let v;return g&&(v="gridCentered"),(0,p.jsxs)("div",{className:v,children:[m&&(0,p.jsx)(u.Z,{unsafeCSS:t?(0,d.Z)((e||h.xf)+_,n.length||h.g5,f||h.yc):(0,c.Z)((e||h.xf)+_,n.length||h.g5,f||h.yc)}),(0,p.jsx)("div",{children:b})]})}}function g(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}m(x,"defaultProps",{gutterWidth:14,isGridCentered:!0,minCols:h.yc,paddingStyle:"simplified"});const f="undefined"!=typeof window?()=>window:void 0;class _ extends i.Component{constructor(...e){super(...e),g(this,"renderItem",(e=>{const{comp:t}=this.props;return(0,p.jsx)(o.Z,{name:"MasonryPerfTimingItem",children:(0,p.jsx)(t,{...e})})})),g(this,"loadItems",(()=>{const{isFetching:e,loadItems:t}=this.props;e||t()}))}render(){const{cacheKey:e,columnWidth:t,flexible:n,gutterWidth:i,isGridCentered:o,items:r,layout:l,masonryRef:a,minCols:c,paddingStyle:d,scrollContainer:u,serverRender:h,virtualize:m,widthOffset:g}=this.props;return(0,p.jsx)(x,{columnWidth:t,comp:this.renderItem,flexible:n,gutterWidth:i,isGridCentered:o,items:r,layout:l,loadItems:this.loadItems,masonryRef:a,measurementStore:s(e),minCols:c,paddingStyle:d,scrollContainer:u||f,serverRender:h,virtualize:m,widthOffset:g})}}function y({cacheKey:e,columnWidth:t,comp:n,flexible:i,gutterWidth:o,isAtEnd:r,isFetching:l,isGridCentered:s=!0,isLoaded:c,items:d,pinData:u,layout:h,loadItems:m,masonryRef:x,minCols:g,paddingStyle:y,scrollContainer:b,serverRender:v=!0,virtualize:C,widthOffset:P,includeBackgroundImages:j,includeVideos:w}){return(0,p.jsx)(a.Z,{isAtEndOfFeed:r,pinData:u,itemCount:d.length,includeBackgroundImages:j,includeVideos:w,children:(0,p.jsx)(_,{cacheKey:e,columnWidth:t,comp:n,flexible:i,gutterWidth:o,isFetching:l,isGridCentered:s,items:d,layout:h,loadItems:m,masonryRef:x,minCols:g,paddingStyle:y,scrollContainer:b||f,serverRender:v,virtualize:C,widthOffset:P})})}},49181:(e,t,n)=>{function i(e=236,t=16,n=2){let i="\n.gridCentered {\n  margin-left: auto;\n  margin-right: auto;\n}\n.gridCentered .static,\n.gridCentered .Masonry-Premount .Collection-Item {\n  position: absolute;\n  visibility: hidden;\n}\n.gridCentered .Masonry-Premount,\n.gridCentered .Masonry-Premount .AutoSizer,\n.gridCentered .Masonry-Premount .Collection {\n  width: auto !important;\n}\n";for(let o=n;o<t+1;o+=1){i+=`\n@media (min-width: ${o===n?0:o*e}px) and (max-width: ${(o+1)*e-1}px) {\n  .gridCentered {\n    width: ${o*e}px;\n  }\n  .gridCentered .Masonry-Premount .Collection-Item:nth-child(-n+${o}),\n  .gridCentered .static:nth-child(-n+${o}) {\n    position: static !important;\n    visibility: visible !important;\n    float: left;\n    display: block;\n  }\n}\n`}return i}n.d(t,{Z:()=>i})},958111:(e,t,n)=>{function i(e=300,t=16,n=2){let i=`\n.gridCentered {\n  margin-left: auto;\n  margin-right: auto;\n  max-width: ${t*e}\n}\n\n.gridCentered .static,\n.gridCentered .Masonry-Premount .Collection-Item {\n  position: absolute !important;\n  visibility: hidden !important;\n}\n.gridCentered .Masonry-Premount,\n.gridCentered .Masonry-Premount .AutoSizer,\n.gridCentered .Masonry-Premount .Collection {\n  width: auto !important;\n}\n\n@media (min-width: ${t*e}px) {\n  .gridCentered .Masonry-Premount .Collection-Item:nth-child(-n+${t}),\n  .gridCentered .static:nth-child(-n+${t}) {\n    position: static !important;\n    visibility: visible !important;\n    float: left;\n    display: block;\n  }\n\n  .gridCentered .Masonry-Premount .Collection-Item,\n  .gridCentered .static {\n    width: ${e}px !important;\n  }\n}\n`;for(let o=n;o<t+1;o+=1){i+=`\n@media (min-width: ${o===n?0:(o-1)*e}px) and (max-width: ${o*e-1}px) {\n  .gridCentered .Masonry-Premount .Collection-Item:nth-child(-n+${o}),\n  .gridCentered .static:nth-child(-n+${o}) {\n    position: static !important;\n    visibility: visible !important;\n    float: left;\n    display: block;\n  }\n\n  .gridCentered .Masonry-Premount .Collection-Item,\n  .gridCentered .static {\n    width: calc(100% / ${o}) !important;\n  }\n}\n`}return i}n.d(t,{Z:()=>i})},163745:(e,t,n)=>{n.d(t,{Z:()=>g,e:()=>p});var i=n(667294),o=n(263116),r=n(343375),l=n(898781),s=n(67223),a=n(131108),c=n(599997),d=n(883119),u=n(785893);const h=(0,o.ZP)({resolved:{},chunkName:()=>"video-VideoWrapper",isReady(e){const t=this.resolve(e);return!0===this.resolved[t]&&!!n.m[t]},importAsync:()=>Promise.resolve().then(n.bind(n,131971)),requireAsync(e){const t=this.resolve(e);return this.resolved[t]=!1,this.importAsync(e).then((e=>(this.resolved[t]=!0,e)))},requireSync(e){const t=this.resolve(e);return n(t)},resolve(){return 131971}}),p=Object.freeze({white:"inverse",black:"default"}),m={defaultOverlay:{backgroundColor:"rgba(0, 0, 0, 0.4)"},hoverOverlay:{backgroundColor:"rgba(0, 0, 0, 0.6)"}};function x({titleText:e,videoPin:t,videoPlaceholderImage:n}){const i=(0,l.ZP)();return(0,u.jsx)(h,{fallback:(0,u.jsx)(d.Ee,{alt:e||"",color:"rgb(111, 91, 77)",naturalHeight:3,naturalWidth:2,src:n||t.metadata.thumbnail,fit:"cover"}),accessibilityMaximizeLabel:i._('Maximize', 'Maximize button on video', 'Maximize button on video'),accessibilityMinimizeLabel:i._('Minimize', 'Minimize button on video', 'Minimize button on video'),accessibilityMuteLabel:i._('Mute', 'Mute button on video', 'Mute button on video'),accessibilityPauseLabel:i._('Pause', 'Pause button on video', 'Pause button on video'),accessibilityPlayLabel:i._('Play', 'Play button on video', 'Play button on video'),accessibilityProgressBarLabel:i._('Progress bar', 'FeedCard.accessibilityProgressBarLabel', 'Video progress bar accessibility label'),accessibilityUnmuteLabel:i._('Unmute', 'Unmute button on video', 'Unmute button on video'),aspectRatio:c.q4,captions:"",controls:!1,loop:!0,isAutoPlay:!0,onPlay:()=>{},onPlayError:()=>{},playing:!0,playsInline:!0,poster:n||t.metadata.thumbnail,src:t.url,volume:0})}function g({buttonAction:e,buttonCustomization:t,buttonText:n,experience:o,hideCompleteButton:l,imageAlt:h,imageUrl:p,openNewTab:g,storyType:f,titleColor:_,titleText:y,titleTextCustomization:b,videoPin:v,videoPlaceholderImage:C}){const[P,j]=(0,i.useState)(!1),{experience_id:w,placement_id:E}=o||{},M=(0,r.Z)(E),z=(0,s.Z)({onVisibilityChanged:e=>{e&&o&&"viewed"!==o.status&&(o.status="viewed",M.viewExperience(E,w,!1,!0))}}),A=()=>{o&&M.completeExperience(E,w,!1,!0)},k=()=>{j(!0)},I=()=>{j(!1)},L="feed_card_video"===f?354:315,S=(0,c.zn)(f),T=S?a.f8:a.hm,R=S?a.sH:a.HI,Z=!S,{color:W,fontSize:O,fontStyle:B,fontWeight:N,horizontalAlignment:D}=(0,c.Mf)(b||{},"web"),{button_background_color:U,button_text_color:F}=t||{};return(0,u.jsxs)(d.xu,{position:"relative",ref:z,children:[(0,u.jsx)(d.xu,{onMouseEnter:k,onMouseLeave:I,children:(0,u.jsxs)(d.rU,{accessibilityLabel:y,href:e,onClick:A,onFocus:k,onBlur:I,target:g?"blank":null,underline:"none",children:[(0,u.jsxs)(d.xu,{position:"relative",dangerouslySetInlineStyle:{__style:{WebkitMaskImage:"-webkit-radial-gradient(white, black)"}},overflow:"hidden",rounding:4,children:[(0,u.jsx)(d.xu,{height:L,width:236,rounding:4,children:"feed_card_video"===f&&v?(0,u.jsx)(x,{titleText:y,videoPin:v,videoPlaceholderImage:C}):p&&(0,u.jsx)(d.Ee,{alt:h||"",color:"rgb(111, 91, 77)",naturalHeight:4,naturalWidth:3,src:p,fit:"cover"})}),Z&&(0,u.jsx)(d.xu,{height:L,width:236,dangerouslySetInlineStyle:{__style:P?m.hoverOverlay:m.defaultOverlay},position:"absolute",top:!0,left:!0}),(0,u.jsx)(T,{children:(0,u.jsx)(d.xv,{align:D,color:_,italic:"italics"===B,weight:N,children:(0,u.jsx)(d.xu,{dangerouslySetInlineStyle:{__style:{color:null!=W?W:void 0,fontSize:O}},children:y})})})]}),!l&&S&&(0,u.jsx)(R,{children:(0,u.jsx)(d.xu,{display:"flex",rounding:"pill",color:"white",dangerouslySetInlineStyle:{__style:{backgroundColor:U}},justifyContent:"center",alignItems:"center",paddingX:2,height:48,children:(0,u.jsx)(d.xv,{weight:"bold",children:(0,u.jsx)(d.xu,{dangerouslySetInlineStyle:{__style:{color:F}},children:n})})})})]})}),!S&&(0,u.jsx)(R,{children:(0,u.jsx)(d.zx,{role:"link",accessibilityLabel:n,color:"gray",fullWidth:!0,href:e,onClick:A,size:"lg",text:n})})]})}},675113:(e,t,n)=>{n.d(t,{Z:()=>p});var i=n(249647),o=n(667294),r=n(343375),l=n(407043),s=n(925927),a=n(883119),c=n(785893);function d({experienceId:e,copy:{buttonText:t,subtitleText:n,titleText:i},path:d,pins:u,placementId:h}){const{logContextEvent:p}=(0,l.v)(),m=(0,r.Z)(),x=(0,s.k6)();(0,o.useEffect)((()=>{p({event_type:13,view_type:1,view_parameter:92,component:200,element:10551}),m.viewExperience(h,e)}),[]);return(0,c.jsxs)(a.kC,{alignItems:"stretch",direction:"column",flex:"grow",justifyContent:"start",children:[(0,c.jsx)(a.xu,{paddingY:1,children:(0,c.jsx)(a.X6,{align:"center",size:"400",children:i})}),(0,c.jsx)(a.xu,{paddingY:1,children:(0,c.jsx)(a.xv,{align:"center",children:n})}),(0,c.jsx)(a.xu,{alignItems:"center",display:"flex",justifyContent:"center",marginTop:1,paddingY:2,children:u&&u.map(((e,t)=>((e,t)=>{const{height:n,url:i,width:o}=e.images.orig,r=0===t?0:2;return(0,c.jsx)(a.xu,{marginStart:r,children:(0,c.jsx)(a.zd,{height:72,rounding:2,width:48,children:(0,c.jsx)(a.Ee,{alt:"",color:"",fit:"cover",naturalHeight:n,naturalWidth:o,src:i})})},e.id)})(e,t)))}),(0,c.jsx)(a.xu,{alignSelf:"center",paddingY:2,children:(0,c.jsx)(a.zx,{fullWidth:!0,onClick:()=>{m.completeExperience(h,e,!1,!0),p({event_type:101,view_type:1,view_parameter:92,component:200,element:10551}),x.push(d)},size:"lg",text:t})})]})}var u=n(70061),h=n(163745);function p(e){const{story:t}=e;if(41===t.container_type){const e=t,{copy:n,custom_properties:o,experience:r,objects:l}=e;return(0,c.jsx)("div",{className:"Module",children:(0,c.jsx)(d,{copy:(0,i.Z)(u.Z)(n),experienceId:r.experience_id,path:o.path,pins:l,placementId:r.placement_id})})}if(66===t.container_type){const e=t,{action:n,custom_properties:i,display_options:o,experience:r,story_type:l,title:s}=e;return(0,c.jsx)("div",{className:"Module",children:(0,c.jsx)(h.Z,{buttonAction:n.url,buttonCustomization:i.button_customization,buttonText:n.text,experience:r,hideCompleteButton:i.hide_complete_button,imageAlt:i.image_alt,imageUrl:i.image,openNewTab:i.open_new_tab,storyType:l,titleColor:h.e[o.title_text_color],titleText:s.format,titleTextCustomization:i.title_text_customization,videoPin:i.video_pin,videoPlaceholderImage:i.video_placeholder_image})})}return null}},375151:(e,t,n)=>{n.d(t,{Z:()=>s});var i=n(121151),o=n(898781),r=n(883119),l=n(785893);function s(e){const t=(0,o.ZP)(),{handleComplete:n,handleDismiss:s}=e,a=(0,l.jsxs)(r.xu,{flex:"grow",position:"relative",display:"flex",direction:"column",width:"100%",children:[(0,l.jsx)(r.xu,{marginBottom:-12,children:(0,l.jsx)(r.Ee,{alt:t._('Stylized Pin grid image', 'helpUpsellModal.headerImage.altText', 'Alt text for Pin grid image in help upsell modal'),naturalHeight:232,naturalWidth:804,src:"https://s.pinimg.com/help_upsell_modal_header.png"})}),(0,l.jsxs)(r.xu,{marginTop:-12,children:[(0,l.jsx)(r.kC,{alignItems:"stretch",justifyContent:"center",children:(0,l.jsx)(r.JO,{accessibilityLabel:t._('Pinterest logo icon', 'helpUpsellModal.pinterestIcon', 'Accessibility label for Pinterest logo icon'),color:"brandPrimary",icon:"pinterest",size:48})}),(0,l.jsx)(r.kC,{alignItems:"stretch",justifyContent:"center",children:(0,l.jsxs)(r.xu,{maxWidth:522,children:[(0,l.jsx)(r.xu,{display:"flex",justifyContent:"center",paddingX:12,paddingY:4,children:(0,l.jsx)(r.X6,{align:"center",size:"600",children:t._('Learn how to make Pinterest work for you', 'helpUpsellModal.heading', 'Heading for modal to upsell help guides (subheading is "Check out our guide to the basics of saving Pins, sharing ideas and customizing your home feed.")')})}),(0,l.jsx)(r.xu,{paddingX:12,children:(0,l.jsx)(r.X6,{align:"center",size:"400",children:t._('Check out our guide to the basics of saving Pins, sharing ideas and customizing your home feed.', 'helpUpsellModal.subHeading', 'Subheading for modal to upsell help guides (heading is "Learn how to make Pinterest work for you")')})}),(0,l.jsxs)(r.xu,{display:"flex",direction:"row",justifyContent:"center",marginBottom:4,paddingY:12,children:[(0,l.jsx)(r.xu,{display:"flex",direction:"row",paddingX:1,children:(0,l.jsx)(r.zx,{accessibilityLabel:t._('Dismiss modal', 'helpUpsellModal.dismissButton.accessibilityLabel', 'Accessibility label for help upsell modal dismiss button'),onClick:s,size:"lg",text:t._('Maybe later', 'helpUpsellModal.dismissButton.buttonText', 'Accessibility label for help upsell modal confirm button')})}),(0,l.jsx)(r.xu,{display:"flex",direction:"row",paddingX:1,children:(0,l.jsx)(r.zx,{role:"link",href:"/welcome/",accessibilityLabel:t._('Continue to new user welcome guides', 'helpUpsellModal.confirmButton.accessibilityLabel', 'Accessibility label for help upsell modal confirm button'),color:"red",onClick:n,size:"lg",text:t._('Let\'s go', 'helpUpsellModal.confirmButton.buttonText', 'Confirm button for Chrome PWA upsell modal')})})]})]})})]})]});return(0,l.jsx)(i.ZP,{accessibilityModalLabel:t._('Learn how to make Pinterest work for you', 'helpUpsellModal.accessibilityModalLabel', 'Accessible label for help upsell modal'),heading:a,onDismiss:s,size:"lg"})}},202139:(e,t,n)=>{n.d(t,{DH:()=>i,F4:()=>l,FS:()=>o,N1:()=>d,N9:()=>a,UK:()=>r,VL:()=>s,v6:()=>c});const i=1e3,o=60*i,r=60*o,l=24*r,s=7*l,a=30*l,c=31*l,d=365*l},701500:(e,t,n)=>{n.d(t,{Z:()=>h});var i=n(667294),o=n(249647),r=n(570470),l=n(883119),s=n(785893);class a extends i.Component{renderPulsar(){const{anchor:e,handleComplete:t,handlePulsarCompleteOnHover:n,zIndex:i}=this.props;return(0,s.jsx)(r.Z,{anchor:e,onTouch:t,onMouseEnter:n,zIndex:i})}renderFlyout(){const{anchor:e,tooltip:t,handleDismiss:n,handleComplete:i}=this.props;if(!t)return null;const{cancelButtonText:o,confirmButtonText:r,mainText:a,idealDirection:c="down"}=t,d=o&&n&&r&&i;return(0,s.jsx)(l.J2,{anchor:e,color:"blue",idealDirection:c,onDismiss:n,shouldFocus:!1,showCaret:!0,size:"flexible",children:(0,s.jsxs)(l.xu,{maxWidth:284,padding:3,width:"max-content",children:[(0,s.jsx)(l.xv,{color:"inverse",overflow:"breakWord",weight:"bold",children:a}),d?(0,s.jsxs)(l.xu,{marginTop:2,display:"flex",alignItems:"center",children:[(0,s.jsx)(l.xu,{column:6,marginEnd:1,children:(0,s.jsx)(l.zx,{fullWidth:!0,color:"transparentWhiteText",onClick:e=>n(e),size:"md",text:String(o)})}),(0,s.jsx)(l.xu,{column:6,children:(0,s.jsx)(l.zx,{fullWidth:!0,color:"white",size:"md",text:String(r),onClick:i})})]}):null]})})}render(){const{anchor:e,pulserOnly:t}=this.props;return e?t?this.renderPulsar():this.renderFlyout():null}}var c=n(70061),d=n(764990),u=n(123159);function h({anchor:e,anchorElementRef:t,children:n,containerBoxConfig:r,experience:h,isHidden:p,onCompleteClick:m,zIndex:x}){var g;const{completeExperience:f,dismissExperience:_,experiences:y,viewExperience:b}=(0,u.M)(),v=(({anchor:e,anchorExperiences:t,passedExperience:n})=>n||(t?t[e]:null))({anchor:e,anchorExperiences:Object.values(y).reduce(((e,t)=>(8===t.type&&(e[(0,d.A0)(t)]=t),e)),{}),passedExperience:h}),C=(null==v||null===(g=v.display_data)||void 0===g?void 0:g.delay)||0,[P,j]=(0,i.useState)(!!C);if((0,i.useEffect)((()=>{if(C>0&&P){const e=setTimeout((()=>{j(!1)}));return()=>clearTimeout(e)}return()=>{}}),[C,P]),(0,i.useEffect)((()=>{!P&&v&&b(v.placement_id,v.experience_id)}),[P,v]),!v||P||p)return i.Children.only(n);const w=(e=>{const{display_data:t}=e;return t.tooltip&&(t.tooltip={...t.tooltip.options,...t.tooltip},delete t.tooltip.options),(0,o.Z)(c.Z,!0)(t)})(v),E=()=>{var e;null!==(e=v.display_data)&&void 0!==e&&e.complete_on_hover&&f(v.placement_id,v.experience_id)};return(0,s.jsxs)(l.xu,{position:"relative",height:null==r?void 0:r.height,display:null==r?void 0:r.display,children:[(0,s.jsx)(l.iP,{onMouseEnter:E,onTap:()=>{m&&m(),w.skipComplete||f(v.placement_id,v.experience_id)},children:i.Children.only(n)}),(0,s.jsx)(a,{anchor:t||null,handlePulsarCompleteOnHover:E,handleComplete:()=>{t instanceof HTMLElement&&t.click()},handleDismiss:e=>{null!=e&&e.event&&e.event.stopPropagation(),_(v.placement_id,v.experience_id)},pulserOnly:!!w.pulserOnly,tooltip:w.tooltip,tooltipOnly:!!w.tooltipOnly,zIndex:x})]})}},123159:(e,t,n)=>{n.d(t,{F:()=>h,M:()=>u});var i=n(667294),o=n(966338),r=n(708206),l=n(957191),s=n(425288),a=n(332611),c=n(785893);const{Provider:d,useHook:u}=(0,s.Z)("ExperienceContext");function h({children:e}){const[t,n]=(0,i.useReducer)(((e,t)=>{if("MOUNT_PLACEMENT"===t.type)return{...e,[t.payload]:!0};if("UNMOUNT_PLACEMENT"===t.type){const n={...e};return delete n[t.payload],n}return e}),{}),s=(0,o.useDispatch)(),u=(0,o.useSelector)((e=>e.experiences)),h=(0,i.useMemo)((()=>{const e=(0,r.bindActionCreators)({completeExperience:a.CK,dismissExperience:a.Qu,fetchAllExperiences:a.fO,fetchAllExperiencesMulti:l.NW,fetchExperienceForPlacements:a.pz,mountPlacement:a.N,triggerExperimentsForPlacement:a.kd,viewExperience:a.UT},s);return{...e,mountPlacement:(t,...i)=>{e.mountPlacement(t,...i),n({type:"MOUNT_PLACEMENT",payload:t})},unmountPlacement:e=>{n({type:"UNMOUNT_PLACEMENT",payload:e})}}}),[s,n]);return(0,c.jsx)(d,{value:{experiences:u,mountedPlacements:t,...h},children:e})}},131108:(e,t,n)=>{n.d(t,{HI:()=>l,f8:()=>a,hm:()=>s,sH:()=>r});var i=n(883119),o=n(785893);const r=({children:e})=>(0,o.jsx)(i.xu,{padding:4,position:"absolute",bottom:!0,left:!0,right:!0,children:e}),l=({children:e})=>(0,o.jsx)(i.xu,{padding:2,children:e}),s=({children:e})=>(0,o.jsx)(i.xu,{display:"flex",position:"absolute",top:!0,height:"100%",width:"100%",alignItems:"center",justifyContent:"center",children:e}),a=({children:e})=>(0,o.jsx)(i.xu,{padding:4,position:"absolute",top:!0,left:!0,right:!0,children:e})},599997:(e,t,n)=>{n.d(t,{Mf:()=>y,q4:()=>o,zn:()=>i});const i=e=>["feed_card_default","feed_card_video"].includes(e),o=2/3,{LEFT:r,CENTER:l,RIGHT:s}={LEFT:0,CENTER:1,RIGHT:2},a={[r]:"start",[l]:"center",[s]:"end"},{SMALL:c,MEDIUM:d,LARGE:u}={SMALL:0,MEDIUM:1,LARGE:2,EXTRA_LARGE:3},h={web:{[c]:"16",[d]:"20",[u]:"24"},mweb:{[c]:"12",[d]:"16",[u]:"18"}},{ITALICS:p,NORMAL:m}={NORMAL:0,ITALICS:1},x={[p]:"italics",[m]:"normal"},{BOLD:g,NORMAL:f}={NORMAL:0,BOLD:1},_={[g]:"bold",[f]:"normal"},y=({color:e,font_style:t,font_weight:n,horizontal_alignment:i,size:o},r)=>({color:e,fontStyle:x[null!=t?t:0],fontWeight:_[null!=n?n:1],horizontalAlignment:a[null!=i?i:0],fontSize:h[r][null!=o?o:0]+"px"})},67223:(e,t,n)=>{n.d(t,{Z:()=>s});var i=n(667294);const o=new Map;let r=null;const l=e=>{e.forEach((e=>{const t=o.get(e.target);t&&t(e)}))};function s({onVisibilityChanged:e,inAdsDesktopVideoExperiment:t,trackFullVisible:n,rootMargin:s}){const a=(0,i.useRef)(null);let c=!1;const d=()=>{var t;a.current instanceof HTMLElement&&(t=a.current,o.has(t))&&(c&&(e(!1),c=!1))},u=(0,i.useCallback)((i=>{a.current instanceof HTMLElement&&((e,t="-64px 0px 0px 0px",n)=>{const i={root:"undefined"==typeof document?null:document.querySelector("#mainContainer"),rootMargin:t,threshold:[0,.5,1]};r=r||new window.IntersectionObserver(l,i),o.set(e,n),r.observe(e)})(a.current,i,(i=>{if(!o.has(a.current))return;const r=t?i.intersectionRatio>=.5:i.intersectionRatio>0||i.isIntersecting,l=n?i.intersectionRatio>=1:r,s=n?0===i.intersectionRatio:!l;!c&&l?(t=>{const n=t.intersectionRatio>0||t.isIntersecting;c=n,c&&e(!0)})(i):c&&s&&d()}))}),[a.current]);return(0,i.useEffect)((()=>(u(s),()=>{var e;a.current instanceof HTMLElement&&(d(),e=a.current,r.unobserve(e),o.delete(e))})),[u]),a}},329734:(e,t,n)=>{function i(e){return e&&e[1000069]&&500417===e[1000069].experience_id}n.d(t,{Z:()=>i})},249647:(e,t,n)=>{n.d(t,{Z:()=>l});var i=n(968630),o=n.n(i);function r(e,t=!1){return n=>{if(!o()(n))return t&&Array.isArray(n)?n.map(r(e,t)):n;const i={};return Object.keys(n).forEach((l=>{const s=e(n[l],l);o()(n[l])||t&&Array.isArray(n[l])?i[s]=r(e,t)(n[l]):i[s]=n[l]})),i}}function l(e,t=!1){const n=(t,n)=>e(n);return e=>r(n,t)(e)}},317254:(e,t,n)=>{n.d(t,{Z:()=>s});var i=n(969853),o=n(667294),r=n(276602),l=n(543059);function s({children:e,isAtEndOfFeed:t,pinData:n,itemCount:s,includeBackgroundImages:a=!1,includeVideos:c=!1}){return(0,i.Z)({pinData:n,isAtEndOfFeed:t,includeBackgroundImages:a,includeVideos:c}),function(e){const t=(0,r.EV)(),n=(0,o.useRef)(null);(0,o.useEffect)((()=>{e!==n.current&&(n.current=e,t&&(0,l.ZP)(l.at))}),[!!t,e])}(s),e}},6663:(e,t,n)=>{n.d(t,{Z:()=>c});var i=n(391254),o=n(416403),r=n(898781),l=n(486840),s=n(883119),a=n(785893);function c({color:e,completeButtonText:t,completeUrl:n,dismissButtonText:c,experienceId:d,external:u,message:h,onComplete:p,onDismiss:m}){const x=(0,l.Z)(),g=(0,r.ZP)(),f=({event:e})=>{10202===d&&x(),p&&p(e)},_=({event:e})=>{m&&m(e)},y=h&&!t,b=500735===d,v=t&&(!n||b)&&(0,a.jsx)(s.zx,{color:"white",onClick:f,text:t}),C=t&&n&&(0,a.jsx)(o.Z,{accessibilityLabel:t,rounding:6,url:n,onClick:e=>f({event:e}),external:u,children:(0,a.jsx)(s.xu,{color:"white",rounding:6,minHeight:40,paddingX:3,paddingY:2,display:"flex",alignItems:"center",children:(0,a.jsx)(s.xv,{align:"center",color:e,weight:"bold",children:t})})},"naglink"),P=c&&m&&(0,a.jsx)(s.xu,{mdPaddingX:2,children:(0,a.jsx)(s.zx,{color:e&&"default"!==e?"transparent":"gray",onClick:_,text:c})}),j=y&&!b&&m&&(0,a.jsx)(s.hU,{accessibilityLabel:g._('Close', 'accessibility close label', 'accessibility close label'),bgColor:"lightGray",onClick:_,icon:"cancel"});return(0,a.jsxs)(s.xu,{display:"flex",direction:"column",smDirection:"row",color:null!=e?e:"darkGray",paddingY:3,paddingX:6,alignItems:"center",justifyContent:"between",children:[(0,a.jsx)(s.xu,{column:12,smColumn:y?11:8,children:(0,a.jsxs)(s.xv,{color:"inverse",weight:b?"normal":"bold",children:[(0,a.jsx)(i.Z,{unsafeCSS:".Banner--message a { color: #fff; text-decoration: underline; }"}),(0,a.jsx)("div",{className:"Banner--message",children:(0,a.jsx)("span",{dangerouslySetInnerHTML:{__html:h}})})]})}),(0,a.jsxs)(s.kC,{alignItems:"center",justifyContent:"end",children:[P,v||C,j]})]})}},416403:(e,t,n)=>{n.d(t,{Z:()=>m});var i=n(667294),o=n(701500),r=n(883119),l=n(785893);function s(e,t){return e||("transparent"===t?"rgba(0, 0, 0, 0.06)":"red"===t?"rgba(207, 0, 31, 1)":"darkGray"===t?"#333333":"rgb(226, 226, 226)")}function a(e){const{active:t=!1,borderRadius:n,children:i,focused:o=!1,justBgFocused:a=!1,hovered:c=!1,rounding:d,hoverBgColor:u,bgColor:h="transparent",size:p="lg"}=e,m=t?{backgroundColor:"transparent"===h?"rgba(0, 0, 0, 0.1)":"rgb(218, 218, 218)"}:null,x=!c||o||t?null:{backgroundColor:s(u,h)},g=o?{backgroundColor:s(u,h),outline:"0",...a?{}:{boxShadow:"0 0 0 4px rgba(0, 132, 255, 0.5)"}}:null;let f;if("circle"===d)switch(p){case"xs":f=24;break;case"sm":f=32;break;case"md":f=40;break;case"lg":f=48;break;case"xl":f=56;break;default:f=48}const _=f,y={backgroundColor:{transparent:"transparent",lightGray:"#efefef",white:"#fff",transparentDarkGray:"rgba(51, 51, 51, 0.8)",red:"#e60023",darkGray:"#111111"}[h],...x,...m,...g,...n?{borderRadius:n}:{}};return(0,l.jsx)(r.xu,{rounding:d,dangerouslySetInlineStyle:{__style:y},height:f,width:_,children:i})}var c=n(287072),d=n(48714);function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const h=({anchorElementRef:e,children:t,experienceAnchor:n})=>n?(0,l.jsx)(o.Z,{anchor:".HomeButton2",anchorElementRef:e.current,containerBoxConfig:{display:"flex",height:"100%"},children:t}):t;class p extends i.Component{constructor(...e){super(...e),u(this,"state",{active:!1,focused:!1,hovered:this.props.isInitiallyHovered||!1}),u(this,"anchorElementRef",(0,i.createRef)()),u(this,"handleBlur",(()=>this.setState({focused:!1}))),u(this,"handleFocus",(()=>this.setState({focused:!0}))),u(this,"handleMouseDown",(()=>this.setState({active:!0}))),u(this,"handleMouseEnter",(()=>{const{handleMouseEnter:e}=this.props;e&&e(),this.setState({hovered:!0})})),u(this,"handleMouseLeave",(()=>{const{handleMouseLeave:e}=this.props;e&&e(),this.setState({active:!1,hovered:!1})})),u(this,"handleMouseUp",(()=>this.setState({active:!1})))}render(){const{accessibilityLabel:e,experienceAnchor:t,external:n,children:i,onClick:o,onNavigationHandler:s,rounding:c="pill",tabIndex:d=0,url:u}=this.props,{active:p,focused:m,hovered:x}=this.state,g="pill"===c?2:1,f="circle"===c?48:"";return(0,l.jsx)(h,{anchorElementRef:this.anchorElementRef,experienceAnchor:t,children:(0,l.jsx)(r.iP,{accessibilityLabel:e,href:u,onBlur:this.handleBlur,onFocus:this.handleFocus,onMouseDown:this.handleMouseDown,onMouseEnter:this.handleMouseEnter,onMouseLeave:this.handleMouseLeave,onMouseUp:this.handleMouseUp,onTap:({event:e,dangerouslyDisableOnNavigation:t})=>{t(),null==o||o(e),s({event:e})},rel:n?"nofollow":"none",ref:this.anchorElementRef,role:"link",rounding:c,tabIndex:d,children:(0,l.jsx)(a,{active:p,focused:m,justBgFocused:!0,hovered:x,rounding:c,children:(0,l.jsx)(r.xu,{alignItems:"center",display:"flex",direction:"pill"===c?void 0:"column",height:f,justifyContent:"center",padding:g,position:"relative",rounding:c,width:f,children:i})})})})}}function m(e){const t=(0,c.Z)({href:e.url,onHistoryChange:d.Jd});return(0,l.jsx)(p,{...e,onNavigationHandler:t})}},486840:(e,t,n)=>{n.d(t,{Z:()=>u});var i=n(667294),o=n(231486),r=n(172071),l=n(6637),s=n(226198);function a(e,t){o.t8(s.L9,"allowed",8760),t&&t(),r.Z.increment("auth.web.notifications.allowed",1);let n=e.subscriptionId;if(!n){const t=e.endpoint.split("/");n=t[t.length-1]}return l.ZP.create("WebPushDeviceResource",{}).callGet({showError:!1}).then((t=>{var i,o;const r=null!==(i=null===(o=t.resource_response)||void 0===o?void 0:o.data)&&void 0!==i?i:{};if(!(n in r)){const t={registration_id:n,subscription_endpoint:e.endpoint};return l.ZP.create("WebPushDeviceResource",t).callCreate()}}))}var c=n(19121);function d(e,t){var n;if(r.Z.increment("auth.web.notifications.viewed",1),"undefined"!=typeof navigator&&"serviceWorker"in navigator)return null===(n=navigator.serviceWorker)||void 0===n?void 0:n.ready.then((n=>{var i;null==n||null===(i=n.pushManager)||void 0===i||i.subscribe({userVisibleOnly:!0}).then((t=>a(t,e)),(n=>{"Notification"in window&&"denied"!==Notification.permission?(o.t8(s.L9,"dismissed",8760),t&&t(),r.Z.increment("auth.web.notifications.dismissed",1)):(o.t8(s.L9,"denied",8760),e&&e(),r.Z.increment("auth.web.notifications.denied",1))}))})).catch((()=>{}))}function u(){const{isAuth:e,isLimitedLogin:t}=(0,c.Z)();return(0,i.useEffect)((()=>{"serviceWorker"in navigator&&void 0!==navigator.serviceWorker&&navigator.serviceWorker.register("/sw.js").then((()=>{var n;t&&o.t8(s.L9,"denied",8760),e||o.t8(s.L9,"denied",8760),"showNotification"in ServiceWorkerRegistration.prototype||o.t8(s.L9,"denied",8760),"Notification"in window&&"denied"!==Notification.permission||o.t8(s.L9,"denied",8760),"PushManager"in window||o.t8(s.L9,"denied",8760),null===(n=navigator.serviceWorker)||void 0===n||n.ready.then((e=>e.pushManager.getSubscription())).then((e=>{if(e)return a(e);throw o.t8(s.L9,"none",8760),new Error})).catch((e=>{}))})).catch((()=>{}))}),[e,t]),d}}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/40605-a807ecaaeb8e9eab.mjs.map
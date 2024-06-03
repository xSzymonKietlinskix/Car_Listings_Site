(()=>{"use strict";window.wp.i18n;const t=window.wp.blocks;function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},e(t)}function a(t,a,s){return o=function(t,a){if("object"!=e(t)||!t)return t;var s=t[Symbol.toPrimitive];if(void 0!==s){var o=s.call(t,"string");if("object"!=e(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(a),(a="symbol"==e(o)?o:String(o))in t?Object.defineProperty(t,a,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[a]=s,t;var o}const s=window.React,o=window.wp.element,n=window.wp.blockEditor,r=window.wp.components,i=window.wp.primitives,l=(0,s.createElement)(i.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,s.createElement)(i.Path,{fillRule:"evenodd",d:"M6.863 13.644L5 13.25h-.5a.5.5 0 01-.5-.5v-3a.5.5 0 01.5-.5H5L18 6.5h2V16h-2l-3.854-.815.026.008a3.75 3.75 0 01-7.31-1.549zm1.477.313a2.251 2.251 0 004.356.921l-4.356-.921zm-2.84-3.28L18.157 8h.343v6.5h-.343L5.5 11.823v-1.146z",clipRule:"evenodd"}));window.wp.serverSideRender,o.Component,window.wp.compose,o.Component,o.Component;class c extends o.Component{constructor(t){super(t),a(this,"onChangeColor",(t=>{this.props.setAttributes({color:t})})),a(this,"onFormStyleChange",(t=>{this.props.setAttributes({form_style:t})})),a(this,"onSelectPostType",(t=>{this.props.setAttributes({post_type:t,form_scheme:""})})),a(this,"onSelectFormScheme",(t=>{this.props.setAttributes({form_scheme:t})})),a(this,"onCustomizeQuery",((t,e)=>{var a={...this.props.attributes.query};0===e.length?delete a[t]:a[t]=e,this.props.setAttributes({query:a})})),a(this,"getQueryParam",(t=>void 0===this.props.attributes.query[t]?"":this.props.attributes.query[t])),a(this,"getAvailablePostTypes",(()=>{var t=[{label:"",value:""}];return this.state.post_types.forEach((function(e,a){t.push({label:e.label,value:e.post_type})})),t})),a(this,"getCurrentPostType",(()=>this.state.post_types[0])),a(this,"getSelectedFormScheme",(t=>{if(""===this.props.attributes.form_scheme)return null;for(var e=this.getCurrentPostType(),a=0;a<e.form_schemes[t].length;a++)if(e.form_schemes[t][a].name===this.props.attributes.form_scheme)return e.form_schemes[t][a];return null})),a(this,"getSelectedFormSchemeData",(t=>{var e=this.getSelectedFormScheme(t);return null===e?[]:e.data})),a(this,"getAvailableSearchForms",(t=>{var e=this.getCurrentPostType();return[{label:"",value:""}].concat(e.form_schemes.search)})),a(this,"getCurrentPostType",(()=>this.state.post_types[0])),a(this,"getSelectedFormScheme",(t=>{if(""===this.props.attributes.form_scheme)return null;for(var e=this.getCurrentPostType(),a=0;a<e.form_schemes[t].length;a++)if(e.form_schemes[t][a].name===this.props.attributes.form_scheme)return e.form_schemes[t][a];return null})),a(this,"getSelectedFormSchemeData",(t=>{for(var e=this.getCurrentPostType(),a=[],s=0;s<e.form_schemes[t].length;s++)Object.entries(e.form_schemes[t][s].data).map((([t,e])=>{a.push(e)})),(a=this.getUnique(a,"name")).sort(((t,e)=>t.label>e.label?1:-1));return a})),a(this,"getUnique",((t,e)=>{if("function"!=typeof e){const t=e;e=function(e){return e[t]}}return Array.from(t.reduce((function(t,a){const s=e(a);return t.has(s)||t.set(s,a),t}),new Map).values())})),a(this,"getAvailableSearchForms",(t=>{var e=this.getCurrentPostType();return[{label:"",value:""}].concat(e.form_schemes.search)})),a(this,"getAdvertsListData",(()=>{for(var t=this.getCurrentPostType(),e={builtin:{label:"Builtin",data:t.form_schemes_default.publish},meta:{label:"Custom Fields",data:this.getSelectedFormSchemeData("publish")},taxonomies:{label:"Taxonomies",data:[]}},a=0;a<t.taxonomies.length;a++)e.taxonomies.data.push({name:"taxonomy__"+t.taxonomies[a].name,label:t.taxonomies[a].label});return e})),a(this,"onChangeLayout",(t=>{this.props.setAttributes({layout:t})})),a(this,"setChecked",((t,e)=>{var a=[];this.props.attributes.contact.map((t=>{a.push(t)}));var s=a.indexOf(e);t&&-1===s?a.push(e):!t&&s>=0&&a.splice(s,1),this.props.setAttributes({contact:a})})),a(this,"onCustomContactToggle",(t=>{this.props.setAttributes({custom_contact:t})})),a(this,"onRequiresChange",(t=>{this.props.setAttributes({requires:t})})),a(this,"onRequiresErrorChange",(t=>{this.props.setAttributes({requires_error:t})})),a(this,"initVisuals",(()=>{const{post_type:t}=this.props.attributes;""!==t&&this.setState({initiated:!0})})),a(this,"resetVisuals",(()=>{this.props.setAttributes({post_type:""}),this.setState({initiated:!1,loading:!0}),this.runApiFetchForms()})),a(this,"Move",((t,e)=>{var a=this.props.attributes.contact.slice(0),s=a.indexOf(e),o=s;"left"==t&&s>0&&o--,"right"==t&&s<a.length-1&&o++,a=this.arrayMove(a,s,o),this.props.setAttributes({contact:a})})),this.state={initiated:!1,post_types:[],loading:!0,show_instructions:!1},this.initVisuals()}componentDidMount(){this.runApiFetchForms()}runApiFetchForms(){wp.apiFetch({path:"wpadverts/v1/classifieds-types"}).then((t=>{this.setState({post_types:t.data,loading:!1,initiated:""!==this.props.attributes.post_type})}))}getDataOptions(){var t=this.getAdvertsListData(),e=0,a=[{label:"Builtin",options:[]},{label:"Patterns",options:[]},{label:"Custom Fields",options:[]},{label:"Taxonomies",options:[]}];for(e=0;e<t.builtin.data.length;e++)a[t.builtin.data[e].name.startsWith("pattern__")?1:0].options.push({value:t.builtin.data[e].name,label:t.builtin.data[e].label});for(e=0;e<t.meta.data.length;e++)a[2].options.push({value:t.meta.data[e].name,label:t.meta.data[e].label});for(e=0;e<t.taxonomies.data.length;e++)a[3].options.push({value:t.taxonomies.data[e].name,label:t.taxonomies.data[e].label});return a}contactMethodChecked(t){return this.props.attributes.contact.includes(t.name)}getContactMethodByName(t){var e=null;return this.getCurrentPostType().contact.map((a=>{a.name==t&&(e=a)})),e}arrayMove(t,e,a){if(a>=t.length)for(var s=a-t.length+1;s--;)t.push(void 0);return t.splice(a,0,t.splice(e,1)[0]),t}renderInit(){const{post_type:t}=this.props.attributes,{show_instructions:e}=this.state;return(0,s.createElement)(s.Fragment,null,(0,s.createElement)(r.Placeholder,{icon:l,label:"Classifieds Single Contact",instructions:"Select custom post type and search form scheme to continue.",isColumnLayout:"true"},!0===this.state.loading?(0,s.createElement)(r.Spinner,null):(0,s.createElement)(s.Fragment,null,(0,s.createElement)(r.SelectControl,{label:"Custom Post Type",labelPosition:"top",value:t,options:this.getAvailablePostTypes(),onChange:this.onSelectPostType,style:{lineHeight:"1rem"}}),(0,s.createElement)("div",null,(0,s.createElement)(r.Button,{variant:"primary",disabled:""===t,onClick:this.initVisuals},"Apply")))))}render(){const{className:t,attributes:e}=this.props,{custom_contact:a,contact:o,requires:i,requires_error:l}=e;[].join(" ");const{show_instructions:c}=this.state;var p=[];const u=/(<([^>]+)>)/gi;return!0===this.state.initiated&&(!1===a?this.getCurrentPostType().contact.map((t=>{!0===t.is_active&&p.push(t)})):o.map((t=>{var e=this.getContactMethodByName(t);e&&p.push(e)}))),(0,s.createElement)(s.Fragment,null,!0===this.state.initiated?(0,s.createElement)(s.Fragment,null,(0,s.createElement)(n.InspectorControls,null,(0,s.createElement)(r.PanelBody,{title:"Contact Methods"},(0,s.createElement)(r.ToggleControl,{label:"I want to select available contact options",checked:a,onChange:this.onCustomContactToggle}),!0===a&&(0,s.createElement)(s.Fragment,null,this.getCurrentPostType().contact.map((t=>(0,s.createElement)(r.CheckboxControl,{label:t.label,value:t.name,checked:this.contactMethodChecked(t),onChange:e=>this.setChecked(e,t.name,o)}))))),(0,s.createElement)(r.PanelBody,{title:"Access Control"},(0,s.createElement)(r.TextControl,{label:"Required Capability",value:i,onChange:this.onRequiresChange,help:"Capability required to see contact options. By default anyone can see it."}),""!==i&&(0,s.createElement)(r.TextareaControl,{label:"Error Message",help:"Cusom message for users who are not allowed to contact options (leave blank otherwise).",value:l,onChange:this.onRequiresErrorChange}))),(0,s.createElement)(n.BlockControls,null,(0,s.createElement)(r.Toolbar,{controls:[{icon:"controls-repeat",title:"Reset post type and form scheme",onClick:this.resetVisuals}]})),(0,s.createElement)("div",{class:"wpa-cpt-contact-details atw-my-6 atw--mx-1"},0===p.length&&(0,s.createElement)("div",{class:"atw-block atw-bg-gray-100 atw-px-4 atw-py-2 atw-rounded-lg atw-text-sm atw-text-center"},(0,s.createElement)("span",{class:"fas fa-warning atw-not-italic atw-text-gray-400 atw-mr-2"}),(0,s.createElement)("span",{class:"atw-text-xs atw-text-gray-600"},"No contact options selected.")),(0,s.createElement)("div",{class:"atw-relative atw-flex atw-flex-col md:atw-flex-row --atw--mx-1"},(0,s.createElement)("div",{class:"atw-relative atw-flex atw-flex-1 atw-flex-col md:atw-flex-row md:atw-flex-none"},p.map(((t,e)=>(0,s.createElement)("div",{class:"atw-flex-auto atw-mx-1 atw-mb-3 atw-relative"},(0,s.createElement)(r.Disabled,null,(0,s.createElement)("button",{name:"",value:"",type:"button",class:"wpa-btn-primary wpadverts-show-contact-form  atw-flex hover:atw-bg-none atw-bg-none atw-w-full atw-text-base atw-outline-none atw-border-solid atw-font-semibold atw-px-6 atw-py-2 atw-rounded atw-border atw-leading-loose"},(0,s.createElement)("div",{class:"atw-flex-grow"},(0,s.createElement)("span",{class:"atw-inline md:atw-inline atw-px-0.5"},(0,s.createElement)("span",{class:"atw-text-base md:atw-text-base"},(0,s.createElement)("span",{class:t.button.icon}))),(0,s.createElement)("span",{class:"atw-inline md:atw-inline atw-px-0.5"},t.button.text.replace(u,""))))),!0===a&&e>0&&(0,s.createElement)("span",{title:"Move Left",onClick:e=>this.Move("left",t.name),class:"atw-absolute atw-flex atw-items-center atw-cursor-pointer atw-px-2 atw-inset-y-0 atw-top-0 atw-left-0 hover:atw-bg-gray-50"},(0,s.createElement)("span",{class:"atw-not-italic fa-solid fa-chevron-left"})),!0===a&&e<p.length-1&&(0,s.createElement)("span",{title:"Move Right",onClick:e=>this.Move("right",t.name),class:"atw-absolute atw-flex atw-items-center atw-cursor-pointer atw-px-2 atw-inset-y-0 atw-top-0 atw-right-0 hover:atw-bg-gray-50"},(0,s.createElement)("span",{class:"atw-not-italic fa-solid fa-chevron-right"}))))))))):(0,s.createElement)(s.Fragment,null,this.renderInit()))}}const p=c,u=JSON.parse('{"name":"wpadverts/single-contact","textdomain":"wpadverts","apiVersion":1,"title":"Classifieds Single Contact","icon":"megaphone","category":"wpadverts","example":{},"attributes":{"post_type":{"type":"string","default":""},"custom_contact":{"type":"boolean","default":false},"contact":{"type":"array","default":["contact-form"]},"requires":{"type":"string","default":""},"requires_error":{"type":"string","default":""}}}');(0,t.registerBlockType)(u,{edit:p,save:({attributes:t})=>null})})();
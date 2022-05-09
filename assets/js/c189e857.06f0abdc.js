"use strict";(self.webpackChunkdocs_rancherdesktop_io=self.webpackChunkdocs_rancherdesktop_io||[]).push([[183],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return m}});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(t),m=i,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||a;return t?r.createElement(f,o(o({ref:n},c),{},{components:t})):r.createElement(f,o({ref:n},c))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var u=2;u<a;u++)o[u]=t[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},8215:function(e,n,t){var r=t(7294);n.Z=function(e){var n=e.children,t=e.hidden,i=e.className;return r.createElement("div",{role:"tabpanel",hidden:t,className:i},n)}},6396:function(e,n,t){t.d(n,{Z:function(){return d}});var r=t(7462),i=t(7294),a=t(2389),o=t(9443);var l=function(){var e=(0,i.useContext)(o.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},s=t(3616),u=t(6010),c="tabItem_vU9c";function p(e){var n,t,a,o=e.lazy,p=e.block,d=e.defaultValue,m=e.values,f=e.groupId,v=e.className,h=i.Children.map(e.children,(function(e){if((0,i.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),k=null!=m?m:h.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),b=(0,s.lx)(k,(function(e,n){return e.value===n.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===d?d:null!=(n=null!=d?d:null==(t=h.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(a=h[0])?void 0:a.props.value;if(null!==g&&!k.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+k.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=l(),w=y.tabGroupChoices,N=y.setTabGroupChoices,x=(0,i.useState)(g),O=x[0],C=x[1],E=[],T=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var D=w[f];null!=D&&D!==O&&k.some((function(e){return e.value===D}))&&C(D)}var S=function(e){var n=e.currentTarget,t=E.indexOf(n),r=k[t].value;r!==O&&(T(n),C(r),null!=f&&N(f,r))},P=function(e){var n,t=null;switch(e.key){case"ArrowRight":var r=E.indexOf(e.currentTarget)+1;t=E[r]||E[0];break;case"ArrowLeft":var i=E.indexOf(e.currentTarget)-1;t=E[i]||E[E.length-1]}null==(n=t)||n.focus()};return i.createElement("div",{className:"tabs-container"},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":p},v)},k.map((function(e){var n=e.value,t=e.label,a=e.attributes;return i.createElement("li",(0,r.Z)({role:"tab",tabIndex:O===n?0:-1,"aria-selected":O===n,key:n,ref:function(e){return E.push(e)},onKeyDown:P,onFocus:S,onClick:S},a,{className:(0,u.Z)("tabs__item",c,null==a?void 0:a.className,{"tabs__item--active":O===n})}),null!=t?t:n)}))),o?(0,i.cloneElement)(h.filter((function(e){return e.props.value===O}))[0],{className:"margin-vert--md"}):i.createElement("div",{className:"margin-vert--md"},h.map((function(e,n){return(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==O})}))))}function d(e){var n=(0,a.Z)();return i.createElement(p,(0,r.Z)({key:String(n)},e))}},8959:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return u},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return d},default:function(){return f}});var r=t(7462),i=t(3366),a=(t(7294),t(3905)),o=t(6396),l=t(8215),s=["components"],u={title:"Provisioning Scripts"},c=void 0,p={unversionedId:"how-to-guides/provisioning-scripts",id:"how-to-guides/provisioning-scripts",title:"Provisioning Scripts",description:"Provisioning scripts can be used to override some of Rancher Desktop's internal processes. For example, scripts can be used to provide certain command line parameters to K3s, add additional mounts, increase ulimit value etc. This guide will explain how to set up your provisioning scripts for macOS, Linux, and Windows.",source:"@site/docs/how-to-guides/provisioning-scripts.md",sourceDirName:"how-to-guides",slug:"/how-to-guides/provisioning-scripts",permalink:"/how-to-guides/provisioning-scripts",editUrl:"https://github.com/rancher-sandbox/docs.rancherdesktop.io/edit/main/docs/how-to-guides/provisioning-scripts.md",tags:[],version:"current",frontMatter:{title:"Provisioning Scripts"},sidebar:"tutorialSidebar",previous:{title:"Skaffold and Rancher Desktop",permalink:"/how-to-guides/skaffold-and-rancher-desktop"},next:{title:"Architecture",permalink:"/references/architecture"}},d=[{value:"macOS &amp; Linux",id:"macos--linux",children:[],level:2},{value:"Windows",id:"windows",children:[],level:2}],m={toc:d};function f(e){var n=e.components,t=(0,i.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Provisioning scripts can be used to override some of Rancher Desktop's internal processes. For example, scripts can be used to provide certain command line parameters to K3s, add additional mounts, increase ulimit value etc. This guide will explain how to set up your provisioning scripts for macOS, Linux, and Windows."),(0,a.kt)("h2",{id:"macos--linux"},"macOS & Linux"),(0,a.kt)("p",null,"On macOS and Linux, you can use lima override.yaml to write provisioning scripts. "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Create ",(0,a.kt)("inlineCode",{parentName:"li"},"override.yaml")," file at below path")),(0,a.kt)(o.Z,{groupId:"os",mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"macOS",default:!0,mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"~/Library/Application Support/rancher-desktop/lima/_config/override.yaml\n"))),(0,a.kt)(l.Z,{value:"Linux",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"~/.local/share/rancher-desktop/lima/_config/override.yaml\n")))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Write a provisioning script in the ",(0,a.kt)("inlineCode",{parentName:"li"},"override.yaml")," file created in the previous step. For example, you can use the below script to increase ulimit for containers.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"provision:\n- mode: system\n  script: |\n    #!/bin/sh\n    cat <<'EOF' > /etc/security/limits.d/rancher-desktop.conf\n    * soft     nofile         82920\n    * hard     nofile         82920\n    EOF\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"You can also use ",(0,a.kt)("inlineCode",{parentName:"li"},"override.yaml")," to override/modify a lima configuration setting, for example, to create additional mounts as shown below.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"mounts:\n  - location: /some/path \n    writable: true\n")),(0,a.kt)("h2",{id:"windows"},"Windows"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Caution:")," You can only utilize these provisioning scripts for Rancher Desktop, version 1.1.0 or later, on Windows."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Run Rancher Desktop at least once to allow it to create its configuration.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Open the ",(0,a.kt)("inlineCode",{parentName:"p"},"%AppData%\\rancher-desktop\\provisioning")," directory. An example of the full path: ",(0,a.kt)("inlineCode",{parentName:"p"},"C:\\Users\\Joe\\AppData\\Roaming\\rancher-desktop\\provisioning"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Note that any files with a file extension of ",(0,a.kt)("inlineCode",{parentName:"p"},".start"),", such as ",(0,a.kt)("inlineCode",{parentName:"p"},"k3s-overrides.start"),", can be executed when ",(0,a.kt)("em",{parentName:"p"},"Rancher Desktop starts its Kubernetes backend")," (if enabled). Such files will run within the Rancher Desktop WSL context."))),(0,a.kt)("p",null,"Example flow for ",(0,a.kt)("inlineCode",{parentName:"p"},".start")," files:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Rancher Desktop internal setup"),(0,a.kt)("li",{parentName:"ul"},"Run provisioning scripts"),(0,a.kt)("li",{parentName:"ul"},"Enable ",(0,a.kt)("inlineCode",{parentName:"li"},"dockerd")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"containerd")," in the UI"),(0,a.kt)("li",{parentName:"ul"},"Kubernetes (K3s)")),(0,a.kt)("p",null,"As an example, using ",(0,a.kt)("inlineCode",{parentName:"p"},"%AppData%\\rancher-desktop\\provisioning\\insecure-registry.start")," will allow ",(0,a.kt)("inlineCode",{parentName:"p"},"nerdctl")," to use insecure registries by default:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"#!/bin/sh\n\nmkdir -p /etc/nerdctl\ncat >  /etc/nerdctl/nerdctl.toml <<EOF\ninsecure_registry = true\nEOF\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Note that files with a file extension of ",(0,a.kt)("inlineCode",{parentName:"li"},".stop"),", such as ",(0,a.kt)("inlineCode",{parentName:"li"},"wipe-data.stop"),", can be executed ",(0,a.kt)("em",{parentName:"li"},"after Rancher Desktop shuts down its Kubernetes backend")," (if enabled). Such files will run within the same Rancher Desktop WSL context.")),(0,a.kt)("p",null,"Example flow for ",(0,a.kt)("inlineCode",{parentName:"p"},".stop")," files:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Stop ",(0,a.kt)("inlineCode",{parentName:"li"},"k3s"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"dockerd")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"containerd")),(0,a.kt)("li",{parentName:"ul"},"Run deprovisioning scripts")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Important to note:")," Scripts need to be saved with Unix line endings; line-ending conversion is not done; and files with DOS line endings may produce unexpected results. There are some limitations to the things you can change using provisioning scripts. For example, you cannot change the hard ulimits on WSL2 using provisioning scripts. Please use provisioning scripts with caution and feel free to reach out to the Rancher Desktop team on Slack/Github if you have a specific question about provisioning scripts."))}f.isMDXComponent=!0}}]);
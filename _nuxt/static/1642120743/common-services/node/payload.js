__NUXT_JSONP__("/common-services/node", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab){return {data:[{document:{slug:D,description:"",title:"Node",position:6.3,category:"Common Services",toc:[{id:J,depth:u,text:K},{id:L,depth:u,text:M},{id:N,depth:u,text:"Base: docker-compose.yml"},{id:O,depth:u,text:"Development: docker-compose.dev.yml"},{id:P,depth:Q,text:R},{id:E,depth:Q,text:S},{id:w,depth:u,text:T},{id:U,depth:u,text:V}],body:{type:"root",children:[{type:b,tag:v,props:{id:J},children:[{type:b,tag:k,props:{href:"#about",ariaHidden:o,tabIndex:p},children:[{type:b,tag:c,props:{className:[q,r]},children:[]}]},{type:a,value:K}]},{type:a,value:f},{type:b,tag:n,props:{},children:[{type:b,tag:k,props:{href:"https:\u002F\u002Fnodejs.org\u002F",rel:[F,G,H],target:I},children:[{type:a,value:"Node.js"}]},{type:a,value:" is an extremely popular JavaScript runtime that is used by many JavaScript frameworks."}]},{type:a,value:f},{type:b,tag:v,props:{id:L},children:[{type:b,tag:k,props:{href:"#installation--basic-usage",ariaHidden:o,tabIndex:p},children:[{type:b,tag:c,props:{className:[q,r]},children:[]}]},{type:a,value:M}]},{type:a,value:f},{type:b,tag:n,props:{},children:[{type:a,value:"Please see the "},{type:b,tag:"nuxt-link",props:{to:"\u002Fgetting-started\u002Fintroduction"},children:[{type:a,value:"Introduction & Concepts"}]},{type:a,value:", then reference the examples below on adding this service to your project."}]},{type:a,value:f},{type:b,tag:v,props:{id:N},children:[{type:b,tag:k,props:{href:"#base-docker-composeyml",ariaHidden:o,tabIndex:p},children:[{type:b,tag:c,props:{className:[q,r]},children:[]}]},{type:a,value:"Base: "},{type:b,tag:j,props:{},children:[{type:a,value:W}]}]},{type:a,value:f},{type:b,tag:n,props:{},children:[{type:a,value:"Add this section to your main "},{type:b,tag:j,props:{},children:[{type:a,value:W}]},{type:a,value:" file, which will act as a \"base\". All environments will reference this file, so you can simply manage everything from one location."}]},{type:a,value:f},{type:b,tag:x,props:{className:[y]},children:[{type:b,tag:z,props:{className:[A,B]},children:[{type:b,tag:j,props:{},children:[{type:a,value:X},{type:b,tag:c,props:{className:[d,h,i]},children:[{type:a,value:D}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:C},{type:b,tag:c,props:{className:[d,h,i]},children:[{type:a,value:"image"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:" node"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:"lts\n    "},{type:b,tag:c,props:{className:[d,h,i]},children:[{type:a,value:"working_dir"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:" \u002Fusr\u002Fsrc\u002Fapp\n"}]}]}]},{type:a,value:f},{type:b,tag:n,props:{},children:[{type:b,tag:k,props:{href:"https:\u002F\u002Fhub.docker.com\u002F_\u002Fnode\u002F",rel:[F,G,H],target:I},children:[{type:a,value:"See the official Node DockerHub page"}]},{type:a,value:" for specific version references."}]},{type:a,value:f},{type:b,tag:v,props:{id:O},children:[{type:b,tag:k,props:{href:"#development-docker-composedevyml",ariaHidden:o,tabIndex:p},children:[{type:b,tag:c,props:{className:[q,r]},children:[]}]},{type:a,value:"Development: "},{type:b,tag:j,props:{},children:[{type:a,value:"docker-compose.dev.yml"}]}]},{type:a,value:f},{type:b,tag:x,props:{className:[y]},children:[{type:b,tag:z,props:{className:[A,B]},children:[{type:b,tag:j,props:{},children:[{type:a,value:X},{type:b,tag:c,props:{className:[d,h,i]},children:[{type:a,value:D}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:C},{type:b,tag:c,props:{className:[d,h,i]},children:[{type:a,value:"command"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:"\"yarn dev\""}]},{type:a,value:C},{type:b,tag:c,props:{className:[d,h,i]},children:[{type:a,value:"volumes"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:s},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:" ."},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:"\u002Fusr\u002Fsrc\u002Fapp"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:"cached\n    "},{type:b,tag:c,props:{className:[d,h,i]},children:[{type:a,value:w}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:" \n      "},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:" web"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:"dev\n    "},{type:b,tag:c,props:{className:[d,"comment"]},children:[{type:a,value:"# Remove the ports if you are using something like Trafeik or Caddy (recommended)"}]},{type:a,value:C},{type:b,tag:c,props:{className:[d,h,i]},children:[{type:a,value:E}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:s},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,h,i]},children:[{type:a,value:"target"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,Y]},children:[{type:a,value:Z}]},{type:a,value:_},{type:b,tag:c,props:{className:[d,h,i]},children:[{type:a,value:"published"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,Y]},children:[{type:a,value:Z}]},{type:a,value:_},{type:b,tag:c,props:{className:[d,h,i]},children:[{type:a,value:"mode"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:" host\n"}]}]}]},{type:a,value:f},{type:b,tag:$,props:{id:P},children:[{type:b,tag:k,props:{href:"#commands",ariaHidden:o,tabIndex:p},children:[{type:b,tag:c,props:{className:[q,r]},children:[]}]},{type:a,value:R}]},{type:a,value:f},{type:b,tag:n,props:{},children:[{type:a,value:"You can see the \"command:\" calls to run "},{type:b,tag:j,props:{},children:[{type:a,value:"yarn dev"}]},{type:a,value:". This may need to be changed, depending on your project (and if you are using "},{type:b,tag:j,props:{},children:[{type:a,value:"npm"}]},{type:a,value:" or "},{type:b,tag:j,props:{},children:[{type:a,value:"yarn"}]},{type:a,value:")."}]},{type:a,value:f},{type:b,tag:$,props:{id:E},children:[{type:b,tag:k,props:{href:"#ports",ariaHidden:o,tabIndex:p},children:[{type:b,tag:c,props:{className:[q,r]},children:[]}]},{type:a,value:S}]},{type:a,value:f},{type:b,tag:n,props:{},children:[{type:a,value:"The example above directly exposes the Node server on port 3000. You'll likely never do that in production. If you use something like Traefik, you would replace the ports with "},{type:b,tag:j,props:{},children:[{type:a,value:aa}]},{type:a,value:", like this:"}]},{type:a,value:f},{type:b,tag:x,props:{className:[y]},children:[{type:b,tag:z,props:{className:[A,B]},children:[{type:b,tag:j,props:{},children:[{type:a,value:"    "},{type:b,tag:c,props:{className:[d,h,i]},children:[{type:a,value:aa}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:s},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:"\"traefik.enable=true\""}]},{type:a,value:s},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:"\"traefik.http.routers.mynodeapp.rule=Host(`mynodeapp.dev.test`)\""}]},{type:a,value:s},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:"\"traefik.http.routers.mynodeapp.entrypoints=websecure\""}]},{type:a,value:s},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:"\"traefik.http.routers.mynodeapp.tls=true\""}]},{type:a,value:s},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:"\"traefik.http.services.mynodeapp.loadbalancer.server.port=3000\""}]},{type:a,value:s},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:"\"traefik.http.services.mynodeapp.loadbalancer.server.scheme=http\""}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:n,props:{},children:[{type:a,value:"The "},{type:b,tag:j,props:{},children:[{type:a,value:"label"}]},{type:a,value:" adds certain metadata to your container, telling Traefik to route \"mynodeapp.dev.test\" to port 3000 on your node container. All web traffic will enter through Traefik first, then to your Node container -- which is a more realistic scenario to what you can run in production."}]},{type:a,value:f},{type:b,tag:v,props:{id:w},children:[{type:b,tag:k,props:{href:"#networks",ariaHidden:o,tabIndex:p},children:[{type:b,tag:c,props:{className:[q,r]},children:[]}]},{type:a,value:T}]},{type:a,value:f},{type:b,tag:n,props:{},children:[{type:a,value:"If you copy and paste from above, be sure to define your network at the bottom of the file."}]},{type:a,value:f},{type:b,tag:x,props:{className:[y]},children:[{type:b,tag:z,props:{className:[A,B]},children:[{type:b,tag:j,props:{},children:[{type:b,tag:c,props:{className:[d,h,i]},children:[{type:a,value:w}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:"\n  "},{type:b,tag:c,props:{className:[d,h,i]},children:[{type:a,value:"web-dev"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:v,props:{id:U},children:[{type:b,tag:k,props:{href:"#real-life-example",ariaHidden:o,tabIndex:p},children:[{type:b,tag:c,props:{className:[q,r]},children:[]}]},{type:a,value:V}]},{type:a,value:f},{type:b,tag:n,props:{},children:[{type:a,value:"See our open source project called "},{type:b,tag:k,props:{href:"https:\u002F\u002Fgithub.com\u002Fserversideup\u002Ffinancial-freedom",rel:[F,G,H],target:I},children:[{type:a,value:"Financial Freedom"}]},{type:a,value:" for more examples."}]}]},dir:"\u002Fen\u002Fcommon-services",path:"\u002Fen\u002Fcommon-services\u002Fnode",extension:".md",createdAt:ab,updatedAt:ab,to:"\u002Fcommon-services\u002Fnode"},prev:{title:"MySQL",path:"\u002Fen\u002Fcommon-services\u002Fmysql",to:"\u002Fcommon-services\u002Fmysql"},next:{title:"PHP",path:"\u002Fen\u002Fcommon-services\u002Fphp",to:"\u002Fcommon-services\u002Fphp"}}],fetch:{},mutations:[]}}("text","element","span","token","punctuation","\n",":","key","atrule","code","a"," ","-","p","true",-1,"icon","icon-link","\n      ","string",2,"h2","networks","div","nuxt-content-highlight","pre","language-yaml","line-numbers","\n    ","node","ports","nofollow","noopener","noreferrer","_blank","about","About","installation--basic-usage","Installation & Basic Usage","base-docker-composeyml","development-docker-composedevyml","commands",3,"Commands","Ports","Networks","real-life-example","Real-life example","docker-compose.yml","  ","number","3000","\n        ","h3","labels","2022-01-14T00:38:10.013Z")));
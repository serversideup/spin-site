__NUXT_JSONP__("/common-services/mariadb", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_){return {data:[{document:{slug:C,description:"",title:L,position:6,category:"Common Services",toc:[{id:M,depth:t,text:N},{id:O,depth:t,text:P},{id:Q,depth:t,text:"Base: docker-compose.yml"},{id:R,depth:t,text:"Development: docker-compose.dev.yml"},{id:S,depth:3,text:T},{id:w,depth:t,text:U},{id:V,depth:t,text:W}],body:{type:"root",children:[{type:b,tag:u,props:{id:M},children:[{type:b,tag:j,props:{href:"#about",ariaHidden:m,tabIndex:n},children:[{type:b,tag:c,props:{className:[o,p]},children:[]}]},{type:a,value:N}]},{type:a,value:f},{type:b,tag:q,props:{},children:[{type:b,tag:j,props:{href:"https:\u002F\u002Fmariadb.org\u002F",rel:[D,E,F],target:G},children:[{type:a,value:L}]},{type:a,value:" is a very popular open source relational database. It is a fork of MySQL and is run by some of the original developers of MySQL before Oracle acquired the MySQL project."}]},{type:a,value:f},{type:b,tag:u,props:{id:O},children:[{type:b,tag:j,props:{href:"#installation--basic-usage",ariaHidden:m,tabIndex:n},children:[{type:b,tag:c,props:{className:[o,p]},children:[]}]},{type:a,value:P}]},{type:a,value:f},{type:b,tag:q,props:{},children:[{type:a,value:"Please see the "},{type:b,tag:"nuxt-link",props:{to:"\u002Fgetting-started\u002Fintroduction"},children:[{type:a,value:"Introduction & Concepts"}]},{type:a,value:", then reference the examples below on adding this service to your project."}]},{type:a,value:f},{type:b,tag:u,props:{id:Q},children:[{type:b,tag:j,props:{href:"#base-docker-composeyml",ariaHidden:m,tabIndex:n},children:[{type:b,tag:c,props:{className:[o,p]},children:[]}]},{type:a,value:"Base: "},{type:b,tag:l,props:{},children:[{type:a,value:X}]}]},{type:a,value:f},{type:b,tag:q,props:{},children:[{type:a,value:"Add this section to your main "},{type:b,tag:l,props:{},children:[{type:a,value:X}]},{type:a,value:" file, which will act as a \"base\". All environments will reference this file, so you can simply manage everything from one location."}]},{type:a,value:f},{type:b,tag:x,props:{className:[y]},children:[{type:b,tag:z,props:{className:[A,H]},children:[{type:b,tag:l,props:{},children:[{type:a,value:"  "},{type:b,tag:c,props:{className:[d,h,i]},children:[{type:a,value:C}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:I},{type:b,tag:c,props:{className:[d,h,i]},children:[{type:a,value:"image"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:" mariadb"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,J]},children:[{type:a,value:"10.7"}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:q,props:{},children:[{type:b,tag:j,props:{href:"https:\u002F\u002Fhub.docker.com\u002F_\u002Fmariadb?tab=description",rel:[D,E,F],target:G},children:[{type:a,value:"See the official MariaDB DockerHub page"}]},{type:a,value:" for specific version references."}]},{type:a,value:f},{type:b,tag:u,props:{id:R},children:[{type:b,tag:j,props:{href:"#development-docker-composedevyml",ariaHidden:m,tabIndex:n},children:[{type:b,tag:c,props:{className:[o,p]},children:[]}]},{type:a,value:"Development: "},{type:b,tag:l,props:{},children:[{type:a,value:"docker-compose.dev.yml"}]}]},{type:a,value:f},{type:b,tag:x,props:{className:[y]},children:[{type:b,tag:z,props:{className:[A,H]},children:[{type:b,tag:l,props:{},children:[{type:b,tag:c,props:{className:[d,h,i]},children:[{type:a,value:C}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:I},{type:b,tag:c,props:{className:[d,h,i]},children:[{type:a,value:w}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:v},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:" web"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:"dev\n    "},{type:b,tag:c,props:{className:[d,h,i]},children:[{type:a,value:"environment"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:r},{type:b,tag:c,props:{className:[d,h,i]},children:[{type:a,value:"MYSQL_ROOT_PASSWORD"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:s},{type:b,tag:c,props:{className:[d,B]},children:[{type:a,value:"\"rootpassword\""}]},{type:a,value:r},{type:b,tag:c,props:{className:[d,h,i]},children:[{type:a,value:"MARIADB_DATABASE"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:s},{type:b,tag:c,props:{className:[d,B]},children:[{type:a,value:"\"mydatabase\""}]},{type:a,value:r},{type:b,tag:c,props:{className:[d,h,i]},children:[{type:a,value:"MARIADB_USER"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:s},{type:b,tag:c,props:{className:[d,B]},children:[{type:a,value:"\"databaseuser\""}]},{type:a,value:r},{type:b,tag:c,props:{className:[d,h,i]},children:[{type:a,value:"MARIADB_PASSWORD"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:s},{type:b,tag:c,props:{className:[d,B]},children:[{type:a,value:"\"databasepassword\""}]},{type:a,value:I},{type:b,tag:c,props:{className:[d,h,i]},children:[{type:a,value:"volumes"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:v},{type:b,tag:c,props:{className:[d,K]},children:[{type:a,value:"# Add volume for all database files"}]},{type:a,value:v},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:" .\u002F_volumes\u002Fmysql\u002Fdatabase_data\u002F"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:"\u002Fvar\u002Flib\u002Fmysql\n      "},{type:b,tag:c,props:{className:[d,K]},children:[{type:a,value:"# Add volume for custom configurations"}]},{type:a,value:v},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:" .\u002F_volumes\u002Fmysql\u002Fconf.d\u002F"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:"\u002Fetc\u002Fmysql\u002Fconf.d\n      "},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:" .\u002F_volumes\u002Fmysql\u002Fdocker"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:Y},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:"initdb.d\u002F"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:"\u002Fdocker"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:Y},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:"initdb.d\n    "},{type:b,tag:c,props:{className:[d,h,i]},children:[{type:a,value:"ports"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:r},{type:b,tag:c,props:{className:[d,K]},children:[{type:a,value:"# Publish the port so things like Sequel Pro or TablePlus can connect"}]},{type:a,value:v},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:s},{type:b,tag:c,props:{className:[d,h,i]},children:[{type:a,value:"target"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:s},{type:b,tag:c,props:{className:[d,J]},children:[{type:a,value:Z}]},{type:a,value:r},{type:b,tag:c,props:{className:[d,h,i]},children:[{type:a,value:"published"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:s},{type:b,tag:c,props:{className:[d,J]},children:[{type:a,value:Z}]},{type:a,value:r},{type:b,tag:c,props:{className:[d,h,i]},children:[{type:a,value:"mode"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:" host\n"}]}]}]},{type:a,value:f},{type:b,tag:"h3",props:{id:S},children:[{type:b,tag:j,props:{href:"#persistent-storage",ariaHidden:m,tabIndex:n},children:[{type:b,tag:c,props:{className:[o,p]},children:[]}]},{type:a,value:T}]},{type:a,value:f},{type:b,tag:q,props:{},children:[{type:a,value:"All persistent storage will be located in a "},{type:b,tag:l,props:{},children:[{type:a,value:".\u002F_volumes\u002F"}]},{type:a,value:" folder on your project."}]},{type:a,value:f},{type:b,tag:"h4",props:{id:"add-this-to-your-gitignore"},children:[{type:b,tag:j,props:{href:"#add-this-to-your-gitignore",ariaHidden:m,tabIndex:n},children:[{type:b,tag:c,props:{className:[o,p]},children:[]}]},{type:a,value:"Add this to your "},{type:b,tag:l,props:{},children:[{type:a,value:".gitignore"}]}]},{type:a,value:f},{type:b,tag:x,props:{className:[y]},children:[{type:b,tag:z,props:{className:[A,"language-text"]},children:[{type:b,tag:l,props:{},children:[{type:a,value:"\u002F_volumes\u002F*\n"}]}]}]},{type:a,value:f},{type:b,tag:u,props:{id:w},children:[{type:b,tag:j,props:{href:"#networks",ariaHidden:m,tabIndex:n},children:[{type:b,tag:c,props:{className:[o,p]},children:[]}]},{type:a,value:U}]},{type:a,value:f},{type:b,tag:q,props:{},children:[{type:a,value:"If you copy and paste from above, be sure to define your network at the bottom of the file."}]},{type:a,value:f},{type:b,tag:x,props:{className:[y]},children:[{type:b,tag:z,props:{className:[A,H]},children:[{type:b,tag:l,props:{},children:[{type:b,tag:c,props:{className:[d,h,i]},children:[{type:a,value:w}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:"\n  "},{type:b,tag:c,props:{className:[d,h,i]},children:[{type:a,value:"web-dev"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:u,props:{id:V},children:[{type:b,tag:j,props:{href:"#real-life-example",ariaHidden:m,tabIndex:n},children:[{type:b,tag:c,props:{className:[o,p]},children:[]}]},{type:a,value:W}]},{type:a,value:f},{type:b,tag:q,props:{},children:[{type:a,value:"See our open source project called "},{type:b,tag:j,props:{href:"https:\u002F\u002Fgithub.com\u002Fserversideup\u002Ffinancial-freedom",rel:[D,E,F],target:G},children:[{type:a,value:"Financial Freedom"}]},{type:a,value:" for more examples."}]}]},dir:"\u002Fen\u002Fcommon-services",path:"\u002Fen\u002Fcommon-services\u002Fmariadb",extension:".md",createdAt:_,updatedAt:_,to:"\u002Fcommon-services\u002Fmariadb"},prev:{title:"version",path:"\u002Fen\u002Fcommand-reference\u002Fversion",to:"\u002Fcommand-reference\u002Fversion"},next:{title:"MeiliSearch",path:"\u002Fen\u002Fcommon-services\u002Fmeilisearch",to:"\u002Fcommon-services\u002Fmeilisearch"}}],fetch:{},mutations:[]}}("text","element","span","token","punctuation","\n",":","key","atrule","a","-","code","true",-1,"icon","icon-link","p","\n        "," ",2,"h2","\n      ","networks","div","nuxt-content-highlight","pre","line-numbers","string","mariadb","nofollow","noopener","noreferrer","_blank","language-yaml","\n    ","number","comment","MariaDB","about","About","installation--basic-usage","Installation & Basic Usage","base-docker-composeyml","development-docker-composedevyml","persistent-storage","Persistent storage","Networks","real-life-example","Real-life example","docker-compose.yml","entrypoint","3306","2022-01-13T18:42:20.908Z")));
__NUXT_JSONP__("/common-services/mysql", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap){return {data:[{document:{slug:F,description:"",title:L,position:6.2,category:"Common Services",toc:[{id:M,depth:v,text:N},{id:O,depth:v,text:P},{id:Q,depth:v,text:"Base: docker-compose.yml"},{id:R,depth:v,text:"Development: docker-compose.dev.yml"},{id:S,depth:3,text:T},{id:y,depth:v,text:U},{id:V,depth:v,text:W}],body:{type:"root",children:[{type:b,tag:w,props:{id:M},children:[{type:b,tag:l,props:{href:"#about",ariaHidden:n,tabIndex:o},children:[{type:b,tag:c,props:{className:[p,q]},children:[]}]},{type:a,value:N}]},{type:a,value:i},{type:b,tag:t,props:{},children:[{type:b,tag:l,props:{href:"https:\u002F\u002Fwww.mysql.com\u002F",rel:[G,H,I],target:J},children:[{type:a,value:L}]},{type:a,value:" is a very popular open source relational database. It is maintained by Oracle and is used by many applications worldwide."}]},{type:a,value:i},{type:b,tag:w,props:{id:O},children:[{type:b,tag:l,props:{href:"#installation--basic-usage",ariaHidden:n,tabIndex:o},children:[{type:b,tag:c,props:{className:[p,q]},children:[]}]},{type:a,value:P}]},{type:a,value:i},{type:b,tag:t,props:{},children:[{type:a,value:"Please see the "},{type:b,tag:"nuxt-link",props:{to:"\u002Fgetting-started\u002Fintroduction"},children:[{type:a,value:"Introduction & Concepts"}]},{type:a,value:", then reference the examples below on adding this service to your project."}]},{type:a,value:i},{type:b,tag:w,props:{id:Q},children:[{type:b,tag:l,props:{href:"#base-docker-composeyml",ariaHidden:n,tabIndex:o},children:[{type:b,tag:c,props:{className:[p,q]},children:[]}]},{type:a,value:"Base: "},{type:b,tag:m,props:{},children:[{type:a,value:X}]}]},{type:a,value:i},{type:b,tag:t,props:{},children:[{type:a,value:"Add this section to your main "},{type:b,tag:m,props:{},children:[{type:a,value:X}]},{type:a,value:" file, which will act as a \"base\". All environments will reference this file, so you can simply manage everything from one location."}]},{type:a,value:i},{type:b,tag:A,props:{className:[B]},children:[{type:b,tag:C,props:{className:[D,K]},children:[{type:b,tag:m,props:{},children:[{type:a,value:Y},{type:b,tag:c,props:{className:[d,g,h]},children:[{type:a,value:F}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:f}]},{type:a,value:u},{type:b,tag:c,props:{className:[d,Z]},children:[{type:a,value:"# You might need to specifically define the platform for M1 Macs"}]},{type:a,value:u},{type:b,tag:c,props:{className:[d,g,h]},children:[{type:a,value:"platform"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:f}]},{type:a,value:" linux\u002Fx86_64\n    "},{type:b,tag:c,props:{className:[d,g,h]},children:[{type:a,value:"image"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:f}]},{type:a,value:" mysql"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:f}]},{type:b,tag:c,props:{className:[d,z]},children:[{type:a,value:"8"}]},{type:a,value:u},{type:b,tag:c,props:{className:[d,g,h]},children:[{type:a,value:y}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:f}]},{type:a,value:x},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:_},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:$},{type:b,tag:c,props:{className:[d,g,h]},children:[{type:a,value:aa}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:f}]},{type:a,value:x},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:ab},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:f}]},{type:a,value:ac},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:f}]},{type:a,value:ad},{type:b,tag:c,props:{className:[d,g,h]},children:[{type:a,value:ae}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:f}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,g,h]},children:[{type:a,value:af}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:f}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,s]},children:[{type:a,value:ag}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,g,h]},children:[{type:a,value:ah}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:f}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,s]},children:[{type:a,value:"\"platform\""}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,g,h]},children:[{type:a,value:ai}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:f}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,s]},children:[{type:a,value:"\"platformuser\""}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,g,h]},children:[{type:a,value:aj}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:f}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,s]},children:[{type:a,value:"\"platformpassword\""}]},{type:a,value:u},{type:b,tag:c,props:{className:[d,g,h]},children:[{type:a,value:ak}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:f}]},{type:a,value:x},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,g,h]},children:[{type:a,value:al}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:f}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,z]},children:[{type:a,value:E}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,g,h]},children:[{type:a,value:am}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:f}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,z]},children:[{type:a,value:E}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,g,h]},children:[{type:a,value:an}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:f}]},{type:a,value:ao}]}]}]},{type:a,value:i},{type:b,tag:t,props:{},children:[{type:b,tag:l,props:{href:"https:\u002F\u002Fhub.docker.com\u002F_\u002Fmysql\u002F?tab=description",rel:[G,H,I],target:J},children:[{type:a,value:"See the official MySQL DockerHub page"}]},{type:a,value:" for specific version references."}]},{type:a,value:i},{type:b,tag:w,props:{id:R},children:[{type:b,tag:l,props:{href:"#development-docker-composedevyml",ariaHidden:n,tabIndex:o},children:[{type:b,tag:c,props:{className:[p,q]},children:[]}]},{type:a,value:"Development: "},{type:b,tag:m,props:{},children:[{type:a,value:"docker-compose.dev.yml"}]}]},{type:a,value:i},{type:b,tag:A,props:{className:[B]},children:[{type:b,tag:C,props:{className:[D,K]},children:[{type:b,tag:m,props:{},children:[{type:a,value:Y},{type:b,tag:c,props:{className:[d,g,h]},children:[{type:a,value:F}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:f}]},{type:a,value:u},{type:b,tag:c,props:{className:[d,g,h]},children:[{type:a,value:y}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:f}]},{type:a,value:x},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:_},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:$},{type:b,tag:c,props:{className:[d,g,h]},children:[{type:a,value:aa}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:f}]},{type:a,value:x},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:ab},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:f}]},{type:a,value:ac},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:f}]},{type:a,value:ad},{type:b,tag:c,props:{className:[d,g,h]},children:[{type:a,value:ae}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:f}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,g,h]},children:[{type:a,value:af}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:f}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,s]},children:[{type:a,value:ag}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,g,h]},children:[{type:a,value:ah}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:f}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,s]},children:[{type:a,value:"\"mydatabase\""}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,g,h]},children:[{type:a,value:ai}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:f}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,s]},children:[{type:a,value:"\"databaseuser\""}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,g,h]},children:[{type:a,value:aj}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:f}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,s]},children:[{type:a,value:"\"databasepassword\""}]},{type:a,value:u},{type:b,tag:c,props:{className:[d,Z]},children:[{type:a,value:"# Publish the port so things like Sequel Pro or TablePlus can connect"}]},{type:a,value:u},{type:b,tag:c,props:{className:[d,g,h]},children:[{type:a,value:ak}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:f}]},{type:a,value:x},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,g,h]},children:[{type:a,value:al}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:f}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,z]},children:[{type:a,value:E}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,g,h]},children:[{type:a,value:am}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:f}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,z]},children:[{type:a,value:E}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,g,h]},children:[{type:a,value:an}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:f}]},{type:a,value:ao}]}]}]},{type:a,value:i},{type:b,tag:"h3",props:{id:S},children:[{type:b,tag:l,props:{href:"#persistent-storage",ariaHidden:n,tabIndex:o},children:[{type:b,tag:c,props:{className:[p,q]},children:[]}]},{type:a,value:T}]},{type:a,value:i},{type:b,tag:t,props:{},children:[{type:a,value:"All persistent storage will be located in a "},{type:b,tag:m,props:{},children:[{type:a,value:".\u002F_volumes\u002F"}]},{type:a,value:" folder on your project."}]},{type:a,value:i},{type:b,tag:"h4",props:{id:"add-this-to-your-gitignore"},children:[{type:b,tag:l,props:{href:"#add-this-to-your-gitignore",ariaHidden:n,tabIndex:o},children:[{type:b,tag:c,props:{className:[p,q]},children:[]}]},{type:a,value:"Add this to your "},{type:b,tag:m,props:{},children:[{type:a,value:".gitignore"}]}]},{type:a,value:i},{type:b,tag:A,props:{className:[B]},children:[{type:b,tag:C,props:{className:[D,"language-text"]},children:[{type:b,tag:m,props:{},children:[{type:a,value:"\u002F_volumes\u002F*\n"}]}]}]},{type:a,value:i},{type:b,tag:w,props:{id:y},children:[{type:b,tag:l,props:{href:"#networks",ariaHidden:n,tabIndex:o},children:[{type:b,tag:c,props:{className:[p,q]},children:[]}]},{type:a,value:U}]},{type:a,value:i},{type:b,tag:t,props:{},children:[{type:a,value:"If you copy and paste from above, be sure to define your network at the bottom of the file."}]},{type:a,value:i},{type:b,tag:A,props:{className:[B]},children:[{type:b,tag:C,props:{className:[D,K]},children:[{type:b,tag:m,props:{},children:[{type:b,tag:c,props:{className:[d,g,h]},children:[{type:a,value:y}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:f}]},{type:a,value:"\n  "},{type:b,tag:c,props:{className:[d,g,h]},children:[{type:a,value:"web-dev"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:f}]},{type:a,value:i}]}]}]},{type:a,value:i},{type:b,tag:w,props:{id:V},children:[{type:b,tag:l,props:{href:"#real-life-example",ariaHidden:n,tabIndex:o},children:[{type:b,tag:c,props:{className:[p,q]},children:[]}]},{type:a,value:W}]},{type:a,value:i},{type:b,tag:t,props:{},children:[{type:a,value:"See our open source project called "},{type:b,tag:l,props:{href:"https:\u002F\u002Fgithub.com\u002Fserversideup\u002Ffinancial-freedom",rel:[G,H,I],target:J},children:[{type:a,value:"Financial Freedom"}]},{type:a,value:" for more examples."}]}]},dir:"\u002Fen\u002Fcommon-services",path:"\u002Fen\u002Fcommon-services\u002Fmysql",extension:".md",createdAt:ap,updatedAt:ap,to:"\u002Fcommon-services\u002Fmysql"},prev:{title:"MeiliSearch",path:"\u002Fen\u002Fcommon-services\u002Fmeilisearch",to:"\u002Fcommon-services\u002Fmeilisearch"},next:{title:"Node",path:"\u002Fen\u002Fcommon-services\u002Fnode",to:"\u002Fcommon-services\u002Fnode"}}],fetch:{},mutations:[]}}("text","element","span","token","punctuation",":","key","atrule","\n"," ","\n        ","a","code","true",-1,"icon","icon-link","-","string","p","\n    ",2,"h2","\n      ","networks","number","div","nuxt-content-highlight","pre","line-numbers","3306","mysql","nofollow","noopener","noreferrer","_blank","language-yaml","MySQL","about","About","installation--basic-usage","Installation & Basic Usage","base-docker-composeyml","development-docker-composedevyml","persistent-storage","Persistent storage","Networks","real-life-example","Real-life example","docker-compose.yml","  ","comment"," web","dev\n    ","volumes"," .\u002F_dev\u002Fmysql\u002Fdatabase_data\u002F","\u002Fvar\u002Flib\u002Fmysql","cached\n    ","environment","MYSQL_ROOT_PASSWORD","\"rootpassword\"","MYSQL_DATABASE","MYSQL_USER","MYSQL_PASSWORD","ports","target","published","mode"," host\n","2022-01-14T03:05:38.911Z")));
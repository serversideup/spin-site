__NUXT_JSONP__("/examples/laravel", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar,as,at,au,av,aw,ax,ay,az,aA,aB,aC,aD,aE,aF,aG,aH,aI,aJ){return {data:[{document:{slug:"laravel",description:"",title:"New Laravel Project",position:4,category:"Examples",toc:[{id:R,depth:u,text:S},{id:T,depth:u,text:U},{id:V,depth:u,text:W},{id:X,depth:u,text:"Configure your Laravel .env"},{id:Y,depth:u,text:"Add .\u002Fvolumes to your \".gitignore\""},{id:Z,depth:u,text:_},{id:$,depth:u,text:aa},{id:ab,depth:u,text:ac},{id:ad,depth:u,text:ae},{id:af,depth:u,text:ag}],body:{type:"root",children:[{type:b,tag:v,props:{id:R},children:[{type:b,tag:n,props:{href:"#assumptions",ariaHidden:o,tabIndex:p},children:[{type:b,tag:c,props:{className:[q,r]},children:[]}]},{type:a,value:S}]},{type:a,value:f},{type:b,tag:k,props:{},children:[{type:a,value:"This guide has a few critical assumptions before moving forward:"}]},{type:a,value:f},{type:b,tag:ah,props:{},children:[{type:a,value:f},{type:b,tag:w,props:{},children:[{type:a,value:"You have "},{type:b,tag:l,props:{},children:[{type:a,value:"spin"}]},{type:a,value:" installed on your machine"}]},{type:a,value:f},{type:b,tag:w,props:{},children:[{type:a,value:"You're starting a new, simple Laravel project"}]},{type:a,value:f},{type:b,tag:w,props:{},children:[{type:a,value:"You have Docker installed and running on your machine"}]},{type:a,value:f}]},{type:a,value:f},{type:b,tag:v,props:{id:T},children:[{type:b,tag:n,props:{href:"#create-a-new-laravel-project-with-composer",ariaHidden:o,tabIndex:p},children:[{type:b,tag:c,props:{className:[q,r]},children:[]}]},{type:a,value:U}]},{type:a,value:f},{type:b,tag:ai,props:{type:aj},children:[{type:a,value:f},{type:b,tag:k,props:{},children:[{type:a,value:"This example is using "},{type:b,tag:l,props:{},children:[{type:a,value:"PHP 8.1"}]},{type:a,value:". Be sure to change the image name to match your version of PHP that you're using for your project. "},{type:b,tag:n,props:{href:"https:\u002F\u002Fgithub.com\u002Fserversideup\u002Fdocker-php\u002F#available-docker-images",rel:["nofollow","noopener","noreferrer"],target:"_blank"},children:[{type:a,value:"See available versions →"}]}]},{type:a,value:f}]},{type:a,value:f},{type:b,tag:k,props:{},children:[{type:a,value:"We can use Docker to run "},{type:b,tag:l,props:{},children:[{type:a,value:ak}]},{type:a,value:" and download Laravel in a new folder."}]},{type:a,value:f},{type:b,tag:k,props:{},children:[{type:a,value:"Run this command in the directory you want to create a new Laravel project in:"}]},{type:a,value:f},{type:b,tag:x,props:{className:[y]},children:[{type:b,tag:z,props:{className:[A,G]},children:[{type:b,tag:l,props:{},children:[{type:a,value:"docker run --rm -e "},{type:b,tag:c,props:{className:[d,B]},children:[{type:a,value:"\"S6_LOGGING=1\""}]},{type:a,value:" -v "},{type:b,tag:c,props:{className:[d,H]},children:[{type:b,tag:c,props:{className:[d,H]},children:[{type:a,value:"$("}]},{type:b,tag:c,props:{className:[d,al,am]},children:[{type:a,value:"pwd"}]},{type:b,tag:c,props:{className:[d,H]},children:[{type:a,value:")"}]}]},{type:a,value:":\u002Fvar\u002Fwww\u002Fhtml serversideup\u002Fphp:8.1-fpm "},{type:b,tag:c,props:{className:[d,"function"]},children:[{type:a,value:ak}]},{type:a,value:" create-project laravel\u002Flaravel example-app\n"}]}]}]},{type:a,value:f},{type:b,tag:v,props:{id:V},children:[{type:b,tag:n,props:{href:"#add-the-docker-compose-templates-to-your-project",ariaHidden:o,tabIndex:p},children:[{type:b,tag:c,props:{className:[q,r]},children:[]}]},{type:a,value:W}]},{type:a,value:f},{type:b,tag:k,props:{},children:[{type:a,value:"As we explain in our Introduction & Concepts page, we have two files that are critical for development:"}]},{type:a,value:f},{type:b,tag:ah,props:{},children:[{type:a,value:f},{type:b,tag:w,props:{},children:[{type:a,value:an}]},{type:a,value:f},{type:b,tag:w,props:{},children:[{type:a,value:ao}]},{type:a,value:f}]},{type:a,value:f},{type:b,tag:k,props:{},children:[{type:a,value:"Feel free to use these files as your simple Laravel example:"}]},{type:a,value:f},{type:b,tag:ai,props:{type:aj},children:[{type:a,value:f},{type:b,tag:k,props:{},children:[{type:a,value:"You can change the database credentials, but if you change them in one place, be sure to change them everywhere else."}]},{type:a,value:f}]},{type:a,value:f},{type:b,tag:I,props:{id:"docker-composeyml"},children:[{type:b,tag:n,props:{href:"#docker-composeyml",ariaHidden:o,tabIndex:p},children:[{type:b,tag:c,props:{className:[q,r]},children:[]}]},{type:a,value:an}]},{type:a,value:f},{type:b,tag:x,props:{className:[y]},children:[{type:b,tag:z,props:{className:[A,ap]},children:[{type:b,tag:l,props:{},children:[{type:b,tag:c,props:{className:[d,h,i]},children:[{type:a,value:aq}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:m},{type:b,tag:c,props:{className:[d,B]},children:[{type:a,value:ar}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,h,i]},children:[{type:a,value:as}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:at},{type:b,tag:c,props:{className:[d,h,i]},children:[{type:a,value:au}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:C},{type:b,tag:c,props:{className:[d,h,i]},children:[{type:a,value:J}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:" serversideup\u002Fphp"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:"8.1"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:"fpm"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:"nginx\n    "},{type:b,tag:c,props:{className:[d,h,i]},children:[{type:a,value:av}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:" \u002Fvar\u002Fwww\u002Fhtml\n\n  "},{type:b,tag:c,props:{className:[d,h,i]},children:[{type:a,value:aw}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:C},{type:b,tag:c,props:{className:[d,h,i]},children:[{type:a,value:J}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:" mariadb"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,D]},children:[{type:a,value:"10.7"}]},{type:a,value:"\n  \n  "},{type:b,tag:c,props:{className:[d,h,i]},children:[{type:a,value:ax}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:C},{type:b,tag:c,props:{className:[d,h,i]},children:[{type:a,value:J}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:" node"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:"lts\n"}]}]}]},{type:a,value:f},{type:b,tag:I,props:{id:"docker-composedevyml"},children:[{type:b,tag:n,props:{href:"#docker-composedevyml",ariaHidden:o,tabIndex:p},children:[{type:b,tag:c,props:{className:[q,r]},children:[]}]},{type:a,value:ao}]},{type:a,value:f},{type:b,tag:x,props:{className:[y]},children:[{type:b,tag:z,props:{className:[A,ap]},children:[{type:b,tag:l,props:{},children:[{type:b,tag:c,props:{className:[d,h,i]},children:[{type:a,value:aq}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:m},{type:b,tag:c,props:{className:[d,B]},children:[{type:a,value:ar}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,h,i]},children:[{type:a,value:as}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:" \n  "},{type:b,tag:c,props:{className:[d,h,i]},children:[{type:a,value:aw}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:C},{type:b,tag:c,props:{className:[d,h,i]},children:[{type:a,value:E}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:s},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:K},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:L},{type:b,tag:c,props:{className:[d,h,i]},children:[{type:a,value:"environment"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:t},{type:b,tag:c,props:{className:[d,h,i]},children:[{type:a,value:"MYSQL_ROOT_PASSWORD"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:m},{type:b,tag:c,props:{className:[d,B]},children:[{type:a,value:"\"rootpassword\""}]},{type:a,value:t},{type:b,tag:c,props:{className:[d,h,i]},children:[{type:a,value:"MARIADB_DATABASE"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:m},{type:b,tag:c,props:{className:[d,B]},children:[{type:a,value:"\"laravel\""}]},{type:a,value:t},{type:b,tag:c,props:{className:[d,h,i]},children:[{type:a,value:"MARIADB_USER"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:m},{type:b,tag:c,props:{className:[d,B]},children:[{type:a,value:"\"example-app-user\""}]},{type:a,value:t},{type:b,tag:c,props:{className:[d,h,i]},children:[{type:a,value:"MARIADB_PASSWORD"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:m},{type:b,tag:c,props:{className:[d,B]},children:[{type:a,value:"\"example-app-password\""}]},{type:a,value:C},{type:b,tag:c,props:{className:[d,h,i]},children:[{type:a,value:M}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:s},{type:b,tag:c,props:{className:[d,F]},children:[{type:a,value:"# Add volume for all database files"}]},{type:a,value:s},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:" .\u002F_volumes\u002Fmysql\u002Fdatabase_data\u002F"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:"\u002Fvar\u002Flib\u002Fmysql\n      "},{type:b,tag:c,props:{className:[d,F]},children:[{type:a,value:"# Add volume for custom configurations"}]},{type:a,value:s},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:" .\u002F_volumes\u002Fmysql\u002Fconf.d\u002F"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:"\u002Fetc\u002Fmysql\u002Fconf.d\n      "},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:" .\u002F_volumes\u002Fmysql\u002Fdocker"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:ay},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:"initdb.d\u002F"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:"\u002Fdocker"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:ay},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:"initdb.d\n    "},{type:b,tag:c,props:{className:[d,h,i]},children:[{type:a,value:az}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:s},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:m},{type:b,tag:c,props:{className:[d,h,i]},children:[{type:a,value:N}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:m},{type:b,tag:c,props:{className:[d,D]},children:[{type:a,value:aA}]},{type:a,value:t},{type:b,tag:c,props:{className:[d,h,i]},children:[{type:a,value:O}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:m},{type:b,tag:c,props:{className:[d,D]},children:[{type:a,value:aA}]},{type:a,value:t},{type:b,tag:c,props:{className:[d,h,i]},children:[{type:a,value:P}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:" host\n\n  "},{type:b,tag:c,props:{className:[d,h,i]},children:[{type:a,value:au}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:C},{type:b,tag:c,props:{className:[d,h,i]},children:[{type:a,value:E}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:t},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:K},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:L},{type:b,tag:c,props:{className:[d,h,i]},children:[{type:a,value:az}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:s},{type:b,tag:c,props:{className:[d,F]},children:[{type:a,value:"# Listen on port 80, default for HTTP"}]},{type:a,value:s},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:m},{type:b,tag:c,props:{className:[d,h,i]},children:[{type:a,value:N}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:m},{type:b,tag:c,props:{className:[d,D]},children:[{type:a,value:aB}]},{type:a,value:t},{type:b,tag:c,props:{className:[d,h,i]},children:[{type:a,value:O}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:m},{type:b,tag:c,props:{className:[d,D]},children:[{type:a,value:aB}]},{type:a,value:t},{type:b,tag:c,props:{className:[d,h,i]},children:[{type:a,value:P}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:" host\n      "},{type:b,tag:c,props:{className:[d,F]},children:[{type:a,value:"# Listen on port 443, default for HTTPS"}]},{type:a,value:s},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:m},{type:b,tag:c,props:{className:[d,h,i]},children:[{type:a,value:N}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:m},{type:b,tag:c,props:{className:[d,D]},children:[{type:a,value:aC}]},{type:a,value:t},{type:b,tag:c,props:{className:[d,h,i]},children:[{type:a,value:O}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:m},{type:b,tag:c,props:{className:[d,D]},children:[{type:a,value:aC}]},{type:a,value:t},{type:b,tag:c,props:{className:[d,h,i]},children:[{type:a,value:P}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:" host\n    "},{type:b,tag:c,props:{className:[d,h,i]},children:[{type:a,value:M}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:s},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:aD},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:"\u002Fvar\u002Fwww\u002Fhtml\u002F"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:aE},{type:b,tag:c,props:{className:[d,h,i]},children:[{type:a,value:"depends_on"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:s},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:m},{type:b,tag:c,props:{className:[d,B]},children:[{type:a,value:"\"mariadb\""}]},{type:a,value:"\n\n  "},{type:b,tag:c,props:{className:[d,h,i]},children:[{type:a,value:ax}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:C},{type:b,tag:c,props:{className:[d,h,i]},children:[{type:a,value:E}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:s},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:K},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:L},{type:b,tag:c,props:{className:[d,h,i]},children:[{type:a,value:M}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:s},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:aD},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:"\u002Fusr\u002Fsrc\u002Fapp\u002F"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:aE},{type:b,tag:c,props:{className:[d,h,i]},children:[{type:a,value:av}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:" \u002Fusr\u002Fsrc\u002Fapp\u002F\n\n"},{type:b,tag:c,props:{className:[d,h,i]},children:[{type:a,value:E}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:at},{type:b,tag:c,props:{className:[d,h,i]},children:[{type:a,value:"web-dev"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:v,props:{id:X},children:[{type:b,tag:n,props:{href:"#configure-your-laravel-env",ariaHidden:o,tabIndex:p},children:[{type:b,tag:c,props:{className:[q,r]},children:[]}]},{type:a,value:"Configure your Laravel "},{type:b,tag:l,props:{},children:[{type:a,value:".env"}]}]},{type:a,value:f},{type:b,tag:k,props:{},children:[{type:a,value:"Make sure you update these variables to look like this (or whatever you changed them to):"}]},{type:a,value:f},{type:b,tag:x,props:{className:[y]},children:[{type:b,tag:z,props:{className:[A,Q]},children:[{type:b,tag:l,props:{},children:[{type:a,value:"DB_CONNECTION=mysql\nDB_HOST=mariadb\nDB_PORT=3306\nDB_DATABASE=laravel\nDB_USERNAME=example-app-user\nDB_PASSWORD=example-app-password\n"}]}]}]},{type:a,value:f},{type:b,tag:v,props:{id:Y},children:[{type:b,tag:n,props:{href:"#add-volumes-to-your-gitignore",ariaHidden:o,tabIndex:p},children:[{type:b,tag:c,props:{className:[q,r]},children:[]}]},{type:a,value:"Add "},{type:b,tag:l,props:{},children:[{type:a,value:aF}]},{type:a,value:" to your \".gitignore\""}]},{type:a,value:f},{type:b,tag:k,props:{},children:[{type:a,value:"We want your database information to be persistent, so we store them in your project under "},{type:b,tag:l,props:{},children:[{type:a,value:aF}]},{type:a,value:". You will not want this information committed to your repo."}]},{type:a,value:f},{type:b,tag:I,props:{id:"gitignore"},children:[{type:b,tag:n,props:{href:"#gitignore",ariaHidden:o,tabIndex:p},children:[{type:b,tag:c,props:{className:[q,r]},children:[]}]},{type:a,value:".gitignore"}]},{type:a,value:f},{type:b,tag:x,props:{className:[y]},children:[{type:b,tag:z,props:{className:[A,Q]},children:[{type:b,tag:l,props:{},children:[{type:a,value:"# Ignore the _volumes folder\n\u002F_volumes\u002F*\n"}]}]}]},{type:a,value:f},{type:b,tag:v,props:{id:Z},children:[{type:b,tag:n,props:{href:"#configure-your-hosts-file",ariaHidden:o,tabIndex:p},children:[{type:b,tag:c,props:{className:[q,r]},children:[]}]},{type:a,value:_}]},{type:a,value:f},{type:b,tag:k,props:{},children:[{type:a,value:"Add this entry to your hosts file:"}]},{type:a,value:f},{type:b,tag:x,props:{className:[y]},children:[{type:b,tag:z,props:{className:[A,Q]},children:[{type:b,tag:l,props:{},children:[{type:a,value:"127.0.0.1 laravel.dev.test\n"}]}]}]},{type:a,value:f},{type:b,tag:k,props:{},children:[{type:a,value:"The hosts file is simulating DNS for us. You can find it at:"}]},{type:a,value:f},{type:b,tag:"ul",props:{},children:[{type:a,value:f},{type:b,tag:w,props:{},children:[{type:a,value:"MacOS: "},{type:b,tag:l,props:{},children:[{type:a,value:aG}]}]},{type:a,value:f},{type:b,tag:w,props:{},children:[{type:a,value:"Linux: "},{type:b,tag:l,props:{},children:[{type:a,value:aG}]}]},{type:a,value:f},{type:b,tag:w,props:{},children:[{type:a,value:"Windows: "},{type:b,tag:l,props:{},children:[{type:a,value:"C:\\Windows\\System32\\drivers\\etc\\hosts"}]}]},{type:a,value:f}]},{type:a,value:f},{type:b,tag:v,props:{id:$},children:[{type:b,tag:n,props:{href:"#spin-up-your-development-environment",ariaHidden:o,tabIndex:p},children:[{type:b,tag:c,props:{className:[q,r]},children:[]}]},{type:a,value:aa}]},{type:a,value:f},{type:b,tag:x,props:{className:[y]},children:[{type:b,tag:z,props:{className:[A,G]},children:[{type:b,tag:l,props:{},children:[{type:a,value:"spin up\n"}]}]}]},{type:a,value:f},{type:b,tag:k,props:{},children:[{type:a,value:"You'll start to see a bunch of output in your terminal. Wait for this to fully come up (the output should slow down or stop)."}]},{type:a,value:f},{type:b,tag:k,props:{},children:[{type:b,tag:aH,props:{},children:[{type:a,value:"Important note:"}]},{type:a,value:" On your first provision, you must wait for the database to provision the user. Look at the Docker compose output for \"financial-freedom-mariadb-1\". It will say something like `[Entrypoint]: Creating user example-app-user"}]},{type:a,value:f},{type:b,tag:v,props:{id:ab},children:[{type:b,tag:n,props:{href:"#visit-your-local-development-site",ariaHidden:o,tabIndex:p},children:[{type:b,tag:c,props:{className:[q,r]},children:[]}]},{type:a,value:ac}]},{type:a,value:f},{type:b,tag:k,props:{},children:[{type:a,value:"Open up a browser window and visit "},{type:b,tag:l,props:{},children:[{type:a,value:"http:\u002F\u002Flaravel.dev.test"}]},{type:a,value:"."}]},{type:a,value:f},{type:b,tag:k,props:{},children:[{type:b,tag:"img",props:{alt:"Laravel will load locally on your development environment.",src:"laravel-example\u002Ftest-site.png",title:"Laravel Test Site"},children:[]}]},{type:a,value:f},{type:b,tag:v,props:{id:ad},children:[{type:b,tag:n,props:{href:"#run-your-migrations",ariaHidden:o,tabIndex:p},children:[{type:b,tag:c,props:{className:[q,r]},children:[]}]},{type:a,value:ae}]},{type:a,value:f},{type:b,tag:k,props:{},children:[{type:a,value:"Using "},{type:b,tag:n,props:{href:"command-reference\u002Fexec"},children:[{type:a,value:aI}]},{type:a,value:", let's run a command in our existing PHP containers."}]},{type:a,value:f},{type:b,tag:k,props:{},children:[{type:b,tag:aH,props:{},children:[{type:a,value:"Open a new terminal window\u002Ftab"}]},{type:a,value:", then run this:"}]},{type:a,value:f},{type:b,tag:x,props:{className:[y]},children:[{type:b,tag:z,props:{className:[A,G]},children:[{type:b,tag:l,props:{},children:[{type:a,value:"spin "},{type:b,tag:c,props:{className:[d,al,am]},children:[{type:a,value:aI}]},{type:a,value:" php php artisan migrate\n"}]}]}]},{type:a,value:f},{type:b,tag:k,props:{},children:[{type:a,value:"If everything is up and running correctly, you should see the migrations completed successfully."}]},{type:a,value:f},{type:b,tag:v,props:{id:af},children:[{type:b,tag:n,props:{href:"#adding-services",ariaHidden:o,tabIndex:p},children:[{type:b,tag:c,props:{className:[q,r]},children:[]}]},{type:a,value:ag}]},{type:a,value:f},{type:b,tag:k,props:{},children:[{type:a,value:"This is a very basic example of getting up and running with Laravel. If you're looking to add more services, check out the \"Common Services\" section in the navigation for more advanced use cases!"}]}]},dir:"\u002Fen\u002Fexamples",path:"\u002Fen\u002Fexamples\u002Flaravel",extension:".md",createdAt:aJ,updatedAt:aJ,to:"\u002Fexamples\u002Flaravel"},prev:{title:"Install via Composer",path:"\u002Fen\u002Finstallation\u002Finstall-composer",to:"\u002Finstallation\u002Finstall-composer"},next:{title:"debug",path:"\u002Fen\u002Fcommand-reference\u002Fdebug",to:"\u002Fcommand-reference\u002Fdebug"}}],fetch:{},mutations:[]}}("text","element","span","token","punctuation","\n",":","key","atrule","-","p","code"," ","a","true",-1,"icon","icon-link","\n      ","\n        ",2,"h2","li","div","nuxt-content-highlight","pre","line-numbers","string","\n    ","number","networks","comment","language-bash","variable","h4","image"," web","dev\n    ","volumes","target","published","mode","language-text","assumptions","Assumptions","create-a-new-laravel-project-with-composer","Create a new Laravel Project with Composer","add-the-docker-compose-templates-to-your-project","Add the \"Docker Compose\" templates to your project","configure-your-laravel-env","add-volumes-to-your-gitignore","configure-your-hosts-file","Configure your hosts file","spin-up-your-development-environment","Spin up your development environment","visit-your-local-development-site","Visit your local development site","run-your-migrations","Run your migrations","adding-services","Adding services","ol","alert","warning","composer","builtin","class-name","docker-compose.yml","docker-compose.dev.yml","language-yaml","version","'3.8'","services","\n  ","php","working_dir","mariadb","node","entrypoint","ports","3306","80","443"," .","cached\n    ",".\u002Fvolumes","\u002Fetc\u002Fhosts","strong","exec","2022-01-14T13:32:20.836Z")));
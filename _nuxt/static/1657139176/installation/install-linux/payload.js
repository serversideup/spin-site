__NUXT_JSONP__("/installation/install-linux", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$){return {data:[{document:{slug:"install-linux",description:"",title:"Install to Linux",position:3.3,category:"Installation",toc:[{id:E,depth:q,text:F},{id:G,depth:q,text:"Download and install spin"},{id:H,depth:q,text:"Add spin to your PATH"},{id:I,depth:q,text:J},{id:K,depth:q,text:L},{id:M,depth:q,text:N},{id:O,depth:3,text:P},{id:Q,depth:q,text:"Validate spin is working"}],body:{type:"root",children:[{type:b,tag:r,props:{id:E},children:[{type:b,tag:g,props:{href:"#install-docker-engine",ariaHidden:i,tabIndex:j},children:[{type:b,tag:d,props:{className:[k,l]},children:[]}]},{type:a,value:F}]},{type:a,value:c},{type:b,tag:h,props:{},children:[{type:a,value:"Install Docker Engine "},{type:b,tag:g,props:{href:"https:\u002F\u002Fdocs.docker.com\u002Fengine\u002Finstall\u002F",rel:[R,S,T],target:U},children:[{type:a,value:"following the official Docker instructions"}]},{type:a,value:V}]},{type:a,value:c},{type:b,tag:h,props:{},children:[{type:a,value:"Ensure you have a working Docker installation by running "},{type:b,tag:f,props:{},children:[{type:a,value:"docker version"}]},{type:a,value:V}]},{type:a,value:c},{type:b,tag:r,props:{id:G},children:[{type:b,tag:g,props:{href:"#download-and-install-spin",ariaHidden:i,tabIndex:j},children:[{type:b,tag:d,props:{className:[k,l]},children:[]}]},{type:a,value:"Download and install "},{type:b,tag:f,props:{},children:[{type:a,value:s}]}]},{type:a,value:c},{type:b,tag:h,props:{},children:[{type:a,value:"Run the installer with this simple command in your terminal. "},{type:b,tag:t,props:{},children:[{type:a,value:"No root permissions required."}]}]},{type:a,value:c},{type:b,tag:m,props:{className:[n]},children:[{type:b,tag:o,props:{className:[p,u]},children:[{type:b,tag:f,props:{},children:[{type:b,tag:d,props:{className:[e,W]},children:[{type:a,value:"sh"}]},{type:a,value:" -c "},{type:b,tag:d,props:{className:[e,X]},children:[{type:a,value:v},{type:b,tag:d,props:{className:[e,w]},children:[{type:b,tag:d,props:{className:[e,w]},children:[{type:a,value:"$("}]},{type:b,tag:d,props:{className:[e,W]},children:[{type:a,value:"curl"}]},{type:a,value:" -fsSL https:\u002F\u002Fraw.githubusercontent.com\u002Fserversideup\u002Fspin\u002Fmain\u002Ftools\u002Finstall.sh"},{type:b,tag:d,props:{className:[e,w]},children:[{type:a,value:")"}]}]},{type:a,value:v}]},{type:a,value:c}]}]}]},{type:a,value:c},{type:b,tag:h,props:{},children:[{type:a,value:"The above script will install spin at the "},{type:b,tag:"em",props:{},children:[{type:a,value:"user"}]},{type:a,value:" level in "},{type:b,tag:f,props:{},children:[{type:a,value:"~\u002F.spin"}]},{type:a,value:", using less than 300KB of storage."}]},{type:a,value:c},{type:b,tag:r,props:{id:H},children:[{type:b,tag:g,props:{href:"#add-spin-to-your-path",ariaHidden:i,tabIndex:j},children:[{type:b,tag:d,props:{className:[k,l]},children:[]}]},{type:a,value:"Add "},{type:b,tag:f,props:{},children:[{type:a,value:s}]},{type:a,value:" to your PATH"}]},{type:a,value:c},{type:b,tag:h,props:{},children:[{type:a,value:"In order for your terminal to know where "},{type:b,tag:f,props:{},children:[{type:a,value:s}]},{type:a,value:" is located, we need to add this to your \"PATH\" for your shell. Depending on your shell, you will need to "},{type:b,tag:t,props:{},children:[{type:a,value:"paste the following text at the BOTTOM of the appropriate file"}]},{type:a,value:":"}]},{type:a,value:c},{type:b,tag:Y,props:{type:"info"},children:[{type:a,value:c},{type:b,tag:h,props:{},children:[{type:a,value:"You can run "},{type:b,tag:f,props:{},children:[{type:a,value:"echo $0"}]},{type:a,value:" in your terminal to figure out which shell you are using."}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:m,props:{className:[n]},children:[{type:b,tag:o,props:{className:[p,u]},children:[{type:b,tag:f,props:{},children:[{type:b,tag:d,props:{className:[e,y]},children:[{type:a,value:"# Add this to `~\u002F.zshrc` or `~\u002F.bashrc`"}]},{type:a,value:c},{type:b,tag:d,props:{className:[e,z,A]},children:[{type:a,value:"export"}]},{type:a,value:" "},{type:b,tag:d,props:{className:[e,"assign-left",w]},children:[{type:b,tag:d,props:{className:[e,B,C]},children:[{type:a,value:"PATH"}]}]},{type:b,tag:d,props:{className:[e,"operator"]},children:[{type:a,value:"="}]},{type:b,tag:d,props:{className:[e,X]},children:[{type:a,value:v},{type:b,tag:d,props:{className:[e,B,C]},children:[{type:a,value:"$HOME"}]},{type:a,value:"\u002F.spin\u002Fbin:"},{type:b,tag:d,props:{className:[e,B,C]},children:[{type:a,value:"$PATH"}]},{type:a,value:v}]},{type:a,value:c}]}]}]},{type:a,value:c},{type:b,tag:h,props:{},children:[{type:a,value:"Files to modify:"}]},{type:a,value:c},{type:b,tag:"ul",props:{},children:[{type:a,value:c},{type:b,tag:Z,props:{},children:[{type:b,tag:t,props:{},children:[{type:a,value:"Bash (shipped as default for most distros):"}]},{type:a,value:" ~\u002F.bashrc"}]},{type:a,value:c},{type:b,tag:Z,props:{},children:[{type:b,tag:t,props:{},children:[{type:a,value:"ZSH (for the true hackers 🤓):"}]},{type:a,value:" ~\u002F.zshrc"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:h,props:{},children:[{type:a,value:"You can use something like "},{type:b,tag:f,props:{},children:[{type:a,value:"nano"}]},{type:a,value:" or "},{type:b,tag:f,props:{},children:[{type:a,value:"vim"}]},{type:a,value:" to modify these files."}]},{type:a,value:c},{type:b,tag:r,props:{id:I},children:[{type:b,tag:g,props:{href:"#source-your-changes",ariaHidden:i,tabIndex:j},children:[{type:b,tag:d,props:{className:[k,l]},children:[]}]},{type:a,value:J}]},{type:a,value:c},{type:b,tag:h,props:{},children:[{type:a,value:"To apply the changes, simply restart your terminal or you can source the file you just modified:"}]},{type:a,value:c},{type:b,tag:m,props:{className:[n]},children:[{type:b,tag:o,props:{className:[p,u]},children:[{type:b,tag:f,props:{},children:[{type:b,tag:d,props:{className:[e,y]},children:[{type:a,value:"# If you're using ZSH"}]},{type:a,value:c},{type:b,tag:d,props:{className:[e,z,A]},children:[{type:a,value:_}]},{type:a,value:" ~\u002F.zshrc\n\n"},{type:b,tag:d,props:{className:[e,y]},children:[{type:a,value:"# If you're using Bash"}]},{type:a,value:c},{type:b,tag:d,props:{className:[e,z,A]},children:[{type:a,value:_}]},{type:a,value:" ~\u002F.bashrc\n"}]}]}]},{type:a,value:c},{type:b,tag:r,props:{id:K},children:[{type:b,tag:g,props:{href:"#configure-docker-compose-v2",ariaHidden:i,tabIndex:j},children:[{type:b,tag:d,props:{className:[k,l]},children:[]}]},{type:a,value:L}]},{type:a,value:c},{type:b,tag:h,props:{},children:[{type:a,value:"Spin is set to run the latest version of Docker Compose. By default, Linux still ships with V1. You can follow Docker's official steps on "},{type:b,tag:g,props:{href:"https:\u002F\u002Fdocs.docker.com\u002Fcompose\u002Fcli-command\u002F#install-on-linux",rel:[R,S,T],target:U},children:[{type:a,value:" How to Install Docker Compose V2 →"}]}]},{type:a,value:c},{type:b,tag:r,props:{id:M},children:[{type:b,tag:g,props:{href:"#verify-your-user-can-run-docker-commands",ariaHidden:i,tabIndex:j},children:[{type:b,tag:d,props:{className:[k,l]},children:[]}]},{type:a,value:N}]},{type:a,value:c},{type:b,tag:Y,props:{type:"warning"},children:[{type:a,value:c},{type:b,tag:h,props:{},children:[{type:a,value:"Make sure your user has access to manage the Docker daemon."}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:m,props:{className:[n]},children:[{type:b,tag:o,props:{className:[p,x]},children:[{type:b,tag:f,props:{},children:[{type:a,value:"docker compose version\n"}]}]}]},{type:a,value:c},{type:b,tag:"h3",props:{id:O},children:[{type:b,tag:g,props:{href:"#-if-you-run-into-an-error-add-your-user-to-the-docker-group",ariaHidden:i,tabIndex:j},children:[{type:b,tag:d,props:{className:[k,l]},children:[]}]},{type:a,value:P}]},{type:a,value:c},{type:b,tag:h,props:{},children:[{type:a,value:"If your user does not have access to the Docker Daemon, you will need to add it."}]},{type:a,value:c},{type:b,tag:D,props:{id:"ensure-the-docker-group-is-created"},children:[{type:b,tag:g,props:{href:"#ensure-the-docker-group-is-created",ariaHidden:i,tabIndex:j},children:[{type:b,tag:d,props:{className:[k,l]},children:[]}]},{type:a,value:"Ensure the \"docker\" group is created"}]},{type:a,value:c},{type:b,tag:m,props:{className:[n]},children:[{type:b,tag:o,props:{className:[p,x]},children:[{type:b,tag:f,props:{},children:[{type:a,value:"sudo groupadd docker\n"}]}]}]},{type:a,value:c},{type:b,tag:D,props:{id:"add-your-user-to-the-docker-group"},children:[{type:b,tag:g,props:{href:"#add-your-user-to-the-docker-group",ariaHidden:i,tabIndex:j},children:[{type:b,tag:d,props:{className:[k,l]},children:[]}]},{type:a,value:"Add your user to the \"docker\" group"}]},{type:a,value:c},{type:b,tag:m,props:{className:[n]},children:[{type:b,tag:o,props:{className:[p,x]},children:[{type:b,tag:f,props:{},children:[{type:a,value:"sudo usermod -aG docker $USER\n"}]}]}]},{type:a,value:c},{type:b,tag:D,props:{id:"activate-changes-to-your-group"},children:[{type:b,tag:g,props:{href:"#activate-changes-to-your-group",ariaHidden:i,tabIndex:j},children:[{type:b,tag:d,props:{className:[k,l]},children:[]}]},{type:a,value:"Activate changes to your group"}]},{type:a,value:c},{type:b,tag:m,props:{className:[n]},children:[{type:b,tag:o,props:{className:[p,x]},children:[{type:b,tag:f,props:{},children:[{type:a,value:"newgrp docker\n"}]}]}]},{type:a,value:c},{type:b,tag:r,props:{id:Q},children:[{type:b,tag:g,props:{href:"#validate-spin-is-working",ariaHidden:i,tabIndex:j},children:[{type:b,tag:d,props:{className:[k,l]},children:[]}]},{type:a,value:"Validate "},{type:b,tag:f,props:{},children:[{type:a,value:s}]},{type:a,value:" is working"}]},{type:a,value:c},{type:b,tag:h,props:{},children:[{type:a,value:"You should be able to run this and get a result 🥳"}]},{type:a,value:c},{type:b,tag:m,props:{className:[n]},children:[{type:b,tag:o,props:{className:[p,u]},children:[{type:b,tag:f,props:{},children:[{type:a,value:"spin version\n"}]}]}]}]},dir:"\u002Fen\u002Finstallation",path:"\u002Fen\u002Finstallation\u002Finstall-linux",extension:".md",createdAt:$,updatedAt:$,to:"\u002Finstallation\u002Finstall-linux"},prev:{title:"Install to Windows",path:"\u002Fen\u002Finstallation\u002Finstall-windows",to:"\u002Finstallation\u002Finstall-windows"},next:{title:"Install via NPM\u002FYarn",path:"\u002Fen\u002Finstallation\u002Finstall-npm-yarn",to:"\u002Finstallation\u002Finstall-npm-yarn"}}],fetch:{},mutations:[]}}("text","element","\n","span","token","code","a","p","true",-1,"icon","icon-link","div","nuxt-content-highlight","pre","line-numbers",2,"h2","spin","strong","language-bash","\"","variable","language-text","comment","builtin","class-name","environment","constant","h4","install-docker-engine","Install Docker Engine","download-and-install-spin","add-spin-to-your-path","source-your-changes","Source your changes","configure-docker-compose-v2","Configure Docker Compose V2","verify-your-user-can-run-docker-commands","Verify your user can run Docker commands","-if-you-run-into-an-error-add-your-user-to-the-docker-group","❌ If you run into an error: Add your user to the Docker Group","validate-spin-is-working","nofollow","noopener","noreferrer","_blank",".","function","string","alert","li","source","2022-07-06T20:25:24.786Z")));
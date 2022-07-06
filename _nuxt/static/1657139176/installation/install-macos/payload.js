__NUXT_JSONP__("/installation/install-macos", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P){return {data:[{document:{slug:"install-macos",description:"",title:"Install to macOS",position:3.1,category:"Installation",toc:[{id:E,depth:i,text:F},{id:G,depth:i,text:"Download and install spin"},{id:H,depth:i,text:"Add spin to your PATH"},{id:I,depth:i,text:J},{id:K,depth:i,text:L}],body:{type:"root",children:[{type:b,tag:"video",props:{width:1200,height:630,alt:"Spin Demo Video",autoPlay:o,loop:o,muted:o,controls:o},children:[{type:a,value:"\n   "},{type:b,tag:y,props:{type:"video\u002Fmp4",src:"https:\u002F\u002Fserversideup.net\u002Fwp-content\u002Fuploads\u002F2022\u002F01\u002Fspin-macos-install.mp4"},children:[]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:j,props:{id:E},children:[{type:b,tag:h,props:{href:"#install-docker-desktop",ariaHidden:k,tabIndex:l},children:[{type:b,tag:d,props:{className:[m,n]},children:[]}]},{type:a,value:F}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"MacOS does not ship with Docker by default. To get Docker installed, you will need \"Docker Desktop\", which is the official desktop tool developed by Docker."}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:b,tag:h,props:{href:"https:\u002F\u002Fdocs.docker.com\u002Fdesktop\u002Fmac\u002Finstall\u002F",rel:["nofollow","noopener","noreferrer"],target:"_blank"},children:[{type:a,value:"Learn how to install Docker Desktop →"}]}]},{type:a,value:c},{type:b,tag:j,props:{id:G},children:[{type:b,tag:h,props:{href:"#download-and-install-spin",ariaHidden:k,tabIndex:l},children:[{type:b,tag:d,props:{className:[m,n]},children:[]}]},{type:a,value:"Download and install "},{type:b,tag:f,props:{},children:[{type:a,value:p}]}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"Once Docker is installed, you are now ready to install "},{type:b,tag:f,props:{},children:[{type:a,value:p}]},{type:a,value:". Run the installer with this simple command in your terminal. "},{type:b,tag:q,props:{},children:[{type:a,value:"No root permissions required."}]}]},{type:a,value:c},{type:b,tag:r,props:{className:[s]},children:[{type:b,tag:t,props:{className:[u,v]},children:[{type:b,tag:f,props:{},children:[{type:b,tag:d,props:{className:[e,M]},children:[{type:a,value:"sh"}]},{type:a,value:" -c "},{type:b,tag:d,props:{className:[e,N]},children:[{type:a,value:w},{type:b,tag:d,props:{className:[e,x]},children:[{type:b,tag:d,props:{className:[e,x]},children:[{type:a,value:"$("}]},{type:b,tag:d,props:{className:[e,M]},children:[{type:a,value:"curl"}]},{type:a,value:" -fsSL https:\u002F\u002Fraw.githubusercontent.com\u002Fserversideup\u002Fspin\u002Fmain\u002Ftools\u002Finstall.sh"},{type:b,tag:d,props:{className:[e,x]},children:[{type:a,value:")"}]}]},{type:a,value:w}]},{type:a,value:c}]}]}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"The above script will install spin at the "},{type:b,tag:"em",props:{},children:[{type:a,value:"user"}]},{type:a,value:" level in "},{type:b,tag:f,props:{},children:[{type:a,value:"~\u002F.spin"}]},{type:a,value:", using less than 300KB of storage."}]},{type:a,value:c},{type:b,tag:j,props:{id:H},children:[{type:b,tag:h,props:{href:"#add-spin-to-your-path",ariaHidden:k,tabIndex:l},children:[{type:b,tag:d,props:{className:[m,n]},children:[]}]},{type:a,value:"Add "},{type:b,tag:f,props:{},children:[{type:a,value:p}]},{type:a,value:" to your PATH"}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"In order for your terminal to know where "},{type:b,tag:f,props:{},children:[{type:a,value:p}]},{type:a,value:" is located, we need to add this to your \"PATH\" for your shell. Depending on your shell, you will need to "},{type:b,tag:q,props:{},children:[{type:a,value:"paste the following text at the BOTTOM of the appropriate file"}]},{type:a,value:":"}]},{type:a,value:c},{type:b,tag:"alert",props:{type:"info"},children:[{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"You can run "},{type:b,tag:f,props:{},children:[{type:a,value:"echo $0"}]},{type:a,value:" in your terminal to figure out which shell you are using."}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:r,props:{className:[s]},children:[{type:b,tag:t,props:{className:[u,v]},children:[{type:b,tag:f,props:{},children:[{type:b,tag:d,props:{className:[e,z]},children:[{type:a,value:"# Add this to `~\u002F.zshrc` or `~\u002F.bash_profile`"}]},{type:a,value:c},{type:b,tag:d,props:{className:[e,A,B]},children:[{type:a,value:"export"}]},{type:a,value:" "},{type:b,tag:d,props:{className:[e,"assign-left",x]},children:[{type:b,tag:d,props:{className:[e,C,D]},children:[{type:a,value:"PATH"}]}]},{type:b,tag:d,props:{className:[e,"operator"]},children:[{type:a,value:"="}]},{type:b,tag:d,props:{className:[e,N]},children:[{type:a,value:w},{type:b,tag:d,props:{className:[e,C,D]},children:[{type:a,value:"$HOME"}]},{type:a,value:"\u002F.spin\u002Fbin:"},{type:b,tag:d,props:{className:[e,C,D]},children:[{type:a,value:"$PATH"}]},{type:a,value:w}]},{type:a,value:c}]}]}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"Files to modify:"}]},{type:a,value:c},{type:b,tag:"ul",props:{},children:[{type:a,value:c},{type:b,tag:O,props:{},children:[{type:b,tag:q,props:{},children:[{type:a,value:"ZSH (most modern Macs):"}]},{type:a,value:" ~\u002F.zshrc"}]},{type:a,value:c},{type:b,tag:O,props:{},children:[{type:b,tag:q,props:{},children:[{type:a,value:"Bash:"}]},{type:a,value:" ~\u002F.bash_profile"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"You can use something like "},{type:b,tag:f,props:{},children:[{type:a,value:"nano"}]},{type:a,value:" or "},{type:b,tag:f,props:{},children:[{type:a,value:"vim"}]},{type:a,value:" to modify these files."}]},{type:a,value:c},{type:b,tag:j,props:{id:I},children:[{type:b,tag:h,props:{href:"#apply-your-changes",ariaHidden:k,tabIndex:l},children:[{type:b,tag:d,props:{className:[m,n]},children:[]}]},{type:a,value:J}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"To apply the changes, simply restart your terminal or you can source the file you just modified:"}]},{type:a,value:c},{type:b,tag:r,props:{className:[s]},children:[{type:b,tag:t,props:{className:[u,v]},children:[{type:b,tag:f,props:{},children:[{type:b,tag:d,props:{className:[e,z]},children:[{type:a,value:"# If you're using ZSH"}]},{type:a,value:c},{type:b,tag:d,props:{className:[e,A,B]},children:[{type:a,value:y}]},{type:a,value:" ~\u002F.zshrc\n\n"},{type:b,tag:d,props:{className:[e,z]},children:[{type:a,value:"# If you're using Bash"}]},{type:a,value:c},{type:b,tag:d,props:{className:[e,A,B]},children:[{type:a,value:y}]},{type:a,value:" ~\u002F.bash_profile\n"}]}]}]},{type:a,value:c},{type:b,tag:j,props:{id:K},children:[{type:b,tag:h,props:{href:"#validate-its-working",ariaHidden:k,tabIndex:l},children:[{type:b,tag:d,props:{className:[m,n]},children:[]}]},{type:a,value:L}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"You should be able to run this and get a result 🥳"}]},{type:a,value:c},{type:b,tag:r,props:{className:[s]},children:[{type:b,tag:t,props:{className:[u,v]},children:[{type:b,tag:f,props:{},children:[{type:a,value:"spin version\n"}]}]}]}]},dir:"\u002Fen\u002Finstallation",path:"\u002Fen\u002Finstallation\u002Finstall-macos",extension:".md",createdAt:P,updatedAt:P,to:"\u002Finstallation\u002Finstall-macos"},prev:{title:"Comparisons",path:"\u002Fen\u002Fgetting-started\u002Fcomparisons",to:"\u002Fgetting-started\u002Fcomparisons"},next:{title:"Install to Windows",path:"\u002Fen\u002Finstallation\u002Finstall-windows",to:"\u002Finstallation\u002Finstall-windows"}}],fetch:{},mutations:[]}}("text","element","\n","span","token","code","p","a",2,"h2","true",-1,"icon","icon-link",true,"spin","strong","div","nuxt-content-highlight","pre","language-bash","line-numbers","\"","variable","source","comment","builtin","class-name","environment","constant","install-docker-desktop","Install Docker Desktop","download-and-install-spin","add-spin-to-your-path","apply-your-changes","Apply your changes","validate-its-working","Validate it's working","function","string","li","2022-07-06T20:25:24.786Z")));
__NUXT_JSONP__("/installation/install-windows", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M){return {data:[{document:{slug:"install-windows",description:"",title:"Install to Windows",position:3.2,category:"Installation",toc:[{id:y,depth:2,text:z},{id:A,depth:q,text:B},{id:C,depth:q,text:D},{id:E,depth:q,text:F}],body:{type:"root",children:[{type:b,tag:r,props:{type:G},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"This document is a work in progress. We're currently testing some things out and continuing to add to this document. If you see errors or have advice, please contribute! 😃"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:"h2",props:{id:y},children:[{type:b,tag:e,props:{href:"#installing-windows-subsystem-for-linux-wsl",ariaHidden:g,tabIndex:h},children:[{type:b,tag:f,props:{className:[i,j]},children:[]}]},{type:a,value:z}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Windows requires a \"subsystem Linux\" distribution which takes some configuring on a brand new machine. Once configured, Linux will be running as a virtual machine on your Windows computer, allowing you to run Docker."}]},{type:a,value:c},{type:b,tag:s,props:{id:A},children:[{type:b,tag:e,props:{href:"#install-the-kernel-update",ariaHidden:g,tabIndex:h},children:[{type:b,tag:f,props:{className:[i,j]},children:[]}]},{type:a,value:B}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"To prevent errors with Docker Desktop, be sure to have the latest Linux Kernel update installed. "},{type:b,tag:e,props:{href:"https:\u002F\u002Fdocs.microsoft.com\u002Fen-us\u002Fwindows\u002Fwsl\u002Finstall-manual#step-4---download-the-linux-kernel-update-package",rel:[l,m,n],target:o},children:[{type:a,value:"Refer to the documentation for download →"}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"If you do not install this update, you will see this error on launch of Docker Desktop."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:k,props:{alt:"WSL 2 Installation Warning",src:"windows\u002Fwsl-incomplete.png"},children:[]}]},{type:a,value:c},{type:b,tag:p,props:{id:"install-windows-subsystem-linux-wsl"},children:[{type:b,tag:e,props:{href:"#install-windows-subsystem-linux-wsl",ariaHidden:g,tabIndex:h},children:[{type:b,tag:f,props:{className:[i,j]},children:[]}]},{type:a,value:"Install Windows Subsystem Linux (WSL)"}]},{type:a,value:c},{type:b,tag:r,props:{type:"info"},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"The Official documentation for installing WSL can be found here: "},{type:b,tag:e,props:{href:H,rel:[l,m,n],target:o},children:[{type:a,value:H}]}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"We prefer Ubuntu as our distribution. So if you're happy with that recommendation, run this command in PowerShell as administrator to install WSL."}]},{type:a,value:c},{type:b,tag:r,props:{type:G},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Make sure to right click on the PowerShell icon and click "},{type:b,tag:"b",props:{},children:[{type:a,value:"Run as Administrator."}]}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:t,props:{className:[u]},children:[{type:b,tag:v,props:{className:[w,"language-powershell"]},children:[{type:b,tag:x,props:{},children:[{type:a,value:"wsl "},{type:b,tag:f,props:{className:[I,J]},children:[{type:a,value:"--"}]},{type:a,value:"install "},{type:b,tag:f,props:{className:[I,J]},children:[{type:a,value:"-"}]},{type:a,value:"d ubuntu\n"}]}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:k,props:{alt:"WSL Install Command",src:"windows\u002Fwsl-install.png"},children:[]}]},{type:a,value:c},{type:b,tag:p,props:{id:"install-docker-desktop"},children:[{type:b,tag:e,props:{href:"#install-docker-desktop",ariaHidden:g,tabIndex:h},children:[{type:b,tag:f,props:{className:[i,j]},children:[]}]},{type:a,value:"Install Docker Desktop"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Download and install the latest version of Docker Desktop from Docker's Website "},{type:b,tag:e,props:{href:K,rel:[l,m,n],target:o},children:[{type:a,value:K}]}]},{type:a,value:c},{type:b,tag:s,props:{id:C},children:[{type:b,tag:e,props:{href:"#configuration",ariaHidden:g,tabIndex:h},children:[{type:b,tag:f,props:{className:[i,j]},children:[]}]},{type:a,value:D}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"If prompted, leave the default options checked."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:k,props:{alt:"Docker Configuration",src:"windows\u002Fdocker-desktop-configuration.png"},children:[]}]},{type:a,value:c},{type:b,tag:s,props:{id:E},children:[{type:b,tag:e,props:{href:"#accept-the-terms",ariaHidden:g,tabIndex:h},children:[{type:b,tag:f,props:{className:[i,j]},children:[]}]},{type:a,value:F}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Make sure you open \"Docker Desktop\" (double click the Docker Desktop icon from your Desktop) after install and accept the terms."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:k,props:{alt:"Accept Docker EULA",src:"windows\u002Fdocker-accept-eula.png"},children:[]}]},{type:a,value:c},{type:b,tag:p,props:{id:"install-windows-terminal-optional"},children:[{type:b,tag:e,props:{href:"#install-windows-terminal-optional",ariaHidden:g,tabIndex:h},children:[{type:b,tag:f,props:{className:[i,j]},children:[]}]},{type:a,value:"Install Windows Terminal (Optional)"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Although this application is still in preview, you may want to consider installing this for your best experience. You'll get tab support for CLIs and a few other bonus features."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"You can install it from the Microsoft Store or from their Github page:"},{type:b,tag:"br",props:{},children:[]},{type:a,value:" "},{type:b,tag:e,props:{href:"https:\u002F\u002Fdocs.microsoft.com\u002Fen-us\u002Fwindows\u002Fterminal\u002Finstall",rel:[l,m,n],target:o},children:[{type:a,value:"Download Windows Terminal →"}]}]},{type:a,value:c},{type:b,tag:p,props:{id:"verify-everything-is-working"},children:[{type:b,tag:e,props:{href:"#verify-everything-is-working",ariaHidden:g,tabIndex:h},children:[{type:b,tag:f,props:{className:[i,j]},children:[]}]},{type:a,value:"Verify everything is working"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"You can validate Docker is working by running this command in your Windows Terminal:"}]},{type:a,value:c},{type:b,tag:t,props:{className:[u]},children:[{type:b,tag:v,props:{className:[w,L]},children:[{type:b,tag:x,props:{},children:[{type:a,value:"docker info\n"}]}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"It should return version information."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:k,props:{alt:"Docker Info",src:"windows\u002Fdocker-info.png"},children:[]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"You can also run a simple container to ensure everything is working with container execution:"}]},{type:a,value:c},{type:b,tag:t,props:{className:[u]},children:[{type:b,tag:v,props:{className:[w,L]},children:[{type:b,tag:x,props:{},children:[{type:a,value:"docker run --rm hello-world\n"}]}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"It should return something like this."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:k,props:{alt:"Docker Run Hello World!",src:"windows\u002Fdocker-run-hello-world.png"},children:[]}]}]},dir:"\u002Fen\u002Finstallation",path:"\u002Fen\u002Finstallation\u002Finstall-windows",extension:".md",createdAt:M,updatedAt:M,to:"\u002Finstallation\u002Finstall-windows"},prev:{title:"Install to macOS",path:"\u002Fen\u002Finstallation\u002Finstall-macos",to:"\u002Finstallation\u002Finstall-macos"},next:{title:"Install to Linux",path:"\u002Fen\u002Finstallation\u002Finstall-linux",to:"\u002Finstallation\u002Finstall-linux"}}],fetch:{},mutations:[]}}("text","element","\n","p","a","span","true",-1,"icon","icon-link","img","nofollow","noopener","noreferrer","_blank","h1",3,"alert","h3","div","nuxt-content-highlight","pre","line-numbers","code","installing-windows-subsystem-for-linux-wsl","Installing Windows Subsystem for Linux (WSL)","install-the-kernel-update","Install The Kernel Update","configuration","Configuration","accept-the-terms","Accept the terms","warning","https:\u002F\u002Fdocs.microsoft.com\u002Fen-us\u002Fwindows\u002Fwsl\u002Finstall","token","operator","https:\u002F\u002Fwww.docker.com\u002Fproducts\u002Fdocker-desktop","language-bash","2022-01-13T19:22:03.190Z")));
__NUXT_JSONP__("/getting-started/introduction", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N){return {data:[{document:{slug:"introduction",description:x,title:"Introduction & Concepts",position:q,category:"Getting Started",benefits:["That's much easier to type than 65 characters!","Spin follows the same Docker syntax","It's easy to onboard people to your team (people don't need to relearn custom aliases for your team if they are already familiar with Docker)"],toc:[{id:y,depth:q,text:"Why use spin?"},{id:z,depth:q,text:"How spin works"},{id:A,depth:q,text:B},{id:C,depth:3,text:D},{id:E,depth:q,text:F},{id:G,depth:q,text:"Can I use spin if I don't run Docker in \"Swarm Mode\" in production?"}],body:{type:"root",children:[{type:b,tag:r,props:{id:y},children:[{type:b,tag:j,props:{href:"#why-use-spin",ariaHidden:m,tabIndex:n},children:[{type:b,tag:c,props:{className:[o,p]},children:[]}]},{type:a,value:"Why use "},{type:b,tag:h,props:{},children:[{type:a,value:s}]},{type:a,value:"?"}]},{type:a,value:d},{type:b,tag:f,props:{},children:[{type:a,value:"Spin is created to simplify the replication of your production environment and enable you to manage your infrastructure dependencies from a single file."}]},{type:a,value:d},{type:b,tag:f,props:{},children:[{type:a,value:"The days of \"make sure to update this on your machine\" are over. Commit once, and deploy that change to everyone."}]},{type:a,value:d},{type:b,tag:r,props:{id:z},children:[{type:b,tag:j,props:{href:"#how-spin-works",ariaHidden:m,tabIndex:n},children:[{type:b,tag:c,props:{className:[o,p]},children:[]}]},{type:a,value:"How "},{type:b,tag:h,props:{},children:[{type:a,value:s}]},{type:a,value:" works"}]},{type:a,value:d},{type:b,tag:f,props:{},children:[{type:a,value:"Spin simply is a \"wrapper script\" that shortens the syntax of official Docker commands. Spin dramatically improves the developer experience of while using Docker without abandoning a standardized protocol."}]},{type:a,value:d},{type:b,tag:r,props:{id:A},children:[{type:b,tag:j,props:{href:"#docker-overrides",ariaHidden:m,tabIndex:n},children:[{type:b,tag:c,props:{className:[o,p]},children:[]}]},{type:a,value:B}]},{type:a,value:d},{type:b,tag:f,props:{},children:[{type:a,value:"The most powerful concept we embrace is the use of "},{type:b,tag:j,props:{href:"https:\u002F\u002Fdocs.docker.com\u002Fcompose\u002Fextends\u002F",rel:["nofollow","noopener","noreferrer"],target:"_blank"},children:[{type:a,value:"Docker Overrides"}]},{type:a,value:". This allows you to have multiple files and override your base file, depending what environment you are in."}]},{type:a,value:d},{type:b,tag:f,props:{},children:[{type:a,value:"For example, let's say our project directory has these three files:"}]},{type:a,value:d},{type:b,tag:t,props:{className:[u]},children:[{type:b,tag:v,props:{className:[w,"language-text"]},children:[{type:b,tag:h,props:{},children:[{type:a,value:"\u002Fmy-project\n├── docker-compose.yml\n├── docker-compose.dev.yml\n└── docker-compose.prod.yml\n"}]}]}]},{type:a,value:d},{type:b,tag:f,props:{},children:[{type:a,value:"We can use "},{type:b,tag:h,props:{},children:[{type:a,value:"docker-compose.yml"}]},{type:a,value:" as our base file, then "},{type:b,tag:h,props:{},children:[{type:a,value:"docker-compose.dev.yml"}]},{type:a,value:" as our \"override\". This will essentially merge the files."}]},{type:a,value:d},{type:b,tag:f,props:{},children:[{type:a,value:"To do that, we need to run:"}]},{type:a,value:d},{type:b,tag:t,props:{className:[u]},children:[{type:b,tag:v,props:{className:[w,H]},children:[{type:b,tag:h,props:{},children:[{type:a,value:"docker compose -f docker-compose.yml -f docker-compose.dev.yml up\n"}]}]}]},{type:a,value:d},{type:b,tag:f,props:{},children:[{type:a,value:"This will call the files in order and \"merge\" them together:"}]},{type:a,value:d},{type:b,tag:"img",props:{src:"docker-overrides.png",alt:"Docker Overrides Diagram"},children:[]},{type:a,value:d},{type:b,tag:"h4",props:{id:"our-expected-result-for-development"},children:[{type:b,tag:j,props:{href:"#our-expected-result-for-development",ariaHidden:m,tabIndex:n},children:[{type:b,tag:c,props:{className:[o,p]},children:[]}]},{type:a,value:"Our Expected Result for Development"}]},{type:a,value:d},{type:b,tag:t,props:{className:[u]},children:[{type:b,tag:v,props:{className:[w,"language-yaml"]},children:[{type:b,tag:h,props:{},children:[{type:b,tag:c,props:{className:[e,k,l]},children:[{type:a,value:"version"}]},{type:b,tag:c,props:{className:[e,g]},children:[{type:a,value:i}]},{type:a,value:I},{type:b,tag:c,props:{className:[e,"number"]},children:[{type:a,value:"3.8"}]},{type:a,value:d},{type:b,tag:c,props:{className:[e,k,l]},children:[{type:a,value:"services"}]},{type:b,tag:c,props:{className:[e,g]},children:[{type:a,value:i}]},{type:a,value:J},{type:b,tag:c,props:{className:[e,k,l]},children:[{type:a,value:"php"}]},{type:b,tag:c,props:{className:[e,g]},children:[{type:a,value:i}]},{type:a,value:K},{type:b,tag:c,props:{className:[e,k,l]},children:[{type:a,value:L}]},{type:b,tag:c,props:{className:[e,g]},children:[{type:a,value:i}]},{type:a,value:" serversideup\u002Fphp"},{type:b,tag:c,props:{className:[e,g]},children:[{type:a,value:i}]},{type:a,value:"8.1"},{type:b,tag:c,props:{className:[e,g]},children:[{type:a,value:M}]},{type:a,value:"fpm"},{type:b,tag:c,props:{className:[e,g]},children:[{type:a,value:M}]},{type:a,value:"nginx\n    "},{type:b,tag:c,props:{className:[e,k,l]},children:[{type:a,value:"environment"}]},{type:b,tag:c,props:{className:[e,g]},children:[{type:a,value:i}]},{type:a,value:"\n        "},{type:b,tag:c,props:{className:[e,k,l]},children:[{type:a,value:"PRODUCTION"}]},{type:b,tag:c,props:{className:[e,g]},children:[{type:a,value:i}]},{type:a,value:I},{type:b,tag:c,props:{className:[e,"string"]},children:[{type:a,value:"\"false\""}]},{type:a,value:J},{type:b,tag:c,props:{className:[e,k,l]},children:[{type:a,value:"node"}]},{type:b,tag:c,props:{className:[e,g]},children:[{type:a,value:i}]},{type:a,value:K},{type:b,tag:c,props:{className:[e,k,l]},children:[{type:a,value:L}]},{type:b,tag:c,props:{className:[e,g]},children:[{type:a,value:i}]},{type:a,value:" node"},{type:b,tag:c,props:{className:[e,g]},children:[{type:a,value:i}]},{type:a,value:"lts\n"}]}]}]},{type:a,value:d},{type:b,tag:f,props:{},children:[{type:a,value:"Cool, but that's "},{type:b,tag:"em",props:{},children:[{type:a,value:"a lot"}]},{type:a,value:" to type every morning when you jump on the computer!"}]},{type:a,value:d},{type:b,tag:"h3",props:{id:C},children:[{type:b,tag:j,props:{href:"#spin-simplifies-the-development-workflow",ariaHidden:m,tabIndex:n},children:[{type:b,tag:c,props:{className:[o,p]},children:[]}]},{type:a,value:D}]},{type:a,value:d},{type:b,tag:f,props:{},children:[{type:a,value:"Instead of typing 65 characters everytime or having people come up with their own whacky aliases, "},{type:b,tag:h,props:{},children:[{type:a,value:s}]},{type:a,value:" simplifies and follows the Docker standard:"}]},{type:a,value:d},{type:b,tag:t,props:{className:[u]},children:[{type:b,tag:v,props:{className:[w,H]},children:[{type:b,tag:h,props:{},children:[{type:a,value:"spin up\n"}]}]}]},{type:a,value:d},{type:b,tag:f,props:{},children:[{type:a,value:"There are tons of benefits to this:\n"},{type:b,tag:"list",props:{":items":"benefits"},children:[]}]},{type:a,value:d},{type:b,tag:f,props:{},children:[{type:a,value:"That's not all, there are a ton of other actions that you can run to simplify your development workflow. "},{type:b,tag:"nuxt-link",props:{to:"\u002Fcommand-reference\u002Favailable-commands"},children:[{type:a,value:"See All Available Commands →"}]}]},{type:a,value:d},{type:b,tag:r,props:{id:E},children:[{type:b,tag:j,props:{href:"#do-i-run-spin-in-production",ariaHidden:m,tabIndex:n},children:[{type:b,tag:c,props:{className:[o,p]},children:[]}]},{type:a,value:F}]},{type:a,value:d},{type:b,tag:f,props:{},children:[{type:a,value:"Honestly, we don't recommend it. The less moving parts you have in production, the better."}]},{type:a,value:d},{type:b,tag:f,props:{},children:[{type:a,value:"The goal of "},{type:b,tag:h,props:{},children:[{type:a,value:s}]},{type:a,value:" is to simplify the human experience. For your CI stuff, just use the longer commands directly from Docker. Your CI runner doesn't mind typing those commands in every single time."}]},{type:a,value:d},{type:b,tag:r,props:{id:G},children:[{type:b,tag:j,props:{href:"#can-i-use-spin-if-i-dont-run-docker-in-swarm-mode-in-production",ariaHidden:m,tabIndex:n},children:[{type:b,tag:c,props:{className:[o,p]},children:[]}]},{type:a,value:"Can I use "},{type:b,tag:h,props:{},children:[{type:a,value:s}]},{type:a,value:" if I don't run Docker in \"Swarm Mode\" in production?"}]},{type:a,value:d},{type:b,tag:f,props:{},children:[{type:a,value:"Of course! Although you might be missing the full benefits of running full Docker in production, using Spin in development may help solve a lot of problems for managing a fleet of development machines."}]}]},dir:"\u002Fen\u002Fgetting-started",path:"\u002Fen\u002Fgetting-started\u002Fintroduction",extension:".md",createdAt:N,updatedAt:N,to:"\u002Fgetting-started\u002Fintroduction"},prev:{title:x,path:"\u002Fen\u002Findex",to:"\u002F"},next:{title:"Comparisons",path:"\u002Fen\u002Fgetting-started\u002Fcomparisons",to:"\u002Fgetting-started\u002Fcomparisons"}}],fetch:{},mutations:[]}}("text","element","span","\n","token","p","punctuation","code",":","a","key","atrule","true",-1,"icon","icon-link",2,"h2","spin","div","nuxt-content-highlight","pre","line-numbers","","why-use-spin","how-spin-works","docker-overrides","Docker overrides","spin-simplifies-the-development-workflow","Spin simplifies the development workflow","do-i-run-spin-in-production","Do I run spin in production?","can-i-use-spin-if-i-dont-run-docker-in-swarm-mode-in-production","language-bash"," ","\n  ","\n    ","image","-","2021-12-23T22:36:28.401Z")));
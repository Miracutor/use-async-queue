var n=require("react");module.exports=function(e){var t=e.concurrency,r=e.done;t<1&&(t=1);var u=n.useState(0),c=u[0],o=u[1],s=n.useState(0),a=s[0],l=s[1],i=n.useState(0),f=i[0],g=i[1],d=n.useRef([]),h=n.useRef([]);return n.useEffect(function(){console.log("DEBUG: useEffect called",c,d.current.length,a,h.current.length);for(var n=function(){var n=h.current.pop();l(function(n){return n-1}),d.current.push(n),o(function(n){return n+1});var e=n.task();e.then(function(){console.log("DEBUG: task resolved, calling done"),d.current.pop(n),o(function(n){return n-1}),g(function(n){return n+1}),r(Object.assign({},n,{result:e}))}).catch(function(){console.log("DEBUG: task rejected, calling done"),d.current.pop(n),o(function(n){return n-1}),g(function(n){return n+1}),r(Object.assign({},n,{result:e}))})};d.current.length<t&&h.current.length>0;)n()},[t,r,a,c]),{add:n.useCallback(function(n){h.current.push(n),l(function(n){return n+1})},[h]),numInFlight:c,numRemaining:a,numDone:f}};
//# sourceMappingURL=use-async-queue.js.map

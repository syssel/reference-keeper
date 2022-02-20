/* global TrelloPowerUp */
//import { Reference } from './js/parser.js'; TODO: Move parser to module


function Reference(data) {
    
      var author_names = data.authors.map(d=>d.name);
  
      if (data.authors.length==1){
        var author = author_names[0]
        
      } else if (data.authors.length==2){
        var author = author_names.join(" and ")
        
      } else {
        var author = author_names[0]+" et al."
      };
  
    const year = data.year.toString();
  
    this.name = `${author} (${year}) "${data.title}"`;
    this.desc = `
**Authors**    ${author_names.join(", ")}

**Abstract**

${data.abstract}`;

};


var Promise = TrelloPowerUp.Promise;

TrelloPowerUp.initialize({
  
  'card-from-url': function (t, options) {
    
    // Accepted hosts
    const hosts = {
      "arxiv.org": "arXiv",
      "aclanthology.org": "ACL",
    };    
  
    const url = new URL(options.url);
    
    if (url.host in hosts){

      // Parse url and prepare semantic scholar API query
      const key = hosts[url.host];
      const components = url.pathname.split("/");

      if (url.pathname.endsWith("/")){
        var id = components[components.length-2];}
      else {
        var id = components[components.length-1];};
      var id = id.replace(".pdf", "") // Strip .pdf extension from id

      var query = `https://api.semanticscholar.org/v1/paper/${key}:${id}`;
      
      // Return card info
      return new Promise(function (resolve) {
        
        // Fetch API response
        fetch(query)
        
        // If error, resolve right away, else pass on response as json
        .then(function(response){
          
          if (!response.ok) {
              resolve({name: options.url,});}
          else {
              return response.json()}
        })
        
        // Finally, resolve card as Reference given data 
        .then((data) => {
                var reference = new Reference(data);
                resolve({
                    name: reference.name,
                    desc: reference.desc
                });
          });
      });      
    
    } else {
    // If not accepted host
    throw t.NotHandled();
  };
  },  
});
var button = document.getElementById("search-button");
var query = document.getElementById("Ssearch-text");
var sterm="";


button.addEventListener("click",function(){
    if (query.value.length > 0){
           sterm = query.value ; // send it to search engine 
            
            
            query.value="";

    }
                                            
} )



var button = document.getElementById("search-button");
var query = document.getElementById("Ssearch-text");
var sterm="";

button.addEventListener("click",afterbutton);
query.addEventListener("keypress",afterkeypress);


function afterbutton(){
    if (query.value.length > 0) {
        sterm = query.value;// send it to search engine 
       //query.value="";
        } }

function afterkeypress(event){
if (query.value.length > 0 && event.which ===13) {
    sterm = query.value;// send it to search engine 
    //query.value="";
    console.log(sterm);

    } }




/*button.addEventListener("click",function(){
    if (query.value.length > 0){
           sterm = query.value ; // send it to search engine 
            
            
            query.value="";

    }})*/
                                            



//var button = document.getElementById("search-button");
//var query = document.getElementById("Ssearch-text");
//var sterm ="";


//function afterbutton(){
  //      if (query.value.length > 0) {
    //        sterm = query.value;// send it to search engine 
      //      query.value="";
        //    } }

//function afterkeypress(Event){
  //  if (query.value.length > 0 && Event.keycode ===13) {
    //    sterm = query.value;// send it to search engine 
      //  query.value="";
        //} }

//button.addEventListner("click",afterbutton);
//query.addEventListner("keypress",afterkeypress);
/*document.getElementById("search-button").onclick = function(){
if (document.getElementById("Ssearch-text").value.length>0){
   console.log( document.getElementById.value);




}

}*/






























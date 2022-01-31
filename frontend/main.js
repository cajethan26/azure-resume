window.addEventListener('DOMContentLoaded', (event) =>{
    getVisitCount(); //when the content is loaded, run the event - visitCount
})

const functionApi = '';

// code that grabs the js code provided by the API, AND DISPLAY IN THE HTML
const getVisitCount = () => {
    let count = 30; //variable to hold the count data, can be initialized to a random value.
    fetch(functionApi).then(response =>{ //feetch the data from the url provided by the functionApi, then grab the respnose
        return response.json() 
    }).then (response =>{ // grab the response
        console.log("Website callled function API"); //log a message to console for debuggng purposes.
        count = response.count; // now set thecount variable to the result of the API response
        document.getElementById("counter").innerText =count; //grab the html document, and the element thathas the id counter, and set the innertext to the value of the counter
    }).catch(function(error){
        console.log(error);
    });
    return count;
}
//jq and js goes here to interface with dom, and use ajax calls to POST GET DELETE PUT data from express server

$(document).ready(function(){
    console.log('JQ Sourced.');
    renderList();
    addClickHandlers();
});

function renderList(){
    console.log('In renderList');
    //AJAX GET
}; //end renderList

function addClickHandlers(){
    console.log('In addClickHandlers');
    $('#addTaskButton').on('click', handleSubmit);
}; //end addClickHandlers

function handleSubmit(){
    console.log('in handleSubmit');
    //AJAX POST with data from input field on DOM
}; //end handleSubmit
//jq and js goes here to interface with dom, and use ajax calls to POST GET DELETE PUT data from express server

$(document).ready(function(){
    console.log('JQ Sourced.');
    getList();
    addClickHandlers();
});

function getList(){
    console.log('In getList');
    //AJAX GET
    $.ajax({
        type : 'GET',
        url : '/tasks'
    }).then(function (response){
        console.log('GET from server successful');
        renderList(response);
    }).catch(function (error){
        alert('Error GETting data from server!', error);
    });
}; //end getList

function addClickHandlers(){
    console.log('In addClickHandlers');
    $('#addTaskButton').on('click', handleSubmit);
    $('#taskList').on('click', '.delBtn', handleDelete);
    $('#taskList').on('click', '.chkDone', handleChecked);
}; //end addClickHandlers

function handleSubmit(){
    console.log('Add Task button clicked.');
    let task = {
        task : $('#taskInput').val()
    };
    addTask(task);
}; //end handleSubmit

function addTask(task){
    console.log('in addTask', task);
    //AJAX POST with data from input field on DOM
    $.ajax({
        type : 'POST',
        url : '/tasks',
        data: task
    }).then(function(response){
        console.log('POST successful.');
        getList();
    }).catch(function(error){
        console.log('Error in post');
        alert('Unable to add task.');
    });
}; //end addTask

function handleDelete(){
    const id = $(this).closest('tr').attr('id');
    console.log('in handleDelete', id);

    $.ajax({
        type : 'DELETE',
        url : `/tasks/${id}`
    }).then(function (response){
        console.log('Deleted');
        getList();
    }).catch(function (error){
        alert('error deleting book');
    });
} //end handleDelete

function handleChecked(){
    const id = $(this).closest('tr').attr('id');
    let status = $(this).prop('checked');
    console.log('handleChecked', id, status);

    //ajax PUT
    $.ajax({
        type : 'PUT',
        url : `/tasks/${id}`,
        data : {isChecked : status}
      }).then(function (response){
            console.log('updated');
            getList();
        }).catch(function (error){
            alert('error updating checked data in database');
    });
}; //end handleChecked

function renderList(tasks){
    console.log('In renderList', tasks);
    $('#taskList').empty();

    let $tr;
    for(let task of tasks){
        console.log('In render loop logic');
        $tr = $(`<tr id=${task.id}></tr>`);
        $tr.append(`<td>${task.task}</td>`);
        if(task.completed){
            $tr.append(`<td>Complete!</td>`);
            $tr.append(`<input type="checkbox" class="chkDone"></input>`);
        } else {
            $tr.append(`<td>Not Yet!</td>`);
            $tr.append(`<input type="checkbox" class="chkDone"></input>`);
        }
        $tr.append(`<input type="button" class="delBtn">DELETE</input>`);
        $('#taskList').append($tr);
    } //end for of
}; //end renderList
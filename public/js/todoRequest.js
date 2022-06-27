let xhr = new XMLHttpRequest();

// fetching

function deleteAction()
{
    let datasetValue= this.dataset.task;
    console.log("  x "+ datasetValue)
    // alert(`You Delete Tasks Successfully !${datasetValue}`);
    xhr.open("DELETE", `/${datasetValue}`, true);
    xhr.send(datasetValue);
}

function addAction(){
    let taskFieldValue=document.getElementById("task").value
    // alert('You Added Tasks Successfully !'+ taskFieldValue);
    console.log('adding..... '+taskFieldValue)
    // let params = 'orem=ipsum&name=binny';
    xhr.open('POST', "/"+taskFieldValue, true);
    //Send the proper header information along with the request
    // xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.setRequestHeader("Content-type", "application/json");

    xhr.onreadystatechange = function() {//Call a function when the state changes.
        if(xhr.readyState == 4 && xhr.status == 200) {
            // alert(xhr.responseText);
            console.log(xhr.responseText)
        }
    }
    console.log(`sending task value .... `+taskFieldValue)
    let userTodo={
      task:taskFieldValue
    }
    xhr.send(JSON.stringify(userTodo));
}

document.getElementById('submit-task').addEventListener('click',addAction)
document.querySelectorAll('button#delete-task').forEach(function(el){
    // console.log(item.dataset.task)

    console.log(" element "+el);
    el.addEventListener("click",deleteAction)
})

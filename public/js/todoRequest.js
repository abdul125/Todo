let taskFieldValue=document.getElementById('task');

function deleteAction(){
    console.log(taskFieldValue.value+"  -----"+typeof(taskFieldValue)+" "+taskFieldValue.length)
    alert(`You Delete Tasks Successfully !${taskFieldValue.value}`);
    console.log('deleete..... '+taskFieldValue.value)
}

function addAction(){
    console.log(taskFieldValue.value+" ---- "+typeof(taskFieldValue.value)+" * "+taskFieldValue.value.length);
    alert('You Added Tasks Successfully !'+ taskFieldValue.value);
    console.log('add..... '+taskFieldValue.value)

}
// document.getElementById('submit-task').onclick(addAction)
document.getElementById('submit-task').addEventListener('click',addAction)
document.getElementById('delete-task').addEventListener('click',deleteAction)

// Functions to retrieve tasks using Fetch & Promise APIs
const url = 'http://localhost:8080/taskservlet/api/task?accountId='

function loadTasks(accountId) {
  if (accountId < 1) console.log('Invalid request.');
  fetch(url, {
      method: 'GET',
      mode: 'cors',
      cache: 'no-cache',
      headers:{
        'Content-Type': 'application/json; charset=utf-8'
      },
      redirect: 'follow'
    }
  ).then(function handleResponse(response) {
    if(response.ok){
      return response.json();
    }else{
      console.log('Error making request.');
      return;
    }
  }).catch(error => console.error('Caught error:', error));
}

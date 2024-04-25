// Call api
const submit = document.getElementById("submit");

function apiCall () {
  const options = {method: 'POST'};
      fetch('http://127.0.0.1:5000/api/endpoint', options);
}

submit.addEventListener("click", apiCall());
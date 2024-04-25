// Call api
const submit = document.getElementById("submit").addEventListener("click", () => {
    const options = {method: 'POST'};
      fetch('http://127.0.0.1:5000/api/endpoint', options);
});


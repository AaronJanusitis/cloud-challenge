// Define the API URL
const apiUrl = 'https://qxaonk4wjj275rggnqmiyhivli0wyqiq.lambda-url.us-east-1.on.aws/';

// Make a GET request
fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
    var div = document.getElementById("counter");
    var content = document.createTextNode(data);
    div.appendChild(content);
  })
  .catch(error => {
    console.error('Error:', error);
  });

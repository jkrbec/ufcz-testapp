document.getElementById('fetchButton').addEventListener('click', function() {
    const csrftoken = document.querySelector('[name=csrfmiddlewaretoken]').value;
    
    fetch('/api-data-test/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': csrftoken
        },
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        let html = '<table>';
        data.categories.forEach(category => {
            html += `<tr><th colspan="2">${category.name}</th></tr>`;
            if (category.weight_classes) {
                category.weight_classes.forEach(weight_class => {
                    html += `<tr><td>${weight_class.description}</td><td>${weight_class.competitor.name}</td></tr>`;
                });
            }
        });
        html += '</table>';
        document.getElementById('dataContainer').innerHTML = html;
        document.getElementById('messageContainer').innerHTML = '<div class="success-message">Your connection is working! Let\'s dig deep and develop some more...</div>';
    })
    .catch(error => {
        console.error('Error fetching data: ', error);
        document.getElementById('dataContainer').innerHTML = '';
        document.getElementById('messageContainer').innerHTML = '<div class="error-message">Your connection failed. Error: ' + error + '</div>';
    });
});

document.getElementById('listInput').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        console.log('Enter key pressed');
        populateList(document.getElementById('listInput').value)
        // Add your code here to handle the Enter key press
    }
});

function populateList(text){
    if (!text || text.length === 0) return;

    let list = document.getElementById("shopping_list");
    let fragment = document.createDocumentFragment();
    let li = document.createElement('li');
    li.innerText = text;
    fragment.appendChild(li);

    list.appendChild(fragment);
}
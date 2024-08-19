
//When the button is clicked, we look for a keyword. 
//If there is a keyword we generate idea
//otherwise we alert no keyword
document.getElementById('generateBtn').addEventListener('click', function () {
    const keyword = document.getElementById('keywordInput').value;
    if (keyword) {
        generateIdea(keyword);
    } else {
        alert("Please enter a keyword or topic");
        }
});

//generate random idea function add more ideas?
function generateIdea(keyword) {
    const ideas = [
        `How to effectively use ${keyword} in your daily routine`,
        `Top 10 tips for mastering ${keyword}`,
        `The history of ${keyword} and its impact on modern society`,
        `Why ${keyword} is important for your business`,
        `The future of ${keyword} in the next decade`
    ];

    const randomIdea = ideas[Math.floor(Math.random() * ideas.length)];
    displayIdea(randomIdea);
}

// const ideaText = document.createElement('span');
// ideaText.textContent = idea;
// ideaText.className = 'idea-text';


function displayIdea(idea) {
    const ideasContainer = document.getElementById('ideasContainer');
    const buttonsContainer = document.getElementById('buttonsContainer');
    
    ideaItem = document.createElement('div');
    ideaItem.className = 'idea-item';
    ideaItem.textContent = idea;
    ideasContainer.appendChild(ideaItem);
}


function displayIdea(idea) {
    const ideasContainer = document.getElementById('ideasContainer');

    const ideaItem = document.createElement('div');
    ideaItem.className = 'idea-item';

    ideaItem.innerHTML = `
        <span>${idea}</span>
        <button class="copyBtn">Copy</button>
        <button class="editBtn">Edit</button>
        <button class="deleteBtn">Delete</button>
    `;

    ideasContainer.appendChild(ideaItem);

    // Add event listeners for the buttons
    ideaItem.querySelector('.copyBtn').addEventListener('click', copyIdea);
    ideaItem.querySelector('.editBtn').addEventListener('click', editIdea);
    ideaItem.querySelector('.deleteBtn').addEventListener('click', deleteIdea);
}

//add function to copy the idea to clipboard
function copyIdea(event) {
    // Function to copy the idea (e.g., copy to clipboard)
}

//add function to edit the idea
function editIdea(event) {
    // Function to edit the idea
}

function deleteIdea(event) {
    // Function to delete the idea
}
document.addEventListener('DOMContentLoaded', function() {
    const savedNotes = JSON.parse(localStorage.getItem('notes')) || [];
    const savedNotesDiv = document.getElementById('saved-notes');

    if (savedNotes.length > 0) {
        savedNotes.forEach((note, index) => {
            const noteElement = document.createElement('div');
            noteElement.classList.add('note-item');

            const noteText = document.createElement('p');
            noteText.textContent = note;

            // Create delete button
            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Delete';
            deleteBtn.classList.add('delete-btn');

            // Add event listener to the delete button
            deleteBtn.addEventListener('click', function() {
                deleteNote(index);
            });

            // Append the note text and delete button to the note element
            noteElement.appendChild(noteText);
            noteElement.appendChild(deleteBtn);
            savedNotesDiv.appendChild(noteElement);
        });
    } else {
        savedNotesDiv.innerHTML = '<p>No notes saved yet.</p>';
    }
});

// Function to delete a note by index
function deleteNote(index) {
    let savedNotes = JSON.parse(localStorage.getItem('notes')) || [];
    
    // Remove the note at the specific index
    savedNotes.splice(index, 1);

    // Update the localStorage with the modified array
    localStorage.setItem('notes', JSON.stringify(savedNotes));

    // Reload the page to reflect the changes
    window.location.reload();
}

document.getElementById('save-btn').addEventListener('click', function() {
    const noteText = document.getElementById('note-input').value;
    if (noteText) {
        let savedNotes = localStorage.getItem('notes');
        savedNotes = savedNotes ? JSON.parse(savedNotes) : [];
        savedNotes.push(noteText);
        localStorage.setItem('notes', JSON.stringify(savedNotes));
        alert('Note saved!');
        document.getElementById('note-input').value = ''; // Clear the textarea
    } else {
        alert('Please write something before saving.');
    }
});

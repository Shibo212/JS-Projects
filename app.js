console.log("HyperMove Taxi App");

function saveNote() {
    var note = document.getElementById("noteInput").value;
    localStorage.setItem("userNote", note);
    displayNotes();
    alert("Note saved successfully!");
}

function displayNotes() {
    var savedNote = localStorage.getItem("userNote");
    var notesBox = document.getElementById("notesBox");
    if (savedNote) {
        notesBox.textContent = savedNote;
    } else {
        notesBox.textContent = "No notes saved.";
    }
}

window.onload = function() {
    displayNotes();
}
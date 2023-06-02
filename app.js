console.log("HyperMove Taxi App");

function saveNote() {
    var note = document.getElementById("noteInput").value;
    var savedNotes = JSON.parse(localStorage.getItem("userNotes")) || [];
    savedNotes.push(note);
    localStorage.setItem("userNotes", JSON.stringify(savedNotes));
    displayNotes();
    alert("Note saved successfully!");
}

function deleteNote(index) {
    var savedNotes = JSON.parse(localStorage.getItem("userNotes")) || [];
    savedNotes.splice(index, 1);
    localStorage.setItem("userNotes", JSON.stringify(savedNotes));
    displayNotes();
}

function displayNotes() {
    var savedNotes = JSON.parse(localStorage.getItem("userNotes")) || [];
    var notesBox = document.getElementById("notesBox");

    if (savedNotes.length > 0) {
        notesBox.innerHTML = ""; // Clear existing notes

        for (var i = 0; i < savedNotes.length; i++) {
            var note = savedNotes[i];
            var noteElement = document.createElement("div");
            noteElement.classList.add("note");
            noteElement.innerHTML = "<span>" + note + "</span><i class='delete-icon' onclick='deleteNote(" + i + ")'>&times;</i>";
            notesBox.appendChild(noteElement);
        }
    } else {
        notesBox.textContent = "No notes saved.";
    }
}

window.onload = function() {
    displayNotes();
}
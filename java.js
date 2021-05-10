console.log("hello");

let addBtn = document.getElementById('addBtn');
addBtn.addEventListener("click", function (f) {
    let addTxt = document.getElementById("addTxt");
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    notesObj.push(addTxt.value);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addTxt.value = "";
    console.log(notesObj);
    sNotes();
})

function sNotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    let html = "";

    notesObj.forEach(function (element, index) {
        html += `
    <div class="card my-2 mx-2" style="width: 18rem;">
            <div class="card-body">
              <h5 class="card-title">Note ${index + 1}</h5>
              <hr>
              <p class="card-text id="editTxt">${element}</p>
              <hr>
              <button id="${index}"onclick="deleteNotes(this.id)" class="btn btn-primary"><i class="fas fa-trash"></i></button>
              
            </div>
     </div>
        
    `;
    });


    let notesElm = document.getElementById("notes");
    if (notesObj.length != 0) {
        notesElm.innerHTML = html;
    }
    else {
        notesElm.innerHTML = `<p style="color: white;"> Nothing here, use "add note" to add your notes<p>`;
    }
}

function deleteNotes(index){
    // console.log(`i am deleting`, index);
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }

    notesObj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    sNotes();
}


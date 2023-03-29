function addRow() {
    var table = document.getElementById("tabel-invat");
    var color = document.getElementById("culoareCelula").value;
    var insertPosition = document.getElementById("pozitieCelula").value;
    
    var row = table.insertRow(insertPosition);
    if (Number.isInteger(parseInt(insertPosition))) {
        for (var i = 0; i < table.rows[0].cells.length; i++) {
        var cell = row.insertCell(i);
        cell.innerHTML = "Celula noua";
        cell.bgColor = color;
        }
    }
    else {
        document.getElementById("mesaj-valoare-incorecta").innerHTML =
         "Valoarea adăugată nu este validă. Introduceți un număr întreg. Refresh to update.";
    }
    
}

function addColumn() {
    var table = document.getElementById("tabel-invat");
    var color = document.getElementById("culoareCelula").value;
    var insertPosition = document.getElementById("pozitieCelula").value;

    if (Number.isInteger(parseInt(insertPosition))) {
        for (var i = 0; i < table.rows.length; i++) {
            var cell = table.rows[i].insertCell(insertPosition);
            cell.innerHTML = "Celula noua";
            cell.bgColor = color;
        }
    }
    else {
        document.getElementById("mesaj-valoare-incorecta").innerHTML =
         "Valoarea adăugată nu este validă. Introduceți un număr întreg. Refresh to update.";
    }
        
}

function incarcaPersoane() {
    // create new XMLHttpRequest object
  var xhr = new XMLHttpRequest();

  // specify the file path for the XML data
  var url = "..\\resurse\\persoane.xml";

  // specify the function to handle the AJAX response
  xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      // create a new DOM parser object
      var parser = new DOMParser();

      // parse the XML data
      var xmlDoc = parser.parseFromString(this.responseText,"text/xml");

      // get the array of person objects from the XML data
      var persons = xmlDoc.getElementsByTagName("persoana");

      // create a new HTML table element
      var table = document.createElement("table");

      // create the header row of the table
      var headerRow = document.createElement("tr");
      var lastNameHeader = document.createElement("th");
      lastNameHeader.innerHTML = "Nume";
      headerRow.appendChild(lastNameHeader);
      var firstNameHeader = document.createElement("th");
      firstNameHeader.innerHTML = "Prenume";
      headerRow.appendChild(firstNameHeader);
      var ageHeader = document.createElement("th");
      ageHeader.innerHTML = "Varsta";
      headerRow.appendChild(ageHeader);
      table.appendChild(headerRow);

      // loop through each person object and create a table row for each one
      for (var i = 0; i < persons.length; i++) {
        var person = persons[i];
        var lastName = person.getElementsByTagName("nume")[0].childNodes[0].nodeValue;
        var firstName = person.getElementsByTagName("prenume")[0].childNodes[0].nodeValue;
        var age = person.getElementsByTagName("varsta")[0].childNodes[0].nodeValue;

        var row = document.createElement("tr");
        var lastNameCell = document.createElement("td");
        lastNameCell.innerHTML = lastName;
        row.appendChild(lastNameCell);
        var firstNameCell = document.createElement("td");
        firstNameCell.innerHTML = firstName;
        row.appendChild(firstNameCell);
        var ageCell = document.createElement("td");
        ageCell.innerHTML = age;
        row.appendChild(ageCell);
        table.appendChild(row);
      }

      // add the table to the HTML document
      var tableContainer = document.getElementById("person-table-container");
      tableContainer.appendChild(table);
    }
  };

  // initiate the AJAX request
  xhr.open("GET", url, true);
  xhr.send();
}

/**
 * Filter through the films table and search by film id
 */
function searchA() {
  // Declare variables
  var input, filter, table, tr, th, i, txtValue;
  //button that is clicked
  input = document.getElementById("spFilmsCounter");
  filter = input.value.toUpperCase();
  //table we are searching through
  table = document.getElementById("tblFilms");
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those that don't match the search query
  for (i = 0; i < tr.length; i++) {
    th = tr[i].getElementsByTagName("th")[0];
    if (th) {
      txtValue = th.textContent || th.innerText;

      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        // Show the table row
        tr[i].style.display = "";
      } else {
        // Hide the table row
        tr[i].style.display = "none";
      }
    }
  }
}

/**
 * Search throught the tables by the search input
 * @param {*} tableId the table that is being displayed
 * @param {*} inputId where the search parameters are entered
 */
function searchB(tableId, inputId) {
  // Declare variables
  var input, filter, table, tr, th, i, txtValue;

  // Get the input element and its value
  input = document.getElementById(inputId);
  filter = input.value.toUpperCase();

  // Get the table element and its rows
  table = document.getElementById(tableId);
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those that don't match the search query
  for (i = 0; i < tr.length; i++) {
    th = tr[i].getElementsByTagName("th")[0];
    if (th) {
      txtValue = th.textContent || th.innerText;

      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        // Show the table row
        tr[i].style.display = "";
      } else {
        // Hide the table row
        tr[i].style.display = "none";
      }
    }
  }
}

/**
 * Hides all other tables other than the table called
 * @param {string} tableId The id of the table being displayed
 */
function hideTablesExcept(tableId) {
  var tables = document.getElementsByTagName('table');

  for (var i = 0; i < tables.length; i++) {
    var table = tables[i];

    if (table.id === tableId) {
      table.style.display = 'table';
    } else {
      table.style.display = 'none';
    }
  }
}

// Window load event listener
window.addEventListener('load', function () {
  // Hide all tables by default
  hideTablesExcept('');
});

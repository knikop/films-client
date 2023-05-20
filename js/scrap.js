///Code that was initially used but then scrapt
///Saved for later use if necessary

/**
 * Fetch films by id
 */
async function fetchFilmsById(){
    const uri = 'http://localhost/films-api/films/{film_id}';
    const film_id = await getData(uri);

    console.log(film_id.data);
    //parseFilms(film_id.data);
}


// <!-- <button type="button" class="btn btn-primary position-relative" onclick="fetchFilmsByID();">
// Films By ID
// <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
// id ="spFilmsCounter">
//   0
//   <span class="visually-hidden" >unread messages</span>
// </span>
// </button> -->

/**
 * Filter through the actors by first and last name
 * NON_FUNCTIONAL
 */
function searchActors() {
    // Declare variables
    var input, filter, table, tr, th, i, txtValue;
    // Get the input element and its value
    input = document.getElementById("spActorsFilter");
    filter = input.value.toUpperCase();
    // Get the table element and its rows
    table = document.getElementById("tblActors");
    tr = table.getElementsByTagName("tr");
  
    // Loop through all table rows, and hide those that don't match the search query
    for (i = 0; i < tr.length; i++) {
      th = tr[i].getElementsByTagName("th");
      for (var j = 0; j < td.length; j++) {
        txtValue = td[j].textContent || td[j].innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          // Show the table row
          th[i].style.display = "";
          // Break the inner loop if a match is found for any column
          break; 
        } else {
          // Hide the table row
          th[i].style.display = "none";
        }
      }
    }
  }
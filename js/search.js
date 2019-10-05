$(document).ready(function(){
  $('#search').keyup(function(){
    var searchValue = ($('#search').val()).trim();
    if(searchValue != '') {
      $.getJSON('data.json', function(result){
        var list = result;
        var options = {
          shouldSort: true,
          threshold: 0.3,
          location: 0,
          distance: 100,
          maxPatternLength: 32,
          minMatchCharLength: 2,
          keys: [
            "titel",
            "schrijver"
          ]
        };
        var fuse = new Fuse(list, options);
        var searchResult = fuse.search(searchValue);
        console.log(searchResult)
        if(searchResult.length > 0) {
          $('#results').empty();
          for(i = 0; i < searchResult.length; i++) {
            $('#results').append('<div class="res"><h3>'+searchResult[i].titel+'</h3><p>'+searchResult[i].schrijver+'</p></div>')
          }

        }
        else {
          $('#results').empty();
          $('#results').html('<center><font face="sans-serif"><h3>Geen resultaten gevonden.</h3></font></center>')
        }
      })
    }
  })
})

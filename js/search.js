$(document).ready(function(){
  $('#search').keyup(function(){
    var searchValue = ($('#search').val()).trim();
    if(searchValue != '') {
      $.getJSON('data.json', function(result){
        var list = result;
        var options = {
          shouldSort: true,
          threshold: 0.4,
          location: 0,
          distance: 100,
          maxPatternLength: 32,
          minMatchCharLength: 2,
          keys: [
            "titel",
            "schrijver",
            "beschrijving",
            "vakgebied"
          ]
        };
        var fuse = new Fuse(list, options);
        var searchResult = fuse.search(searchValue);
        console.log(searchResult)
        if(searchResult.length > 0) {
          $('#results').empty();
          for(i = 0; i < searchResult.length; i++) {
            $('#results').append('<div class="res"><b>'+searchResult[i].titel+'</b> | <font color ="#5c5c5c">'+searchResult[i].schrijver+'</font><p>'+searchResult[i].beschrijving+'</p></div>')
          }

        }
        elseif (searchValue == '') {
          $('#results').append('EMPTY')
        }
        else {
          $('#results').empty();
          $('#results').html('<center><font><h3>Geen resultaten gevonden</h3></font></center>')
        }
      })
    }
  })
})

$(document).ready(function(){
    var searchValue = 'ob-schaalniveaus';
    if(searchValue != '') {
      $.getJSON('/data.json', function(result){
        var list = result;
        var options = {
          shouldSort: true,
          threshold: 0,
          location: 0,
          distance: 100,
          maxPatternLength: 32,
          minMatchCharLength: 5,
          keys: [
            "subcategorie"
          ]
        };
        var fuse = new Fuse(list, options);
        var searchResult = fuse.search(searchValue);
        console.log(searchResult)
        if(searchResult.length > 0) {
          $('#results').empty();
          for(i = 0; i < searchResult.length; i++) {
            $('#results').append('<div class="res"><img class="coverfoto" src="/images/covers/'+searchResult[i].id+'.jpg"><div class="informatie"><b>'+searchResult[i].titel+'</b> | <font color ="#5c5c5c">'+searchResult[i].schrijver+'</font><p>'+searchResult[i].beschrijving+'</p><a href="/boeken/'+searchResult[i].id+'.html">>> Bekijk</a></div></div>')
          }

        }
        else {
          $('#results').empty();
          $('#results').html('<center><font><h3>Geen resultaten gevonden</h3></font></center>')
        }
      })
    }
    else {
      $('#results').empty();
      $('#results').html('')
    }
})

$(document).ready(function(){
  var searchValue = ($('#category').val()).trim();
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
          $('#results').append('<div class="res"><div class="bubblebackground"><span title="Geschikt voor groep 6-8"><div class="bb" style="visibility: '+searchResult[i].bb+';"><div class="bubbletext">6-8</div></div></span></div><div class="bubblebackground"><span title="Geschikt voor groep 3-5"><div class="mb" style="visibility: '+searchResult[i].mb+';"><div class="bubbletext">3-5</div></div></span></div><div class="bubblebackground"><span title="Geschikt voor groep 1-2"><div class="ob" style="visibility: '+searchResult[i].ob+';"><div class="bubbletext">1-2</div></div></span></div><img class="coverfoto" src="/images/covers/'+searchResult[i].id+'.jpg"><div class="informatie"><b>'+searchResult[i].titel+'</b> | <font color ="#5c5c5c">'+searchResult[i].schrijver+'</font><p>'+searchResult[i].beschrijving+'</p><a href="/boeken/'+searchResult[i].id+'.html">>> Bekijk</a></div></div>')
        }

      }
      else {
        $('#results').empty();
        $('#results').html('<p><center><font><h5>Aan dit onderdeel is nog geen literatuur toegewezen.<br>Heb je een suggestie voor literatuur? Dien deze dan in via de LiteraTip pagina.</h5></font></center></p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p>')
      }
    })
  }
  else {
    $('#results').empty();
    $('#results').html('')
  }
})

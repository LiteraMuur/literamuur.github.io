$(document).ready(function(){
  $('#search').keyup(function(){
    var searchValue = ($('#search').val()).trim();
    if(searchValue != '') {
      $.getJSON('data.json', function(result){
        var list = result;
        var options = {
          shouldSort: true,
          threshold: 0.6,
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
      })
    }
  })
})

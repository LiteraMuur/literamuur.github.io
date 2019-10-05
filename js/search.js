$(document).ready(function(){
  $('#search').keyup(function(){
    var searchValue = ($('#search').val()).trim();
    if(searchValue != '') {
      $.getJSON('list.json', function(result){
        var list = result;
        console.log(result);
      })
    }
  })
})

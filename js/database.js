$(document).ready( function() {
$.getJSON('/data.json',
function(data) {
  $("#Table").html(" FirstLastMiddle");
  for (var i = 0; i < data.length; i++)
      {
          var tr="";
            var td1=""+data[i]["titel"]+"";
            var td2=""+data[i]["boek"]+"";
            var td3=""+data[i]["schrijver"]+"";
            var td4=""+data[i]["ob"]+"";

          $("#Table").append(tr+td1+td2+td3+td4);

      }
});
});

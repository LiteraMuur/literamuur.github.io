$(function () {

$.getJSON('/data.json', function(data) {
    var table = $("#Table");
    $.each(data, function (i, boek) {
        $("<tr>", {
            html: [
                $("<td>", { html: boek.id }),
                $("<td>", { html: boek.titel }),
                $("<td>", { html: boek.schrijver }),
                $("<td>", { html: boek.tags })
            ],
            appendTo: table
        });
    });
});

});

$(function () {

$.getJSON('/data.json', function(data) {
    var table = $("#Table").empty();
    $.each(data, function (i, member) {
        $("<tr>", {
            html: [
                $("<td>", { html: member.name }),
                $("<td>", { html: member.email }),
                $("<td>", { html: member.phone }),
                $("<td>", { html: member.id })
            ],
            appendTo: table
        });
    });
});

});

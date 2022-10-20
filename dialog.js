$(function () {
    var isClose = false;
    $('#dialog2').dialog({
        title: "Dialog Title2",
        closeOnEscape: true,
        autoOpen: false,
        open: function (event, ui) {
            $('#contentholder2').text('sau 5 moi dc close')
        }
    })
    $("#dialog").dialog({
        title: "Dialog Title",

        width: 500,
        height: 700,
        closeOnEscape: false,
        beforeClose: function (event, ui) {



            if (!isClose) {
                setTimeout(function () {
                    // $('#dialog2').dialog('close')
                    isClose = true;
                    // return isClose;
                }, 5000)
            }
            return isClose;
        },
        open: function () {
            var note_text = 'minh dep trai';
            $("#contentholder").text('minh dep trai')
            $(".ui-dialog-titlebar-close").click(function () {
                $('#dialog2').dialog('open')
            })
        },
        close: function () {
            $('#dialog2').dialog('close')
        }
    });
});
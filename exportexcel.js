$(document).ready(function () {
    $('#minh').click(() => {
        var data = [
            { "name": "John", "city": "Seattle" },
            { "name": "Mike", "city": "Los Angeles" },
            { "name": "Zach", "city": "New York" }
        ];

        /* this line is only needed if you are not adding a script tag reference */
        if (typeof XLSX == 'undefined') XLSX = require('xlsx');

        /* make the worksheet */
        var ws = XLSX.utils.json_to_sheet(data);
        var wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, "People");

        /* write workbook (use type 'binary') */
        var wbout = XLSX.write(wb, { bookType: 'xlsx', type: 'binary' });
        console.log(wbout);

        /* generate a download */
        function s2ab(s) {
            var buf = new ArrayBuffer(s.length);
            var view = new Uint8Array(buf);
            for (var i = 0; i != s.length; ++i) view[i] = s.charCodeAt(i) & 0xFF;
            return buf;
        }

        saveAs(new Blob([s2ab(wbout)], { type: "application/octet-stream" }), "sheetjs.xlsx");
    })
})


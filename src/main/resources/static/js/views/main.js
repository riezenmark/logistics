define(function() {
    return {
        type: "line",
        height: 400,
        rows: [
            {template: "Row 1"},
            {template: "Row 2"},
            {
                cols: [
                    {template: "Col 1"},
                    {template: "Col 2"}
                ]
            }
        ]
    }
})

define(function() {
    return function(tableId, url, columns) {
        return {
            rows: [
                {
                    view: 'toolbar',
                    cols: [
                        {
                            view: 'button',
                            label: 'Add',
                            click: function() {
                                const table = $$(tableId)
                                const id = makerList.add({})
                                table.editRow(id)
                            }
                        }
                    ]
                },
                {
                    id: tableId,
                    view: 'datatable',
                    editable: true,
                    editaction: 'dblclick',
                    columns: columns,
                    url: url,
                    save: url,
                    autoheight: true,
                    autowidth: true,
                    pager: 'makerPager',
                    datafetch: 3
                },
                {
                    view: 'pager',
                    id: 'makerPager',
                    size: 3,
                    group: 3,
                    template: '{common.first()}{common.prev()}{common.pages()}{common.next()}{common.last()}'
                }
            ]
        }
    }
})

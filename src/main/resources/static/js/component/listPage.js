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
                                const id = table.add({})
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
                    pager: tableId + 'Pager',
                    datafetch: 10,
                    on: {
                        onItemClick: function(id) {
                            const column = this.config.columns.find(function (col) {
                                return col.id === id.column
                            })
                            const parentTable = this

                            if (column.dialogUrl) {
                                require([column.dialogUrl], function (dialogPage) {
                                    webix.ui({
                                        view: 'window',
                                        head: 'Choose an item',
                                        width: 200,
                                        position: 'center',
                                        modal: true,
                                        body: dialogPage,
                                        parentTable: parentTable,
                                        cell: id
                                    }).show()
                                })
                            }
                        }
                    }
                },
                {
                    view: 'pager',
                    id: tableId + 'Pager',
                    size: 10,
                    group: 10,
                    template: '{common.first()}{common.prev()}{common.pages()}{common.next()}{common.last()}'
                }
            ]
        }
    }
})

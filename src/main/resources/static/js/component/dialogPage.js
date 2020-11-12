define(function() {
    return function(tableId, url, columns) {
        return {
            rows: [
                {
                    id: tableId,
                    view: 'datatable',
                    editaction: 'dblclick',
                    columns: columns,
                    url: url,
                    save: url,
                    autoheight: true,
                    autowidth: true,
                    pager: tableId + 'Pager',
                    datafetch: 5,
                    on: {
                        onItemClick: function(id) {
                            const model = this.getItem(id)

                            const window = this.getTopParentView()
                            const parentConfig = window.config
                            const cell = parentConfig.cell
                            const parentTable = parentConfig.parentTable

                            const field = {}
                            field[cell.column] = model
                            parentTable.updateItem(cell.row, field)

                            setTimeout(function() {window.close()}, 0)
                        }
                    }
                },
                {
                    view: 'pager',
                    id: tableId + 'Pager',
                    size: 5,
                    group: 5,
                    template: '{common.first()}{common.prev()}{common.pages()}{common.next()}{common.last()}'
                }
            ]
        }
    }
})

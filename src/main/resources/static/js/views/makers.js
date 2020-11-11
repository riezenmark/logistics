define(function() {
    return {
        rows: [
            {
                view: 'toolbar',
                cols: [
                    {
                        view: 'button',
                        label: 'Add',
                        click: function() {
                            const makerList = $$('makerList')
                            const id = makerList.add({})
                            makerList.editRow(id)
                        }
                    }
                ]
            },
            {
                id: 'makerList',
                view: 'datatable',
                editable: true,
                editaction: 'dblclick',
                columns: [
                    {id: 'id'},
                    {id: 'name', editor: "text"}
                ],
                url: 'resource->/api/maker',
                save: 'resource->/api/maker',
                autoheight: true,
                autowidth: true
            }
        ]
    }
})
define(['component/listPage', 'collection/models'], function(listPage, models) {
    return listPage(
        'carList',
        'resource->/api/car',
        [
            {id: 'id'},
            {id: 'name', editor: 'text'},
            {id: 'model', editor: 'combo', options: models}
        ]
    )
})

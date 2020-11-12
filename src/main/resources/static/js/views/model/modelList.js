define(['component/listPage', 'collection/makers'], function(listPage, makers) {
    return listPage(
        'modelList',
        'resource->/api/model',
        [
            {id: 'id'},
            {id: 'name', editor: 'text'},
            {id: 'maker', editor: 'combo', options: makers}
        ]
    )
})

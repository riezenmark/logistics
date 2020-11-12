define(['component/listPage'], function(listPage) {
    return listPage(
        'makerList',
        'resource->/api/maker',
        [
            {id: 'id'},
            {id: 'name', editor: "text"}
        ]
    )
})

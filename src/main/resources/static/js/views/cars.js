define(['component/listPage'], function(listPage) {
    return listPage(
        'carList',
        'resource->/api/car',
        [
            {id: 'id'},
            {id: 'name', editor: "text"}
        ]
    )
})

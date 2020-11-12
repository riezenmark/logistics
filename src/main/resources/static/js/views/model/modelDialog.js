define(['component/dialogPage', 'collection/makers'], function(dialogPage, makers) {
    return dialogPage(
        'modelDialog',
        'resource->/api/model',
        [
            {id: 'maker', options: makers},
            {id: 'name'}
        ]
    )
})
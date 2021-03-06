requirejs.config({
    baseUrl: 'js'
})

function buildRoute(view) {
    return function() {
        webix.ui({
            id: 'root',
            rows: [
                view
            ]
        }, $$('root'))
    }
}

function buildButton(label, route) {
    return {
        view: 'button',
        value: label,
        width: 100,
        align: 'center',
        click: function () {
            routie(route)
        }
    };
}

require (
    [
        'views/main',
        'views/car/carList',
        'views/maker/makerList',
        'views/model/modelList',
        'util/resource_proxy'
    ],
    function(main, cars, makers, models, resource_proxy) {
    webix.ready(function() {
        webix.ui({
            container: 'app',
            width: document.body.clientWidth,
            height: document.body.clientHeight,
            rows: [
                {
                    view: 'toolbar',
                    cols: [
                        buildButton('Home', ''),
                        buildButton('Cars', 'cars'),
                        buildButton('Car Makers', 'makers'),
                        buildButton('Car Models', 'models')
                    ]
                },
                {
                    id: 'root'
                }
            ]
        });
    })

    routie({
        '': buildRoute(main),
        'cars': buildRoute(cars),
        'makers': buildRoute(makers),
        'models': buildRoute(models)
    })
})

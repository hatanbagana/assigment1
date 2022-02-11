let cars = [
    [

        {
            color: 'red',
            price: 10000,
            brand: "Toyota",
            mark: "Land200"
        },
        {
            color: 'blue',
            price: 20000,
            brand: "Toyota",
            mark: "Land80"
        },
        {
            color: 'green',
            price: 30000,
            brand: "Toyota",
            mark: "Land100"
        },
        {
            color: 'yellow',
            price: 50000,
            brand: "Toyota",
            mark: "Land300"
        }
    ],
    [

        {
            color: 'red',
            price: 10000,
            brand: "Toyota",
            mark: "Land200"
        },
        {
            color: 'blue',
            price: 20000,
            brand: "Toyota",
            mark: "Land80"
        },
        {
            color: 'green',
            price: 30000,
            brand: "Toyota",
            mark: "Land100"
        },
        {
            color: 'yellow',
            price: 50000,
            brand: "Toyota",
            mark: "Land300"
        }
    ]

    ]
    
    // for (let i = 0; i < cars.length; i++) {
    //     if(cars[i].price > 20000){
    //         console.log(cars[i]);
            
    //     }
        
    // }

    function bla(value){
        
        value.filter(
            ()=>{}
        )
        return value[1].price > 20000;
    }
    // const aa = cars.filter(cars.price > 20000)
    var aa = cars.filter(bla)
    console.log(aa);

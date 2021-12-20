const faker =require('faker')



export default function productReducer(state=[],action) {
    
    let { type,payload} = action
    

    switch (type) {
        case 'Historical':
            return [

                {
                    name: faker.commerce.product(),
                    description:faker.commerce.productDescription(),
                    price:faker.commerce.price(),
                    InventoryCount:30,
                    img:faker.image.image()
                
                },
                {
                    name: faker.commerce.product(),
                    description:faker.commerce.productDescription(),
                    price:faker.commerce.price(),
                    InventoryCount:30,
                    img:faker.image.nature()
                
                }
                ,

                {
                    name: faker.commerce.product(),
                    description:faker.commerce.productDescription(),
                    price:faker.commerce.price(),
                    InventoryCount:30,
                    img:faker.image.imageUrl()
                
                }
            ]
            
            break;
    
       
    }

    switch (type) {
        case 'Horror':

            return [

                {
                    name: faker.commerce.product(),
                    description:faker.commerce.productDescription(),
                    price:faker.commerce.price(),
                    InventoryCount:30,
                    img:faker.image.abstract()
                
                },
                {
                    name: faker.commerce.product(),
                    description:faker.commerce.productDescription(),
                    price:faker.commerce.price(),
                    InventoryCount:30,
                    img:faker.image.animals()
                
                }
                ,

                {
                    name: faker.commerce.product(),
                    description:faker.commerce.productDescription(),
                    price:faker.commerce.price(),
                    InventoryCount:30,
                    img:faker.image.business()
                
                }
            ]
            
            break;
    
       
    }

    switch (type) {
        case 'Fantasy':

            return [

                {
                    name: faker.commerce.product(),
                    description:faker.commerce.productDescription(),
                    price:faker.commerce.price(),
                    InventoryCount:30,
                    img:faker.image.cats()
                
                },
                {
                    name: faker.commerce.product(),
                    description:faker.commerce.productDescription(),
                    price:faker.commerce.price(),
                    InventoryCount:30,
                    img:faker.image.city()
                
                }
                ,

                {
                    name: faker.commerce.product(),
                    description:faker.commerce.productDescription(),
                    price:faker.commerce.price(),
                    InventoryCount:30,
                    img:faker.image.food()
                
                }
            ]
            
            break;
    
     
    }

    switch (type) {
        case 'Detective':

            return [

                {
                    name: faker.commerce.product(),
                    description:faker.commerce.productDescription(),
                    price:faker.commerce.price(),
                    InventoryCount:30
                    ,
                    img:faker.image.nightlife()
                
                },
                {
                    name: faker.commerce.product(),
                    description:faker.commerce.productDescription(),
                    price:faker.commerce.price(),
                    InventoryCount:30
                    ,
                    img:faker.image.fashion()
                
                }
                ,

                {
                    name: faker.commerce.product(),
                    description:faker.commerce.productDescription(),
                    price:faker.commerce.price(),
                    InventoryCount:30,
                    img:faker.image.people(),
                
                }
            ]

            case 'decreaseStock':

                return state.map(item => {
                    if(item.name === action.payload.name){
                        item.inventoryCount--;
                    }
                    return item;
                });

            
            break;

          
    
        default: return state
            break;
    }

    
}



const faker =require('faker')


export default function productReducer(state=[],action) {
    

    switch (action.type) {
        case 'Historical':
            return [

                {
                    name: faker.commerce.product(),
                    description:faker.commerce.productDescription(),
                    price:faker.commerce.price(),
                    InventoryCount:faker.datatype.number(),
                    img:faker.image.image()
                
                },
                {
                    name: faker.commerce.product(),
                    description:faker.commerce.productDescription(),
                    price:faker.commerce.price(),
                    InventoryCount:faker.datatype.number(),
                    img:faker.image.nature()
                
                }
                ,

                {
                    name: faker.commerce.product(),
                    description:faker.commerce.productDescription(),
                    price:faker.commerce.price(),
                    InventoryCount:faker.datatype.number(),
                    img:faker.image.imageUrl()
                
                }
            ]
            
            break;
    
       
    }

    switch (action.type) {
        case 'Horror':

            return [

                {
                    name: faker.commerce.product(),
                    description:faker.commerce.productDescription(),
                    price:faker.commerce.price(),
                    InventoryCount:faker.datatype.number(),
                    img:faker.image.abstract()
                
                },
                {
                    name: faker.commerce.product(),
                    description:faker.commerce.productDescription(),
                    price:faker.commerce.price(),
                    InventoryCount:faker.datatype.number(),
                    img:faker.image.animals()
                
                }
                ,

                {
                    name: faker.commerce.product(),
                    description:faker.commerce.productDescription(),
                    price:faker.commerce.price(),
                    InventoryCount:faker.datatype.number(),
                    img:faker.image.business()
                
                }
            ]
            
            break;
    
       
    }

    switch (action.type) {
        case 'Fantasy':

            return [

                {
                    name: faker.commerce.product(),
                    description:faker.commerce.productDescription(),
                    price:faker.commerce.price(),
                    InventoryCount:faker.datatype.number(),
                    img:faker.image.cats()
                
                },
                {
                    name: faker.commerce.product(),
                    description:faker.commerce.productDescription(),
                    price:faker.commerce.price(),
                    InventoryCount:faker.datatype.number(),
                    img:faker.image.city()
                
                }
                ,

                {
                    name: faker.commerce.product(),
                    description:faker.commerce.productDescription(),
                    price:faker.commerce.price(),
                    InventoryCount:faker.datatype.number(),
                    img:faker.image.food()
                
                }
            ]
            
            break;
    
     
    }

    switch (action.type) {
        case 'Detective':

            return [

                {
                    name: faker.commerce.product(),
                    description:faker.commerce.productDescription(),
                    price:faker.commerce.price(),
                    InventoryCount:faker.datatype.number()
                    ,
                    img:faker.image.nightlife()
                
                },
                {
                    name: faker.commerce.product(),
                    description:faker.commerce.productDescription(),
                    price:faker.commerce.price(),
                    InventoryCount:faker.datatype.number()
                    ,
                    img:faker.image.fashion()
                
                }
                ,

                {
                    name: faker.commerce.product(),
                    description:faker.commerce.productDescription(),
                    price:faker.commerce.price(),
                    InventoryCount:faker.datatype.number(),
                    img:faker.image.people(),
                
                }
            ]

            
            break;
    
        default: return[]
            break;
    }
}



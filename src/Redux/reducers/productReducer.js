const faker =require('faker')



export default function productReducer(state=[],action) {
    
    let { type,payload} = action
    

    switch (type) {
        case 'Historical':
            return [

                {
                    name: 'Empire of Pain: The Secret History of the Sackler Dynasty by Patrick Radden Keefe',
                    description:'The Sackler family’s role in triggering the U.S. opioid epidemic attracted renewed attention this year with the release of “Dopesick,” a Hulu miniseries based on Beth Macy’s 2018 book of the same name, and Patrick Radden Keefe’s award-winning Empire of Pain, which exhaustively examines the rise—and very public fall—of the drug-peddling American “dynasty.” ',
                    price:30,
                    InventoryCount:30,
                    img:'https://images-na.ssl-images-amazon.com/images/I/51DbRAoeRkL._SX331_BO1,204,203,200_.jpg'
                
                },
                {
                    name: 'Empire of Pain: The Secret History of the Sackler Dynasty',
                    description:'Historian Keisha N. Blain derived the title of her latest book from a well-known quote by its subject, voting rights activist Fannie Lou Hamer: “We have a long fight and this fight is not mine alone,',
                    price:35,
                    InventoryCount:30,
                    img:'https://th-thumbnailer.cdn-si-edu.com/xDDFojYgQZlv2jR_Daaqr_e5Lo8=/fit-in/300x0/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/amazon/amazon_image_0035bdd924e68e3532ba9368c5730eb24c5f4d96.jpg'
                
                }
                ,

                {
                    name: 'Into the Forest: A Holocaust Story of Survival, Triumph, and Love by Rebecca Frankel',
                    description:'On April 30, 1942, 11-year-old Philip Lazowski found himself separated from his family during a Nazi selection in the Polish town of Zhetel. Realizing that the elderly, the infirm and unaccompanied children were being sent in one direction and families with work permits in the other, he tried to blend in with the children of a woman he recognized, only to hear her hiss',
                    price:40,
                    InventoryCount:30,
                    img:'https://th-thumbnailer.cdn-si-edu.com/TUt6psn2NgPj-gMN7ktXBUOd-gY=/fit-in/300x0/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/amazon/amazon_image_bed769c96bbe3fe1f85b1da2338cb3ef80b06ac0.jpg'
                
                }
            ]
            
            break;
    
       
    }

    switch (type) {
        case 'Horror':

            return [

                {
                    name: 'A Cosmology of Monsters, by Shaun Hamill',
                    description:'Lovecraft meets Stephen King in this spooky debut novel about a family of haunted house proprietors who are terrorized across',
                    price:20,
                    InventoryCount:30,
                    img:'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1634044382-517qIlkJZHL._SL500_.jpg?crop=1xw:1xh;center,top&resize=768:*'
                
                },
                {
                    name: 'The Haunting of Hill House, by Shirley Jackson',
                    description:'If you’ve seen the Netflix series of the same name and haven’t read the source material, described by many as the greatest haunted house story ever written, it’s past time to dive into The Haunting of Hill House. In this seminal classic, written by the queen of creep, four seekers arrive at the dilapidated Hill House, where spooky phenomena abound',
                    price:15,
                    InventoryCount:30,
                    img:'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1634044322-0143039989-01-sclzzzzzzz-sx500-1634044291.jpg?crop=1xw:1xh;center,top&resize=768:*'
                
                }
                ,

                {
                    name: 'Frankenstein, by Mary Shelley',
                    description:'What can be said about Frankenstein that hasn’t been uttered a thousand times over? Shelley’s landmark work of Gothic horror revolutionized our understanding of artificial life, bewitched generations of readers, and pioneered science fiction as we',
                    price:45,
                    InventoryCount:30,
                    img:'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1632230874-41CC3AXG7nL._SL500_.jpg?crop=1xw:1xh;center,top&resize=768:*'
                
                }
            ]
            
            break;
    
       
    }

    switch (type) {
        case 'Fantasy':

            return [

                {
                    name: 'A PSALM FOR THE WILD-BUILT BY BECKY CHAMBERS',
                    description:'If you’ve read the Wayfarer series, then you know Becky Chambers has a talent for creating hopeful scenarios, despite characters facing down harrowing odds',
                    price:25,
                    InventoryCount:30,
                    img:'https://cdn.vox-cdn.com/thumbor/pCdzHSmc89TuHc0VL_q7vcErHHg=/0x0:1500x2400/920x0/filters:focal(0x0:1500x2400):format(webp):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/23073213/a_psalm_for_the_wild_built.jpeg'
                
                },
                {
                    name: 'BLACK WATER SISTER BY ZEN CHO',
                    description:'Black Water Sister is a contemporary ghost story, using the supernatural to weave a tale about intergenerational trauma and the Asian diaspora',
                    price:80,
                    InventoryCount:30,
                    img:'https://cdn.vox-cdn.com/thumbor/yrrc1NQW2_VnBtoldn803JuA0pw=/0x0:1707x2560/920x0/filters:focal(0x0:1707x2560):format(webp):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/23073208/black_water_sister.jpeg'
                
                }
                ,

                {
                    name:" THE BRONZED BEASTS" ,
                    description:'Roshani Chokshi brings her opulent, 19th century fantasy-heist series to a bittersweet conclusion in The Bronzed Beasts, which begins after Séverin seemingly betrays his friends to chase godhood.',
                    price:70,
                    InventoryCount:30,
                    img:'https://cdn.vox-cdn.com/thumbor/kFFAVMXg6Tka11xA4q8DuqndXpk=/0x0:1684x2560/920x0/filters:focal(0x0:1684x2560):format(webp):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/23073205/the_bronzed_beasts.jpeg'
                
                }
            ]
            
            break;
    
     
    }

    switch (type) {
        case 'Detective':

            return [

                {
                    name: 'Left You Dead' ,
                   
                    description:'Left You Dead is the latest installment in Peter Jamess award-winning crime fiction series starring DS Roy Grace, now a major TV series starring John Simm',

                    price:40,
                    InventoryCount:30
                    ,
                    img:'https://ik.imagekit.io/panmac/tr:q-75,di-placeholder_portrait_aMjPtD9YZ.jpg,w-350,pr-true,bl/edition/9781529004267.jpg'
                
                },
                {
                    name: 'Sunset Swing ',
               
                    description:'Christmas in LA, 1967, and a devil has been let loose in the city is dragged unwillingly into a murder investigation in which her own name has been found at the crime scene. Mobster Dante Sanfelippo is doing one last job before he can retire to a Napa winery ',

                   

                    price:62,
                    InventoryCount:30
                    ,
                    img:'https://ik.imagekit.io/panmac/tr:q-75,di-placeholder_portrait_aMjPtD9YZ.jpg,w-350,pr-true,bl/edition/9781509838974.jpg'
                
                }
                ,

                {
                    name: 'Riccardino ',
                   
                    description:'In the highly anticipated final instalment of Camilleris bestselling series, Inspector Montalbano receives a strange phone call early in the morning, from a caller by the name of Riccardino who claims to be expecting',
                    price:92,
                    InventoryCount:30,
                    img:'https://ik.imagekit.io/panmac/tr:q-75,di-placeholder_portrait_aMjPtD9YZ.jpg,w-350,pr-true,bl/edition/9781529073300.jpg',
                
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



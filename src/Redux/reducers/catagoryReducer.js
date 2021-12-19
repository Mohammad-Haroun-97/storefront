
export default function CataReducer(state={},action) {

    switch (action.type) {
        case 'Historical':
            return {
               normalized_name:'Historical',
               Display_Name:'Historical Novel',
               Description:'a novel that has as its setting a period of history and that attempts to convey the spirit',
               activeFlag:true

            }

            
            break;
    
        

            case 'Horror':
                return {
                   normalized_name:'Horror',
                   Display_Name:'Horror Novel',
                   Description:'As jam-packed with the occult as these novels may be, contemporary horror isn’t just about things that go bump in the night',
                   activeFlag:true
    
                }
    
                
                break;
        
           

                case 'Fantasy':
                    return {
                       normalized_name:'Fantasy',
                       Display_Name:'Fantasy Novel',
                       Description:'As jam-packed with the occult as these novels may be, contemporary horror isn’t just about things that go bump in the night',
                       activeFlag:true
        
                    }
        
                    
                    break;
            
               

                    case 'Detective':
                        return {
                           normalized_name:'Detective',
                           Display_Name:'Detective Novel',
                           Description:'As jam-packed with the occult as these novels may be, contemporary horror isn’t just about things that go bump in the night',
                           activeFlag:true
            
                        }
            
                        
                        break;
                
                    default:return{}
                        break;
    }
    
}
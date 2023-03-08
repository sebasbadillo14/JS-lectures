// Switch
const payMethod = 'bitcoin';

switch (payMethod) {
    case 'card' :
        console.log('You paid with your credit car');
        break;

    case 'check' :
        console.log('You paid with your  check');
        break;
        
    case 'bitcoin' :
        console.log('You paid with bitcoins');
        break;
    
    default: // Default is executed when nothing matches
        console.log('You haven`t paid')

        break;


    
}
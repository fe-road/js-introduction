const country = "JAPAN";

switch (country) {
    case "BELGIUM":
    case "FRANCE":
    case "GERMANY":
        console.log('You live in Europe');
        break;
    case "BRAZIL":
        console.log('You live in South America');
        break;
    default:
        console.log('You live outside of Europe and South America');
        break;
}

// function getMyContinent (country) {
//     switch (country) {
//         case "BELGIUM":
//         case "FRANCE":
//         case "GERMANY":
//             return 'Europe';
//         case "BRAZIL":
//             return 'South America';
//     }
// }
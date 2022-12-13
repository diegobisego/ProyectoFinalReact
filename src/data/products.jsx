import AceiteGirasol from '../assets/img/aceiteGirasol.jpg'
import aceiteOliva from '../assets/img/aceiteOliva.jpg'
import AceiteOliva5L from '../assets/img/AceiteOliva5L.jpg'
import ACV1kg from '../assets/img/ACV1kg.jpg'
import ACV2kg from '../assets/img/ACV2kg.jpg'
import ACV5kg from '../assets/img/ACV5kg.jpg'
import ACN1kg from '../assets/img/ACN1kg.jpg'
import ACN2kg from '../assets/img/ACN2kg.jpg'
import ACN5kg from '../assets/img/ACN5kg.jpg'
import ACF1kg from '../assets/img/ACF1kg.jpg'
import ACF2kg from '../assets/img/ACF2kg.jpg'
import ACF5kg from '../assets/img/ACF5kg.jpg'
import HCG from '../assets/img/HCG.jpg'
import HGB from '../assets/img/HGB.jpg'
import PU1kg from '../assets/img/PU1kg.jpg'
import MO800g from '../assets/img/MO800g.jpg'
import VI5L from '../assets/img/VI5L.jpg'
import PI from '../assets/img/PI.jpg'
import COM from '../assets/img/COM.jpg'
import OR from '../assets/img/OR.jpg'


const products = [
    {
        id: 1,
        title: 'Aceite Girasol',
        description: 'Aceite Comestible',
        price: 2000,
        stock: 100,
        categories: 'Liquido',
        picture: `${AceiteGirasol}`
    },
    {
        id: 2,
        title: 'Aceite de oliva (1 ltrs)',
        description: 'Aceite Comestible',
        price: 2000,
        stock: 100,
        categories: 'Liquido',
        picture: `${aceiteOliva}`
    },
    {
        id: 3,
        title: 'Aceite de oliva (5 ltrs)',
        description: 'Aceite Comestible',
        price: 2000,
        stock: 100,
        categories: 'Liquido',
        picture: `${AceiteOliva5L}`
    },
    {
        id: 5,
        title: 'Aceitunas Verdes N0 1kg',
        description: 'Aceitunas Verdes',
        price: 2000,
        stock: 100,
        categories: 'Aceitunas',
        picture: `${ACV1kg}`
    },
    {
        id: 6,
        title: 'Aceitunas Verdes N0 2kg',
        description: 'Aceitunas Verdes',
        price: 2000,
        stock: 100,
        categories: 'Aceitunas',
        picture: `${ACV2kg}`
    },
    {
        id: 7,
        title: 'Aceitunas Verdes N0 5kg',
        description: 'Aceitunas Verdes',
        price: 2000,
        stock: 100,
        categories: 'Aceitunas',
        picture: `${ACV5kg}`    
    },
    {
        id: 8,
        title: 'Aceitunas Verdes N2 1kg',
        description: 'Aceitunas Verdes',
        price: 2000,
        stock: 100,
        categories: 'Aceitunas',
        picture: `${ACV1kg}`    
    },
    {
        id: 9,
        title: 'Aceitunas Verdes N2 2kg',
        description: 'Aceitunas Verdes',
        price: 2000,
        stock: 100,
        categories: 'Aceitunas',
        picture: `${ACV2kg}`    
    },
    {
        id: 10,
        title: 'Aceitunas Verdes N2 5kg',
        description: 'Aceitunas Verdes',
        price: 2000,
        stock: 100,
        categories: 'Aceitunas',
        picture: `${ACV5kg}`    
    },
    {
        id: 11,
        title: 'Aceitunas Negras N0 1kg',
        description: 'Aceitunas Negras',
        price: 2000,
        stock: 100,
        categories: 'Aceitunas',
        picture: `${ACN1kg}`  
    },
    {
        id: 12,
        title: 'Aceitunas Negras N0 2kg',
        description: 'Aceitunas Negras',
        price: 2000,
        stock: 100,
        categories: 'Aceitunas',
        picture: `${ACN2kg}` 
    },
    {
        id: 13,
        title: 'Aceitunas Negras N0 5kg',
        description: 'Aceitunas Negras',
        price: 2000,
        stock: 100,
        categories: 'Aceitunas',
        picture: `${ACN5kg}`
    },
    {
        id: 14,
        title: 'Aceitunas Fileteadas 1kg',
        description: 'Aceitunas Fileteadas',
        price: 2000,
        stock: 100,
        categories: 'Aceitunas',
        picture: `${ACF1kg}`
    },
    {
        id: 15,
        title: 'Aceitunas Fileteadas 2kg',
        description: 'Aceitunas Fileteadas',
        price: 2000,
        stock: 100,
        categories: 'Aceitunas',
        picture: `${ACF2kg}`
    },
    {
        id: 16,
        title: 'Aceitunas Fileteadas 5kg',
        description: 'Aceitunas Fileteadas',
        price: 2000,
        stock: 100,
        categories: 'Aceitunas',
        picture: `${ACF5kg}`
    },
    {
        id: 17,
        title: 'Huevos Grande Color',
        description: 'Huevos',
        price: 2000,
        stock: 100,
        categories: 'Avicola',
        picture: `${HCG}`
    },
    {
        id: 18,
        title: 'Huevos Mediano Color',
        description: 'Huevos',
        price: 2000,
        stock: 100,
        categories: 'Avicola',
        picture: `${HCG}`
    },
    {
        id: 19,
        title: 'Huevos Grandes Blancos',
        description: 'Aceitunas Fileteadas',
        price: 2000,
        stock: 100,
        categories: 'Avicola',
        picture: `${HGB}`
    },
    {
        id: 20,
        title: 'Pasas de Uva 1kg',
        description: 'Pasas',
        price: 2000,
        stock: 100,
        categories: 'Secos',
        picture: `${PU1kg}`
    },
    {
        id: 21,
        title: 'Morrones 800g',
        description: 'Morrones',
        price: 2000,
        stock: 100,
        categories: 'Enlatados',
        picture: `${MO800g}`
    },
    {
        id: 22,
        title: 'Vinagre 5 lts',
        description: 'Vinagre',
        price: 2000,
        stock: 100,
        categories: 'Liquido',
        picture: `${VI5L}`
    },
    {
        id: 23,
        title: 'Pimienta Negra (grano)',
        description: 'Pimienta',
        price: 2000,
        stock: 100,
        categories: 'Condimentos',
        picture: `${PI}`
    },
    {
        id: 24,
        title: 'Comino',
        description: 'Comino',
        price: 2000,
        stock: 100,
        categories: 'Condimentos',
        picture: `${COM}`
    },
    {
        id: 25,
        title: 'Oregano',
        description: 'Oregano',
        price: 2000,
        stock: 100,
        categories: 'Condimentos',
        picture: `${OR}`
    }
]


export {products}
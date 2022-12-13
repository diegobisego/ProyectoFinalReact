import AceiteGirasol from '../assets/img/aceiteGirasol.jpg'
import AceiteOliva from '../assets/img/aceiteOliva.jpg'

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
        picture: `${AceiteOliva}`
    },
    {
        id: 3,
        title: 'Aceite de oliva (5 ltrs)',
        description: 'Aceite Comestible',
        price: 2000,
        stock: 100,
        categories: 'Liquido',
        picture: `${AceiteOliva}`
    },
    {
        id: 4,
        title: 'Aceitunas Verdes N0 1kg',
        description: 'Aceitunas Verdes',
        price: 2000,
        stock: 100,
        categories: 'Aceitunas',
        picture: 'https://drive.google.com/uc?export=view&id=1T-BXOOMk4-5HepdlNTLxu_At2LWJLIRs'
    },
    {
        id: 5,
        title: 'Aceitunas Verdes N0 1kg',
        description: 'Aceitunas Verdes',
        price: 2000,
        stock: 100,
        categories: 'Aceitunas',
        picture: 'https://drive.google.com/uc?export=view&id=1T-BXOOMk4-5HepdlNTLxu_At2LWJLIRs'
    },
    {
        id: 6,
        title: 'Aceitunas Verdes N0 2kg',
        description: 'Aceitunas Verdes',
        price: 2000,
        stock: 100,
        categories: 'Aceitunas',
        picture: 'https://drive.google.com/uc?export=view&id=1T-BXOOMk4-5HepdlNTLxu_At2LWJLIRs'
    },
    {
        id: 7,
        title: 'Aceitunas Verdes N0 5kg',
        description: 'Aceitunas Verdes',
        price: 2000,
        stock: 100,
        categories: 'Aceitunas',
        picture: 'https://drive.google.com/uc?export=view&id=1T-BXOOMk4-5HepdlNTLxu_At2LWJLIRs'
    },
    {
        id: 8,
        title: 'Aceitunas Verdes N2 1kg',
        description: 'Aceitunas Verdes',
        price: 2000,
        stock: 100,
        categories: 'Aceitunas',
        picture: 'https://drive.google.com/uc?export=view&id=1T-BXOOMk4-5HepdlNTLxu_At2LWJLIRs'
    },
    {
        id: 9,
        title: 'Aceitunas Verdes N2 2kg',
        description: 'Aceitunas Verdes',
        price: 2000,
        stock: 100,
        categories: 'Aceitunas',
        picture: 'https://drive.google.com/uc?export=view&id=1T-BXOOMk4-5HepdlNTLxu_At2LWJLIRs'
    },
    {
        id: 10,
        title: 'Aceitunas Verdes N2 5kg',
        description: 'Aceitunas Verdes',
        price: 2000,
        stock: 100,
        categories: 'Aceitunas',
        picture: 'https://drive.google.com/uc?export=view&id=1T-BXOOMk4-5HepdlNTLxu_At2LWJLIRs'
    },
    {
        id: 11,
        title: 'Aceitunas Negras N0 1kg',
        description: 'Aceitunas Negras',
        price: 2000,
        stock: 100,
        categories: 'Aceitunas',
        picture: 'https://drive.google.com/uc?export=view&id=1T-BXOOMk4-5HepdlNTLxu_At2LWJLIRs'
    },
    {
        id: 12,
        title: 'Aceitunas Negras N0 2kg',
        description: 'Aceitunas Negras',
        price: 2000,
        stock: 100,
        categories: 'Aceitunas',
        picture: 'https://drive.google.com/uc?export=view&id=1T-BXOOMk4-5HepdlNTLxu_At2LWJLIRs'
    },
    {
        id: 13,
        title: 'Aceitunas Negras N0 5kg',
        description: 'Aceitunas Negras',
        price: 2000,
        stock: 100,
        categories: 'Aceitunas',
        picture: 'https://drive.google.com/uc?export=view&id=1T-BXOOMk4-5HepdlNTLxu_At2LWJLIRs'
    },
    {
        id: 14,
        title: 'Aceitunas Fileteadas 1kg',
        description: 'Aceitunas Fileteadas',
        price: 2000,
        stock: 100,
        categories: 'Aceitunas',
        picture: 'https://drive.google.com/uc?export=view&id=1T-BXOOMk4-5HepdlNTLxu_At2LWJLIRs'
    },
    {
        id: 15,
        title: 'Aceitunas Fileteadas 2kg',
        description: 'Aceitunas Fileteadas',
        price: 2000,
        stock: 100,
        categories: 'Aceitunas',
        picture: 'https://drive.google.com/uc?export=view&id=1T-BXOOMk4-5HepdlNTLxu_At2LWJLIRs'
    },
    {
        id: 16,
        title: 'Aceitunas Fileteadas 5kg',
        description: 'Aceitunas Fileteadas',
        price: 2000,
        stock: 100,
        categories: 'Aceitunas',
        picture: 'https://drive.google.com/uc?export=view&id=1T-BXOOMk4-5HepdlNTLxu_At2LWJLIRs'
    },
    {
        id: 17,
        title: 'Huevos Grande Color',
        description: 'Huevos',
        price: 2000,
        stock: 100,
        categories: 'Avicola',
        picture: 'https://drive.google.com/uc?export=view&id=1T-BXOOMk4-5HepdlNTLxu_At2LWJLIRs'
    },
    {
        id: 18,
        title: 'Huevos Mediano Color',
        description: 'Huevos',
        price: 2000,
        stock: 100,
        categories: 'Avicola',
        picture: 'https://drive.google.com/uc?export=view&id=1T-BXOOMk4-5HepdlNTLxu_At2LWJLIRs'
    },
    {
        id: 19,
        title: 'Huevos Grandes Blancos',
        description: 'Aceitunas Fileteadas',
        price: 2000,
        stock: 100,
        categories: 'Avicola',
        picture: 'https://drive.google.com/uc?export=view&id=1T-BXOOMk4-5HepdlNTLxu_At2LWJLIRs'
    },
    {
        id: 20,
        title: 'Pasas de Uva 1kg',
        description: 'Pasas',
        price: 2000,
        stock: 100,
        categories: 'Secos',
        picture: 'https://drive.google.com/uc?export=view&id=1T-BXOOMk4-5HepdlNTLxu_At2LWJLIRs'
    },
    {
        id: 21,
        title: 'Morrones 800g',
        description: 'Morrones',
        price: 2000,
        stock: 100,
        categories: 'Enlatados',
        picture: 'https://drive.google.com/uc?export=view&id=1T-BXOOMk4-5HepdlNTLxu_At2LWJLIRs'
    },
    {
        id: 22,
        title: 'Vinagre 5 lts',
        description: 'Vinagre',
        price: 2000,
        stock: 100,
        categories: 'Liquido',
        picture: 'https://drive.google.com/uc?export=view&id=1T-BXOOMk4-5HepdlNTLxu_At2LWJLIRs'
    },
    {
        id: 23,
        title: 'Pimienta Negra (grano)',
        description: 'Pimienta',
        price: 2000,
        stock: 100,
        categories: 'Condimentos',
        picture: 'https://drive.google.com/uc?export=view&id=1T-BXOOMk4-5HepdlNTLxu_At2LWJLIRs'
    },
    {
        id: 24,
        title: 'Comino',
        description: 'Comino',
        price: 2000,
        stock: 100,
        categories: 'Condimentos',
        picture: 'https://drive.google.com/uc?export=view&id=1T-BXOOMk4-5HepdlNTLxu_At2LWJLIRs'
    },
    {
        id: 25,
        title: 'Oregano',
        description: 'Oregano',
        price: 2000,
        stock: 100,
        categories: 'Condimentos',
        picture: 'https://drive.google.com/uc?export=view&id=1T-BXOOMk4-5HepdlNTLxu_At2LWJLIRs'
    }
]


export {products}
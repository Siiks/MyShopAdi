export class ShopModel {
    shopItems: any;
    constructor() {
        this.shopItems = [
            {
                title: 'Ciorba de Burta (tripe soup)',
                desc: 'Una de las sopas más famosas de Rumanía.',
                picture: '../../assets/img1.jpg',
                price: 22
            },
            {
                title: 'Ciorba Taraneasca de Vacuta',
                desc: 'Esta sopa campesina de legumbres y ternera',
                picture: '../../assets/img2.jpg',
                price: 22
            },
            {
                title: 'Sarmale',
                desc: 'Deliciosos rollitos de carne (ternera, cordero, cerdo o pollo) envuelto en hojas de col condimentada',
                picture: '../../assets/img3.jpg',
                price: 11
            }
        ]
    };
}

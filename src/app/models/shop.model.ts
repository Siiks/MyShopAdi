export class ShopModel {
    shopItems: any;
    constructor() {
        this.shopItems = [
            {
                title: 'Ciorba de Burta (tripe soup)',
                desc: 'Una de las sopas más famosas de Rumanía.',
                picture: '../assets/images/img1.jpg',
            },
            {
                title: 'Ciorba Taraneasca de Vacuta',
                desc: 'Esta sopa campesina de legumbres y ternera',
                picture: '../assets/images/img2.jpg',
            },
            {
                title: 'Sarmale',
                desc: 'Deliciosos rollitos de carne (ternera, cordero, cerdo o pollo) envuelto en hojas de col condimentada',
                picture: '../assets/images/img3.jpg',
            }
        ]
    };
}

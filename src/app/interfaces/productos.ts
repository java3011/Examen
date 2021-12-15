export interface Productos {
    id: number;
    marca:string;
    modelo:string;
    explicacion:string;
    descripcion1:string;
    descripcion2:string;
    descripcion3:string;
    descripcion4:string;
    descripcion5:string;
    valor:string;
    imag:string;
    recomendacion:string;
}

export let ListaProductos:Array<Productos>=[
{
    id: 1,
    marca:"APPLE",
    modelo:"iPhone 11 64GB Blanco",
    explicacion:"iPhone Apple 11 con tecnologia IP68 resiste hasta 2 metros de profundidad durante un máximo de 30 minutos",
    descripcion1:"Conectividad: Bluetooth 5.0/Wifi 802.11ax con MIMO 2x2",
    descripcion2:"Memoria RAM: 4GB",
    descripcion3:"Procesador: Hexa Core",
    descripcion4:"Duración Batería: 3110 mAh",
    descripcion5:"Ancho: 7.57 cm",
    valor:"529.000",
    imag:"../../assets/img/2000382489828-4.jpg",
    recomendacion: "Gran conectividad"
},
{
    id: 2,
    marca:"Huawei",
    modelo:"Huawei Y9A 128GB Black",
    explicacion:"Buena batería, rápido y con una excelente resolución para la fotografía",
    descripcion1:"Conectividad: 4G / Wi-Fi / Bluetooth",
    descripcion2:"Memoria RAM: 6GB",
    descripcion3:"Procesador: Mediatek MTK Helio G80",
    descripcion4:"Duración Batería: 4300 mAh",
    descripcion5:"Ancho: 7.65 cm",
    valor:"219.990",
    imag:"../../assets/img/2000387561055-6.jpg",
    recomendacion:"Excelente cámara"
},
{
    id: 3,
    marca:"Xiaomi",
    modelo:"Xiaomi 11 Lite 128GB",
    explicacion:"Diseñado para afrontar cualquier reto a toda velocidad",
    descripcion1:"Conectividad:	5G / Wi-Fi / Bluetooth",
    descripcion2:"Memoria RAM: 8GB",
    descripcion3:"Procesador: Qualcomm SM7325 Snapdragon 778G 5G",
    descripcion4:"Duración Batería: 4250 mAh",
    descripcion5:"Ancho: 7.57 cm",
    valor:"339.990",
    imag:"../../assets/img/2000387561659-4.jpg",
    recomendacion:"Bueno, barato y bonito"
},
{
    id: 4,
    marca:"Samsung",
    modelo:"Samsung S21+ Black 128GB",
    explicacion:"Diseñado para revolucionar el video y la fotografía",
    descripcion1:"Conectividad: Bluetooth/Wifi/4G",
    descripcion2:"Memoria RAM: 4GB",
    descripcion3:"Procesador: Exynos 2100",
    descripcion4:"Duración Batería: 4800 mAh",
    descripcion5:"Ancho: 7.56 cm",
    valor:"719.990",
    imag:"../../assets/img/2000382234695-1.jpg",
    recomendacion:"Buen procesador"
},
{
    id: 5,
    marca:"Motorola",
    modelo:"MOTOROLA G30 128GB LILA",
    explicacion:"Entretenimiento sin pausas gracias a su gran batería",
    descripcion1:"Conectividad: 4G / Wi-Fi / Bluetooth",
    descripcion2:"Memoria RAM: 4GB",
    descripcion3:"Procesador: Qualcomm Snapdragon 662",
    descripcion4:"Duración Batería: 5000 mAh",
    descripcion5:"Ancho: 7.57 cm",
    valor:"169.990",
    imag:"../../assets/img/2000383205182-2.jpg",
    recomendacion: "Excelente bateria"
},
{
    id: 6,
    marca:"Nokia",
    modelo:"NOKIA 3.4 64GB NEGRO",
    explicacion:"El nuevo Nokia 3.4 es un equipo elegante con pantalla 6,4'' y un diseño único con terminaciones finas para un agarre más cómodo",
    descripcion1:"Conectividad: 4G / Wi-Fi / Bluetooth",
    descripcion2:"Memoria RAM: 3GB",
    descripcion3:"Procesador: Qualcom Snapdragon",
    descripcion4:"Duración Batería: 4000mAh",
    descripcion5:"Ancho: 7.57 cm",
    valor:"129.990",
    imag:"../../assets/img/2000383717173-1.jpg",
    recomendacion: "Excelente diseño"
},
{
    id: 7,
    marca:"Vivo",
    modelo:"VIVO Y21S 128GB BLANCO",
    explicacion:"La pantalla Halo HD de 6,51 pulgadas con tecnología in-cell brinda detaller nítidos y colores vibrantes e intensos",
    descripcion1:"Conectividad: 4G / Wi-Fi / Bluetooth",
    descripcion2:"Memoria RAM: 4GB",
    descripcion3:"Procesador: MediaTek Helio G80",
    descripcion4:"Duración Batería: 5000 mAh",
    descripcion5:"Ancho: 7.6 cm",
    valor:"179.990",
    imag:"../../assets/img/2000387603861-2.jpg",
    recomendacion: "Pantalla Excelente"
},
{
    id: 8,
    marca:"Oppo",
    modelo:"OPPO RENO 6 BLACK OPEN",
    explicacion:"Este modelo posee un procesador Octa-core Dimensity 900, con el que jugarás de manera fluida todos tus juegos",
    descripcion1:"Conectividad: 5G / Wi-Fi / Bluetooth",
    descripcion2:"Memoria RAM: 8GB",
    descripcion3:"Procesador: 	Dimensity 900",
    descripcion4:"Duración Batería: 4300 mAh",
    descripcion5:"Ancho: 7.21 cm",
    valor:"549.990",
    imag:"../../assets/img/2000387606237-1.jpg",
    recomendacion: "Rápidez de conexión"
},
{
    id: 9,
    marca:"LG",
    modelo:"LG G7 THINK 64GB OPEN BOX",
    explicacion:"Un equipo Open Box consiste en productos de marcas originales, cuya caja o empaque original ha sido abierto y por lo tanto, no cuenta con manuales",
    descripcion1:"Conectividad:	4G / Wi-Fi / Bluetooth",
    descripcion2:"Memoria RAM: 4GB",
    descripcion3:"Procesador: Samsung Exynos",
    descripcion4:"Duración Batería: 3000 mAh",
    descripcion5:"Ancho: 7 cm",
    valor:"179.990",
    imag:"../../assets/img/https___s3-us-west-2.amazonaws.com_im-prod-product-versions-images_v-dl004043064005-1jpg-238de2ad-64b5-4555-97c1-d7148f5cd416.jpg",
    recomendacion:"Buen precio"
},
{
    id: 10,
    marca:"Moto",
    modelo:"MOTO E7 32GB ROSA",
    explicacion:"Entretenimiento sin pausas gracias a su batería de 4000mAh, y tecnología de alta gama a la hora de tomar fotografías con su cámara trasera doble de 48MP + 2MP (macro)",
    descripcion1:"Conectividad:	4G / Wi-Fi / Bluetooth",
    descripcion2:"Memoria RAM: 2GB",
    descripcion3:"Procesador: Mediatek Helio G25",
    descripcion4:"Duración Batería: 4000 mAh",
    descripcion5:"Ancho: 7.57 cm",
    valor:"84.990",
    imag:"../../assets/img/2000383235325-2.jpg",
    recomendacion: "Smartphone Prepago"
},
{
    id: 11,
    marca:"Asus",
    modelo:"ASUS ROG PHONE 5( ZS673KS)",
    explicacion:"Juega al máximo nivel con el ROG Phone 5, el teléfono para juegos que no hace prisioneros",
    descripcion1:"Conectividad: 4G / Wi-Fi / Bluetooth",
    descripcion2:"Memoria RAM: 12GB",
    descripcion3:"Procesador: Snapdragon 888 5G",
    descripcion4:"Duración Batería: 6000 mAh",
    descripcion5:"Ancho: 7.72 cm",
    valor:"799.990",
    imag:"../../assets/img/https___s3-us-west-2.amazonaws.com_im-prod-product-versions-images_asus-negro-3-8ff2c034-f6a7-4f68-a023-bef431feb617.jpg",
    recomendacion: "Buena batería"
},
{
    id: 12,
    marca:"TCL",
    modelo:"iPhone 11 64GB Blanco",
    explicacion:"Inspira grandes instancias y consigue una conectividad de alto vuelo con el teléfono inteligente TCL 20E",
    descripcion1:"Conectividad: 4G / Wi-Fi / Bluetooth",
    descripcion2:"Memoria RAM: 4GB",
    descripcion3:"Procesador: MTK6762D",
    descripcion4:"Duración Batería: 4000 mAh",
    descripcion5:"Ancho: 9 cm",
    valor:"99.990",
    imag:"../../assets/img/2000387249519-1.jpg",
    recomendacion: "Buen precio y grande"
}
];
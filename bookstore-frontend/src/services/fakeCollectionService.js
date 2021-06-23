const SHOP_DATA = [
  {
    id: 1,
    title: "Java",
    routeName: "java",
    items: [
      {
        id: 1,
        name: "The Complete Reference",
        imageUrl:
          "data:image/jpeg;base64,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",
        price: 25,
      },
      {
        id: 2,
        name: "Core Java",
        imageUrl:
          "data:image/jpeg;base64,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",
        price: 18,
      },
      {
        id: 3,
        name: "Brown Cowboy",
        imageUrl: "https://i.ibb.co/QdJwgmp/brown-cowboy.png",
        price: 35,
      },
      {
        id: 4,
        name: "Grey Brim",
        imageUrl: "https://i.ibb.co/RjBLWxB/grey-brim.png",
        price: 25,
      },
      {
        id: 5,
        name: "Green Beanie",
        imageUrl: "https://i.ibb.co/YTjW3vF/green-beanie.png",
        price: 18,
      },
      {
        id: 6,
        name: "Palm Tree Cap",
        imageUrl: "https://i.ibb.co/rKBDvJX/palm-tree-cap.png",
        price: 14,
      },
      {
        id: 7,
        name: "Red Beanie",
        imageUrl: "https://i.ibb.co/bLB646Z/red-beanie.png",
        price: 18,
      },
      {
        id: 8,
        name: "Wolf Cap",
        imageUrl: "https://i.ibb.co/1f2nWMM/wolf-cap.png",
        price: 14,
      },
      {
        id: 9,
        name: "Blue Snapback",
        imageUrl: "https://i.ibb.co/X2VJP2W/blue-snapback.png",
        price: 16,
      },
    ],
  },
  {
    id: 2,
    title: "Sneakers",
    routeName: "sneakers",
    items: [
      {
        id: 10,
        name: "Adidas NMD",
        imageUrl: "https://i.ibb.co/0s3pdnc/adidas-nmd.png",
        price: 220,
      },
      {
        id: 11,
        name: "Adidas Yeezy",
        imageUrl: "https://i.ibb.co/dJbG1cT/yeezy.png",
        price: 280,
      },
      {
        id: 12,
        name: "Black Converse",
        imageUrl: "https://i.ibb.co/bPmVXyP/black-converse.png",
        price: 110,
      },
      {
        id: 13,
        name: "Nike White AirForce",
        imageUrl: "https://i.ibb.co/1RcFPk0/white-nike-high-tops.png",
        price: 160,
      },
      {
        id: 14,
        name: "Nike Red High Tops",
        imageUrl: "https://i.ibb.co/QcvzydB/nikes-red.png",
        price: 160,
      },
      {
        id: 15,
        name: "Nike Brown High Tops",
        imageUrl: "https://i.ibb.co/fMTV342/nike-brown.png",
        price: 160,
      },
      {
        id: 16,
        name: "Air Jordan Limited",
        imageUrl: "https://i.ibb.co/w4k6Ws9/nike-funky.png",
        price: 190,
      },
      {
        id: 17,
        name: "Timberlands",
        imageUrl: "https://i.ibb.co/Mhh6wBg/timberlands.png",
        price: 200,
      },
    ],
  },
  {
    id: 3,
    title: "Jackets",
    routeName: "jackets",
    items: [
      {
        id: 18,
        name: "Black Jean Shearling",
        imageUrl: "https://i.ibb.co/XzcwL5s/black-shearling.png",
        price: 125,
      },
      {
        id: 19,
        name: "Blue Jean Jacket",
        imageUrl: "https://i.ibb.co/mJS6vz0/blue-jean-jacket.png",
        price: 90,
      },
      {
        id: 20,
        name: "Grey Jean Jacket",
        imageUrl: "https://i.ibb.co/N71k1ML/grey-jean-jacket.png",
        price: 90,
      },
      {
        id: 21,
        name: "Brown Shearling",
        imageUrl: "https://i.ibb.co/s96FpdP/brown-shearling.png",
        price: 165,
      },
      {
        id: 22,
        name: "Tan Trench",
        imageUrl: "https://i.ibb.co/M6hHc3F/brown-trench.png",
        price: 185,
      },
    ],
  },
  {
    id: 4,
    title: "Womens",
    routeName: "womens",
    items: [
      {
        id: 23,
        name: "Blue Tanktop",
        imageUrl: "https://i.ibb.co/7CQVJNm/blue-tank.png",
        price: 25,
      },
      {
        id: 24,
        name: "Floral Blouse",
        imageUrl: "https://i.ibb.co/4W2DGKm/floral-blouse.png",
        price: 20,
      },
      {
        id: 25,
        name: "Floral Dress",
        imageUrl: "https://i.ibb.co/KV18Ysr/floral-skirt.png",
        price: 80,
      },
      {
        id: 26,
        name: "Red Dots Dress",
        imageUrl: "https://i.ibb.co/N3BN1bh/red-polka-dot-dress.png",
        price: 80,
      },
      {
        id: 27,
        name: "Striped Sweater",
        imageUrl: "https://i.ibb.co/KmSkMbH/striped-sweater.png",
        price: 45,
      },
      {
        id: 28,
        name: "Yellow Track Suit",
        imageUrl: "https://i.ibb.co/v1cvwNf/yellow-track-suit.png",
        price: 135,
      },
      {
        id: 29,
        name: "White Blouse",
        imageUrl: "https://i.ibb.co/qBcrsJg/white-vest.png",
        price: 20,
      },
    ],
  },
  {
    id: 5,
    title: "Mens",
    routeName: "mens",
    items: [
      {
        id: 30,
        name: "Camo Down Vest",
        imageUrl: "https://i.ibb.co/xJS0T3Y/camo-vest.png",
        price: 325,
      },
      {
        id: 31,
        name: "Floral T-shirt",
        imageUrl: "https://i.ibb.co/qMQ75QZ/floral-shirt.png",
        price: 20,
      },
      {
        id: 32,
        name: "Black & White Longsleeve",
        imageUrl: "https://i.ibb.co/55z32tw/long-sleeve.png",
        price: 25,
      },
      {
        id: 33,
        name: "Pink T-shirt",
        imageUrl: "https://i.ibb.co/RvwnBL8/pink-shirt.png",
        price: 25,
      },
      {
        id: 34,
        name: "Jean Long Sleeve",
        imageUrl: "https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png",
        price: 40,
      },
      {
        id: 35,
        name: "Burgundy T-shirt",
        imageUrl: "https://i.ibb.co/mh3VM1f/polka-dot-shirt.png",
        price: 25,
      },
    ],
  },
];

export function getShopData() {
  return SHOP_DATA;
}

const products = [
  {
    id: 1,
    name: "Apple iPhone 15",
    brand: "Apple",
    image:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Apple_iPhone_15.jpeg",
    price: 69999,
    originalPrice: 79999,
    rating: 4.6,
    variants: [
      {
        id: "128gb",
        name: "128 GB",
        price: 69999,
      },
      {
        id: "256gb",
        name: "256 GB",
        price: 79999,
      },
    ],
    emiPlans: [
      {
        id: "emi-6",
        duration: 6,
        monthlyAmount: 11667,
        totalAmount: 70002,
      },
      {
        id: "emi-12",
        duration: 12,
        monthlyAmount: 5834,
        totalAmount: 70008,
      },
    ],
  },
  {
    id: 2,
    name: "Samsung Galaxy S24",
    brand: "Samsung",
    image:
      "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=600&q=80",
    price: 74999,
    originalPrice: 84999,
    rating: 4.5,
    variants: [
      {
        id: "128gb",
        name: "128 GB",
        price: 74999,
      },
      {
        id: "256gb",
        name: "256 GB",
        price: 84999,
      },
    ],
    emiPlans: [
      {
        id: "emi-6",
        duration: 6,
        monthlyAmount: 12500,
        totalAmount: 75000,
      },
      {
        id: "emi-12",
        duration: 12,
        monthlyAmount: 6250,
        totalAmount: 75000,
      },
    ],
  },
  {
    id: 3,
    name: "Sony WH-1000XM5",
    brand: "Sony",
    image:
      "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?auto=format&fit=crop&w=600&q=80",
    price: 29990,
    originalPrice: 34990,
    rating: 4.7,
    variants: [
      {
        id: "black",
        name: "Black",
        price: 29990,
      },
      {
        id: "silver",
        name: "Silver",
        price: 29990,
      },
    ],
    emiPlans: [
      {
        id: "emi-6",
        duration: 6,
        monthlyAmount: 4999,
        totalAmount: 29994,
      },
      {
        id: "emi-12",
        duration: 12,
        monthlyAmount: 2499,
        totalAmount: 29988,
      },
    ],
  },
];

export default products;

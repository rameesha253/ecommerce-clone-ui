// Define the type for CoutureProduct
interface CoutureProduct {
  id: string;
  title: string;
  price: string;
  image: string;
  tag?: string;
}

// Export the array of CoutureProduct objects
export const coutureProducts: CoutureProduct[] = [
  {
    id: "1",
    title: "Bissan",
    price: "Rs.200,000",
    image: "/src/assets/couture/c2.jpg",
    tag: "PRE ORDER",
  },
  {
    id: "2",
    title: "Bazif",
    price: "Rs.250,000",
    image: "/src/assets/couture/c1.webp",
    tag: "PRE ORDER",
  },
  {
    id: "3",
    title: "Merjan",
    price: "Rs.195,000",
    image: "/src/assets/couture/c3.jpg",
    tag: "PRE ORDER",
  },
  {
    id: "4",
    title: "Velmira",
    price: "Rs.250,000",
    image: "/src/assets/couture/c4.jpg",
    tag: "PRE ORDER",
  },
  {
    id: "5",
    title: "Lavish Embroidered Gown",
    price: "Rs.220,000",
    image: "/src/assets/couture/c5.jpg",
    tag: "PRE ORDER",
  },
  {
    id: "6",
    title: "Regal Silk Lehenga",
    price: "Rs.275,000",
    image: "/src/assets/couture/c6.jpg",
    tag: "PRE ORDER",
  },
];
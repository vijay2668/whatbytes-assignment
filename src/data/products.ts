export interface Product {
  id: string;
  title: string;
  price: number;
  image: string;
  category: string;
  rating?: number;
  description: string;
}

export const products: Product[] = [
  {
    id: "1",
    title: "Running Shoes",
    price: 99,
    image: "https://images.unsplash.com/photo-1543508282-6319a3e2621f?w=400&h=400&fit=crop",
    category: "Clothing",
    rating: 4.5,
    description: "High-performance running shoes with advanced cushioning technology."
  },
  {
    id: "2",
    title: "Wireless Headphones",
    price: 149,
    image: "https://images.unsplash.com/photo-1491927570842-0261e477d937?w=400&h=400&fit=crop",
    category: "Electronics",
    rating: 4.3,
    description: "Premium wireless headphones with noise cancellation and premium sound quality."
  },
  {
    id: "3",
    title: "Backpack",
    price: 79,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop",
    category: "Clothing",
    rating: 4.7,
    description: "Durable and spacious backpack perfect for daily use and travel."
  },
  {
    id: "4",
    title: "Smartwatch",
    price: 249,
    image: "https://images.unsplash.com/photo-1660844817855-3ecc7ef21f12?w=400&h=400&fit=crop",
    category: "Electronics",
    rating: 4.4,
    description: "Advanced smartwatch with fitness tracking and smartphone connectivity."
  },
  {
    id: "5",
    title: "Sunglasses",
    price: 149,
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=400&fit=crop",
    category: "Clothing",
    rating: 4.2,
    description: "Stylish sunglasses with UV protection and premium frame construction."
  },
  {
    id: "6",
    title: "Digital Camera",
    price: 499,
    image: "https://images.unsplash.com/photo-1603208234872-619ffa1209cb?w=400&h=400&fit=crop",
    category: "Electronics",
    rating: 4.6,
    description: "Professional digital camera with high resolution and advanced features."
  },
  {
    id: "7",
    title: "T-shirt",
    price: 29,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop",
    category: "Clothing",
    rating: 4.1,
    description: "Comfortable cotton t-shirt with modern fit and stylish design."
  },
  {
    id: "8",
    title: "Smartphone",
    price: 699,
    image: "https://images.unsplash.com/photo-1607203391514-b001be773a22?w=400&h=400&fit=crop",
    category: "Electronics",
    rating: 4.8,
    description: "Latest smartphone with advanced camera system and powerful performance."
  }
];

export const categories = ["All", "Electronics", "Clothing", "Home"];
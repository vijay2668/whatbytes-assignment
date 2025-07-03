"use client";
import { products } from "@/data/products";
import { useSearchParams } from "next/navigation";
import { useMemo } from "react";
import { ProductCard } from "./ProductCard";

export const MainContent = () => {
  const searchParams = useSearchParams();

  // Read filters from URL
  const searchQuery = searchParams.get("q") || "";
  const selectedCategory = searchParams.get("category") || "All";
  const priceParam = searchParams.get("price") || "";

  // Filter products based on search, category, and price
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      // Search filter
      const matchesSearch =
        product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase());

      // Category filter (if no category selected, show all)
      const matchesCategory =
        selectedCategory === "All" || selectedCategory === product.category;

      // Parse price range from "min-max" format
      const priceRange = priceParam
        ? priceParam.split("-").map(Number)
        : [0, 1000];

      // Price filter
      const matchesPrice =
        product.price >= priceRange[0] && product.price <= priceRange[1];

      return matchesSearch && matchesCategory && matchesPrice;
    });
  }, [priceParam, searchQuery, selectedCategory]);

  return (
    <div className="flex-1">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-foreground mb-2">
          Product Listing
        </h1>
        <p className="text-muted-foreground">
          {filteredProducts.length} product
          {filteredProducts.length !== 1 ? "s" : ""} found
        </p>
      </div>

      {/* Product Grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <h3 className="text-lg font-medium text-muted-foreground mb-2">
            No products found
          </h3>
          <p className="text-muted-foreground">
            Try adjusting your search or filter criteria
          </p>
        </div>
      )}
    </div>
  );
};

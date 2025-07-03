"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useCart } from "@/contexts/CartContext";
import { Search, ShoppingCart, User } from "lucide-react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export const Header = () => {
  const [newSearchQuery, setNewSearchQuery] = useState("");

  const searchParams = useSearchParams();
  const router = useRouter();

  const handleSearchQuery = (value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (value !== "") {
      params.set("q", value);
    } else {
      params.delete("q");
    }
    router.replace(`?${params.toString()}`);
  };

  const { itemCount } = useCart();

  return (
    <header className="sticky top-0 z-50 w-full bg-primary shadow-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <h1 className="text-xl font-bold text-primary-foreground">Logo</h1>
          </Link>

          {/* Search Bar */}
          <div className="flex-1 max-w-2xl relative">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                type="text"
                placeholder="Search for products..."
                value={newSearchQuery}
                onChange={(e) => {
                  handleSearchQuery(e.target.value);
                  setNewSearchQuery(e.target.value);
                }}
                className="pl-10 bg-white border-white/20 focus:border-white/40 text-foreground"
              />
            </div>
          </div>

          {/* Cart and Profile */}
          <div className="flex items-center gap-2">
            <Link href="/cart">
              <Button
                size="lg"
                className="relative text-primary-foreground bg-secondary hover:bg-secondary/80"
              >
                <ShoppingCart className="h-5 w-5" />
                <span className="hidden sm:inline">Cart</span>
                {itemCount > 0 && (
                  <Badge
                    variant="destructive"
                    className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center text-xs p-0 min-w-5"
                  >
                    {itemCount}
                  </Badge>
                )}
              </Button>
            </Link>

            <Button
              size="lg"
              className="text-primary-foreground bg-secondary hover:bg-secondary/80"
            >
              <User className="h-5 w-5" />
              <span className="hidden sm:inline">Profile</span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

"use client";

import { useState } from "react";
import { ProductCard } from "../components/productCard";
import { FilterSidebar } from "../components/filterSideBar";
import { products } from "../data/suitesData.js";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/select";
import { GridIcon, LayoutListIcon } from "lucide-react";
import { Button } from "../components/button";

export default function SuitStore() {
	const [selectedFilters, setSelectedFilters] = useState({
		categories: [],
		styles: [],
		fabrics: [],
	});
	const [sortBy, setSortBy] = useState("featured");
	const [viewMode, setViewMode] = useState("grid");

	const handleFilterChange = (category, value) => {
		setSelectedFilters((prev) => ({
			...prev,
			[category]: prev[category].includes(value)
				? prev[category].filter((item) => item !== value)
				: [...prev[category], value],
		}));
	};

	const filteredProducts = products.filter((product) => {
		return (
			(selectedFilters.categories.length === 0 || selectedFilters.categories.includes(product.category)) &&
			(selectedFilters.styles.length === 0 || selectedFilters.styles.includes(product.style)) &&
			(selectedFilters.fabrics.length === 0 || selectedFilters.fabrics.includes(product.fabric))
		);
	});

	const sortedProducts = [...filteredProducts].sort((a, b) => {
		switch (sortBy) {
			case "price-asc":
				return a.price - b.price;
			case "price-desc":
				return b.price - a.price;
			case "rating":
				return b.rating - a.rating;
			default:
				return 0;
		}
	});

	return (
		<div className="min-h-screen bg-gray-50">
			<div className="container mx-auto px-4 py-8">
				<div className="flex flex-col md:flex-row gap-8">
					{/* Sidebar */}
					<div className="w-full md:w-64 flex-shrink-0">
						<FilterSidebar selectedFilters={selectedFilters} onFilterChange={handleFilterChange} />
					</div>

					{/* Main Content */}
					<div className="flex-1">
						<div className="flex justify-between items-center mb-6">
							<h1 className="text-2xl font-bold">Custom Suits</h1>
							<div className="flex items-center gap-4">
								<Select value={sortBy} onValueChange={setSortBy}>
									<SelectTrigger className="w-[180px]">
										<SelectValue placeholder="Sort by" />
									</SelectTrigger>
									<SelectContent>
										<SelectItem value="featured">Featured</SelectItem>
										<SelectItem value="price-asc">Price: Low to High</SelectItem>
										<SelectItem value="price-desc">Price: High to Low</SelectItem>
										<SelectItem value="rating">Best Rating</SelectItem>
									</SelectContent>
								</Select>
								<div className="flex items-center gap-2">
									<Button
										variant={viewMode === "grid" ? "default" : "outline"}
										size="icon"
										onClick={() => setViewMode("grid")}>
										<GridIcon className="h-4 w-4" />
									</Button>
									<Button
										variant={viewMode === "list" ? "default" : "outline"}
										size="icon"
										onClick={() => setViewMode("list")}>
										<LayoutListIcon className="h-4 w-4" />
									</Button>
								</div>
							</div>
						</div>

						<div className={viewMode === "grid" ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" : "space-y-4"}>
							{sortedProducts.map((product) => (
								<ProductCard key={product.id} product={product} />
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

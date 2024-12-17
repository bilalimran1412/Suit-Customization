import { Card, CardContent, CardFooter } from "./Card";
import { Star } from "lucide-react";

export function ProductCard({ product, viewMode }) {
	return (
		<Card className={`overflow-hidden ${viewMode === "list" ? "flex" : ""}`}>
			<div className={`relative ${viewMode === "list" ? "w-1/3" : "aspect-square"} overflow-hidden`}>
				<img
					src={product.image}
					alt={product.name}
					className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
				/>
			</div>
			<div className={viewMode === "list" ? "w-2/3" : ""}>
				<CardContent className="p-4">
					<h3 className="font-semibold text-lg mb-2">{product.name}</h3>
					<div className="flex items-center gap-2 mb-2">
						<div className="flex items-center">
							{[...Array(5)].map((_, i) => (
								<Star
									key={i}
									className={`w-4 h-4 ${
										i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
									}`}
								/>
							))}
						</div>
						<span className="text-sm text-muted-foreground">({product.reviews})</span>
					</div>
				</CardContent>
				<CardFooter className="p-4 pt-0 flex justify-between items-center">
					<div className="font-bold text-xl">${product.price}</div>
				</CardFooter>
			</div>
		</Card>
	);
}

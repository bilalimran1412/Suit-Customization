import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../components/accordion";
import { Checkbox } from "../components/checkBox";
import { filters } from "../data/suitesData";

export function FilterSidebar({ selectedFilters, onFilterChange }) {
	const handleFilterChange = (category, value) => {
		onFilterChange(category, value);
	};

	return (
		<Accordion type="multiple" className="w-full">
			{Object.entries(filters).map(([category, values]) => (
				<AccordionItem key={category} value={category}>
					<AccordionTrigger className="capitalize">{category}</AccordionTrigger>
					<AccordionContent>
						<div className="space-y-2">
							{values.map((value) => (
								<div key={value} className="flex items-center space-x-2">
									<Checkbox
										id={`${category}-${value}`}
										checked={selectedFilters[category]?.includes(value)}
										onCheckedChange={() => handleFilterChange(category, value)}
									/>
									<label
										htmlFor={`${category}-${value}`}
										className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 capitalize">
										{value}
									</label>
								</div>
							))}
						</div>
					</AccordionContent>
				</AccordionItem>
			))}
		</Accordion>
	);
}

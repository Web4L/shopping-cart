export function formatCurrency(value: number): string {
	return new Intl.NumberFormat(undefined, {
		currency: "USD",
		style: "currency",
	}).format(value);
}

export type Artwork = {
	title: string;
	medium: string;
	size: string;
	price: string;
	image: string;
};

export const featuredArtwork = {
	image:
		"https://images.unsplash.com/photo-1579783901586-d88db74b4fe4?auto=format&fit=crop&w=1600&q=90",
	alt: "Featured artwork",
};

export const artworks: Artwork[] = [
	{
		title: "Golden Silence",
		medium: "Acrylic on Canvas",
		size: "90 × 120 cm",
		price: "₦650,000",
		image:
			"https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&w=1200&q=90",
	},
	{
		title: "Fragments of Thought",
		medium: "Mixed Media",
		size: "100 × 150 cm",
		price: "₦820,000",
		image:
			"https://images.unsplash.com/photo-1577083288073-40892c0860a4?auto=format&fit=crop&w=1200&q=90",
	},
	{
		title: "Beyond the Horizon",
		medium: "Acrylic on Canvas",
		size: "80 × 100 cm",
		price: "₦550,000",
		image:
			"https://images.unsplash.com/photo-1549490349-8643362247b5?auto=format&fit=crop&w=1200&q=90",
	},
	{
		title: "Balance in Chaos",
		medium: "Mixed Media",
		size: "100 × 120 cm",
		price: "₦900,000",
		image:
			"https://images.unsplash.com/photo-1541961017774-22349e4a1262?auto=format&fit=crop&w=1200&q=90",
	},
	{
		title: "Echoes Within",
		medium: "Acrylic on Canvas",
		size: "100 × 120 cm",
		price: "₦750,000",
		image:
			"https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?auto=format&fit=crop&w=1200&q=90",
	},
	{
		title: "Unseen Strength",
		medium: "Oil on Canvas",
		size: "70 × 100 cm",
		price: "₦600,000",
		image:
			"https://images.unsplash.com/photo-1578301978018-3005759f48f7?auto=format&fit=crop&w=1200&q=90",
	},
];

export const studioImage = {
	image:
		"https://images.unsplash.com/photo-1594784053208-0d6f4d7d3e1d?auto=format&fit=crop&w=1400&q=85",
	alt: "Artist studio",
};

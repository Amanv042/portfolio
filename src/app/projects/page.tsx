import CircularGallery from "@/components/ui/CircularGallery";

const galleryItems = [
	{
		image: "https://images.pexels.com/photos/31103901/pexels-photo-31103901/free-photo-of-city-waterfront-view-with-iconic-bridge.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
		text: "Project 1",
	},
	{
		image: "https://images.pexels.com/photos/31112554/pexels-photo-31112554/free-photo-of-dynamic-skier-on-powder-snow-in-winter-landscape.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
		text: "Project 2",
	},
];

export default function Projects() {
	return (
		<>
			<div style={{ height: "600px", position: "relative" }}>
				<CircularGallery item={galleryItems} bend={3} textColor="#ffffff" borderRadius={0.05} />
			</div>
		</>
	);
}

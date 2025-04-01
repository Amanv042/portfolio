"use client";
import { useRef } from "react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

const imageArray = [
	{
		image: "https://images.pexels.com/photos/879109/pexels-photo-879109.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
		title: "Image 1",
		alternative: "Image 1",
	},
	{
		image: "https://images.pexels.com/photos/5926382/pexels-photo-5926382.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
		title: "Image 2",
		alternative: "Image 2",
	},
	{
		image: "https://images.pexels.com/photos/374560/pexels-photo-374560.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
		title: "Image 3",
		alternative: "Image 3",
	},
	{
		image: "https://images.pexels.com/photos/13791398/pexels-photo-13791398.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
		title: "Image 4",
		alternative: "Image 4",
	},
];

export function CarouselPlugin() {
	const plugin = useRef(Autoplay({ delay: 2000 }));

	return (
		<Carousel plugins={[plugin.current]} className="w-full cursor-pointer">
			<CarouselContent>
				{imageArray.map((data, index) => (
					<CarouselItem key={index}>
						<div className="w-[90%] mx-auto h-[600px] rounded-lg overflow-hidden">
							<Image
								src={data.image}
								alt={data.alternative}
								width={1500}
								height={1500}
								className="w-full h-full object-cover"
							/>
						</div>
					</CarouselItem>
				))}
			</CarouselContent>
		</Carousel>
	);
}

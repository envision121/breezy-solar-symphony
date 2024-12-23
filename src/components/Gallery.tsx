import { useEffect } from "react";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const Gallery = () => {
  const projects = [
    {
      title: "Wind Farm Installation",
      location: "Tamil Nadu",
      image: "https://images.unsplash.com/photo-1532601224476-15c79f2f7a51",
    },
    {
      title: "Solar Park Development",
      location: "Karnataka",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    },
    {
      title: "Hybrid Energy System",
      location: "Kerala",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    },
    {
      title: "Industrial Solar Installation",
      location: "Andhra Pradesh",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
    },
    {
      title: "Commercial Wind Project",
      location: "Maharashtra",
      image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e",
    },
    {
      title: "Residential Solar Setup",
      location: "Gujarat",
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276",
    }
  ];

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { 
      loop: true,
      align: "start",
      slidesToScroll: 1,
    },
    [Autoplay({ delay: 3000, stopOnInteraction: false })]
  );

  useEffect(() => {
    if (emblaApi) {
      console.log("Carousel initialized");
    }
  }, [emblaApi]);

  return (
    <section className="py-24 bg-white" id="gallery">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-primary font-heading text-sm uppercase tracking-[0.2em] mb-4 flex items-center justify-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary inline-block"></span>
            <span>Our Projects</span>
            <span className="w-2 h-2 rounded-full bg-primary inline-block"></span>
          </h2>
          <h3 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-black">
            Explore Our Latest Projects
          </h3>
        </div>

        <Carousel
          ref={emblaRef}
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-7xl mx-auto"
        >
          <CarouselContent>
            {projects.map((project, index) => (
              <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/4">
                <div className="group relative overflow-hidden rounded-2xl shadow-lg h-[400px]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                      <p className="text-white/80">{project.location}</p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </section>
  );
};

export default Gallery;
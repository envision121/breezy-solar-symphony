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
import { ArrowRight } from "lucide-react";

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
    },
    {
      title: "Urban Wind Installation",
      location: "Delhi",
      image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7",
    },
    {
      title: "Rural Solar Project",
      location: "Rajasthan",
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

  return (
    <section className="py-24 bg-white" id="gallery">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-primary font-heading text-sm uppercase tracking-[0.2em] mb-4 flex items-center justify-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary inline-block"></span>
            <span>Our Projects</span>
            <span className="w-2 h-2 rounded-full bg-primary inline-block"></span>
          </h2>
          <h3 className="font-heading text-2xl font-medium text-black">
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
              <CarouselItem key={index} className="md:basis-1/4 lg:basis-1/4">
                <div className="relative overflow-hidden rounded-2xl shadow-lg h-[300px] mx-2 group">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
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

        <div className="flex justify-center mt-8">
          <a
            href="/gallery"
            className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-full inline-flex items-center group transition-all duration-300"
          >
            View More Projects
            <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
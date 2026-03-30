import { PropertyCard } from "@/components/ui/card-3"; 

const Project_Card= () => {
  return (
    <div className="flex h-full max-w-full items-center justify-center p-8">
      <PropertyCard
        imageUrl="https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?q=80&w=2070&auto=format&fit=crop"
        name="La Brisa Vales"
        location="Ubud, Bali, Indonesia"
        price={980}
        rating={4.9}
        reviews={1982}
        imageAlt="Luxury villa with a pool surrounded by palm trees"
        aria-label="View details for La Brisa Vales in Ubud, Bali"
      />
    </div>
  );
};

export default Project_Card;
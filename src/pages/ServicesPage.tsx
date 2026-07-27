import { useRef, useState } from 'react';
import VehicleCard from '../components/VehicleCard';
import InquiryForm from '../components/InquiryForm';

const services = [
  { title: 'Container', description: 'Secure container transport for long distance shipments.', image: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=900&q=80' },
  { title: 'Open Vehicle', description: 'Flexible open transport for bulky and irregular loads.', image: 'https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?auto=format&fit=crop&w=900&q=80' },
  { title: 'Mini Pickup', description: 'Compact pickup solutions for city and short-haul moves.', image: 'https://images.unsplash.com/photo-1483721310020-03333e577078?auto=format&fit=crop&w=900&q=80' },
  { title: 'Pickup Truck', description: 'Reliable pickup trucks for efficient cargo delivery.', image: 'https://images.unsplash.com/photo-1510663100369-08c2f2f2af2a?auto=format&fit=crop&w=900&q=80' },
  { title: 'Truck', description: 'Heavy-duty truck transport for large commercial shipments.', image: 'https://images.unsplash.com/photo-1494423507780-7a0b8cf2d1ce?auto=format&fit=crop&w=900&q=80' },
  { title: 'Trailer', description: 'Trailer transport for oversized cargo and logistics partners.', image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=900&q=80' },
  { title: 'Heavy Vehicle', description: 'Specialized services for industrial and heavy logistics needs.', image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=900&q=80' },
  { title: 'Custom Requirement', description: 'Tailored logistics plans and custom shipment support.', image: 'https://images.unsplash.com/photo-1515515521448-49050d096b52?auto=format&fit=crop&w=900&q=80' },
];

function ServicesPage() {
  const inquiryRef = useRef<HTMLDivElement | null>(null);
  const [selectedVehicle, setSelectedVehicle] = useState('Container');

  const scrollToInquiry = (vehicle: string) => {
    setSelectedVehicle(vehicle);
    inquiryRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="mx-auto max-w-6xl px-4 pb-24 pt-8 md:px-6">
      <section className="space-y-4">
        <p className="text-sm uppercase tracking-[0.24em] text-brand">Services</p>
        <h1 className="text-4xl font-semibold text-slate-950 sm:text-5xl">Vehicle categories and transport solutions</h1>
        <p className="max-w-3xl text-base leading-8 text-slate-600">Choose the right vehicle type and request a quote with a single tap. Every service card opens the inquiry form with the selected category prefilled.</p>
      </section>

      <section className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {services.map((service) => (
          <VehicleCard
            key={service.title}
            title={service.title}
            description={service.description}
            image={service.image}
            onQuote={() => scrollToInquiry(service.title)}
          />
        ))}
      </section>

      <section ref={inquiryRef} className="mt-16 rounded-[32px] bg-white p-6 shadow-soft md:p-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.24em] text-brand">Inquiry form</p>
            <h2 className="mt-3 text-3xl font-semibold text-slate-950">Ask for a quote with your chosen vehicle</h2>
          </div>
          <div className="rounded-full bg-slate-50 px-5 py-3 text-sm text-slate-600 shadow-sm">Selected: <span className="font-semibold text-slate-900">{selectedVehicle}</span></div>
        </div>
        <div className="mt-8">
          <InquiryForm vehicleType={selectedVehicle} />
        </div>
      </section>
    </div>
  );
}

export default ServicesPage;

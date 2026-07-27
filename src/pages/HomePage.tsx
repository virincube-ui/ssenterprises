import { Link } from 'react-router-dom';
import InquiryForm from '../components/InquiryForm';
import VehicleCard from '../components/VehicleCard';
import { FiArrowRight, FiMapPin, FiTruck, FiShield } from 'react-icons/fi';
import { useRef, useState } from 'react';

const vehicles = [
  { title: 'Container', description: 'Secure container transport for long distance shipments.', image: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=900&q=80' },
  { title: 'Open Vehicle', description: 'Flexible open transport for bulky and irregular loads.', image: 'https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?auto=format&fit=crop&w=900&q=80' },
  { title: 'Mini Pickup', description: 'Compact pickup solutions for city and short-haul moves.', image: 'https://images.unsplash.com/photo-1483721310020-03333e577078?auto=format&fit=crop&w=900&q=80' },
  { title: 'Pickup Truck', description: 'Reliable pickup trucks for efficient cargo delivery.', image: 'https://images.unsplash.com/photo-1510663100369-08c2f2f2af2a?auto=format&fit=crop&w=900&q=80' },
  { title: 'Truck', description: 'Heavy-duty truck transport for large commercial shipments.', image: 'https://images.unsplash.com/photo-1483721310020-03333e577078?auto=format&fit=crop&w=900&q=80' },
  { title: 'Trailer', description: 'Trailer transport for oversized cargo and logistics partners.', image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=900&q=80' },
  { title: 'Heavy Vehicle', description: 'Specialized services for industrial and heavy logistics needs.', image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=900&q=80' },
  { title: 'Custom Requirement', description: 'Tailored logistics plans and custom shipment support.', image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=900&q=80' },
];

function HomePage() {
  const inquiryRef = useRef<HTMLDivElement | null>(null);
  const [selectedVehicle, setSelectedVehicle] = useState('Container');

  const scrollToInquiry = (vehicle: string) => {
    setSelectedVehicle(vehicle);
    inquiryRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="mx-auto max-w-6xl px-4 pb-24 pt-8 md:px-6">
      <section className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="space-y-6 py-8">
          <span className="inline-flex items-center rounded-full bg-brand/10 px-4 py-2 text-sm font-semibold text-brand">Mobile-first Logistics</span>
          <h1 className="text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">SS Enterprises makes transport fast, simple and reliable.</h1>
          <p className="max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">Mobile-first logistics solutions with responsive bookings, instant inquiry email, and modern transportation services built for businesses on the move.</p>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link to="/services" className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-6 py-4 text-sm font-semibold text-white transition hover:bg-slate-800">
              View Services
              <FiArrowRight />
            </Link>
            <a href="#inquiry" className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-4 text-sm font-semibold text-slate-900 transition hover:border-slate-300 hover:bg-slate-50">
              Quick Inquiry
            </a>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-3xl bg-slate-950 px-5 py-6 text-white shadow-soft">
              <p className="text-xs uppercase tracking-[0.24em] text-slate-400">24/7 Support</p>
              <p className="mt-4 text-2xl font-semibold">Fast Response</p>
            </div>
            <div className="rounded-3xl bg-slate-950 px-5 py-6 text-white shadow-soft">
              <p className="text-xs uppercase tracking-[0.24em] text-slate-400">Industry</p>
              <p className="mt-4 text-2xl font-semibold">Logistics</p>
            </div>
            <div className="rounded-3xl bg-slate-950 px-5 py-6 text-white shadow-soft">
              <p className="text-xs uppercase tracking-[0.24em] text-slate-400">Coverage</p>
              <p className="mt-4 text-2xl font-semibold">Pan India</p>
            </div>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-[32px] bg-brand/5 p-8 shadow-soft">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,193,7,0.15),_transparent_45%)]" />
          <div className="relative space-y-8">
            <div className="rounded-[28px] bg-white p-6 shadow-xl">
              <p className="text-sm uppercase tracking-[0.24em] text-brand">Trusted Fleet</p>
              <h2 className="mt-4 text-3xl font-semibold text-slate-950">Modern vehicles, expert operators.</h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">Our fleet includes container units, pickups, open carriers and heavy vehicles tailored for every shipment.</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-[28px] border border-slate-200 bg-white p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-white">
                  <FiMapPin />
                </div>
                <p className="mt-4 text-sm font-semibold text-slate-900">Route Planning</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">Optimized transit and delivery tracking for every shipment.</p>
              </div>
              <div className="rounded-[28px] border border-slate-200 bg-white p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-white">
                  <FiShield />
                </div>
                <p className="mt-4 text-sm font-semibold text-slate-900">Safety First</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">Secure handling, robust contracts and transparent operations.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-16 grid gap-8 rounded-[32px] bg-white px-6 py-10 shadow-soft md:px-10">
        <div className="space-y-4 text-center">
          <p className="text-sm uppercase tracking-[0.24em] text-brand">Why choose SS Enterprises</p>
          <h2 className="text-3xl font-semibold text-slate-950">Logistics designed for modern businesses.</h2>
          <p className="mx-auto max-w-3xl text-base leading-8 text-slate-600">Performance-first services with mobile-ready funnels, fast inquiry flow and reliable transport for every cargo type.</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-3">
          <article className="rounded-[28px] border border-slate-200 bg-slate-50 p-6 text-slate-700 shadow-sm transition hover:-translate-y-1 hover:bg-white">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand">Safe Delivery</p>
            <p className="mt-4 text-sm leading-7">Clear transit updates and secure handling of sensitive cargo.</p>
          </article>
          <article className="rounded-[28px] border border-slate-200 bg-slate-50 p-6 text-slate-700 shadow-sm transition hover:-translate-y-1 hover:bg-white">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand">Flexible Fleet</p>
            <p className="mt-4 text-sm leading-7">Multiple vehicle categories for every shipment size and urgency.</p>
          </article>
          <article className="rounded-[28px] border border-slate-200 bg-slate-50 p-6 text-slate-700 shadow-sm transition hover:-translate-y-1 hover:bg-white">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand">Fast Quotes</p>
            <p className="mt-4 text-sm leading-7">Open your email client with preformatted inquiry details instantly.</p>
          </article>
        </div>
      </section>

      <section className="mt-16 space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.24em] text-brand">Vehicle Categories</p>
            <h2 className="mt-3 text-3xl font-semibold text-slate-950">Fleet categories for every transport need.</h2>
          </div>
          <Link to="/services" className="text-sm font-semibold text-brand transition hover:text-yellow-500">View all services</Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {vehicles.slice(0, 4).map((vehicle) => (
            <VehicleCard
              key={vehicle.title}
              title={vehicle.title}
              description={vehicle.description}
              image={vehicle.image}
              onQuote={() => scrollToInquiry(vehicle.title)}
            />
          ))}
        </div>
      </section>

      <section ref={inquiryRef} id="inquiry" className="mt-16 grid gap-6 lg:grid-cols-[1fr_0.9fr]">
        <div className="rounded-[32px] bg-brand/5 p-8 shadow-soft">
          <span className="inline-flex items-center rounded-full bg-brand/20 px-4 py-2 text-sm font-semibold text-brand">Inquiry</span>
          <h2 className="mt-4 text-3xl font-semibold text-slate-950">Ready to move your cargo?</h2>
          <p className="mt-4 max-w-xl text-sm leading-7 text-slate-700">Complete the quick inquiry form and open your email app to send a formatted quote request right away.</p>
          <div className="mt-8 space-y-4 text-sm text-slate-700">
            <p className="flex items-center gap-3">• Mobile friendly inquiry flow</p>
            <p className="flex items-center gap-3">• No backend needed, email-ready form</p>
            <p className="flex items-center gap-3">• Responsive fleet preview and fast booking access</p>
          </div>
        </div>

        <InquiryForm vehicleType={selectedVehicle} />
      </section>
    </div>
  );
}

export default HomePage;

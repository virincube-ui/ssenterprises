import { FiChevronRight } from 'react-icons/fi';

type VehicleCardProps = {
  title: string;
  description: string;
  image: string;
  onQuote: () => void;
};

function VehicleCard({ title, description, image, onQuote }: VehicleCardProps) {
  return (
    <article className="group overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-soft transition hover:-translate-y-1 hover:shadow-xl">
      <div className="aspect-[4/3] overflow-hidden bg-slate-100">
        <img src={image} alt={title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
      </div>
      <div className="space-y-4 p-5">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand">Vehicle</p>
          <h3 className="mt-2 text-xl font-semibold text-slate-900">{title}</h3>
        </div>
        <p className="text-sm leading-6 text-slate-600">{description}</p>
        <button
          type="button"
          onClick={onQuote}
          className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
        >
          Request Quote
          <FiChevronRight />
        </button>
      </div>
    </article>
  );
}

export default VehicleCard;

import config from '../utils/config';
import { FiMail, FiPhone, FiMapPin, FiClock, FiArrowRight } from 'react-icons/fi';

const businessHours = [
  { day: 'Mon - Fri', hours: '08:00 - 20:00' },
  { day: 'Saturday', hours: '09:00 - 18:00' },
  { day: 'Sunday', hours: 'Closed' },
];

function ContactPage() {
  const callHref = `tel:+${config.phoneNumber}`;
  const waHref = `https://wa.me/${config.whatsappNumber}`;
  const emailHref = `mailto:${config.emailTo}`;

  return (
    <div className="mx-auto max-w-6xl px-4 pb-24 pt-8 md:px-6">
      <section className="space-y-4">
        <p className="text-sm uppercase tracking-[0.24em] text-brand">Contact</p>
        <h1 className="text-4xl font-semibold text-slate-950 sm:text-5xl">Reach SS Enterprises for your transport request</h1>
        <p className="max-w-3xl text-base leading-8 text-slate-600">Direct contact support for quotes, route planning and on-the-ground logistics coordination.</p>
      </section>

      <section className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-6 rounded-[32px] bg-white p-6 shadow-soft md:p-8">
          <div className="grid gap-6 sm:grid-cols-2">
            <article className="rounded-[28px] border border-slate-200 p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand text-slate-950">
                <FiPhone size={18} />
              </div>
              <h2 className="mt-4 text-xl font-semibold text-slate-950">Phone</h2>
              <p className="mt-2 text-sm leading-7 text-slate-600">{config.phoneNumber}</p>
            </article>
            <article className="rounded-[28px] border border-slate-200 p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand text-slate-950">
                <FiMail size={18} />
              </div>
              <h2 className="mt-4 text-xl font-semibold text-slate-950">Email</h2>
              <p className="mt-2 text-sm leading-7 text-slate-600">{config.emailTo}</p>
            </article>
          </div>

          <div className="rounded-[28px] border border-slate-200 bg-slate-50 p-6">
            <div className="flex items-center gap-3 text-slate-900">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-900 text-white">
                <FiMapPin size={18} />
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Business Address</p>
                <p className="mt-2 text-base font-semibold">SS Enterprises, Main Logistics Hub</p>
              </div>
            </div>
            <p className="mt-4 text-sm leading-7 text-slate-600">220 Logistics Park, Industrial Road, Bangalore, Karnataka</p>
          </div>

          <div className="rounded-[28px] border border-slate-200 bg-slate-50 p-6">
            <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Business Hours</p>
            <div className="mt-4 space-y-3 text-sm text-slate-600">
              {businessHours.map((item) => (
                <div key={item.day} className="flex items-center justify-between">
                  <span>{item.day}</span>
                  <span className="font-semibold text-slate-900">{item.hours}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-4 rounded-[32px] bg-brand/5 p-8 shadow-soft">
          <p className="text-sm uppercase tracking-[0.24em] text-brand">Fast actions</p>
          <div className="space-y-4">
            <a href={callHref} className="flex items-center justify-between rounded-3xl bg-white px-6 py-4 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-slate-100">
              <span>Call Now</span>
              <FiArrowRight />
            </a>
            <a href={waHref} target="_blank" rel="noreferrer" className="flex items-center justify-between rounded-3xl bg-white px-6 py-4 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-slate-100">
              <span>WhatsApp</span>
              <FiArrowRight />
            </a>
            <a href={emailHref} className="flex items-center justify-between rounded-3xl bg-white px-6 py-4 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-slate-100">
              <span>Email</span>
              <FiArrowRight />
            </a>
          </div>
          <div className="rounded-[28px] border border-slate-200 bg-white p-6 text-sm leading-7 text-slate-700">
            <p className="font-semibold text-slate-900">Need directions?</p>
            <p className="mt-3">Use Google Maps or your preferred navigation app to reach our logistics hub quickly.</p>
          </div>
        </div>
      </section>

      <section className="mt-10 rounded-[32px] bg-white p-6 shadow-soft md:p-8">
        <div className="aspect-[16/9] overflow-hidden rounded-3xl bg-slate-100">
          <iframe
            title="SS Enterprises Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31107.35585504947!2d77.55610925778113!3d12.971598118770374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670b4ebf013%3A0x4b9cabfca70aa07d!2sBengaluru%2C%20Karnataka%2C%20India!5e0!3m2!1sen!2sus!4v1741234567890!5m2!1sen!2sus"
            className="h-full w-full border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </div>
  );
}

export default ContactPage;

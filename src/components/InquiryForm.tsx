import { useMemo, useState } from 'react';
import { FiMail, FiPhone, FiSend } from 'react-icons/fi';
import config from '../utils/config';

type InquiryFormProps = {
  vehicleType?: string;
};

function InquiryForm({ vehicleType }: InquiryFormProps) {
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [allowContact, setAllowContact] = useState(true);
  const [details, setDetails] = useState('');
  const [errors, setErrors] = useState<{ name?: string; email?: string; details?: string }>({});

  const emailHref = useMemo(() => {
    const subject = encodeURIComponent(`New Vehicle Inquiry - ${vehicleType || 'General'}`);
    const body = encodeURIComponent(
      `Vehicle Type: ${vehicleType || 'General'}\n\nName: ${name}\nCompany: ${company || 'N/A'}\nEmail: ${email}\nPhone: ${phone || 'N/A'}\nPhone Contact Allowed: ${allowContact ? 'Yes' : 'No'}\n\nRequirement:\n${details}`
    );
    return `mailto:${config.emailTo}?subject=${subject}&body=${body}`;
  }, [vehicleType, name, company, email, phone, allowContact, details]);

  const validate = () => {
    const nextErrors: typeof errors = {};
    if (!name.trim()) nextErrors.name = 'Name is required.';
    if (!email.trim()) nextErrors.email = 'Email is required.';
    if (!details.trim()) nextErrors.details = 'Requirement details are required.';
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  return (
    <section className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-soft md:p-8">
      <div className="mb-6 space-y-3">
        <p className="text-sm uppercase tracking-[0.24em] text-brand">Quick Inquiry</p>
        <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">Start your logistics request</h2>
        <p className="max-w-2xl text-sm leading-7 text-slate-600">Fill in the details and open your email client to send the request instantly.</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="space-y-2 text-sm text-slate-700">
          <span>Vehicle Type</span>
          <input
            type="text"
            value={vehicleType || 'General Inquiry'}
            readOnly
            className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-800 focus:border-brand focus:outline-none focus:ring-4 focus:ring-brand/10"
          />
        </label>

        <label className="space-y-2 text-sm text-slate-700">
          <span>Name *</span>
          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-800 focus:border-brand focus:outline-none focus:ring-4 focus:ring-brand/10"
          />
          {errors.name && <p className="text-xs text-rose-500">{errors.name}</p>}
        </label>

        <label className="space-y-2 text-sm text-slate-700">
          <span>Company Name</span>
          <input
            type="text"
            value={company}
            onChange={(event) => setCompany(event.target.value)}
            className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-800 focus:border-brand focus:outline-none focus:ring-4 focus:ring-brand/10"
          />
        </label>

        <label className="space-y-2 text-sm text-slate-700">
          <span>Email *</span>
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-800 focus:border-brand focus:outline-none focus:ring-4 focus:ring-brand/10"
          />
          {errors.email && <p className="text-xs text-rose-500">{errors.email}</p>}
        </label>

        <label className="space-y-2 text-sm text-slate-700 sm:col-span-2">
          <span>Phone Number</span>
          <input
            type="tel"
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
            className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-800 focus:border-brand focus:outline-none focus:ring-4 focus:ring-brand/10"
          />
        </label>

        <label className="sm:col-span-2 flex items-center gap-3 rounded-3xl border border-slate-200 bg-slate-50 px-4 py-4 text-sm text-slate-700">
          <input
            type="checkbox"
            checked={allowContact}
            onChange={(event) => setAllowContact(event.target.checked)}
            className="h-5 w-5 rounded-md border-slate-300 text-brand focus:ring-brand"
          />
          <span>You may contact me via phone.</span>
        </label>

        <label className="sm:col-span-2 space-y-2 text-sm text-slate-700">
          <span>Requirement / Shipment Details *</span>
          <textarea
            rows={5}
            value={details}
            onChange={(event) => setDetails(event.target.value)}
            className="w-full resize-none rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-800 focus:border-brand focus:outline-none focus:ring-4 focus:ring-brand/10"
          />
          {errors.details && <p className="text-xs text-rose-500">{errors.details}</p>}
        </label>
      </div>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="rounded-3xl bg-slate-100 p-4 text-sm text-slate-600 shadow-sm">
          <div className="flex items-center gap-2">
            <FiMail />
            <span>Email inquiry opens your default mail app.</span>
          </div>
          <div className="mt-2 flex items-center gap-2">
            <FiPhone />
            <span>Phone: +{config.phoneNumber}</span>
          </div>
        </div>
        <a
          href={emailHref}
          onClick={(event) => {
            if (!validate()) event.preventDefault();
          }}
          className="inline-flex items-center justify-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-yellow-500"
        >
          <FiSend />
          Send Inquiry
        </a>
      </div>
    </section>
  );
}

export default InquiryForm;

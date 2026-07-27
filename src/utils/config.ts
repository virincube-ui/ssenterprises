const config = {
  emailTo: import.meta.env.VITE_EMAIL_TO || 'info@ssenterprises.com',
  phoneNumber: import.meta.env.VITE_PHONE_NUMBER || '919876543210',
  whatsappNumber: import.meta.env.VITE_WHATSAPP_NUMBER || '919876543210',
  companyName: import.meta.env.VITE_COMPANY_NAME || 'SS Enterprises',
  websiteUrl: import.meta.env.VITE_WEBSITE || 'https://ssenterprises.in',
};

export default config;

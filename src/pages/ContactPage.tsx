import { useState, type FormEvent } from 'react';
import {
  AlertCircle,
  CheckCircle2,
  Clock,
  ExternalLink,
  MapPin,
  Phone,
  Send,
} from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import { translations } from '../data/translations';
import { useLanguage } from '../context/LanguageContext';
import { SeoHead } from '../components/SeoHead';

interface FormValues {
  name: string;
  phone: string;
  preferredDate: string;
  message: string;
  honeypot: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
  preferredDate?: string;
  message?: string;
}

export function ContactPage() {
  const { lang, t, tn } = useLanguage();
  const [values, setValues] = useState<FormValues>({
    name: '',
    phone: '',
    preferredDate: '',
    message: '',
    honeypot: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>(
    'idle'
  );

  const todayStr = new Date().toISOString().split('T')[0];

  const validate = (): FormErrors => {
    const nextErrors: FormErrors = {};
    if (values.name.trim().length < 2) {
      nextErrors.name = t(translations.contact.form.validation.nameRequired);
    }

    const cleanedPhone = values.phone.replace(/[\s()-]/g, '');
    const bdPhoneRegex = /^(?:\+?88)?01[3-9]\d{8}$/;
    const intlPhoneRegex = /^\+?\d{10,15}$/;
    if (!bdPhoneRegex.test(cleanedPhone) && !intlPhoneRegex.test(cleanedPhone)) {
      nextErrors.phone = t(translations.contact.form.validation.phoneInvalid);
    }

    if (!values.preferredDate) {
      nextErrors.preferredDate = t(translations.contact.form.validation.dateRequired);
    } else if (values.preferredDate < todayStr) {
      nextErrors.preferredDate = t(translations.contact.form.validation.datePast);
    }

    if (values.message.trim().length < 5) {
      nextErrors.message = t(translations.contact.form.validation.messageRequired);
    }

    return nextErrors;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (values.honeypot) return;

    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    setStatus('submitting');
    const endpoint = siteConfig.contactEndpoint.trim();

    if (!endpoint) {
      setStatus('success');
      return;
    }

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: values.name.trim(),
          phone: values.phone.trim(),
          preferredDate: values.preferredDate,
          message: values.message.trim(),
          language: lang,
        }),
      });

      if (!response.ok) {
        throw new Error('Request failed');
      }
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  const resetForm = () => {
    setValues({
      name: '',
      phone: '',
      preferredDate: '',
      message: '',
      honeypot: '',
    });
    setErrors({});
    setStatus('idle');
  };

  return (
    <>
      <SeoHead
        title={t(translations.contact.pageTitle)}
        description={t(translations.contact.subheading)}
        path="/contact"
        includeClinicSchema
      />

      {/* Page Header */}
      <section className="bg-gradient-to-b from-[#EAF4FF]/70 to-white py-12 sm:py-16">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs sm:text-sm font-semibold text-[#1769D2]">
              {t(translations.contact.kicker)}
            </p>
            <h1 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0B2D5C] leading-tight">
              {t(translations.contact.heading)}
            </h1>
            <p className="mt-3 text-base text-[#172B4D]/80 leading-relaxed">
              {t(translations.contact.subheading)}
            </p>
          </div>
        </div>
      </section>

      {/* Main Contact Grid */}
      <section className="pb-16 bg-white">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-12">
            {/* Left Column: Direct Call Buttons & Chamber Info (NO WhatsApp) */}
            <div className="space-y-6 lg:col-span-5">
              <div className="rounded-2xl bg-[#0B2D5C] p-6 sm:p-8 text-white">
                <h2 className="text-xl font-bold text-white">
                  {t(translations.contact.callCardTitle)}
                </h2>
                <p className="mt-2 text-sm text-[#EAF4FF]/85 leading-relaxed">
                  {t(translations.contact.callCardSub)}
                </p>

                <div className="mt-6 space-y-3">
                  {siteConfig.chamber.phones.map((phone) => (
                    <a
                      key={phone.tel}
                      href={phone.tel}
                      className="flex min-h-[52px] items-center justify-between rounded-xl bg-white px-5 py-3 text-base font-bold text-[#0B2D5C] transition-colors hover:bg-[#EAF4FF] tabular-nums"
                    >
                      <span>{lang === 'bn' ? phone.displayBn : phone.display}</span>
                      <Phone className="h-5 w-5 text-[#1769D2] shrink-0" />
                    </a>
                  ))}

                  {siteConfig.socialLinks.facebook && (
                    <a
                      href={siteConfig.socialLinks.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex min-h-[48px] items-center justify-between rounded-xl border border-white/25 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/20"
                    >
                      <span>
                        {lang === 'bn'
                          ? 'ফেসবুক পেজে যুক্ত থাকুন'
                          : 'Follow on Facebook'}
                      </span>
                      <ExternalLink className="h-4 w-4 shrink-0" />
                    </a>
                  )}
                </div>
              </div>

              <div className="rounded-2xl border border-[#0B2D5C]/12 bg-[#F6F8FB] p-6 sm:p-7 space-y-5">
                <div className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-[#1769D2]" />
                  <div>
                    <p className="text-base font-bold text-[#0B2D5C]">
                      {t(siteConfig.chamber.name)}
                    </p>
                    <p className="mt-1 text-sm text-[#172B4D]/85">
                      {tn(siteConfig.chamber.addressLine1)}
                    </p>
                    <p className="mt-0.5 text-xs text-[#172B4D]/65">
                      {t(siteConfig.chamber.addressLandmark)}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 border-t border-[#0B2D5C]/10 pt-4">
                  <Clock className="mt-0.5 h-5 w-5 shrink-0 text-[#1769D2]" />
                  <div className="text-sm">
                    <p className="font-semibold text-[#0B2D5C]">
                      {t(siteConfig.chamber.visitingDays)}
                    </p>
                    <p className="mt-1 text-[#172B4D]/85 font-medium tabular-nums">
                      {t(siteConfig.chamber.visitingHours)}
                    </p>
                  </div>
                </div>

                <div className="border-t border-[#0B2D5C]/10 pt-4">
                  <a
                    href={siteConfig.chamber.googleMapsDirectionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-[44px] w-full items-center justify-center gap-2 rounded-xl border border-[#0B2D5C]/15 bg-white px-4 py-2.5 text-sm font-semibold text-[#0B2D5C] transition-colors hover:bg-[#EAF4FF]"
                  >
                    <span>{t(translations.contact.directionsLabel)}</span>
                    <ExternalLink className="h-4 w-4 text-[#1769D2]" />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Appointment Request Form */}
            <div className="lg:col-span-7">
              <div className="rounded-2xl border border-[#0B2D5C]/12 bg-white p-6 sm:p-8">
                <h2 className="text-2xl font-bold text-[#0B2D5C]">
                  {t(translations.contact.form.heading)}
                </h2>
                <p className="mt-2 text-sm text-[#172B4D]/80 leading-relaxed">
                  {t(translations.contact.form.subheading)}
                </p>

                {status === 'success' ? (
                  <div className="mt-6 rounded-2xl border border-[#1769D2]/25 bg-[#EAF4FF]/65 p-6">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-6 w-6 shrink-0 text-[#1769D2]" />
                      <div>
                        <h3 className="text-lg font-bold text-[#0B2D5C]">
                          {t(translations.contact.form.successTitle)}
                        </h3>
                        <p className="mt-2 text-sm text-[#172B4D]/85 leading-relaxed">
                          {tn(translations.contact.form.successBody)}
                        </p>
                        <button
                          type="button"
                          onClick={resetForm}
                          className="mt-5 inline-flex min-h-[40px] items-center rounded-xl bg-[#0B2D5C] px-4 py-2 text-xs sm:text-sm font-semibold text-white hover:bg-[#1769D2] cursor-pointer"
                        >
                          {t(translations.contact.form.sendAnother)}
                        </button>
                      </div>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate className="mt-6 space-y-5">
                    <input
                      type="text"
                      name="website"
                      value={values.honeypot}
                      onChange={(e) =>
                        setValues({ ...values, honeypot: e.target.value })
                      }
                      tabIndex={-1}
                      autoComplete="off"
                      className="hidden"
                      aria-hidden="true"
                    />

                    <div>
                      <label
                        htmlFor="patient-name"
                        className="block text-sm font-semibold text-[#0B2D5C]"
                      >
                        {t(translations.contact.form.nameLabel)}
                      </label>
                      <input
                        id="patient-name"
                        type="text"
                        required
                        value={values.name}
                        onChange={(e) => {
                          setValues({ ...values, name: e.target.value });
                          if (errors.name) setErrors({ ...errors, name: undefined });
                        }}
                        placeholder={t(translations.contact.form.namePlaceholder)}
                        className={`mt-1.5 min-h-[46px] w-full rounded-xl border bg-[#F6F8FB] px-4 py-2.5 text-sm text-[#172B4D] focus:bg-white focus:outline-none ${
                          errors.name
                            ? 'border-red-600 focus:border-red-600'
                            : 'border-[#0B2D5C]/15 focus:border-[#1769D2]'
                        }`}
                      />
                      {errors.name && (
                        <p className="mt-1.5 flex items-center gap-1.5 text-xs font-medium text-red-700">
                          <AlertCircle className="h-3.5 w-3.5 shrink-0" />
                          <span>{errors.name}</span>
                        </p>
                      )}
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label
                          htmlFor="patient-phone"
                          className="block text-sm font-semibold text-[#0B2D5C]"
                        >
                          {t(translations.contact.form.phoneLabel)}
                        </label>
                        <input
                          id="patient-phone"
                          type="tel"
                          required
                          value={values.phone}
                          onChange={(e) => {
                            setValues({ ...values, phone: e.target.value });
                            if (errors.phone)
                              setErrors({ ...errors, phone: undefined });
                          }}
                          placeholder={t(translations.contact.form.phonePlaceholder)}
                          className={`mt-1.5 min-h-[46px] w-full rounded-xl border bg-[#F6F8FB] px-4 py-2.5 text-sm text-[#172B4D] tabular-nums focus:bg-white focus:outline-none ${
                            errors.phone
                              ? 'border-red-600 focus:border-red-600'
                              : 'border-[#0B2D5C]/15 focus:border-[#1769D2]'
                          }`}
                        />
                        {errors.phone && (
                          <p className="mt-1.5 flex items-center gap-1.5 text-xs font-medium text-red-700">
                            <AlertCircle className="h-3.5 w-3.5 shrink-0" />
                            <span>{errors.phone}</span>
                          </p>
                        )}
                      </div>

                      <div>
                        <label
                          htmlFor="preferred-date"
                          className="block text-sm font-semibold text-[#0B2D5C]"
                        >
                          {t(translations.contact.form.dateLabel)}
                        </label>
                        <input
                          id="preferred-date"
                          type="date"
                          min={todayStr}
                          required
                          value={values.preferredDate}
                          onChange={(e) => {
                            setValues({ ...values, preferredDate: e.target.value });
                            if (errors.preferredDate)
                              setErrors({ ...errors, preferredDate: undefined });
                          }}
                          className={`mt-1.5 min-h-[46px] w-full rounded-xl border bg-[#F6F8FB] px-4 py-2.5 text-sm text-[#172B4D] tabular-nums focus:bg-white focus:outline-none ${
                            errors.preferredDate
                              ? 'border-red-600 focus:border-red-600'
                              : 'border-[#0B2D5C]/15 focus:border-[#1769D2]'
                          }`}
                        />
                        {errors.preferredDate && (
                          <p className="mt-1.5 flex items-center gap-1.5 text-xs font-medium text-red-700">
                            <AlertCircle className="h-3.5 w-3.5 shrink-0" />
                            <span>{errors.preferredDate}</span>
                          </p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="patient-message"
                        className="block text-sm font-semibold text-[#0B2D5C]"
                      >
                        {t(translations.contact.form.messageLabel)}
                      </label>
                      <textarea
                        id="patient-message"
                        rows={4}
                        required
                        value={values.message}
                        onChange={(e) => {
                          setValues({ ...values, message: e.target.value });
                          if (errors.message)
                            setErrors({ ...errors, message: undefined });
                        }}
                        placeholder={t(translations.contact.form.messagePlaceholder)}
                        className={`mt-1.5 w-full rounded-xl border bg-[#F6F8FB] px-4 py-3 text-sm text-[#172B4D] focus:bg-white focus:outline-none ${
                          errors.message
                            ? 'border-red-600 focus:border-red-600'
                            : 'border-[#0B2D5C]/15 focus:border-[#1769D2]'
                        }`}
                      />
                      {errors.message && (
                        <p className="mt-1.5 flex items-center gap-1.5 text-xs font-medium text-red-700">
                          <AlertCircle className="h-3.5 w-3.5 shrink-0" />
                          <span>{errors.message}</span>
                        </p>
                      )}
                    </div>

                    {status === 'error' && (
                      <div className="rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-800">
                        <p className="font-semibold">
                          {t(translations.contact.form.errorTitle)}
                        </p>
                        <p className="mt-1 text-xs leading-relaxed">
                          {t(translations.contact.form.errorBody)}
                        </p>
                      </div>
                    )}

                    <div className="rounded-xl bg-[#F6F8FB] p-4 text-xs text-[#172B4D]/75 leading-relaxed">
                      {t(translations.contact.form.importantNote)}
                    </div>

                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="inline-flex min-h-[48px] w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-[#1769D2] px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#0B2D5C] disabled:opacity-60 cursor-pointer"
                    >
                      <Send className="h-4 w-4" />
                      <span>
                        {status === 'submitting'
                          ? t(translations.contact.form.submittingBtn)
                          : t(translations.contact.form.submitBtn)}
                      </span>
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>

          {/* Google Maps Embed */}
          <div className="mt-12 rounded-2xl border border-[#0B2D5C]/12 bg-[#F6F8FB] p-4 sm:p-6">
            <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
              <h2 className="text-lg font-bold text-[#0B2D5C]">
                {t(translations.contact.mapHeading)}
              </h2>
              <a
                href={siteConfig.chamber.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#1769D2] hover:text-[#0B2D5C]"
              >
                <span>{t(translations.contact.directionsLabel)}</span>
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>
            <div className="overflow-hidden rounded-xl border border-[#0B2D5C]/10 bg-white aspect-[16/9] sm:aspect-[21/9]">
              <iframe
                title={t(siteConfig.chamber.name)}
                src={siteConfig.chamber.googleMapsEmbedUrl}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full w-full border-0"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

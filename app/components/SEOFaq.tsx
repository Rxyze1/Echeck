'use client';

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import Head from 'next/head';

const SEOFaq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Aggressive but natural SEO keyword integration in questions
  const faqs = useMemo(() => [
    {
      q: "What is the best Jaipur call girls service in 2026?",
      a: "Jaipur Call Girls is rated as the most trusted and reliable service in 2026. We provide verified high profile independent escorts with complete privacy, cash payment only, and 24/7 availability across Malviya Nagar, Vaishali Nagar, C-Scheme, Raja Park, Mansarovar and all major Jaipur areas."
    },
    {
      q: "How to book call girls in Jaipur safely without scams?",
      a: "Book safely by choosing services that offer cash payment after meeting (no advance), verified profiles, and clear communication. We never ask for advance payment or personal ID. Always confirm real availability before meeting."
    },
    {
      q: "Are Jaipur call girls profiles real and verified?",
      a: "Yes — all profiles are personally verified and regularly updated. We remove fake or outdated listings immediately. You get real photos and accurate availability."
    },
    {
      q: "What are the rates for call girls in Jaipur 2026?",
      a: "Rates start from ₹1500 for quick bookings, ₹2000–₹3000 for 2 hours, and ₹5000–₹10000 for full night depending on category (college, housewife, model, VIP). Transparent pricing with no hidden charges."
    },
    {
      q: "Do you provide hotel and home service in Jaipur?",
      a: "Yes — we offer both outcall (hotel/home visit) and incall (private location) across all major areas including Malviya Nagar, Vaishali Nagar, C-Scheme, Civil Lines, Mansarovar, Jagatpura, Tonk Road, and more."
    },
    {
      q: "Is 24/7 call girls service available in Jaipur?",
      a: "Yes — our service is available 24 hours, 7 days a week. Quick response and fast confirmation even late at night or early morning."
    },
    {
      q: "Which areas in Jaipur have the best call girls availability?",
      a: "Most active areas: C-Scheme, Malviya Nagar, Vaishali Nagar, Mansarovar, Raja Park, Civil Lines, Jagatpura, MI Road, Tonk Road, and Lal Kothi."
    },
    {
      q: "Do you have high profile independent call girls in Jaipur?",
      a: "Yes — we specialize in high profile independent escorts including college girls, mature companions, models, air hostess, and VIP companions for premium experiences."
    },
    {
      q: "Is cash payment only for Jaipur call girls booking?",
      a: "We prefer cash payment after meeting for your safety and ours. No advance payment required — pay only when fully satisfied."
    },
    {
      q: "How to avoid scams when booking escorts in Jaipur?",
      a: "Avoid anyone asking for advance payment, OTP, booking token, or personal ID. Real services never pressure for money upfront. Always confirm availability directly."
    },
    {
      q: "Can tourists book call girls in Jaipur easily?",
      a: "Yes — tourists and business travelers are welcome. We provide fast service in major hotels and tourist areas with complete discretion."
    },
    {
      q: "Are Russian or foreign call girls available in Jaipur?",
      a: "Yes — premium international companions are available on limited bookings for elite clients staying in Jaipur hotels."
    }
  ], []);

  return (
    <>
      {/* Full Aggressive SEO Meta Tags for FAQ Page */}
      <Head>
        <title>Jaipur Call Girls FAQ 2026 | Frequently Asked Questions | Rates, Booking & Safety</title>
        <meta
          name="description"
          content="Complete FAQ for Jaipur call girls service 2026 – rates, safe booking process, areas covered, privacy, cash payment, verified profiles. Answers to all common questions about independent escorts in Jaipur."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://yourdomain.com/faq" />

        {/* Open Graph */}
        <meta property="og:title" content="Jaipur Call Girls FAQ 2026 | Rates, Booking Process & Safety Guide" />
        <meta property="og:description" content="All your questions answered – rates, safe booking, areas, privacy, and how to avoid scams when booking call girls in Jaipur." />
        <meta property="og:url" content="https://yourdomain.com/faq" />
        <meta property="og:type" content="website" />

        {/* Structured Data - FAQPage Schema (Google Rich Results) */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map((faq) => ({
              "@type": "Question",
              "name": faq.q,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.a
              }
            }))
          })}
        </script>
      </Head>

      <section className="relative min-h-screen py-20 bg-black overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-red-950/5 to-black pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-radial from-red-900/10 via-transparent to-transparent pointer-events-none" />

        <div className="relative z-10 container mx-auto px-4 lg:px-8 mt-20">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <motion.div
              className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-red-950/30 border border-red-900/50 backdrop-blur-sm mb-6"
            >
              <span className="text-sm text-gray-400 tracking-widest">FAQ 2026</span>
            </motion.div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 bg-gradient-to-r from-white via-red-400 to-pink-400 bg-clip-text text-transparent">
              Jaipur Call Girls FAQ
            </h1>

            <motion.p
              className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto"
            >
              Frequently Asked Questions About Rates, Booking Process, Safety & Areas
            </motion.p>
          </motion.div>

          {/* FAQ Accordion */}
          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="rounded-2xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-white/5 transition-all group"
                  aria-expanded={openIndex === index}
                  aria-controls={`faq-answer-${index}`}
                >
                  <h3 className="text-lg md:text-xl font-semibold text-white group-hover:text-red-300 transition-colors pr-8">
                    {faq.q}
                  </h3>
                  <motion.span
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    className="text-2xl text-red-400 flex-shrink-0"
                  >
                    ▼
                  </motion.span>
                </button>

                <motion.div
                  id={`faq-answer-${index}`}
                  initial={false}
                  animate={{ height: openIndex === index ? "auto" : 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="px-8 pb-6 pt-2">
                    <p className="text-gray-300 text-base leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-20"
          >
            <p className="text-gray-400 mb-8">
              Still have questions? Contact us directly for instant answers.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="https://wa.me/+918058457070?text=Hi,%20I%20have%20a%20question%20about%20Jaipur%20call%20girls%20service"
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.button
                  className="px-10 py-5 rounded-2xl font-bold text-lg text-white bg-gradient-to-r from-green-600 to-green-500 shadow-lg shadow-green-600/30"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  💬 WhatsApp Now
                </motion.button>
              </a>

              <a href="tel:+918058457070">
                <motion.button
                  className="px-10 py-5 rounded-2xl font-bold text-lg text-white border-2 border-red-500 hover:bg-red-500/10"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  📞 Call Now
                </motion.button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default SEOFaq;
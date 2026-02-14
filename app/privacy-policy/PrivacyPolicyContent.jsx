// app/privacy-policy/PrivacyPolicyContent.jsx
'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import SocialProofNotifications from '@/app/components/SocialProofNotifications'
import SummerLeavesEffect from '@/app/components/SummerLeavesEffect'

const PrivacyPolicyContent = () => {
  const [expandedSection, setExpandedSection] = useState('intro')

  const sections = [
    {
      id: 'intro',
      title: '📋 Introduction',
      icon: '📋',
      content: `Jaipur Call Girls Service ("we," "us," "our," or "Company") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.

Please read this Privacy Policy carefully. If you do not agree with our policies and practices, please do not use our services. Your privacy is our priority.`,
    },
    {
      id: 'info-collect',
      title: '📝 Information We Collect',
      icon: '📝',
      subsections: [
        {
          subtitle: '1. Personal Information You Provide',
          content: `When you contact us or use our services, we collect:
✓ Phone number (WhatsApp/Mobile)
✓ Location/Address preferences
✓ Service preferences and requirements
✓ Name (optional, can use alias)
✓ Any other information you voluntarily provide

We DO NOT collect:
✗ Credit card details
✗ Bank account information
✗ Payment gateway data
✗ Financial records`
        },
        {
          subtitle: '2. Payment Information (Cash/UPI Only)',
          content: `For Cash on Delivery (COD):
✓ Delivery location/address
✓ Preferred time window
✓ Phone contact number

For UPI Transfers:
✓ UPI transaction reference (not stored long-term)
✓ Amount and date
✓ Deleted after 7 days

NO sensitive payment data is stored or collected.`
        },
        {
          subtitle: '3. Website Information (Automatic)',
          content: `When you visit our website, we collect:
✓ Device type and browser
✓ IP address
✓ Pages visited and time spent
✓ Links clicked
✓ Referral source
✓ Basic location data`
        }
      ]
    },
    {
      id: 'use-info',
      title: '🎯 How We Use Your Information',
      icon: '🎯',
      subsections: [
        {
          subtitle: '1. Service Delivery',
          content: `✓ Process your booking requests
✓ Confirm appointments via WhatsApp/SMS
✓ Arrange service dates and times
✓ Send location and girl details before arrival
✓ Coordinate delivery to your location
✓ Respond to your inquiries`
        },
        {
          subtitle: '2. Communication',
          content: `✓ Send booking confirmations
✓ Provide customer support
✓ Send service updates
✓ Share girl arrival time
✓ Handle cancellations and changes
✓ Send reminders (with your consent)`
        },
        {
          subtitle: '3. Safety & Compliance',
          content: `✓ Verify you are 18+ years old
✓ Prevent fraud and unauthorized access
✓ Protect legal rights and safety
✓ Comply with legal obligations
✓ Investigate disputes`
        },
        {
          subtitle: '4. Analytics & Improvement',
          content: `✓ Analyze website usage patterns
✓ Improve website design
✓ Develop new features
✓ Understand user preferences
✓ Generate anonymized reports`
        }
      ]
    },
    {
      id: 'data-protection',
      title: '🔒 Data Protection & Security',
      icon: '🔒',
      subsections: [
        {
          subtitle: '1. Security Measures',
          content: `✓ SSL/TLS encryption (HTTPS) for website
✓ Secure WhatsApp communication
✓ Firewalls and security monitoring
✓ Regular software updates
✓ Access controls (only team members need access)
✓ Regular backups
✓ No sensitive payment data stored

Payment Security:
✓ Cash payments - no electronic record required
✓ UPI transfers - deleted after 7 days
✓ No card information stored
✓ No payment gateway data retained`
        },
        {
          subtitle: '2. Data Retention',
          content: `• Booking Information: Kept for 1 year
• WhatsApp Messages: Kept for service history only
• UPI References: Deleted after 7 days
• Phone Numbers: Kept for follow-up (can request deletion)
• Location Data: Deleted after service completion

You can request deletion anytime.`
        },
        {
          subtitle: '3. Complete Confidentiality Guarantee',
          content: `🔐 OUR STRICT PRIVACY COMMITMENT:

✓ Your phone number is NEVER shared with third parties
✓ Location details kept completely confidential
✓ Service requests are strictly private
✓ No information shared with government without court order
✓ Your anonymity is protected
✓ We use secure WhatsApp for all communications
✓ No payment information stored
✓ No data selling - EVER
✓ Only our team members have access (need-to-know basis)
✓ We never disclose client identities to companions
✓ Your privacy is our top priority`
        }
      ]
    },
    {
      id: 'cookies',
      title: '🍪 Cookies & Website Tracking',
      icon: '🍪',
      subsections: [
        {
          subtitle: '1. Types of Cookies',
          content: `🔵 Essential Cookies (Always Active):
• Session management
• Security
• Basic functionality
• User preferences

🔵 Analytics Cookies (Can Disable):
• Google Analytics - track page visits
• Understand user behavior
• Improve website performance

🔵 Marketing Cookies (Optional):
• Facebook Pixel - conversion tracking
• Retargeting ads
• Requires your consent`
        },
        {
          subtitle: '2. How to Control Cookies',
          content: `Browser Settings:
• Chrome: Settings > Privacy and Security > Cookies
• Safari: Preferences > Privacy > Manage Website Data
• Firefox: Preferences > Privacy > Cookies and Site Data

Our Cookie Preference:
• Click "Cookie Settings" on website
• Choose which cookies to allow
• Changes take effect immediately

Do Not Track:
• Enable in your browser settings
• We will attempt to honor DNT requests`
        }
      ]
    },
    {
      id: 'sharing',
      title: '🤝 Information Sharing',
      icon: '🤝',
      subsections: [
        {
          subtitle: '1. We Share Information With',
          content: `✓ Only necessary internal team members
✓ Our companions (only service details needed)
✓ Law enforcement (only with court order)
✓ Government agencies (only as legally required)

We DO NOT share with:
✗ Third-party companies
✗ Advertisers
✗ Data brokers
✗ Marketing agencies
✗ Any party without your consent`
        },
        {
          subtitle: '2. No Data Selling',
          content: `🔴 WE NEVER:
✗ Sell your data
✗ Sell phone numbers
✗ Sell location data
✗ Rent your information
✗ Share with marketers
✗ Profit from your data

Your privacy is not a commodity.`
        }
      ]
    },
    {
      id: 'user-rights',
      title: '⚖️ Your Privacy Rights',
      icon: '⚖️',
      subsections: [
        {
          subtitle: '1. Your Rights',
          content: `📋 RIGHT TO ACCESS:
• Know what data we have about you
• Request a copy of your information

✏️ RIGHT TO CORRECTION:
• Update incorrect information
• Modify your preferences

🗑️ RIGHT TO DELETION:
• Request deletion of your data
• Deleted within 30 days
• Some data kept for legal compliance

🚫 RIGHT TO OPT-OUT:
• Stop promotional messages
• Disable cookies
• Unsubscribe from updates

🔄 RIGHT TO WITHDRAW CONSENT:
• Stop any processing anytime
• Changes take effect immediately`
        },
        {
          subtitle: '2. How to Exercise Your Rights',
          content: `📱 WHATSAPP (Fastest):
+91-8058457070
Message: "Privacy Request - [Your Request]"

📞 PHONE CALL:
+91-8058457070
Ask for "Privacy Team"

💬 WhatsApp MESSAGE:
Include:
✓ Your phone number
✓ Your request (access/delete/correct)
✓ Any relevant details

RESPONSE TIME:
✓ Acknowledgment within 24 hours
✓ Full response within 30 days
✓ Completely FREE`
        }
      ]
    },
    {
      id: 'third-party',
      title: '🔗 Third-Party Links',
      icon: '🔗',
      content: `Our website may contain links to external websites.

We are NOT responsible for their privacy practices.

Common external sites:
• Social media platforms
• Advertising networks
• Other websites

⚠️ Before providing information to third parties, review THEIR privacy policy.

Linking to external sites does NOT mean we endorse them.`,
    },
    {
      id: 'children',
      title: '👶 Age Requirement',
      icon: '👶',
      content: `Our services are for ADULTS ONLY (18+ years).

✓ You must be 18 years old to use our services
✓ We do NOT knowingly serve anyone under 18
✓ Age verification may be required

If we discover someone under 18 is using our services:
✓ We will immediately terminate their access
✓ All their information will be deleted
✓ They will be blocked from future access

Parents/Guardians: If your minor has accessed our services, please contact us immediately.`,
    },
    {
      id: 'policy-updates',
      title: '📢 Policy Updates',
      icon: '📢',
      subsections: [
        {
          subtitle: '1. Changes to This Policy',
          content: `We may update this Privacy Policy periodically.

Changes will be:
✓ Posted on this page
✓ Updated date shown clearly
✓ Effective immediately upon posting
✓ Major changes - we will notify via WhatsApp

Your continued use = acceptance of new policy.`
        },
        {
          subtitle: '2. Version History',
          content: `• Original Policy: January 1, 2020
• Last Updated: ${new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
• Review Status: Current and Compliant`
        }
      ]
    },
    {
      id: 'contact',
      title: '📞 Contact Us',
      icon: '📞',
      content: `Questions about this Privacy Policy?

📱 WHATSAPP (Recommended):
+91-8058457070
(Fast Response - Usually within minutes)

📞 PHONE CALL:
+91-8058457070
(Available 24/7)

📧 EMAIL:
privacy@escortjaipurall.com
(Response within 24 hours)

💬 IN-APP MESSAGE:
Use WhatsApp contact option on website

What to include in your request:
✓ Your phone number
✓ Your specific question/concern
✓ Relevant details
✓ Preferred contact method

We aim to resolve all privacy concerns within 30 days.`,
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100 }
    }
  }

  return (
    <section className="relative min-h-screen py-20 bg-black overflow-hidden">
      <SummerLeavesEffect />
      <SocialProofNotifications />

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-red-950/5 to-black pointer-events-none" />

      <div className="relative z-10 container mx-auto px-4 lg:px-8 mt-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-red-950/30 border border-red-900/50 mb-6"
          >
            <span className="text-sm text-gray-400 tracking-widest">🛡️ YOUR PRIVACY MATTERS</span>
          </motion.div>

          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Privacy Policy
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-4">
            Your privacy and data protection are our top priorities. We keep your information completely confidential and secure.
          </p>
          <p className="text-gray-500 text-sm">
            Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-16 bg-red-950/20 border border-red-900/30 rounded-2xl p-8"
        >
          <h2 className="text-2xl font-bold text-white mb-6">📑 Quick Navigation</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {sections.map((section) => (
              <motion.button
                key={section.id}
                variants={itemVariants}
                onClick={() => {
                  setExpandedSection(section.id)
                  document.getElementById(section.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
                }}
                className="text-left p-4 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-red-500/50 transition-all"
              >
                <div className="font-semibold text-white hover:text-red-400 transition-colors">
                  {section.title}
                </div>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Main Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-6 mb-16"
        >
          {sections.map((section) => (
            <motion.div
              key={section.id}
              variants={itemVariants}
              className="bg-black/50 border border-red-900/30 rounded-2xl overflow-hidden"
              id={section.id}
            >
              <button
                onClick={() => setExpandedSection(expandedSection === section.id ? null : section.id)}
                className="w-full p-8 text-left hover:bg-red-950/20 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <span className="text-3xl">{section.icon}</span>
                    <h2 className="text-2xl font-bold text-white">
                      {section.title}
                    </h2>
                  </div>
                  <motion.span
                    animate={{ rotate: expandedSection === section.id ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-2xl text-red-400"
                  >
                    ▼
                  </motion.span>
                </div>
              </button>

              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{
                  height: expandedSection === section.id ? 'auto' : 0,
                  opacity: expandedSection === section.id ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-8 pb-8 pt-0 border-t border-red-900/30 space-y-6">
                  {section.content && (
                    <div className="text-gray-300 whitespace-pre-line leading-relaxed text-lg">
                      {section.content}
                    </div>
                  )}

                  {section.subsections && section.subsections.map((subsection, idx) => (
                    <div key={idx} className="space-y-2">
                      <h3 className="text-xl font-semibold text-red-400">
                        {subsection.subtitle}
                      </h3>
                      <div className="text-gray-300 whitespace-pre-line leading-relaxed pl-4 border-l-2 border-red-900/50 text-base">
                        {subsection.content}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-red-950/30 to-pink-950/30 border-2 border-red-900/30 rounded-3xl p-12 text-center"
        >
          <h3 className="text-3xl font-bold text-white mb-4">
            Have Privacy Questions? 🔐
          </h3>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            We're here to help. Contact us anytime about your privacy concerns.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/918058457070?text=I have privacy policy questions"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-green-600 text-white rounded-xl font-bold hover:bg-green-700 transition-all text-lg"
            >
              💬 WhatsApp Us
            </a>
            <a
              href="tel:+918058457070"
              className="px-8 py-4 bg-red-600 text-white rounded-xl font-bold hover:bg-red-700 transition-all text-lg"
            >
              📞 Call Us
            </a>
          </div>

          <p className="text-gray-400 text-sm mt-6">
            Response time: Within 24 hours | Available 24/7 on WhatsApp
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default PrivacyPolicyContent
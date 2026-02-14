// app/terms-conditions/TermsConditionsContent.jsx
'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import SocialProofNotifications from '@/app/components/SocialProofNotifications'
import SummerLeavesEffect from '@/app/components/SummerLeavesEffect'

const TermsConditionsContent = () => {
  const [expandedSection, setExpandedSection] = useState('intro')

  const sections = [
    {
      id: 'intro',
      title: '📋 Terms & Conditions',
      icon: '📋',
      content: `Welcome to Jaipur Call Girls Service ("Company," "we," "us," or "our"). These Terms & Conditions ("Terms") constitute a legal agreement between you and our Company.

By accessing our website, contacting us, or booking our services, you acknowledge that you have read, understood, and agree to be bound by these Terms. If you do not agree with any part of these Terms, please do not use our services.

These Terms apply to all visitors, users, and all others who access our website and services.`,
    },
    {
      id: 'eligibility',
      title: '⚖️ Eligibility & Age Requirement',
      icon: '⚖️',
      subsections: [
        {
          subtitle: 'Age Requirement (STRICT)',
          content: `✅ MUST BE 18+ YEARS OLD
✅ Must be a legal adult in your jurisdiction
✅ Must have the legal capacity to enter agreements
✅ Must verify your age if requested

❌ VIOLATION:
✗ Anyone under 18 is STRICTLY PROHIBITED
✗ Automatic account ban
✗ Permanent ban from future use
✗ May be reported to authorities`
        },
        {
          subtitle: 'Legal Capacity',
          content: `You represent and warrant that:
✓ You are at least 18 years old
✓ You have legal authority to enter into these Terms
✓ You are not prohibited by law from using our services
✓ You will not use our services for illegal purposes
✓ You comply with all applicable laws and regulations`
        }
      ]
    },
    {
      id: 'service-description',
      title: '💼 Service Description',
      icon: '💼',
      subsections: [
        {
          subtitle: 'Services We Provide',
          content: `Our company provides:

✅ COMPANION SERVICES:
• Professional dating and companionship
• Event attendance (restaurants, parties, gatherings)
• Social outings and entertainment
• Travel companionship
• Movie/restaurant dates
• Social meetings and conversations

✅ PROFESSIONAL SERVICES:
• All companions are verified and trained
• Professional behavior and discretion
• Quality entertainment experience
• Customized preferences and arrangements`
        },
        {
          subtitle: 'Services We DO NOT Provide',
          content: `We explicitly DO NOT provide:

❌ PROHIBITED SERVICES:
✗ Any illegal activities
✗ Prostitution or sexual services
✗ Activities violating Indian laws
✗ Criminal activities
✗ Services requiring harm to anyone
✗ Activities violating public decency
✗ Trafficking or exploitation
✗ Substances or intoxicants

Violation: Immediate ban and legal action.`
        },
        {
          subtitle: 'Legal Compliance',
          content: `✓ All services comply with Indian laws
✓ Immoral Trafficking Prevention Act (ITPA) compliance
✓ No violation of IPC sections
✓ No activities against public policy
✓ All services are legal adult companionship
✓ No coercion or exploitation involved

We maintain full legal compliance.`
        }
      ]
    },
    {
      id: 'booking-process',
      title: '📱 Booking & Confirmation Process',
      icon: '📱',
      subsections: [
        {
          subtitle: 'How to Book',
          content: `Step 1: INITIAL CONTACT
✓ WhatsApp: +91-8058457070
✓ Phone: +91-8058457070
✓ Share your requirements and preferences

Step 2: GIRL SELECTION
✓ Browse our available companions
✓ Share preferences (age, appearance, interests)
✓ Select your preferred companion

Step 3: BOOKING CONFIRMATION
✓ Confirm date and time
✓ Confirm location/address
✓ Confirm duration of service
✓ Confirm payment method (Cash/UPI)

Step 4: SERVICE DELIVERY
✓ Companion arrives at confirmed time
✓ Payment required before service starts
✓ Service begins after payment received`
        },
        {
          subtitle: 'Booking Terms',
          content: `✓ Bookings must be made at least 30 minutes in advance
✓ Minimum booking: 1 hour
✓ Maximum booking: As agreed with companion
✓ Bookings are subject to companion availability
✓ We reserve the right to reject bookings

BOOKING CONFIRMATION:
✓ Sent via WhatsApp within 30 minutes
✓ Contains all service details
✓ Location verification completed
✓ Companion details shared
✓ Final confirmation required from you`
        },
        {
          subtitle: 'Reservation Policy',
          content: `✓ Reservations are first-come, first-served
✓ Confirmation locks in your booking
✓ Changes allowed up to 2 hours before service
✓ Location must be safe and appropriate
✓ Time must be reasonable (10 AM - 11 PM)`
        }
      ]
    },
    {
      id: 'payment',
      title: '💰 Payment Terms',
      icon: '💰',
      subsections: [
        {
          subtitle: 'Payment Methods',
          content: `WE ACCEPT:
✅ Cash on Delivery (COD)
   • Pay when companion arrives
   • Exact cash required
   • No change given

✅ UPI Transfer
   • Transfer before service starts
   • UPI ID: [Add your UPI ID]
   • Confirmation screenshot required

WE DO NOT ACCEPT:
❌ Credit/Debit Cards
❌ Online banking transfer
❌ Cheques
❌ Cryptocurrency
❌ Partial payments`
        },
        {
          subtitle: 'Payment Timing',
          content: `✅ FOR CASH ON DELIVERY:
• Payment due when companion arrives
• Full amount in cash
• Service begins after payment confirmed

✅ FOR UPI:
• Payment due before companion arrives
• Transfer to confirmed UPI ID
• Service begins after payment verified

⚠️ NO SERVICE WITHOUT PAYMENT:
• Service will NOT start until payment received
• If payment not received, companion will leave
• No refund for time spent waiting for payment`
        },
        {
          subtitle: 'Pricing & Payment Details',
          content: `PRICING:
✓ Prices are fixed and transparent
✓ No hidden charges
✓ Prices vary by companion and duration
✓ Premium companions = Higher rates
✓ Same rates for all clients

PRICING STRUCTURE:
✓ Per hour rates clearly mentioned
✓ Minimum booking duration confirmed
✓ Extensions charged at same hourly rate
✓ Travel charges (if applicable) pre-discussed

PAYMENT FINAL:
• Once paid = Agreement is final
• No disputes after payment accepted
• Payment = Acceptance of all terms`
        }
      ]
    },
    {
      id: 'cancellation',
      title: '🚫 Cancellation & Refund Policy',
      icon: '🚫',
      subsections: [
        {
          subtitle: 'Cancellation by Client',
          content: `⏰ CANCELLATION TIMELINE:

📌 2+ Hours Before Service:
✅ FULL REFUND (100%)
• Cash payment: Next meeting
• UPI payment: Within 48 hours
• No questions asked

📌 1-2 Hours Before Service:
✅ PARTIAL REFUND (50%)
• Companion may already be traveling
• Partial refund due to preparation
• Remaining balance: No refund

📌 Less Than 1 Hour Before Service:
❌ NO REFUND (0%)
• Companion has already started
• Cancellation fee: No refund
• Amount forfeited`
        },
        {
          subtitle: 'No-Show Policy',
          content: `If you don't answer/refuse service:

✗ NOT SHOWING UP:
• Companion arrives but you don't meet
• NO REFUND - Payment forfeited
• Full charge still applies
• Account flagged for future bookings

✗ REFUSING SERVICE:
• Companion arrives and you refuse
• NO REFUND - Payment forfeited
• Full charge applies
• Can be banned for future bookings

⚠️ IMPORTANT: If you cancel, you have limited time!`
        },
        {
          subtitle: 'Cancellation by Company',
          content: `We may cancel if:

✅ VALID REASONS:
• Companion emergency/illness
• Severe weather/natural disaster
• Safety concerns for companion
• Force majeure events
• Location unsafe (verified by us)

IN SUCH CASES:
✅ FULL REFUND (100%)
✅ Apology and explanation
✅ Option to reschedule
✅ Refund within 48 hours

Your satisfaction is important to us.`
        },
        {
          subtitle: 'Refund Process',
          content: `CASH ON DELIVERY:
✓ Refund given at next meeting
✓ Or refunded in your next booking
✓ Can also request bank transfer

UPI TRANSFER:
✓ Refund to same UPI ID within 48 hours
✓ Confirmation sent via WhatsApp
✓ May take 1-2 hours to show in account

REFUND TIMELINE:
• Instant: Approved immediately
• Processing: 24-48 hours
• Arrival: 1-2 hours after processing
• Confirmation: Via WhatsApp`
        }
      ]
    },
    {
      id: 'client-conduct',
      title: '🤝 Client Conduct & Behavior',
      icon: '🤝',
      subsections: [
        {
          subtitle: 'Expected Client Behavior',
          content: `✅ YOU MUST:
✓ Be respectful and courteous
✓ Treat companion with dignity
✓ Respect all boundaries
✓ Follow companion's instructions
✓ Maintain cleanliness and hygiene
✓ Be punctual and ready
✓ Meet in safe, appropriate locations
✓ Respect companion's personal space
✓ Follow all legal requirements

These are non-negotiable.`
        },
        {
          subtitle: 'Unacceptable Behavior',
          content: `❌ PROHIBITED BEHAVIOR:

🚫 DISRESPECT & ABUSE:
• Rude, offensive, or abusive language
• Threatening or intimidating behavior
• Discrimination or harassment
• Attempted physical assault

🚫 BOUNDARY VIOLATIONS:
• Violating companion boundaries
• Unwanted touching or physical contact
• Attempting sexual services
• Coercion or pressure

🚫 SERVICE VIOLATIONS:
• Demanding services not offered
• Attempting to negotiate prices during service
• Trying to extend service without payment
• Requesting additional unauthorized services

🚫 SAFETY VIOLATIONS:
• Drug use or intoxication
• Weapons or dangerous items
• Recording without consent
• Photography without permission

🚫 LOCATION ISSUES:
• Unsafe or inappropriate locations
• Attempts to leave location without permission
• Dangerous driving or activities
• Violation of location owner's rules`
        },
        {
          subtitle: 'Consequences of Misconduct',
          content: `⚠️ FIRST VIOLATION:
• Immediate service termination
• Verbal warning
• Amount due for time spent
• Account flagged

⚠️ SECOND VIOLATION:
• Immediate ban (6 months)
• NO refunds given
• Contact blocked
• Black-listed

⚠️ THIRD VIOLATION / SEVERE ABUSE:
• PERMANENT BAN
• Police involvement possible
• Legal action consideration
• Criminal charges (if applicable)

We take safety seriously.`
        }
      ]
    },
    {
      id: 'companion-safety',
      title: '❤️ Companion Safety & Rights',
      icon: '❤️',
      subsections: [
        {
          subtitle: 'Our Commitment to Companions',
          content: `✅ ALL COMPANIONS ARE:
✓ Verified and safe
✓ Willing and consensual
✓ Professional and trained
✓ Protected and supported

✅ WE ENSURE:
✓ Regular health check-ups
✓ Safety protocols in place
✓ Support team available 24/7
✓ Immediate assistance if needed
✓ Privacy and confidentiality
✓ Fair compensation
✓ Respectful treatment`
        },
        {
          subtitle: 'Companion Rights During Service',
          content: `🛡️ COMPANION RIGHT TO:
✓ Refuse any request
✓ End service at any time
✓ Leave if feeling unsafe
✓ Call for help immediately
✓ Receive full payment for time
✓ Keep tips for themselves
✓ Maintain personal boundaries
✓ Expect respectful treatment

These rights are ABSOLUTE and protected.`
        },
        {
          subtitle: 'Safety is Non-Negotiable',
          content: `⚠️ CLIENT VIOLATION OF COMPANION SAFETY:

• Immediate service termination
• Full refund NOT given
• Police involvement likely
• Criminal charges possible
• Permanent ban
• Legal prosecution

Your safety is our priority.
Our companions' safety is sacred.`
        }
      ]
    },
    {
      id: 'liability',
      title: '⚖️ Liability & Legal Limitations',
      icon: '⚖️',
      subsections: [
        {
          subtitle: 'Limitation of Liability',
          content: `OUR COMPANY IS NOT LIABLE FOR:

✗ Personal injuries or accidents
✗ Lost, stolen, or damaged items
✗ Transportation issues
✗ Traffic delays or weather
✗ Third-party actions
✗ Companion no-show (beyond our control)
✗ Emotional distress or disappointment
✗ Sexual/romantic outcomes
✗ Meeting expectations

YOU USE OUR SERVICES AT YOUR OWN RISK.`
        },
        {
          subtitle: 'Service "As-Is" Disclaimer',
          content: `✗ NO GUARANTEE OF SPECIFIC EXPERIENCES
✗ NO GUARANTEE OF OUTCOMES
✗ NO GUARANTEE OF ROMANTIC CONNECTION
✗ NO GUARANTEE OF SATISFACTION

Services are provided AS-IS.

While we ensure quality and professionalism, specific outcomes cannot be guaranteed. Every person is unique and experiences vary.`
        },
        {
          subtitle: 'Client Responsibility',
          content: `YOU ARE RESPONSIBLE FOR:

✓ Your own conduct and behavior
✓ Your personal safety and security
✓ Following all laws and regulations
✓ Respectful interaction with companion
✓ Appropriate location selection
✓ Time management and punctuality
✓ Any legal consequences of your actions
✓ Your own medical/health issues

By booking, you accept full responsibility.`
        }
      ]
    },
    {
      id: 'confidentiality',
      title: '🔒 Confidentiality & Privacy',
      icon: '🔒',
      subsections: [
        {
          subtitle: 'Both Parties Privacy',
          content: `✅ CLIENT PRIVACY:
• Your information is confidential
• Phone number kept private
• Location kept confidential
• Service details not disclosed
• No public reviews or ratings

✅ COMPANION PRIVACY:
• Companion identities protected
• Real names often not disclosed
• Location information private
• Personal details confidential
• Safety and privacy assured

BOTH parties' privacy is equally important.`
        },
        {
          subtitle: 'Non-Disclosure',
          content: `YOU AGREE NOT TO:

❌ Share companion's real name publicly
❌ Disclose her personal information
❌ Take/share photos without consent
❌ Record conversations or meetings
❌ Identify location publicly
❌ Share details on social media
❌ Disclose payment information
❌ Tag location or mention publicly

Violation may result in ban and legal action.`
        },
        {
          subtitle: 'Data Protection',
          content: `WE GUARANTEE:

✓ No data shared with third parties
✓ Information encrypted and secured
✓ No data sold to anyone
✓ No marketing to your contacts
✓ Compliance with privacy laws
✓ Regular security audits
✓ Secure payment processing
✓ Confidential WhatsApp communication

See our Privacy Policy for details.`
        }
      ]
    },
    {
      id: 'legal-compliance',
      title: '📜 Legal Compliance & Jurisdiction',
      icon: '📜',
      subsections: [
        {
          subtitle: 'Indian Legal Compliance',
          content: `OUR SERVICES COMPLY WITH:

✅ Indian Constitution
✅ Indian Penal Code (IPC)
✅ Immoral Trafficking Prevention Act
✅ Information Technology Act, 2000
✅ Digital Personal Data Protection Act
✅ Consumer Protection Act
✅ All applicable state laws
✅ Rajasthan state regulations

All services are legal companion services.`
        },
        {
          subtitle: 'Prohibited Activities',
          content: `WE STRICTLY PROHIBIT:

❌ Prostitution (illegal in India)
❌ Trafficking or exploitation
❌ Coercion or force
❌ Underage services
❌ Harmful activities
❌ Criminal activities
❌ Violation of public decency
❌ Any activity against law

Violation will be reported to authorities.`
        },
        {
          subtitle: 'Client Legal Responsibility',
          content: `BY BOOKING, YOU ACKNOWLEDGE:

✓ You understand all applicable laws
✓ You will comply with all laws
✓ You take responsibility for your actions
✓ You won't use services for illegal purposes
✓ You understand companion rights
✓ You accept legal consequences

WE ARE NOT RESPONSIBLE for your illegal activities.`
        },
        {
          subtitle: 'Jurisdiction & Governing Law',
          content: `⚖️ JURISDICTION:
✓ These Terms governed by Indian law
✓ Jurisdiction: Jaipur, Rajasthan
✓ Disputes resolved in Rajasthan courts
✓ Indian legal system applies

📍 VENUE:
• Court location: Jaipur, Rajasthan
• Jurisdiction: Jaipur District Court
• Legal proceedings: As per Indian law`
        }
      ]
    },
    {
      id: 'dispute-resolution',
      title: '⚔️ Dispute Resolution',
      icon: '⚔️',
      subsections: [
        {
          subtitle: 'Complaint Process',
          content: `STEP 1: CONTACT US
📱 WhatsApp: +91-8058457070
📞 Phone: +91-8058457070
⏰ Response within 24 hours

STEP 2: PROVIDE DETAILS
✓ Booking date and time
✓ Issue description
✓ Supporting evidence
✓ Your resolution request

STEP 3: INVESTIGATION
✓ We investigate thoroughly
✓ Contact companion if needed
✓ Review all details
✓ Aim for fair resolution

STEP 4: RESOLUTION
✓ Refund if applicable
✓ Rescheduling option
✓ Compensation if warranted
✓ Documented response`
        },
        {
          subtitle: 'Refund Disputes',
          content: `IF YOU DISPUTE A CHARGE:

1. Contact within 7 days
2. Provide booking proof
3. We investigate
4. Refund if error confirmed
5. No refund if service delivered

Evidence we may request:
✓ Screenshot of booking
✓ WhatsApp conversation
✓ Payment confirmation
✓ Timestamps and details`
        }
      ]
    },
    {
      id: 'termination',
      title: '🚫 Termination of Service',
      icon: '🚫',
      subsections: [
        {
          subtitle: 'Reasons for Account Termination',
          content: `WE MAY TERMINATE YOUR ACCOUNT IF:

❌ ILLEGAL ACTIVITY
✗ Use of illegal drugs
✗ Criminal behavior
✗ Attempted illegal activities

❌ ABUSE & MISCONDUCT
✗ Abuse of staff or companions
✗ Threats or intimidation
✗ Sexual harassment
✗ Violent behavior

❌ POLICY VIOLATIONS
✗ Repeated policy breaches
✗ Payment fraud
✗ Booking manipulation
✗ Service misuse

❌ SAFETY CONCERNS
✗ Companion safety threatened
✗ Coercion or force
✗ Attempted exploitation

❌ FALSE INFORMATION
✗ Fake identity
✗ Fraudulent booking
✗ Payment disputes`
        },
        {
          subtitle: 'Termination Process',
          content: `IMMEDIATE TERMINATION:
• Account closed immediately
• No future bookings allowed
• Phone number blocked
• Contacted via email if possible
• No refund on pending bookings

FINAL WARNING:
• Account flagged
• Limited bookings allowed
• One more violation = permanent ban
• Documentation kept

PERMANENT BAN:
• Lifetime ban from services
• All payment forfeited
• Possible legal action
• Police involvement possible`
        }
      ]
    },
    {
      id: 'contact-support',
      title: '📞 Contact & Support',
      icon: '📞',
      subsections: [
        {
          subtitle: 'How to Reach Us',
          content: `📱 WHATSAPP (Recommended - Fastest):
+91-8058457070
Available 24/7 for instant response

📞 PHONE CALL:
+91-8058457070
Available 24 hours daily

💬 WhatsApp Message:
Preferred for detailed concerns
Fastest response method

RESPONSE TIME:
✓ WhatsApp: 5-30 minutes
✓ Phone: Immediate
✓ Concerns: Within 24 hours`
        },
        {
          subtitle: 'What to Include',
          content: `When contacting support, provide:

✓ Your phone number
✓ Booking date (if applicable)
✓ Your issue/concern
✓ Supporting details
✓ Preferred resolution
✓ Any relevant screenshots/proof

This helps us assist you faster!`
        }
      ]
    },
    {
      id: 'final',
      title: '✅ Final Terms',
      icon: '✅',
      content: `By using our services, you:

✅ ACCEPT these Terms & Conditions
✅ AGREE to all policies
✅ ACKNOWLEDGE legal requirements
✅ UNDERSTAND liability limitations
✅ ACCEPT dispute resolution terms
✅ TAKE RESPONSIBILITY for your actions
✅ RESPECT all parties' safety

CHANGES TO TERMS:
✓ We may update these Terms anytime
✓ Changes posted on this page
✓ Your continued use = acceptance
✓ Major changes = email notification

CONTACT ABOUT TERMS:
📱 WhatsApp: +91-8058457070
📞 Phone: +91-8058457070
💬 For questions or concerns

EFFECTIVE DATE: January 1, 2020
LAST UPDATED: ${new Date().toLocaleDateString()}`,
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
            <span className="text-sm text-gray-400 tracking-widest">📜 LEGAL AGREEMENT</span>
          </motion.div>

          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Terms & Conditions
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-4">
            Please read carefully before booking our services. These Terms govern your relationship with us.
          </p>
          <p className="text-gray-500 text-sm">
            Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </motion.div>

        {/* Quick Navigation */}
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

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-red-950/30 to-pink-950/30 border-2 border-red-900/30 rounded-3xl p-12 text-center"
        >
          <h3 className="text-3xl font-bold text-white mb-4">
            Understand Our Terms? 📋
          </h3>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Questions about our Terms & Conditions? We're here to help clarify anything.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/918058457070?text=I have questions about the Terms & Conditions"
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
            Available 24/7 | Response within minutes on WhatsApp
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default TermsConditionsContent
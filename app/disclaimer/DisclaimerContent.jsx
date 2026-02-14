// app/disclaimer/DisclaimerContent.jsx
'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import SocialProofNotifications from '@/app/components/SocialProofNotifications'
import SummerLeavesEffect from '@/app/components/SummerLeavesEffect'

const DisclaimerContent = () => {
  const [expandedSection, setExpandedSection] = useState('intro')

  const sections = [
    {
      id: 'intro',
      title: '⚠️ Important Disclaimer',
      icon: '⚠️',
      content: `THIS IS AN IMPORTANT LEGAL NOTICE. PLEASE READ CAREFULLY.

This Disclaimer ("Disclaimer") applies to all visitors, users, and anyone accessing Jaipur Call Girls Service website and using our services.

By accessing and using our website and services, you acknowledge that you have read this Disclaimer and agree to be bound by all its terms and conditions.

If you do not agree with this Disclaimer, please do NOT use our website or services.`,
    },
    {
      id: 'age-requirement',
      title: '🔞 Age & Legal Capacity',
      icon: '🔞',
      subsections: [
        {
          subtitle: 'Age Requirement (MUST BE 18+)',
          content: `⚠️ IMPORTANT NOTICE:

Our website and services are intended ONLY for individuals who are:
✓ 18 years of age or older
✓ Legal adults in their jurisdiction
✓ Legally capable of entering into binding agreements
✓ Not under any legal disability

❌ IF YOU ARE UNDER 18:
✗ YOU MUST NOT access our website
✗ YOU MUST NOT contact us
✗ YOU MUST NOT use our services
✗ VIOLATION WILL RESULT IN LEGAL ACTION

By accessing this website, you represent and warrant that you are at least 18 years old.`
        },
        {
          subtitle: 'Parental Control',
          content: `PARENTS/GUARDIANS/EDUCATORS:

If you are a parent, guardian, or educator:
✓ Monitor your child's internet usage
✓ Use parental control software
✓ Block access to adult websites
✓ Educate about online safety

Our website has:
✅ Age warnings
✅ Adult content notice
✅ Legal disclaimers
✅ Age verification checks (if needed)

If your minor accessed this site, contact us immediately at legal@escortjaipurall.com`
        }
      ]
    },
    {
      id: 'website-accuracy',
      title: '📱 Website Accuracy & Availability',
      icon: '📱',
      subsections: [
        {
          subtitle: 'Website Information',
          content: `WE MAKE NO WARRANTIES:

✗ No warranty on information accuracy
✗ No warranty on content completeness
✗ No warranty on timeliness
✗ No warranty on error-free operation
✗ No warranty on website availability

WEBSITE CONTENT:
• Provided "AS-IS" without warranties
• Updated periodically (not real-time)
• Subject to change without notice
• May contain errors or omissions
• Not guaranteed to be current

We do our best to keep information accurate, but cannot guarantee it.`
        },
        {
          subtitle: 'Website Availability',
          content: `WE DO NOT GUARANTEE:

✗ 24/7 website availability
✗ Uninterrupted service
✗ Error-free operation
✗ Virus/malware-free environment
✗ Security from all attacks

POSSIBLE ISSUES:
• Scheduled maintenance (advance notice when possible)
• Unexpected downtime
• Server issues
• Traffic overload
• Force majeure events
• DDoS attacks
• Natural disasters

If website is down, please try again later.`
        },
        {
          subtitle: 'Product/Service Descriptions',
          content: `REGARDING DESCRIPTIONS:

✗ Not liable for description inaccuracies
✗ Photos may not be 100% accurate
✗ Descriptions subject to change
✗ Prices subject to change
✗ Availability subject to change

COMPANION INFORMATION:
• Gallery images are representative
• Actual appearance may vary slightly
• Light/angle/makeup can affect appearance
• Real companions are similar to photos
• Minor variations are normal

This is not false advertising - it's normal variation.`
        }
      ]
    },
    {
      id: 'service-disclaimer',
      title: '💼 Service Disclaimer',
      icon: '💼',
      subsections: [
        {
          subtitle: 'No Specific Outcomes Guaranteed',
          content: `WE DO NOT GUARANTEE:

✗ Specific experiences or outcomes
✗ Meeting expectations
✗ Romantic connection
✗ Sexual satisfaction
✗ Emotional connection
✗ Specific personality match
✗ Perfect experience
✗ Specific companion availability
✗ Guaranteed satisfaction

WHY NOT?
• Every person is unique
• Chemistry varies
• Personalities are different
• Expectations differ
• Subjective experiences vary
• Individual preferences vary

Services are entertainment and companionship, not guarantees.`
        },
        {
          subtitle: 'Service Nature & Limits',
          content: `OUR SERVICES INCLUDE:
✓ Professional companionship
✓ Dating and socializing
✓ Event attendance
✓ Travel companionship
✓ Entertainment
✓ Professional behavior
✓ Discreet service

OUR SERVICES EXCLUDE:
✗ Sexual services
✗ Illegal activities
✗ Anything violating laws
✗ Endangering safety
✗ Violating companion boundaries
✗ Coerced activities
✗ Exploitative services`
        },
        {
          subtitle: 'No Medical/Legal Advice',
          content: `WE DO NOT PROVIDE:

✗ Medical advice
✗ Psychological counseling
✗ Legal advice
✗ Financial advice
✗ Relationship counseling
✗ Mental health treatment
✗ Professional services beyond companionship

IF YOU NEED:
• Medical help → Consult a doctor
• Legal advice → Consult a lawyer
• Mental health support → See a therapist
• Financial planning → See a financial advisor

Companions are not licensed professionals.`
        }
      ]
    },
    {
      id: 'liability-disclaimer',
      title: '⚖️ Limitation of Liability',
      icon: '⚖️',
      subsections: [
        {
          subtitle: 'We Are NOT Liable For',
          content: `WE ARE NOT RESPONSIBLE FOR:

❌ PERSONAL INJURIES:
✗ Accidents or injuries during service
✗ Physical harm
✗ Health complications
✗ Allergic reactions
✗ Any bodily harm

❌ PROPERTY DAMAGE:
✗ Lost or stolen items
✗ Damaged belongings
✗ Theft
✗ Property destruction
✗ Vehicle damage

❌ EMOTIONAL/PSYCHOLOGICAL:
✗ Emotional distress
✗ Disappointment
✗ Unmet expectations
✗ Psychological harm
✗ Heartbreak

❌ FINANCIAL:
✗ Lost money
✗ Investment losses
✗ Business losses
✗ Income loss
✗ Payment disputes

❌ THIRD-PARTY ACTIONS:
✗ Actions of companions
✗ Actions of other parties
✗ Third-party services
✗ External situations

YOU USE OUR SERVICES AT YOUR OWN RISK.`
        },
        {
          subtitle: 'Assumption of Risk',
          content: `BY USING OUR SERVICES, YOU:

✓ ASSUME ALL RISKS
✓ ACCEPT FULL RESPONSIBILITY
✓ RELEASE US FROM LIABILITY
✓ ACKNOWLEDGE RISKS
✓ WAIVE LEGAL CLAIMS (where permitted)

RISKS INCLUDE:
• Personal safety risks
• Property loss risks
• Emotional risks
• Financial risks
• Health risks
• Third-party risks
• Unforeseen circumstances

This is a standard risk disclaimer.`
        },
        {
          subtitle: 'No Compensation',
          content: `WE WILL NOT PROVIDE:

✗ Compensation for disappointment
✗ Damages for unmet expectations
✗ Refunds for subjective dissatisfaction
✗ Payment for lost time
✗ Compensation for emotional harm
✗ Reimbursement for transportation
✗ Damages beyond documented service failure

REFUNDS ONLY FOR:
✓ Service cancellation by us
✓ Documented service failure
✓ No-show by companion (our fault)
✓ Confirmed payment errors
✓ Booking cancellation within timeframe

See Terms & Conditions for refund policy.`
        }
      ]
    },
    {
      id: 'privacy-security',
      title: '🔒 Privacy & Security Disclaimer',
      icon: '🔒',
      subsections: [
        {
          subtitle: 'No Guarantee of Security',
          content: `WE CANNOT GUARANTEE:

✗ 100% data security
✗ No data breaches
✗ Protection from all attacks
✗ No unauthorized access
✗ Protection from all threats
✗ Virus-free environment
✗ Malware protection

WHILE WE:
✓ Use industry-standard security
✓ Encrypt sensitive data
✓ Use firewalls
✓ Regular security audits
✓ Secure payment processing
✓ HTTPS encryption
✓ Regular backups

NO SYSTEM IS 100% SECURE.

Cybersecurity risks always exist.`
        },
        {
          subtitle: 'Third-Party Data',
          content: `WE ARE NOT RESPONSIBLE FOR:

✗ Third-party data breaches
✗ Third-party security issues
✗ Third-party company practices
✗ Third-party privacy violations
✗ Data shared with third parties
✗ Actions of payment processors
✗ Actions of hosting providers

If you provide data to third parties:
• You are responsible
• Read their privacy policies
• Understand their practices
• Accept their terms

We are not liable for third-party breaches.`
        }
      ]
    },
    {
      id: 'third-party-links',
      title: '🔗 Third-Party Links Disclaimer',
      icon: '🔗',
      subsections: [
        {
          subtitle: 'External Links',
          content: `OUR WEBSITE MAY CONTAIN LINKS TO:

• Social media platforms
• Payment gateways
• Analytics services
• Other websites
• External resources
• Partner websites
• Third-party services

IMPORTANT NOTICE:

⚠️ WE ARE NOT RESPONSIBLE FOR:
✗ Third-party content
✗ Third-party practices
✗ Third-party policies
✗ Links becoming broken/outdated
✗ Third-party security issues
✗ Third-party accuracy
✗ Third-party legality

WHEN YOU CLICK EXTERNAL LINKS:
• You leave our website
• Our liability ends
• Third-party terms apply
• Third-party privacy policy applies
• You accept their terms
• Your responsibility begins`
        },
        {
          subtitle: 'No Endorsement',
          content: `LINKING TO A SITE DOES NOT MEAN:

✗ We endorse the site
✗ We endorse their practices
✗ We endorse their content
✗ We agree with their policies
✗ We vouch for their reliability
✗ We support their business
✗ We recommend their services

We provide links for convenience only.

Review third-party sites independently.`
        }
      ]
    },
    {
      id: 'companion-disclaimer',
      title: '❤️ Companion Disclaimer',
      icon: '❤️',
      subsections: [
        {
          subtitle: 'Companion Information',
          content: `REGARDING COMPANION DETAILS:

📸 PHOTOS:
• Gallery images are representative
• Real companions are similar
• Slight variations are normal
• Lighting/angle/makeup affects appearance
• Age is approximate
• Height/weight approximate
• Body type similar to photos

👥 NAMES & INFORMATION:
• Names may be aliases for privacy
• Personal information limited for safety
• Details kept confidential
• Background limited
• Information verified but limited

✓ ALL COMPANIONS ARE:
✓ Verified and safe
✓ Real people
✓ Willing participants
✓ Professional
✓ Legal age (18+)
✓ Drug-free (verified)`
        },
        {
          subtitle: 'No Companion Guarantee',
          content: `WE DO NOT GUARANTEE:

✗ Specific companion availability
✗ Same companion for repeat bookings
✗ Specific appearance match
✗ Personality compatibility
✗ Perfect experience
✗ No companion cancellation
✗ Punctuality (traffic/emergencies)

POSSIBLE SITUATIONS:
• Companion emergency → Replacement offered
• Last-minute unavailability → Refund offered
• Similar but different companion → Rescheduling offered
• Slight appearance difference → Normal variation

We do our best but cannot guarantee everything.`
        },
        {
          subtitle: 'Companion Safety',
          content: `ALL COMPANIONS HAVE RIGHTS:

✓ Right to refuse
✓ Right to set boundaries
✓ Right to end service
✓ Right to feel safe
✓ Right to personal space
✓ Right to reject requests
✓ Right to police protection

IF YOU VIOLATE:
• Immediate service termination
• No refund
• Account ban
• Police involvement possible
• Legal consequences

Companion safety is sacred.`
        }
      ]
    },
    {
      id: 'payment-disclaimer',
      title: '💰 Payment Disclaimer',
      icon: '💰',
      subsections: [
        {
          subtitle: 'Payment Methods',
          content: `WE ACCEPT:
✅ Cash on Delivery (COD)
✅ UPI Transfers

WE DO NOT ACCEPT:
❌ Credit/Debit cards
❌ Online banking
❌ Cryptocurrency
❌ Checks
❌ Bank transfers
❌ Other methods

PAYMENT SECURITY:
• COD: No digital record
• UPI: Standard bank security
• We don't store payment data
• No payment guarantee 100%
• Fraud possible (always alert)`
        },
        {
          subtitle: 'No Payment Protection',
          content: `REGARDING PAYMENT DISPUTES:

⚠️ WE ARE NOT RESPONSIBLE FOR:
✗ Payment fraud
✗ Scams
✗ Stolen cash
✗ UPI sending errors
✗ Wrong amount transfers
✗ Double payments
✗ Payment delays

BE CAREFUL:
✓ Count cash before payment
✓ Verify UPI ID before transfer
✓ Keep proof of payment
✓ Get receipt/confirmation
✓ Screenshot transactions
✓ Verify amount before sending

User error is user responsibility.`
        }
      ]
    },
    {
      id: 'legal-compliance',
      title: '📜 Legal Compliance',
      icon: '📜',
      subsections: [
        {
          subtitle: 'Service Legality',
          content: `OUR SERVICES:
✅ COMPLY WITH INDIAN LAW
✅ Legal companion services only
✅ No prostitution or sexual services
✅ No exploitation
✅ No trafficking
✅ Consenting adults only
✅ Professional companionship

IF YOU VIOLATE LAWS:
• We are not responsible
• You face legal consequences
• We may report to authorities
• Legal action possible
• Criminal charges possible

You are responsible for your actions.`
        },
        {
          subtitle: 'No Illegal Activities',
          content: `WE STRICTLY PROHIBIT:

❌ Drug use
❌ Illegal substances
❌ Criminal activity
❌ Violence
❌ Harassment
❌ Exploitation
❌ Endangering safety
❌ Any illegal activity

IF YOU ATTEMPT:
• Immediate ban
• Police involvement likely
• Legal action possible
• Criminal charges
• No refund

We comply with all laws.`
        }
      ]
    },
    {
      id: 'indemnification',
      title: '⚔️ Indemnification',
      icon: '⚔️',
      content: `YOU AGREE TO INDEMNIFY AND HOLD HARMLESS:

Our company and all related parties from:
✗ Any claims you make
✗ Any damages you claim
✗ Any losses you experience
✗ Any liability you create
✗ Any legal action you take
✗ Any consequences of your actions

THIS MEANS:
You take full responsibility for your actions and their consequences.

You will not hold us liable for anything.

By using our services, you accept this indemnification.`,
    },
    {
      id: 'changes-to-disclaimer',
      title: '📢 Changes to This Disclaimer',
      icon: '📢',
      subsections: [
        {
          subtitle: 'Updates to Disclaimer',
          content: `WE MAY CHANGE THIS DISCLAIMER:

✓ Anytime without notice
✓ At our sole discretion
✓ Effective immediately upon posting
✓ Major changes via email notification
✓ Your continued use = acceptance

WHEN CHANGES MADE:
• Posted on this page
• Updated date shown
• Version history maintained
• Take effect immediately

Check this page regularly.`
        },
        {
          subtitle: 'Version History',
          content: `Current Version: 1.0
Effective Date: January 1, 2020
Last Updated: ${new Date().toLocaleDateString()}

We maintain current version here.`
        }
      ]
    },
    {
      id: 'severability',
      title: '⚖️ Severability',
      icon: '⚖️',
      content: `If any part of this Disclaimer is found invalid:

✓ That part is severed
✓ Remaining parts remain valid
✓ Full effect continues
✓ Legal interpretation applies

This ensures our Disclaimer remains enforceable.`,
    },
    {
      id: 'entire-agreement',
      title: '📋 Entire Agreement',
      icon: '📋',
      content: `THIS DISCLAIMER, TOGETHER WITH:

✓ Terms & Conditions
✓ Privacy Policy
✓ Cookie Policy
✓ Other legal documents

CONSTITUTE THE ENTIRE AGREEMENT between you and our company.

SUPERSEDES:
✗ All prior agreements
✗ All previous understandings
✗ All verbal agreements
✗ All prior versions

This is our complete legal agreement.`,
    },
    {
      id: 'contact-questions',
      title: '📞 Questions About This Disclaimer?',
      icon: '📞',
      content: `If you have questions about this Disclaimer:

📱 WHATSAPP (Recommended):
+91-8058457070
Available 24/7

📞 PHONE CALL:
+91-8058457070
24 hours daily

📧 EMAIL:
legal@escortjaipurall.com
Response within 24 hours

Please include:
✓ Your question
✓ Related section (if applicable)
✓ Contact information
✓ Preferred response method

We are happy to clarify.`,
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
            <span className="text-sm text-gray-400 tracking-widest">⚠️ IMPORTANT NOTICE</span>
          </motion.div>

          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Disclaimer
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-4">
            Please read this important legal notice carefully before using our website and services.
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
            Understood & Agree? ✅
          </h3>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Ready to proceed? By using our services, you accept all terms, conditions, and this disclaimer.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/918058457070?text=I have read and agree to the disclaimer. I want to book a service."
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-green-600 text-white rounded-xl font-bold hover:bg-green-700 transition-all text-lg"
            >
              💬 Proceed to Booking
            </a>
            <a
              href="https://wa.me/918058457070?text=I have questions about the disclaimer"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-red-600 text-white rounded-xl font-bold hover:bg-red-700 transition-all text-lg"
            >
              ❓ Have Questions?
            </a>
          </div>

          <p className="text-gray-400 text-sm mt-6">
            Available 24/7 on WhatsApp | Response within minutes
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default DisclaimerContent
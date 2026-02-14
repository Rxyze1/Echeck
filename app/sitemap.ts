// app/sitemap.ts
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.escortjaipurall.com'
  const today = new Date()

  // ============================================
  // 1. MAIN NAVBAR PAGES (Highest Priority)
  // ============================================
  const navbarPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: today,
      changeFrequency: 'daily',
      priority: 1.0, // ✅ Homepage - most important
    },
    {
      url: `${baseUrl}/Gallery`,
      lastModified: today,
      changeFrequency: 'weekly',
      priority: 0.95, // ⬆️ Increased from 0.9
    },
    {
      url: `${baseUrl}/Service`,
      lastModified: today,
      changeFrequency: 'weekly',
      priority: 0.95, // ⬆️ Increased from 0.9
    },
    {
      url: `${baseUrl}/Pricing`,
      lastModified: today,
      changeFrequency: 'weekly',
      priority: 0.95, // ⬆️ Increased from 0.9 + lowercase
    },
    {
      url: `${baseUrl}/About`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.9, // ⬆️ Increased from 0.85 + lowercase
    },
    
  ]

  // ============================================
  // 2. PILLAR PAGES (High Priority)
  // ============================================
  const pillarPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/call-girls-in-jaipur`,
      lastModified: today,
      changeFrequency: 'daily',
      priority: 0.98, // ⬆️ Increased from 0.95
    },
  ]

  // ============================================
  // 3. CATEGORY PAGES (High Priority)
  // ============================================
  const categoryPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/college-call-girls-jaipur`,
      lastModified: today,
      changeFrequency: 'daily',
      priority: 0.92,
    },
    {
      url: `${baseUrl}/vip-escorts-jaipur`, // ✅ NEW
      lastModified: today,
      changeFrequency: 'daily',
      priority: 0.92,
    },
    {
      url: `${baseUrl}/housewife-escorts-jaipur`, // ✅ NEW
      lastModified: today,
      changeFrequency: 'daily',
      priority: 0.92,
    },
    {
      url: `${baseUrl}/russian-escorts-jaipur`, // ✅ NEW
      lastModified: today,
      changeFrequency: 'daily',
      priority: 0.92,
    },
    {
      url: `${baseUrl}/model-escorts-jaipur`, // ✅ NEW
      lastModified: today,
      changeFrequency: 'daily',
      priority: 0.9,
    },
  ]

  // ============================================
  // 4. AREA-SPECIFIC PAGES (Location SEO)
  // ============================================
  const areas = [
    { slug: 'malviya-nagar' },
    { slug: 'c-scheme' },
    { slug: 'vaishali-nagar' },
    { slug: 'mansarovar' },
    { slug: 'jagatpura' },
    { slug: 'tonk-road' },
    { slug: 'civil-lines' },
    { slug: 'raja-park' },
    { slug: 'bani-park' },
    { slug: 'ajmer-road' },
    { slug: 'pratap-nagar' },
    { slug: 'gopalpura' },
    { slug: 'durgapura' },
    { slug: 'sanganer' },
    { slug: 'jhotwara' },
    { slug: 'vidhyadhar-nagar' },
    { slug: 'ambabari' },
    { slug: 'sodala' },
    { slug: 'shastri-nagar' },
    { slug: 'sindhi-camp' },
    { slug: 'mi-road' }, // ✅ NEW
    { slug: 'airport-road' }, // ✅ NEW
  ]

  const areaPages: MetadataRoute.Sitemap = areas.map((area) => ({
    url: `${baseUrl}/call-girls-in-${area.slug}-jaipur`,
    lastModified: today,
    changeFrequency: 'daily',
    priority: 0.87, // ⬆️ Increased from 0.85
  }))

  // ============================================
  // 5. LEGAL & POLICY PAGES
  // ============================================
  const legalPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/terms-conditions`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/disclaimer`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/cookie-policy`, // ✅ NEW
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.5,
    },
  ]

  // ============================================
  // 6. UTILITY PAGES
  // ============================================
  const utilityPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/how-it-works`, // ✅ NEW
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/why-choose-us`, // ✅ NEW
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog`, // ✅ NEW (if you have blog)
      lastModified: today,
      changeFrequency: 'weekly',
      priority: 0.75,
    },
  ]

  // ============================================
  // 7. COMBINE ALL PAGES
  // ============================================
  const allPages: MetadataRoute.Sitemap = [
    ...navbarPages,      // Priority: 1.0 - 0.85
    ...pillarPages,      // Priority: 0.98
    ...categoryPages,    // Priority: 0.92 - 0.9
    ...areaPages,        // Priority: 0.87 (22 pages)
    ...legalPages,       // Priority: 0.6 - 0.5
    ...utilityPages,     // Priority: 0.75 - 0.7
  ]

  return allPages
}
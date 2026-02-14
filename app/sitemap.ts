// app/sitemap.ts
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.escortjaipurall.com'

  // ============================================
  // 1. MAIN NAVBAR PAGES (Highest Priority)
  // ============================================
  const navbarPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/Gallery`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/Service`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/Pricing`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/About`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.85,
    },
  ]

  // ============================================
  // 2. MAIN PILLAR PAGES
  // ============================================
  const pillarPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/call-girls-in-jaipur`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.95,
    },
  ]

  // ============================================
  // 3. CATEGORY PAGES
  // ============================================
  const categoryPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/college-call-girls-jaipur`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.92,
    },
  ]

  // ============================================
  // 4. AREA-SPECIFIC PAGES (Location SEO)
  // ============================================
  const areas = [
    { slug: 'malviya-nagar', name: 'Malviya Nagar' },
    { slug: 'c-scheme', name: 'C-Scheme' },
    { slug: 'vaishali-nagar', name: 'Vaishali Nagar' },
    { slug: 'mansarovar', name: 'Mansarovar' },
    { slug: 'jagatpura', name: 'Jagatpura' },
    { slug: 'tonk-road', name: 'Tonk Road' },
    { slug: 'civil-lines', name: 'Civil Lines' },
    { slug: 'raja-park', name: 'Raja Park' },
    { slug: 'bani-park', name: 'Bani Park' },
    { slug: 'ajmer-road', name: 'Ajmer Road' },
    { slug: 'pratap-nagar', name: 'Pratap Nagar' },
    { slug: 'gopalpura', name: 'Gopalpura' },
    { slug: 'durgapura', name: 'Durgapura' },
    { slug: 'sanganer', name: 'Sanganer' },
    { slug: 'jhotwara', name: 'Jhotwara' },
    { slug: 'vidhyadhar-nagar', name: 'Vidhyadhar Nagar' },
    { slug: 'ambabari', name: 'Ambabari' },
    { slug: 'sodala', name: 'Sodala' },
    { slug: 'shastri-nagar', name: 'Shastri Nagar' },
    { slug: 'sindhi-camp', name: 'Sindhi Camp' },
  ]

  const areaPages: MetadataRoute.Sitemap = areas.map((area) => ({
    url: `${baseUrl}/call-girls-in-${area.slug}-jaipur`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: 0.85,
  }))

  // ============================================
  // 5. FOOTER LINKS
  // ============================================
  const footerPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/terms-conditions`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/disclaimer`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
  ]

  // ============================================
  // 6. ADMIN PAGE
  // ============================================
  const adminPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/admin/login`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.3,
    },
  ]

  // ============================================
  // COMBINE ALL PAGES
  // ============================================
  const allPages: MetadataRoute.Sitemap = [
    ...navbarPages,    // Priority: 1.0 - 0.85
    ...pillarPages,    // Priority: 0.95
    ...categoryPages,  // Priority: 0.92
    ...areaPages,      // Priority: 0.85 (20 pages)
    ...footerPages,    // Priority: 0.7 - 0.6
    ...adminPages,     // Priority: 0.3
  ]

  return allPages
}
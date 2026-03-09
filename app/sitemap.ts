import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.orvynlabs.in";

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/works`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
    },

    // SEO landing pages
    {
      url: `${baseUrl}/web-development-calicut`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/mern-stack-development`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/ecommerce-development`,
      lastModified: new Date(),
    },

    // Case study
    {
      url: `${baseUrl}/works/nextzen-ecommerce`,
      lastModified: new Date(),
    },

    // Blog section
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
    },
  ];
}
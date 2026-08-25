import type { MetadataRoute } from "next";
export default function sitemap():MetadataRoute.Sitemap{return ["ru","en"].map(locale=>({url:`https://ravenorth-concept.vercel.app/${locale}`,lastModified:new Date(),alternates:{languages:{ru:"https://ravenorth-concept.vercel.app/ru",en:"https://ravenorth-concept.vercel.app/en"}}}))}

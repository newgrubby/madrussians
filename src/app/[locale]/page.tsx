import type {Metadata} from "next";
import {notFound} from "next/navigation";
import Site from "@/components/Site";
import {content,isLocale,locales,type Locale} from "@/content";

const base="https://ravenorth-concept.vercel.app";
export function generateStaticParams(){return locales.map(locale=>({locale}))}
export async function generateMetadata({params}:{params:Promise<{locale:string}>}):Promise<Metadata>{const {locale}=await params;if(!isLocale(locale))return {};const t=content[locale],path=`/${locale}`;return {title:t.seo.title,description:t.seo.description,alternates:{canonical:path,languages:{ru:"/ru",en:"/en","x-default":"/ru"}},openGraph:{title:t.seo.title,description:t.seo.description,url:`${base}${path}`,siteName:"RAVENORTH / EXPEDITIONS",locale:t.seo.ogLocale,alternateLocale:content[t.otherLocale].seo.ogLocale,type:"website"},robots:{index:true,follow:true}}}
export default async function LocalePage({params}:{params:Promise<{locale:string}>}){const {locale}=await params;if(!isLocale(locale))notFound();return <Site locale={locale as Locale}/>}

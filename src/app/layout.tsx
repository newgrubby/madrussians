import type {Metadata} from "next";
import {Onest,Prata,Unbounded} from "next/font/google";
import "./globals.css";
const display=Unbounded({subsets:["latin","cyrillic"],weight:["400","500","600"],variable:"--font-unbounded",display:"swap"});
const editorial=Prata({subsets:["latin","cyrillic"],weight:"400",variable:"--font-prata",display:"swap"});
const ui=Onest({subsets:["latin","cyrillic"],weight:["400","500","600"],variable:"--font-onest",display:"swap"});
export const metadata:Metadata={metadataBase:new URL("https://ravenorth-concept.vercel.app"),title:"RAVENORTH / EXPEDITIONS",description:"EO Labs fictional expedition brand concept.",icons:{icon:"/favicon.png"}};
export default function RootLayout({children}:{children:React.ReactNode}){const buildCommit=(process.env.VERCEL_GIT_COMMIT_SHA??process.env.GIT_COMMIT_SHA??"development").slice(0,7);return <html lang="ru" className={`${display.variable} ${editorial.variable} ${ui.variable}`}><head><meta name="x-build-commit" content={buildCommit}/></head><body data-build={buildCommit}>{children}</body></html>}

import type {Metadata} from "next";
import "./globals.css";
export const metadata:Metadata={metadataBase:new URL("https://ravenorth-concept.vercel.app"),title:"RAVENORTH / EXPEDITIONS",description:"EO Labs fictional expedition brand concept.",icons:{icon:"/favicon.png"}};
export default function RootLayout({children}:{children:React.ReactNode}){const buildCommit=(process.env.VERCEL_GIT_COMMIT_SHA??process.env.GIT_COMMIT_SHA??"development").slice(0,7);return <html lang="ru"><head><meta name="x-build-commit" content={buildCommit}/></head><body data-build={buildCommit}>{children}</body></html>}

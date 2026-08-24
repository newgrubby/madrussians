import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { metadataBase:new URL("https://concept.madrussians.ru"),title:"MADRUSSIANS — экспедиции по России и миру",description:"Маленькие группы. Большие расстояния. Авторские экспедиции в труднодоступные места.",openGraph:{title:"MADRUSSIANS — не туры, экспедиции",description:"Камчатка, Курилы, Байкал, Кавказ и Тянь-Шань.",type:"website"},icons:{icon:"/favicon.png"},robots:{index:false,follow:false} };
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="ru"><body>{children}</body></html>}

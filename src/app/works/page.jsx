
import { Suspense } from "react";
import ContactSection from "../components/homepage/ContactSection";
import Filter from "../components/workspage/Filter";
import Loading from "./Loading";

export default function (){
    return(
        <>
        <div className="container mx-auto px-6 py-10 pt-32 md:px-10 lg:px-20 ">
            <p className="text-4xl md:text-7xl">Creating Top-notch <br/> Digital Products</p>
        </div>
        <Suspense fallback={<Loading/>}>
            <Filter/>
        </Suspense>
        <ContactSection/>
        </>
    )
}
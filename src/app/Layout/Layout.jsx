import Footer from "../components/homepage/Footer";
import Header from "../components/homepage/Header";

export default function ({children}){
    return(
        <>
        <Header/>
        {children}
        <Footer/>
        </>
    )
}
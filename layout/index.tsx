import { Portfolio } from "./Portfolio/Portfolio";
import { Video } from "./Video/Video";
import { AboutMe } from "./AboutMe/AboutMe";
import { ContactDetails } from "./ContactDetails/ContactDetails";
import { Certifications } from "./Certifications/Certifications";
import { Browser } from "./Browser/Browser";

interface LayoutProps {
    name: String | ""
}

const Layout:React.FC<LayoutProps> = ({ name }) => {
    switch(name) {
        case "Portfolio":
            return <Portfolio />
        case "Video":
            return <Video />
        case "About Me":
            return <AboutMe />
        case "Contact Details":
            return <ContactDetails />
        case "Certifications":
            return <Certifications />
        case "Browser":
            return <Browser />
        default:
            return <div />
    }
}

export default Layout

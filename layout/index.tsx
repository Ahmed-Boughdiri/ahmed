import { Portfolio } from "./Portfolio/Portfolio";
import { Video } from "./Video/Video";
import { AboutMe } from "./AboutMe/AboutMe";
import { ContactDetails } from "./ContactDetails/ContactDetails";
import { Certifications } from "./Certifications/Certifications";
import { Browser } from "./Browser/Browser";

interface LayoutProps {
    name: String | "",
    windowAlreadyExpanded?: Boolean
}

const Layout:React.FC<LayoutProps> = ({ 
    name, 
    windowAlreadyExpanded=false
}) => {
    switch(name) {
        case "Portfolio":
            return <Portfolio />
        case "Video":
            return <Video windowAlreadyExpanded={windowAlreadyExpanded} />
        case "About Me":
            return <AboutMe windowAlreadyExpanded={windowAlreadyExpanded} />
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

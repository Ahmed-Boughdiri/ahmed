import fileIcon from "../assets/icons/file.png";
import bacFileIcon from "../assets/icons/bac-file.png";
import webCertificateIcon from "../assets/icons/web-certificate.png";
import accessCertificateIcon from "../assets/icons/access-certificate.png";

export const certificates = [
    {
        name: "Access Microscholarship Program",
        icon: accessCertificateIcon,
        type: "English Certificate",
        date: "20/11/2019",
        size: 90,
        path: "/access.pdf"
    },
    {
        name: "Go My Code - AI Level 1",
        icon: fileIcon,
        type: "AI Certificate",
        date: "12/10/2020",
        size: 120,
        path: "/gomycode.pdf"
    },
    {
        name: "Bac Informatique",
        icon: bacFileIcon,
        type: "baccalauréat",
        date: "09/07/2020",
        size: 50,
        path: "/bac.pdf"
    }
]

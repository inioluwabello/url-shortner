import { useSelector } from "react-redux";
import { selectURLs } from "../features/url/urlSlice";
import ShortenedLinkItems from "./ShortenedLinkItems";

const ShortenedLink = () => {
    const shortenedLinks = useSelector(selectURLs);

    return (
        <div className="shortnened-links">
            <div className="content">
                {shortenedLinks.map(link => {
                    return <ShortenedLinkItems key={link.id} link={link} />
                })}
            </div>
        </div>
    )
}

export default ShortenedLink
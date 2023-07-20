import { useState } from "react"

const MobileShortner = ({ isMobile }) => {

    const [url, setUrl] = useState("")
    const [showingError, setShowingError] = useState(false)

    const handleUrlInput = (e) => {
        setUrl(e.target.value)

        const isValid = isURLValid(e.target.value);
        setShowingError(!isValid)
    }

    const shortenUrl = () => {
        const isValid = isURLValid(url);
        setShowingError(!isValid)
        if (!isValid) return;

        // shorten url
    }

    const isURLValid = () => {
        return url.length > 0 
            && (url.includes("https://") 
                || url.includes("http://"))
    }

    return (
        <section className={`${isMobile ? "mobile" : ""} content`} style={{padding: 0}}>
            <div className="shortner">
                <div className={`${!isMobile ? "space-between" : ""}`}>
                    <input type="text" 
                        className={`shortner-input ${showingError ? "error-input" : ""}`}
                        value={url}
                        placeholder="Shorten a link here..."
                        onChange={handleUrlInput} />
                    
                    {showingError && <label className="error-text">Please add a link</label>}

                    <button 
                        className="btn btn-pry shortner-btn"
                        onClick={shortenUrl}
                    >Shorten it!</button>
                </div>
            </div>
        </section>
    )
}

export default MobileShortner
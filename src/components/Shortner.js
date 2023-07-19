import { useState } from "react"

const Shortner = () => {

    const [url, setUrl] = useState("")

    const handleUrlInput = (e) => {
        // validate input
        setUrl(e.target.value)
    }
    return (
        <section className="content">
            <div className="shortner">
                <div className="space-between">
                    <input type="text" 
                        className="shortner-input"
                        value={url}
                        placeholder="Shorten a link here..."
                        onClick={handleUrlInput} />

                    <button className="btn btn-pry">Shorten it!</button>
                </div>
            </div>
        </section>
    )
}

export default Shortner
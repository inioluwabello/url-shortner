import { useState } from "react";

const ShortenedLinkItems = ({ link }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = (shortenedLink) => {
    navigator.clipboard
      .writeText(shortenedLink)
      .then(() => {
        setCopied(true);
      })
      .catch((error) => {
        console.error("Failed to copy text: ", error);
      });
  };

  return (
    <div className="shortened-link mt-1">
      <div className="first-column">{link.originalLink}</div>
      <div className="second-column color-cyan">{link.shortenedLink}</div>
      <div className="third-column">
        <button
          className={`${copied ? "btn-violet" : ""} btn btn-pry copy-btn`}
          onClick={() => handleCopy(link.shortenedLink)}
        >
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>
    </div>
  );
};

export default ShortenedLinkItems;

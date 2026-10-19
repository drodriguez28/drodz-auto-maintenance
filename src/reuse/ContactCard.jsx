import { useState } from "react";
import { trackEvent } from "../config/analytics";

export function ContactCard({
  title = "Call, text, or email us to get your FREE ESTIMATE today!",
  phone = "404-573-3704",
  email = "drodzhomeservices@gmail.com",
  pageName = "Unknown",
}) {
  const [copied, setCopied] = useState(false);

  const handleCallClick = () => {
    trackEvent("call_click", {
      contact_type: "phone",
      page: pageName,
    });
  };

  const handleTextClick = () => {
    trackEvent("text_click", {
      contact_type: "sms",
      page: pageName,
    });
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    trackEvent("email_click", {
      contact_type: "email",
      page: pageName,
    });
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleEmailClick = () => {
    trackEvent("email_copy", {
      page: pageName,
    });
  };

  const handleReviewClick = () => {
    trackEvent("review_click", {
      platform: "google",
      page: pageName,
    });
  };

  return (
    <div className="text-center mb-12 bg-white p-8 rounded shadow-lg max-w-2xl mx-auto">
      <p className="text-3xl font-bold text-yellow-400 mb-6">{title}</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <a
          href={`tel:${phone}`}
          onClick={handleCallClick}
          className="inline-block bg-red-800 hover:bg-red-900 text-white text-xl px-8 py-3 rounded transition"
        >
          Call Us: {phone}
        </a>
        <a
          href={`sms:${phone}`}
          onClick={handleTextClick}
          className="inline-block bg-red-800 hover:bg-red-900 text-white text-xl px-8 py-3 rounded transition"
        >
          Text Us: {phone}
        </a>
      </div>

      <div>
        <a
          href={`mailto:${email}`}
          onClick={handleEmailClick}
          className="block text-lg text-red-800 hover:text-red-900 transition break-all"
        >
          {email}
        </a>
        <button
          onClick={handleCopyEmail}
          className="mt-4 bg-red-800 hover:bg-red-900 text-white px-4 py-2 rounded transition flex items-center justify-center gap-2 mx-auto"
        >
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 18 20"
          >
            <path d="M16 0H4a2 2 0 0 0-2 2v1H1a1 1 0 0 0 0 2h1v2H1a1 1 0 0 0 0 2h1v2H1a1 1 0 0 0 0 2h1v2H1a1 1 0 0 0 0 2h1v1a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4.5a3 3 0 1 1 0 6 3 3 0 0 1 0-6ZM13.929 17H7.071a.5.5 0 0 1-.5-.5 3.935 3.935 0 1 1 7.858 0 .5.5 0 0 1-.5.5Z" />
          </svg>
          {copied ? "✓ Copied!" : "Copy Email"}
        </button>
      </div>
      {/* Google Reviews Section */}
      <div className="mt-8 text-center">
        <p className="text-lg font-semibold mb-3">
          See Why Atlanta Homeowners Trust Us ⭐
        </p>

        <a
          href="https://share.google/noQwxAY1IBnqYlV9D"
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleReviewClick}
          className="inline-flex items-center justify-center gap-2 bg-red-800 hover:bg-red-900 text-white text-lg px-6 py-3 rounded-lg transition shadow-md hover:shadow-lg"
        >
          {/* Google "G" style icon (no external link needed) */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 48"
            className="w-5 h-5 bg-white rounded-full p-1"
          >
            <path fill="#EA4335" d="M24 9.5c3.3 0 6.3 1.2 8.6 3.2l6.4-6.4C34.8 2.5 29.7 0 24 0 14.7 0 6.7 5.6 2.9 13.7l7.5 5.8C12.4 13.5 17.7 9.5 24 9.5z" />
            <path fill="#4285F4" d="M46.1 24.5c0-1.6-.1-2.7-.4-3.9H24v7.4h12.7c-.3 2-1.9 5-5.4 7l8.3 6.4c4.8-4.4 7.5-10.9 7.5-16.9z" />
            <path fill="#FBBC05" d="M10.4 28.5c-.5-1.5-.8-3-.8-4.5s.3-3 .8-4.5l-7.5-5.8C1.1 17.1 0 20.4 0 24s1.1 6.9 2.9 9.7l7.5-5.2z" />
            <path fill="#34A853" d="M24 48c6.5 0 12-2.1 16-5.7l-8.3-6.4c-2.2 1.5-5.1 2.6-7.7 2.6-6.3 0-11.6-4-13.6-9.9l-7.5 5.8C6.7 42.4 14.7 48 24 48z" />
          </svg>

          Check Our Google Reviews
        </a>
      </div>
    </div>
  );
}

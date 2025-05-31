"use client";

import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

const SeoSearchCom = () => {
  const [url, setUrl] = useState("");
  const [seoScore, setSeoScore] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const isValidURL = (str: string) => {
    try {
      new URL(str);
      return true;
    } catch {
      return false;
    }
  };

  const handleSeoCheck = async () => {
    if (!url || !isValidURL(url)) {
      setError("Please enter a valid website URL (e.g., https://example.com)");
      return;
    }

    setLoading(true);
    setError("");
    setSeoScore(null);

    try {
      const res = await fetch(`/api/seo-score?url=${encodeURIComponent(url)}`);

      if (!res.ok) {
        const errorText = await res.text();
        throw new Error(errorText || "Failed to check SEO");
      }

      const data = await res.json();
      setSeoScore(data.seoScore);
    } catch (err: any) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      <h2 className="text-center font-bold text-xl mb-4">SEO Score Checker</h2>

      <div className="flex gap-2 justify-center">
        <Input
          type="url"
          required
          pattern="https?://.+"
          title="Please enter a valid website URL (including http:// or https://)"
          className="border shadow-md flex-grow"
          placeholder="Enter your website URL"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <Button
          onClick={handleSeoCheck}
          className="bg-orange-500 font-semibold hover:bg-orange-600 text-white"
          disabled={loading}
        >
          {loading ? "Checking..." : "Check SEO Ranking"}
        </Button>
      </div>

      <div className="text-center my-5 font-semibold">
        {seoScore !== null && <div>SEO Score: {seoScore}/100</div>}
        {error && <div className="text-red-500">{error}</div>}
      </div>

      <div className="flex justify-center gap-2 my-4">
        <Button className="font-semibold">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://docs.google.com/forms/d/e/1FAIpQLSc7WN5YyyY2Tg_hKruNOAt_ZNPRR4MvQFPEH9KEua6N1P8fdQ/viewform"
          >
            Book Now to grow your business
          </a>
        </Button>
      </div>
    </div>
  );
};

export default SeoSearchCom;

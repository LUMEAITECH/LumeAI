"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

function TerminalPage() {
  const [textInput, setTextInput] = useState("");
  const [textResponse, setTextResponse] = useState("");
  const [isTextLoading, setIsTextLoading] = useState(false);

  const [imagePrompt, setImagePrompt] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [isImageLoading, setIsImageLoading] = useState(false);

  const handleTextRequest = async () => {
    if (!textInput.trim()) return;

    setIsTextLoading(true);
    setTextResponse("");

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          requestType: "text",
          messages: [{ role: "user", content: textInput }],
        }),
      });

      const data = await response.json();
      if (data.error) throw new Error(data.error);

      setTextResponse(data.content);
    } catch (error) {
      console.error("Text API Error:", error);
      setTextResponse("An error occurred while processing your request.");
    } finally {
      setIsTextLoading(false);
    }
  };

  const handleImageRequest = async () => {
    if (!imagePrompt.trim()) return;

    setIsImageLoading(true);
    setImageUrl("");

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          requestType: "image",
          prompt: imagePrompt,
        }),
      });

      const data = await response.json();
      if (data.error) throw new Error(data.error);

      setImageUrl(data.image_url);
    } catch (error) {
      console.error("Image API Error:", error);
      setImageUrl("An error occurred while generating the image.");
    } finally {
      setIsImageLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 pt-48 lg:pt-32">
      {/* Text Terminal */}
      <div className="w-full max-w-[600px] mb-10">
        <h2 className="text-2xl font-bold mb-4 text-center">Text Terminal</h2>
        <div className="bg-black/80 p-4 rounded-lg shadow-md">
          <div className="mb-4 flex items-center gap-2">
            <input
              type="text"
              value={textInput}
              onChange={(e) => setTextInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleTextRequest();
              }}
              placeholder="Ask a question..."
              className="w-full p-2 rounded-md bg-[#333333] text-white border border-[#666666]"
            />
            {/* Disabled Microphone Button with Tooltip */}
            <div className="relative group">
              <button
                disabled
                className="bg-[#666666] p-2 rounded-md disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              >
                <img
                  src="/microphone.png"
                  alt="Microphone"
                  className="w-6 h-6"
                />
              </button>
              {/* Tooltip */}
              <div className="absolute top-1/2 left-full transform -translate-y-1/2 ml-2 hidden group-hover:flex items-center justify-center bg-black text-white text-sm font-semibold py-2 px-4 rounded-lg shadow-lg">
                Voice coming soon!
              </div>
            </div>
          </div>
          <button
            onClick={handleTextRequest}
            disabled={isTextLoading}
            className="w-full bg-[#666666] text-white py-2 rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#777777] transition-colors"
          >
            {isTextLoading ? "Loading..." : "SEND"}
          </button>
          {textResponse && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 text-white"
            >
              {textResponse}
            </motion.div>
          )}
        </div>
      </div>

      {/* Image Terminal */}
      <div className="w-full max-w-[600px]">
        <h2 className="text-2xl font-bold mb-4 text-center">Image Terminal</h2>
        <div className="bg-black/80 p-4 rounded-lg shadow-md">
          <div className="mb-4 flex items-center gap-2">
            <input
              type="text"
              value={imagePrompt}
              onChange={(e) => setImagePrompt(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleImageRequest();
              }}
              placeholder="Describe an image..."
              className="w-full p-2 rounded-md bg-[#333333] text-white border border-[#666666]"
            />
            {/* Disabled Microphone Button with Tooltip */}
            <div className="relative group">
              <button
                disabled
                className="bg-[#666666] p-2 rounded-md disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              >
                <img
                  src="/microphone.png"
                  alt="Microphone"
                  className="w-6 h-6"
                />
              </button>
              {/* Tooltip */}
              <div className="absolute top-1/2 left-full transform -translate-y-1/2 ml-2 hidden group-hover:flex items-center justify-center bg-black text-white text-sm font-semibold py-2 px-4 rounded-lg shadow-lg">
                Voice coming soon!
              </div>
            </div>
          </div>
          <button
            onClick={handleImageRequest}
            disabled={isImageLoading}
            className="w-full bg-[#666666] text-white py-2 rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#777777] transition-colors"
          >
            {isImageLoading ? "Generating..." : "GENERATE IMAGE"}
          </button>
          {imageUrl && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 text-center"
            >
              {imageUrl.startsWith("http") ? (
                <img
                  src={imageUrl}
                  alt="Generated"
                  className="rounded-md max-w-full"
                />
              ) : (
                <p className="text-white">{imageUrl}</p>
              )}
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}

export default TerminalPage;

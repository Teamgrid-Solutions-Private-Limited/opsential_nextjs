"use client";

import { useState } from "react";

export default function ProductTabs({ data }: any) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      {/* Tabs */}
      <div className="flex justify-center gap-2 mb-10">
        {data.product_tab_links.map((tab: any, index: number) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`tab-btn font-mono text-[13px] px-5 py-2 rounded-full border transition-all duration-200 ${
              activeTab === index
                ? "tab-active"
                : "text-[#7a8291] hover:text-[#9ca3af]"
            }`}
          >
            {tab.product_tab_text}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="relative">
        {data.product_tab_content.map((tabContent: any, index: number) => {
          // ✅ Ensure the image URL is used
          const imageUrl = tabContent.product_image_url || tabContent.product_image; 

          return (
            <div
              key={index}
              className={activeTab === index ? "block" : "hidden"}
            >
              <div className="card overflow-hidden max-w-5xl mx-auto rounded-[20px]">
                <img
                  src={imageUrl}
                  alt={data.product_tab_links[index].product_tab_text}
                  className="w-full object-cover"
                />
              </div>
            </div>
          );
        })}
      </div>

      <div className="section-line"></div>
    </>
  );
}
"use client";

import React from 'react';

const VideoCarousel = ({ videosData }) => {
  const handleWatchNow = (url) => {
    window.open(url, '_blank');
  };

  return (
    <div className="pt-24">
      {/* Modified wrapper for consistent video card display */}
      <div className="flex overflow-x-auto gap-6 pb-6 px-6">
        {videosData.map((video, index) => (
          <div
            key={index}
            className="video-card flex-shrink-0 bg-black text-white rounded-lg shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl w-[280px] sm:w-[400px] md:w-[600px] lg:w-[640px]"
          >
            <div className="relative overflow-hidden rounded-t-lg pt-[56.25%]">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src={video.url}
                title={`Video ${index + 1}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
            <div className="px-4 py-3">
              <p className="text-lg font-semibold">{video.title}</p>
              <div className="flex gap-2 mt-2">
                <button
                  onClick={() => handleWatchNow(video.videourl)}
                  className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-all"
                >
                  Watch Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoCarousel;

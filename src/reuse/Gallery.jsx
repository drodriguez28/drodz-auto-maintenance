import { useState, useEffect } from "react";

export const Gallery = ({ images = [] }) => {
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [imageDimensions, setImageDimensions] = useState({});

  const isVideo = (src) => {
    return /\.(mp4|webm|ogg|mov)$/i.test(src);
  };

  const getImageOrientation = (src) => {
    if (imageDimensions[src]) {
      const { width, height } = imageDimensions[src];
      return height > width ? "portrait" : "landscape";
    }
    return "landscape";
  };

  const handleImageLoad = (src, event) => {
    const img = event.target;
    setImageDimensions((prev) => ({
      ...prev,
      [src]: { width: img.naturalWidth, height: img.naturalHeight },
    }));
  };

  const handleVideoMetadata = (src, event) => {
    const video = event.target;
    setImageDimensions((prev) => ({
      ...prev,
      [src]: { width: video.videoWidth, height: video.videoHeight },
    }));
  };

  const getGridColSpan = (src) => {
    const orientation = isVideo(src) ? "landscape" : getImageOrientation(src);
    return orientation === "portrait" ? "col-span-1" : "col-span-1 md:col-span-2";
  };

  const getMediaHeight = (src) => {
    const orientation = isVideo(src) ? "landscape" : getImageOrientation(src);
    return orientation === "portrait" ? "h-80" : "h-64 md:h-72";
  };

  const handlePrevMedia = () => {
    const currentIndex = images.indexOf(selectedMedia);
    const prevIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    setSelectedMedia(images[prevIndex]);
  };

  const handleNextMedia = () => {
    const currentIndex = images.indexOf(selectedMedia);
    const nextIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    setSelectedMedia(images[nextIndex]);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedMedia) return;
      
      if (e.key === "Escape") {
        setSelectedMedia(null);
      } else if (e.key === "ArrowLeft") {
        handlePrevMedia();
      } else if (e.key === "ArrowRight") {
        handleNextMedia();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedMedia, images]);

  return (
    <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
      {/* Main Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-max">
        {images.map((media, index) => {
          const video = isVideo(media);
          return (
            <div
              key={index}
              className={`relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow cursor-pointer group ${getGridColSpan(
                media
              )} ${getMediaHeight(media)}`}
              onClick={() => setSelectedMedia(media)}
            >
              {video ? (
                <>
                  <video
                    src={media}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    onLoadedMetadata={(e) => handleVideoMetadata(media, e)}
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 group-hover:bg-opacity-50 transition-all">
                    <div className="text-white text-4xl">▶</div>
                  </div>
                </>
              ) : (
                <>
                  <img
                    src={media}
                    alt={`Gallery ${index + 1}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    onLoad={(e) => handleImageLoad(media, e)}
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all" />
                </>
              )}
            </div>
          );
        })}
      </div>

      {/* Lightbox Modal */}
      {selectedMedia && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedMedia(null)}
        >
          {/* Left Arrow */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePrevMedia();
            }}
            className="absolute left-4 text-white text-4xl hover:text-gray-300 transition-colors z-51"
            aria-label="Previous media"
          >
            ←
          </button>

          <div className="max-w-4xl max-h-screen flex items-center justify-center">
            {isVideo(selectedMedia) ? (
              <video
                src={selectedMedia}
                controls
                autoPlay
                className="max-w-full max-h-screen rounded-lg"
                onClick={(e) => e.stopPropagation()}
              />
            ) : (
              <img
                src={selectedMedia}
                alt="Full view"
                className="max-w-full max-h-screen object-contain rounded-lg"
                onClick={(e) => e.stopPropagation()}
              />
            )}
          </div>

          {/* Right Arrow */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNextMedia();
            }}
            className="absolute right-4 text-white text-4xl hover:text-gray-300 transition-colors z-51"
            aria-label="Next media"
          >
            →
          </button>

          {/* Close Button */}
          <button
            onClick={() => setSelectedMedia(null)}
            className="absolute top-4 right-4 text-white text-3xl hover:text-gray-300"
          >
            ✕
          </button>
        </div>
      )}
    </div>
  );
};
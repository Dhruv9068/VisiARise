const Hero = () => {
  return (
    <div className="w-full h-[50vh] md:h-screen bg-gradient-to-t from-neonPurple via-black  to-neonPurple fro overflow-hidden relative">
      {/* Video element */}
      <video
        className="absolute top-0 left-0 w-full h-full object-contain md:object-cover md:object-center"
        autoPlay
        loop
        muted
        playsInline
        src="/VisiArise_herovid.mp4"
      />

      {/* Overlay content */}
      <div className="absolute inset-0 flex items-center justify-center z-20">
        {/* Add overlay content here if needed */}
        <div className="text-center">
          
        </div>
      </div>

     
    </div>
  );
};

export default Hero;
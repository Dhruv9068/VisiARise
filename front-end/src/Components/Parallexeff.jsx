const Parallexeff = () => {
  return (
    <div
      className="relative h-16 w-full md:h-16 absolute inset-0 bg-cover bg-center" 
      style={{
        overflow: 'hidden',
        backgroundImage: `url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbChUzPXkzlCTn4_Xrzi17I3Y39OHLAQxqdQ&s")`,
          backgroundAttachment: 'fixed',
      }}
    >
      
      <style >{`
        @media (max-width: 768px) {
          div.absolute {
            height: 20vh; // Adjust height for mobile view
          }
        }
      `}</style>
    </div>
  );
};

export default Parallexeff;

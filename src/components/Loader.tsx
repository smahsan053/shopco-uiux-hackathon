const Loader = () => {
    return (
      <div className="fixed top-0 left-0 w-full min-h-screen z-50 bg-white p-10 flex items-center justify-center">
        <div className="relative w-24 h-24 flex items-center justify-center">
          <div className="absolute inset-0 rounded-full border-4 border-black border-t-transparent animate-spin duration-1000"></div>
          
          <div className="w-14 h-14 bg-gray-300 rounded-full text-black font-bold text-center items-center flex justify-center text-xs">SHOP.CO</div>
          
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  };
  
  export default Loader;
  
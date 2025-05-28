
const FloatingElements = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Floating geometric shapes */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-400/20 rounded-full animate-bounce" 
           style={{ animationDelay: '0s', animationDuration: '3s' }} />
      <div className="absolute top-40 right-20 w-16 h-16 bg-purple-400/20 rounded-lg rotate-45 animate-pulse" 
           style={{ animationDelay: '1s', animationDuration: '4s' }} />
      <div className="absolute bottom-40 left-20 w-12 h-12 bg-pink-400/20 rounded-full animate-bounce" 
           style={{ animationDelay: '2s', animationDuration: '5s' }} />
      <div className="absolute bottom-20 right-10 w-24 h-24 bg-indigo-400/20 rounded-lg animate-pulse" 
           style={{ animationDelay: '0.5s', animationDuration: '3.5s' }} />
      
      {/* Floating code symbols */}
      <div className="absolute top-60 left-1/4 text-6xl text-blue-300/30 animate-bounce font-mono" 
           style={{ animationDelay: '1.5s', animationDuration: '4s' }}>
        {'</>'}
      </div>
      <div className="absolute bottom-60 right-1/4 text-5xl text-purple-300/30 animate-pulse font-mono" 
           style={{ animationDelay: '2.5s', animationDuration: '3s' }}>
        {'{}'}
      </div>
    </div>
  );
};

export default FloatingElements;

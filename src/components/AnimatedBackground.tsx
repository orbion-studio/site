const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden dark:opacity-60">
      {/* Orbital Paths */}
      <div className="orbital-path w-96 h-96 top-1/4 left-1/4 opacity-30"></div>
      <div className="orbital-path w-64 h-64 top-1/2 right-1/4 opacity-20 animation-delay-2s"></div>
      <div className="orbital-path w-48 h-48 bottom-1/4 left-1/3 opacity-25 animation-delay-4s"></div>
      
      {/* Floating Particles */}
      {Array.from({ length: 12 }).map((_, i) => (
        <div
          key={i}
          className="floating-particle"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 20}s`,
            animationDuration: `${15 + Math.random() * 10}s`
          }}
        />
      ))}
      
      {/* Orbiting Elements */}
      <div className="absolute top-1/3 left-1/2 w-4 h-4 opacity-60">
        <div className="w-2 h-2 bg-cosmic-blue rounded-full animate-orbit"></div>
      </div>
      <div className="absolute top-2/3 right-1/3 w-4 h-4 opacity-40">
        <div className="w-2 h-2 bg-cosmic-purple rounded-full animate-orbit-reverse"></div>
      </div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 cosmic-gradient dark:hidden"></div>
    </div>
  );
};

export default AnimatedBackground;
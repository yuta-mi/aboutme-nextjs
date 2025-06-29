export const Header = () => {
  return (
    <header className="relative overflow-hidden bg-white/90 backdrop-blur-sm border-b border-gray-200/50 shadow-sm">
      {/* Background subtle overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-50/30 via-stone-50/30 to-gray-50/30 opacity-50"></div>
      
      <div className="relative container mx-auto px-4 py-6 sm:py-8">
        <div className="text-center animate-fade-in">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-2">
            Yuta&apos;s Profile
          </h1>
          <div className="flex items-center justify-center space-x-2">
            <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse-custom"></div>
            <small className="text-sm text-gray-600 font-medium tracking-wide">
              鋭意作成中
            </small>
            <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse-custom"></div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
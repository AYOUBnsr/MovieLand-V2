const Nav = () => {
    return (
        <nav className="flex justify-between items-center px-4 md:px-8 py-4">
            <div className="flex items-center gap-2 md:gap-3">
                <img 
                    src="/logo.png" 
                    alt="M-Logo" 
                    className="w-12 h-12 md:w-16 md:h-16" 
                />
                <div className="flex items-center">
                    <span className="text-2xl md:text-3xl font-bold text-white">Movie</span>
                    <span className="text-2xl md:text-3xl font-bold text-[#928eff]">Land</span>
                </div>
            </div>
            <button className="relative px-4 py-2 md:px-6 md:py-3 bg-[#6e66cc] text-white font-bold rounded-lg shadow-lg hover:bg-[#928eff] transition flex items-center gap-1 md:gap-2">
                <span className="hidden md:inline">Browse Movies</span>
                <span className="text-lg">↓</span>
                <div className="absolute inset-0 bg-white rounded-lg translate-x-1 translate-y-1 -z-10"></div>
            </button>
        </nav>
    );
};

export default Nav;
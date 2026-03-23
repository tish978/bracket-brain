export function Header() {
  return (
    <header className="w-full border-b border-zinc-900 bg-black">
      <div
        className="mx-auto px-6 h-12 flex items-center justify-between"
        style={{ maxWidth: 480 }}
      >
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="bg-white text-black font-black text-xs w-8 h-8 flex items-center justify-center select-none">
            BR
          </div>
          <div className="w-px h-5 bg-zinc-700" />
          <span
            className="font-black text-sm tracking-wide uppercase leading-none"
            style={{ fontStyle: "italic" }}
          >
            <span className="text-white">BRACKET</span>
            <span style={{ color: "#a3e635" }}>BRAIN</span>
          </span>
        </div>

        {/* Live badge */}
        <div className="badge-volt flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-black inline-block" />
          LIVE
        </div>
      </div>
    </header>
  );
}

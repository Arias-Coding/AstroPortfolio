export default function App({ children, bgColor, className }) {
  return (
    <div className={`bg-[#030712] text-white tracking-wide ${bgColor} bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]`}>
      <div className={`w-4/5 max-w-4xl mx-auto ${className}`}>{children}</div>
    </div>
  );
}

<div class="absolute top-0 z-[-2] "></div>
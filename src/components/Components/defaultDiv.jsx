export default function App({ children, bgColor, className }) {
  return (
    <div className={`text-white tracking-wide ${bgColor}`}>
      <div className={`w-4/5 max-w-4xl mx-auto ${className}`}>{children}</div>
    </div>
  );
}

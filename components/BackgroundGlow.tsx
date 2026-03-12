export default function BackgroundGlow() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute -top-40 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-amber-400/20 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-fuchsia-500/20 blur-3xl" />
      <div className="absolute bottom-20 left-0 h-[350px] w-[350px] rounded-full bg-emerald-400/20 blur-3xl" />
    </div>
  );
}
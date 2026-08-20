export default function Starfield({ enabled }) {
  if (!enabled) return null;

  const stars = [
    { top: "12%", left: "8%", size: 2, delay: "0s" },
    { top: "18%", left: "22%", size: 3, delay: "0.4s" },
    { top: "9%", left: "41%", size: 2, delay: "1.1s" },
    { top: "15%", left: "63%", size: 4, delay: "0.2s" },
    { top: "7%", left: "78%", size: 2, delay: "1.6s" },
    { top: "22%", left: "88%", size: 3, delay: "0.8s" },
    { top: "28%", left: "14%", size: 2, delay: "1.9s" },
    { top: "6%", left: "94%", size: 2, delay: "0.6s" },
  ];

  return (
    <div className="starfield pointer-events-none absolute inset-0 z-[1]" aria-hidden="true">
      {stars.map((star, index) => (
        <span
          key={index}
          style={{
            top: star.top,
            left: star.left,
            width: star.size,
            height: star.size,
            animationDelay: star.delay,
            boxShadow: "0 0 8px rgba(255,255,255,0.8)",
          }}
        />
      ))}
    </div>
  );
}

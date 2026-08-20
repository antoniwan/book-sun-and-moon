function StoryBlock({ block }) {
  if (typeof block === "string") {
    return <p className="mb-3 last:mb-0">{block}</p>;
  }

  return (
    <p className="mb-3 last:mb-0 font-bold italic text-rose-800">“{block.quote}”</p>
  );
}

export default function StoryPage({ page, language }) {
  const wide = page.captionSize === "wide";

  return (
    <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 flex justify-center p-3 pb-4 md:p-6">
      <article
        className={`caption-card pointer-events-auto max-h-[46vh] overflow-y-auto rounded-3xl border border-ink/10 bg-cream p-5 text-ink shadow-page md:p-7 ${
          wide ? "w-full max-w-4xl" : "w-full max-w-xl"
        }`}
      >
        <div className="font-story text-lg font-semibold leading-relaxed md:text-2xl">
          {page.body[language].map((block, index) => (
            <StoryBlock key={index} block={block} />
          ))}
        </div>
        {page.closing && (
          <h2 className="mt-5 font-display text-4xl text-ink md:text-5xl">
            {page.closing[language]}
          </h2>
        )}
      </article>
    </div>
  );
}

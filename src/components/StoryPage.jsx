function StoryBlock({ block }) {
  if (typeof block === "string") {
    return <p className="mb-3 last:mb-0">{block}</p>;
  }

  return (
    <p className="mb-3 last:mb-0 font-semibold italic text-ember">“{block.quote}”</p>
  );
}

export default function StoryPage({ page, language }) {
  return (
    <article className="caption-card px-5 pb-5 pt-4 text-ink md:px-7 md:pb-7 md:pt-5">
      <div className="font-story text-lg font-medium leading-relaxed md:text-xl lg:text-2xl">
        {page.body[language].map((block, index) => (
          <StoryBlock key={index} block={block} />
        ))}
      </div>
      {page.closing && (
        <h2 className="mt-5 font-display text-4xl italic text-ink md:text-5xl">
          {page.closing[language]}
        </h2>
      )}
    </article>
  );
}

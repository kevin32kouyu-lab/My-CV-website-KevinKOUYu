export default function SectionTitle({ icon: Icon, eyebrow, title, description }) {
  return (
    <div className="max-w-3xl">
      <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.22em] text-cyan-200">
        <Icon className="h-4 w-4" />
        {eyebrow}
      </div>
      <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">{title}</h1>
      <p className="mt-4 text-sm leading-7 text-zinc-400 sm:text-base">{description}</p>
    </div>
  );
}

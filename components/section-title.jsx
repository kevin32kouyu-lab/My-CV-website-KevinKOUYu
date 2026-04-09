export default function SectionTitle({ icon: Icon, eyebrow, title, description }) {
  return (
    <div className="max-w-3xl">
      <div className="mono-label mb-4 text-slate-500">
        <Icon className="mr-2 inline h-4 w-4" />
        {eyebrow}
      </div>
      <h1 className="title-font text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
        {title}
      </h1>
      <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">{description}</p>
    </div>
  );
}

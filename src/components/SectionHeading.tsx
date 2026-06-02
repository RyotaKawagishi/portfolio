type SectionHeadingProps = {
  eyebrow?: string
  id: string
  title: string
}

export function SectionHeading({ eyebrow, id, title }: SectionHeadingProps) {
  return (
    <div className="section-heading">
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2 id={id}>{title}</h2>
    </div>
  )
}

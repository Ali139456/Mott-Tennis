/** Last word in emerald-400; leading text in white (for card / subheadings). */
export function TwoToneTitle({
  children,
  className = "",
}: {
  children: string;
  className?: string;
}) {
  const last = children.lastIndexOf(" ");
  if (last <= 0) {
    return <span className={`text-white ${className}`.trim()}>{children}</span>;
  }
  return (
    <span className={className}>
      <span className="text-white">{children.slice(0, last)} </span>
      <span className="text-emerald-400">{children.slice(last + 1)}</span>
    </span>
  );
}

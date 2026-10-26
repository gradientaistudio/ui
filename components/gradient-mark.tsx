export default function GradientMark({
  className,
  round = false,
}: {
  className?: string;
  round?: boolean;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 540 540"
      className={className}
      aria-hidden
    >
      <rect
        width="540"
        height="540"
        className={`gradient-mark-rect${round ? " is-circle" : ""}`}
      />
      <path
        className="gradient-mark-glyph"
        d="M253.12,135v67.5c0,27.96-22.67,50.62-50.63,50.62h-67.5v33.75h67.5c27.96,0,50.63,22.67,50.63,50.63v67.5h33.75v-67.5c0-27.96,22.67-50.63,50.63-50.63h67.5v-33.75h-67.5c-27.96,0-50.63-22.67-50.63-50.62v-67.5h-33.75Z"
      />
    </svg>
  );
}

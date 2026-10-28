export function BackgroundGrid() {
  return (
    <div className="hero-grid" aria-hidden="true">
      <div className="hero-orb" />
      <svg className="hero-network" viewBox="0 0 1100 720" fill="none">
        <path d="M40 280C220 174 334 326 493 233C639 148 759 73 1060 145" />
        <path d="M53 508C253 397 344 513 522 439C718 357 823 464 1066 326" />
        <path d="M351 16C363 172 461 181 558 294C646 397 626 552 761 700" />
        {[
          [118, 236],
          [302, 271],
          [491, 233],
          [706, 111],
          [899, 119],
          [170, 453],
          [385, 478],
          [592, 410],
          [824, 430],
        ].map(([cx, cy], index) => (
          <g key={`${cx}-${cy}`}>
            <circle cx={cx} cy={cy} r="4" className={`network-node node-${index % 3}`} />
            <circle cx={cx} cy={cy} r="12" className="network-ring" />
          </g>
        ))}
      </svg>
    </div>
  );
}

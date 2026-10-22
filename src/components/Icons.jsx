function Svg({ children }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="18"
      height="18"
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {children}
    </svg>
  );
}

export function MailIcon() {
  return (
    <Svg>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 7 9-7" />
    </Svg>
  );
}

export function LinkIcon() {
  return (
    <Svg>
      <path d="M10 13a5 5 0 0 0 7.1.1l2.1-2.1a5 5 0 0 0-7.1-7.1L10.8 5.2" />
      <path d="M14 11a5 5 0 0 0-7.1-.1L4.8 13a5 5 0 0 0 7.1 7.1l1.3-1.3" />
    </Svg>
  );
}

export function PhoneIcon() {
  return (
    <Svg>
      <path d="M6.5 3.5h3L11 7.5l-2 1.2a12 12 0 0 0 6.3 6.3L16.5 13l4 1.5v3A2 2 0 0 1 18.5 19.5 15 15 0 0 1 4.5 5.5a2 2 0 0 1 2-2z" />
    </Svg>
  );
}

export function PinIcon() {
  return (
    <Svg>
      <path d="M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11z" />
      <circle cx="12" cy="10" r="2.2" />
    </Svg>
  );
}


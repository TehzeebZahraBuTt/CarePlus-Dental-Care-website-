export function Logo() {
  return (
    <svg width="40" height="40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Dark blue roots */}
      <path d="M25 50 C 25 80, 40 95, 45 90 C 50 85, 50 70, 50 70 C 50 70, 50 85, 55 90 C 60 95, 75 80, 75 50" stroke="#003b5c" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      {/* Teal heart shape on top */}
      <path d="M50 60 C 50 60, 20 50, 20 25 C 20 10, 40 10, 50 25 C 60 10, 80 10, 80 25 C 80 50, 50 60, 50 60 Z" fill="#00a99d" />
      {/* White medical cross */}
      <path d="M45 20 H 55 V 30 H 65 V 40 H 55 V 50 H 45 V 40 H 35 V 30 H 45 V 20 Z" fill="white" />
    </svg>
  )
}

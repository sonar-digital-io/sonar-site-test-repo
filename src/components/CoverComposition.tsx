import './CoverComposition.css'

const BASE = '/images/cover'

const pieces: { className: string; src: string }[] = [
  // Left column
  { className: 'cp-left-circle',   src: `${BASE}/Frame 1171276881.png` },
  { className: 'cp-left-mid-431',  src: `${BASE}/Frame 1171276880.png` },
  { className: 'cp-left-mid-564',  src: `${BASE}/Frame 1171276879.png` },
  { className: 'cp-left-789',      src: `${BASE}/Mask group (3).png` },
  { className: 'cp-left-901',      src: `${BASE}/Mask group (1).png` },
  // Middle column
  { className: 'cp-mid-astronaut', src: `${BASE}/Frame 1171276882.png` },
  { className: 'cp-mid-circle',    src: `${BASE}/Frame 1171276885.png` },
  // Right column
  { className: 'cp-right-top',     src: `${BASE}/Frame 1171276892.png` },
  { className: 'cp-right-62',      src: `${BASE}/Vector.png` },
  { className: 'cp-right-174',     src: `${BASE}/Mask group (2).png` },
  { className: 'cp-right-553',     src: `${BASE}/Frame 1171276889.png` },
  { className: 'cp-right-615',     src: `${BASE}/Frame 1171276888.png` },
  { className: 'cp-right-677',     src: `${BASE}/Vector (1).png` },
  { className: 'cp-right-789',     src: `${BASE}/Mask group.png` },
]

export default function CoverComposition() {
  return (
    <div className="composition">
      {pieces.map(p => (
        <img key={p.className} className={`comp-piece ${p.className}`} src={p.src} alt="" />
      ))}
    </div>
  )
}

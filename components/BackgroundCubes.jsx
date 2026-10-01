export default function BackgroundCubes() {
  return (
    <div className="background-cubes-wrapper" aria-hidden="true">
      {/* Left side floating isometric cubes */}
      <svg className="cubes-svg left-cubes" viewBox="0 0 400 800" fill="none">
        <defs>
          <linearGradient id="cubeTop1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#f7f2ea" stopOpacity="0.5" />
          </linearGradient>
          <linearGradient id="cubeLeft1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f3eee6" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#ede6db" stopOpacity="0.4" />
          </linearGradient>
          <linearGradient id="cubeRight1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#efe8dc" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#e5dcce" stopOpacity="0.3" />
          </linearGradient>
        </defs>

        {/* Cube 1 - mid left */}
        <g transform="translate(40, 240) scale(1.1)">
          {/* Top face */}
          <polygon points="60,10 110,35 60,60 10,35" fill="url(#cubeTop1)" stroke="#f0e6d6" strokeWidth="1" />
          {/* Left face */}
          <polygon points="10,35 60,60 60,120 10,95" fill="url(#cubeLeft1)" stroke="#ebdcc9" strokeWidth="1" />
          {/* Right face */}
          <polygon points="60,60 110,35 110,95 60,120" fill="url(#cubeRight1)" stroke="#ebdcc9" strokeWidth="1" />
        </g>

        {/* Cube 2 - bottom left */}
        <g transform="translate(90, 460) scale(1.3)">
          <polygon points="60,10 110,35 60,60 10,35" fill="url(#cubeTop1)" stroke="#f0e6d6" strokeWidth="1" />
          <polygon points="10,35 60,60 60,120 10,95" fill="url(#cubeLeft1)" stroke="#ebdcc9" strokeWidth="1" />
          <polygon points="60,60 110,35 110,95 60,120" fill="url(#cubeRight1)" stroke="#ebdcc9" strokeWidth="1" />
        </g>

        {/* Cube 3 - top left faint */}
        <g transform="translate(-10, 80) scale(0.9)" opacity="0.6">
          <polygon points="60,10 110,35 60,60 10,35" fill="url(#cubeTop1)" stroke="#f0e6d6" strokeWidth="1" />
          <polygon points="10,35 60,60 60,120 10,95" fill="url(#cubeLeft1)" stroke="#ebdcc9" strokeWidth="1" />
          <polygon points="60,60 110,35 110,95 60,120" fill="url(#cubeRight1)" stroke="#ebdcc9" strokeWidth="1" />
        </g>
      </svg>

      {/* Right side floating isometric cubes */}
      <svg className="cubes-svg right-cubes" viewBox="0 0 400 800" fill="none">
        <defs>
          <linearGradient id="cubeTop2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#fdf7f0" stopOpacity="0.5" />
          </linearGradient>
          <linearGradient id="cubeLeft2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f8f1e7" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#f0e6d6" stopOpacity="0.4" />
          </linearGradient>
          <linearGradient id="cubeRight2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f3ebe0" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#e8decb" stopOpacity="0.3" />
          </linearGradient>
        </defs>

        {/* Cube right top */}
        <g transform="translate(180, 180) scale(1.2)">
          <polygon points="60,10 110,35 60,60 10,35" fill="url(#cubeTop2)" stroke="#f0e6d6" strokeWidth="1" />
          <polygon points="10,35 60,60 60,120 10,95" fill="url(#cubeLeft2)" stroke="#ebdcc9" strokeWidth="1" />
          <polygon points="60,60 110,35 110,95 60,120" fill="url(#cubeRight2)" stroke="#ebdcc9" strokeWidth="1" />
        </g>

        {/* Cube right bottom */}
        <g transform="translate(230, 420) scale(1.4)">
          <polygon points="60,10 110,35 60,60 10,35" fill="url(#cubeTop2)" stroke="#f0e6d6" strokeWidth="1" />
          <polygon points="10,35 60,60 60,120 10,95" fill="url(#cubeLeft2)" stroke="#ebdcc9" strokeWidth="1" />
          <polygon points="60,60 110,35 110,95 60,120" fill="url(#cubeRight2)" stroke="#ebdcc9" strokeWidth="1" />
        </g>
      </svg>
    </div>
  );
}

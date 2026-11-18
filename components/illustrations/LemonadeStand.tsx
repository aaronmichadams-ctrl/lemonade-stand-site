import { hero } from "@/content/site";

const C = {
  lemon: "#ffd93b",
  lemonDeep: "#f2b705",
  lemonLine: "#c99400",
  leaf: "#3e8e41",
  leafDark: "#2b6a2f",
  wood: "#a0672f",
  woodDark: "#5c3a1e",
  woodLight: "#c98d4f",
  woodMid: "#8a5627",
  cream: "#fff8e7",
  ink: "#2b2118",
  chalk: "#2f3d35",
  chalkLine: "#e9efe6",
  glass: "#7fa6b8",
};

const STRIPE_W = 40;
const AWNING_X = 30;
const STRIPES = 11;

/** One horizontal plank with wood grain, a knot, and nails. */
function Plank({ y, h, i, x = 44, w = 412 }: { y: number; h: number; i: number; x?: number; w?: number }) {
  const fills = ["#a0672f", "#9a6029", "#a76f35"];
  const g = (dy: number, amp: number, off: number) =>
    `M${x + 6} ${y + dy} C ${x + 90 + off} ${y + dy - amp}, ${x + 170 + off} ${y + dy + amp}, ${x + 250} ${y + dy} S ${x + 360} ${y + dy - amp}, ${x + w - 6} ${y + dy}`;
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} fill={fills[i % 3]} stroke={C.woodDark} strokeWidth="2" />
      <g stroke="#6b4424" strokeWidth="1.3" fill="none" opacity="0.45" strokeLinecap="round">
        <path d={g(h * 0.3, 3, i * 12)} />
        <path d={g(h * 0.55, 2, -i * 9)} />
        <path d={g(h * 0.78, 3, i * 5)} />
      </g>
      <ellipse
        cx={x + 70 + ((i * 97) % 280)}
        cy={y + h / 2}
        rx="7"
        ry="3.5"
        fill="none"
        stroke="#6b4424"
        strokeWidth="1.5"
        opacity="0.55"
      />
      <circle cx={x + 12} cy={y + h / 2} r="2.4" fill={C.woodDark} />
      <circle cx={x + w - 12} cy={y + h / 2} r="2.4" fill={C.woodDark} />
    </g>
  );
}

/** A paper cup. (x, bottom) is the bottom-left anchor. */
function Cup({ x, bottom, w = 48, h = 46 }: { x: number; bottom: number; w?: number; h?: number }) {
  const inset = w * 0.13;
  const top = bottom - h;
  return (
    <g>
      <path
        d={`M${x} ${top} L${x + w} ${top} L${x + w - inset} ${bottom} L${x + inset} ${bottom} Z`}
        fill="#ffffff"
        stroke="#b9a98f"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d={`M${x + inset * 0.35} ${top + h * 0.35} L${x + w - inset * 0.35} ${top + h * 0.35} L${x + w - inset * 0.6} ${top + h * 0.62} L${x + inset * 0.6} ${top + h * 0.62} Z`}
        fill={C.lemon}
      />
      <rect x={x - 2} y={top - 3} width={w + 4} height="6" rx="3" fill="#ffffff" stroke="#b9a98f" strokeWidth="2" />
    </g>
  );
}

function WholeLemon({ cx, cy, r = 22, rot = 0, leaf = false }: { cx: number; cy: number; r?: number; rot?: number; leaf?: boolean }) {
  return (
    <g transform={`rotate(${rot} ${cx} ${cy})`}>
      <path
        d={`M${cx - r - 5} ${cy} Q${cx - r - 2} ${cy - 3} ${cx - r} ${cy - 3}
           C ${cx - r} ${cy - r * 0.95}, ${cx + r} ${cy - r * 0.95}, ${cx + r} ${cy - 3}
           Q${cx + r + 2} ${cy - 3} ${cx + r + 5} ${cy}
           Q${cx + r + 2} ${cy + 3} ${cx + r} ${cy + 3}
           C ${cx + r} ${cy + r * 0.95}, ${cx - r} ${cy + r * 0.95}, ${cx - r} ${cy + 3}
           Q${cx - r - 2} ${cy + 3} ${cx - r - 5} ${cy} Z`}
        fill={C.lemon}
        stroke={C.lemonLine}
        strokeWidth="2"
      />
      <ellipse cx={cx - r * 0.3} cy={cy - r * 0.35} rx={r * 0.35} ry={r * 0.14} fill="#fff6c4" opacity="0.85" />
      {leaf ? (
        <g>
          <path
            d={`M${cx + 2} ${cy - r * 0.7} c 6 -14 18 -18 30 -14 c -6 12 -18 18 -30 14 z`}
            fill={C.leaf}
            stroke={C.leafDark}
            strokeWidth="1.5"
          />
          <path d={`M${cx + 2} ${cy - r * 0.7} q 14 -6 28 -13`} stroke={C.leafDark} strokeWidth="1.2" fill="none" />
        </g>
      ) : null}
    </g>
  );
}

function Slice({ cx, cy, r }: { cx: number; cy: number; r: number }) {
  const segs = [0, 45, 90, 135];
  return (
    <g>
      <circle cx={cx} cy={cy} r={r} fill={C.lemonDeep} />
      <circle cx={cx} cy={cy} r={r * 0.86} fill={C.cream} />
      <circle cx={cx} cy={cy} r={r * 0.78} fill={C.lemon} />
      <g stroke={C.cream} strokeWidth={Math.max(1.4, r * 0.07)} strokeLinecap="round">
        {segs.map((a) => {
          const rad = (a * Math.PI) / 180;
          const rr = r * 0.78;
          return (
            <line
              key={a}
              x1={cx - rr * Math.cos(rad)}
              y1={cy - rr * Math.sin(rad)}
              x2={cx + rr * Math.cos(rad)}
              y2={cy + rr * Math.sin(rad)}
            />
          );
        })}
      </g>
      <circle cx={cx} cy={cy} r={r * 0.1} fill={C.cream} />
    </g>
  );
}

export function LemonadeStand({ className, decorative = false }: { className?: string; decorative?: boolean }) {
  const pitcherBody = "M100 150 L184 150 L193 279 Q193 286 186 286 L98 286 Q91 286 91 279 Z";
  // Lemonade surface: a repeating wave, 60 units per cycle, shifted for the slosh.
  let wave = "M20 194";
  for (let x = 20; x < 320; x += 60) wave += ` q15 -7 30 0 q15 7 30 0`;
  wave += " L320 300 L20 300 Z";

  return (
    <svg
      viewBox="0 0 640 560"
      className={className}
      role={decorative ? undefined : "img"}
      aria-label={decorative ? undefined : hero.illustrationAlt}
      aria-hidden={decorative ? true : undefined}
    >
      <defs>
        <clipPath id="ls-pitcher-clip">
          <path d={pitcherBody} />
        </clipPath>
        <linearGradient id="ls-lemonade" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ffe877" />
          <stop offset="1" stopColor="#f6bf12" />
        </linearGradient>
        <linearGradient id="ls-awning-shade" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#000" stopOpacity="0.16" />
          <stop offset="0.35" stopColor="#000" stopOpacity="0" />
        </linearGradient>
        <radialGradient id="ls-sun" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0.6" stopColor="#ffe36a" />
          <stop offset="1" stopColor="#ffe36a" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Sun */}
      <circle cx="575" cy="95" r="70" fill="url(#ls-sun)" opacity="0.7" />
      <circle cx="575" cy="95" r="38" fill={C.lemon} stroke={C.lemonLine} strokeWidth="2" />

      {/* Ground */}
      <ellipse cx="330" cy="538" rx="310" ry="16" fill={C.ink} opacity="0.12" />
      <g fill={C.leaf}>
        <path d="M14 540 q4 -18 8 0 q3 -14 7 0 q4 -20 8 0z" />
        <path d="M462 541 q4 -16 8 0 q3 -12 7 0z" />
        <path d="M600 540 q4 -18 8 0 q3 -13 7 0 q4 -16 8 0z" />
      </g>

      {/* Posts */}
      {[48, 434].map((x) => (
        <g key={x}>
          <rect x={x} y="78" width="18" height="446" fill={C.wood} stroke={C.woodDark} strokeWidth="2" />
          <path d={`M${x + 6} 90 V 510 M${x + 12} 120 V 480`} stroke="#6b4424" strokeWidth="1.2" opacity="0.5" />
        </g>
      ))}

      {/* Back rail between the posts */}
      <rect x="66" y="210" width="368" height="10" fill={C.woodMid} opacity="0.7" />

      {/* Hanging sign brackets */}
      <path d="M160 62 V 74 M340 62 V 74" stroke={C.woodDark} strokeWidth="5" strokeLinecap="round" />

      {/* Painted sign */}
      <g>
        <rect x="104" y="4" width="292" height="62" rx="10" fill={C.woodDark} />
        <rect x="110" y="9" width="280" height="52" rx="7" fill={C.cream} />
        <path
          d="M118 20 C 180 14, 320 16, 382 20 M118 52 C 200 56, 300 55, 382 50"
          stroke={C.lemonDeep}
          strokeWidth="2"
          opacity="0.5"
          fill="none"
        />
        <text
          x="250"
          y="47"
          textAnchor="middle"
          className="font-display"
          fontSize="34"
          fill={C.leafDark}
          letterSpacing="1"
        >
          {hero.signText}
        </text>
        <circle cx="122" cy="35" r="3" fill={C.woodDark} />
        <circle cx="378" cy="35" r="3" fill={C.woodDark} />
      </g>

      {/* Roof beam */}
      <rect x="26" y="70" width="448" height="16" rx="4" fill={C.woodDark} />

      {/* Awning (sways) */}
      <g className="anim-sway">
        {Array.from({ length: STRIPES }, (_, i) => {
          const x = AWNING_X + i * STRIPE_W;
          const fill = i % 2 === 0 ? C.lemon : "#ffffff";
          return (
            <g key={i}>
              <rect x={x} y="86" width={STRIPE_W} height="54" fill={fill} />
              <path d={`M${x} 139.5 a20 20 0 0 0 ${STRIPE_W} 0 Z`} fill={fill} />
              <path d={`M${x} 140 a20 20 0 0 0 ${STRIPE_W} 0`} fill="none" stroke={C.lemonLine} strokeWidth="2" />
            </g>
          );
        })}
        <rect x={AWNING_X} y="86" width={STRIPES * STRIPE_W} height="54" fill="url(#ls-awning-shade)" />
        <path d={`M${AWNING_X} 86 V 140 M${AWNING_X + STRIPES * STRIPE_W} 86 V 140`} stroke={C.lemonLine} strokeWidth="2" />
      </g>

      {/* Counter top */}
      <rect x="26" y="284" width="448" height="20" rx="3" fill={C.woodLight} stroke={C.woodDark} strokeWidth="2" />
      <path d="M34 292 C 140 289, 300 295, 466 291" stroke="#8a5627" strokeWidth="1.3" opacity="0.5" fill="none" />

      {/* Front planks */}
      {Array.from({ length: 6 }, (_, i) => (
        <Plank key={i} y={304 + i * 36} h={36} i={i} />
      ))}
      <rect x="40" y="518" width="420" height="8" rx="2" fill={C.woodDark} />

      {/* Painted lemon on the front */}
      <g opacity="0.95">
        <Slice cx={250} cy={412} r={62} />
        <path d="M244 350 c 8 -22 30 -30 50 -24 c -10 20 -30 28 -50 24 z" fill={C.leaf} stroke={C.leafDark} strokeWidth="2" />
      </g>

      {/* Pitcher */}
      <g>
        <g clipPath="url(#ls-pitcher-clip)">
          <rect x="80" y="196" width="130" height="100" fill="url(#ls-lemonade)" />
          <g className="anim-slosh">
            <path d={wave} fill="url(#ls-lemonade)" />
            <path d={wave.split(" L320")[0]} fill="none" stroke="#fff6c4" strokeWidth="2.5" />
          </g>
          <rect x="114" y="206" width="24" height="22" rx="5" fill="#ffffff" opacity="0.55" transform="rotate(-12 126 217)" />
          <rect x="148" y="222" width="22" height="20" rx="5" fill="#ffffff" opacity="0.5" transform="rotate(14 159 232)" />
          <Slice cx={130} cy={256} r={17} />
          <circle cx="170" cy="262" r="3" fill="#fff" opacity="0.7" />
          <circle cx="160" cy="276" r="2" fill="#fff" opacity="0.7" />
          <circle cx="108" cy="240" r="2.5" fill="#fff" opacity="0.7" />
        </g>
        <path d={pitcherBody} fill="#e9f6ff" fillOpacity="0.28" stroke={C.glass} strokeWidth="3.5" strokeLinejoin="round" />
        <path d="M100 150 L84 141 L94 166" fill="#e9f6ff" fillOpacity="0.35" stroke={C.glass} strokeWidth="3.5" strokeLinejoin="round" />
        <path d="M184 168 C 222 166, 224 250, 190 258" fill="none" stroke={C.glass} strokeWidth="10" strokeLinecap="round" />
        <path d="M184 168 C 222 166, 224 250, 190 258" fill="none" stroke="#e9f6ff" strokeWidth="4" strokeLinecap="round" />
        <path d="M108 162 L114 270" stroke="#ffffff" strokeWidth="5" strokeLinecap="round" opacity="0.75" />
        <path d="M98 150 H 186" stroke={C.glass} strokeWidth="4" strokeLinecap="round" />
      </g>

      {/* Cup stack */}
      {[0, 1, 2, 3].map((i) => (
        <Cup key={i} x={220} bottom={286 - i * 12} />
      ))}

      {/* A poured cup with a straw */}
      <g transform="translate(8 0)">
        <path d="M302 236 L 316 210 L 322 212" stroke={C.leaf} strokeWidth="5" strokeLinecap="round" fill="none" />
        <path d="M274 246 L 308 246 L 304 286 L 278 286 Z" fill="#ffffff" stroke="#b9a98f" strokeWidth="2" strokeLinejoin="round" />
        <ellipse cx="291" cy="247" rx="16" ry="3.5" fill="#f9cf2e" />
        <rect x="272" y="243" width="38" height="5" rx="2.5" fill="none" stroke="#b9a98f" strokeWidth="2" />
        <path d="M279 262 H 304" stroke={C.lemon} strokeWidth="7" />
      </g>

      {/* Lemons */}
      <WholeLemon cx={350} cy={268} rot={-6} />
      <WholeLemon cx={398} cy={270} rot={8} />
      <WholeLemon cx={374} cy={242} rot={-2} leaf />
      <g transform="rotate(-70 418 276)">
        <Slice cx={418} cy={276} r={11} />
      </g>

      {/* Chalkboard easel */}
      <g>
        <path d="M512 540 L 538 330 M 604 540 L 578 330" stroke={C.wood} strokeWidth="9" strokeLinecap="round" />
        <path d="M558 548 L 558 330" stroke={C.woodDark} strokeWidth="7" strokeLinecap="round" />
        <rect x="480" y="346" width="156" height="136" rx="8" fill={C.wood} stroke={C.woodDark} strokeWidth="2" />
        <rect x="490" y="356" width="136" height="116" rx="3" fill={C.chalk} />
        <path d="M498 368 C 540 362, 590 380, 616 366" stroke="#ffffff" strokeOpacity="0.06" strokeWidth="16" fill="none" />
        <g className="font-display" fill={C.chalkLine} textAnchor="middle">
          <text x="558" y="384" fontSize="16">
            {hero.chalkboard[0]}
          </text>
          <text x="558" y="406" fontSize="16">
            {hero.chalkboard[1]}
          </text>
          <text x="558" y="452" fontSize="40" fill={C.lemon}>
            {hero.chalkboard[2]}
          </text>
        </g>
        <path d="M520 460 q 38 8 76 0" stroke={C.chalkLine} strokeWidth="2" fill="none" opacity="0.7" strokeLinecap="round" />
        <rect x="514" y="482" width="88" height="6" rx="2" fill={C.woodDark} />
      </g>
    </svg>
  );
}

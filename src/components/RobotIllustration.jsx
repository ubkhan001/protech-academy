import { m, useReducedMotion, useSpring, useTransform } from "framer-motion";
import "./RobotIllustration.css";

function RobotIllustration({ scrollProgress }) {
  const shouldReduceMotion = useReducedMotion();
  const easedProgress = useSpring(scrollProgress, {
    damping: 30,
    stiffness: 180,
    mass: 0.35,
  });
  const headOpen = useTransform(
    easedProgress,
    [0, 0.01, 0.06, 0.13, 0.2],
    [0, 0.08, 0.56, 1, 1]
  );
  const headRotateX = useTransform(
    easedProgress,
    [0, 0.25, 0.5, 0.75, 1],
    [7, 2, -7, -1, 7]
  );
  const headRotateY = useTransform(
    easedProgress,
    [0, 0.25, 0.5, 0.75, 1],
    [-8, -4, 5, 8, -8]
  );
  const headRotateZ = useTransform(
    easedProgress,
    [0, 0.5, 1],
    [-2, 1.5, -2]
  );
  const skullLift = useTransform(headOpen, [0, 1], [0, -50]);
  const skullTilt = useTransform(headOpen, [0, 1], [0, -11]);
  const leftPanelShift = useTransform(headOpen, [0, 1], [0, -16]);
  const rightPanelShift = useTransform(headOpen, [0, 1], [0, 16]);
  const panelTilt = useTransform(headOpen, [0, 1], [0, 5]);
  const leftPanelTilt = useTransform(panelTilt, (value) => -value);
  const brainOpacity = useTransform(
    headOpen,
    [0, 0.22, 0.62, 1],
    [0, 0, 0.82, 1]
  );
  const brainScale = useTransform(headOpen, [0, 1], [0.86, 1]);
  const gazeX = useTransform(
    easedProgress,
    [0, 0.25, 0.5, 0.75, 1],
    [-5, -2, 3, 5, -5]
  );
  const gazeY = useTransform(easedProgress, [0, 0.5, 1], [1, -2, 1]);

  const headMotion = shouldReduceMotion
    ? { rotateX: 0, rotateY: 0, rotateZ: 0 }
    : { rotateX: headRotateX, rotateY: headRotateY, rotateZ: headRotateZ };
  const gazeMotion = shouldReduceMotion ? { x: 0, y: 0 } : { x: gazeX, y: gazeY };
  const openSkull = shouldReduceMotion
    ? { y: -50, rotateX: -11 }
    : { y: skullLift, rotateX: skullTilt };
  const leftPanelMotion = shouldReduceMotion
    ? { x: -16, rotateZ: -5 }
    : { x: leftPanelShift, rotateZ: leftPanelTilt };
  const rightPanelMotion = shouldReduceMotion
    ? { x: 16, rotateZ: 5 }
    : { x: rightPanelShift, rotateZ: panelTilt };
  const brainMotion = shouldReduceMotion
    ? { opacity: 1, scale: 1 }
    : { opacity: brainOpacity, scale: brainScale };

  return (
    <div className="ai-robot-stage">
      <div className="robot-stage-glow" aria-hidden="true" />
      <div className="robot-stage-ring robot-stage-ring-one" aria-hidden="true" />
      <div className="robot-stage-ring robot-stage-ring-two" aria-hidden="true" />

      <svg
        className="ai-robot"
        viewBox="0 0 600 640"
        role="img"
        aria-label="A futuristic ProTech Academy AI robot"
        focusable="false"
      >
        <defs>
          <linearGradient id="robot-metal" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#f1e4d5" />
            <stop offset="0.18" stopColor="#a99c90" />
            <stop offset="0.43" stopColor="#3c3937" />
            <stop offset="0.68" stopColor="#171717" />
            <stop offset="1" stopColor="#76675b" />
          </linearGradient>
          <linearGradient id="robot-highlight" x1="0" y1="0" x2="1" y2="0">
            <stop stopColor="#f8e4cf" />
            <stop offset="0.48" stopColor="#8a796b" />
            <stop offset="1" stopColor="#282522" />
          </linearGradient>
          <linearGradient id="robot-armor" x1="0" y1="0" x2="0.9" y2="1">
            <stop stopColor="#3d3935" />
            <stop offset="0.4" stopColor="#181818" />
            <stop offset="1" stopColor="#080909" />
          </linearGradient>
          <linearGradient id="robot-visor" x1="0" y1="0" x2="0" y2="1">
            <stop stopColor="#171719" />
            <stop offset="0.5" stopColor="#050607" />
            <stop offset="1" stopColor="#1d1713" />
          </linearGradient>
          <linearGradient id="robot-orange" x1="0" y1="0" x2="1" y2="1">
            <stop stopColor="#ffd09b" />
            <stop offset="0.42" stopColor="#ff9d45" />
            <stop offset="1" stopColor="#c45f19" />
          </linearGradient>
          <radialGradient id="robot-eye-glow">
            <stop stopColor="#fff2dd" />
            <stop offset="0.3" stopColor="#ffba70" />
            <stop offset="1" stopColor="#f28c28" />
          </radialGradient>
          <radialGradient id="robot-brain-core">
            <stop stopColor="#ffd39f" />
            <stop offset=".42" stopColor="#f28c28" />
            <stop offset="1" stopColor="#7f3712" />
          </radialGradient>
          <filter id="robot-soft-glow" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="7" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="robot-shadow" x="-30%" y="-30%" width="160%" height="180%">
            <feDropShadow dx="0" dy="18" stdDeviation="18" floodColor="#000" floodOpacity="0.62" />
          </filter>
        </defs>

        <ellipse
          cx="300"
          cy="586"
          rx="172"
          ry="24"
          fill="#000"
          opacity="0.42"
          filter="url(#robot-soft-glow)"
        />

        <g filter="url(#robot-shadow)">
          <path
            d="M230 398h140l18 112H212z"
            fill="url(#robot-armor)"
            stroke="#76675b"
            strokeOpacity=".55"
            strokeWidth="2"
          />
          <path
            d="M228 439h144l-7 33H235z"
            fill="#0d0e0f"
            stroke="#6a5a4b"
            strokeOpacity=".7"
            strokeWidth="2"
          />
          <path d="M266 425h68v7h-68z" fill="url(#robot-orange)" opacity=".82" />
          <path
            d="M209 443c-32 10-66 26-91 53l-35 39v57h434v-57l-35-39c-25-27-59-43-91-53l-21 67H230z"
            fill="url(#robot-armor)"
            stroke="#786b60"
            strokeOpacity=".48"
            strokeWidth="2"
          />
          <path
            d="M118 534c43-29 86-43 130-43h104c44 0 87 14 130 43"
            fill="none"
            stroke="url(#robot-highlight)"
            strokeOpacity=".54"
            strokeWidth="3"
          />
          <path
            d="M260 506h80l18 61h-116z"
            fill="#101112"
            stroke="#5c5046"
            strokeWidth="2"
          />
          <path
            d="M281 519h38v5h-38zm-10 15h58v4h-58zm9 14h40v4h-40z"
            fill="url(#robot-orange)"
            opacity=".76"
          />
          <circle cx="102" cy="560" r="5" fill="#f28c28" />
          <circle cx="498" cy="560" r="5" fill="#f28c28" />
        </g>

        <m.g
          className="robot-head"
          style={{
            ...headMotion,
            transformOrigin: "300px 285px",
          }}
        >
          <path
            d="M177 198c36-25 77-37 123-37s87 12 123 37l18 102c8 57-18 111-65 137l-76 41-76-41c-47-26-73-80-65-137z"
            fill="url(#robot-metal)"
            stroke="#e3c4a7"
            strokeOpacity=".76"
            strokeWidth="3"
          />

          <m.g className="robot-brain" style={brainMotion}>
            <path
              d="M230 174c-13-10-15-25-4-37-2-13 7-23 20-24 5-13 20-17 31-9 13-11 31-8 38 5 15-3 27 8 26 22 13 8 15 24 4 35l-10 13H242z"
              fill="#29170e"
              stroke="#d8833c"
              strokeWidth="2"
            />
            <path
              d="M238 155c8-17 19-20 28-11 5-19 19-22 28-9 9-18 23-16 28 1 12-8 23-2 23 11m-105-7c-1 12 5 18 16 19 4 12 14 15 23 8 9 10 20 9 27-1 10 7 21 3 24-8 11 0 16-8 12-17m-60-5 5 13m17-22-1 16m18-11-3 14m-38 16 8-10m21 12 2-12m20 9 3-12"
              fill="none"
              stroke="url(#robot-orange)"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M272 142c8-11 18-11 27-1l-1 17-13 9-14-9zm28-1c9-10 19-9 26 1l1 16-13 9-14-9z"
              fill="url(#robot-brain-core)"
              opacity=".92"
              filter="url(#robot-soft-glow)"
            />
            <path
              d="m287 146 8 9-9 8m16-17 8 9-9 8m-31-21 8 7-7 9m40-15-7 8 8 7"
              fill="none"
              stroke="#ffe2bd"
              strokeWidth="1.6"
              strokeLinecap="round"
              opacity=".88"
            />
            <circle cx="242" cy="143" r="3" fill="#ffc17e" filter="url(#robot-soft-glow)" />
            <circle cx="272" cy="126" r="3" fill="#ffc17e" filter="url(#robot-soft-glow)" />
            <circle cx="300" cy="119" r="3.5" fill="#fff0d7" filter="url(#robot-soft-glow)" />
            <circle cx="329" cy="128" r="3" fill="#ffc17e" filter="url(#robot-soft-glow)" />
            <circle cx="356" cy="148" r="3" fill="#ffc17e" filter="url(#robot-soft-glow)" />
            <circle cx="260" cy="171" r="2.5" fill="#ffc17e" />
            <circle cx="341" cy="170" r="2.5" fill="#ffc17e" />
          </m.g>

          <m.g className="robot-skull-upper" style={openSkull}>
            <path
              d="M177 201v-20C184 111 231 65 300 59c69 6 116 52 123 122v20c-38-25-78-37-123-37s-85 12-123 37z"
              fill="url(#robot-metal)"
              stroke="#e3c4a7"
              strokeOpacity=".82"
              strokeWidth="3"
            />
            <path
              d="M186 183c10-62 49-97 114-105 65 8 104 43 114 105l-19-13c-27-21-59-31-95-31s-68 10-95 31z"
              fill="url(#robot-highlight)"
              opacity=".78"
            />
            <path
              d="M198 152c27-29 61-43 102-43s75 14 102 43"
              fill="none"
              stroke="#f5dfc7"
              strokeOpacity=".68"
              strokeWidth="3"
            />
            <path
              d="M210 166h180l-8 21H218z"
              fill="#242222"
              stroke="#c89b74"
              strokeOpacity=".75"
              strokeWidth="2"
            />
            <path d="M280 168h40l-6 5h-28z" fill="url(#robot-orange)" />
            <path d="M231 119h35m68 0h35" stroke="#6d5a4a" strokeWidth="2" />
            <circle cx="300" cy="71" r="7" fill="url(#robot-orange)" />
            <circle cx="300" cy="71" r="13" fill="none" stroke="#f28c28" strokeOpacity=".5" />
            <path
              d="M300 78v20"
              stroke="#f28c28"
              strokeWidth="4"
              strokeLinecap="round"
              filter="url(#robot-soft-glow)"
            />
          </m.g>

          <path
            d="M168 214c-19 20-24 65-15 102l35 13-2-108z"
            fill="url(#robot-armor)"
            stroke="#c29c7c"
            strokeWidth="2"
            opacity=".75"
          />
          <path
            d="M432 214c19 20 24 65 15 102l-35 13 2-108z"
            fill="url(#robot-armor)"
            stroke="#c29c7c"
            strokeWidth="2"
            opacity=".75"
          />

          <m.g
            className="robot-side-panel robot-side-panel-left"
            style={{
              ...(shouldReduceMotion ? { x: -16, rotateZ: -5 } : leftPanelMotion),
              transformOrigin: "170px 265px",
            }}
          >
            <path
              d="M170 224c-25 8-37 27-33 52 3 21 18 36 41 40l4-89z"
              fill="url(#robot-armor)"
              stroke="#c29c7c"
              strokeWidth="3"
            />
            <rect x="144" y="247" width="20" height="18" rx="8" fill="url(#robot-orange)" />
            <path d="M186 252h12v44h-12z" fill="url(#robot-highlight)" opacity=".56" />
          </m.g>
          <m.g
            className="robot-side-panel robot-side-panel-right"
            style={{
              ...(shouldReduceMotion ? { x: 16, rotateZ: 5 } : rightPanelMotion),
              transformOrigin: "430px 265px",
            }}
          >
            <path
              d="M430 224c25 8 37 27 33 52-3 21-18 36-41 40l-4-89z"
              fill="url(#robot-armor)"
              stroke="#c29c7c"
              strokeWidth="3"
            />
            <rect x="436" y="247" width="20" height="18" rx="8" fill="url(#robot-orange)" />
            <path d="M402 252h12v44h-12z" fill="url(#robot-highlight)" opacity=".56" />
          </m.g>

          <path
            d="M194 201c26-20 61-31 106-31s80 11 106 31l-5 107c-3 55-43 98-101 112-58-14-98-57-101-112z"
            fill="url(#robot-armor)"
            stroke="#8e7966"
            strokeOpacity=".82"
            strokeWidth="2"
          />
          <path
            d="M204 218c25-17 57-26 96-26s71 9 96 26v70c0 47-35 84-96 100-61-16-96-53-96-100z"
            fill="url(#robot-visor)"
            stroke="#c18a5c"
            strokeOpacity=".6"
            strokeWidth="2"
          />
          <path d="M214 226c20-13 45-21 74-24" fill="none" stroke="#f7dfc5" strokeOpacity=".42" strokeWidth="3" />
          <path d="M386 226c-20-13-45-21-74-24" fill="none" stroke="#f7dfc5" strokeOpacity=".2" strokeWidth="3" />

          <path
            d="M226 251c17-17 41-20 63-8l-5 31c-18 15-40 15-58 0z"
            fill="#231a14"
            stroke="#a37a59"
            strokeWidth="2"
          />
          <path
            d="M311 243c22-12 46-9 63 8l-1 23c-18 15-40 15-58 0z"
            fill="#231a14"
            stroke="#a37a59"
            strokeWidth="2"
          />
          <m.g style={gazeMotion} filter="url(#robot-soft-glow)">
            <path d="M231 265c15-13 34-14 50-4l-2 8c-15 10-32 10-47 0z" fill="url(#robot-eye-glow)" />
            <path d="M319 261c16-10 35-9 50 4l-1 4c-15 10-32 10-47 0z" fill="url(#robot-eye-glow)" />
          </m.g>
          <circle cx="270" cy="267" r="3" fill="#fff7ea" />
          <circle cx="330" cy="267" r="3" fill="#fff7ea" />

          <path
            d="M287 278h26l11 44-24 19-24-19z"
            fill="url(#robot-metal)"
            stroke="#a78060"
            strokeWidth="2"
          />
          <path d="M294 302h12l5 15-11 9-11-9z" fill="#121212" stroke="#d18a4d" strokeWidth="2" />
          <path d="M300 327v13" stroke="#f4a35d" strokeWidth="3" strokeLinecap="round" />

          <path
            d="M253 357c13-9 29-13 47-13s34 4 47 13l-9 25c-12 9-24 13-38 13s-26-4-38-13z"
            fill="#101112"
            stroke="#b4825e"
            strokeWidth="2"
          />
          <path d="M271 362h58m-53 8h48m-41 8h34" stroke="url(#robot-orange)" strokeWidth="3" strokeLinecap="round" />

          <path d="M202 296h12v32h-12zm184 0h12v32h-12z" fill="url(#robot-highlight)" opacity=".78" />
          <path d="M218 326l-10 31 21 18m153-49 10 31-21 18" fill="none" stroke="#d5b18f" strokeOpacity=".66" strokeWidth="3" />
          <circle cx="229" cy="346" r="4" fill="url(#robot-orange)" />
          <circle cx="371" cy="346" r="4" fill="url(#robot-orange)" />
        </m.g>
      </svg>

      <div className="robot-status" aria-hidden="true">
        <span />
        PROTECH AI · ONLINE
      </div>
    </div>
  );
}

export default RobotIllustration;

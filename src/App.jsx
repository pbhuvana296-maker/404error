import React, { useState, useEffect } from "react";
import "./App.css";

function Computer() {
  return (
    <g className="computer">
      {/* Monitor */}
      <rect x="70" y="210" width="130" height="100" rx="7"
        fill="#eee9df" stroke="#26364a" strokeWidth="4" />

      <rect x="79" y="219" width="112" height="78" rx="4"
        fill="#b9e6ee" />

      {/* Screen mountains */}
      <path d="M86 284 L110 248 L132 273 L148 253 L183 284 Z"
        fill="#639b98" />

      <circle cx="164" cy="237" r="8" fill="#fff9d9" />

      {/* Monitor stand */}
      <path d="M119 310 L119 324 L99 324 L99 330 L170 330 L170 324 L150 324 L150 310"
        fill="#313b5a" stroke="#26364a" strokeWidth="3" />

      {/* Base */}
      <rect x="87" y="330" width="95" height="8" rx="3"
        fill="#313b5a" stroke="#26364a" strokeWidth="2" />

      <text x="135" y="355" textAnchor="middle"
        fill="#26364a" fontSize="10" fontWeight="bold">
        COMPUTER
      </text>
    </g>
  );
}

function Server() {
  return (
    <g className="server">
      <rect x="600" y="150" width="105" height="190" rx="8"
        fill="#39315e" stroke="#272744" strokeWidth="4" />

      {[165, 220, 275].map((y, index) => (
        <g key={index}>
          <rect x="610" y={y} width="85" height="43" rx="5"
            fill="#292542" stroke="#514775" strokeWidth="2" />

          <circle cx="623" cy={y + 14} r="4" fill="#b69aff" />

          <circle cx="623" cy={y + 28} r="4" fill="#b69aff" />

          <rect x="635" y={y + 12} width="43" height="5" rx="2.5"
            fill="#6b5b9e" />
        </g>
      ))}

      <text x="652" y="362" textAnchor="middle"
        fill="#39315e" fontSize="10" fontWeight="bold">
        SERVER
      </text>
    </g>
  );
}

function Monkey() {
  return (
    <g className="monkey">
      {/* Tail */}
      <path
        d="M360 270 C325 250 325 300 350 292"
        fill="none"
        stroke="#9a6745"
        strokeWidth="10"
        strokeLinecap="round"
      />

      {/* Legs */}
      <path d="M405 310 Q380 330 365 313"
        fill="none" stroke="#8b5b3c" strokeWidth="18"
        strokeLinecap="round" />

      <path d="M435 310 Q460 330 475 313"
        fill="none" stroke="#8b5b3c" strokeWidth="18"
        strokeLinecap="round" />

      {/* Feet */}
      <ellipse cx="364" cy="315" rx="19" ry="10"
        fill="#e9b78b" stroke="#70462f" strokeWidth="3" />

      <ellipse cx="476" cy="315" rx="19" ry="10"
        fill="#e9b78b" stroke="#70462f" strokeWidth="3" />

      {/* Body */}
      <path d="M385 239 Q420 225 455 239 L465 293 Q420 309 375 293 Z"
        fill="#a66e47" stroke="#70462f" strokeWidth="3" />

      {/* Cream shirt */}
      <path d="M392 239 Q420 247 448 239 L455 286 Q420 296 385 286 Z"
        fill="#f2dfb5" stroke="#c5af83" strokeWidth="2" />

      {/* Shirt collar */}
      <path d="M404 239 L420 252 L436 239"
        fill="none" stroke="#c5af83" strokeWidth="3" />

      {/* Arms */}
      <path d="M389 248 Q365 250 365 275"
        fill="none" stroke="#a66e47" strokeWidth="15"
        strokeLinecap="round" />

      <path d="M451 248 Q475 250 475 275"
        fill="none" stroke="#a66e47" strokeWidth="15"
        strokeLinecap="round" />

      {/* Hands */}
      <circle cx="365" cy="278" r="10"
        fill="#e9b78b" stroke="#70462f" strokeWidth="2" />

      <circle cx="475" cy="278" r="10"
        fill="#e9b78b" stroke="#70462f" strokeWidth="2" />

      {/* Ears */}
      <circle cx="380" cy="196" r="17"
        fill="#a66e47" stroke="#70462f" strokeWidth="3" />

      <circle cx="460" cy="196" r="17"
        fill="#a66e47" stroke="#70462f" strokeWidth="3" />

      <circle cx="380" cy="196" r="8" fill="#e9b78b" />
      <circle cx="460" cy="196" r="8" fill="#e9b78b" />

      {/* Head */}
      <ellipse cx="420" cy="200" rx="43" ry="49"
        fill="#a66e47" stroke="#70462f" strokeWidth="3" />

      {/* Face */}
      <ellipse cx="420" cy="213" rx="31" ry="28"
        fill="#e9b78b" />

      {/* Hair */}
      <path d="M382 190 Q378 156 408 155 Q437 145 457 171 L458 190
        Q444 175 433 177 L419 183 L410 175 L399 187 Z"
        fill="#70462f" />

      {/* Eyes */}
      <ellipse className="monkey-eye" cx="407" cy="204" rx="4" ry="6"
        fill="#29212a" />

      <ellipse className="monkey-eye" cx="434" cy="204" rx="4" ry="6"
        fill="#29212a" />

      {/* Nose */}
      <ellipse cx="420" cy="216" rx="5" ry="4"
        fill="#9a6745" />

      {/* Mouth */}
      <path className="monkey-mouth"
        d="M410 226 Q420 234 430 226"
        fill="none" stroke="#70462f" strokeWidth="3"
        strokeLinecap="round" />

      {/* Shock sparks */}
      <g className="shock-sparks">
        <path d="M369 166 L359 180 L370 180 L360 194"
          fill="none" stroke="#00bfff" strokeWidth="4"
          strokeLinejoin="round" />

        <path d="M465 160 L455 174 L466 174 L456 188"
          fill="none" stroke="#00bfff" strokeWidth="4"
          strokeLinejoin="round" />

        <path d="M416 143 L408 155 L418 155 L412 165"
          fill="none" stroke="#ffd84d" strokeWidth="4"
          strokeLinejoin="round" />

        <path d="M483 219 L474 228 L484 230 L476 240"
          fill="none" stroke="#00bfff" strokeWidth="4"
          strokeLinejoin="round" />

          {/* SCREAMING MOUTH */}
<ellipse
  className="scream-mouth"
  cx="420"
  cy="227"
  rx="10"
  ry="13"
  fill="#29212a"
  stroke="#70462f"
  strokeWidth="2"
/>

<ellipse
  className="scream-tongue"
  cx="420"
  cy="234"
  rx="5"
  ry="3"
  fill="#ff7777"
/>

{/* X-RAY SKELETON */}
<g className="xray-skeleton">

  {/* Skull */}
  <ellipse
    cx="420"
    cy="199"
    rx="23"
    ry="27"
    fill="#ffffff"
    stroke="#111111"
    strokeWidth="3"
  />

  {/* Eye sockets */}
  <ellipse cx="411" cy="197" rx="6" ry="8" fill="#111111" />
  <ellipse cx="429" cy="197" rx="6" ry="8" fill="#111111" />

  {/* Nose */}
  <path
    d="M420 202 L416 209 L424 209 Z"
    fill="#111111"
  />

  {/* Teeth */}
  <path
    d="M408 216 L432 216 L429 222 L411 222 Z"
    fill="#111111"
  />

  {/* Spine */}
  <path
    d="M420 228 L420 279"
    stroke="#ffffff"
    strokeWidth="7"
    strokeLinecap="round"
  />

  <path
    d="M420 228 L420 279"
    stroke="#111111"
    strokeWidth="2"
    strokeLinecap="round"
    strokeDasharray="3 4"
  />

  {/* Rib cage */}
  {[238, 246, 254, 262, 270].map((y, i) => (
    <g key={i}>
      <path
        d={`M420 ${y} Q${397 - i} ${y - 8} ${397 - i} ${y + 2}`}
        fill="none"
        stroke="#111111"
        strokeWidth="3"
        strokeLinecap="round"
      />

      <path
        d={`M420 ${y} Q${443 + i} ${y - 8} ${443 + i} ${y + 2}`}
        fill="none"
        stroke="#111111"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </g>
  ))}

  {/* Left arm bones */}
  <path
    d="M390 244 L376 259 L365 276"
    fill="none"
    stroke="#ffffff"
    strokeWidth="8"
    strokeLinecap="round"
  />

  <path
    d="M390 244 L376 259 L365 276"
    fill="none"
    stroke="#111111"
    strokeWidth="2"
    strokeLinecap="round"
  />

  {/* Right arm bones */}
  <path
    d="M450 244 L464 259 L475 276"
    fill="none"
    stroke="#ffffff"
    strokeWidth="8"
    strokeLinecap="round"
  />

  <path
    d="M450 244 L464 259 L475 276"
    fill="none"
    stroke="#111111"
    strokeWidth="2"
    strokeLinecap="round"
  />

  {/* Pelvis */}
  <path
    d="M398 281 Q420 293 442 281"
    fill="none"
    stroke="#ffffff"
    strokeWidth="9"
    strokeLinecap="round"
  />

  <path
    d="M398 281 Q420 293 442 281"
    fill="none"
    stroke="#111111"
    strokeWidth="3"
    strokeLinecap="round"
  />

  {/* Left leg bones */}
  <path
    d="M403 289 L384 303 L365 315"
    fill="none"
    stroke="#ffffff"
    strokeWidth="8"
    strokeLinecap="round"
  />

  <path
    d="M403 289 L384 303 L365 315"
    fill="none"
    stroke="#111111"
    strokeWidth="2"
    strokeLinecap="round"
  />

  {/* Right leg bones */}
  <path
    d="M437 289 L456 303 L475 315"
    fill="none"
    stroke="#ffffff"
    strokeWidth="8"
    strokeLinecap="round"
  />

  <path
    d="M437 289 L456 303 L475 315"
    fill="none"
    stroke="#111111"
    strokeWidth="2"
    strokeLinecap="round"
  />

</g>
      </g>
    </g>
  );
}

function App() {
  const [phase, setPhase] = useState("connect");

  useEffect(() => {
    const sequence = [
      { name: "connect", duration: 1400 },
      { name: "current", duration: 2400 },
      { name: "shock", duration: 1700 },
      { name: "disconnect", duration: 1400 },
      { name: "rest", duration: 1200 },
    ];

    let index = 0;
    let timer;

    const nextPhase = () => {
      setPhase(sequence[index].name);

      timer = setTimeout(() => {
        index = (index + 1) % sequence.length;
        nextPhase();
      }, sequence[index].duration);
    };

    nextPhase();

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className={`error-page phase-${phase}`}>
      <section className="error-card">

        {/* 404 Heading */}
        <header className="error-heading">
          <h1>404</h1>
          <p>ERROR</p>
        </header>

        {/* Animated SVG Scene */}
        <div className="scene-wrapper">
          <svg
            className="error-scene"
            viewBox="0 0 760 390"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="A monkey in a cream shirt gets an electric shock between a computer and a server."
          >
            {/* Ground */}
            <path
              d="M40 340 Q380 330 720 340 L720 355 L40 355 Z"
              fill="#65a54e"
              stroke="#344e35"
              strokeWidth="3"
            />

            {/* Wire base */}
            <g className="wire-system">
              <path
                className="wire wire-left"
                d="M200 275 C250 275 280 320 330 290 L365 278"
              />

              <path
                className="wire wire-right"
                d="M475 278 L510 290 C545 310 570 275 600 275"
              />

              {/* Moving current on the wires */}
              <path
                className="current current-left"
                d="M200 275 C250 275 280 320 330 290 L365 278"
              />

              <path
                className="current current-right"
                d="M475 278 L510 290 C545 310 570 275 600 275"
              />

              {/* Wire ends */}
              <circle className="wire-end left-end"
                cx="365" cy="278" r="5" />

              <circle className="wire-end right-end"
                cx="475" cy="278" r="5" />
            </g>

            {/* Computer */}
            <Computer />

            {/* Server */}
            <Server />

            {/* Monkey */}
            <Monkey />

            {/* Current sparks around connection */}
            <g className="connection-sparks">
              <path d="M351 262 L344 272 L353 273 L346 284"
                fill="none" stroke="#00c8ff" strokeWidth="4" />

              <path d="M488 262 L481 272 L490 273 L483 284"
                fill="none" stroke="#00c8ff" strokeWidth="4" />
            </g>

            {/* Disconnect sparks */}
            <g className="disconnect-sparks">
              <path d="M345 263 L354 272 L345 280"
                fill="none" stroke="#ff9c35" strokeWidth="4" />

              <path d="M495 263 L486 272 L495 280"
                fill="none" stroke="#ff9c35" strokeWidth="4" />
            </g>
          </svg>
        </div>

        {/* Animation Status */}
        <div className="animation-status" aria-live="polite">
          {phase === "connect" && (
            <span className="status-connect">
              Connecting wires...
            </span>
          )}

          {phase === "current" && (
            <span className="status-current">
              ⚡ Current is flowing!
            </span>
          )}

          {phase === "shock" && (
            <span className="status-shock">
              ⚡ Oops! Electric shock!
            </span>
          )}

          {phase === "disconnect" && (
            <span className="status-disconnect">
              Wires disconnected!
            </span>
          )}

          {phase === "rest" && (
            <span className="status-rest">
              Connection lost...
            </span>
          )}
        </div>

        {/* Error Content */}
        <div className="error-content">
          <h2>Looks like you're lost!</h2>
          <p>The page you are looking for is not available.</p>

          <button
            className="home-button"
            onClick={() => {
              window.location.href = "/";
            }}
          >
            Go to Home <span>→</span>
          </button>
        </div>

      </section>
    </main>
  );
}

export default App;
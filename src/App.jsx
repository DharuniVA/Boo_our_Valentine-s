import { useMemo, useState } from 'react';

const warnings = [
  'Hey handsome, click yes 😘',
  'Click yes for lifetime happiness 💍✨',
  'Choose wisely, my love 👀💖',
  'No is temporarily unavailable, darling 😌',
  'Your heart already said yes 💘',
  'Don’t run from destiny, my duke 💌',
  'One little yes, one beautiful forever 🕊️',
  'Be brave... click YES, sweetheart 🌹'
];

const letter = `Hi boo,

Thank you so much for being in my life and for choosing me 😉
Our first Valentine’s Day feels incredibly special because it’s with you.

I honestly have no words—because even when you are mine, I still admire you every single day.
Every little action of yours, even the simplest ones, makes me fall for you more and more.

You taught me self-confidence.
You taught me self-love.
Through you, I learned how beautiful it is to love myself, and because of that, loving you feels even deeper and more meaningful.

My heart chose you quietly, deeply, and without hesitation—like it always knew you were meant for me.
Even on my hardest days, your love feels like a gentle reassurance that I am never alone.
I didn’t just fall in love with you; I grew into love with you, slowly, deeply, and beautifully.

With you, I feel safe, seen, and understood.
You make my ordinary days brighter and my heart calmer.
Your presence itself feels like home.

Thank you for your patience, your kindness, your laughter, and the way you care without even trying.
I’m grateful for you—not just today, but every single day.

Happy Valentine’s Day to the one who holds my heart 🤍

By your piggy 🐷💗`;

function App() {
  const [stage, setStage] = useState(1);
  const [warning, setWarning] = useState('');
  const [moves, setMoves] = useState(0);
  const [noPos, setNoPos] = useState({ top: '62%', left: '56%' });

  const butterflies = useMemo(
    () =>
      Array.from({ length: 18 }, (_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        delay: `${Math.random() * 4}s`,
        duration: `${7 + Math.random() * 6}s`,
        size: `${18 + Math.random() * 20}px`
      })),
    []
  );

  const handleNo = () => {
    const top = Math.min(84, Math.max(8, Math.random() * 88));
    const left = Math.min(84, Math.max(8, Math.random() * 88));
    setNoPos({ top: `${top}%`, left: `${left}%` });
    setWarning(warnings[moves % warnings.length]);
    setMoves((m) => m + 1);
  };

  if (stage === 1) {
    return (
      <main className="screen intro-screen">
        <div className="overlay-card">
          <h1>A Letter for My Dearest 💌</h1>
          <p>Step into our little Bridgerton-inspired love story.</p>
          <button className="btn royal" onClick={() => setStage(2)}>
            way to life
          </button>
        </div>
      </main>
    );
  }

  if (stage === 2) {
    return (
      <main className="screen question-screen">
        <div className="question-panel">
          <h2>Will you be my Valentine? 💖🌙</h2>
          <p className="subtitle">Choose with your heart, my handsome gentleman.</p>
          <div className="actions">
            <button className="btn yes" onClick={() => setStage(3)}>
              Yes 🥰
            </button>
            <button
              className="btn no"
              onMouseEnter={handleNo}
              onClick={handleNo}
              style={{ top: noPos.top, left: noPos.left }}
            >
              No 🙈
            </button>
          </div>
          {warning && <p className="warning">{warning}</p>}
        </div>
      </main>
    );
  }

  return (
    <main className="screen letter-screen">
      <div className="butterfly-field" aria-hidden="true">
        {butterflies.map((b) => (
          <span
            key={b.id}
            className="butterfly"
            style={{
              left: b.left,
              animationDelay: b.delay,
              animationDuration: b.duration,
              fontSize: b.size
            }}
          >
            🦋
          </span>
        ))}
      </div>

      <div className="decor decor-left">🎀🌸🌷</div>
      <div className="decor decor-right">🌹🎀🪻</div>
      <article className="letter-card">
        <h2>To My Forever Valentine</h2>
        <pre>{letter}</pre>
      </article>
    </main>
  );
}

export default App;

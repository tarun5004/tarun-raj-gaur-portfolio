'use client';

import { useState } from 'react';

const outcomes = {
  ALLOW: { label: 'ALLOW', description: 'The approved prompt continues to the provider path.', steps: ['Authentication', 'Trusted tenant scope', 'Policy decision', 'Provider stream', 'Audit record'] },
  MASK: { label: 'ALLOW_WITH_MASK', description: 'Only the sanitized prompt crosses the provider boundary.', steps: ['Authentication', 'PII detection', 'Mask sensitive spans', 'Provider stream', 'Audit record'] },
  BLOCK: { label: 'BLOCK', description: 'The request stops before provider execution; zero provider calls are made.', steps: ['Authentication', 'Risk scoring', 'Policy decision', 'No provider call', 'Audit record'] },
};

export function SystemTrace() {
  const [outcome, setOutcome] = useState<keyof typeof outcomes>('MASK');
  const current = outcomes[outcome];
  return <section className="system-lab" aria-label="Interactive governed request trace"><div className="system-lab-copy"><p className="eyebrow">Interactive system lab</p><h2>See where an AI request earns the right to continue.</h2><p>Click a policy outcome. The trace changes because the boundary changes.</p><div className="trace-tabs">{(Object.keys(outcomes) as Array<keyof typeof outcomes>).map((key) => <button className={outcome === key ? 'active' : ''} key={key} onClick={() => setOutcome(key)}>{outcomes[key].label}</button>)}</div></div><div className="trace-panel"><div className={`trace-state trace-${outcome.toLowerCase()}`}><span>REQUEST OUTCOME</span><strong>{current.label}</strong><p>{current.description}</p></div><ol>{current.steps.map((step, index) => <li key={step}><span>0{index + 1}</span><strong>{step}</strong>{index < current.steps.length - 1 ? <i /> : null}</li>)}</ol></div></section>;
}
import React, {useState} from 'react';

type Props = { title: string; items: string[] };

export default function Checklist({title, items}: Props) {
  const [checked, setChecked] = useState<Record<number, boolean>>({});
  const done = Object.values(checked).filter(Boolean).length;
  return (
    <div className="quizBox">
      <h3>{title}</h3>
      <p className="smallMuted">{done}/{items.length} completed</p>
      {items.map((item, index) => (
        <label key={item} style={{display: 'block', margin: '.55rem 0'}}>
          <input type="checkbox" checked={Boolean(checked[index])} onChange={() => setChecked({...checked, [index]: !checked[index]})} /> {item}
        </label>
      ))}
    </div>
  );
}

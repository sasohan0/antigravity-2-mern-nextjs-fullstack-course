import React, {useMemo, useState} from 'react';
import {quizzes} from '../data/quizzes';

type Props = { moduleId: string };

export default function Quiz({moduleId}: Props) {
  const questions = quizzes[moduleId] || [];
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const score = useMemo(() => questions.reduce((total, q, index) => total + (answers[index] === q.answer ? 1 : 0), 0), [answers, questions]);

  if (!questions.length) return <div className="quizBox">Quiz is being prepared for this module.</div>;

  return (
    <div className="quizBox">
      <h3>Interactive Quiz</h3>
      <p><strong>Score:</strong> {score}/{questions.length}</p>
      {questions.map((q, index) => (
        <div key={q.id} style={{marginBottom: '1.5rem'}}>
          <p><strong>{index + 1}. {q.question}</strong></p>
          {q.options.map((option) => {
            const selected = answers[index] === option;
            const isCorrect = q.answer === option;
            let className = 'quizOption';
            if (selected && isCorrect) className += ' quizOptionCorrect';
            if (selected && !isCorrect) className += ' quizOptionWrong';
            return <button key={option} className={className} onClick={() => setAnswers({...answers, [index]: option})}>{option}</button>;
          })}
          {answers[index] && <p>{answers[index] === q.answer ? '✅ Correct.' : `❌ Correct answer: ${q.answer}.`} {q.explanation}</p>}
        </div>
      ))}
    </div>
  );
}

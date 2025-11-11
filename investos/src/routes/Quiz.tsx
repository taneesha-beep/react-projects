import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { QUESTIONS } from "../data/questions";
import { useLocalState } from "../lib/useLocalState";
import ProgressBar from "../components/ProgressBar";
import QuestionCard from "../components/QuestionCard";

export default function Quiz() {
  const navigate = useNavigate();
  const [idx, setIdx] = useState(0);
  const [answers, setAnswers] = useLocalState<number[]>(
    "mv-answers",
    Array(QUESTIONS.length).fill(-1)
  );
  const q = QUESTIONS[idx];

  function choose(i: number) {
    const next = [...answers];
    next[idx] = i;
    setAnswers(next);
    if (idx === QUESTIONS.length - 1) {
      navigate("/result");
    } else {
      setIdx(idx + 1);
    }
  }

  function back() {
    if (idx > 0) setIdx(idx - 1);
  }

  return (
    <div className="max-w-3xl mx-auto">
      <div className="mb-4">
        <ProgressBar value={Math.round((idx / QUESTIONS.length) * 100)} />
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={q.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
        >
          <QuestionCard
            q={q}
            idx={idx}
            onChoose={choose}
            onBack={back}
            selected={answers[idx]}
            total={QUESTIONS.length}
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

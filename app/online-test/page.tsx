'use client'

import React, { useEffect, useState } from 'react'
import { useLanguage } from '../../components/LanguageProvider'

const questions = [
  { q: 'What does CCC stand for?', options: ['Course on Computer Concepts', 'Computer Coding Course', 'Central Computer Certificate'], answer: 0 },
  { q: 'Minimum typing speed for GCC-TBC English?', options: ['20 WPM', '30 WPM', '50 WPM'], answer: 1 },
  { q: 'Tally Prime is used for?', options: ['Accounting', 'Typing', 'Shorthand'], answer: 0 },
]

export default function OnlineTestPage() {
  const { t } = useLanguage()
  const [answers, setAnswers] = useState<Record<number, number>>({})
  const [score, setScore] = useState<number | null>(null)
  const [testState, setTestState] = useState<'idle' | 'running' | 'finished'>('idle')
  const [timeLeft, setTimeLeft] = useState(60)
  const [typedText, setTypedText] = useState('')
  const [result, setResult] = useState<{
    wpm: number
    cpm: number
    accuracy: number
    correctChars: number
    incorrectChars: number
    correctWords: number
    incorrectWords: number
  } | null>(null)

  const typingParagraph =
    `${t('lakshdipComputerInstitute')} helps students learn typing with real exam practice. Type the paragraph quickly and accurately to measure your speed and accuracy in one minute. This typing challenge will help you build confidence for exams, office work, and fast text entry on the computer. Keep your fingers moving, focus on each word, and complete the paragraph without mistakes to improve your WPM.`

  function submit(e: React.FormEvent) {
    e.preventDefault()
    let s = 0
    questions.forEach((q, i) => { if (answers[i] === q.answer) s++ })
    setScore(s)
  }

  useEffect(() => {
    if (testState !== 'running') return
    if (timeLeft <= 0) {
      finishTypingTest()
      return
    }

    const timer = window.setTimeout(() => setTimeLeft((value) => value - 1), 1000)
    return () => window.clearTimeout(timer)
  }, [testState, timeLeft])

  function finishTypingTest() {
    if (testState !== 'running') return
    const typed = typedText.trim()
    const typedWords = typed.split(/\s+/).filter(Boolean)
    const paragraphWords = typingParagraph.split(/\s+/)
    const correctWords = typedWords.reduce((count, word, index) => count + ((paragraphWords[index] || '') === word ? 1 : 0), 0)

    const correctChars = typedText.split('').reduce((count, char, index) => (
      count + ((typingParagraph[index] || '') === char ? 1 : 0)
    ), 0)
    const incorrectChars = Math.max(0, typedText.length - correctChars)
    const accuracy = typedText.length > 0 ? Math.round((correctChars / typedText.length) * 100) : 0

    setResult({
      wpm: Math.max(0, correctWords),
      cpm: Math.max(0, correctChars),
      accuracy,
      correctChars,
      incorrectChars,
      correctWords,
      incorrectWords: Math.max(0, typedWords.length - correctWords),
    })
    setTestState('finished')
  }

  function startTypingTest() {
    setTypedText('')
    setTimeLeft(60)
    setResult(null)
    setTestState('running')
  }

  function resetTypingTest() {
    setTypedText('')
    setTimeLeft(60)
    setResult(null)
    setTestState('idle')
  }

  return (
    <div className="container page-shell">
      <div className="page-card mx-auto max-w-5xl p-6 md:p-8">
        <p className="section-kicker">Practice Quiz & Typing Test</p>
        <h1 className="section-title mt-2">Online Test</h1>
        <p className="section-copy mt-3">Practice quiz - Computer & Typing basics. Start a one-minute typing speed test and check your results immediately.</p>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
            <p className="section-kicker">Multiple Choice Quiz</p>
            <div className="space-y-5 mt-6">
              {questions.map((q, i) => (
                <div key={q.q} className="rounded-3xl border border-slate-200 bg-white p-5">
                  <p className="font-black text-gray-800">{i + 1}. {q.q}</p>
                  <div className="mt-3 grid gap-2">
                    {q.options.map((opt, j) => (
                      <label key={opt} className="flex cursor-pointer items-center gap-3 rounded-2xl bg-slate-100 px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-200">
                        <input
                          type="radio"
                          name={`q${i}`}
                          checked={answers[i] === j}
                          onChange={() => setAnswers({ ...answers, [i]: j })}
                        />
                        {opt}
                      </label>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <button type="button" onClick={submit} className="btn-primary mt-6 px-7 py-3 text-sm">
              Submit Test
            </button>
            {score !== null && (
              <div className="mt-4 rounded-2xl bg-blue-50 p-4 text-center font-black text-primary">
                Your Score: {score} / {questions.length}
              </div>
            )}
          </div>

          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
            <p className="section-kicker">Typing Speed Test</p>
            <h2 className="section-title mt-2 text-xl">1-Minute Typing Challenge</h2>
            <p className="section-copy mt-3">Click Start to begin the one-minute typing test. Type the paragraph below as fast and accurately as you can.</p>

            {testState === 'idle' && (
              <button type="button" onClick={startTypingTest} className="btn-primary mt-6 px-7 py-3 text-sm">
                Start Typing Test
              </button>
            )}

            {(testState === 'running' || testState === 'finished') && (
              <div className="mt-6 space-y-4">
                <div className="rounded-3xl border border-slate-200 bg-white p-5 text-base md:text-lg leading-8 text-slate-700 shadow-sm">
                  <div className="whitespace-pre-wrap break-words">
                    {typingParagraph.split('').map((char, index) => {
                      const typedChar = typedText[index]
                      const isTyped = index < typedText.length
                      const isCorrect = isTyped && typedChar === char
                      const isCurrent = index === typedText.length && testState === 'running'

                      return (
                        <span
                          key={`${char}-${index}`}
                          className={`inline-block ${isCorrect ? 'text-emerald-700' : isTyped ? 'text-danger bg-danger/10' : 'text-slate-700'} ${isCurrent ? 'border-b-2 border-primary' : ''}`}
                        >
                          {char}
                        </span>
                      )
                    })}
                  </div>
                </div>
                <div className="flex flex-wrap items-center justify-between gap-3 text-sm font-semibold text-slate-700">
                  <span>Time left: <span className={timeLeft <= 10 ? 'text-danger' : 'text-primary'}>{timeLeft}s</span></span>
                  <span>Words typed: {typedText.split(/\s+/).filter(Boolean).length}</span>
                </div>
                <textarea
                  value={typedText}
                  onChange={(e) => setTypedText(e.target.value)}
                  disabled={testState === 'finished'}
                  placeholder="Start typing here..."
                  className="w-full min-h-[260px] rounded-3xl border border-slate-200 bg-white p-4 text-sm text-slate-900 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/10"
                />
              </div>
            )}

            {testState === 'finished' && result && (
              <div className="mt-6 rounded-3xl border border-slate-200 bg-white p-6 text-center">
                <p className="mt-3 text-lg font-semibold text-primary">Nice! You type with the speed of {result.wpm} WPM ({result.cpm} CPM).</p>
                <p className="mt-2 text-sm text-slate-700">Your accuracy was {result.accuracy}%. Keep practicing!</p>
                <div className="mt-4 grid gap-2 text-sm text-slate-700">
                  <p><span className="font-bold text-slate-900">Correct words:</span> {result.correctWords}</p>
                  <p><span className="font-bold text-slate-900">Incorrect words:</span> {result.incorrectWords}</p>
                  <p><span className="font-bold text-slate-900">Correct letters:</span> {result.correctChars}</p>
                  <p><span className="font-bold text-slate-900">Incorrect letters:</span> {result.incorrectChars}</p>
                </div>
                <button type="button" onClick={resetTypingTest} className="btn-secondary mt-5 px-6 py-3 text-sm">
                  Try Again
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

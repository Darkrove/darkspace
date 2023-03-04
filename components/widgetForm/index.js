import React, { useState } from 'react';
import { CloseButton } from '../CloseButton';

import FeedbackTypeStep from './steps/FeedbackTypeStep';
import FeedbackContentStep from './steps/FeedbackContentStep';
import FeedbackSuccessStep from './steps/FeedbackSuccessStep';

const bugImageUrl = '/assets/bug.svg';
const ideiaImageUrl = '/assets/idea.svg';
const thoughtImageUrl = '/assets/thought.svg';

export const feedbackTypes = {
  BUG: {
    title: 'Problems',
    image: {
      source: bugImageUrl,
      alt: 'Image of Bug',
    },
    form: "https://forms.gle/j4wyUGUq9CgmEZKX9",
  },
  IDEA: {
    title: 'Idea',
    image: {
      source: ideiaImageUrl,
      alt: 'Image of Lamp',
    },
    form: "https://forms.gle/VnaU8h9wVfQa9EdR8",
  },
  OTHER: {
    title: 'Other',
    image: {
      source: thoughtImageUrl,
      alt: 'Imagem of Thought',
    },
    form: "https://forms.gle/Vab3EW3ATFup7TFd6",
  },
};

// export type FeedbackType = keyof typeof feedbackTypes;

export function WidgetForm() {
  const [feedbackType, setFeedbackType] = useState(null);
  const [feedbackSent, setFeedbackSent] = useState(false);

  function handleRestartFeedback() {
    setFeedbackSent(false);
    setFeedbackType(null);
  }

  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      {feedbackSent ? (
        <FeedbackSuccessStep onFeedbackRestartRequested={handleRestartFeedback} />
      ) : (
        <>
          {!feedbackType ? (
            <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
          ) : (
            <FeedbackContentStep
              onFeedbackRestartRequested={handleRestartFeedback}
              feedbackType={feedbackType}
              onFeedbackSent={() => setFeedbackSent(true)}
            />
          )}
        </>
      )}

      <footer className="text-xs text-neutral-400">
        Made with 💜 by{' '}
        <a className="underline-offset-1">Darkspace</a>
      </footer>
    </div>
  );
}

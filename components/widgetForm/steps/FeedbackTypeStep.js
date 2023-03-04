import Image from "next/image"
import React from "react"
import { feedbackTypes } from '..';
import { CloseButton } from '../../CloseButton';


export default function FeedbackTypeStep({ onFeedbackTypeChanged }) {
  return (
    <>
      <header>
        <span className="text-xl leading-6">
          Leave your feedback
        </span>
        <CloseButton />
      </header>

      <div className="flex py-8 gap-2 w-full">
        {Object.entries(feedbackTypes).map(([key, value]) => {
          return (
            <a
              key={key}
              className="bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none"
              type="button"
              href={value.form}
              rel="noopener noreferrer"
              target="_blank"
            >
              <Image width={50} height={50} src={value.image.source} alt={value.image.alt} />
              <span>{value.title}</span>
            </a>
          );
        })}
      </div>
    </>
  );
}

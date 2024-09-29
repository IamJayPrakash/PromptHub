import Link from "next/link";
import React from "react";

const Form = ({type, post, setPost, submitting, handleSubmit}) => {
  return (
    <section className="flex-col w-full max-w-full flex-start">
      <h1 className="text-left head_text">
        <span className="blue_gradient">{type} Post</span>
      </h1>
      <p className="max-w-md text-left desc">
        {type} and share amazing prompts with the world and let your imagination
        run wild with any AI-powered platform
      </p>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col w-full mt-10 max-2xl gap-7 glassmorphism"
      >
        <label>
          <span className="text-base font-semibold text-gray-700 font-satoshi">
            Your AI Prompt
          </span>
        </label>
        <textarea
          required
          value={post.prompt}
          onChange={(e) => {
            setPost({ ...post, prompt: e.target.value });
          }}
          placeholder="Write your prompt here"
          className="form_textarea"
        />
        <label>
          <span className="text-base font-semibold text-gray-700 font-satoshi">
            Tag{" "}
            <span className="font-normal">
              (#product, #webDevelopment, #idea ,#tech)
            </span>
          </span>
        </label>
        <input
          value={post.tag}
          onChange={(e) => {
            setPost({ ...post, tag: e.target.value });
          }}
          placeholder="#tag"
          className="form_input"
        />
        <div className="gap-4 mx-3 mb-5 flex-end">
          <Link href="/" className="text-sm text-gray-500">
            Cancel
          </Link>
          <button
            disabled={submitting}
            title="Create Prompt"
            type="submit"
            className="px-5 py-1.5 text-sm bg-primary-red rounded-full text-white"
          >
            {submitting ? `${type}...` : type}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;

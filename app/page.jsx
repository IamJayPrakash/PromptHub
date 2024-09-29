import React from "react";
import Feed from "@components/Feed";

const Home = () => {
  return (
    <section className="flex-col w-full flex-center">
      <h1 className="text-center head_text">
        Discover and share
        <br className="max-md:hidden" />
        <span className="text-center red_gradient">AI-Powered prompts</span>
      </h1>
      <p className="text-center desc">
        PromptHub is an open-source AI prompting tool for modern world to
        discover, create and share creative prompts
      </p>
      <Feed />
    </section>
  );
};

export default Home;

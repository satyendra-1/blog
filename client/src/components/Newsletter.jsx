import React from "react";

const Newsletter = () => {
  return (
    <div className='flex flex-col items-center justify-center text-center space-y-6 my-32 px-4'>
      <h1 className='md:text-4xl text-2xl font-semibold'>
        Never Miss a Blog!
      </h1>
      <p className='md:text-lg text-gray-500/70 max-w-xl'>
        Subscribe to get the latest blog, new tech, and exclusive news.
      </p>

      <form className="flex w-full max-w-xl h-12">
        <input
          type="email"
          placeholder="Enter your email address"
          required
          className="flex-1 border border-gray-300 rounded-l-md px-4 text-gray-600 text-sm outline-none"
        />
        <button
          type="submit"
          className="bg-purple-600 hover:bg-purple-700 text-white px-6 md:px-10 rounded-r-md text-sm font-semibold transition-all"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default Newsletter;

import React from 'react';

interface IRecentPostsProps {}

export const RecentPosts: React.FC<IRecentPostsProps> = () => {
  return (
    <section>
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
          <h2 className="mb-4 text-3xl uppercase lg:text-4xl tracking-tight font-medium">Our Blog</h2>
          <p className="font-light sm:text-xl">
            We like to distribute our news and support knowledgebase with ease to our users.
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-2">
          <article className="p-6 rounded-lg border border-gray-200 shadow-md">
            <div className="flex justify-between items-center mb-5">
              <span className="bg-slate-200 text-black text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded">
                <svg
                  className="mr-1 w-3 h-3"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
                </svg>
                Article
              </span>
              <span className="text-sm">Jan 10, 2020</span>
            </div>
            <h2 className="mb-2 text-2xl font-bold tracking-tight">
              <a href="#">How to distribute music in multiple stores?</a>
            </h2>
            <p className="mb-5 font-light">
              Hello Artists, Let's start by following a quick guide and file your claim on youtube content. We handle
              that with much ease for you. All you need to do is to follow this quick guide. Let's Start....
            </p>
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-4">
                <img
                  className="w-7 h-7 rounded-full"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
                  alt="Jese Leos avatar"
                />
                <span className="font-medium">Nishant Mehra</span>
              </div>
              <a href="#" className="inline-flex items-center font-medium hover:underline">
                Read more
              </a>
            </div>
          </article>
          <article className="p-6 rounded-lg border border-gray-200 shadow-md">
            <div className="flex justify-between items-center mb-5">
              <span className="bg-slate-200 text-black text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded">
                <svg
                  className="mr-1 w-3 h-3"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
                </svg>
                Article
              </span>
              <span className="text-sm">Jan 10, 2020</span>
            </div>
            <h2 className="mb-2 text-2xl font-bold tracking-tight">
              <a href="#">Quickly Create YouTube Copyright Claim?</a>
            </h2>
            <p className="mb-5 font-light">
              Hello Artists, Let's start by following a quick guide and file your claim on youtube content. We handle
              that with much ease for you. All you need to do is to follow this quick guide. Let's Start....
            </p>
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-4">
                <img
                  className="w-7 h-7 rounded-full"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
                  alt="Jese Leos avatar"
                />
                <span className="font-medium">Nishant Mehra</span>
              </div>
              <a href="#" className="inline-flex items-center font-medium hover:underline">
                Read more
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

import React from 'react';

interface IFeaturesSectionProps {}

export const FeaturesSection: React.FC<IFeaturesSectionProps> = () => {
  return (
    <section className="space-y-16 container xl:max-w-7xl mx-auto px-4 py-16 lg:px-8 lg:py-32">
      {/* Heading */}
      <div className="text-center">
        <div className="text-sm uppercase font-bold tracking-wider mb-1 text-indigo-700">Created with passion</div>
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">What does Mehra Records Offer?</h2>
        <h3 className="text-lg md:text-xl md:leading-relaxed font-medium text-gray-600 lg:w-2/3 mx-auto">
          Distribute music with ease latest tech market security. Let&apos;s see a small list of features that we offer
          and use them to build artist trust.
        </h3>
      </div>
      {/* END Heading */}
      {/* Features */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
        <div className="group p-5 transition ease-out duration-200 border border-transparent rounded-2xl hover:border-gray-200">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 m-5 mb-12 relative">
              <div className="absolute inset-0 rounded-3xl -m-5 transform rotate-3 bg-orange-300 transition ease-out duration-200 group-hover:-rotate-3 group-hover:scale-105 group-hover:shadow-lg" />
              <div className="absolute inset-0 rounded-2xl -m-2 transform -rotate-3 bg-orange-700 bg-opacity-75 shadow-inner transition ease-out duration-200 group-hover:rotate-2 group-hover:scale-105" />
              <svg
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="text-white relative transform transition ease-out duration-200 group-hover:scale-110 hi-outline hi-adjustments inline-block w-8 h-8">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                />
              </svg>
            </div>
          </div>
          <h4 className="text-lg font-bold mb-2 text-center">Fastest Approval Time</h4>
          <p className="leading-relaxed text-gray-600">
            we approve your song very fast with no time. We deliver on all platforms minimum (1-5 Days) Maximum(5-10
            Days)
          </p>
        </div>
        <div className="group p-5 transition ease-out duration-200 border border-transparent rounded-2xl hover:border-gray-200">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 m-5 mb-12 relative">
              <div className="absolute inset-0 rounded-3xl -m-5 transform rotate-3 bg-red-300 transition ease-out duration-200 group-hover:-rotate-3 group-hover:scale-105 group-hover:shadow-lg" />
              <div className="absolute inset-0 rounded-2xl -m-2 transform -rotate-3 bg-red-700 bg-opacity-75 shadow-inner transition ease-out duration-200 group-hover:rotate-2 group-hover:scale-105" />
              <svg
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="text-white relative transform transition ease-out duration-200 group-hover:scale-110 hi-outline hi-chart-pie inline-block w-8 h-8">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
                />
              </svg>
            </div>
          </div>
          <h4 className="text-lg font-bold mb-2 text-center">Custom CRBT(Call Ring Back Tone)</h4>
          <p className="leading-relaxed text-gray-600">
            Creates 1-4 custom caller tune for Airtel, VI, Bsnl, &amp; 45 Sec single Jiotune. Deliver caller tune Min.
            (1-5 days) max. (5-8 days)
          </p>
        </div>
        <div className="group p-5 transition ease-out duration-200 border border-transparent rounded-2xl hover:border-gray-200">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 m-5 mb-12 relative">
              <div className="absolute inset-0 rounded-3xl -m-5 transform rotate-3 bg-emerald-300 transition ease-out duration-200 group-hover:-rotate-3 group-hover:scale-105 group-hover:shadow-lg" />
              <div className="absolute inset-0 rounded-2xl -m-2 transform -rotate-3 bg-emerald-700 bg-opacity-75 shadow-inner transition ease-out duration-200 group-hover:rotate-2 group-hover:scale-105" />
              <svg
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="text-white relative transform transition ease-out duration-200 group-hover:scale-110 hi-outline hi-globe inline-block w-8 h-8">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
          </div>
          <h4 className="text-lg font-bold mb-2 text-center">Free ISRC and UPC code</h4>
          <p className="leading-relaxed text-gray-600">
            If you are a new artist no worry we provide you a fresh unlimited artist UPC or ISRC code for your every
            Audio & Video Album.
          </p>
        </div>
        <div className="group p-5 transition ease-out duration-200 border border-transparent rounded-2xl hover:border-gray-200">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 m-5 mb-12 relative">
              <div className="absolute inset-0 rounded-3xl -m-5 transform rotate-3 bg-purple-300 transition ease-out duration-200 group-hover:-rotate-3 group-hover:scale-105 group-hover:shadow-lg" />
              <div className="absolute inset-0 rounded-2xl -m-2 transform -rotate-3 bg-purple-700 bg-opacity-75 shadow-inner transition ease-out duration-200 group-hover:rotate-2 group-hover:scale-105" />
              <svg
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="text-white relative transform transition ease-out duration-200 group-hover:scale-110 hi-outline hi-lightning-bolt inline-block w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
          </div>
          <h4 className="text-lg font-bold mb-2 text-center">95% Royalty</h4>
          <p className="leading-relaxed text-gray-600">
            Get Your Monthly Reports with no changes we send you original reports with cut our percentage we don’t hide
            anything.
          </p>
        </div>
        <div className="group p-5 transition ease-out duration-200 border border-transparent rounded-2xl hover:border-gray-200">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 m-5 mb-12 relative">
              <div className="absolute inset-0 rounded-3xl -m-5 transform rotate-3 bg-blue-300 transition ease-out duration-200 group-hover:-rotate-3 group-hover:scale-105 group-hover:shadow-lg" />
              <div className="absolute inset-0 rounded-2xl -m-2 transform -rotate-3 bg-blue-700 bg-opacity-75 shadow-inner transition ease-out duration-200 group-hover:rotate-2 group-hover:scale-105" />
              <svg
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="text-white relative transform transition ease-out duration-200 group-hover:scale-110 hi-outline hi-puzzle inline-block w-8 h-8">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
                />
              </svg>
            </div>
          </div>
          <h4 className="text-lg font-bold mb-2 text-center">Custom Record Label</h4>
          <p className="leading-relaxed text-gray-600">
            Get Your Custom C and P Line, Custom Label Name, Unlimited Lifetime Releases, with Unlimited artist .
          </p>
        </div>
        <div className="group p-5 transition ease-out duration-200 border border-transparent rounded-2xl hover:border-gray-200">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 m-5 mb-12 relative">
              <div className="absolute inset-0 rounded-3xl -m-5 transform rotate-3 bg-pink-300 transition ease-out duration-200 group-hover:-rotate-3 group-hover:scale-105 group-hover:shadow-lg" />
              <div className="absolute inset-0 rounded-2xl -m-2 transform -rotate-3 bg-pink-700 bg-opacity-75 shadow-inner transition ease-out duration-200 group-hover:rotate-2 group-hover:scale-105" />
              <svg
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="text-white relative transform transition ease-out duration-200 group-hover:scale-110 hi-outline hi-users inline-block w-8 h-8">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            </div>
          </div>
          <h4 className="text-lg font-bold mb-2 text-center">One Time Payment​</h4>
          <p className="leading-relaxed text-gray-600">
            Pay Once Your song lives for Life Time. Accepted Payment through NEFT PayTM, GPay, PayPal, UPI, PhonePe,
            etc.
          </p>
        </div>
      </div>
      {/* END Features */}
    </section>
  );
};

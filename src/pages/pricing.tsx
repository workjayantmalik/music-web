import { NextPage } from 'next';
import { PublicContainer } from '~containers';

interface IPricingPageProps {}

const PricingPage: NextPage<IPricingPageProps> = () => {
  return (
    <PublicContainer>
      {/* Pricing Section: Single Payment Option */}
      <div className="relative bg-gray-100">
        <div className="absolute top-0 right-0 left-0 h-96 lg:h-2/3 bg-gray-50" />
        <div className="relative space-y-16 container xl:max-w-7xl mx-auto px-4 py-16 lg:px-8 lg:py-32">
          {/* Heading */}
          <div className="text-center">
            <div className="text-sm uppercase font-bold tracking-wider mb-1 text-indigo-700">Get it today</div>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Honest and affordable pricing</h2>
            <h3 className="text-lg md:text-xl md:leading-relaxed font-medium text-gray-600 lg:w-2/3 mx-auto">
              Get started easily and trouble free. Cancel anytime you want without hidden fees.
            </h3>
          </div>
          {/* END Heading */}
          {/* Pricing Plan */}
          <article className="rounded-lg bg-white shadow-lg xl:mx-24">
            <div className="md:flex items-center rounded-lg ring-1 ring-black ring-opacity-5">
              <div className="grow p-5 lg:p-6">
                <h4 className="text-xl font-bold mb-1">1 Song without callertune</h4>
                <p className="leading-relaxed text-gray-500 mb-5">
                  Get access to all available live platforms and build influence and trust.
                </p>
                <h5 className="flex items-center my-8">
                  <span className="text-sm uppercase tracking-wide text-indigo-600 font-semibold mr-3">
                    Best Features Included
                  </span>{' '}
                  <span aria-hidden="true" className="grow bg-indigo-50 rounded h-0.5" />
                </h5>
                <div className="lg:flex lg:space-x-12 space-y-4 lg:space-y-0 font-medium">
                  <ul className="space-y-4 text-sm">
                    <li className="flex items-center space-x-2">
                      <svg
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-emerald-500 hi-solid hi-check-circle inline-block w-5 h-5">
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>
                        <strong>300+</strong> Streaming Platforms
                      </span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <svg
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-emerald-500 hi-solid hi-check-circle inline-block w-5 h-5">
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>
                        <strong>Unlimited</strong> Song availability
                      </span>
                    </li>
                  </ul>
                  <ul className="space-y-4 text-sm">
                    <li className="flex items-center space-x-2">
                      <svg
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-emerald-500 hi-solid hi-check-circle inline-block w-5 h-5">
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>
                        <strong>95%</strong> Royalties
                      </span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <svg
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-emerald-500 hi-solid hi-check-circle inline-block w-5 h-5">
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>
                        <strong>Monthly</strong> Reports
                      </span>
                    </li>
                  </ul>
                  <ul className="space-y-4 text-sm">
                    <li className="flex items-center space-x-2">
                      <svg
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-emerald-500 hi-solid hi-check-circle inline-block w-5 h-5">
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>
                        <strong>Youtube</strong> Content ID
                      </span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <svg
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-emerald-500 hi-solid hi-check-circle inline-block w-5 h-5">
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>
                        <strong>24</strong> Hour approval
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex-none relative md:w-72 p-5">
                <div className="absolute mt-5 mr-5 top-0 right-0 h-10 w-10 flex items-center justify-center text-orange-400">
                  <svg
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    className="hi-solid hi-bookmark inline-block w-6 h-6">
                    <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
                  </svg>
                </div>
                <div className="p-5 lg:p-6 text-center rounded-lg bg-indigo-50">
                  <span className="inline-flex space-x-1 items-center text-xs uppercase tracking-wider font-semibold px-3 py-1 bg-indigo-200 bg-opacity-50 text-indigo-600 rounded-full mb-4">
                    <span>LIMITED PERIOD OFFER</span>
                  </span>
                  <div className="text-3xl lg:text-4xl font-extrabold mb-1">Rs. 549</div>
                  <p className="text-gray-600 text-sm font-medium mb-5">Per Song</p>
                  <a
                    href="javascript:void(0)"
                    className="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none w-full px-4 py-3 leading-6 rounded border-indigo-700 bg-indigo-700 text-white hover:text-white hover:bg-indigo-800 hover:border-indigo-800 focus:ring focus:ring-indigo-500 focus:ring-opacity-50 active:bg-indigo-700 active:border-indigo-700">
                    <svg
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                      className="opacity-50 hi-solid hi-shopping-cart inline-block w-5 h-5">
                      <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                    </svg>
                    <span>Purchase</span>
                  </a>
                </div>
              </div>
            </div>
          </article>
          {/* END Pricing Plan */}

          {/* Pricing Plan */}
          <article className="rounded-lg bg-white shadow-lg xl:mx-24">
            <div className="md:flex items-center rounded-lg ring-1 ring-black ring-opacity-5">
              <div className="grow p-5 lg:p-6">
                <h4 className="text-xl font-bold mb-1">1 Song + callertune</h4>
                <p className="leading-relaxed text-gray-500 mb-5">
                  Get access to all available live platforms and build influence and trust.
                </p>
                <h5 className="flex items-center my-8">
                  <span className="text-sm uppercase tracking-wide text-indigo-600 font-semibold mr-3">
                    Best Features Included
                  </span>{' '}
                  <span aria-hidden="true" className="grow bg-indigo-50 rounded h-0.5" />
                </h5>
                <div className="lg:flex lg:space-x-12 space-y-4 lg:space-y-0 font-medium">
                  <ul className="space-y-4 text-sm">
                    <li className="flex items-center space-x-2">
                      <svg
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-emerald-500 hi-solid hi-check-circle inline-block w-5 h-5">
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>
                        <strong>300+</strong> Streaming Platforms
                      </span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <svg
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-emerald-500 hi-solid hi-check-circle inline-block w-5 h-5">
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>
                        <strong>Callertune</strong> Facility
                      </span>
                    </li>

                    <li className="flex items-center space-x-2">
                      <svg
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-emerald-500 hi-solid hi-check-circle inline-block w-5 h-5">
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>
                        <strong>Unlimited</strong> Song availability
                      </span>
                    </li>
                  </ul>

                  <ul className="space-y-4 text-sm">
                    <li className="flex items-center space-x-2">
                      <svg
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-emerald-500 hi-solid hi-check-circle inline-block w-5 h-5">
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>
                        <strong>95%</strong> Royalties
                      </span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <svg
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-emerald-500 hi-solid hi-check-circle inline-block w-5 h-5">
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>
                        <strong>Monthly</strong> Reports
                      </span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <svg
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-emerald-500 hi-solid hi-check-circle inline-block w-5 h-5">
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>
                        <strong>No</strong> yearly charges
                      </span>
                    </li>
                  </ul>

                  <ul className="space-y-4 text-sm">
                    <li className="flex items-center space-x-2">
                      <svg
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-emerald-500 hi-solid hi-check-circle inline-block w-5 h-5">
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>
                        <strong>Youtube</strong> Content ID
                      </span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <svg
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-emerald-500 hi-solid hi-check-circle inline-block w-5 h-5">
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>
                        <strong>24</strong> Hour approval
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex-none relative md:w-72 p-5">
                <div className="absolute mt-5 mr-5 top-0 right-0 h-10 w-10 flex items-center justify-center text-orange-400">
                  <svg
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    className="hi-solid hi-bookmark inline-block w-6 h-6">
                    <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
                  </svg>
                </div>
                <div className="p-5 lg:p-6 text-center rounded-lg bg-indigo-50">
                  <span className="inline-flex space-x-1 items-center text-xs uppercase tracking-wider font-semibold px-3 py-1 bg-indigo-200 bg-opacity-50 text-indigo-600 rounded-full mb-4">
                    <span>One Time Payment</span>
                  </span>
                  <div className="text-3xl lg:text-4xl font-extrabold mb-1">Rs. 549</div>
                  <p className="text-gray-600 text-sm font-medium mb-5">Per Song</p>
                  <a
                    href="javascript:void(0)"
                    className="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none w-full px-4 py-3 leading-6 rounded border-indigo-700 bg-indigo-700 text-white hover:text-white hover:bg-indigo-800 hover:border-indigo-800 focus:ring focus:ring-indigo-500 focus:ring-opacity-50 active:bg-indigo-700 active:border-indigo-700">
                    <svg
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                      className="opacity-50 hi-solid hi-shopping-cart inline-block w-5 h-5">
                      <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                    </svg>
                    <span>Purchase</span>
                  </a>
                </div>
              </div>
            </div>
          </article>
          {/* END Pricing Plan */}
        </div>
      </div>
      {/* END Pricing Section: Single Payment Option */}
    </PublicContainer>
  );
};

export default PricingPage;

import { NextPage } from 'next';
import { Avatar } from '~common/Avatar';
import { PublicContainer } from '~containers';

interface IContactPageProps {}

const ContactPage: NextPage<IContactPageProps> = () => {
  return (
    <PublicContainer>
      {/* Contact Section: Split */}
      <div className="relative bg-gray-50 flex items-center overflow-hidden">
        <div className="absolute top-0 right-0 bottom-0 w-full lg:w-1/2 bg-white" />
        <div className="relative container xl:max-w-7xl mx-auto px-4 py-16 lg:px-8 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-0">
            {/* Heading */}
            <div className="flex items-center lg:px-14 xl:px-28 space-y-6">
              <div className="w-full">
                <div className="text-sm uppercase font-bold tracking-wider mb-1 text-indigo-700">We reply in 24hrs</div>
                <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Get in touch</h2>
                <h3 className="text-lg md:text-xl md:leading-relaxed font-medium text-gray-600">
                  If something does not make sense, feel free to contact us and we will get back to you as soon as
                  possible.
                </h3>
                <h4 className="uppercase text-sm font-semibold tracking-wider mt-12 mb-2">
                  Mehra Records Entertainment
                </h4>
                <div className="leading-relaxed">
                  Street 1, Near CSC Center
                  <br />
                  Kalanaur, IN 143512
                  <br />
                  <abbr title="Phone">Ph:</abbr> (123) 456-7890
                  <br />
                  <p>
                    Google Maps:{' '}
                    <a
                      className="cursor-pointer text-indigo-400 hover:text-indigo-600"
                      rel="noreferrer"
                      target="_blank"
                      href="https://www.google.com/maps/search/Mehra%20Records%20Entertainment/@28.8237,76.3976,17z?hl=en">
                      See location on map
                    </a>
                  </p>
                </div>
              </div>
            </div>
            {/* END Heading */}
            {/* Contact Form */}
            <div className="flex items-center lg:px-14 xl:px-20">
              <form onsubmit="return false;" className="space-y-6 w-full" _lpchecked={1}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-1">
                    <label htmlFor="tk-contact-firstname" className="font-medium">
                      First Name
                    </label>
                    <input
                      className="block border placeholder-gray-400 px-5 py-3 leading-6 w-full rounded border-gray-200 focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                      type="text"
                      id="tk-contact-firstname"
                    />
                  </div>
                  <div className="space-y-1">
                    <label htmlFor="tk-contact-lastname" className="font-medium">
                      Last Name
                    </label>
                    <input
                      className="block border placeholder-gray-400 px-5 py-3 leading-6 w-full rounded border-gray-200 focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                      type="text"
                      id="tk-contact-lastname"
                    />
                  </div>
                </div>
                <div className="space-y-1">
                  <label htmlFor="tk-contact-email" className="font-medium">
                    Email
                  </label>
                  <input
                    className="block border placeholder-gray-400 px-5 py-3 leading-6 w-full rounded border-gray-200 focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                    type="email"
                    id="tk-contact-email"
                  />
                </div>
                <div className="space-y-1">
                  <label htmlFor="tk-contact-message" className="font-medium">
                    Message
                  </label>
                  <textarea
                    className="block border border-gray-200 rounded placeholder-gray-400 px-5 py-3 w-full focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                    id="tk-contact-message"
                    rows={6}
                    defaultValue={''}
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-3 py-2 leading-6 rounded border-indigo-700 bg-indigo-700 text-white hover:text-white hover:bg-indigo-800 hover:border-indigo-800 focus:ring focus:ring-indigo-500 focus:ring-opacity-50 active:bg-indigo-700 active:border-indigo-700">
                  <svg
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    className="opacity-50 hi-solid hi-paper-airplane inline-block w-5 h-5">
                    <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                  </svg>
                  <span>Send Message</span>
                </button>
              </form>
            </div>
            {/* END Contact Form */}
          </div>
        </div>
      </div>
      {/* END Contact Section: Split */}
    </PublicContainer>
  );
};

export default ContactPage;

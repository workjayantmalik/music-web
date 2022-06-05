import clsx from 'clsx';
import React, { useState } from 'react';
import { Avatar } from '~common/Avatar';
import { __DOMAIN_NAME__ } from '~constants';
import { RoutesDict } from '~lib/RoutesDict';
import NextLink from 'next/link';

interface IDashboardContainerProps {
  children: React.ReactNode;
}

export const DashboardContainer: React.FC<IDashboardContainerProps> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState({ mobile: false, desktop: true });

  return (
    <main>
      {/* Page Container */}

      <div
        id="page-container"
        className={clsx(
          'flex flex-col mx-auto w-full min-h-screen bg-gray-100 lg:pl-64',
          isSidebarOpen.desktop ? 'lg:pl-64' : '',
        )}>
        {/* Page Sidebar */}

        <nav
          id="page-sidebar"
          className={clsx(
            'flex flex-col fixed top-0 left-0 bottom-0 w-full lg:w-64 h-full bg-white border-r border-gray-200 z-50 transform transition-transform duration-500 ease-out -translate-x-full lg:translate-x-0',
            isSidebarOpen.mobile ? 'translate-x-0' : '-translate-x-full',
            isSidebarOpen.desktop ? 'lg:translate-x-0' : 'lg:-translate-x-full',
          )}
          aria-label="Main Sidebar Navigation">
          {/* Sidebar Header */}
          <div className="h-32 my-4 flex-none flex items-center justify-between lg:justify-center px-4 w-full">
            {/* Brand */}
            <Avatar className="h-full" />

            {/* END Brand */}
            {/* Close Sidebar on Mobile */}
            <div className="lg:hidden">
              <button
                type="button"
                onClick={() => setIsSidebarOpen({ ...isSidebarOpen, mobile: false })}
                className="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-3 py-2 leading-5 text-sm rounded border-transparent text-red-600 hover:text-red-400 focus:ring border-red-500 focus:ring-red-500 focus:ring-opacity-50 active:text-red-600">
                <svg
                  className="hi-solid hi-x inline-block w-4 h-4 -mx-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
            {/* END Close Sidebar on Mobile */}
          </div>
          {/* END Sidebar Header */}
          {/* Sidebar Navigation */}
          <div className="overflow-y-auto">
            <div className="p-4 w-full">
              <nav className="space-y-1">
                <NextLink href={RoutesDict.portal.dashboard}>
                  <a className="flex items-center space-x-3 px-3 font-medium rounded text-gray-700 bg-gray-100">
                    <span className="flex-none flex items-center opacity-50">
                      <svg
                        className="hi-outline hi-home inline-block w-5 h-5"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                        />
                      </svg>
                    </span>
                    <span className="py-2 grow">Dashboard</span>
                  </a>
                </NextLink>
                <div className="px-3 pt-5 pb-2 text-xs font-medium uppercase tracking-wider text-gray-500">
                  control center
                </div>
                <NextLink href={RoutesDict.portal.reports}>
                  <a className="flex items-center space-x-3 px-3 font-medium rounded text-gray-600 hover:text-gray-700 hover:bg-gray-100 active:bg-gray-50">
                    <span className="flex-none flex items-center opacity-50">
                      <svg
                        className="hi-outline hi-view-grid inline-block w-5 h-5"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                        />
                      </svg>
                    </span>
                    <span className="py-2 grow">Flash Reports</span>
                  </a>
                </NextLink>

                <NextLink href={RoutesDict.portal.upload}>
                  <a className="flex items-center space-x-3 px-3 font-medium rounded text-gray-600 hover:text-gray-700 hover:bg-gray-100 active:bg-gray-50">
                    <span className="flex-none flex items-center opacity-50">
                      <svg
                        className="hi-outline hi-clipboard-list inline-block w-5 h-5"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                        />
                      </svg>
                    </span>
                    <span className="py-2 grow">New Upload</span>
                  </a>
                </NextLink>

                <div className="px-3 pt-5 pb-2 text-xs font-medium uppercase tracking-wider text-gray-500">Account</div>
                <a
                  href="#"
                  className="flex items-center space-x-3 px-3 font-medium rounded text-gray-600 hover:text-gray-700 hover:bg-gray-100 active:bg-gray-50">
                  <span className="flex-none flex items-center opacity-50">
                    <svg
                      className="hi-outline hi-user inline-block w-5 h-5"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </span>
                  <span className="py-2 grow">Profile</span>
                </a>
                <a
                  href="#"
                  className="flex items-center space-x-3 px-3 font-medium rounded text-gray-600 hover:text-gray-700 hover:bg-gray-100 active:bg-gray-50">
                  <span className="flex-none flex items-center opacity-50">
                    <svg
                      className="hi-outline hi-cog inline-block w-5 h-5"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </span>
                  <span className="py-2 grow">Settings</span>
                </a>
                <a
                  href="#"
                  className="flex items-center space-x-3 px-3 font-medium rounded text-gray-600 hover:text-gray-700 hover:bg-gray-100 active:bg-gray-50">
                  <span className="flex-none flex items-center opacity-50">
                    <svg
                      className="hi-outline hi-lock-open inline-block w-5 h-5 text-red-600"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z"
                      />
                    </svg>
                  </span>
                  <span className="py-2 grow">Log out</span>
                </a>
              </nav>
            </div>
          </div>
          {/* END Sidebar Navigation */}
        </nav>
        {/* Page Sidebar */}

        {/* Page Header */}
        <header
          id="page-header"
          className={clsx(
            'flex flex-none items-center h-16 bg-white shadow-sm fixed top-0 right-0 left-0 z-30 lg:pl-64',
            isSidebarOpen.desktop ? 'lg:pl-64' : '',
          )}>
          <div className="flex justify-between max-w-10xl mx-auto px-4 lg:px-8 w-full">
            {/* Left Section */}
            <div className="flex items-center space-x-2">
              {/* Toggle Sidebar on Desktop */}
              <div className="hidden lg:block">
                <button
                  type="button"
                  onClick={() => setIsSidebarOpen({ ...isSidebarOpen, desktop: !isSidebarOpen.desktop })}
                  className="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-3 py-2 leading-6 rounded border-gray-300 bg-white text-gray-800 shadow-sm hover:text-gray-800 hover:bg-gray-100 hover:border-gray-300 hover:shadow focus:ring focus:ring-gray-500 focus:ring-opacity-25 active:bg-white active:border-white active:shadow-none">
                  <svg
                    className="hi-solid hi-menu-alt-1 inline-block w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      fillRule="evenodd"
                      d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
              {/* END Toggle Sidebar on Desktop */}
              {/* Toggle Sidebar on Mobile */}
              <div className="lg:hidden">
                <button
                  type="button"
                  onClick={() => setIsSidebarOpen({ ...isSidebarOpen, mobile: true })}
                  className="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-3 py-2 leading-6 rounded border-gray-300 bg-white text-gray-800 shadow-sm hover:text-gray-800 hover:bg-gray-100 hover:border-gray-300 hover:shadow focus:ring focus:ring-gray-500 focus:ring-opacity-25 active:bg-white active:border-white active:shadow-none">
                  <svg
                    className="hi-solid hi-menu-alt-1 inline-block w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      fillRule="evenodd"
                      d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
              {/* END Toggle Sidebar on Mobile */}
            </div>
            {/* END Left Section */}
            {/* Right Section */}
            <div className="flex items-center space-x-2">
              {/* Notifications */}
              <button
                type="button"
                className="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-3 py-2 leading-5 text-sm rounded border-gray-300 bg-white text-gray-800 shadow-sm hover:text-gray-800 hover:bg-gray-100 hover:border-gray-300 hover:shadow focus:ring focus:ring-gray-500 focus:ring-opacity-25 active:bg-white active:border-white active:shadow-none">
                <svg
                  className="hi-outline hi-bell inline-block w-5 h-5"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
                <span className="text-indigo-500">•</span>
              </button>
              {/* END Notifications */}
            </div>
            {/* END Right Section */}
          </div>
        </header>
        {/* END Page Header */}
        {/* Page Content */}
        <main id="page-content" className="flex flex-auto flex-col max-w-full pt-16">
          {/* Page Section */}
          <div className="max-w-10xl mx-auto p-4 lg:p-8 w-full">{children}</div>
          {/* END Page Section */}
        </main>
        {/* END Page Content */}
        {/* Page Footer */}
        <footer id="page-footer" className="flex flex-none items-center bg-white">
          <div className="text-center flex flex-col md:text-left md:flex-row md:justify-between text-sm max-w-10xl mx-auto px-4 lg:px-8 w-full">
            <div className="pt-4 pb-1 md:pb-4">
              <a
                href={__DOMAIN_NAME__}
                rel="noreferrer"
                target="_blank"
                className="font-medium text-indigo-600 hover:text-indigo-400">
                Mehra Records
              </a>{' '}
              © {new Date().getFullYear()}
            </div>
          </div>
        </footer>
        {/* END Page Footer */}
      </div>
      {/* END Page Container */}
    </main>
  );
};

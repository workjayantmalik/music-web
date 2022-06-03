import { NextPage } from 'next';
import { PlatformStatsCard } from 'src/components/reports/PlatformStatsCard';
import { DashboardContainer } from '~containers';
import { PlatformMonthWiseStatsCard } from '~reports/PlatformMonthWiseStatsCard';

interface IReportsPageProps {}

const ReportsPage: NextPage<IReportsPageProps> = () => {
  return (
    <DashboardContainer>
      <section>
        {/* Page Heading with Actions and Breadcrumb */}
        <div className="text-center sm:text-left sm:flex sm:items-center sm:justify-between sm:border-b-2 sm:border-gray-200 mb-4 lg:mb-8">
          <div className="py-3 space-y-1">
            {/* Breadcrumb */}
            <nav>
              <ol className="flex items-center justify-center sm:justify-start">
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-500">
                    Dashboard
                  </a>
                </li>
                <li className="flex items-center px-1 sm:px-2 opacity-25">
                  <svg
                    className="hi-solid hi-chevron-right inline-block w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-500">
                    Accounts
                  </a>
                </li>
                <li className="flex items-center px-1 sm:px-2 opacity-25">
                  <svg
                    className="hi-solid hi-chevron-right inline-block w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-500">
                    All
                  </a>
                </li>
              </ol>
            </nav>
            {/* END Breadcrumb */}
            <h2 className="text-2xl font-bold mt-4">Your Reports</h2>
          </div>
        </div>
        {/* END Page Heading with Breadcrumb */}

        {/* Placeholder */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8">
          <PlatformStatsCard />
          <PlatformMonthWiseStatsCard />
        </section>
      </section>
    </DashboardContainer>
  );
};

export default ReportsPage;

import { NextPage } from 'next';
import { DashboardContainer } from '~containers';
import { QuickStatsGraph } from '~dashboard/QuickStatsGraph';
import { StatCards } from '~dashboard/StatCards';
import { WeeklyTunesCard } from '~dashboard/WeeklyTunesCard';

interface IDashboardPageProps {}

const DashboardPage: NextPage<IDashboardPageProps> = () => {
  return (
    <DashboardContainer>
      <StatCards className="mb-5" active={10} total={20} approved={16} blocked={2} pending={2} />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 mb-5">
        <QuickStatsGraph />
        <WeeklyTunesCard />
      </div>
    </DashboardContainer>
  );
};

export default DashboardPage;

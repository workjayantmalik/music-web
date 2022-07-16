import { NextPage } from 'next';
import { PublicContainer } from '~containers';
import { DistributionPlatformsSection } from '~welcome/DistributionPlatformsSection';
import { FeaturesSection } from '~welcome/FeaturesSection';
import { Hero } from '~welcome/Hero';
import { RecentPosts } from '~welcome/RecentPosts';

interface IHomePageProps {}

const HomePage: NextPage<IHomePageProps> = () => {
  return (
    <PublicContainer>
      <div className="pb-12 container xl:max-w-7xl mx-auto px-4 lg:px-10">
        <Hero />
        <div className="space-y-16">
          <DistributionPlatformsSection />
          <FeaturesSection />
          <RecentPosts />
        </div>
      </div>
    </PublicContainer>
  );
};

export default HomePage;

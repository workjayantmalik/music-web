import { NextPage } from 'next';
import { PublicContainer } from '~containers';

interface IFeaturesPageProps {}

const FeaturesPage: NextPage<IFeaturesPageProps> = () => {
  return (
    <PublicContainer>
      <section>
        <h1>Jai, Hind!</h1>
        <p>Welcome, to FeaturesPage!</p>
      </section>
    </PublicContainer>
  );
};

export default FeaturesPage;

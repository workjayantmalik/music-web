import { GetServerSideProps, NextPage } from 'next';
import { RoutesDict } from '~lib/RoutesDict';

interface IRedirectPageProps {}

const RedirectPage: NextPage<IRedirectPageProps> = () => {
  return (
    <main>
      <h1>Jai, Hind!</h1>
      <p>Welcome, to RedirectPage!</p>
    </main>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  return { redirect: { permanent: true, destination: RoutesDict.portal.dashboard } };
};

export default RedirectPage;

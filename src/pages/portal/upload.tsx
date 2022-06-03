import { NextPage } from 'next';
import { Input } from '~upload/Input';
import { DashboardContainer } from '~containers';
import { useState } from 'react';
import { IconUser } from '~icons/IconUser';
import { UploadForm } from '~upload/UploadForm';

interface IUploadPageProps {}

const UploadPage: NextPage<IUploadPageProps> = () => {
  const [state, setState] = useState({ title: '' });

  const titleValidator = (value: string): string | void => {
    if (!!!value.trim()) return 'Title is required.';
  };
  return (
    <DashboardContainer>
      <form className="space-y-6">
        <UploadForm />
      </form>
    </DashboardContainer>
  );
};

export default UploadPage;

import { NextPage } from 'next';
import { Input } from '~upload/Input';
import { DashboardContainer } from '~containers';
import { useState } from 'react';
import { IconUser } from '~icons/IconUser';

interface IUploadPageProps {}

const UploadPage: NextPage<IUploadPageProps> = () => {
  const [state, setState] = useState({ title: '' });

  const titleValidator = (value: string): string | void => {
    if (!!!value.trim()) return 'Title is required.';
  };
  return (
    <DashboardContainer>
      <form className="space-y-6">
        <Input
          icon={IconUser}
          label="Title"
          required
          placeholder="Bum Bum Bhole"
          value={state.title}
          validate={titleValidator}
          onInput={title => setState({ ...state, title: title })}
        />
      </form>
    </DashboardContainer>
  );
};

export default UploadPage;

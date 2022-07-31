import { CRow } from '@coreui/react';
import { AccountPageRootProvider } from './provider';
import { AccountPageBottom, AccountPageTop } from './views';

const AccountPage = () => {
  return (
    <AccountPageRootProvider>
      <CRow className="mb-3">
        <AccountPageTop />
      </CRow>
      <CRow className="mb-3">
        <AccountPageBottom />
      </CRow>
    </AccountPageRootProvider>
  );
};

export default AccountPage;

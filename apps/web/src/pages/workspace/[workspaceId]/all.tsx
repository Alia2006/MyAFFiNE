import { useTranslation } from '@affine/i18n';
import { AllPagesIcon } from '@blocksuite/icons';
import Head from 'next/head';
import { ReactElement, useCallback } from 'react';

import { PageListHeader } from '@/components/header';
import { PageList } from '@/components/page-list';
import WorkspaceLayout from '@/components/workspace-layout';
import { PageMeta } from '@/providers/app-state-provider';
import { useGlobalState } from '@/store/app';

const All = () => {
  const currentWorkspace = useGlobalState(
    useCallback(store => store.currentDataCenterWorkspace, [])
  );
  const pageList = (currentWorkspace?.blocksuiteWorkspace?.meta.pageMetas ||
    []) as PageMeta[];
  const { t } = useTranslation();
  return (
    <>
      <Head>
        <title>{t('All pages')} - AFFiNE</title>
      </Head>
      <PageListHeader icon={<AllPagesIcon />}>{t('All pages')}</PageListHeader>
      <PageList
        pageList={pageList.filter(p => !p.trash)}
        showFavoriteTag={true}
        listType="all"
      />
    </>
  );
};

All.getLayout = function getLayout(page: ReactElement) {
  return <WorkspaceLayout>{page}</WorkspaceLayout>;
};

export default All;

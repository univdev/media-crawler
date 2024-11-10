import { MantineProvider as OriginalMantineProvider } from '@mantine/core';
import { FC, ReactNode } from 'react';

export type IMantineProviderProps = {
  children: ReactNode;
}

export const MantineProvider: FC<IMantineProviderProps> = ({
  children,
}) => {
  return (
    <OriginalMantineProvider>
      { children }
    </OriginalMantineProvider>
  );
};

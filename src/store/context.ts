import { ApplicationStore } from '@mobileSenior/store/store';
import { useDefinedContext } from '@mobileSenior/utils/useDefinedContext';
import { createContext } from 'react';

export const ApplicationContext = createContext<ApplicationStore | undefined>(
  undefined,
);

export const useApplicationContext = (): ApplicationStore =>
  useDefinedContext(ApplicationContext);

import { ApplicationContext } from '@mobileSenior/store/context';
import { useCreateApplicationStore } from '@mobileSenior/store/store';
import { PropsWithChildren } from 'react';

export const ApplicationContextProvider = (props: PropsWithChildren) => {
  const store = useCreateApplicationStore();

  return (
    <ApplicationContext.Provider value={store}>
      {props.children}
    </ApplicationContext.Provider>
  );
};

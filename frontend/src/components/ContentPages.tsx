//import { ReactNode } from 'react';
import * as Pag from './stylePages';

type TypeContentPages = {
  children?: React.ReactNode | JSX.Element;
};
export const ContentPages = ({ children }: TypeContentPages) => {
  return (
    <Pag.ContainerPg>
      <Pag.ContainerFlexPg>{children}</Pag.ContainerFlexPg>
    </Pag.ContainerPg>
  );
};

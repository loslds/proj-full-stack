import * as Pag from './stylePages';

interface PropsContentPages {
  children?: React.ReactNode | JSX.Element;
};
export const ContentPages = ({ children }: PropsContentPages ) => {
  return (
    <Pag.ContainerPg>
      <Pag.ContainerFlexPg>{children}</Pag.ContainerFlexPg>
    </Pag.ContainerPg>
  );
};

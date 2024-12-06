import * as Pg from './stylePages';

interface PropsContentCardBoxCenterPg {
  pwidth?: string;
  children?: React.ReactNode | JSX.Element;
}

export const ContentCardBoxCenterPage = ({
  pwidth,
  children,
}: PropsContentCardBoxCenterPg) => {
  return (
    <Pg.ContainerCardBoxCenterPage pwidth={pwidth}>
      <Pg.ContainerCardBoxCenterPageFlex>
        {children}
      </Pg.ContainerCardBoxCenterPageFlex>
    </Pg.ContainerCardBoxCenterPage>
  );
};

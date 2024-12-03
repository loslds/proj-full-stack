import * as Pg from '../stylePages';

///
import { ContentPages } from '../ContentPages';
//import  { HeaderPage }  from '../../components/hearders/HearderPage';
//import { FooterPage } from '../../footers/FooterPage';
//import { BarSideMenuPage } from '../../sidebar/BarSideMenuPage';
//import { BarSideMenuDados } from '../../sidebar/BarSideMenuDados';

interface PropsLayoutPage {
  children?: React.ReactNode | JSX.Element;
  open?: boolean;
}
const LayoutHome = ({ children }: PropsLayoutPage) => {
  return (
    <ContentPages>
      {/* <HearderPage /> */}
      <Pg.DivisionPgHztal />
      <Pg.ContainerBody>
        <Pg.ContainerPage>
          {/* <BarSideMenuPage /> */}
          {/* <BarSideMenuDados open={open} />  */}
          <Pg.DivisionPgHztal />
          {children}
        </Pg.ContainerPage>
      </Pg.ContainerBody>
      <Pg.DivisionPgHztal />
      {/* <FooterPage /> */}
    </ContentPages>
  );
};

export default LayoutHome;
